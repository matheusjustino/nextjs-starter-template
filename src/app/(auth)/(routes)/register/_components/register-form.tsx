'use client';

import Link from 'next/link';

// COMPONENTS
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// HOOKS
import { useRegister } from '../useRegister';

const RegisterForm: React.FC = () => {
    const { registerForm, onRegisterSubmit } = useRegister();

    return (
        <Card className="w-screen max-w-[400px]">
            <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                <CardHeader>Create an account</CardHeader>

                <CardContent className="flex flex-col gap-3">
                    <Input
                        id="name"
                        placeholder="Name"
                        register={registerForm.register('name', {
                            required: true,
                        })}
                        errors={registerForm.formState.errors}
                    />

                    <Input
                        id="email"
                        placeholder="Email"
                        register={registerForm.register('email', {
                            required: true,
                        })}
                        errors={registerForm.formState.errors}
                    />

                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        register={registerForm.register('password', {
                            required: true,
                        })}
                        errors={registerForm.formState.errors}
                    />
                </CardContent>

                <CardFooter className="flex flex-col">
                    <Button className="w-full mb-1">Create</Button>

                    <Link
                        href="/login"
                        className="text-xs hover:text-blue-500 hover:underline ml-auto"
                    >
                        Already have an account?
                    </Link>
                </CardFooter>
            </form>
        </Card>
    );
};

export { RegisterForm };
