import type React from "react";

type PostButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

const PostButton: React.FC<PostButtonProps> = ({ children, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`
                px-3 py-1 rounded border-2 pixel-font text-sm
                bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)]
                hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)]
                active:translate-y-0.5 active:shadow-none
                transition-all duration-200 ease-out
            `}
		>
			{children}
		</button>
	);
};

export default PostButton;
