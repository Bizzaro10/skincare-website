import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-p1 text-white py-32 px-5 overflow-hidden min-h-[120vh]">
            {/* Large Background Typography - Positioned Lower */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ paddingTop: '25vh' }}>
                <div className="w-full text-center">
                    <div className="text-[15vw] sm:text-[14vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] font-bold text-white/5 select-none leading-none tracking-wider whitespace-nowrap">
                        skincare
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 mb-32">
                    {/* Left Column - Community CTA */}
                    <div className="space-y-8">
                        <h2 className="text-5xl lg:text-6xl xl:text-7xl font-inter leading-tight">
                            Join The Skincare<br />
                            Community Now.
                        </h2>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-8 lg:text-right">
                        <p className="text-2xl text-white/80 font-medium">
                            Get in Touch
                        </p>
                        <p className="text-4xl lg:text-5xl xl:text-6xl font-inter">
                            contact.skincare.com
                        </p>
                    </div>
                </div>

                {/* Bottom Links */}
                <div >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Social Media Links */}
                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-10">
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    YouTube
                                </a>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="space-y-8 md:text-right">
                            <div className="flex flex-wrap gap-10 md:justify-end">
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    Terms of Service
                                </a>
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-xl"
                                >
                                    Cookies Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;