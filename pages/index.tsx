import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import Link from 'next/link';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { getDefinition } from '../utils/transUtils';
import { addWord } from '../utils/dbUtils';
const linkStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const handleWordClick = (event: React.MouseEvent) => {
  const word = (event.target as HTMLSpanElement).innerHTML;
  const url = `https://www.linguee.fr/francais-anglais/search?source=auto&query=${word}`;
  const link = (
    <a href={url} style={linkStyle} target="_blank">
      {url}
    </a>
  );
  (document.getElementsByClassName(
    'word',
  )[0] as HTMLDivElement).innerText = word;
  ReactDOM.render(link, document.getElementsByClassName('def-link')[0]);
};

const Index = () => (
  <Layout>
    <h1>Vocab with Context</h1>
    <ol>
      <li>get a text you want to study</li>
      <li>click on &quot;add text&quot;</li>
      <li>select your text from the sidebar</li>
      <li>click on a word in the text</li>
      <li>click on &quot;add to vocab&quot; button</li>
      <li>see list of words you studied in the vocab page</li>
    </ol>
  </Layout>
);

export default Index;
