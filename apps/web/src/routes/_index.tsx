import { useEffect, useState } from "react";
import { PixelButton } from "@/components/ui/pixel-button";
import SidebarItem from "@/components/sidebar-item";
import Badge from "@/components/ui/badge";
import PostButton from "@/components/ui/postButton";
import navItems from "@/components/nav-items";


export default function Home() {
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
            className="flex flex-col min-h-screen font-sans"
            style={{ background: "var(--bg)", color: "var(--text-primary)" }}
        >
            <div className="flex flex-1 flex-col md:flex-row w-full">
                <nav
                    className="hidden md:flex flex-col gap-2 border-r-4 py-8 px-4 min-w-max h-auto"
                    aria-label="Main Navigation"
                    style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                    }}
                >
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                        />
                    ))}
                </nav>
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                <Badge>💬 Discussion Boards</Badge>
                                <Badge>❓ Q&A Sections</Badge>
                                <Badge>📅 Event Announcements</Badge>
                                <Badge>📚 Study Resources</Badge>
                            </div>

                            <div className="flex gap-3 justify-center flex-wrap">
                                <PixelButton href="/signup" ariaLabel="Sign up for IIITBuzz">
                                    Sign Up
                                </PixelButton>
                                <PixelButton href="/login" ariaLabel="Log in to IIITBuzz" variant="outline">
                                    Log In
                                </PixelButton>
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
                className="border-t-4 mt-auto py-4 px-4 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-2"
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