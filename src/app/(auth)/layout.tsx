'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

// COMPONENTS
import { Spinner } from '@/components/ui/spinner';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { status } = useSession();

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <Spinner className="h-10 w-10" />
            </div>
        );
    }

    if (status === 'authenticated') {
        return redirect('/dashboard');
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4">
            {children}
        </div>
    );
}
