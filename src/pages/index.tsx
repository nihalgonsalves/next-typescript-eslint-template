import { NextPage } from 'next';
import React from 'react';
import { useTranslation, i18n, languages } from '../NextI18Next';

const IndexPage: NextPage = () => {
  const { t } = useTranslation();

  const changeLanguage = (language: string) => () => {
    void i18n.changeLanguage(language);
  };

  return (
    <div>
      <p>
        <strong>{t('hello')}</strong>
      </p>
      {languages.map((language) => (
        <button key={language} type="button" onClick={changeLanguage(language)}>
          {language}
        </button>
      ))}
    </div>
  );
};

IndexPage.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

export default IndexPage;
