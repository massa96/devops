import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="logo">DevOps Blog</Link>
                <nav className="site-nav">
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/about">À propos</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;