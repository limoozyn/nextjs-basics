import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        {children}
        <p>{title}</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/blogs'>
          <a>Blogs</a>
        </Link>
        <Link href='/cv'>
          <a>Cv</a>
        </Link>
        <Link href='/portfolios'>
          <a>Portfolios</a>
        </Link>
      </>
    );
  }
}

export default Header;
