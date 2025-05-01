/**
 * Sayısal değeri para birimi formatına çevirir
 * @param {number} value - Formatlanacak sayısal değer
 * @param {string} currencyCode - Para birimi kodu (örn: 'TRY', 'USD', 'EUR')
 * @param {string} locale - Yerelleştirme kodu (örn: 'tr-TR', 'en-US')
 * @returns {string} Formatlanmış para birimi
 */
const formatCurrency = (value: number, currencyCode = 'TRY', locale = 'tr-TR') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    }).format(value);
};

// Kullanım örnekleri:
// console.log(formatCurrency(1234.56)); // ₺1.234,56
// console.log(formatCurrency(1234.56, 'USD', 'en-US')); // $1,234.56
// console.log(formatCurrency(1234.56, 'EUR', 'de-DE')); // 1.234,56 €

export default formatCurrency;
