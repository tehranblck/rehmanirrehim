import React from 'react';
import AnimateSlider from './../Slider/AnimatedSlider';
import ContainerProject from '../Container/Container';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from 'next-intl';

// TypeScript Props Tanımlaması
interface WorkData {
    title: string; // Başlık
    description: string; // Açıklama
    slug: string; // Dinamik bağlantı için slug
}

interface WorkProps {
    work: WorkData; // Work bileşeni için veri
}

const Work: React.FC<WorkProps> = ({ work }) => {
    const t = useTranslations('projects'); // 'projects' namespace'ini kullanıyoruz

    // Description için karakter limiti
    const MAX_DESCRIPTION_LENGTH = 200;

    // Description'u kısaltma işlemi
    const truncatedDescription =
        t('works.work1.description').length > MAX_DESCRIPTION_LENGTH
            ? `${t('works.work1.description').slice(0, MAX_DESCRIPTION_LENGTH)}...`
            : t('works.work1.description');

    return (
        <ContainerProject className="flex flex-col">
            {/* Slider */}
            <AnimateSlider />

            {/* İçerik Alanı */}
            <div className="textArea px-16 py-10 flex">
                {/* Başlık */}
                <h2 className="text-white font-bold text-3xl max-w-[40%]">
                    {t('works.work1.title')} {/* projects.work.work1.title */}
                </h2>

                {/* Açıklama ve Link */}
                <div className="flex flex-col justify-center ml-8">
                    <p className="text-gray-400 text-sm">
                        {truncatedDescription} {/* Kısaltılmış açıklama */}
                    </p>
                    <Link
                        href={`/works/${t('works.work1.slug')}`} // Dinamik bağlantı
                        className="text-[#b0fcee] flex items-center px-2 py-3 text-sm hover:underline"
                    >
                        {t('works.work1.readmore')} <MdKeyboardArrowRight />
                    </Link>
                </div>
            </div>
        </ContainerProject>
    );
};

export default Work;
