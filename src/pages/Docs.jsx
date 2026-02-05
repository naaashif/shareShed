import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Docs() {

    const [activeSection, setActiveSection] = useState('faqs')
    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="min-h-screen bg-[#F1F0E9]">
            <Header />

            {/* Hero Section */}
            <div className="bg-[#1C352D] text-white py-4 px-4 md:px-0 border-t  border-slate-600">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
                    <p className="text-lg text-gray-300">Everything you need to know about ShareShed</p>
                </div>

            </div>

            {/* Sticky Navigation */}
            <div className="sticky top-0 z-40 bg-[#F1F0E9] shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="flex overflow-x-auto py-4 gap-2 md:gap-4 scrollbar-hide">
                        <button
                            onClick={() => scrollToSection('faqs')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'faqs'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            FAQs
                        </button>
                        <button
                            onClick={() => scrollToSection('privacy')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'privacy'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => scrollToSection('terms')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'terms'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Terms & Conditions
                        </button>
                        <button
                            onClick={() => scrollToSection('distributors')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'distributors'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Distributors
                        </button>
                        <button
                            onClick={() => scrollToSection('refer')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'refer'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Refer Us
                        </button>
                        <button
                            onClick={() => scrollToSection('support')}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeSection === 'support'
                                ? 'bg-[#1C352D] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        > Support
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* FAQs Section */}
                <section id="faqs" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Frequently Asked Questions</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How does ShareShed work?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ShareShed connects tool owners with people who need them. Browse available tools,
                                select your rental dates, send a request, and coordinate pickup. It's that simple!
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I rent a tool?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                <Link to='/login' className='text-blue-500 hover:underline'>Create an account</Link>, browse our catalog, select the tool you need, choose your rental
                                dates, and send a rental request. The owner will respond within 24 hours to confirm
                                availability and arrange pickup details.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I list my own tools?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Yes! <Link to='/register' className='text-blue-500 hover:underline'> Sign up as a provider</Link>, list your tools with photos and descriptions, set your
                                rental rates, and start earning money from tools that would otherwise sit unused.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">What if a tool gets damaged?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                All rentals are covered by our protection policy. Renters are responsible for
                                returning tools in the same condition. Any damages should be reported immediately,
                                and our support team will help resolve the issue.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How is payment handled?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Payment is processed securely through our platform. Funds are held until the rental
                                is complete and both parties confirm successful completion. We accept all major
                                credit cards and digital payment methods.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I rent a sledgehammer for "stress relief purposes"?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                While we admire your creative approach to anger management, we recommend therapy, yoga, or
                                maybe a punching bag instead. That said, if you have some legitimate demolition work (like
                                tearing down a wall, not your neighbor's mailbox), go for it! Just remember: the sledgehammer
                                is for projects, not feelings.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Section */}
                <section id="privacy" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Privacy Policy</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Information We Collect</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                We collect information you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Name, email address, and contact information</li>
                                <li>Payment and billing information</li>
                                <li>Profile information and preferences</li>
                                <li>Communication between users through our platform</li>
                                <li>Tool listings and rental history</li>
                                <li>your daily self-esteem levels and occasional selfies ( just kidding, we don't collect that )</li>
                            </ul>
                            
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Detect and prevent fraud and abuse</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Information Sharing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We do not sell your personal information. We may share your information with service
                                providers who perform services on our behalf, such as payment processing, data
                                analysis, and customer service. We may also share information when required by law
                                or to protect our rights.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Security</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your
                                personal information. However, no method of transmission over the internet is 100%
                                secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Rights</h3>
                            <p className="text-gray-600 leading-relaxed">
                                You have the right to access, update, or delete your personal information. You can
                                do this through your account settings or by contacting our support team. You may
                                also opt out of marketing communications at any time.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
                            <p className="text-gray-600 leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at
                                <a href='mailto:nashif104@gmail.com' className='text-blue-500 hover:underline'>
                                    &nbsp;shareshed@mail.com</a> or through our support page.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Terms and Conditions Section */}
                <section id="terms" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Terms and Conditions</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Acceptance of Terms</h3>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing and using ShareShed, you accept and agree to be bound by these Terms
                                and Conditions. If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">User Accounts</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                To use ShareShed, you must:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Be at least 18 years old</li>
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Accept responsibility for all activities under your account</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rental Agreements</h3>
                            <p className="text-gray-600 leading-relaxed">
                                When you rent a tool through ShareShed, you agree to return it in the same condition,
                                on time, and to pay all agreed-upon fees. Tool owners agree to provide tools in good
                                working condition and as described in their listings.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prohibited Activities</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                You may not:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Use the platform for any illegal purpose</li>
                                <li>Post false, misleading, or fraudulent listings</li>
                                <li>Interfere with the proper functioning of the platform</li>
                                <li>Attempt to circumvent payment through the platform</li>
                                <li>Harass or harm other users</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Liability and Insurance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ShareShed provides a platform for connecting users but is not a party to rental
                                agreements. Users are responsible for their own actions and any damages. We
                                recommend obtaining appropriate insurance coverage.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dispute Resolution</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Any disputes arising from use of our platform will be resolved through binding
                                arbitration in accordance with applicable laws. You waive your right to participate
                                in class action lawsuits.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modifications</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these terms at any time. Continued use of the
                                platform after changes constitutes acceptance of the modified terms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Distributors Section */}
                <section id="distributors" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Become a Distributor</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Join Our Network</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Join ShareShed as a distributor and expand your tool rental business. We welcome
                                hardware stores, equipment rental companies, construction suppliers, and individual
                                tool owners to provide a wider range of tools to our users.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Become a Distributor?</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Reach thousands of potential renters in your area</li>
                                <li>Manage your listings through an easy-to-use dashboard</li>
                                <li>Set your own rental rates and availability</li>
                                <li>Connect directly with customers</li>
                                <li>Earn extra income from tools you already own</li>
                                <li>Build your reputation with reviews and ratings</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Getting Started</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                Becoming a distributor is simple:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Register as a distributor on our platform</li>
                                <li>Create your profile with business details</li>
                                <li>List your tools with photos and descriptions</li>
                                <li>Set your rental prices and availability</li>
                                <li>Start receiving rental requests</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                            <Link to="/register" className="text-blue-800 font-medium hover:underline">
                                Register now and start listing your tools!
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer Us Section */}
                <section id="refer" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Refer Us</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Help Us Grow</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Love ShareShed? Help us spread the word! By sharing ShareShed with your friends,
                                family, and colleagues, you're helping build a stronger community of tool sharing
                                and supporting sustainable practices.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Refer ShareShed?</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Help others save money on tool purchases</li>
                                <li>Support sustainable sharing economy practices</li>
                                <li>Build a stronger local community</li>
                                <li>Give your friends access to tools they need</li>
                                <li>Grow the network of available tools in your area</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Share</h3>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#1C352D] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</span>
                                    <p className="text-gray-600 pt-1">Tell your friends and family about ShareShed</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#1C352D] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</span>
                                    <p className="text-gray-600 pt-1">Share our website on social media platforms</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#1C352D] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</span>
                                    <p className="text-gray-600 pt-1">Recommend ShareShed when someone needs tools</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#1C352D] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</span>
                                    <p className="text-gray-600 pt-1">Leave a review and share your experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                            <p className="text-green-800 font-medium">
                                Every referral helps us build a better tool-sharing community. Thank you for your support!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section id="support" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[#1C352D] mb-6">Customer Support</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="font-semibold text-gray-700 min-w-20">Email:</span>
                                    <a href="mailto:nashif@gmail.com" className="text-blue-600 hover:underline">
                                        shareshed@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="font-semibold text-gray-700 min-w-20">Phone:</span>
                                    <a href="tel:+918590319905" className="text-blue-600 hover:underline">
                                        +91 8590319905
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="font-semibold text-gray-700 min-w-20">Hours:</span>
                                    <span className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Response Times</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We aim to respond to all inquiries within 24 hours. For urgent matters regarding
                                active rentals, please call our support line for immediate assistance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Report an Issue</h3>
                            <p className="text-gray-600 leading-relaxed">
                                If you experience problems with a rental, damaged equipment, or payment issues,
                                please report it immediately through your account dashboard or contact support.
                                Include your email ID and detailed description of the issue.
                            </p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                            <a href='mailto:nashif104@gmail.com'
                                className="text-blue-800 font-medium hover:underline">
                                Need help? We're here for you! Reach out anytime to us
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Docs