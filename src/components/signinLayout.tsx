import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold">My App</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 bg-gray-100">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} My App
            </footer>
        </div>
    );
}
