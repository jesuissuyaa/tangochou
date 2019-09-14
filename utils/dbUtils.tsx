import * as React from 'react';
import { escape } from './strUtils';

export const getWords = () => {
  fetch('http://localhost:3001/vocab')
    .then(res => res.json())
    .then(json => {
      //console.log(json);
      return <div>hello</div>;
    });
};
export async function addWord(
  word: string,
  textId: number /*, defs: string[] */,
) {
  word = escape(word);
  const vRes = await fetch('http://localhost:3001/vocab');
  const vData = await vRes.json();
  const vocab = vData.map(item => item.word);
  // add to vocab
  if (!vocab.includes(word.toLowerCase())) {
    fetch('http://localhost:3001/vocab', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word: word.toLowerCase() }),
    }).then(getWords);
  }
  // add to word list (for text)
  let tRes = await fetch(`http://localhost:3001/texts/?id=${textId}`);
  let tData = await tRes.json();
  tData = tData[0];
  const wordList = tData.wordlist;
  wordList.push(word);
  console.log(wordList);
  tRes = await fetch(`http://localhost:3001/texts/${textId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: tData.text,
      desc: tData.desc,
      title: tData.title,
      wordlist: wordList,
    }),
  });
}

export async function getTextTitles() {
  const res = await fetch('http://localhost:3001/texts');
  const data = await res.json();
  const elements = [];
  data.map(item => elements.push(<li>{item.title}</li>));
  return <>{elements}</>;
}

export async function deleteWord(word: string, textId: number) {
  word = escape(word);
  // remove from vocab
  const vRes = await fetch(
    `http://localhost:3001/vocab?word=${word.toLowerCase()}`,
  );
  const vData = await vRes.json();
  if (vData.length) {
    const vId = vData[0].id;
    fetch(`http://localhost:3001/vocab/${vId}`, {
      method: 'DELETE',
    })
      .then(getWords)
      .catch(e => {
        console.log(e);
      });
  }

  // delete from to word list (for text)
  let tRes = await fetch(`http://localhost:3001/texts/?id=${textId}`);
  let tData = await tRes.json();
  tData = tData[0];
  const wordList = tData.wordlist;
  const i = wordList.indexOf(word);
  console.log(wordList);
  if (i > -1) wordList.splice(i, 1);
  console.log(wordList);
  tRes = await fetch(`http://localhost:3001/texts/${textId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: tData.text,
      desc: tData.desc,
      title: tData.title,
      wordlist: wordList,
    }),
  });
}
