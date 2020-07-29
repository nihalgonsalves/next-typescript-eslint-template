import path from 'path'
import NextI18Next from 'next-i18next';

import { LanguageId } from './config';

const defaultLanguage: LanguageId = 'en';
const otherLanguages: LanguageId[] = ['de'];
export const languages: LanguageId[] = [defaultLanguage, ...otherLanguages];

const NextI18NextInstance = new NextI18Next({
  defaultLanguage,
  otherLanguages,
  localePath: path.resolve('./public/static/locales')
});

const {
  appWithTranslation,
  useTranslation,
  withTranslation,
} = NextI18NextInstance;

export const i18n = NextI18NextInstance.i18n as typeof NextI18NextInstance.i18n & {
  language: LanguageId
};

export {
  appWithTranslation,
  useTranslation,
  withTranslation,
  NextI18NextInstance,
};

export default NextI18NextInstance;
