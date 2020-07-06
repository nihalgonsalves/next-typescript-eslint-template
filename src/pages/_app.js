import App from 'next/app';

import { appWithTranslation } from '../NextI18Next';

class MyApp extends App {}

export default appWithTranslation(MyApp);
