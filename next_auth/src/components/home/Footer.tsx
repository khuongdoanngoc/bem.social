"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">BemSocial</h3>
                        <p className="mb-4">
                            A modern social platform built on microservices architecture.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Twitter</span>
                                🐦
                            </a>
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Facebook</span>
                                📘
                            </a>
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Instagram</span>
                                📷
                            </a>
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">GitHub</span>
                                🐙
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">API</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">Tutorials</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Cookies</a></li>
                            <li><a href="#" className="hover:text-white">GDPR</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} BemSocial. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 