# InnovateAI Robotics - Micro-Frontend Platform

🚀 **Empowering the Next Generation of Robotics Engineers**

A comprehensive micro-frontend architecture designed specifically for educational robotics and AI learning platforms. Built with Next.js 14, Material-UI, Clerk authentication, and Supabase for real-time features.

## 🏗️ Architecture Overview

### Micro-Frontend Structure

```
innovateai-robotics/
├── apps/
│   ├── shell/                        # Main container app
│   ├── student-dashboard/            # Student learning dashboard
│   ├── teacher-dashboard/            # Teacher course management
│   ├── admin-dashboard/              # Administrative controls
│   ├── course-modules/               # Course content delivery
│   ├── assignment-system/            # Assignment creation & submission
│   ├── progress-tracker/             # Progress monitoring & badges
│   └── shared-components/            # Shared UI components
├── services/
│   ├── api-gateway/                  # API orchestration
│   ├── notification-service/         # Real-time notifications
│   └── analytics-service/            # Learning analytics
├── shared/
│   ├── types/                        # Shared TypeScript types
│   ├── utils/                        # Shared utilities
│   ├── constants/                    # Platform constants
│   └── supabase/                     # Database schemas & RLS
└── docker/
    └── docker-compose.yml
```

## 🎯 Key Features

### Educational Platform Features
- **Age-Appropriate Learning**: Dedicated modules for different age groups (5 & Under, 6-9, 10-12, AI Introduction)
- **Interactive Robotics**: Virtual robot simulation and programming interfaces
- **Progress Tracking**: Visual progress indicators and achievement badges
- **Real-time Collaboration**: Live coding sessions and peer reviews
- **Assignment System**: Interactive project creation and submission
- **Analytics Dashboard**: Comprehensive learning analytics for teachers and parents

### Technical Features
- **Micro-Frontend Architecture**: Isolated modules for fault tolerance
- **Role-Based Access**: Separate interfaces for students, teachers, and admins
- **Real-time Features**: WebSocket connections for live updates
- **Responsive Design**: Mobile-first approach for all age groups
- **Accessibility**: WCAG 2.1 compliant for inclusive learning
- **Security**: Row Level Security (RLS) with Supabase

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose
- Supabase CLI
- Clerk Account

### 1. Clone and Install
```bash
git clone <repository-url>
cd innovateai-robotics
npm run install:all
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Fill in your environment variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup
```bash
# Start Supabase locally
npm run supabase:start

# Apply database schema
npm run supabase:migrate

# Generate TypeScript types
npm run supabase:gen-types
```

### 4. Development
```bash
# Start all micro-frontends
npm run dev

# Or start individual modules
npm run dev:shell        # Main app (port 3000)
npm run dev:student      # Student dashboard (port 3001)
npm run dev:teacher      # Teacher dashboard (port 3002)
npm run dev:admin        # Admin dashboard (port 3003)
npm run dev:courses      # Course modules (port 3004)
npm run dev:assignments  # Assignment system (port 3005)
npm run dev:progress     # Progress tracker (port 3006)
```

## 🏛️ Module Architecture

### Shell Application (Main Container)
- **Port**: 3000
- **Purpose**: Main entry point and navigation
- **Features**: 
  - Role-based routing
  - Authentication with Clerk
  - Module federation
  - Global state management

### Student Dashboard
- **Port**: 3001
- **Purpose**: Student learning interface
- **Features**:
  - Course catalog and enrollment
  - Progress tracking with visual indicators
  - Interactive assignments
  - Badge and achievement system
  - Personalized learning paths

### Teacher Dashboard
- **Port**: 3002
- **Purpose**: Course and student management
- **Features**:
  - Course creation and management
  - Assignment builder with robotics components
  - Student progress analytics
  - Grading and feedback system
  - Class management tools

### Admin Dashboard
- **Port**: 3003
- **Purpose**: Platform administration
- **Features**:
  - User role management
  - Platform analytics and insights
  - Content management system
  - System monitoring and health checks

### Course Modules
- **Port**: 3004
- **Purpose**: Educational content delivery
- **Features**:
  - Age-group specific content
  - Interactive lesson players
  - Code playground for visual programming
  - Robot simulation components

### Assignment System
- **Port**: 3005
- **Purpose**: Assignment creation and submission
- **Features**:
  - Interactive assignment builder
  - Robotics project templates
  - Code submission and testing
  - Peer review and collaboration

### Progress Tracker
- **Port**: 3006
- **Purpose**: Learning analytics and achievements
- **Features**:
  - Visual progress tracking
  - Achievement badge system
  - Learning analytics
  - Parent/teacher reports

## 🎨 Design System

### Age Group Color Scheme
- **Tiny Tinkerers** (Ages 5 & Under): `#f59e0b` (Amber)
- **Robot Explorers** (Ages 6-9): `#10b981` (Emerald)
- **Tech Titans** (Ages 10-12): `#3b82f6` (Blue)
- **AI Avengers** (AI Introduction): `#8b5cf6` (Purple)

