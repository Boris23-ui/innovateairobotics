import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentDashboardCard from '../../components/student/StudentDashboardCard';
import { mockStudent } from '../utils/mockData';

describe('StudentDashboardCard', () => {
  it('renders student information correctly', () => {
    render(<StudentDashboardCard {...mockStudent} />);
    
    // Check if student name is displayed
    expect(screen.getByText(mockStudent.name)).toBeInTheDocument();
    
    // Check if grade level is displayed
    expect(screen.getByText(mockStudent.gradeLevel)).toBeInTheDocument();
    
    // Check if progress is displayed
    expect(screen.getByText(`${mockStudent.progress}%`)).toBeInTheDocument();
  });

  it('displays last login date in a readable format', () => {
    render(<StudentDashboardCard {...mockStudent} />);
    
    // Check if last login date is displayed
    const lastLoginElement = screen.getByText(/Last login:/i);
    expect(lastLoginElement).toBeInTheDocument();
  });

  it('applies correct theme colors', () => {
    render(<StudentDashboardCard {...mockStudent} />);
    
    // Check if the progress bar has the correct background color
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({
      backgroundColor: mockStudent.theme.secondaryColor
    });
  });
}); 