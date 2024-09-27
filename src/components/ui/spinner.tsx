import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { RefAttributes, SVGProps } from 'react';

import { cn } from '@/lib/utils';

const spinnerVariants = cva('text-muted-foreground animate-spin', {
    variants: {
        size: {
            default: 'h-4 w-4',
            sm: 'h-2 w-2',
            lg: 'h-6 w-6',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface SpinnerProps
    extends ComponentAttributes,
        VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size, className, ...props }: SpinnerProps) => {
    return (
        <Loader2
            {...props}
            className={cn(spinnerVariants({ size, className }))}
        />
    );
};
