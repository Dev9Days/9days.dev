import React from 'react';
import NavigationItem from './navigation-item';

const Navigation = () => {
  return (
    <ul className="shrink-0 w-60">
      <NavigationItem href="/posts/9days.dev">9days.dev</NavigationItem>
      <NavigationItem href="/">b</NavigationItem>
      <NavigationItem href="/">c</NavigationItem>
    </ul>
  );
};

export default Navigation;
