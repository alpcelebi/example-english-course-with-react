import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-kuzemTeal text-white shadow hover:bg-kuzemTeal/80",
                secondary:
                    "border-transparent bg-kuzemYellow text-ink hover:bg-kuzemYellow/80",
                outline: "text-foreground",
                success: "border-transparent bg-kuzemGreen text-ink hover:bg-emerald-200",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    variant?: "default" | "secondary" | "outline" | "success" | null;
}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
