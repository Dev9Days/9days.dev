'use client';
import React from 'react';
import { ThemeConsumer } from '@/theme/theme-context';
import { ThemeColors } from '@/theme/themes';
import ThemedBody from './themed-body';

// layout.tsx에서도 처리할 수 있었지만 클라이언트 컴포넌트의 코드를 최소화하기 위해 분리
const ThemeContainer = ({
  lastTheme,
  children,
}: Readonly<{
  lastTheme: ThemeColors;
  children: React.ReactNode;
}>) => {
  return (
    <ThemeConsumer>
      {({ state, actions }) => (
        <ThemedBody state={state} actions={actions} lastTheme={lastTheme}>
          {children}
        </ThemedBody>
      )}
    </ThemeConsumer>
  );
};

export default ThemeContainer;
