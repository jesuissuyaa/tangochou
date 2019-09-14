import * as React from 'react';

export const getDefinition = (word: string) => {
  fetch('/words')
    .then(r => r.json())
    .then(result => {
      console.log(result);
      return <span>{result}</span>;
    })
    .catch(e => {
      return <span>{e}</span>;
    });
};
