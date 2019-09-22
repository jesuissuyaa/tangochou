/* 
the cédille Ç,
the accent aigu é,
the accent circonflexe â, ê, î, ô, û,
the accent grave à, è, ù
and the accent tréma ë, ï, ü.
*/
export const encodeAccents: (str: string) => string = (str: string) =>
  str
    .toLowerCase()
    .replace(/ç/g, '%E7')
    .replace(/é/g, '%E9')
    .replace(/â/g, '%E2')
    .replace(/ê/g, '%EA')
    .replace(/î/g, '%EE')
    .replace(/ô/g, '%F4')
    .replace(/û/g, '%FB')
    .replace(/à/g, '%E0')
    .replace(/è/g, '%E8')
    .replace(/ù/g, '%F9')
    .replace(/ë/g, '%EB')
    .replace(/ï/g, '%EF')
    .replace(/ü/g, '%FC');

/* use to encode for collins */
export const encodeAccentsUtf: (str: string) => string = (str: string) =>
  str
    .toLowerCase()
    .replace(/ç/g, '%C3%A7')
    .replace(/é/g, '%C3%A9')
    .replace(/â/g, '%C3%A2')
    .replace(/ê/g, '%C3%AA')
    .replace(/î/g, '%C3%AE')
    .replace(/ô/g, '%C3%B4')
    .replace(/û/g, '%C3%BB')
    .replace(/à/g, '%C3%A0')
    .replace(/è/g, '%C3%A8')
    .replace(/ù/g, '%C3%B9')
    .replace(/ë/g, '%C3%AB')
    .replace(/ï/g, '%C3%AF')
    .replace(/ü/g, '%C3%BC');

export const escape: (str: string) => string = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/</g, '&gt;')
    .replace(/"/g, '&quot;');
export const strip: (str: string) => string = (str: string) =>
  str.replace(/[,.]/g, '');
export const unescape: (str: string) => string = (str: string) =>
  str
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/, '"')
    .replace(/&amp;/g, '&');
