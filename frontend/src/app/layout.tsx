import React from "react";
import {Inter, Poppins} from 'next/font/google'
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont( {
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
} );

const geistMono = localFont( {
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
} );

const interSans = Inter( {
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
} );

const poppinsSans = Poppins( {
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
} )

export const metadata: Metadata = {
    title: "Hakobyan - Private Web Developer",
    description: "Full Stack Web Developer with 12 years in WordPress, creating dynamic, scalable web solutions.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-lt-installed="true">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable}  ${poppinsSans.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
