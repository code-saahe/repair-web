import React from 'react';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return (
        <footer className="bg-yellow-400 text-blue py-4 px-8">
            <div className="flex justify-between items-center">
                <p className="text-sm">© 2024 Kearney Unlocking Services LLC</p>
                <div className="flex space-x-4">
                    <Link href="/About">
                        <span className="hover:underline text-grey">About Us</span>
                    </Link>
                    <Link
                        href="https://www.instagram.com/kearneyunlockingllc/" // Replace with your Instagram handle
                        className="hover:underline text-grey"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <InstagramIcon />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;