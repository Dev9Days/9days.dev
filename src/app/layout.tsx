import { cookies } from 'next/headers';
import { ThemeProvider } from '@/theme/theme-context';
import { ThemeColors } from '@/theme/themes';
import ThemeContainer from '@/components/theme/theme-container';
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();
  const theme = cookie.get('theme');
  const lastTheme = (theme?.value || ThemeColors.System) as ThemeColors;

  return (
    <html lang="ko">
      <ThemeProvider lastTheme={lastTheme}>
        <ThemeContainer lastTheme={lastTheme}>{children}</ThemeContainer>
      </ThemeProvider>
    </html>
  );
}
