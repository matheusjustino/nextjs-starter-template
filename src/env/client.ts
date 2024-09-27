import { createEnv } from '@t3-oss/env-nextjs';
import { z, ZodError } from 'zod';

export const env = createEnv({
    client: {
        NEXT_PUBLIC_API_URL: z.string(),
    },
    onValidationError: (error: ZodError) => {
        console.error(
            `❌ Invalid client environment variables:`,
            error.flatten().fieldErrors,
        );
        process.exit(1);
    },
    runtimeEnv: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    emptyStringAsUndefined: true,
});
