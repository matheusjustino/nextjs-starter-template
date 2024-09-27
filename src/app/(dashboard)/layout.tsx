'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

// COMPONENTS
import { Spinner } from '@/components/ui/spinner';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { status } = useSession();

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner className="h-10 w-10" />
            </div>
        );
    }

    if (status === 'unauthenticated') {
        return redirect('/');
    }

    return <>{children}</>;
}
