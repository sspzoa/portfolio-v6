import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "I'm Seungpyo Suh",
    description: "Mobile/Frontend Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/images/sspzoa_logo_round.svg'/>
            <meta name="theme-color" content="#6D87A8"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#6D87A8"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
