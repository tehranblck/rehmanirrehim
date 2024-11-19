import fs from "fs";
import path from "path";

/**
 * Belirli bir namespace için çeviri dosyasını yükler
 */
async function loadNamespace(locale: string, namespace: string) {
    const filePath = path.resolve(`./locales/${locale}/${namespace}.json`);
    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContent);
    } catch (error) {
        throw new Error(`Translation file not found for locale: ${locale}, namespace: ${namespace}`);
    }
}

/**
 * Birden fazla namespace yükler ve birleştirir
 */
export async function getMessages(locale: string, namespaces: string[]) {
    const translations: Record<string, any> = {};
    for (const namespace of namespaces) {
        translations[namespace] = await loadNamespace(locale, namespace);
    }
    return translations;
}
