'use client';
import React, { createContext, useContext, useState, ReactNode, SetStateAction } from 'react';
import { themeList, ThemeColors, ThemeMap } from './themes';

export interface ThemeContextType {
  state: { theme: ThemeColors; themeList: ThemeMap };
  actions: {
    setTheme: React.Dispatch<SetStateAction<ThemeColors>>;
    setThemeList: React.Dispatch<SetStateAction<ThemeMap>>;
  };
}

const ThemeContext = createContext<ThemeContextType>({
  state: { theme: ThemeColors.System, themeList },
  actions: { setTheme: () => {}, setThemeList: () => {} },
});

const ThemeProvider = ({ lastTheme, children }: { lastTheme: ThemeColors; children: ReactNode }) => {
  const [theme, setTheme] = useState(lastTheme || ThemeColors.System);
  const [_themeList, setThemeList] = useState(themeList);
  const value = {
    state: { theme, themeList: _themeList },
    actions: { setTheme, setThemeList },
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const { Consumer: ThemeConsumer } = ThemeContext;
export { ThemeProvider, ThemeConsumer };

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme는 ThemeProvider 내부에서 사용해야 합니다.');
  }
  return context;
};
