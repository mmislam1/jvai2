import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="background flex flex-col items-center justify-center "
            style={{ backgroundImage: "url('/children.jpg')" }}>
            
            <div className="box1 flex flex-col items-center justify-center bg-[rgba(231, 237, 245, 1)] rounded-mg">
                
            </div>

        </div>
    );
}
