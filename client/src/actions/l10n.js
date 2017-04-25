'use strict';

import TranslationStore from '../stores/TranslationStore';

function changeLanguage(locale) {
  // make sure we're actually requesting a change
  let lang = TranslationStore.getCurrentLanguage();
  if (lang === locale) return;

  // make sure it's a supported language
  TranslationStore.getAvailableLanguages().forEach((language, i) => {
    if (language.code === locale) {
      fetch('l10n/' + locale + '.json')
        .then(response => response.json())
        .then(function (json) {
          TranslationStore.setLanguage(locale, json);
        });
    }
  });
}

export default {
  changeLanguage: changeLanguage
};
