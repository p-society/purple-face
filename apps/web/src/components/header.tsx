import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b-4"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="IIITBuzz Logo" className="h-10 w-10" />
                <span className="text-2xl md:text-3xl font-extrabold tracking-tight pixel-font drop-shadow-pixel"
                    style={{ color: "var(--primary)" }}>
                    IIITBuzz
                </span>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>
        </header>
    );
}