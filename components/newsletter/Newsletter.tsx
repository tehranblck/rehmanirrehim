import React from 'react';
import ContainerProject from '../Container/Container';
import { useTranslations } from 'next-intl';

const Newsletter: React.FC = () => {
    // const t = useTranslations('common'); // "common" namespace'inden çeviriler için
    // const tNewsletter = useTranslations('Newsletter'); // "Newsletter" namespace'inden çeviriler için

    return (
        // <ContainerProject>
        //     <div className="relative flex p-4 sm:p-10 mb-4 mt-12 border border-gray-600 rounded-lg flex-col items-center w-full text-center overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        //         {/* Arka Plan Gradyanı */}
        //         <div className="absolute inset-0 z-0 bg-black opacity-30"></div>

        //         {/* İçerik Başlık ve Açıklama */}
        //         <h1 className="relative z-10 text-xl sm:text-3xl font-bold text-white mb-4">
        //             {tNewsletter('title')}
        //         </h1>
        //         <p className="relative z-10 text-sm sm:text-md text-white max-w-lg font-semibold px-2 sm:px-4 mb-4">
        //             {tNewsletter('description')}
        //         </p>

        //         {/* Abonelik Formu */}
        //         <form
        //             action="https://url/subscribe/post?parameters"
        //             method="post"
        //             id="mc-embedded-subscribe-form"
        //             name="mc-embedded-subscribe-form"
        //             className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-4"
        //         >
        //             {/* Email Giriş Alanı */}
        //             <input
        //                 type="email"
        //                 name="EMAIL"
        //                 id="mce-EMAIL"
        //                 placeholder={t('placeholderEmail') || 'Email'}
        //                 required
        //                 className="w-full sm:w-auto px-4 py-2 border bg-transparent border-gray-600 focus:bg-gray-800 outline-none focus:ring-2 focus:ring-white rounded-lg text-sm sm:text-base text-white placeholder-gray-400"
        //             />

        //             {/* Gizli Alanlar */}
        //             <input
        //                 type="checkbox"
        //                 name="group[3492][1]"
        //                 id="mce-group[3492]-3492-0"
        //                 readOnly
        //                 defaultChecked
        //                 hidden
        //             />
        //             <input
        //                 type="text"
        //                 name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa"
        //                 tabIndex={-1}
        //                 readOnly
        //                 value=""
        //                 hidden
        //                 aria-hidden="true"
        //             />

        //             {/* Gönder Butonu */}
        //             <button
        //                 type="submit"
        //                 id="mc-embedded-subscribe"
        //                 value="Subscribe"
        //                 className="px-6 py-2 bg-gray-700 border border-gray-600 hover:bg-white hover:text-black transition-all text-white text-sm sm:text-base font-bold rounded-lg"
        //             >
        //                 {tNewsletter('buttonText')}
        //             </button>
        //         </form>
        //     </div>
        // </ContainerProject>
        <></>
    );
};

export default Newsletter;
