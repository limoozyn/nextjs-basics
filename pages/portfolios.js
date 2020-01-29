import React from 'react';
import axios from 'axios';
import {Link} from '../routes'

import BaseLayout from '../components/layouts/BaseLayout';
class Portfolios extends React.Component {
  static async getInitialProps(ctx) {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch (err) {
      console.error(err);
    }
    return { posts: posts.splice(0, 10) };
  }
  renderPosts(posts) {
    return (
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <Link route={`/portfolio/${post.id}`}>
              <a style={{ fontStyle: '20px' }}>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <BaseLayout>
          <h1>Portfolios Page</h1>
          {this.renderPosts(posts)}
        </BaseLayout>
      </div>
    );
  }
}

export default Portfolios;
