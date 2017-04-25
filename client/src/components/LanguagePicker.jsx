import React from 'react';
import TranslationStore from '../stores/TranslationStore';
import TranslatedComponent from '../utils/TranslatedComponent';
import L10n from '../actions/l10n';

function LanguageSelect(props) {
  let choices = TranslationStore.getAvailableLanguages().map((lang, i) => {
    return <option key={i} value={lang.code}>{lang.name}</option>;
  });

  return (
    <select name="language" onChange={props.changeHandler} value={props.currentLanguage}>
      {choices}
    </select>
  );
}

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    L10n.changeLanguage(e.target.value);
  }

  render() {
    let current = TranslationStore.getCurrentLanguage();
    return (
      <div className="language-picker">
        <label>{this.translate('lang-select')}</label>
        <LanguageSelect changeHandler={this.changeLanguage} currentLanguage={current.code} />
      </div>
    );
  }
}

TranslatedComponent(LanguagePicker);
export default LanguagePicker;
