# InnovateAI Robotics - Micro-Frontend Platform

🚀 **Empowering the Next Generation of Robotics Engineers**

A comprehensive micro-frontend architecture designed for educational robotics and AI learning platforms. Built with Next.js 14, Clerk authentication, and Supabase for real-time features.

## 🏗️ Micro-Frontend Structure & Main Routes

This project uses a single Next.js app with microfrontend-style routing. Each user role and major feature has a dedicated route:

| Microfrontend         | Main Route                  | Description                        |
|----------------------|-----------------------------|------------------------------------|
| Student Dashboard    | `/student/dashboard`        | Student learning interface         |
| Teacher Dashboard    | `/teacher/dashboard`        | Teacher course management          |
| Admin Dashboard      | `/admin/dashboard`          | Platform administration            |
| Courses              | `/courses`                  | Course catalog/content             |
| Assignments          | `/assignments`              | Assignment system                  |
| Progress Tracker     | `/progress`                 | Progress and achievements          |

- The root route `/` automatically redirects to the appropriate dashboard based on user role.
- All microfrontend root routes (e.g., `/student`, `/teacher`, `/admin`) redirect to their respective dashboards.
- Role-based navigation is handled automatically after login.

## ⚙️ Environment Setup

1. **Copy the example environment file:**
   ```sh
   cp .env.example .env.local
   ```
2. **Fill in your environment variables in `.env.local`:**
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   - **Important:** The `NEXT_PUBLIC_SUPABASE_ANON_KEY` must be a single line (no line breaks).
   - If you encounter build errors about missing env vars, double-check for typos and line breaks.

## 🪟 Special Windows Notes

- If you encounter errors like `EPERM: operation not permitted` or `EADDRINUSE: address already in use`, try the following:
  1. Close all Node.js/Next.js processes in Task Manager.
  2. Restart your computer.
  3. Run your terminal as Administrator.
  4. Temporarily disable antivirus if it interferes with file/process access.
- Always ensure your `.env.local` file uses Windows line endings (CRLF) if editing in Notepad.

## 🚀 Running & Building the Project

### Install Dependencies
```sh
npm install
```

### Start the Development Server
```sh
npm run dev
```
- The app will be available at [http://localhost:3000](http://localhost:3000)
- All microfrontend routes are accessible from this single server.

### Build for Production
```sh
npm run build
npm start
```

## 🧭 Navigation & Role-Based Routing
- Navigation is role-aware: after login, users are redirected to their dashboard.
- The navigation menu adapts to the logged-in user's role.
- Protected routes require authentication; unauthenticated users are redirected to `/login`.

## 🛠️ Troubleshooting
- **404 at `/` or dashboard routes:** Ensure you are logged in and your user has the correct role assigned.
- **Environment variable errors:** Double-check `.env.local` for typos, missing values, or line breaks.
- **Windows process errors:** See the Special Windows Notes above.

## 📚 Documentation & Support
- See the rest of this README for platform features, design system, and contribution guidelines.
- For more help, see the [Troubleshooting](./docs/troubleshooting.md) guide or contact support.

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

---

## How to Fix This on Windows

1. **Close all running Node.js/Next.js processes** (including any dev servers).
2. **Delete the `.next` directory** manually:
   - In File Explorer, go to `E:\innovateairobotics`
   - Delete the `.next` folder (it may be locked—if so, restart your computer and try again).
3. **Run your terminal as Administrator**:
   - Right-click your terminal app and select “Run as administrator.”
4. **Try the build again**:
   ```sh
   npm run build
   ```

---

**This is a common issue on Windows when files are locked by a process or antivirus.**  
If the problem persists after a reboot and running as admin, let me know and we’ll try additional steps.

Would you like me to walk you through these steps, or do you want to try them and report back?

