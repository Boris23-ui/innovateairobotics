import { toast } from 'react-hot-toast';

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    toast.error(error.message);
    return;
  }

  if (error instanceof Error) {
    toast.error(error.message);
    return;
  }

  toast.error('An unexpected error occurred');
  console.error('Unexpected error:', error);
};

export const handleApiError = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An error occurred while processing your request',
    }));

    throw new AppError(
      error.message || 'An error occurred while processing your request',
      error.code || 'UNKNOWN_ERROR',
      response.status
    );
  }

  return response;
}; 