import { createEnv } from '@t3-oss/env-nextjs';
import { z, ZodError } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'staging', 'production']),
        NEXTAUTH_SECRET: z.string(),
    },
    onValidationError: (error: ZodError) => {
        console.error(
            `❌ Invalid server environment variables:`,
            error.flatten().fieldErrors,
        );
        process.exit(1);
    },
    emptyStringAsUndefined: true,
    experimental__runtimeEnv: process.env,
});
