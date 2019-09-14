import React from 'react';
import Link from 'next/link';

interface TitleState {
  texts: { id: number; title: string; desc: string; text: string }[];
}

const initTitleState = {
  texts: [
    {
      id: 1,
      title: 'init 1',
      desc: 'dummy',
      text: 'dummy',
    },
    {
      id: 2,
      title: 'init2',
      desc: 'dummy',
      text: 'dummy',
    },
  ],
};
class Texts extends React.PureComponent<{}, {}> {
  state: TitleState = initTitleState;

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/texts');
    const data = await res.json();
    this.setState({ texts: data });
  }
  render() {
    return (
      <ul>
        {this.state.texts.map((item, i) => (
          <li key={i}>
            <Link key={i} href="/text/[id]" as={`/text/${item.id}`}>
              <a key={i}>{item.title}</a>
            </Link>
          </li>
        ))}
        <style jsx>{`
          a,
          a:visited {
            color: #230903;
            font-weight: bold;
            text-decoration: none;
          }
          a:hover {
            color: #656256;
          }
        `}</style>
      </ul>
    );
  }
}

export default Texts;
