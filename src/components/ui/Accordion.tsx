import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/cn";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-slate-200/60 last:border-0">
            <button
                className="flex w-full items-center justify-between py-5 text-left transition-all group"
                onClick={onClick}
            >
                <span className={cn(
                    "text-base font-heading font-semibold transition-colors",
                    isOpen ? "text-kuzemTeal" : "text-ink group-hover:text-kuzemTeal"
                )}>
                    {title}
                </span>
                <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ml-4",
                    isOpen ? "bg-kuzemTeal/10 rotate-180" : "bg-slate-100"
                )}>
                    <ChevronDown className={cn(
                        "h-4 w-4 transition-colors",
                        isOpen ? "text-kuzemTeal" : "text-slate-400"
                    )} />
                </div>
            </button>
            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden text-slate-500 text-sm leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
