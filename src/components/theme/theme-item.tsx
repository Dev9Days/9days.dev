import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as S from './theme-item.css';

type ThemeItemProps = {
  backgroundColor: string;
  fontColor: string;
  themeName: string;
  themeColor: string;
  isSystem: boolean;
  onClick?: React.MouseEventHandler;
};

const ThemeItem = ({ backgroundColor, fontColor, themeName, themeColor, isSystem, onClick }: ThemeItemProps) => {
  return (
    <div
      className={S.ThemeItem}
      onClick={onClick}
      style={assignInlineVars({ [S.vars.themeFontColor]: `${themeColor}44` })}
    >
      <div
        className="overflow-hidden flex border-2 border-solid rounded-full size-8"
        style={{ borderColor: themeColor }}
      >
        <div className="w-1/2 h-full" style={{ backgroundColor }} />
        <div className="w-1/2 h-full" style={{ backgroundColor: fontColor }} />
      </div>
      <div className="ml-1 text-sm hidden sm:block">
        {themeName}
        {isSystem && <span className="text-xs">(System)</span>}
      </div>
    </div>
  );
};

export default ThemeItem;
