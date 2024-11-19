import React from 'react';
import Github from '@/constant/icon/github';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between border-b border-gray-400 py-4">
      <div className="">9days.dev</div>
      <div className="flex">
        <div className="">theme,</div>
        <Link href="https://github.com/Dev9Days/9days.dev" target="_blank">
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Header;
