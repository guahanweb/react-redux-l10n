import TranslationStore from '../stores/TranslationStore.js';

/**
 * Extends the provided <code>component</code> with a prototype method to allow
 * for retrieving translated text by key. This technique simulated a mixin for
 * ES6 modules.
 *
 * @param {Component} component
 * @return void
 */
function TranslatedComponent(component) {

    // reference to mount/unmount for extending behavior
    let didMount = component.prototype.componentDidMount;
    let willUnmount = component.prototype.componentWillUnmount;

    // reference function to be able to bind to the context of the provided component
    function _translatedComponent_handleLanguageChanged() {
        this.forceUpdate();
    }

    // Extend existing <code>componentDidMount</code> with our own binding.
    component.prototype.componentDidMount = function () {
        // store reference so we can unregister
        this._translatedComponent_onLanguageChanged = _translatedComponent_handleLanguageChanged.bind(this);

        TranslationStore.addChangeListener(this._translatedComponent_onLanguageChanged);

        if (didMount) {
            didMount.apply(this);
        }
    };

    // Extend existing <code>componentWillUnmount</code> with our own binding.
    component.prototype.componentWillUnmount = function () {
        // unsubscribe & clean up listener
        TranslationStore.removeChangeListener(this._translatedComponent_onLanguageChanged);
        this._translatedComponent_onLanguageChanged = null;

        if (willUnmount) {
            willUnmount.apply(this);
        }
    };

    // convenience
    component.prototype.translate = function () {
        return TranslationStore.get.apply(TranslationStore, arguments);
    };
}

export default TranslatedComponent;
