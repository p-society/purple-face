import type React from "react";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<span
			className="flex flex-col items-center justify-center text-center px-3 py-2 rounded font-bold pixel-font text-xs border-2 break-words"
			style={{
				background: "var(--border)",
				color: "var(--badge)",
				borderColor: "var(--badge)",
			}}
		>
			{children}
		</span>
	);
};

export default Badge;
