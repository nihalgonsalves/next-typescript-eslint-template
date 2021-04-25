import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';

const IndexPage: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const otherLocale = router.locale === 'en' ? 'de' : 'en';

  return (
    <div>
      <p>
        <strong>{t('hello')}</strong>
      </p>
      <Link href="/" locale={otherLocale}>
        <button type="button">{otherLocale}</button>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    return { props: {} };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default IndexPage;
