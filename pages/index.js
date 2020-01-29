import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'I am Index Page',
    };
  }
  static async getInitialProps(ctx) {
    let userData = {};
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch (err) {
      console.error(err);
    }
    return { userData };
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  updateTitle = () => {
    this.setState({ title: 'I am updated index page' });
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <BaseLayout>
          <h1>{title}</h1>
          <h2>{this.props.userData.title}</h2>
          <p className='customStyleFromFile'>Hello Next.js</p>
          <button onClick={this.updateTitle}> Change title</button>
        </BaseLayout>
      </div>
    );
  }
}

export default Index;
