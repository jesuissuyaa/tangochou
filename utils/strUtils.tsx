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
