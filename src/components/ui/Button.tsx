import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-kuzemRed to-rose-500 text-white hover:from-rose-600 hover:to-kuzemRed shadow-lg shadow-kuzemRed/20 hover:shadow-kuzemRed/30",
                secondary: "bg-kuzemYellow text-ink hover:bg-yellow-400 shadow-lg shadow-yellow-200/50",
                outline: "border-2 border-slate-200 bg-white text-ink hover:bg-slate-50 hover:border-slate-300",
                ghost: "hover:bg-slate-100 text-slate-600",
                link: "text-kuzemTeal underline-offset-4 hover:underline",
                whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-200/50",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-13 px-8 text-base",
                icon: "h-10 w-10 p-0 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "whatsapp" | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
