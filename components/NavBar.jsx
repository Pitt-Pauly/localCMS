import React from 'react';
import Link from 'next/link';

const navBarStyle = {
  display: 'inline-flex',
  marginBottom: 20
};

const linkStyle = {
  marginRight: 15
};

export function NavBar(props) {
  return (
    <div style={navBarStyle}>
      <Link href="/" title="Home">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/gallery" title="Gallery">
        <a style={linkStyle}>Gallery</a>
      </Link>
      <Link href="/about" title="About">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
}
