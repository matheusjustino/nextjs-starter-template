import { NextPage } from 'next';
import Link from 'next/link';

// COMPONENTS
import { Button } from '@/components/ui/button';

const HomePage: NextPage = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
            <h1>Next Starter Template</h1>

            <Link href="/login">
                <Button>Login Page</Button>
            </Link>
        </div>
    );
};

export default HomePage;
