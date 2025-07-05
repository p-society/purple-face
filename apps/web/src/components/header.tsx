import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarItem from "@/components/sidebar-item";
import { ModeToggle } from "@/components/mode-toggle";
import navItems from "@/components/nav-items";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header
                className="flex justify-between items-center p-4 border-b-4"
                style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                }}
            >
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="IIITBuzz Logo"
                        className="h-8 w-8"
                    />
                    <span
                        className="font-bold text-lg pixel-font"
                        style={{ color: "var(--primary)" }}
                    >
                        IIITBuzz
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
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

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-64 z-40 transition-transform duration-300 ease-in-out shadow-pixel
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{
                    background: "var(--surface)",
                    color: "var(--text-primary)",
                    borderRight: "4px solid var(--border)",
                }}
            >
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
                <nav className="flex flex-col gap-2 p-4" aria-label="Mobile Navigation">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    ))}
                </nav>
            </div>

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
