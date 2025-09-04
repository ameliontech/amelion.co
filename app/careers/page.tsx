"use client";

import React, {useState} from 'react';
import {
    ArrowRight,
    MapPin,
    Clock,
    Users,
    Award,
    Briefcase,
    Code,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import Link from 'next/link';
import {createPageUrl} from '@/lib/utils';

export default function Careers() {
    const [expandedJob, setExpandedJob] = useState(null);

    const toggleJobDetails = (jobId) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
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
                        <Briefcase className="w-4 h-4 mr-3 text-blue-400"/>
                        Join Our Growing Team
                    </div>

                    <h1 className="text-6xl md:text-7xl font-semibold mb-8 leading-none tracking-tight">
                        Build the Future of
                        <br/>
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AWS Infrastructure
            </span>
                    </h1>

                    <p className="text-2xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                        Help us deliver world-class AWS solutions to ambitious companies. Work with cutting-edge
                        technology and exceptional teams.
                    </p>
                </div>
            </section>

            {/* Company Culture Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Why Work at <span className="text-blue-400">Amelion</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CultureCard
                            icon={Award}
                            title="Excellence First"
                            description="We set the highest standards for ourselves and our clients. Every project is an opportunity to demonstrate technical mastery."
                        />
                        <CultureCard
                            icon={Users}
                            title="Remote-First Culture"
                            description="Work from anywhere with a team that values results over location. Flexible hours and autonomous work environment."
                        />
                        <CultureCard
                            icon={Code}
                            title="Continuous Learning"
                            description="Stay at the forefront of AWS innovation. We invest in your growth with training, certifications, and conference attendance."
                        />
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Open <span className="text-purple-400">Positions</span>
                        </h2>
                        <p className="text-xl text-white/60 font-light">Currently hiring exceptional DevOps engineers to
                            join our consulting team.</p>
                    </div>

                    <div className="space-y-6">
                        <JobListing
                            id="principal-devops-1"
                            title="Principal DevOps Engineer - Client Solutions"
                            type="Full-time"
                            location="Remote (US/EU)"
                            salary="$180k - $250k"
                            description="Lead complex AWS infrastructure projects for enterprise clients. Drive technical excellence and mentor junior team members."
                            requirements={[
                                "8+ years of DevOps/SRE experience with 5+ years focused on AWS",
                                "Expert-level knowledge of AWS services (EC2, EKS, Lambda, RDS, VPC, etc.)",
                                "Deep experience with Infrastructure as Code (Terraform, CloudFormation)",
                                "Proficiency in CI/CD pipelines (GitLab CI, GitHub Actions, Jenkins)",
                                "Strong scripting skills (Python, Bash, Go)",
                                "Experience with monitoring and observability tools (CloudWatch, Datadog, New Relic)",
                                "AWS certifications (Solutions Architect Pro, DevOps Pro preferred)",
                                "Experience leading technical teams and client-facing engagements"
                            ]}
                            responsibilities={[
                                "Design and implement scalable, secure AWS infrastructure for enterprise clients",
                                "Lead Well-Architected Framework reviews and optimization initiatives",
                                "Develop automation solutions to reduce operational overhead",
                                "Mentor junior engineers and establish best practices",
                                "Collaborate with clients to understand requirements and deliver solutions",
                                "Drive cost optimization initiatives and FinOps practices",
                                "Ensure security compliance and implement governance frameworks",
                                "Create technical documentation and knowledge transfer materials"
                            ]}
                            expanded={expandedJob === 'principal-devops-1'}
                            onToggle={() => toggleJobDetails('principal-devops-1')}
                        />

                        <JobListing
                            id="principal-devops-2"
                            title="Principal DevOps Engineer - Platform & Automation"
                            type="Full-time"
                            location="Remote (Global)"
                            salary="$170k - $240k"
                            description="Build and maintain internal platforms and automation tools. Focus on developer experience and operational excellence."
                            requirements={[
                                "7+ years of DevOps/Platform Engineering experience",
                                "Expert knowledge of AWS services and architecture patterns",
                                "Strong experience with Kubernetes and container orchestration",
                                "Proficiency in Infrastructure as Code (Terraform preferred)",
                                "Experience with service mesh technologies (Istio, Consul Connect)",
                                "Strong programming skills in Python, Go, or TypeScript",
                                "Experience with GitOps workflows (ArgoCD, Flux)",
                                "Knowledge of security scanning and compliance automation",
                                "Experience building internal developer platforms"
                            ]}
                            responsibilities={[
                                "Design and build internal platforms for rapid client project delivery",
                                "Develop automation tools and frameworks for common AWS patterns",
                                "Implement security scanning and compliance automation",
                                "Create self-service infrastructure provisioning systems",
                                "Build and maintain CI/CD pipeline templates and standards",
                                "Develop monitoring, logging, and alerting standards",
                                "Contribute to open-source tools and Amelion's technical blog",
                                "Support business development with technical proof-of-concepts"
                            ]}
                            expanded={expandedJob === 'principal-devops-2'}
                            onToggle={() => toggleJobDetails('principal-devops-2')}
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            Benefits & <span className="text-green-400">Perks</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BenefitCard title="Competitive Salary"
                                     description="Market-leading compensation with equity opportunities"/>
                        <BenefitCard title="Health & Wellness"
                                     description="Premium health, dental, and vision coverage for you and your family"/>
                        <BenefitCard title="Learning Budget"
                                     description="$5,000 annual budget for courses, certifications, and conferences"/>
                        <BenefitCard title="Flexible PTO"
                                     description="Unlimited paid time off with a 3-week minimum policy"/>
                        <BenefitCard title="Home Office Setup"
                                     description="$3,000 budget for your ideal remote work environment"/>
                        <BenefitCard title="AWS Credits"
                                     description="Personal AWS account credits for experimentation and learning"/>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
                        Ready to <span className="text-cyan-400">Get Started?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
                        Don&#39;t see the perfect role? We&#39;re always looking for exceptional talent.
                        Send us your resume and let&apos;s talk about how you can contribute to our mission.
                    </p>

                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 font-medium"
                        onClick={() => window.location.href = 'mailto:careers@amelion.co?subject=Application - Principal DevOps Engineer'}
                    >
                        Apply Now
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
        </div>
    );
}

// Job Listing Component
const JobListing = ({
                        id,
                        title,
                        type,
                        location,
                        salary,
                        description,
                        requirements,
                        responsibilities,
                        expanded,
                        onToggle
                    }) => (
    <Card
        className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl overflow-hidden">
        <CardContent className="p-0">
            <div className="p-8 cursor-pointer" onClick={onToggle}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2"/>
                  {type}
              </span>
                            <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2"/>
                                {location}
              </span>
                            <span className="text-green-400 font-medium">{salary}</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                        {expanded ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}
                    </Button>
                </div>
                <p className="text-white/70 font-light leading-relaxed">{description}</p>
            </div>

            {expanded && (
                <div className="px-8 pb-8 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Requirements</h4>
                            <ul className="space-y-3">
                                {requirements.map((req, index) => (
                                    <li key={index} className="flex items-start text-white/70">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"/>
                                        <span className="font-light">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Responsibilities</h4>
                            <ul className="space-y-3">
                                {responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start text-white/70">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"/>
                                        <span className="font-light">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
                            onClick={() => window.location.href = `mailto:careers@amelion.co?subject=Application - ${title}`}
                        >
                            Apply for This Position
                            <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
);

// Culture Card Component
const CultureCard = ({icon: Icon, title, description}) => (
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

// Benefit Card Component
const BenefitCard = ({title, description}) => (
    <Card
        className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl">
        <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h4>
            <p className="text-white/70 font-light text-sm leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);