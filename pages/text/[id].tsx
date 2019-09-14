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
  wordInText: string;
  wordInVocab: string;
  defs: string[];
}

const initialState = {
  wordInText: '',
  wordInVocab: '',
  defs: [],
};
// interface State {
//   sWordList: string[];
// }
// const initialState = {
//   sWordList: [],
// };

const linkStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
};

// span clicked -> show definition

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

  cleanString = (str: string) => {
    // remove commas and periods
    str = strip(str);
    // split string if concatenated
    if (str.includes('’')) {
      str = str.split('’')[1];
    } else if (str.includes("'")) {
      str = str.split("'")[1];
    }
    // lowercase
    return str.toLowerCase();
  };
  handleWordClick = async (event: React.MouseEvent) => {
    // show loading
    const loader = <img src="/static/loader.gif" style={{ width: '3rem' }} />;
    const container = document.getElementsByClassName('def')[0];
    ReactDOM.render(loader, container);

    // clean string
    this.state.wordInText = (event.target as HTMLSpanElement).innerHTML;
    this.state.wordInVocab = this.cleanString(this.state.wordInText);
    // show link to Linguee
    const url = `https://www.linguee.fr/francais-anglais/search?source=auto&query=${this.state.wordInVocab}`;
    const link = (
      <a href={url} style={linkStyle} target="_blank">
        {url}
      </a>
    );
    (document.getElementsByClassName(
      'word',
    )[0] as HTMLDivElement).innerText = this.state.wordInVocab;
    ReactDOM.render(link, document.getElementsByClassName('def-link')[0]);

    // get definitions from Linguee
    let response = await fetch(
      `http://localhost:3000/api/linguee/${this.state.wordInVocab}`,
    );
    let data = await response.json();
    if (!data.length) {
      console.log('trying collins...');
      // linguee timed out
      // get definitions from collitions
      response = await fetch(
        `http://localhost:3000/api/collins/${this.state.wordInVocab}`,
      );
      data = await response.json();
    }
    // display definitions
    const spanStyle: React.CSSProperties = { marginRight: '1rem' };

    let elements;
    if (data.length) {
      // copy to state
      this.state.defs = data;
      elements = data.map((item, index) => (
        <span key={index} style={spanStyle}>
          {item}
        </span>
      ));
    } else {
      elements = <i>no definition found :(</i>;
    }
    console.log(this.state.defs);

    ReactDOM.render(elements, container);
  };

  textWithTags = (text: string, wordlist: string[]) => (
    <>
      {text.split(' ').map((word, index) => (
        <>
          <span
            key={index}
            className={wordlist.includes(word) ? 'highlight' : ''}
            onClick={this.handleWordClick}
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
                  this.state.wordInText,
                  this.state.wordInVocab,
                  this.props.id,
                  this.state.defs,
                ).then(() => location.reload());
              }}
            >
              add to vocab
            </Button>
            <Button
              clickhandler={e => {
                deleteWord(
                  this.state.wordInText,
                  this.state.wordInVocab,
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
          {this.textWithTags(this.props.text, this.props.wordlist)}
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
