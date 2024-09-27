import { NextPage } from 'next';
import Link from 'next/link';

// COMPONENTS
import { Button } from '@/components/ui/button';

const NotFoundPage: NextPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl">Ops... Page not found</h1>
            <Link href="/">
                <Button className="font-bold">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
