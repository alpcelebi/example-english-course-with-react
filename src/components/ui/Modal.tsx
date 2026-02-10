import { X } from "lucide-react";
import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/cn";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all">
            <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
            <div
                className={cn(
                    "relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200",
                    className
                )}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:bg-black/10 sm:text-gray-500 sm:hover:bg-black/20"
                >
                    <X className="h-6 w-6" />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
