import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

// SERVICES
import { RegisterUser } from '@/services/auth.service';

const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z
        .string()
        .min(3, { message: 'Password must contain at least 3 character(s)' }),
});

type FormType = z.infer<typeof formSchema & FieldValues>;

const useRegister = () => {
    const registerMutation = useMutation({
        mutationKey: [`register`],
        mutationFn: RegisterUser,
    });
    const registerForm = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: 'test',
            email: 'test@email.com',
            password: '123',
        },
    });
    const onRegisterSubmit: SubmitHandler<FormType> = useCallback(
        (data, event) => {
            event?.preventDefault();

            toast.promise(registerMutation.mutateAsync(data), {
                loading: 'Submitting...',
                error: (err) => {
                    return err?.message ?? `Something went wrong`;
                },
                success: () => {
                    registerForm.reset();
                    return 'Account created successfully';
                },
            });
        },
        [registerMutation, registerForm],
    );

    return {
        registerForm,
        onRegisterSubmit,
    };
};

export { useRegister };
