import { useEffect, useState } from 'react';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const ko = require('../assets/lang/lang.ko.json');
const en = require('../assets/lang/lang.en.json');
const es = require('../assets/lang/lang.es.json');
const ja = require('../assets/lang/lang.ja.json');
const zh = require('../assets/lang/lang.zh.json');

const deviceLanguage = getLocales()[0].languageCode;
const i18n = new I18n({
  ko, en, es, ja, zh
});
// i18n.locale = deviceLanguage;

export default function useTranslation() {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(deviceLanguage);
  }, []);

  return {
    t: scope => i18n.t(scope, { locale }),
    locale,
  }
}