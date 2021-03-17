import App from 'next/app';
import { appWithTranslation } from 'next-i18next';

class MyApp extends App {}

export default appWithTranslation(MyApp);
