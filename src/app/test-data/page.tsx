"use client";

import { useUserProfile, useUserStats, useActivities, useAssignments, useClasses, TeacherStats, StudentStats } from '@/services/dataService';
import { Card, CardContent, Typography, Box, Grid, CircularProgress } from '@mui/material';

const isTeacherStats = (stats: TeacherStats | StudentStats): stats is TeacherStats => {
  return 'totalClasses' in stats;
};

export default function TestDataPage() {
  const { profile, isLoading: profileLoading } = useUserProfile();
  const { stats, isLoading: statsLoading } = useUserStats(profile?.role || 'student');
  const { activities, isLoading: activitiesLoading } = useActivities();
  const { assignments, isLoading: assignmentsLoading } = useAssignments();
  const { classes, isLoading: classesLoading } = useClasses();

  if (profileLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!profile) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Please sign in to view your data</Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Data Service Test Page
      </Typography>

      <Grid container spacing={3}>
        {/* User Profile */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Profile
              </Typography>
              <Typography>Name: {profile.firstName} {profile.lastName}</Typography>
              <Typography>Email: {profile.email}</Typography>
              <Typography>Role: {profile.role}</Typography>
              {profile.bio && <Typography>Bio: {profile.bio}</Typography>}
            </CardContent>
          </Card>
        </Grid>

        {/* User Stats */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Stats
              </Typography>
              {statsLoading ? (
                <CircularProgress size={20} />
              ) : (
                <>
                  {isTeacherStats(stats) ? (
                    <>
                      <Typography>Total Classes: {stats.totalClasses}</Typography>
                      <Typography>Active Students: {stats.activeStudents}</Typography>
                      <Typography>Pending Assignments: {stats.pendingAssignments}</Typography>
                      <Typography>Average Score: {stats.averageScore}%</Typography>
                    </>
                  ) : (
                    <>
                      <Typography>Enrolled Classes: {stats.enrolledClasses}</Typography>
                      <Typography>Pending Assignments: {stats.pendingAssignments}</Typography>
                      <Typography>Average Grade: {stats.averageGrade}%</Typography>
                      <Typography>Attendance: {stats.attendance}%</Typography>
                    </>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Activities */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              {activitiesLoading ? (
                <CircularProgress size={20} />
              ) : (
                activities.map((activity) => (
                  <Box key={activity.id} mb={2}>
                    <Typography variant="subtitle1">{activity.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {activity.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {activity.timestamp.toLocaleString()}
                    </Typography>
                  </Box>
                ))
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Assignments */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Assignments
              </Typography>
              {assignmentsLoading ? (
                <CircularProgress size={20} />
              ) : (
                assignments.map((assignment) => (
                  <Box key={assignment.id} mb={2}>
                    <Typography variant="subtitle1">{assignment.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Class: {assignment.class}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due: {assignment.dueDate.toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {assignment.status}
                    </Typography>
                  </Box>
                ))
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Classes */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Classes
              </Typography>
              {classesLoading ? (
                <CircularProgress size={20} />
              ) : (
                classes.map((classItem) => (
                  <Box key={classItem.id} mb={2}>
                    <Typography variant="subtitle1">{classItem.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Teacher: {classItem.teacher}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Schedule: {classItem.schedule}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Room: {classItem.room}
                    </Typography>
                  </Box>
                ))
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 