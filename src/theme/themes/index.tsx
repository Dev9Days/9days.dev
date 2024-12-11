export interface ThemeStyle {
  colors: {
    fontColor: string;
    backgroundColor: string;
  };
  isSystem: boolean;
}
export enum ThemeColors {
  System = 'System',
  Light = 'Light',
  Dark = 'Dark',
  Orange = 'Orange',
  Mintchoco = 'Mintchoco',
  Warm = 'Warm',
}
export type ThemeMap = { [color in ThemeColors]: ThemeStyle };
export const themeList: ThemeMap = {
  System: { colors: { fontColor: '', backgroundColor: '' }, isSystem: false },
  Light: { colors: { fontColor: '#1e1e1e', backgroundColor: '#ffffff' }, isSystem: false },
  Dark: { colors: { fontColor: '#ffffff', backgroundColor: '#1e1e1e' }, isSystem: false },
  Orange: { colors: { fontColor: '#f38748', backgroundColor: '#ffffff' }, isSystem: false },
  Mintchoco: { colors: { fontColor: '#62594d', backgroundColor: '#b5e3d8' }, isSystem: false },
  Warm: { colors: { fontColor: '#564c4d', backgroundColor: '#ecdfcf' }, isSystem: false },
};

export default themeList;
