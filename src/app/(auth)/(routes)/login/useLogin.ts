import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(3, { message: 'Password must contain at least 3 character(s)' }),
});

type FormType = z.infer<typeof formSchema & FieldValues>;

const useLogin = () => {
    const loginMutation = useMutation({
        mutationKey: [`login`],
        mutationFn: async (data: FormType) => {
            const result = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            if (result?.error) {
                const parsedError =
                    typeof result.error === 'string'
                        ? result.error
                        : JSON.parse(JSON.stringify(result.error));

                throw parsedError || 'Something went wrong';
            }

            return 'Logged in successfully';
        },
    });
    const loginForm = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: 'test@email.com',
            password: '123',
        },
    });
    const onLoginSubmit: SubmitHandler<FormType> = useCallback(
        (data, event) => {
            event?.preventDefault();

            toast.promise(loginMutation.mutateAsync(data), {
                loading: 'Submitting...',
                error: (err) => err,
                success: (data) => data,
            });
        },
        [loginMutation],
    );

    return {
        loginForm,
        onLoginSubmit,
    };
};

export { useLogin };
