import * as React from 'react';
import Link from 'next/link';
import Texts from './Texts';

const Menu = () => (
  <div>
    <Link href="/add-text">
      <a>add new text</a>
    </Link>
    <p>TEXTS: </p>

    <Texts />

    <Link href="/vocab">
      <a>vocab</a>
    </Link>

    <style jsx>{`
      a,
      a:visited,
      div {
        color: #230903;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        color: #656256;
      }
      div {
        background-color: #9ebc9f;
        box-sizing: border-box;
        height: calc(100vh - 16px);
        padding: 1rem;
        position: fixed;
        width: 30vw;
      }
    `}</style>
  </div>
);

export default Menu;
