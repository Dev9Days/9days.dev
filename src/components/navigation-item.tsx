import React from 'react';
import Link from 'next/link';

interface ILinkWithIconProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavigationItem = ({ href, children, className }: ILinkWithIconProps) => {
  return (
    <li>
      <Link href={href} className={`inline-block w-full ${className || ''}`}>
        {children}
      </Link>
    </li>
  );
};

export default NavigationItem;
