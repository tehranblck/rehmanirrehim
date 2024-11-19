// components/LanguageSwitcher.tsx

"use client";
import { IoLanguage } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const currentLocale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Desteklenen diller ve gösterim değerleri
    const languages = [
        { code: 'az', label: 'AZ' },
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' },
    ];

    const handleLocaleChange = (locale: string) => {
        // Dil önekini temizlemek için `pathname`'in başlangıcındaki dil öneğini kaldırıyoruz
        const pathWithoutLocale = pathname.replace(/^\/(az|en|ru)(\/|$)/, '/'); // Tüm dil öneklerini kaldırır

        // Yeni URL yapısını belirle: `az` için öneksiz, diğer diller için önekli
        const newPath = locale === 'az' ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`;

        setIsOpen(false); // Menü kapat
        router.push(newPath); // Yeni URL'ye yönlendir
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dil Seçim Butonu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-transparent text-white text-sm font-medium  focus:outline-none transition duration-200"
            >
                <IoLanguage />
                <svg
                    className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dil Seçenekleri Menüsü */}
            <div
                className={`absolute right-0 mt-2 w-28 rounded-md shadow-lg text-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLocaleChange(language.code)}
                            className={`${language.code === currentLocale ? '' : ''
                                } block w-full text-left px-4 py-2 text-sm text-white  hover:border-[1px] hover:border-white border-raduis-[2px] transition-colors duration-200`}
                        >
                            {language.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
