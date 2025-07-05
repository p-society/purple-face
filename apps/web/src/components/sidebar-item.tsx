import React from "react";
import clsx from "clsx";

type SidebarItemProps = {
    icon: string;
    label: string;
    href: string;
    onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, onClick }) => {
    const isActive = typeof window !== "undefined" && window.location.pathname === href;

    return (
        <a
            href={href}
            onClick={onClick}
            className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded font-bold pixel-font text-sm cursor-pointer w-full border-l-4 transition-all duration-200 ease-out",
                isActive
                    ? "border-[var(--primary)] bg-[var(--bg)] text-[var(--primary)]"
                    : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--primary)] hover:border-[var(--accent)]",
                "hover:shadow-pixel-glow hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
            )}
            title={label}
        >
            <span className="text-lg flex-shrink-0">{icon}</span>
            <span className="break-words">{label}</span>
        </a>
    );
};

export default SidebarItem;
