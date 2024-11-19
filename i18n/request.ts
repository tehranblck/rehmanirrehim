import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = (await requestLocale) as 'az' | 'en' | 'ru';

    if (!locale || !routing.locales.includes(locale)) {
        locale = routing.defaultLocale as 'az' | 'en' | 'ru';
    }
    interface Messages {
        [namespace: string]: { [key: string]: string }; // Namespace ve içindeki anahtarlar string
    }

    const namespaces = ['common', 'projects', 'blogs'];

    const messages: Messages = {}; // Tip tanımlandı

    for (const namespace of namespaces) {
        messages[namespace] = (await import(`../messages/${namespace}/${locale}.json`)).default;
    }

    return {
        locale,
        messages
    };
});
