import * as React from 'react';
import { cn } from '../../lib/cn';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    align?: 'left' | 'center' | 'right';
    badge?: string;
}

export function SectionHeader({ title, description, align = 'center', badge, className, ...props }: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 mb-16",
                {
                    "items-center text-center": align === 'center',
                    "items-start text-left": align === 'left',
                    "items-end text-right": align === 'right',
                },
                className
            )}
            {...props}
        >
            {badge && (
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-kuzemTeal/10 text-kuzemTeal border border-kuzemTeal/20">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-ink leading-tight text-balance">
                {title}
            </h2>
            {description && (
                <p className="text-slate-500 md:text-lg max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
