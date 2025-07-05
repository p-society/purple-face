import React from "react";

type PostButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const PostButton: React.FC<PostButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-2 py-1 rounded border-2 pixel-font text-xs transition-all duration-200 ease-out
                border-[var(--border)] text-[var(--badge)] bg-[var(--bg)]
                hover:bg-[var(--surface)] hover:text-[var(--primary)] hover:border-[var(--accent)] hover:shadow-pixel-glow hover:-translate-y-0.5
                active:translate-y-0.5 active:shadow-none
            `}
        >
            {children}
        </button>
    );
};

export default PostButton;
