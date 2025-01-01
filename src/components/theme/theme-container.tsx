'use client';
import React from 'react';
import { useTheme } from '@/theme/theme-context';
import { ThemeColors } from '@/theme/themes';
import ThemedBody from './themed-body';

// 클라이언트 컴포넌트의 코드를 최소화하기 위해 분리
const ThemeContainer = ({
  lastTheme,
  children,
}: Readonly<{
  lastTheme: ThemeColors;
  children: React.ReactNode;
}>) => {
  const { state, actions } = useTheme();
  return (
    <ThemedBody state={state} actions={actions} lastTheme={lastTheme}>
      {children}
    </ThemedBody>
  );
};

export default ThemeContainer;
