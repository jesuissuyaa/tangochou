import request from 'request';
import cheerio from 'cheerio';
import { encodeAccents } from '../../../utils/strUtils';

export default ({ query: { word } }, res) => {
  // request to collins dictionary
  request(
    {
      uri: `https://www.collinsdictionary.com/dictionary/french-english/${encodeAccents(
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
            uri: `https://www.collinsdictionary.com/dictionary/french-english/${encodeAccents(
              seeAlso.text(),
            )}`,
          },
          (err2, response2, body2) => {
            if (err) {
              console.error(err2);
              res.status(500);
              res.end('server error');
            }
            // parse body
            $ = cheerio.load(body2);
            const defList = [];
            $('.sense > .type-translation > .quote').each((index, element) => {
              defList.push($(element).text());
            });
            res.status(200).json(defList);
          },
        );
      } else {
        const defList = [];
        $('.sense .type-translation > .quote').each((index, element) => {
          defList.push($(element).text());
        });
        res.status(200).json(defList);
      }
    },
  );
  // res.status(200).json({ message: `you requested for ${word} ` });
};
