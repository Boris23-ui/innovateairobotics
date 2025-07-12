# Supabase Setup Guide

This guide will help you set up Supabase as your database for the InnovateAI Robotics application.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `innovateai-robotics`
   - Database Password: (create a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy the following values:
   - Project URL
   - Anon public key

## 3. Set Up Environment Variables

Create or update your `.env.local` file with the following variables:

```env
# Existing Clerk variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/student
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/student

# New Supabase variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4. Set Up Database Schema

1. In your Supabase dashboard, go to SQL Editor
2. Copy the contents of `supabase-schema.sql`
3. Paste it into the SQL Editor and run it

This will create:
- `users` table for user profiles
- `courses` table for course management
- `assignments` table for course assignments
- `submissions` table for student submissions
- `enrollments` table for course enrollments
- Row Level Security (RLS) policies
- Indexes for performance

## 5. Configure Authentication

Since you're using Clerk for authentication, you'll need to:

1. In your Supabase dashboard, go to Authentication > Settings
2. Disable email confirmations (since Clerk handles this)
3. Configure JWT settings if needed

## 6. Test the Setup

1. Start your development server: `npm run dev`
2. Sign up/sign in through Clerk
3. Check that user data is being created in the Supabase `users` table
4. Try creating a course as a teacher
5. Try enrolling in a course as a student

## 7. Database Operations

The application now uses the following services for database operations:

- `userService` - User management
- `courseService` - Course management
- `assignmentService` - Assignment management
- `submissionService` - Submission management
- `enrollmentService` - Enrollment management

All operations are handled through the `src/lib/database.ts` file.

## 8. Migration from Mock Data

The following files have been updated to use Supabase:

- `src/app/api/courses/route.ts` - Course API
- `src/app/api/auth/login/route.ts` - Login API
- `src/app/api/auth/me/route.ts` - User profile API

## 9. Troubleshooting

### Common Issues:

1. **Environment variables not found**: Make sure all Supabase environment variables are set in `.env.local`

2. **Database connection errors**: Verify your Supabase URL and anon key are correct

3. **RLS policy errors**: Make sure the SQL schema has been applied correctly

4. **User not found errors**: Check that users are being created in the database when they sign up through Clerk

### Debugging:

1. Check the browser console for client-side errors
2. Check the server logs for API errors
3. Use the Supabase dashboard to inspect your database tables
4. Use the Network tab in browser dev tools to see API requests

## 10. Production Deployment

When deploying to production:

1. Create a production Supabase project
2. Update environment variables with production credentials
3. Run the schema setup on the production database
4. Test all functionality in the production environment

## 11. Backup and Maintenance

- Set up automated backups in Supabase dashboard
- Monitor database performance through Supabase analytics
- Regularly review and update RLS policies as needed 