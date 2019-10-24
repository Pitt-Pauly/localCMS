import React from 'react';
import { NavBar } from './NavBar';

const layoutStyle = {
  display: 'block',
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export function Layout(props) {
  return (
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  );
}
