import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
class Portfolio extends React.Component {
  static async getInitialProps({ query: { id } }) {
    let portfolio;
    try {
      portfolio = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return { portfolio: portfolio.data };
    } catch (err) {
      console.error(err);
      return {};
    }
  }
  render() {
    const { title, body } = this.props.portfolio;
    return (
      <div>
        <BaseLayout>
          <h1>Portfolio Page</h1>
          <h2>{this.props.portfolio.id}</h2>
          <p>title: {title}</p>
          <p>body: {body}</p>
        </BaseLayout>
      </div>
    );
  }
}

export default withRouter(Portfolio);
