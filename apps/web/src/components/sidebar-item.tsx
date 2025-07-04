export default function SidebarItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded font-bold pixel-font text-sm cursor-pointer w-full
                ${active ? "border-l-4" : "hover:bg-[var(--bg)]"}
            `}
            style={{
                background: active ? "var(--bg)" : "transparent",
                color: active ? "var(--primary)" : "var(--text-secondary)",
                borderColor: active ? "var(--primary)" : undefined,
            }}
            title={label}
        >
            <span className="text-lg flex-shrink-0">{icon}</span>
            <span className="break-words">{label}</span>
        </div>
    );
}
