import * as React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { addWord, deleteWord } from '../../utils/dbUtils';
import { unescape, strip } from '../../utils/strUtils';

interface State {
  id: number;
  desc: string;
  text: string;
  title: string;
  wordlist: string[];
}
const initialState = {
  id: 0,
  desc: '',
  text: '',
  title: '',
  wordlist: [],
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const handleWordClick = async (event: React.MouseEvent) => {
  const word = (event.target as HTMLSpanElement).innerHTML;
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
  const container = document.getElementsByClassName('def')[0];
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

class Text extends React.PureComponent<{}, State> {
  state: State = initialState;

  async componentDidMount() {
    console.log('called');
    // get text id
    const url = window.location.href;
    const array = url.split('/');
    const id = array[array.length - 1];

    const res = await fetch(`http://localhost:3001/texts?id=${id}`);
    let data = await res.json();
    data = data[0];

    this.setState({
      id: data.id,
      desc: data.desc,
      title: data.title,
      text: data.text,
      wordlist: data.wordlist,
    });
  }

  // static async getInitialProps(context) {
  //   const { id } = context.query;
  //   const res = await fetch(`http://localhost:3001/texts?id=${id}`);
  //   let data = await res.json();
  //   data = data[0];

  //   return {
  //     id: data.id,
  //     desc: data.desc,
  //     text: data.text,
  //     title: data.title,
  //     wordlist: data.wordlist,
  //   };
  // }

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
                // addWord(
                //   (document.getElementsByClassName('word')[0] as HTMLDivElement)
                //     .innerText,
                //   (document.getElementsByClassName('word')[0] as HTMLDivElement)
                //     .innerText,
                //   this.state.id,
                // );
                console.log('add word');
              }}
            >
              add to vocab
            </Button>
            <Button
              clickhandler={e => {
                // deleteWord(
                //   (document.getElementsByClassName('word')[0] as HTMLDivElement)
                //     .innerText,
                //   this.state.id,
                // );
              }}
            >
              remove from vocab
            </Button>
          </div>
          <div className="def-link"></div>
        </div>
        <hr></hr>
        <h3>{this.state.title}</h3>
        <div className="text-container">
          {textWithTags(this.state.text, this.state.wordlist)}
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
