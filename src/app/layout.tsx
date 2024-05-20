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
const firaMono = localFont({
    src: [
        {
            path: './fonts/FiraMono-Regular.ttf',
            weight: '400',
        },
        {
            path: './fonts/FiraMono-Medium.ttf',
            weight: '500',
        },
        {
            path: './fonts/FiraMono-Bold.ttf',
            weight: '700',
        },
    ],
    variable: '--font-firamono',
})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/images/sspzoa_logo_round.svg'/>
            <meta name="theme-color" content="#6D87A8"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#6D87A8"/>
        </head>
        <body
            className={`${suit.className} ${firaMono.variable}`}>{children}</body>
        </html>
    );
}