### Material-UI Theme
- **Primary**: Blue (`#2563eb`) for technology focus
- **Secondary**: Red (`#dc2626`) for robotics emphasis
- **Typography**: Inter font family for readability
- **Components**: Custom educational components with accessibility features

## 🔧 Development Commands

### Build Commands
```bash
# Build all modules
npm run build

# Build individual modules
npm run build:shell
npm run build:student
npm run build:teacher
npm run build:admin
npm run build:courses
```

### Testing Commands
```bash
# Run all tests
npm run test

# Run individual module tests
npm run test:shell
npm run test:student
npm run test:teacher
```

### Database Commands
```bash
# Supabase management
npm run supabase:start
npm run supabase:stop
npm run supabase:reset
npm run supabase:gen-types
npm run supabase:migrate
```

### Deployment Commands
```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

## 🐳 Docker Deployment

### Local Development
```bash
# Start all services
docker-compose -f docker/docker-compose.yml up -d

# View logs
docker-compose -f docker/docker-compose.yml logs -f

# Stop services
docker-compose -f docker/docker-compose.yml down
```

### Production Deployment
```bash
# Build and deploy
docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up -d
```

## 📊 Monitoring & Analytics

### Health Checks
- **Shell**: `http://localhost:3000/health`
- **Student Dashboard**: `http://localhost:3001/health`
- **Teacher Dashboard**: `http://localhost:3002/health`
- **Admin Dashboard**: `http://localhost:3003/health`

### Analytics Events
- Lesson started/completed
- Assignment submitted
- Badge earned
- Course enrolled/completed
- Login/logout events

## 🔒 Security Features

### Authentication & Authorization
- **Clerk Integration**: Secure user authentication
- **Role-Based Access**: Students, teachers, admins, parents
- **JWT Tokens**: Secure session management
- **Multi-factor Authentication**: Enhanced security

### Data Protection
- **Row Level Security (RLS)**: Supabase security policies
- **Data Encryption**: At rest and in transit
- **Privacy Compliance**: COPPA and FERPA compliant
- **Audit Logging**: Complete activity tracking

## 🎯 Educational Benefits

### For Students
- **Personalized Learning**: Age-appropriate content and pacing
- **Hands-on Experience**: Real robot programming and simulation
- **Achievement System**: Gamified learning with badges
- **Collaborative Learning**: Peer reviews and group projects

### For Teachers
- **Comprehensive Analytics**: Student progress and engagement metrics
- **Flexible Content Creation**: Easy course and assignment building
- **Real-time Monitoring**: Live student activity tracking
- **Assessment Tools**: Automated grading and feedback

### For Parents
- **Progress Visibility**: Real-time learning progress
- **Achievement Tracking**: Badge and milestone monitoring
- **Communication**: Direct messaging with teachers
- **Learning Insights**: Detailed analytics and recommendations

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- **TypeScript**: Strict type checking
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting
- **Jest**: Unit and integration testing
- **Playwright**: End-to-end testing

## 📚 Documentation

### Additional Resources
- [API Documentation](./docs/api.md)
- [Database Schema](./docs/database.md)
- [Component Library](./docs/components.md)
- [Deployment Guide](./docs/deployment.md)
- [Troubleshooting](./docs/troubleshooting.md)

## 🆘 Support

### Getting Help
- **Documentation**: Check the docs folder
- **Issues**: Create a GitHub issue
- **Discussions**: Use GitHub Discussions
- **Email**: support@innovateairobotics.com

### Community
- **Discord**: Join our community server
- **YouTube**: Educational content and tutorials
- **Blog**: Latest updates and educational insights

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material-UI**: Component library
- **Clerk**: Authentication service
- **Supabase**: Database and real-time features
- **Framer Motion**: Animation library
- **Next.js**: React framework

---

**Built with ❤️ for the future of robotics education**

*InnovateAI Robotics Inc. - Empowering the next generation of robotics engineers*

