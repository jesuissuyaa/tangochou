import * as React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { addWord, deleteWord } from '../../utils/dbUtils';
import { unescape, strip } from '../../utils/strUtils';

import scss from '../../node_modules/loaders.css/src/animations/pacman.scss';
const Loader = require('react-loaders').Loader;

interface Props {
  id: number;
  desc: string;
  text: string;
  title: string;
  wordlist: string[];
}

interface State {
  sWordList: string[];
}
const initialState = {
  sWordList: [],
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const handleWordClick = async (event: React.MouseEvent) => {
  const word = (event.target as HTMLSpanElement).innerHTML;
  const container = document.getElementsByClassName('def')[0];
  // show loading
  // const loader = <Loader type="pacman" active />;
  // const loader = <div className={scss.pacman}></div>;
  const loader = <img src="/static/loader.gif" style={{ width: '3rem' }} />;
  ReactDOM.render(loader, container);
  // remove commas and periods
  let qword = strip(word);
  // split string if concatenated
  if (word.includes("'")) qword = word.split("'")[1];
  // show link to Linguee
  const url = `https://www.linguee.fr/francais-anglais/search?source=auto&query=${qword}`;
  const link = (
    <a href={url} style={linkStyle} target="_blank">
      {url}
    </a>
  );
  (document.getElementsByClassName(
    'word',
  )[0] as HTMLDivElement).innerText = qword;
  ReactDOM.render(link, document.getElementsByClassName('def-link')[0]);

  // get definitions from Linguee
  const response = await fetch(`http://localhost:3000/api/linguee/${qword}`);
  const data = await response.json();
  console.log(data);
  // display definitions
  const spanStyle: React.CSSProperties = { marginRight: '1rem' };

  let elements;
  if (data.length) {
    elements = data.map((item, index) => (
      <span key={index} style={spanStyle}>
        {item}
      </span>
    ));
  } else {
    elements = <i>no definition found :(</i>;
  }

  ReactDOM.render(elements, container);
};

const textWithTags = (text: string, wordlist: string[]) => (
  <>
    {text.split(' ').map((word, index) => (
      <>
        <span
          key={index}
          className={wordlist.includes(word) ? 'highlight' : ''}
          onClick={handleWordClick}
        >
          {unescape(word)}
        </span>
        &nbsp;
      </>
    ))}
    <style jsx>{`
      .highlight {
        background-color: #a17da1;
        color: white;
        padding: 0 0.3rem;
      }
    `}</style>
  </>
);

class Text extends React.Component<Props, State> {
  state: State = initialState;

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3001/texts?id=${id}`);
    let data = await res.json();
    data = data[0];

    return {
      id: data.id,
      desc: data.desc,
      text: data.text,
      title: data.title,
      wordlist: data.wordlist,
    };
  }

  render() {
    return (
      <Layout>
        <div className="word-container">
          <div className="word">
            <i>click on a word :)</i>
          </div>
          <div className="def"></div>
          {/* <InputText /> */}
          <div className="button-container">
            <Button
              clickhandler={e => {
                addWord(
                  (document.getElementsByClassName('word')[0] as HTMLDivElement)
                    .innerText,
                  this.props.id,
                  /*
                  Array.from(document.getElementsByClassName('def')[0].childNodes, x => x.textContent)
                  */
                ).then(() => location.reload());
              }}
            >
              add to vocab
            </Button>
            <Button
              clickhandler={e => {
                deleteWord(
                  (document.getElementsByClassName('word')[0] as HTMLDivElement)
                    .innerText,
                  this.props.id,
                ).then(() => location.reload());
              }}
            >
              remove from vocab
            </Button>
          </div>
          <div className="def-link"></div>
        </div>
        <hr></hr>
        <h3>{this.props.title}</h3>
        <div className="text-container">
          {textWithTags(this.props.text, this.props.wordlist)}
        </div>
        <style jsx>{`
          .button-container {
            display: flex;
            justify-content: space-around;
            margin: 0.5rem 0;
            width: 100%;
          }
          .def {
            display: flex;
            flex-flow: row wrap;
            margin: 0.5rem 0;
          }
          .def-link {
            line-height: 1;
          }
          .text-container {
            display: flex;
            flex-flow: row wrap;
            overflow-wrap: break-word;
          }
          .word {
            border-bottom: 1px dotted #fff;
          }
          .word-container {
            background-color: #a17da1;
            color: white;
            display: flex;
            flex-flow: column;
            padding: 1rem;
          }
          .word {
            flex-basis: 30%;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Text;
