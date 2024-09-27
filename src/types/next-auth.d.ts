import { DefaultSession } from 'next-auth';

// INTERFACES
import { IUser } from '@/interfaces/user.interface';

declare module 'next-auth' {
    interface Session {
        user?: IUser & DefaultSession['user'];
    }
}
