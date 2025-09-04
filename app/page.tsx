"use client";

import React, {useState, useEffect} from 'react';
import {
    ArrowRight,
    Shield,
    Users,
    Cloud,
    CheckCircle,
    Menu,
    X,
    Phone,
    Briefcase,
    DollarSign,
    ClipboardCheck,
    Compass,
    FileText,
    ChevronLeft,
    ChevronRight,
    Award
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {createPageUrl} from '@/lib/utils';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    // Fix: Initialize showIntro to always start with true on both server and client
    const [showIntro, setShowIntro] = useState(true);
    const [introStep, setIntroStep] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [currentCertIndex, setCertIndex] = useState(0);

    // Fix: Use useEffect to check sessionStorage after component mounts
    useEffect(() => {
        // Check if intro was already shown
        const introShown = sessionStorage.getItem('introShown');
        if (introShown) {
            setShowIntro(false);
        }
    }, []);

    // Intro animation sequence
    useEffect(() => {
        if (showIntro) {
            const timer1 = setTimeout(() => setIntroStep(1), 500); // Name builds (fades in)
            const timer2 = setTimeout(() => setIntroStep(2), 1200); // Tagline appears (fades in)
            const timer3 = setTimeout(() => {
                setShowIntro(false);
                sessionStorage.setItem('introShown', 'true');
            }, 2500); // Fade out intro

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [showIntro]);


    // Data for detailed services (consulting-style layouts)
    const detailedServices = [
        {
            id: 'strategic-aws-advisory',
            icon: Briefcase,
            gradient: "from-blue-500 to-cyan-500",
            title: "Strategic AWS Advisory",
            description: "Ongoing, fractional leadership to guide your long-term AWS strategy, team enablement, and roadmap execution.",
            fullDescription: "Navigate the complexities of AWS with confidence. Our Strategic AWS Advisory service provides ongoing, fractional leadership to embed senior-level cloud expertise directly into your team. We help you define, refine, and execute a scalable and cost-effective AWS strategy that aligns perfectly with your business objectives. From initial cloud adoption frameworks to complex multi-account architectures, we ensure your AWS environment evolves strategically, proactively, and securely.",
            problem: "Without clear strategy, AWS environments can become costly, insecure, and difficult to manage, hindering business agility.",
            solution: "We act as your Fractional Head of Cloud/DevOps, offering expert guidance on architecture, governance, security, and FinOps, ensuring long-term AWS success.",
            benefits: [
                {icon: Shield, text: "Reduced operational overhead and risk"},
                {icon: DollarSign, text: "Optimized cloud spend through proactive governance"},
                {icon: Compass, text: "Clear, actionable roadmap for cloud evolution"},
                {icon: Users, text: "Empowered internal teams through knowledge transfer"},
            ],
            engagementSteps: [
                {
                    title: "Define Vision & Goals",
                    description: "Collaboratively establish your long-term cloud vision and immediate objectives."
                },
                {
                    title: "Current State Assessment",
                    description: "Deep dive into existing infrastructure, processes, and pain points."
                },
                {
                    title: "Strategic Roadmap",
                    description: "Develop a phased plan covering architecture, security, cost, and team upskilling."
                },
                {
                    title: "Ongoing Execution & Guidance",
                    description: "Provide continuous support, review, and adjustments as your needs evolve."
                }
            ],
        },
        {
            id: 'well-architected-reviews',
            icon: ClipboardCheck,
            gradient: "from-purple-500 to-pink-500",
            title: "Well-Architected Reviews",
            description: "A deep-dive audit of your workload against AWS best practices to reduce risk and build for scale.",
            fullDescription: "Ensure your AWS workloads are secure, high-performing, resilient, and cost-optimized. Our Well-Architected Review service systematically assesses your architecture against the five pillars of the AWS Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. We identify high-risk issues, provide actionable remediation plans, and help you unlock credits for immediate improvements.",
            problem: "Unidentified architectural flaws lead to security vulnerabilities, performance bottlenecks, high costs, and system failures.",
            solution: "A thorough review process identifying high-risk issues and providing actionable remediation plans, often with AWS credits.",
            benefits: [
                {icon: CheckCircle, text: "Improved security posture and compliance readiness"},
                {icon: Cloud, text: "Enhanced system reliability and performance"},
                {icon: DollarSign, text: "Significant cost savings through optimization"},
                {icon: ClipboardCheck, text: "Clear roadmap for architectural improvements"},
            ],
            engagementSteps: [
                {
                    title: "Discovery & Scope",
                    description: "Initial discussions to understand your key workloads and define review scope."
                },
                {
                    title: "Deep Dive Session",
                    description: "Collaborative workshop to analyze architecture against Well-Architected pillars."
                },
                {
                    title: "Findings & Recommendations",
                    description: "Delivery of a comprehensive report with prioritized, actionable improvements."
                },
                {
                    title: "Remediation Support",
                    description: "Optional support to implement recommendations and apply for AWS credits."
                }
            ],
        },
        {
            id: 'cost-optimization-finops',
            icon: DollarSign,
            gradient: "from-green-500 to-emerald-500",
            title: "Cost Optimization & FinOps",
            description: "Identify and eliminate wasted spend. We implement FinOps practices to create a culture of cost-awareness.",
            fullDescription: "Transform your cloud spending from a drain to a strategic advantage. Our Cost Optimization & FinOps service goes beyond simple cost cutting; we establish a robust FinOps framework within your organization. This involves identifying immediate savings opportunities through rightsizing, reserved instances, and spot instances, while also implementing cultural shifts, tools, and processes for continuous cost awareness and optimization across engineering, finance, and leadership teams.",
            problem: "Runaway cloud costs stifle innovation and impact profitability, often due to lack of visibility and ownership.",
            solution: "Implement FinOps best practices to gain visibility, optimize spend, and foster a culture of shared cloud financial accountability.",
            benefits: [
                {icon: DollarSign, text: "Significant and sustainable cost reductions"},
                {icon: Cloud, text: "Increased financial predictability for cloud spend"},
                {icon: Users, text: "Enhanced collaboration between engineering and finance"},
                {icon: Compass, text: "Data-driven decisions for future cloud investments"},
            ],
            engagementSteps: [
                {
                    title: "Assessment & Baseline",
                    description: "Analyze current spend, identify waste, and establish cost baseline."
                },
                {
                    title: "Strategic Recommendations",
                    description: "Propose immediate and long-term optimization strategies (RI, Savings Plans, Rightsizing)."
                },
                {
                    title: "FinOps Implementation",
                    description: "Establish tagging, budgeting, reporting, and cost allocation practices."
                },
                {
                    title: "Continuous Optimization",
                    description: "Ongoing monitoring, analysis, and refinement to ensure sustained savings."
                }
            ],
        },
        {
            id: 'security-compliance',
            icon: Shield,
            gradient: "from-orange-500 to-red-500",
            title: "Security & Compliance",
            description: "Enhance your security posture and prepare for compliance audits like SOC 2 and ISO 27001.",
            fullDescription: "Protect your data, applications, and reputation with a robust AWS security framework. Our Security & Compliance service evaluates your existing security posture, identifies vulnerabilities, and implements best practices to fortify your AWS environment. We also help you navigate complex compliance requirements, preparing your systems and processes for audits such as SOC 2, ISO 27001, HIPAA, or PCI DSS, ensuring you meet regulatory obligations with confidence.",
            problem: "Gaps in cloud security and compliance can lead to data breaches, regulatory fines, and reputational damage.",
            solution: "Comprehensive security assessments, implementation of protective controls, and preparation for compliance audits.",
            benefits: [
                {icon: Shield, text: "Strengthened defense against cyber threats"},
                {icon: ClipboardCheck, text: "Streamlined compliance audit preparation"},
                {icon: FileText, text: "Clear visibility into security risks"},
                {icon: CheckCircle, text: "Increased trust with customers and partners"},
            ],
            engagementSteps: [
                {
                    title: "Security Posture Assessment",
                    description: "Review existing security controls, configurations, and policies."
                },
                {
                    title: "Vulnerability Identification",
                    description: "Proactive scanning and analysis to uncover potential weaknesses."
                },
                {
                    title: "Remediation & Hardening",
                    description: "Implement security best practices (IAM, network, data encryption)."
                },
                {
                    title: "Compliance Readiness",
                    description: "Documentation, control mapping, and support for audit preparations."
                }
            ],
        },
    ];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => setMousePosition({x: e.clientX, y: e.clientY});

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setIsMenuOpen(false);
    };

    const handleNavigation = (item, index) => {
        // If a service detail is open, close it first
        if (selectedService) {
            setSelectedService(null);
            // Allow time for the "page" to close before scrolling
            setTimeout(() => {
                if (item === 'Careers') {
                    window.location.href = createPageUrl('Careers');
                } else if (item === 'Team') { // Added Team page navigation
                    window.location.href = createPageUrl('Team');
                } else {
                    const sections = ['services', 'process', 'team', 'about', 'careers', 'contact']; // Updated sections array
                    scrollToSection(sections[index]);
                }
            }, 300); // Small delay to allow fade out
        } else {
            if (item === 'Careers') {
                window.location.href = createPageUrl('Careers');
            } else if (item === 'Team') { // Added Team page navigation
                window.location.href = createPageUrl('Team');
            } else {
                const sections = ['services', 'process', 'team', 'about', 'careers', 'contact']; // Updated sections array
                scrollToSection(sections[index]);
            }
        }
    };

    const certifications = [
        {
            title: "AWS Solutions Architect",
            subtitle: "Professional",
            provider: "AWS",
            badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de3975858d/aws-certified-solutions-architect-professional.png",
            level: "Expert Level"
        },
        {
            title: "AWS DevOps Engineer",
            subtitle: "Professional",
            provider: "AWS",
            badgeUrl: "https://images.credly.com/size/340x340/images/2d1b8022-2463-4861-a4be-a2335f3b7c4a/aws-certified-devops-engineer-professional.png",
            level: "Expert Level"
        },
        {
            title: "Certified Kubernetes",
            subtitle: "Administrator (CKA)",
            provider: "CNCF",
            badgeUrl: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4258-89a7-955c45480ade/cka_from_cncfsite.png",
            level: "Professional"
        },
        {
            title: "AWS Security",
            subtitle: "Specialty",
            provider: "AWS",
            badgeUrl: "https://images.credly.com/size/340x340/images/e83f2a8f-285b-437f-a65b-568339185794/aws-certified-security-specialty.png",
            level: "Specialty"
        },
        {
            title: "Kubernetes Application",
            subtitle: "Developer (CKAD)",
            provider: "CNCF",
            badgeUrl: "https://images.credly.com/size/340x340/images/d880e61d-4537-4357-9a99-450f7f3292ea/ckad_from_cncfsite.png",
            level: "Professional"
        },
        {
            title: "AWS SysOps",
            subtitle: "Administrator",
            provider: "AWS",
            badgeUrl: "https://images.credly.com/size/340x340/images/3f643e06-96b6-496a-9a91-17b545431637/aws-certified-sysops-administrator-associate.png",
            level: "Associate"
        }
    ];

    // Calculate the total number of carousel items (groups of 3 certifications)
    // Ensures at least 1 item if there are fewer than 3 certifications
    const numVisibleCerts = 3;
    const totalCarouselItems = Math.max(1, certifications.length - numVisibleCerts + 1);

    const nextCert = () => {
        setCertIndex((prev) => (prev + 1) % totalCarouselItems);
    };

    const prevCert = () => {
        setCertIndex((prev) => (prev - 1 + totalCarouselItems) % totalCarouselItems);
    };

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            {/* Creative Intro Animation */}
            {showIntro && (
                <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
                    {/* Main intro content */}
                    <div className="relative z-10 text-center">
                        {/* Step 1: Company name builds */}
                        <div
                            className={`transition-opacity duration-1000 ${introStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white">
                                {'Amelion'.split('').map((letter, i) => (
                                    <span
                                        key={i}
                                        className="inline-block"
                                    >
                    {letter}
                  </span>
                                ))}
                            </h1>
                        </div>

                        {/* Step 2: Tagline appears */}
                        <div
                            className={`transition-opacity duration-800 delay-500 ${introStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-lg text-white/60 font-light tracking-widest">
                                CLOUD EXCELLENCE
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content with fade-in */}
            <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
                {/* Navigation - Apple Style */}
                <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    scrollY > 50 ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
                }`}>
                    <div className="max-w-7xl mx-auto px-8 py-6">
                        <div className="flex justify-between items-center">
                            <button
                                onClick={scrollToTop}
                                className="text-2xl font-semibold tracking-tight text-white hover:text-blue-400 transition-colors cursor-pointer"
                            >
                                Amelion
                            </button>

                            <div className="hidden md:flex space-x-10">
                                {['Engagements', 'Process', 'Team', 'Why Amelion', 'Careers', 'Contact'].map((item, index) => (
                                    <button
                                        key={item}
                                        onClick={() => handleNavigation(item, index)}
                                        className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="md:hidden text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>

                        {isMenuOpen && (
                            <div
                                className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10">
                                <div className="px-8 py-6 space-y-6">
                                    {['Engagements', 'Process', 'Team', 'Why Amelion', 'Careers', 'Contact'].map((item, index) => (
                                        <button
                                            key={item}
                                            onClick={() => handleNavigation(item, index)}
                                            className="block text-white/80 hover:text-white transition-colors text-lg"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Hero Section - Apple Style */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Dynamic background with mouse interaction */}
                    <div className="absolute inset-0">
                        <div
                            className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-60 transition-all duration-700"
                            style={{
                                left: `${mousePosition.x / 10}px`,
                                top: `${mousePosition.y / 10}px`,
                                transform: `translate(-50%, -50%) scale(${1 + scrollY / 5000})`
                            }}
                        />
                        <div
                            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
                    </div>

                    <div className="max-w-7xl mx-auto px-8 relative z-10">
                        <div className="text-center">
                            {/* Apple-style badge */}
                            <div className="mb-8">
                                <div
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-sm text-white/90 mb-8 hover:bg-white/10 transition-all duration-300">
                                    <Briefcase className="w-4 h-4 mr-3 text-blue-400"/>
                                    Your Fractional Head of AWS Infrastructure
                                </div>
                            </div>

                            {/* Apple-style typography */}
                            <h1 className="text-6xl md:text-8xl font-semibold mb-8 leading-none tracking-tight">
                                On-Demand
                                <br/>
                                <span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AWS Leadership
                </span>
                            </h1>

                            <div className="max-w-2xl mx-auto mb-12">
                                <p className="text-2xl text-white/70 leading-relaxed font-light">
                                    Pragmatic, senior-level AWS expertise to help you scale infrastructure, optimize
                                    costs, and build with confidence.
                                </p>
                            </div>

                            {/* Apple-style CTA */}
                            <div className="flex justify-center">
                                <Button
                                    asChild
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 font-medium"
                                >
                                    <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                                        Schedule a Strategy Call
                                        <ArrowRight className="ml-3 w-5 h-5"/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </section>

                {/* Services Section - Apple Product Grid Style */}
                <section id="services" className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Our Core <span className="text-blue-400">Engagements</span>
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                                Flexible engagements designed to drive business outcomes through AWS excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {detailedServices.map((service) => (
                                <AppleServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    gradient={service.gradient}
                                    title={service.title}
                                    description={service.description}
                                    large={service.id === 'strategic-aws-advisory' || service.id === 'security-compliance'}
                                    onClick={() => setSelectedService(service)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Carousel Section */}
                <section className="py-32 bg-gradient-to-b from-gray-900/10 to-black relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Certified <span className="text-emerald-400">Excellence</span>
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                                Our team holds industry-leading certifications from AWS and the Cloud Native Computing
                                Foundation.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Carousel Container */}
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={prevCert}
                                    className="hidden md:flex w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 items-center justify-center mr-8 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-white"/>
                                </button>

                                {/* Certifications Display */}
                                <div
                                    className="flex flex-col md:flex-row gap-6 w-full md:max-w-4xl mx-auto justify-center">
                                    {certifications.slice(currentCertIndex, currentCertIndex + numVisibleCerts).map((cert, index) => (
                                        <CertificationBadge key={`${cert.title}-${currentCertIndex + index}`}
                                                            cert={cert} index={index}/>
                                    ))}
                                </div>

                                <button
                                    onClick={nextCert}
                                    className="hidden md:flex w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 items-center justify-center ml-8 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white"/>
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="md:hidden flex justify-center mt-8 gap-4">
                                <button
                                    onClick={prevCert}
                                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white/60"/>
                                </button>
                                <button
                                    onClick={nextCert}
                                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                                >
                                    <ChevronRight className="w-5 h-5 text-white/60"/>
                                </button>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="flex justify-center mt-8 gap-2">
                                {Array.from({length: totalCarouselItems}, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCertIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentCertIndex ? 'bg-emerald-400 w-8' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Additional Trust Indicators */}
                        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div
                                    className="text-3xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+
                                </div>
                                <div className="text-white/60 font-light">AWS Certifications</div>
                            </div>
                            <div className="group">
                                <div
                                    className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+
                                </div>
                                <div className="text-white/60 font-light">Kubernetes Certifications</div>
                            </div>
                            <div className="group">
                                <div
                                    className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+
                                </div>
                                <div className="text-white/60 font-light">Years Experience</div>
                            </div>
                            <div className="group">
                                <div
                                    className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+
                                </div>
                                <div className="text-white/60 font-light">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Apple Timeline Style */}
                <section id="process" className="py-32 bg-gradient-to-b from-gray-900/20 to-black">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Our Engagement <span className="text-purple-400">Process</span>
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">A straightforward path to
                                AWS clarity and success.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {/* Connection line */}
                            <div
                                className="hidden md:block absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"/>

                            <AppleProcessStep
                                icon={Phone}
                                number="01"
                                title="Discovery Call"
                                description="A free call to understand your challenges, goals, and business context."
                                delay="0"
                            />
                            <AppleProcessStep
                                icon={FileText}
                                number="02"
                                title="Strategic Roadmap"
                                description="We deliver a clear, actionable plan tailored to your specific needs."
                                delay="200"
                            />
                            <AppleProcessStep
                                icon={Users}
                                number="03"
                                title="Execute & Partner"
                                description="We execute the plan and partner with your team for long-term success."
                                delay="400"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section - Apple Feature Showcase Style */}
                <section id="about" className="py-32 relative">
                    <div className="max-w-6xl mx-auto px-8 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
                                Your Strategic <span className="text-cyan-400">AWS Partner</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16">
                            <AppleFeature
                                title="Pragmatic Leadership"
                                color="blue"
                                description="We provide practical, battle-tested guidance, not academic theory. Our focus is on delivering results that directly impact your business."
                            />
                            <AppleFeature
                                title="Deep AWS Expertise"
                                color="purple"
                                description="With certified, senior-level experience, we navigate the complexities of AWS so you can focus on your product."
                            />
                            <AppleFeature
                                title="Business-Focused"
                                color="green"
                                description="We translate technical decisions into business outcomes, ensuring your cloud investment accelerates growth and profitability."
                            />
                            <AppleFeature
                                title="Team Empowerment"
                                color="orange"
                                description="Our goal is to upskill your team. We work collaboratively, transferring knowledge to make your engineering organization stronger."
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Section - Apple CTA Style */}
                <section id="contact" className="py-32 relative">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight leading-tight">
                            Ready to Optimize Your <br/>
                            <span className="text-blue-400">AWS Investment?</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                            Schedule a complimentary strategy call to discuss your challenges and discover how Amelion
                            can help.
                        </p>

                        <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 font-medium"
                        >
                            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                                Schedule Your Strategy Call
                                <ArrowRight className="ml-3 w-6 h-6"/>
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Footer - Apple Minimal Style */}
                <footer className="py-16 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center">
                            <div className="text-2xl font-semibold mb-4 tracking-tight">
                                Amelion
                            </div>
                            <p className="text-white/50 mb-6 font-light">
                                On-Demand AWS Leadership & Strategy
                            </p>
                            <p className="text-white/30 text-sm font-light">
                                © 2025 Amelion. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Render selected service details as a "page" */}
            {selectedService && (
                <ServiceDetailSection
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </div>
    );
}

// New component for detailed service view (consulting-style layout)
const ServiceDetailSection = ({service, onClose}) => {
    if (!service) return null;

    return (
        <section
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-3xl overflow-y-auto pt-24 pb-16 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-8 relative">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors duration-200"
                >
                    <X size={32}/>
                </button>

                <div className="text-center mb-16">
                    <div
                        className={`inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-sm text-white/90 mb-6`}>
                        <service.icon className="w-5 h-5 mr-3 text-blue-400"/>
                        Our Expertise
                    </div>
                    <h2 className="text-6xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
                        {service.title}
                    </h2>
                    <p className="text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </div>

                {/* Full Description */}
                <div className="max-w-4xl mx-auto mb-20">
                    <p className="text-xl text-white/80 leading-relaxed font-light">{service.fullDescription}</p>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
                    <Card className="bg-white/5 border border-white/10 p-8">
                        <h3 className="text-3xl font-semibold text-red-400 mb-6">The Problem</h3>
                        <p className="text-white/70 text-lg leading-relaxed">{service.problem}</p>
                    </Card>
                    <Card className="bg-white/5 border border-white/10 p-8">
                        <h3 className="text-3xl font-semibold text-green-400 mb-6">Our Solution</h3>
                        <p className="text-white/70 text-lg leading-relaxed">{service.solution}</p>
                    </Card>
                </div>

                {/* Benefits Section */}
                <div className="mb-20">
                    <h3 className="text-5xl font-semibold text-center mb-12 tracking-tight">Key Benefits</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {service.benefits.map((benefit, idx) => (
                            <div key={idx}
                                 className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all duration-300">
                                <benefit.icon
                                    className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"/>
                                <p className="text-lg text-white/70 font-light">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Engagement Steps */}
                <div className="mb-20">
                    <h3 className="text-5xl font-semibold text-center mb-12 tracking-tight">Our Approach</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
                        <div
                            className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-white/10"/>
                        {service.engagementSteps.map((step, idx) => (
                            <div key={idx}
                                 className="relative text-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all duration-300">
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-black">
                                    {idx + 1}
                                </div>
                                <h4 className="text-xl font-semibold mt-6 mb-3 text-white tracking-tight">{step.title}</h4>
                                <p className="text-white/70 font-light text-base">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA */}
                <div className="text-center">
                    <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 font-medium"
                    >
                        <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                            Schedule Consultation
                            <ArrowRight className="ml-3 w-6 h-6"/>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};


// Apple-style Service Card Component
const AppleServiceCard = ({icon: Icon, gradient, title, description, large = false, onClick}) => (
    <button
        onClick={onClick}
        className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 text-left w-full ${large ? 'md:col-span-1' : ''}`}
    >
        <div className="p-10">
            <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white"/>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white tracking-tight">{title}</h3>
            <p className="text-white/70 leading-relaxed font-light text-lg">{description}</p>
        </div>
        <div
            className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}/>
    </button>
);

// Apple-style Process Step Component
const AppleProcessStep = ({icon: Icon, number, title, description, delay}) => (
    <div className="text-center relative z-10" style={{animationDelay: `${delay}ms`}}>
        <div className="relative mb-8">
            <div
                className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mx-auto hover:bg-white/10 transition-all duration-300 group">
                <Icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div
                className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                {number}
            </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">{title}</h3>
        <p className="text-white/60 font-light leading-relaxed">{description}</p>
    </div>
);

// Apple-style Feature Component
const AppleFeature = ({title, description, color}) => {
    const colorClasses = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        green: 'text-green-400',
        orange: 'text-orange-400',
    };

    return (
        <div className="group">
            <h3 className={`text-3xl font-semibold mb-6 ${colorClasses[color]} tracking-tight group-hover:scale-105 transition-transform duration-300`}>
                {title}
            </h3>
            <p className="text-white/70 leading-relaxed text-lg font-light">
                {description}
            </p>
        </div>
    );
};

