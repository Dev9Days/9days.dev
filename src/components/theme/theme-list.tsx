import { assignInlineVars } from '@vanilla-extract/dynamic';
import ThemeItem from './theme-item';
import { ThemeColors } from '@/theme/themes';
import { themeItemList, vars } from './theme-list.css';
import { ThemeContextType } from '@/theme/theme-context';

interface IProps {
  themeData: ThemeContextType;
}
const ThemeList = ({ themeData }: IProps) => {
  const { state, actions } = themeData;
  const { theme, themeList } = state;
  const selectedTheme = themeList[theme];
  const arrThemeList = Object.entries(themeList).filter(([themeKey]) => themeKey !== ThemeColors.System);

  const onClick = (themeKey: string) => {
    if (theme !== themeKey) {
      actions.setTheme(themeKey as ThemeColors);
      document.cookie = `theme=${themeKey}; path=/;`;
    }
  };
  return (
    <div
      className={themeItemList}
      style={assignInlineVars({
        [vars.backgroundColor]: `${selectedTheme.colors.fontColor}22`,
        [vars.totalHeight]: `${(arrThemeList.length + 1) * 40}px`,
      })}
    >
      <div className="w-full">
        <ThemeItem
          backgroundColor={selectedTheme.colors.backgroundColor}
          fontColor={selectedTheme.colors.fontColor}
          themeName={theme}
          themeColor={selectedTheme.colors.fontColor}
          isSystem={selectedTheme.isSystem}
        />
      </div>
      <div className="border-b w-full" style={{ borderColor: selectedTheme.colors.fontColor }} />
      {arrThemeList.map(([themeKey, { colors, isSystem }]) => (
        <div key={themeKey} className="w-full">
          <ThemeItem
            backgroundColor={colors.backgroundColor}
            fontColor={colors.fontColor}
            themeName={themeKey}
            themeColor={selectedTheme.colors.fontColor}
            isSystem={isSystem}
            onClick={() => onClick(themeKey)}
          />
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
