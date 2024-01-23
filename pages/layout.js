import React from 'react';
import { cn } from "@/lib/utils";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam_pro = Be_Vietnam_Pro(
    {
        weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
        subsets: ["vietnamese"],
        variable: "--font-vietnam-pro",

    }
);
export default function Layout({ children }) {
    return (
        <main className={cn('flex min-h-screen flex-col items-center justify-between p-24 font-sans antialiased', vietnam_pro.variable, vietnam_pro.variable)}>
            {children}
        </main>
    )
}
