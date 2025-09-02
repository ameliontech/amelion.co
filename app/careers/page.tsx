import React from 'react';
import {ArrowLeft, ArrowRight, MapPin, Clock, DollarSign, Users, Shield, Database, GitBranch} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';
import {Badge} from '@/components/ui/badge';
import {createPageUrl} from "@/lib/utils"


export default function Careers() {
    return (
        <div className="bg-slate-950 text-white min-h-screen">
            {/* Header */}
            <div className="relative">
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 py-24 relative z-10">
                    <Link href={createPageUrl("/")}
                          className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2"/>
                        Back to Home
                    </Link>

                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            Join Our
                            <span
                                className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent block">Expert Team</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Help shape the future of technical advisory services. Work with cutting-edge technology
                            while making a meaningful impact on businesses worldwide.
                        </p>
                    </div>
                </div>
            </div>

            {/* Current Openings */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Current <span
                            className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Openings</span>
                        </h2>
                        <p className="text-xl text-slate-400">We&apos;re looking for exceptional talent to join our
                            growing team</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card
                            className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <CardTitle className="text-2xl font-bold text-white mb-2">Principal DevOps
                                            Engineer</CardTitle>
                                        <div className="flex flex-wrap gap-3">
                                            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                                                <MapPin className="w-3 h-3 mr-1"/>
                                                Remote / San Francisco
                                            </Badge>
                                            <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">
                                                <Clock className="w-3 h-3 mr-1"/>
                                                Full-time
                                            </Badge>
                                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                                <DollarSign className="w-3 h-3 mr-1"/>
                                                $180k - $250k
                                            </Badge>
                                        </div>
                                    </div>
                                    <Button
                                        className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-8 py-3 rounded-xl">
                                        Apply Now
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-8">
                                {/* Role Overview */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <Shield className="w-5 h-5 text-cyan-400 mr-2"/>
                                        Role Overview
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        We&apos;re seeking a Principal DevOps Engineer to lead our infrastructure
                                        strategy and operations.
                                        You&apos;ll architect and implement scalable, secure systems that power our
                                        technical advisory platform,
                                        ensuring reliability and performance as we scale globally.
                                    </p>
                                </div>

                                {/* Key Responsibilities */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <Users className="w-5 h-5 text-violet-400 mr-2"/>
                                        Key Responsibilities
                                    </h3>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-start">
                                            <Database className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0"/>
                                            Design and maintain cloud infrastructure across AWS, GCP, and Azure
                                        </li>
                                        <li className="flex items-start">
                                            <GitBranch className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0"/>
                                            Implement CI/CD pipelines and development workflow automation
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0"/>
                                            Lead security initiatives and compliance frameworks
                                        </li>
                                        <li className="flex items-start">
                                            <Users className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0"/>
                                            Mentor junior engineers and establish DevOps best practices
                                        </li>
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-cyan-400 mb-3">Technical Skills</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• 8+ years DevOps/Infrastructure experience</li>
                                                <li>• Expert in Kubernetes, Docker, Terraform</li>
                                                <li>• Cloud platforms (AWS, GCP, Azure)</li>
                                                <li>• Monitoring tools (Prometheus, Grafana)</li>
                                                <li>• Infrastructure as Code (IaC)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-violet-400 mb-3">Leadership Skills</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• Led complex infrastructure projects</li>
                                                <li>• Experience scaling engineering teams</li>
                                                <li>• Strong communication skills</li>
                                                <li>• Security-first mindset</li>
                                                <li>• Startup or consulting experience preferred</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* What We Offer */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">What We Offer</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-slate-800/30 rounded-xl p-4">
                                            <h4 className="font-semibold text-cyan-400 mb-2">Compensation</h4>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• Competitive salary + equity</li>
                                                <li>• Performance bonuses</li>
                                                <li>• Comprehensive benefits</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-800/30 rounded-xl p-4">
                                            <h4 className="font-semibold text-violet-400 mb-2">Growth</h4>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• Technical leadership opportunities</li>
                                                <li>• Conference &amp; training budget</li>
                                                <li>• Mentorship programs</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-800/30 rounded-xl p-4">
                                            <h4 className="font-semibold text-emerald-400 mb-2">Culture</h4>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• Flexible remote work</li>
                                                <li>• Collaborative environment</li>
                                                <li>• Work-life balance</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Application Process */}
                                <div className="bg-slate-800/20 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-4">Application Process</h3>
                                    <div className="grid md:grid-cols-4 gap-6">
                                        <div className="text-center">
                                            <div
                                                className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">1
                                            </div>
                                            <h4 className="font-semibold text-white mb-2">Apply</h4>
                                            <p className="text-slate-400 text-sm">Submit your resume and cover
                                                letter</p>
                                        </div>
                                        <div className="text-center">
                                            <div
                                                className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">2
                                            </div>
                                            <h4 className="font-semibold text-white mb-2">Screen</h4>
                                            <p className="text-slate-400 text-sm">Initial phone/video interview</p>
                                        </div>
                                        <div className="text-center">
                                            <div
                                                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">3
                                            </div>
                                            <h4 className="font-semibold text-white mb-2">Technical</h4>
                                            <p className="text-slate-400 text-sm">Technical assessment &amp; system
                                                design</p>
                                        </div>
                                        <div className="text-center">
                                            <div
                                                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">4
                                            </div>
                                            <h4 className="font-semibold text-white mb-2">Final</h4>
                                            <p className="text-slate-400 text-sm">Meet the team &amp; culture fit</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Apply Section */}
                                <div className="text-center pt-6">
                                    <a href='mailto:careers@amelion.co?subject=Principal DevOps Engineer Application'
                                       className="inline-block bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-12 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                                        Apply for this Position
                                        <ArrowRight className="ml-2 w-5 h-5 inline"/>
                                    </a>
                                    <p className="text-slate-400 text-sm mt-4">
                                        Send your resume to careers@amelion.co with &quot;Principal DevOps
                                        Engineer&quot; in the subject line
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">
                            Why Choose <span
                            className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Amelion</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 mt-16">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Impact &amp; Innovation</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Work on challenging technical problems that directly impact
                                    businesses&apos; success.
                                    Your expertise will help shape critical decisions for companies at all stages.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-violet-400">Expert Colleagues</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Collaborate with senior engineers and technical leaders who share your passion
                                    for excellence. Learn from diverse experiences across industries and technologies.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Professional Growth</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Accelerate your career with exposure to diverse technical challenges, leadership
                                    opportunities, and continuous learning in emerging technologies.
                                </p>
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-4 text-orange-400">Work-Life Balance</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Enjoy flexible remote work, generous PTO, and a culture that values both high
                                    performance and personal well-being.
                                </p>
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

        </div>
    );
}