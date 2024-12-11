import React, { useEffect } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import { ThemeContextType } from '@/theme/theme-context';
import { ThemeColors } from '@/theme/themes';

const ThemedBody = ({
  state,
  actions,
  lastTheme,
  children,
}: {
  state: ThemeContextType['state'];
  actions: ThemeContextType['actions'];
  lastTheme: ThemeColors;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const dark = ThemeColors.Dark;
    const light = ThemeColors.Light;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const updateThemeList = () => {
      if (mql.matches) {
        actions.setThemeList((themeList) => ({
          ...themeList,
          [dark]: { ...themeList[dark], isSystem: true },
          [light]: { ...themeList[light], isSystem: false },
        }));
      } else {
        actions.setThemeList((themeList) => ({
          ...themeList,
          [dark]: { ...themeList[dark], isSystem: false },
          [light]: { ...themeList[light], isSystem: true },
        }));
      }
    };
    updateThemeList();
    mql.addEventListener('change', updateThemeList);

    if (lastTheme === ThemeColors.System) {
      const updateTheme = () => {
        if (mql.matches) {
          actions.setTheme(dark);
        } else {
          actions.setTheme(light);
        }
      };
      updateTheme();
      mql.addEventListener('change', updateTheme);
      return () => {
        mql.removeEventListener('change', updateThemeList);
        mql.removeEventListener('change', updateTheme);
      };
    }
    return () => {
      mql.removeEventListener('change', updateThemeList);
    };
  }, []);

  return (
    <body className={`theme-${state.theme.toLowerCase()}`}>
      <div className="flex flex-col items-center">
        <div className="w-3/5">
          <Header />
          <div className="flex">
            <Navigation />
            {children}
          </div>
        </div>
      </div>
    </body>
  );
};

export default ThemedBody;
