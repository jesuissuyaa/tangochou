import * as React from 'react';

interface Props {
  myRef: React.RefObject<HTMLInputElement>;
}
const InputText: React.FC<{}> = () => (
  <React.Fragment>
    <input type="text" ref={React.createRef()} />
    <style jsx>{`
      input {
        border: 1px solid #304a65;
        height: 1.2rem;
        margin: 0 1rem;
      }

      input:focus {
        outline: none;
      }
    `}</style>
  </React.Fragment>
);

export default InputText;
