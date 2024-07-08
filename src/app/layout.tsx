import type {Metadata} from "next";
import "./globals.css";
import localFont from 'next/font/local'

const suit = localFont({
    src: [
        {
            path: './fonts/SUIT-Variable.woff2',
        },
    ],
    variable: '--font-suit',
})

export const metadata: Metadata = {
    title: "서승표 • Seungpyo Suh",
    description: "I'm a Mobile/Frontend Developer, passionate about creating and learning."
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/images/sspzoa_logo_rounded.svg'/>
            <meta name="theme-color" content="#6D87A8"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#6D87A8"/>
        </head>
        <body
            className={`${suit.className}`}>{children}</body>
        </html>
    );
}
