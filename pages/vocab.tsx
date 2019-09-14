import * as React from 'react';
import Layout from '../components/Layout';
import { unescape } from '../utils/strUtils';
// import fetch from 'isomorphic-unfetch';
interface Props {
  key: number;
}

interface WordState {
  words: { id: number; word: string; definition: string[] }[];
}

const initWordState = {
  words: [
    {
      id: 1,
      word: 'falloir',
      definition: ['to need', 'have to'],
    },
    {
      id: 2,
      word: 'valoir',
      definition: ['be worth'],
    },
    {
      id: 3,
      word: 'faire',
      definition: ['to do', 'to make'],
    },
  ],
};

const createWordList = (
  dict: {
    id: number;
    word: string;
    definition: string[];
  }[],
) => {
  const res = [];

  let l = 65;
  let _w = 0;
  while (l < 65 + 26 /* && _w < dict.length*/) {
    const letter = String.fromCharCode(l);
    let w = _w;
    // insert heading letter
    res.push(<Heading key={l}>{letter}</Heading>);

    const list = [];
    let key = 1;
    while (w < dict.length && dict[w].word[0].toUpperCase() == letter) {
      list.push(
        <li key={key}>
          {unescape(dict[w].word)}
          <div key={key++} style={{ marginLeft: '1rem', fontSize: '0.8rem' }}>
            {dict[w++].definition.join(', ')}
          </div>
        </li>,
      );
    }
    res.push(<ul>{list}</ul>);
    _w = w;
    l++;
  }
  _w = 0;
  return res;
};

const Heading: React.FC<Props> = props => (
  <p>
    {props.children}
    <style jsx>{`
      p {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
      }
    `}</style>
  </p>
);

class Vocab extends React.PureComponent<{}, WordState> {
  state: WordState = initWordState;

  fetchWords() {
    fetch('http://localhost:3001/vocab?_sort=word&order=asc')
      .then(res => res.json())
      .then(json => {
        this.setState({ words: json });
      });
  }

  componentDidMount() {
    this.fetchWords(); // update state
  }

  render() {
    return (
      <Layout>
        <div className="container">{createWordList(this.state.words)}</div>
        {/* TODO move createWordList to componentdidmoutn */}
        {/* <div>{createWordList(this.state.words.map(item => item.word))}</div> */}
        {/* {[...Array(26)].map((_, i) => (
          <Heading key={i}>{String.fromCharCode(65 + i)}</Heading>
        ))} */}
      </Layout>
    );
  }
}

export default Vocab;
