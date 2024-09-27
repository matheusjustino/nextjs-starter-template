import * as React from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    register?: UseFormRegisterReturn<string>;
    errors?: FieldErrors;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, className, type, register, errors, ...props }, ref) => {
        return (
            <div>
                <input
                    type={type}
                    className={cn(
                        'flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
                        className,
                    )}
                    ref={ref}
                    {...props}
                    {...register}
                />

                {id && errors && errors[id] && (
                    <span className="text-xs text-red-400">
                        {errors[id]?.message?.toString() ?? 'Error'}
                    </span>
                )}
            </div>
        );
    },
);
Input.displayName = 'Input';

export { Input };
