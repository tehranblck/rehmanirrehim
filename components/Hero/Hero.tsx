

import React from 'react';
import { useTranslations } from 'next-intl';
import HeroText from './HeroText';
import ContainerProject from '../Container/Container';

const Hero = () => {
    const t = useTranslations('common'); // `common` namespace'ini belirtiyoruz

    // HomePage içindeki çevirileri t() fonksiyonu ile çekiyoruz
    const title = t('HomePage.title');
    const about = t('HomePage.about');
    const buttonText = t('HomePage.buttonText');

    return (
        <ContainerProject className="py-32 pb-24 px-4 flex flex-col items-center">
            <HeroText buttonText={buttonText} about={about} title={title} />
        </ContainerProject>
    );
};

export default Hero;
