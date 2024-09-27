'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import { FC, ReactNode, useState } from 'react';
import { Toaster as SonnerToaster } from 'sonner';

interface LayoutProps {
    children: ReactNode;
    pageProps: any;
}

const AppProviders: FC<LayoutProps> = ({ children, pageProps }) => {
    const [QC] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnMount: false,
                    refetchOnWindowFocus: false,
                    retry: 1,
                },
            },
        }),
    );

    return (
        <>
            <SonnerToaster richColors closeButton position="bottom-center" />
            <NextTopLoader color="#2a2a2a" />
            <QueryClientProvider client={QC} {...pageProps}>
                <SessionProvider {...pageProps}>{children}</SessionProvider>
            </QueryClientProvider>
        </>
    );
};

export { AppProviders };
