-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLES
-- =====================================================

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'admin')),
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    category TEXT,
    image_url TEXT,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped')),
    UNIQUE(student_id, course_id)
);

-- Assignments table
CREATE TABLE IF NOT EXISTS assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    instructions TEXT,
    due_date TIMESTAMP WITH TIME ZONE,
    max_points INTEGER DEFAULT 100,
    assignment_type TEXT CHECK (assignment_type IN ('quiz', 'project', 'lab', 'homework')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Submissions table
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assignment_id UUID NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT,
    file_url TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'submitted', 'graded', 'returned')),
    score INTEGER CHECK (score >= 0),
    feedback TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    graded_at TIMESTAMP WITH TIME ZONE,
    graded_by UUID REFERENCES users(id),
    UNIQUE(assignment_id, student_id)
);

-- Course modules/lessons table
CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT,
    video_url TEXT,
    order_index INTEGER NOT NULL,
    duration_minutes INTEGER,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lesson progress tracking
CREATE TABLE IF NOT EXISTS lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMP WITH TIME ZONE,
    time_spent_minutes INTEGER DEFAULT 0,
    UNIQUE(student_id, lesson_id)
);

-- =====================================================
-- INDEXES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_users_clerk_id ON users(clerk_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

CREATE INDEX IF NOT EXISTS idx_courses_teacher_id ON courses(teacher_id);
CREATE INDEX IF NOT EXISTS idx_courses_is_published ON courses(is_published);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);

CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

CREATE INDEX IF NOT EXISTS idx_assignments_course_id ON assignments(course_id);
CREATE INDEX IF NOT EXISTS idx_assignments_due_date ON assignments(due_date);

CREATE INDEX IF NOT EXISTS idx_submissions_assignment_id ON submissions(assignment_id);
CREATE INDEX IF NOT EXISTS idx_submissions_student_id ON submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);

CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_order_index ON lessons(course_id, order_index);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_student_id ON lesson_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lesson_id ON lesson_progress(lesson_id);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view all profiles" ON users
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid()::text = clerk_id);

CREATE POLICY "Users can insert own profile" ON users
    FOR INSERT WITH CHECK (auth.uid()::text = clerk_id);

-- Courses policies
CREATE POLICY "Anyone can view published courses" ON courses
    FOR SELECT USING (is_published = true OR teacher_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

CREATE POLICY "Teachers can create courses" ON courses
    FOR INSERT WITH CHECK (teacher_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text AND role = 'teacher'
    ));

CREATE POLICY "Teachers can update own courses" ON courses
    FOR UPDATE USING (teacher_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

CREATE POLICY "Teachers can delete own courses" ON courses
    FOR DELETE USING (teacher_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

-- Enrollments policies
CREATE POLICY "Students can view own enrollments" ON enrollments
    FOR SELECT USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ) OR EXISTS (
        SELECT 1 FROM courses c WHERE c.id = enrollments.course_id 
        AND c.teacher_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text)
    ));

CREATE POLICY "Students can enroll in courses" ON enrollments
    FOR INSERT WITH CHECK (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text AND role = 'student'
    ));

CREATE POLICY "Students can update own enrollments" ON enrollments
    FOR UPDATE USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

-- Assignments policies
CREATE POLICY "Students can view course assignments" ON assignments
    FOR SELECT USING (course_id IN (
        SELECT course_id FROM enrollments WHERE student_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ) OR course_id IN (
        SELECT id FROM courses WHERE teacher_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ));

CREATE POLICY "Teachers can manage course assignments" ON assignments
    FOR ALL USING (course_id IN (
        SELECT id FROM courses WHERE teacher_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ));

-- Submissions policies
CREATE POLICY "Students can view own submissions" ON submissions
    FOR SELECT USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ) OR assignment_id IN (
        SELECT a.id FROM assignments a
        JOIN courses c ON a.course_id = c.id
        WHERE c.teacher_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text)
    ));

CREATE POLICY "Students can create submissions" ON submissions
    FOR INSERT WITH CHECK (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

CREATE POLICY "Students can update own submissions" ON submissions
    FOR UPDATE USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ) AND status IN ('pending', 'submitted'));

CREATE POLICY "Teachers can grade submissions" ON submissions
    FOR UPDATE USING (assignment_id IN (
        SELECT a.id FROM assignments a
        JOIN courses c ON a.course_id = c.id
        WHERE c.teacher_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text)
    ));

-- Lessons policies
CREATE POLICY "Students can view published lessons" ON lessons
    FOR SELECT USING (is_published = true AND course_id IN (
        SELECT course_id FROM enrollments WHERE student_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ) OR course_id IN (
        SELECT id FROM courses WHERE teacher_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ));

CREATE POLICY "Teachers can manage course lessons" ON lessons
    FOR ALL USING (course_id IN (
        SELECT id FROM courses WHERE teacher_id IN (
            SELECT id FROM users WHERE clerk_id = auth.uid()::text
        )
    ));

-- Lesson progress policies
CREATE POLICY "Students can view own progress" ON lesson_progress
    FOR SELECT USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

CREATE POLICY "Students can update own progress" ON lesson_progress
    FOR ALL USING (student_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

-- =====================================================
-- FUNCTIONS AND TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assignments_updated_at BEFORE UPDATE ON assignments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate enrollment progress
CREATE OR REPLACE FUNCTION calculate_enrollment_progress()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE enrollments
    SET progress = (
        SELECT COALESCE(
            (COUNT(*) FILTER (WHERE completed = true)::FLOAT / NULLIF(COUNT(*), 0) * 100)::INTEGER,
            0
        )
        FROM lesson_progress lp
        JOIN lessons l ON lp.lesson_id = l.id
        WHERE lp.student_id = NEW.student_id
        AND l.course_id = (SELECT course_id FROM lessons WHERE id = NEW.lesson_id)
    )
    WHERE student_id = NEW.student_id
    AND course_id = (SELECT course_id FROM lessons WHERE id = NEW.lesson_id);
    
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_enrollment_progress AFTER INSERT OR UPDATE ON lesson_progress
    FOR EACH ROW EXECUTE FUNCTION calculate_enrollment_progress();

-- =====================================================
-- SAMPLE DATA (OPTIONAL - REMOVE IN PRODUCTION)
-- =====================================================

-- Insert sample admin user (update clerk_id with your actual Clerk ID)
-- INSERT INTO users (clerk_id, email, name, role) VALUES
-- ('your_clerk_id_here', 'admin@innovateai.com', 'Admin User', 'admin')
-- ON CONFLICT (clerk_id) DO NOTHING;