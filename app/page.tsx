"use client";

import React, {useState, useEffect} from 'react';
import {ArrowRight, Shield, Users, Cloud, CheckCircle, Menu, X, Mail, Phone} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import Link from "next/link";
import {createPageUrl} from "@/lib/utils"

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50' : 'bg-transparent'}`
            }>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Amelion
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('services')}
                                    className="hover:text-cyan-400 transition-colors">Services
                            </button>
                            <button onClick={() => scrollToSection('about')}
                                    className="hover:text-cyan-400 transition-colors">About
                            </button>
                            <Link href={createPageUrl('Careers')} className="hover:text-cyan-400 transition-colors">
                                Careers
                            </Link>

                            <button onClick={() => scrollToSection('contact')}
                                    className="hover:text-cyan-400 transition-colors">Contact
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>

                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen &&
                        <div
                            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50">
                            <div className="px-6 py-4 space-y-4">
                                <button onClick={() => scrollToSection('services')}
                                        className="block hover:text-cyan-400 transition-colors">Services
                                </button>
                                <button onClick={() => scrollToSection('about')}
                                        className="block hover:text-cyan-400 transition-colors">About
                                </button>
                                <Link href={createPageUrl('Careers')} className="hover:text-cyan-400 transition-colors">
                                    Careers
                                </Link>

                                <button onClick={() => scrollToSection('contact')}
                                        className="block hover:text-cyan-400 transition-colors">Contact
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="mb-8">
                            <div
                                className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300 mb-6">
                                <Shield className="w-4 h-4 mr-2 text-cyan-400"/>
                                Independent Technical Advisory
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Built on AWS?
                            <span
                                className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent block">So Are We.

              </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">Amelion
                            specializes in technical audits for teams running on Amazon Web Services.


                        </p>

                        <div className="flex justify-center">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">

                                <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                                    Schedule free call
                                    <ArrowRight className="ml-2 w-5 h-5"/>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span
                            className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Comprehensive technical audits tailored to your critical systems and infrastructure
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Architecture & System Audits */}
                        <Card
                            className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 group">
                            <CardContent className="p-8">
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Architecture & System Audits</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Comprehensive evaluation of your system&apos;s foundation, identifying areas for
                                    improvement and optimization.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Audit resilience, scalability, and architecture</span>
                                    </li>
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Identify misconfigurations, tech debt, and overengineering</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Security & Infrastructure */}
                        <Card
                            className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 group">
                            <CardContent className="p-8">
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Cloud className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Security & Infrastructure</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Deep dive into your cloud infrastructure, security posture, and cost optimization
                                    opportunities.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Review IAM, VPC, security groups, and network layout</span>
                                    </li>
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Cut waste across EC2, EKS, Lambda, RDS, S3, and more</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* DevOps & Compliance */}
                        <Card
                            className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 group">
                            <CardContent className="p-8">
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">DevOps & Compliance</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Evaluate your deployment processes, automation practices, and alignment with
                                    industry standards.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Evaluate deployment flow, CI/CD, and automation hygiene</span>
                                    </li>
                                    <li className="flex items-start text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0"/>
                                        <span>Align your system with the AWS Well-Architected Framework</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Why Choose <span
                            className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Amelion</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 mt-16">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Independent Expertise</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Our senior-level technical advisors provide unbiased, independent reviews without
                                    vendor lock-in or implementation agendas. Get the clarity you need to make confident
                                    decisions.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-violet-400">Proven Experience</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    With decades of combined experience across startups and enterprises, our team has
                                    navigated every technical challenge you&apos;re facing. Learn from our battle-tested
                                    expertise.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Actionable Insights</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    We don&apos;t just identify problems — we provide clear, prioritized recommendations
                                    with
                                    implementation roadmaps that align with your business objectives and timeline.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-orange-400">Fast Turnaround</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Get comprehensive technical reviews within days, not weeks. Our streamlined process
                                    ensures you can make critical decisions without losing momentum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Make <span
                            className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Confident Decisions?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your technical challenges and how our independent review can provide
                            the clarity and confidence you need.
                        </p>

                        <div className="bg-slate-900/50 border border-slate-800/50 rounded-3xl p-12 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Mail className="w-5 h-5 text-cyan-400 mr-4"/>
                                            <span className="text-slate-300">hello@amelion.co</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-5 h-5 text-violet-400 mr-4"/>
                                            <span className="text-slate-300">Schedule a consultation</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <h3 className="text-2xl font-bold mb-6 text-white">What to Expect</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5"/>
                                            <span className="text-slate-300">Free initial consultation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5"/>
                                            <span className="text-slate-300">Tailored review scope</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5"/>
                                            <span className="text-slate-300">Detailed findings & recommendations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800/50">
                                <Button
                                    className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-12 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                                    onClick={() => window.location.href = 'mailto:hello@amelion.co'}>

                                    Start Your Review Today
                                    <ArrowRight className="ml-2 w-5 h-5"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-800/50">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
                            Amelion
                        </div>
                        <p className="text-slate-400 mb-4">
                            Independent Technical Advisory for Confident Decision Making
                        </p>
                        <p className="text-slate-500 text-sm">
                            © 2025 Amelion. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>);
}
