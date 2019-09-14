import * as React from 'react';
import Layout from '../components/Layout';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { escape } from '../utils/strUtils';

const handleWordClick = (event: React.MouseEvent) =>
  console.log((event.target as HTMLSpanElement).innerHTML);

const getText = (event: React.MouseEvent) => {
  event.preventDefault();
  const title = (document.getElementsByTagName('input')[0] as HTMLInputElement)
    .value;
  const desc = (document.getElementsByTagName('input')[1] as HTMLInputElement)
    .value;
  let text = (document.getElementsByTagName(
    'textarea',
  )[0] as HTMLTextAreaElement).value;

  // escape chars
  text = escape(text);

  // add to database
  fetch('http://localhost:3001/texts', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      desc: desc,
      text: text,
      wordlist: [],
    }),
  }).then(() => {
    (document.getElementById(
      'db-res',
    ) as HTMLSpanElement).innerText = `added ${title} to DB`;
  });

  const res = { title: title, desc: desc, text: text };
  const textArray = text.split(' ');
};

// const vdoms = ['the', 'quick', 'brown', 'fox'].map((w, i) => (
//   <span key={i} onClick={handleWordClick}>
//     {w}
//   </span>
// ));
const AddText = () => (
  <Layout>
    {/* <span onClick={event => console.log(event.currentTarget.textContent)}>
      click me
    </span> */}
    {/* {vdoms} */}
    <div>
      <dl>
        <dt>title</dt>
        <dd>
          <InputText />
        </dd>
        <dt>description</dt>
        <dd>
          <InputText />
        </dd>
      </dl>
      <textarea />
      <Button clickhandler={getText}>add text</Button>
      <span id="db-res"></span>
    </div>
    <style jsx>{`
      dl {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 1rem;
      }
      /*
      dt,
      dd {
        display: inline;
      }
      */
      dt {
        width: 25%;
      }
      dd {
        width: 75%;
        margin-left: 0;
      }
      textarea {
        height: 10rem;
        width: 100%;
      }
      .db-res {
        margin-left: 3rem;
        font-size: 0.5rem;
      }
    `}</style>
  </Layout>
);

export default AddText;
