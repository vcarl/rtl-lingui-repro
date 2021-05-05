import { setupI18n } from "@lingui/core";
import en from "locales/en/messages";
import es from "locales/es/messages";

export const i18n = setupI18n({
  language: "es",
  catalogs: {
    en,
    es,
  },
});
