import request from 'request';
import cheerio from 'cheerio';
import { encodeAccents } from '../../../utils/strUtils';

export default ({ query: { word } }, res) => {
  // request to linguee
  request(
    {
      uri: `https://www.linguee.fr/francais-anglais/search?source=auto&query=${encodeAccents(
        word,
      )}`,
      encoding: 'latin1',
    },
    (err, response, body) => {
      if (err) {
        console.error(err);
        res.status(500);
        res.end('server error');
      }

      // decode string
      const $ = cheerio.load(body);
      const defList = [];
      $($('.translation_lines')[0])
        .find('.dictLink')
        .each((index, element) => {
          defList.push($(element).text());
        });

      // send response
      res.status(200).json(defList);
    },
  );
};
