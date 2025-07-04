import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger

function useThemePalette() {
    useEffect(() => {
        function setPalette(theme: "light" | "dark") {
            const root = document.documentElement;
            if (theme === "dark") {
                root.style.setProperty("--bg", "#141420");
                root.style.setProperty("--surface", "#1c1c2a");
                root.style.setProperty("--primary", "#62d8e2");
                root.style.setProperty("--accent", "#e870a7");
                root.style.setProperty("--secondary", "#f18e5d");
                root.style.setProperty("--badge", "#bca4e2");
                root.style.setProperty("--border", "#3c3c4a");
                root.style.setProperty("--text-primary", "#f5f5f5");
                root.style.setProperty("--text-secondary", "#aaaaaa");
            } else {
                root.style.setProperty("--bg", "#fce9d6");
                root.style.setProperty("--surface", "#fffdfb");
                root.style.setProperty("--primary", "#62d8e2");
                root.style.setProperty("--accent", "#f4be52");
                root.style.setProperty("--secondary", "#f18e5d");
                root.style.setProperty("--badge", "#f8b3c8");
                root.style.setProperty("--border", "#888888");
                root.style.setProperty("--text-primary", "#2d2d2d");
                root.style.setProperty("--text-secondary", "#5a5a5a");
            }
        }

        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setPalette(isDark ? "dark" : "light");
        const observer = new MutationObserver(() => {
            const html = document.documentElement;
            if (html.classList.contains("dark")) setPalette("dark");
            else setPalette("light");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);
}
export default function Home() {
    useThemePalette();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [randomPost, setRandomPost] = useState<{
        username: string;
        title: string;
        content: string;
        avatarUrl?: string;
    } | null>(null);

    useEffect(() => {
        fetch("/api/posts/random")
            .then(res => res.json())
            .then(data => setRandomPost(data))
            .catch(() => setRandomPost(null));
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col font-sans relative"
            style={{ background: "var(--bg)", color: "var(--text-primary)" }}
        >
            {/* BODY */}
            <div className="flex flex-1 w-full min-h-0">
                {/* DESKTOP SIDEBAR */}
                <nav
                    className="hidden md:flex flex-col gap-2 border-r-4 py-8 px-4 min-w-max h-auto"
                    aria-label="Main Navigation"
                    style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                    }}
                >
                    <SidebarItem icon="🏠" label="Home" active={true} />
                    <SidebarItem icon="🗂️" label="Categories" />
                    <SidebarItem icon="🏷️" label="Tags" />
                    <SidebarItem icon="📢" label="Announcements" />
                    <SidebarItem icon="🏆" label="Leaderboard" />
                    <SidebarItem icon="ℹ️" label="About" />
                </nav>

                {/* MAIN CONTENT */}
                <main className="flex-1 flex flex-col items-center px-2 py-8" aria-label="Main Content">
                    <section className="w-full flex flex-col items-center space-y-8">
                        <article
                            className="rounded-lg border-4 shadow-pixel p-6 w-full max-w-xl"
                            aria-label="Welcome Card"
                            style={{
                                background: "var(--surface)",
                                borderColor: "var(--border)",
                                color: "var(--text-primary)",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/avatar-pixel.png" alt="Pixel avatar" className="h-10 w-10 rounded" />
                                <div>
                                    <div className="font-bold text-lg pixel-font" style={{ color: "var(--primary)" }}>
                                        Welcome to IIITBuzz
                                    </div>
                                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                                        by admin
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4" style={{ color: "var(--text-primary)" }}>
                                IIITBuzz is a vibrant community forum built for IIIT students. Connect, discuss, ask questions, share resources, and stay updated with campus events—all in one place!
                            </div>
                            <div className="flex gap-2 flex-wrap mb-6">
                                <Badge>💬 Discussion Boards</Badge>
                                <Badge>❓ Q&A Sections</Badge>
                                <Badge>📅 Event Announcements</Badge>
                                <Badge>📚 Study Resources</Badge>
                            </div>
                            <div className="flex gap-3 justify-center flex-wrap">
                                <a href="/signup" aria-label="Sign up for IIITBuzz">
                                    <button
                                        className="px-5 py-2 rounded border-2 font-bold pixel-font shadow-pixel transition-all duration-150 w-full sm:w-auto"
                                        style={{
                                            background: "var(--primary)",
                                            color: "var(--bg)",
                                            borderColor: "var(--primary)",
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                </a>
                                <a href="/login" aria-label="Log in to IIITBuzz">
                                    <button
                                        className="px-5 py-2 rounded border-2 font-bold pixel-font shadow-pixel transition-all duration-150 w-full sm:w-auto"
                                        style={{
                                            background: "transparent",
                                            color: "var(--primary)",
                                            borderColor: "var(--primary)",
                                        }}
                                    >
                                        Log In
                                    </button>
                                </a>
                            </div>
                        </article>
                        <div
                            className="rounded-lg border-4 shadow-pixel w-full max-w-xl mt-2"
                            aria-label="Sample post card"
                            style={{
                                background: "var(--surface)",
                                borderColor: "var(--border)",
                                color: "var(--text-primary)",
                            }}
                        >
                            <article className="flex flex-col">
                                <div className="flex items-center gap-3 px-6 pt-4">
                                    <img
                                        src={randomPost?.avatarUrl || "/avatar-pixel.png"}
                                        alt="Pixel avatar"
                                        className="h-8 w-8 rounded"
                                    />
                                    <div>
                                        <div className="font-bold pixel-font text-base" style={{ color: "var(--primary)" }}>
                                            {randomPost?.username || "username"}
                                        </div>
                                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                                            {randomPost?.title || "Welcome to IIITBuzz"}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 pb-4 pt-2 text-sm font-body break-words" style={{ color: "var(--text-primary)" }}>
                                    {randomPost?.content || "Loading..."}
                                </div>
                                <div className="flex gap-2 px-6 pb-4 flex-wrap">
                                    <PostButton>❤️ Like</PostButton>
                                    <PostButton>💬 Reply</PostButton>
                                    <PostButton>🔖 Bookmark</PostButton>
                                    <PostButton>↗️ Share</PostButton>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            </div>
            <footer
                className="border-t-4 mt-8 py-4 px-4 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-2"
                style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                }}
            >
                <div>
                    &copy; {new Date().getFullYear()} IIITBuzz. All rights reserved.
                </div>
                <nav className="flex gap-4" aria-label="Footer">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                </nav>
            </footer>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                .pixel-font { font-family: 'Press Start 2P', monospace !important; }
                .shadow-pixel { box-shadow: 4px 4px 0 var(--border), 8px 8px 0 var(--bg); }
                .drop-shadow-pixel { text-shadow: 2px 2px 0 var(--border), 4px 4px 0 var(--bg); }
                `}
            </style>
        </div>
    );
}

function SidebarItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
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

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span
            className="px-3 py-1 rounded font-bold pixel-font text-xs border-2 break-words"
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

const PostButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <button
            className="px-2 py-1 rounded border-2 pixel-font text-xs transition-all duration-150 break-words"
            style={{
                background: "var(--bg)",
                color: "var(--badge)",
                borderColor: "var(--border)",
            }}
        >
            {children}
        </button>
    );
};