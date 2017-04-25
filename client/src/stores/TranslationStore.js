let _languageCode = null;
let _translationData = {};
let _listeners = [];

// default to always support english
let _availableLanguages = [{
    code: 'en',
    name: 'English'
}];

/**
 * This object is a helper for managing L10n within React applications. While
 * this is the intent, it is generic enough to be used in any client app. It
 * provides the capacity to register the supported languages for each app
 * and allows for changing the currently loaded language set.
 *
 * @class TranslationStore
 */
const TranslationStore = Object.assign({}, {
    /**
     * Registers a new listener to be executed when the language changes.
     *
     * @param {function} fn The callback to be executed
     * @return void
     */
    addChangeListener: function (fn) {
        for (var i = 0; i < _listeners.length; ++i) {
            if (fn == _listeners[i]) {
                // already exists
                return;
            }
        }

        _listeners.push(fn);
    },

    /**
     * Deregister a listener from the language change event
     *
     * @param {function} fn The callback to be deregistered
     * @return void
     */
    removeChangeListener: function (fn) {
        var index = _listeners.indexOf(fn);
        if (index > -1) {
            _listeners.splice(index, 1);
        }
    },

    /**
     * Process all listeners and execute callbacks
     *
     * @return void
     */
    emitChange: function () {
        _listeners.forEach(function (fn) {
            fn();
        });
    },

    /**
     * Returns the language object representing the currently loaded
     * data set.
     *
     * @return {object} The current language object
     */
    getCurrentLanguage: function () {
        return TranslationStore.getLanguage(_languageCode);
    },

    /**
     * Returns the language object for the provided <code>langCode</code>
     *
     * @param {string} langCode The language code for retrieval
     * @return {object|null} The requested language object or null if nonexistant
     */
    getLanguage: function (langCode) {
        var langs = TranslationStore.getAvailableLanguages();
        for (var i = 0; i < langs.length; ++i) {
            if (langs[i]['code'] == langCode) {
                return langs[i];
            }
        }
        return null;
    },

    /**
     * Loads a new "current" language and data set into the store
     *
     * @param {string} langCode The language code to be loaded
     * @param {object} data The set of strings (key-value pairs) to load into the store
     * @return void
     */
    setLanguage: function (langCode, data) {
        let lang = TranslationStore.getLanguage(langCode);

        _languageCode = langCode;
        _translationData = data;

        document.documentElement.lang = lang.code;
        TranslationStore.emitChange();
    },

    /**
     * Returns the full list of available (supported) languages
     *
     * @return {array}
     */
    getAvailableLanguages: function () {
        return _availableLanguages;
    },

    /**
     * Registers a list of available (supported) languages
     *
     * @param {array} languages An array of language objects
     * @return void
     */
    setAvailableLanguages: function (languages) {
        if (languages instanceof Array) {
            _availableLanguages = [];
            languages.forEach(function (lang) {
                if (typeof lang.code !== 'undefined' && typeof lang.name !== 'undefined') {
                    _availableLanguages.push(lang);
                }
            });
        }
    },

    /**
     * Retrievs a single string by key from the loaded data set. If the string does not exist,
     * the string key wrapped with '#' will be returned (ie, "#foobar#"). Additionally, if the
     * string contains placeholders for variable replacement, any additional parameters passed
     * to this function will be replaced into the string into the placeholders matching their
     * numeric location.
     *
     * @param {string} translationKey The string key to be retrieved
     * @param {string...} value An arbitrary number of additional parameters used for variable replacement
     * @return {string} The final processed string
     */
    get: function (translationKey) {
        var translation = _translationData[translationKey] || ('#' + translationKey + '#');
        if (arguments.length > 1) {
            let positionalArguments = Array.prototype.splice.call(arguments, 1);

            // replaces {0} with the 0th argument, etc.
            return translation.replace(/{(\d+)}/g, function (match, number) {
                return typeof positionalArguments[number] != 'undefined'
                    ? positionalArguments[number]
                    : match
            });
        }

        return translation;
    },

    /**
     * Checks for the existence of a specific translation key in the loaded data set
     *
     * @param {string} translationKey The key to be tested
     * @return {boolean} Whether or not the key exists in the data set
     */
    has: function (translationKey) {
        return !!(_translationData[translationKey]);
    }
});

export default TranslationStore;
