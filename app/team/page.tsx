"use client";

import React, {useState, useEffect} from 'react';
import {ArrowRight, Linkedin, Mail, Award, MapPin, Users, Code, Shield, Database, Briefcase} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import Link from 'next/link';
import {createPageUrl} from '@/lib/utils';

export default function Team() {
    const [scrollY, setScrollY] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const teamMembers = [
        {
            id: 'john-smith',
            name: 'John Smith',
            role: 'Principal AWS Architect',
            location: 'San Francisco, CA',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            bio: 'John leads our strategic AWS advisory practice with over 12 years of cloud infrastructure experience. He has architected solutions for Fortune 500 companies and specializes in complex multi-account AWS environments.',
            expertise: [
                'AWS Solutions Architecture',
                'Multi-Account Strategy',
                'Infrastructure as Code',
                'DevOps & CI/CD',
                'Cost Optimization'
            ],
            certifications: [
                'AWS Solutions Architect Professional',
                'AWS DevOps Engineer Professional',
                'AWS Security Specialty',
                'Kubernetes CKA'
            ],
            linkedin: 'https://linkedin.com/in/johnsmith',
            email: 'john@amelion.co',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'sarah-johnson',
            name: 'Sarah Johnson',
            role: 'Senior DevOps Engineer',
            location: 'Austin, TX',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b68aa205?w=400&h=400&fit=crop&crop=face',
            bio: 'Sarah brings deep expertise in Kubernetes and container orchestration to our team. She has led digital transformation initiatives for mid-market companies and excels at building scalable, automated infrastructure.',
            expertise: [
                'Kubernetes & Container Orchestration',
                'GitOps & Automation',
                'Monitoring & Observability',
                'Security & Compliance',
                'Platform Engineering'
            ],
            certifications: [
                'Kubernetes CKA',
                'Kubernetes CKAD',
                'AWS SysOps Administrator',
                'HashiCorp Terraform Associate'
            ],
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            email: 'sarah@amelion.co',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            id: 'michael-chen',
            name: 'Michael Chen',
            role: 'Cloud Security Specialist',
            location: 'Seattle, WA',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
            bio: 'Michael focuses on cloud security architecture and compliance frameworks. He has helped numerous organizations achieve SOC 2 and ISO 27001 compliance while maintaining operational efficiency.',
            expertise: [
                'Cloud Security Architecture',
                'Compliance & Governance',
                'Identity & Access Management',
                'Security Automation',
                'Risk Assessment'
            ],
            certifications: [
                'AWS Security Specialty',
                'CISSP',
                'CISM',
                'AWS Solutions Architect Professional'
            ],
            linkedin: 'https://linkedin.com/in/michaelchen',
            email: 'michael@amelion.co',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            id: 'emily-rodriguez',
            name: 'Emily Rodriguez',
            role: 'FinOps Consultant',
            location: 'New York, NY',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            bio: 'Emily specializes in cloud financial optimization and FinOps practices. She has saved clients millions in cloud costs through strategic optimization and cultural transformation initiatives.',
            expertise: [
                'Cloud Cost Optimization',
                'FinOps Implementation',
                'Financial Governance',
                'Reserved Instances Strategy',
                'Cost Analytics & Reporting'
            ],
            certifications: [
                'FinOps Certified Practitioner',
                'AWS Cloud Financial Management',
                'AWS Solutions Architect Associate',
                'PMP'
            ],
            linkedin: 'https://linkedin.com/in/emilyrodriguez',
            email: 'emily@amelion.co',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrollY > 50 ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex justify-between items-center">
                        <Link href={createPageUrl("/")}
                              className="text-2xl font-semibold tracking-tight text-white hover:text-blue-400 transition-colors">
                            Amelion
                        </Link>
                        <Link href={createPageUrl("/")}
                              className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-60"/>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"/>
                </div>

                <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
                    <div
                        className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-sm text-white/90 mb-8">
                        <Users className="w-4 h-4 mr-3 text-blue-400"/>
                        Meet Our Expert Team
                    </div>

                    <h1 className="text-6xl md:text-7xl font-semibold mb-8 leading-none tracking-tight">
                        The Experts Behind
                        <br/>
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Success
            </span>
                    </h1>

                    <p className="text-2xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                        Our team combines decades of AWS expertise with a passion for helping businesses unlock the full
                        potential of the cloud.
                    </p>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={member.id}
                                member={member}
                                index={index}
                                onClick={() => setSelectedMember(member)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Collective <span className="text-cyan-400">Expertise</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatCard number="50+" label="Combined Years Experience"/>
                        <StatCard number="25+" label="AWS Certifications"/>
                        <StatCard number="200+" label="Projects Delivered"/>
                        <StatCard number="100%" label="Client Satisfaction"/>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Our <span className="text-purple-400">Values</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={Shield}
                            title="Excellence First"
                            description="We set the highest standards for ourselves and deliver nothing less than exceptional results for our clients."
                        />
                        <ValueCard
                            icon={Users}
                            title="Partnership Approach"
                            description="We work as an extension of your team, sharing knowledge and empowering your organization for long-term success."
                        />
                        <ValueCard
                            icon={Code}
                            title="Continuous Innovation"
                            description="We stay at the forefront of AWS services and best practices, ensuring you benefit from the latest innovations."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
                        Ready to Work With <br/>
                        <span className="text-blue-400">Our Team?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
                        Let&#39;s discuss how our expertise can help accelerate your AWS journey and drive business
                        results.
                    </p>

                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 font-medium"
                        onClick={() => window.location.href = 'https://calendly.com/your-link'}
                    >
                        Schedule a Strategy Call
                        <ArrowRight className="ml-3 w-5 h-5"/>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <Link href={createPageUrl("/")}
                          className="text-2xl font-semibold mb-4 tracking-tight hover:text-blue-400 transition-colors inline-block">
                        Amelion
                    </Link>
                    <p className="text-white/50 mb-6 font-light">
                        On-Demand AWS Leadership & Strategy
                    </p>
                    <p className="text-white/30 text-sm font-light">
                        © 2025 Amelion. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Member Detail Modal */}
            {selectedMember && (
                <MemberDetailModal
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                />
            )}
        </div>
    );
}

// Team Member Card Component
const TeamMemberCard = ({member, index, onClick}) => (
    <div
        className="group cursor-pointer"
        style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
        onClick={onClick}
    >
        <Card
            className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl overflow-hidden group-hover:scale-105">
            <CardContent className="p-8">
                <div className="flex items-start gap-6">
                    <div className="relative">
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-20 h-20 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}/>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{member.name}</h3>
                        <p className="text-lg text-blue-400 mb-2 font-medium">{member.role}</p>
                        <div className="flex items-center text-white/60 mb-4">
                            <MapPin className="w-4 h-4 mr-2"/>
                            <span className="text-sm">{member.location}</span>
                        </div>
                        <p className="text-white/70 font-light leading-relaxed text-sm mb-4">{member.bio}</p>

                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon"
                                    className="text-white/60 hover:text-white hover:bg-white/10">
                                <Linkedin className="w-4 h-4"/>
                            </Button>
                            <Button variant="ghost" size="icon"
                                    className="text-white/60 hover:text-white hover:bg-white/10">
                                <Mail className="w-4 h-4"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

// Member Detail Modal Component
const MemberDetailModal = ({member, onClose}) => (
    <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-3xl flex items-center justify-center p-8 animate-fadeIn">
        <div
            className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-8">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors text-2xl"
                >
                    ×
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full max-w-xs rounded-3xl object-cover mx-auto"
                        />
                    </div>

                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-semibold text-white mb-2 tracking-tight">{member.name}</h2>
                        <p className="text-xl text-blue-400 mb-4 font-medium">{member.role}</p>

                        <div className="flex items-center text-white/60 mb-6">
                            <MapPin className="w-5 h-5 mr-2"/>
                            <span>{member.location}</span>
                        </div>

                        <p className="text-white/80 font-light leading-relaxed mb-8 text-lg">{member.bio}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-4">Expertise</h4>
                                <ul className="space-y-2">
                                    {member.expertise.map((skill, index) => (
                                        <li key={index} className="flex items-center text-white/70">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"/>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white mb-4">Certifications</h4>
                                <ul className="space-y-2">
                                    {member.certifications.map((cert, index) => (
                                        <li key={index} className="flex items-center text-white/70">
                                            <Award className="w-4 h-4 mr-3 text-emerald-400"/>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
                                onClick={() => window.open(member.linkedin, '_blank')}
                            >
                                <Linkedin className="w-4 h-4 mr-2"/>
                                Connect on LinkedIn
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 font-medium"
                                onClick={() => window.location.href = `mailto:${member.email}`}
                            >
                                <Mail className="w-4 h-4 mr-2"/>
                                Send Email
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Stat Card Component
const StatCard = ({number, label}) => (
    <div className="group">
        <div
            className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">{number}</div>
        <div className="text-white/60 font-light text-sm md:text-base">{label}</div>
    </div>
);

// Value Card Component
const ValueCard = ({icon: Icon, title, description}) => (
    <Card
        className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl group">
        <CardContent className="p-8 text-center">
            <div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white"/>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">{title}</h3>
            <p className="text-white/70 font-light leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);

// Add animation styles
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}