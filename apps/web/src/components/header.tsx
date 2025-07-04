import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarItem from "@/components/sidebar-item";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* TOP HEADER */}
            <header
                className="flex justify-between items-center p-4 border-b-4"
                style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                }}
            >
                {/* LOGO + TEXT */}
                <div className="flex items-center gap-2">
                    {/* Logo Image */}
                    <img
                        src="/logo.png" // 👈 Replace with your logo path
                        alt="IIITBuzz Logo"
                        className="h-8 w-8" // Adjust size as needed
                    />
                    {/* Logo Text */}
                    <span
                        className="font-bold text-lg pixel-font"
                        style={{ color: "var(--primary)" }}
                    >
                        IIITBuzz
                    </span>
                </div>

                {/* Right Side (ModeToggle + Hamburger) */}
                <div className="flex items-center gap-2">
                    {/* Mode Toggle Dropdown (desktop & mobile) */}
                    <ModeToggle />

                    {/* Hamburger Button (mobile only) */}
                    <button
                        className="md:hidden p-2 rounded border-2 pixel-font"
                        style={{
                            background: "var(--surface)",
                            color: "var(--primary)",
                            borderColor: "var(--primary)",
                        }}
                        aria-label="Toggle Menu"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </header>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed inset-y-0 left-0 w-64 z-40 transition-transform duration-300 ease-in-out shadow-pixel
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{
                    background: "var(--surface)",
                    color: "var(--text-primary)",
                    borderRight: "4px solid var(--border)",
                }}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 border-b-4" style={{ borderColor: "var(--border)" }}>
                    <div className="font-bold pixel-font" style={{ color: "var(--primary)" }}>
                        Menu
                    </div>
                    <button
                        className="p-2 rounded border-2 pixel-font"
                        style={{
                            background: "var(--surface)",
                            color: "var(--primary)",
                            borderColor: "var(--primary)",
                        }}
                        aria-label="Close Menu"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Drawer Navigation */}
                <nav className="flex flex-col gap-2 p-4" aria-label="Mobile Navigation">
                    <SidebarItem icon="🏠" label="Home" active />
                    <SidebarItem icon="🗂️" label="Categories" />
                    <SidebarItem icon="🏷️" label="Tags" />
                    <SidebarItem icon="📢" label="Announcements" />
                    <SidebarItem icon="🏆" label="Leaderboard" />
                    <SidebarItem icon="ℹ️" label="About" />
                </nav>
            </div>

            {/* BACKDROP */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden="true"
                ></div>
            )}
        </>
    );
}
