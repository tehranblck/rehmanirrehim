// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['az', 'en', 'ru'],
    defaultLocale: 'az',
    localePrefix: 'as-needed',  // Varsayılan dil için önek kullanma
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
