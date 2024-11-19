'use client';
import React from 'react';
import Link from 'next-intl';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../lagn-switcher';
import { IconType } from 'react-icons'; // React Icons'dan ikonları tiplemek için

// İkonları dinamik olarak eşlemek için bir yardımcı nesne
const ICON_MAP: { [key: string]: IconType } = {
    TiHomeOutline: require('react-icons/ti').TiHomeOutline,
    IoPersonCircleOutline: require('react-icons/io').IoPersonCircleOutline,
    work: require('react-icons/md').MdWorkOutline, // Örnek: MdWorkOutline
    blog: require('react-icons/fa').FaBlog,       // Örnek: FaBlog
    contact: require('react-icons/io').IoMailOutline // Örnek: IoMailOutline
};

const Header: React.FC = () => {
    const t = useTranslations('common'); // 'navLinks' varsayılan namespace
    const navLinks = t.raw('navLinks'); // JSON'daki 'navLinks' listesini ham olarak alır
    const currentPath = usePathname(); // Mevcut sayfanın yolunu alır

    return (
        <header className="w-full fixed container mx-auto px-2 z-50 bottom-0 md:top-0 md:bottom-auto flex justify-between py-2 bg-opacity-80">
            {/* Logo */}
            <div className="logo text-white hidden md:block">Baku Azerbaijan</div>

            {/* Navigasyon */}
            <nav
                style={{ backdropFilter: 'blur(10px) brightness(0.7)' }}
                className="z-50 flex bg-opacity-50 xl:ml-12 space-x-1 rounded-full px-1 py-1"
            >
                {navLinks.map((link: any, index: number) => {
                    // İlgili ikon bileşenini bul
                    const Icon = ICON_MAP[link.icon] || null;

                    return (
                        <Link key={index} href={link.href}>
                            <div
                                className={`flex items-center justify-center space-x-1 sm:space-x-1 px-2 sm:px-4 py-1 rounded-full transition-colors duration-300 
                                    border border-transparent hover:border-gray-400 hover:bg-white hover:bg-opacity-10 text-white hover:text-white
                                    ${currentPath === link.href
                                        ? 'border-gray-400 bg-white bg-opacity-20 text-white font-semibold'
                                        : ''
                                    }`}
                            >
                                {/* İkonu göster */}
                                {Icon && <Icon className="text-xl" />}
                                {/* Sadece büyük ekranlarda etiketi göster */}
                                <span className="font-medium hidden md:inline">{link.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Dil Seçici */}
            <LanguageSwitcher />
        </header>
    );
};

export default Header;
