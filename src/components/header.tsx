import React from 'react';
import Link from 'next/link';
import Github from '@/constant/icon/github';
import { useTheme } from '@/theme/theme-context';
import ThemeList from './theme/theme-list';

const Header = () => {
  const themeData = useTheme();
  return (
    <div className="flex justify-between border-b border-gray-400 py-4 relative">
      <div className="">9days.dev</div>
      <div className="flex">
        <ThemeList themeData={themeData} />
        <Link href="https://github.com/Dev9Days/9days.dev" target="_blank">
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Header;
