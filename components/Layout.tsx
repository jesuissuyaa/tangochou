import * as React from 'react';
import Menu from './Menu';
import Texts from './Texts';
import Head from 'next/head';

const Layout: React.FC<{}> = props => (
  <div>
    <Head>
      <title>vocab-with-context</title>
      <link
        href="https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap"
        rel="stylesheet"
      ></link>
      <link href="node_modules/loaders.css/src/animations/line-scale.scss"></link>
    </Head>

    <Menu />
    <main>{props.children}</main>
    <style jsx>{`
      div {
        background-color: #f2fef1;
        box-sizing: border-box;
        color: #230903;
        display: flex;
        font-family: 'Hepta Slab', serif;
        line-height: 2;
      }
      main {
        box-sizing: border-box;
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        margin-left: 30vw;
        min-height: calc(100vh - 16px);
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default Layout;
