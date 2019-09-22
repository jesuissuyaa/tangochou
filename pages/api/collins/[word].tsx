import request from 'request';
import cheerio from 'cheerio';
import { encodeAccentsUtf } from '../../../utils/strUtils';

// take cheerio body -> scrape -> return list of defs for word
const getDefList = ($: CheerioStatic) => {
  const defList = [];
  const defs = [];

  $('.sense').each((index, elm) => {
    const matches = $(elm)
      .children('.type-translation')
      .children(' .quote');
    if (matches.length) {
      matches.each((i, m) => defs.push($(m).text()));
    }
  });
  const set = Array.from(new Set(defs));
  set.forEach(item => defList.push(item));

  return defList;
};

export default ({ query: { word } }, res) => {
  // request to collins dictionary
  request(
    {
      // uri: `https://www.collinsdictionary.com/dictionary/french-english/${encodeAccents(
      //   word,
      // )}`,
      uri: `https://www.collinsdictionary.com/dictionary/french-english/${encodeAccentsUtf(
        word,
      )}`,
      followAllRedirects: true,
    },
    (err, response, body) => {
      console.log(response.request.href);
      if (err) {
        console.error(err);
        res.status(500);
        res.end('server error');
      }

      let $ = cheerio.load(body);
      // link to infinitive
      const seeAlso = $($('.sense')[0]).find('.ref');
      if (seeAlso.length) {
        request(
          {
            uri: `https://www.collinsdictionary.com/dictionary/french-english/${encodeAccentsUtf(
              seeAlso.text(),
            )}`,
          },
          (err2, response2, body2) => {
            if (err) {
              console.error(err2);
              res.status(500);
              res.end('server error');
            }
            console.log('following redirect...');
            // parse body
            $ = cheerio.load(body2);

            res.status(200).json(getDefList($));
          },
        );
      } else {
        // $('.sense .type-translation > .quote').each((index, element) => {
        //   defList.push($(element).text());
        // });
        if (!getDefList($).length) console.log($);
        res.status(200).json(getDefList($));
      }
    },
  );
  // res.status(200).json({ message: `you requested for ${word} ` });
};