// Certification Badge Component
const CertificationBadge = ({cert, index}) => (
    <div
        className="flex-1 min-w-[280px] max-w-[350px] group"
        style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
    >
        <div
            className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 p-8 text-center h-full flex flex-col justify-between">
            <div>
                {/* Certification Badge Image */}
                <div
                    className="relative mx-auto mb-8 w-32 h-32 group-hover:scale-110 transition-transform duration-300">
                    <img src={cert.badgeUrl} alt={`${cert.title} Badge`} className="w-full h-full object-contain"/>
                </div>

                {/* Provider Badge */}
                <div
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/80 mb-4">
                    <Award className="w-3 h-3 mr-1"/>
                    {cert.provider}
                </div>

                {/* Certification Title */}
                <h3 className="text-xl font-semibold mb-2 text-white tracking-tight leading-tight">
                    {cert.title}
                </h3>
                <p className="text-lg text-white/70 font-light mb-3">
                    {cert.subtitle}
                </p>
            </div>

            {/* Level Badge */}
            <div
                className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-xs font-medium text-white/60 self-center mt-auto">
                {cert.level}
            </div>
        </div>
    </div>
);

// Add animations
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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes letter-drop {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
  .animate-float { animation: float infinite ease-in-out; }
  .animate-letter-drop { animation: letter-drop 0.6s ease-out forwards; }
  .animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
