import * as React from 'react';

interface Props {
  // text: string;
  clickhandler: (e: React.MouseEvent) => void;
}
const Button: React.FC<Props> = props => (
  <button onClick={props.clickhandler}>
    {props.children}
    <style jsx>{`
      button {
        background-color: #230903;
        border: none;
        color: #fff;
        font-family: 'Hepta Slab', serif;
        font-size: 0.8rem;
        font-weight: bold;
        padding: 0.3rem 0.5rem;
        text-transform: uppercase;
      }
    `}</style>
  </button>
);

export default Button;
