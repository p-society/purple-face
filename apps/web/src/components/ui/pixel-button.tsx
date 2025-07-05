import React from "react";

type PixelButtonProps = {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "filled" | "outline";
    glowColor?: string;
    className?: string;
    ariaLabel?: string;
};

export const PixelButton: React.FC<PixelButtonProps> = ({
    href,
    onClick,
    children,
    variant = "filled",
    glowColor = "var(--primary)",
    className = "",
    ariaLabel,
}) => {
    const baseStyle = `
        px-5 py-2 rounded border-2 font-bold pixel-font shadow-pixel transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-pixel-glow
        active:translate-y-0.5 active:shadow-none
    `;

    const style = {
        background: variant === "filled" ? "var(--primary)" : "transparent",
        color: variant === "filled" ? "var(--bg)" : "var(--primary)",
        borderColor: "var(--primary)", 
        "--pixel-glow": glowColor,
    } as React.CSSProperties;

    if (href) {
        return (
            <a
                href={href}
                aria-label={ariaLabel}
                className={`${baseStyle} ${className}`}
                style={style}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`${baseStyle} ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};
