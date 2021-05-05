// modified from https://testing-library.com/docs/react-native-testing-library/setup
import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { I18nProvider } from "@lingui/react";
import { i18n } from "config/i18n";

const Providers = ({ children }: { children: React.ReactElement }) => (
  <I18nProvider i18n={i18n}>{children}</I18nProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

// override render method
export { customRender as render };
