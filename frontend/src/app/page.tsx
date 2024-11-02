import Image from "next/image";
import {BookMarked, Github, Linkedin} from 'lucide-react';
import React from "react";
import Divider from "@/components/ui/divider";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col flex-wrap font-[family-name:var(--font-geist-sans)]">
            <header className="w-full h-[120px] flex items-center justify-between border-b border-slate-100">
                <div className="container flex items-center px-8 sm:px-20">
                    <div className="w-full md:w-1/2">
                        <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={98}
                            height={20.67}
                            priority
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-end uppercase text-sm gap-2.5">
                            <span className="text-[#73767b] uppercase">Email:</span> garik.28h@gmail.com
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container p-8 pb-20 gap-16 sm:p-20">
                    <section className="space-y-8">
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h2>
                        <div className="space-y-4">

                            <p className="text-2xl font-light leading-normal">
                                Hi, I&apos;m Garegin, a Web Developer with 12 years of experience specializing in Full Stack
                                development and WordPress. Throughout my career, I have combined my technical expertise
                                and creative insight to craft dynamic and user-friendly websites and applications. My
                                deep understanding of both frontend and backend technologies allows me to build
                                comprehensive digital solutions that are not only visually appealing but also efficient
                                and scalable. I am passionate about developing innovative web experiences that leave a
                                lasting impact.
                            </p>
                            <p className="text-2xl font-light leading-normal">
                                I am the author of digital products for WordPress, including <a href="https://wordpress.org/themes/wp-kit-elementor/" target="_blank" rel="noopener noreferrer">WP Kit Elementor</a> on
                                WordPress Themes platforms, and the creator of the <a href="https://github.com/garikhg/woo-ipay-acba" target="_blank" rel="noopener noreferrer">iPay</a> Payment Gateway
                                plugin for WooCommerce. Additionally, I developed the corporate portal for <a
                                href="https://www.unibank.am/en/" target="_blank" rel="noopener noreferrer">Unibank</a>, one of the leading
                                banks in Armenia, showcasing my ability to deliver high-quality solutions for complex,
                                large-scale projects.
                            </p>
                        </div>
                    </section>

                    <Divider/>

                    <section className="mt-8">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Experience</h3>
                        <div className="flex flex-col flex-wrap mt-8">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-md font-semibold">Full-Stack | WordPress Developer</div>
                                    <span
                                        className="block text-sm text-slate-600">Sourcefit · Full-time · 1 yr 3 mos</span>
                                    <span className="block text-sm text-slate-600">Yerevan, Armenia</span>
                                </div>

                                <div>
                                    • Led the development of advanced websites and WordPress applications at Sourcefit
                                    in Armenia.<br/>
                                    • Collaborated with the team to create custom templates and plugins for improved
                                    website functionality.<br/>
                                    • Increased user engagement through innovative WordPress solutions.
                                </div>
                                <Divider/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="mt-auto">
                <div className="container flex items-center justify-between p-8 pb-20 gap-8 sm:p-20">
                    <div className="flex items-center gap-8">
                        <a
                            className="text-sm flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/garikhg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github strokeWidth={2} className="w-5 h-5"/>
                            <span>GitHub</span>
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://www.linkedin.com/in/gareginhakobyan/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-5 h-5"/>
                            <span>LinkedIn</span>
                        </a>
                        <a href="#"
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        >
                            <BookMarked className="w-5 h-5"/>
                            <span>Resume [EN]</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[#73767b]">© 2021 Hakobyan</p>
                        <p className="text-[#73767b]">All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
