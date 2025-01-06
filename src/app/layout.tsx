import { cookies } from 'next/headers';
import { ThemeProvider } from '@/theme/theme-context';
import { ThemeColors } from '@/theme/themes';
import ThemedBody from '@/components/theme/themed-body';
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
        <ThemedBody lastTheme={lastTheme}>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  );
}
