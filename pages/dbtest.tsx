import * as React from 'react';

interface State {
  inputText: string;
  tasks: { id: number; body: string }[];
}

const initialState: State = {
  inputText: 'task',
  tasks: [
    {
      id: 1,
      body: 'とりあえず表示してみる',
    },
    {
      id: 2,
      body: '私たち、いずれ書き換えられる運命',
    },
  ],
};

class DbTest extends React.PureComponent<{}, State> {
  state: State = initialState;

  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  changeText(e) {
    const inputText = e.target.value;
    this.setState({ inputText: inputText });
    console.dir(inputText);
  }

  submitTask() {
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body: this.state.inputText }),
    }).then(this.fetchTasks);
    console.log(this.state.inputText);
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(json => {
        this.setState({ tasks: json });
      });
  }
  render() {
    return (
      <>
        <div>
          {this.state.tasks.map(task => (
            <div key={task.id}>{task.body}</div>
          ))}
        </div>
        <div>
          <input type="text" id="task-input" onChange={this.changeText} />
          <button id="submit" onClick={this.submitTask}>
            submit
          </button>
        </div>
      </>
    );
  }
}

export default DbTest;
