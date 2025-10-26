// Database TypeScript types

export interface User {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
