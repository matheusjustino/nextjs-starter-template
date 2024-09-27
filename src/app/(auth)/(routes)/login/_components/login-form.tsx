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
import { useLogin } from '../useLogin';

const LoginForm: React.FC = () => {
    const { loginForm, onLoginSubmit } = useLogin();

    return (
        <Card className="w-screen max-w-[400px]">
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                <CardHeader>Welcome back</CardHeader>

                <CardContent className="flex flex-col gap-3">
                    <Input
                        id="email"
                        placeholder="Email"
                        register={loginForm.register('email', {
                            required: true,
                        })}
                        errors={loginForm.formState.errors}
                    />

                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        register={loginForm.register('password', {
                            required: true,
                        })}
                        errors={loginForm.formState.errors}
                    />
                </CardContent>

                <CardFooter className="flex flex-col">
                    <Button className="w-full mb-1">Login</Button>

                    <Link
                        href="/register"
                        className="text-xs hover:text-blue-500 hover:underline ml-auto"
                    >
                        Create an account here
                    </Link>
                </CardFooter>
            </form>
        </Card>
    );
};

export { LoginForm };
