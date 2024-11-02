import React from "react";
import Divider from "@/components/ui/divider";
import Link from "next/link";
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen flex flex-col flex-wrap font-[family-name:var(--font-geist-sans)]">
            <header className="w-full h-[120px] flex items-center justify-between border-b border-slate-100">
                <div className="container flex items-center px-8 sm:px-20">
                    <div className="w-full md:w-1/2">
                        <Link href="/">
                            <span className="inline-block text-xl font-semibold font-[family-name:var(--font-poppins)]"
                            >Hakobyan</span>
                        </Link>
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

                            <p className="font-light text-lg md:text-xl leading-normal">
                                Hi, I&apos;m Garegin, a Web Developer with 12 years of experience specializing in Full
                                Stack development and WordPress. Throughout my career, I have combined my technical
                                expertise and creative insight to craft dynamic and user-friendly websites and
                                applications. My deep understanding of both frontend and backend technologies allows me
                                to build comprehensive digital solutions that are not only visually appealing but also
                                efficient and scalable. I am passionate about developing innovative web experiences that
                                leave a lasting impact.
                            </p>
                            <p className="font-light text-lg md:text-xl leading-normal">
                                I am the author of digital products for WordPress, including <a
                                href="https://wordpress.org/themes/wp-kit-elementor/" target="_blank"
                                rel="noopener noreferrer">WP Kit Elementor</a> on
                                WordPress Themes platforms, and the creator of the <a
                                href="https://github.com/garikhg/woo-ipay-acba" target="_blank"
                                rel="noopener noreferrer">iPay</a> Payment Gateway
                                plugin for WooCommerce. Additionally, I developed the corporate portal for <a
                                href="https://www.unibank.am/en/" target="_blank" rel="noopener noreferrer">Unibank</a>,
                                one of the leading
                                banks in Armenia, showcasing my ability to deliver high-quality solutions for complex,
                                large-scale projects.
                            </p>
                        </div>
                    </section>

                    <Divider/>

                    <section className="mt-8">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Work Experience</h3>
                        <div className="flex flex-col flex-wrap mt-8">
                            <div className="block">
                                <div className="space-y-6">
                                    <div className="relative flex flex-col">
                                        <h4 className="text-xl font-semibold">
                                            Sourcefit - Full-Stack | WordPress Developer
                                        </h4>
                                        <p className="text-slate-500 text-md">Sep 2023 - Present</p>
                                    </div>
                                    <div className="col-span-2 text-slate-700 font-light text-lg md:text-xl">
                                        <p>
                                            Led the development of advanced websites and WordPress applications at
                                            Sourcefit in Armenia. Collaborated with the team to create custom templates
                                            and plugins for improved website functionality. Increased user engagement
                                            through innovative WordPress solutions.
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                            <div className="block">
                                <div className="space-y-6">
                                    <div className="relative flex flex-col">
                                        <h4 className="text-xl font-semibold">
                                            Fiverr - Full-Stack | WordPress Developer
                                        </h4>
                                        <p className="text-slate-500 text-md">Aug 2023 - Sep 2023 · 2 mos</p>
                                    </div>
                                    <div className="col-span-2 text-slate-700 font-light text-lg md:text-xl">
                                        <p>
                                            Developed visually appealing and user-friendly WordPress and WooCommerce
                                            websites for Customers from Fiverr, focusing on performance optimization.
                                            Customized e-commerce solutions to drive engagement and increase sales for
                                            clients. Utilized skills in WordPress development to create tailored online
                                            platforms for a remote work environment in Armenia.
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                            <div className="block">
                                <div className="space-y-6">
                                    <div className="relative flex flex-col">
                                        <h4 className="text-xl font-semibold">
                                            WebEffect - Full-Stack | WordPress Developer
                                        </h4>
                                        <p className="text-slate-500 text-md">2 yrs 11 mos</p>
                                    </div>
                                    <div className="col-span-2 text-slate-700 font-light text-lg md:text-xl">
                                        <p>
                                            Developed complex websites and WordPress templates, plugins, and Gatsby web
                                            applications for WebEffect. Led the team in enhancing website
                                            functionalities and user experience. Implemented innovative solutions to
                                            improve website performance and user engagement. Collaborated with
                                            cross-functional teams to deliver high-quality projects on time.
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                            <div className="block">
                                <div className="space-y-6">
                                    <div className="relative flex flex-col">
                                        <h4 className="text-xl font-semibold">
                                            CODE CRAFT LLC - Founder | Full-Stack | WordPress Developer
                                        </h4>
                                        <p className="text-slate-500 text-md">Oct 2016 - Dec 2018 · 2 yrs 3 mos</p>
                                    </div>
                                    <div className="col-span-2 text-slate-700 font-light text-lg md:text-xl">
                                        <p>
                                            In my role as Founder of CODE CRAFT LLC in Armenia, Yerevan, I established a
                                            leading website development company specializing on WordPress, 1C-Bitrix,
                                            and Bitrix24 CRM projects. I led a team in creating innovative solutions
                                            that significantly improved user experience and client satisfaction:
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                            <div className="block">
                                <div className="space-y-6">
                                    <div className="relative flex flex-col">
                                        <h4 className="text-xl font-semibold">
                                            Albedo Graphics - Web Developer
                                        </h4>
                                        <p className="text-slate-500 text-md">Oct 2008 - Oct 2016 · 8 yrs 1 mo</p>
                                    </div>
                                    <div className="col-span-2 text-slate-700 font-light text-lg md:text-xl">
                                        <p>
                                            Developed custom websites using 1C-Bitrix, Bitrix24, Drupal, and WordPress,
                                            incorporating front-end development with Webpack and jQuery. Managed version
                                            control using Git, GitHub, and Bitbucket, while maintaining databases with
                                            MySQL and PHP. Enhanced user experiences through technical graphic design
                                            and layout creation using Adobe Photoshop, InDesign, Illustrator, and IXD.
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="mt-auto">
                <div className="container flex flex-col lg:flex-row items-center justify-between p-8 pb-20 gap-4 lg:gap-8 sm:p-20">
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/garikhg"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-sm flex items-center gap-2 hover:underline hover:underline-offset-4"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="w-5 h-5"
                                aria-label="GitHub"
                                style={{color: '#333'}}
                            />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/gareginhakobyan/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="w-5 h-5"
                                aria-label="Linkedin"
                                style={{color: '#0077b5'}}
                            />
                            <span>LinkedIn</span>
                        </a>
                        <a href="/g.hakobyan-2024.pdf"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        >
                            <FontAwesomeIcon
                                icon={faFileAlt}
                                className="w-5 h-5"
                                aria-label="Resume"
                                style={{color: '#ef4023'}}
                            />
                            <span>Resume [EN]</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[#73767b]">©{currentYear}, Hakobyan</p>
                        <p className="text-[#73767b]">All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
