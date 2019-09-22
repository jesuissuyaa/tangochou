const defs = [];

$('.sense').each((index, elm) => {
  const matches = $(elm)
    .children('.type-translation')
    .children(' .quote');
  if (matches.length) {
    matches.each((i, m) => defs.push($(m).text()));
  }
});
const set = [...new Set(defs)];
set.forEach(item => console.log(item));
