import React from "react";
import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './theme.css';

export default function UXPinWrapper({ children }) {
  return <EuiProvider colorMode="light">{children}</EuiProvider>
}
