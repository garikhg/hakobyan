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
                        <div className="flex items-center justify-end">
                            <span className="text-sm text-[#73767b] uppercase mr-2.5">Email:</span> garik.28h@gmail.com
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container p-8 pb-20 gap-16 sm:p-20">
                    <section className="mb-8">
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-16">About Me</h2>
                        <p className="text-3xl font-light leading-normal">
                            Hi, I'm Garegin, a Full Stack WordPress Developer based in Armenia. I am passionate
                            about both development and design, which fuels my drive to create seamless, visually
                            captivating, and immersive digital experiences. With a focus on full stack development, I
                            aim to
                            build innovative and impactful web solutions that resonate with users and leave a lasting
                            impression.
                        </p>
                    </section>

                    <Divider/>

                    <section className="mt-8">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Experience</h3>
                        <div className="flex flex-col flex-wrap mt-8">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-md font-semibold">Full-Stack | WordPress Developer</div>
                                    <span className="block text-sm text-slate-600">Sourcefit · Full-time · 1 yr 3 mos</span>
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
