/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://saytyarat.com', // Projenizin URL'si
    generateRobotsTxt: true, // robots.txt dosyasını otomatik oluşturur
    sitemapSize: 5000, // 5000 sayfadan büyük siteler için bölme işlemi yapar
    exclude: [], // Sitemap'e dahil edilmeyecek sayfalar
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Tüm sayfalar arama motorlarına açık
        ],
        additionalSitemaps: [
            // Ek site haritaları varsa burada belirtebilirsiniz
        ],
    },
};
