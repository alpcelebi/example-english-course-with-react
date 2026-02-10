import * as React from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div className={cn("container-custom", className)} {...props}>
            {children}
        </div>
    );
}
