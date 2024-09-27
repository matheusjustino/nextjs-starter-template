// LIBS
import { api } from '@/lib/axios';

// INTERFACES
import { IRegisterUser } from '@/interfaces/auth.interface';

export const RegisterUser = async (data: IRegisterUser) => {
    return api.post<string>('/auth/register', data).then((res) => res.data);
};
