"use client";
import React from 'react';
import Navbar from '../components/Navbar';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="pt-24 pb-16 px-[5%] max-w-5xl mx-auto">
                <h1 
                    className="font-bold text-black mb-6"
                    style={{
                        fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        letterSpacing: "0.2em"
                    }}
                >
                    PRIVACY POLICY
                </h1>
                
                <p 
                    className="text-gray-600 mb-12"
                    style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                    }}
                >
                    Last Updated: 21 November 2025
                </p>

                <div 
                    className="space-y-8 text-gray-800 leading-relaxed"
                    style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)"
                    }}
                >
                    <p>
                        Collective AEC is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website collectiveaec.com, contact us, or use our services.
                    </p>

                    <p>
                        By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
                    </p>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            1. INFORMATION WE COLLECT
                        </h2>
                        
                        <h3 
                            className="font-semibold text-black mt-6 mb-3"
                            style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)"
                            }}
                        >
                            A. Personal Information You Provide
                        </h3>
                        <p className="mb-3">We may collect the following information when you voluntarily submit it:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Your name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name</li>
                            <li>Project details you share</li>
                            <li>Files or documents you upload for service inquiries</li>
                            <li>Billing and payment information (secured via payment gateway)</li>
                        </ul>

                        <h3 
                            className="font-semibold text-black mt-6 mb-3"
                            style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)"
                            }}
                        >
                            B. Automatically Collected Information
                        </h3>
                        <p className="mb-3">When you browse our website, we may automatically collect:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Pages viewed and time spent</li>
                            <li>Cookies and tracking data</li>
                        </ul>
                        <p className="mt-3">This helps us improve website performance and user experience.</p>

                        <h3 
                            className="font-semibold text-black mt-6 mb-3"
                            style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)"
                            }}
                        >
                            C. Information from Third Parties
                        </h3>
                        <p className="mb-3">We may receive information from:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Referral partners</li>
                            <li>Marketing platforms</li>
                            <li>Payment gateways</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            2. HOW WE USE YOUR INFORMATION
                        </h2>
                        <p className="mb-3">We use your information to:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Provide BIM, design, or automation services</li>
                            <li>Respond to project inquiries and support requests</li>
                            <li>Send proposals, estimates, and service updates</li>
                            <li>Improve website functionality and service delivery</li>
                            <li>Process payments and maintain financial records</li>
                            <li>Run targeted marketing or remarketing campaigns</li>
                            <li>Maintain communication with referral and collaboration partners</li>
                        </ul>
                        <p className="mt-4 font-semibold">We do not sell your personal data.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            3. HOW WE SHARE YOUR INFORMATION
                        </h2>
                        <p className="mb-3">We may share your information with:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Trusted team members who are working on your project</li>
                            <li>Technology partners (e.g., hosting, automation, email services)</li>
                            <li>Payment processors for secure transactions</li>
                            <li>Compliance or legal authorities, only when required by law</li>
                        </ul>
                        <p className="mt-4">All third-party partners are bound by confidentiality agreements.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            4. COOKIES AND TRACKING TECHNOLOGIES
                        </h2>
                        <p className="mb-3">We use cookies to:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Improve website performance</li>
                            <li>Understand user behavior</li>
                            <li>Customize content</li>
                            <li>Run analytics and advertising campaigns</li>
                        </ul>
                        <p className="mt-4">You can disable cookies in your browser settings, but some site features may not work properly.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            5. DATA SECURITY
                        </h2>
                        <p className="mb-3">We implement industry-standard measures to protect your data:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Encrypted servers</li>
                            <li>Secure file transfer systems</li>
                            <li>Role-based access control</li>
                            <li>Regular security reviews</li>
                        </ul>
                        <p className="mt-4">However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            6. DATA RETENTION
                        </h2>
                        <p className="mb-3">We retain your data only as long as necessary to:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Fulfill the purpose for which it was collected</li>
                            <li>Comply with legal obligations</li>
                            <li>Maintain project records</li>
                        </ul>
                        <p className="mt-4">You may request deletion of your data at any time.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            7. YOUR RIGHTS
                        </h2>
                        <p className="mb-3">Depending on your region, you may have the right to:</p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Access your personal data</li>
                            <li>Request corrections</li>
                            <li>Request deletion</li>
                            <li>Withdraw consent</li>
                            <li>Request data portability</li>
                            <li>Opt out of marketing</li>
                        </ul>
                        <p className="mt-4">
                            To submit a request, email us at{' '}
                            <a href="mailto:info@collectiveaec.com" className="text-blue-600 hover:underline">
                                info@collectiveaec.com
                            </a>
                            {' '}or use the contact form on our website.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            8. LINKS TO THIRD-PARTY WEBSITES
                        </h2>
                        <p>Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            9. CHILDREN&apos;S PRIVACY
                        </h2>
                        <p>We do not knowingly collect information from individuals under 16 years of age.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            10. CHANGES TO THIS PRIVACY POLICY
                        </h2>
                        <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.</p>
                    </section>

                    <section className="mt-12">
                        <h2 
                            className="font-bold text-black mb-4"
                            style={{
                                fontFamily: "var(--font-bruno-ace-sc), sans-serif",
                                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            11. CONTACT US
                        </h2>
                        <p className="mb-3">If you have any questions about this Privacy Policy, you can contact us at:</p>
                        <div className="pl-4 space-y-1">
                            <p className="font-semibold">Collective AEC</p>
                            <p>
                                Email:{' '}
                                <a href="mailto:info@collectiveaec.com" className="text-blue-600 hover:underline">
                                    info@collectiveaec.com
                                </a>
                            </p>
                            <p>Website: collectiveaec.com</p>
                            <p>Location: India & Japan (Global Clients)</p>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
}
