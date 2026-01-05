import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .email('Email must be valid')
        .nonempty('Email is required')
        .max(100, 'Must not exceed 100 characters'),

    password: z
        .string()
        .nonempty('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(100, 'Must not exceed 100 characters'),
});

export type LoginForm = z.infer<typeof loginSchema>;