import { Loader2 } from 'lucide-react';
import { NextPage } from 'next';

const LoadingPage: NextPage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <Loader2 className="animate-spin h-10 w-10" />
        </div>
    );
};

export default LoadingPage;
