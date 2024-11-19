// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    localeDetection: false, // Tarayıcı dil algılamasını devre dışı bırakıyoruz
});

export const config = {
    matcher: ['/', '/(en|ru)/:path*'], // Varsayılan dil için `/`, diğer diller için dil öneki ile eşleme
};
