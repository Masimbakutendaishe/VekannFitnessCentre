import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full font-sans">
            {/* Links Section */}
            <div className="bg-black text-white py-10 px-5 flex flex-wrap justify-between">
                {/* Contact Us */}
                <div className="flex-1 mr-5">
                    <h3 className="text-xl mb-2">Contact Us</h3>
                    <p className="text-lg">
                        32230 Mabvazuva Estate<br />
                        Ruwa, Harare<br />
                        Zimbabwe<br />
                        <a href="tel:+263772716084" className="hover:underline">+263772716084</a> or <a href="tel:+263775138485" className="hover:underline">+263775138485</a>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex-1 mr-5 text-center">
                    <h3 className="text-xl mb-2">Quick Links</h3>
                    <ul className="list-none p-0">
                        <li><a href="/personal-training" className="hover:text-brown hover:underline">Personal Training</a></li>
                        <li><a href="/our-team" className="hover:text-brown hover:underline">Our Team</a></li>
                        <li><a href="/schedule" className="hover:text-brown hover:underline">Schedule</a></li>
                        <li><a href="/membership" className="hover:text-brown hover:underline">Membership</a></li>
                        <li><a href="/contact" className="hover:text-brown hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex-1">
                    <Image src="/footerlogo.png" alt="Vekann Fitness Center Logo" className="max-w-xs mx-auto" width={150} height={150} />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black text-white py-3 text-center">
                <p>&copy; 2025 TEEM SHE x Vekann Fitness Center. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/fbicon.png" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/igicon.png" alt="Instagram" width={24} height={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/liicon.png" alt="LinkedIn" width={24} height={24} />
                    </a>
                    <a href="mailto:info@vekannfitness.com">
                        <Image src="/gmailicon.png" alt="Gmail" width={24} height={24} />
                    </a>
                    <a href="tel:+263772716084">
                        <Image src="/phone.png" alt="Contact Number" width={24} height={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
