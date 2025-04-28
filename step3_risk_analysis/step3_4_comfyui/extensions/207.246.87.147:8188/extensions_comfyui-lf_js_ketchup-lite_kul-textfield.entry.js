import { r as registerInstance, d as createEvent, f as forceUpdate, h, H as Host, g as getElement, a as getAssetPath } from './index-5c52ec0e.js';
import { k as kulManagerInstance, a as KUL_WRAPPER_ID, b as KUL_STYLE_ID, K as KulDataCyAttributes } from './kul-manager-c48a993d.js';
import { g as getProps } from './componentUtils-a994b230.js';

/*-------------------------------------------------*/
/*                    P r o p s                    */
/*-------------------------------------------------*/
var KulTextfieldProps;
(function (KulTextfieldProps) {
    KulTextfieldProps["kulDisabled"] = "Enables or disables the text field to prevent user interaction.";
    KulTextfieldProps["kulFullWidth"] = "Applies a full-width styling to the text field, making it occupy all available horizontal space.";
    KulTextfieldProps["kulHelper"] = "Specifies helper text to display alongside the text field.";
    KulTextfieldProps["kulHtmlAttributes"] = "Allows customization of the input or textarea element through additional HTML attributes.";
    KulTextfieldProps["kulIcon"] = "Defines the icon to be displayed within the text field.";
    KulTextfieldProps["kulLabel"] = "Assigns a label to the text field, improving accessibility and providing context to the user about what kind of input is expected.";
    KulTextfieldProps["kulStyle"] = "Accepts custom CSS styles to apply directly to the text field component.";
    KulTextfieldProps["kulStyling"] = "Determines the overall styling theme of the text field, affecting its shape and border.";
    KulTextfieldProps["kulTrailingIcon"] = "Controls whether the icon should appear after the text input, typically used for action buttons like clear or search.";
    KulTextfieldProps["kulValue"] = "Initializes the text field with a default value when the component is first rendered.";
})(KulTextfieldProps || (KulTextfieldProps = {}));

const kulTextfieldCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_textfield_backdrop_filter:var(\n    --kul-textfield-backdrop-filter,\n    blur(3.5px)\n  );--kul_textfield_backdrop_filter_hover:var(\n    --kul-textfield-backdrop-filter-hover,\n    blur(5px)\n  );--kul_textfield_background_color:var(\n    --kul-textfield-background-color,\n    rgba(var(--kul-text-color-rgb), 0.125)\n  );--kul_textfield_background_color_hover:var(\n    --kul-textfield-background-color-hover,\n    rgba(var(--kul-text-color-rgb), 0.175)\n  );--kul_textfield_border_radius:var(--kul-textfield-border-radius, 4px);--kul_textfield_input_color:var(\n    --kul-textfield-input-color,\n    var(--kul-text-color)\n  );--kul_textfield_input_color_rgb:var(\n    --kul-textfield-input-color-rgb,\n    var(--kul-text-color-rgb)\n  );--kul_textfield_font_family:var(\n    --kul-textfield-font-family,\n    var(--kul-font-family)\n  );--kul_textfield_input_font_size:var(\n    --kul-textfield-input-font-size,\n    var(--kul-font-size)\n  );--kul_textfield_input_font_weight:var(\n    --kul-textfield-input-font-weight,\n    400\n  );--kul_textfield_label_color:var(\n    --kul-textfield-label-color,\n    rgba(var(--kul-text-color-rgb), 0.875)\n  );--kul_textfield_label_font_size:var(\n    --kul-textfield-label-font-size,\n    var(--kul-font-size)\n  );--kul_textfield_label_font_weight:var(\n    --kul-textfield-label-font-weight,\n    400\n  );--kul_textfield_padding:var(--kul-textfield-padding, 0 16px);--kul_textfield_primary_color:var(\n    --kul-textfield-primary-color,\n    var(--kul-primary-color)\n  );display:block;font-family:var(--kul-font-family);width:100%}.textfield{align-items:baseline;-webkit-backdrop-filter:var(--kul_textfield_backdrop_filter);backdrop-filter:var(--kul_textfield_backdrop_filter);background-color:var(--kul_textfield_background_color);border-radius:var(--kul_textfield_border_radius);box-sizing:border-box;display:inline-flex;height:56px;overflow:hidden;padding:var(--kul_textfield_padding);position:relative;transition:background-color 125ms ease;width:100%}.textfield--full-width{padding:0}.textfield--full-width.textfield--flat .textfield__input,.textfield--full-width.textfield--raised .textfield__input{padding-top:0}.textfield--has-icon{width:100%}.textfield--has-icon .textfield__label{left:20px}.textfield--has-label .textfield__label{display:inline-block}.textfield--outlined:hover .textfield__notched-outline__leading,.textfield--outlined:hover .textfield__notched-outline__notch,.textfield--outlined:hover .textfield__notched-outline__trailing,.textfield--outlined.textfield--focused .textfield__notched-outline__leading,.textfield--outlined.textfield--focused .textfield__notched-outline__notch,.textfield--outlined.textfield--focused .textfield__notched-outline__trailing,.textfield--textarea:hover .textfield__notched-outline__leading,.textfield--textarea:hover .textfield__notched-outline__notch,.textfield--textarea:hover .textfield__notched-outline__trailing,.textfield--textarea.textfield--focused .textfield__notched-outline__leading,.textfield--textarea.textfield--focused .textfield__notched-outline__notch,.textfield--textarea.textfield--focused .textfield__notched-outline__trailing{border-color:var(--kul_textfield_primary_color)}.textfield--outlined.textfield--focused .textfield__notched-outline__leading,.textfield--outlined.textfield--focused .textfield__notched-outline__notch,.textfield--outlined.textfield--focused .textfield__notched-outline__trailing,.textfield--textarea.textfield--focused .textfield__notched-outline__leading,.textfield--textarea.textfield--focused .textfield__notched-outline__notch,.textfield--textarea.textfield--focused .textfield__notched-outline__trailing{border-width:2px}.textfield--outlined{height:56px;overflow:visible}.textfield--outlined.textfield--has-icon .textfield__label{left:3em}.textfield--outlined.textfield--filled .textfield__label,.textfield--outlined.textfield--focused .textfield__label{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background-color:rgba(var(--kul-background-color-rgb), 0.75);border:1px solid rgba(var(--kul_textfield_input_color_rgb), 0.575);border-radius:8px;left:4px;padding:0.25em 1em;transform:scale(0.75) translateY(-3.25em)}.textfield--outlined.textfield--filled .textfield__label{border:1px solid rgba(var(--kul_textfield_input_color_rgb), 0.575)}.textfield--outlined.textfield--focused .textfield__label{border:1px solid rgba(var(--kul_textfield_primary_color_rgb), 0.575)}.textfield--outlined .textfield__input{background-color:transparent;border:none;display:flex;height:100%}.textfield--outlined .textfield__label{max-width:100%;position:relative}.textfield--filled .textfield__label,.textfield--focused .textfield__label{color:var(--kul_textfield_primary_color);font-weight:600}.textfield--disabled{-webkit-text-fill-color:var(--kul-disabled-color);background:var(--kul-disabled-background-color);color:var(--kul-disabled-color);pointer-events:none}.textfield--disabled .textfield__icon{background-color:var(--kul-disabled-color)}.textfield--focused,.textfield:hover{-webkit-backdrop-filter:var(--kul_textfield_backdrop_filter_hover);backdrop-filter:var(--kul_textfield_backdrop_filter_hover);background-color:var(--kul_textfield_background_color_hover)}.textfield--focused .textfield__line-ripple:after{width:100%}.textfield--flat{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:transparent}.textfield--flat--focused,.textfield--flat:hover{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:transparent}.textfield--flat.textfield--filled .textfield__label,.textfield--flat.textfield--focused .textfield__label,.textfield--raised.textfield--filled .textfield__label,.textfield--raised.textfield--focused .textfield__label{transform:translateY(-150%) scale(0.75)}.textfield--flat.textfield--has-icon .textfield__label,.textfield--raised.textfield--has-icon .textfield__label{left:3.75em}.textfield--flat .textfield__input,.textfield--raised .textfield__input{padding-top:0.75em}.textfield--flat .textfield__label,.textfield--raised .textfield__label{left:1.15em;right:initial}.textfield--textarea{align-items:center;flex-direction:column;height:auto;overflow:visible;padding:0;transition:none}.textfield--textarea .textfield__input{box-sizing:border-box;flex-grow:1;height:auto;line-height:1.5rem;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;padding:16px;resize:none;transform:translateX(1px) translateY(1px)}.textfield--textarea.textfield--filled .textfield__label,.textfield--textarea.textfield--focused .textfield__label{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background-color:rgba(var(--kul-background-color-rgb), 0.75);border:1px solid rgba(var(--kul_textfield_input_color_rgb), 0.575);border-radius:8px;padding:0.25em 1em;transform:scale(0.75) translateY(-4.25em)}.textfield--textarea .textfield__label{left:4px;position:relative;top:42px}.textfield__input,.textfield__label{box-sizing:border-box;font-family:var(--kul_textfield_font_family)}.textfield__icon{align-self:center;background-color:var(--kul_textfield_input_color);cursor:pointer;height:1.75em;outline:none;padding:0 0.5em;width:1.75em}.textfield__input{appearance:none;background:none;border:none;border-radius:0;box-sizing:border-box;caret-color:var(--kul_textfield_primary_color);color:var(--kul_textfield_input_color);font-size:var(--kul_textfield_input_font_size);font-weight:var(--kul_textfield_font_weight);height:100%;letter-spacing:0.009375em;min-width:0;outline:none;text-decoration:inherit;text-transform:inherit;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%}.textfield__label{color:var(--kul_textfield_label_color);cursor:text;display:none;font-size:var(--kul_textfield_label_font_size);font-weight:400;left:4px;letter-spacing:0.009375em;line-height:1.15em;overflow:hidden;pointer-events:none;position:absolute;right:initial;text-align:left;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;top:50%;transform:translateY(-50%);transform-origin:left top;transition:all 125ms cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap}.textfield__notched-outline{box-sizing:border-box;display:flex;height:100%;left:0;max-width:100%;opacity:1;pointer-events:none;position:absolute;right:0;text-align:left;top:0;width:100%;z-index:1}.textfield__notched-outline__leading,.textfield__notched-outline__notch,.textfield__notched-outline__trailing{border-bottom:1px solid;border-top:1px solid;border-color:rgba(var(--kul_textfield_input_color_rgb), 0.575);box-sizing:border-box;height:100%;pointer-events:none}.textfield__notched-outline__leading{border-bottom-left-radius:4px;border-bottom-right-radius:0;border-bottom-style:inset;border-left:1px solid;border-right:none;border-top-left-radius:4px;border-top-right-radius:0;width:12px}.textfield__notched-outline__notch{border-bottom-style:inset;flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.textfield__notched-outline__trailing{border-bottom-left-radius:0;border-bottom-right-radius:4px;border-bottom-style:inset;border-left:none;border-right:1px solid;border-top-left-radius:0;border-top-right-radius:4px;flex-grow:1}.textfield__line-ripple:before,.textfield__line-ripple:after{border-radius:2px;bottom:0;content:\"\";height:2px;left:0;position:absolute}.textfield__line-ripple:before{background-color:rgba(var(--kul_textfield_input_color_rgb), 0.225);width:100%}.textfield__line-ripple:after{background-color:var(--kul_textfield_primary_color);transition:width 125ms ease;width:0}.textfield__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both;transform:translateX(-1px) translateY(-1px)}.textfield__helper-text{font-family:var(--kul_textfield_font_family);line-height:1.25em;display:block;font-size:0.75em;font-weight:400;letter-spacing:0.0333333333em;line-height:normal;margin:0;margin-top:0;opacity:0;text-decoration:inherit;text-transform:inherit;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);will-change:opacity}.textfield__helper-text--persistent{transition:none;opacity:1;will-change:initial}.textfield__helper-line{display:flex;justify-content:space-between;box-sizing:border-box;padding-right:16px;padding-left:16px}:host(.kul-full-height){height:100%}:host(.kul-full-height) #kul-component,:host(.kul-full-height) .textfield{height:100%}:host(.kul-danger){--kul-textfield-primary-color:var(--kul-danger-color)}:host(.kul-info){--kul-textfield-primary-color:var(--kul-info-color)}:host(.kul-secondary){--kul-textfield-primary-color:var(--kul-secondary-color)}:host(.kul-success){--kul-textfield-primary-color:var(--kul-success-color)}:host(.kul-warning){--kul-textfield-primary-color:var(--kul-warning-color)}";
const KulTextfieldStyle0 = kulTextfieldCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KulTextfield_instances, _KulTextfield_hasOutline, _KulTextfield_input, _KulTextfield_kulManager, _KulTextfield_maxLength, _KulTextfield_updateState, _KulTextfield_outlineCheck, _KulTextfield_prepCounter, _KulTextfield_prepHelper, _KulTextfield_prepIcon, _KulTextfield_prepInput, _KulTextfield_prepLabel, _KulTextfield_prepRipple, _KulTextfield_prepTextArea, _KulTextfield_updateStatus;
const KulTextfield = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-textfield-event", 6);
        _KulTextfield_instances.add(this);
        /*-------------------------------------------------*/
        /*       I n t e r n a l   V a r i a b l e s       */
        /*-------------------------------------------------*/
        _KulTextfield_hasOutline.set(this, void 0);
        _KulTextfield_input.set(this, void 0);
        _KulTextfield_kulManager.set(this, kulManagerInstance());
        _KulTextfield_maxLength.set(this, void 0);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.status = new Set();
        this.value = "";
        this.kulDisabled = false;
        this.kulFullWidth = false;
        this.kulHelper = null;
        this.kulHtmlAttributes = {};
        this.kulIcon = "";
        this.kulLabel = "";
        this.kulStyle = "";
        this.kulStyling = "raised";
        this.kulTrailingIcon = false;
        this.kulValue = "";
    }
    onKulEvent(e, eventType) {
        const target = e.target;
        const inputValue = target?.value;
        switch (eventType) {
            case "blur":
                this.status.delete("focused");
                this.status = new Set(this.status);
                break;
            case "focus":
                this.status.add("focused");
                this.status = new Set(this.status);
                break;
        }
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            inputValue,
            value: this.value,
        });
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugLifecycleInfo>} A promise that resolves with the debug information object.
     */
    async getDebugInfo() {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    async getProps(descriptions) {
        return getProps(this, KulTextfieldProps, descriptions);
    }
    /**
     * Used to retrieve the component's current state.
     * @returns {Promise<string>} Promise resolved with the current state of the component.
     */
    async getValue() {
        return this.value;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
    }
    /**
     * Blurs the input element.
     */
    async setBlur() {
        __classPrivateFieldGet(this, _KulTextfield_input, "f").blur();
    }
    /**
     * Focuses the input element.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _KulTextfield_input, "f").focus();
    }
    /**
     * Sets the component's state.
     * @param {string} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    async setValue(value) {
        __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_updateState).call(this, value);
    }
    /**
     * Initiates the unmount sequence, which removes the component from the DOM after a delay.
     * @param {number} ms - Number of milliseconds
     */
    async unmount(ms = 0) {
        setTimeout(() => {
            this.onKulEvent(new CustomEvent("unmount"), "unmount");
            this.rootElement.remove();
        }, ms);
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    componentWillLoad() {
        __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").theme.register(this);
        if (this.kulValue) {
            this.status.add("filled");
            this.value = this.kulValue;
        }
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").debug.updateDebugInfo(this, "did-load");
    }
    componentWillRender() {
        __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").debug.updateDebugInfo(this, "will-render");
        __classPrivateFieldSet(this, _KulTextfield_hasOutline, __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_outlineCheck).call(this), "f");
        __classPrivateFieldSet(this, _KulTextfield_maxLength, this.kulHtmlAttributes?.maxLength, "f");
        __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_updateStatus).call(this);
    }
    componentDidRender() {
        __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        const classList = ["textfield", "textfield--" + this.kulStyling];
        this.status.forEach((status) => {
            classList.push(`textfield--${status}`);
        });
        return (h(Host, { key: '489524a8020f1feb409f81bb68323c66ab5ff481' }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").theme.setKulStyle(this))) : undefined, h("div", { key: '514b553a7765f68ebf51533dc0ce4517d3b855da', id: KUL_WRAPPER_ID }, h("div", { key: '90f802bf9f96da718a26dd0e8bac422a5715be64', class: classList.join(" ") }, this.kulStyling === "textarea"
            ? [
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepCounter).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepIcon).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepTextArea).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepLabel).call(this),
            ]
            : [
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepIcon).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepInput).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepLabel).call(this),
                __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepRipple).call(this),
                this.kulFullWidth ? undefined : __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepHelper).call(this),
            ]), this.kulFullWidth ? __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepHelper).call(this) : undefined)));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _KulTextfield_kulManager, "f").theme.unregister(this);
    }
    get rootElement() { return getElement(this); }
};
_KulTextfield_hasOutline = new WeakMap(), _KulTextfield_input = new WeakMap(), _KulTextfield_kulManager = new WeakMap(), _KulTextfield_maxLength = new WeakMap(), _KulTextfield_instances = new WeakSet(), _KulTextfield_updateState = function _KulTextfield_updateState(value, e = new CustomEvent("change")) {
    if (!this.kulDisabled) {
        this.value = value;
        this.onKulEvent(e, "change");
    }
}, _KulTextfield_outlineCheck = function _KulTextfield_outlineCheck() {
    return this.kulStyling === "outlined" || this.kulStyling === "textarea";
}, _KulTextfield_prepCounter = function _KulTextfield_prepCounter() {
    if (!__classPrivateFieldGet(this, _KulTextfield_maxLength, "f")) {
        return;
    }
    return (h("div", { class: "textfield__character-counter" }, "'0 / ' + ", __classPrivateFieldGet(this, _KulTextfield_maxLength, "f").toString()));
}, _KulTextfield_prepHelper = function _KulTextfield_prepHelper() {
    if (!this.kulHelper) {
        return;
    }
    const classList = {
        "textfield__helper-text": true,
        "textfield__helper-text--persistent": !this.kulHelper.showWhenFocused,
    };
    return (h("div", { class: "textfield__helper-line" }, h("div", { class: classList }, this.kulHelper.value), this.kulStyling !== "textarea" ? __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_prepCounter).call(this) : undefined));
}, _KulTextfield_prepIcon = function _KulTextfield_prepIcon() {
    if (!this.kulIcon) {
        return;
    }
    const path = getAssetPath(`./assets/svg/${this.kulIcon}.svg`);
    const style = {
        mask: `url('${path}') no-repeat center`,
        webkitMask: `url('${path}') no-repeat center`,
    };
    return h("div", { class: "textfield__icon", onClick: () => { }, style: style });
}, _KulTextfield_prepInput = function _KulTextfield_prepInput() {
    return (h("input", { ...this.kulHtmlAttributes, class: "textfield__input", "data-cy": KulDataCyAttributes.INPUT, disabled: this.kulDisabled, onBlur: (e) => {
            this.onKulEvent(e, "blur");
        }, onChange: (e) => {
            __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_updateState).call(this, e.currentTarget.value);
        }, onClick: (e) => {
            this.onKulEvent(e, "click");
        }, onFocus: (e) => {
            this.onKulEvent(e, "focus");
        }, onInput: (e) => {
            this.onKulEvent(e, "input");
        }, placeholder: this.kulFullWidth ? this.kulLabel : undefined, ref: (el) => {
            if (el) {
                __classPrivateFieldSet(this, _KulTextfield_input, el, "f");
            }
        }, value: this.value }));
}, _KulTextfield_prepLabel = function _KulTextfield_prepLabel() {
    if (this.kulFullWidth) {
        return;
    }
    const labelEl = (h("label", { class: "textfield__label", htmlFor: "input" }, this.kulLabel));
    if (__classPrivateFieldGet(this, _KulTextfield_hasOutline, "f")) {
        return (h("div", { class: "textfield__notched-outline" }, h("div", { class: "textfield__notched-outline__leading" }), h("div", { class: "textfield__notched-outline__notch" }, labelEl), h("div", { class: "textfield__notched-outline__trailing" })));
    }
    return labelEl;
}, _KulTextfield_prepRipple = function _KulTextfield_prepRipple() {
    return !__classPrivateFieldGet(this, _KulTextfield_hasOutline, "f") && h("span", { class: "textfield__line-ripple" });
}, _KulTextfield_prepTextArea = function _KulTextfield_prepTextArea() {
    return (h("span", { class: "textfield__resizer" }, h("textarea", { ...this.kulHtmlAttributes, class: "textfield__input", "data-cy": KulDataCyAttributes.INPUT, disabled: this.kulDisabled, id: "input", onBlur: (e) => {
            this.onKulEvent(e, "blur");
        }, onChange: (e) => {
            __classPrivateFieldGet(this, _KulTextfield_instances, "m", _KulTextfield_updateState).call(this, e.currentTarget.value);
        }, onClick: (e) => {
            this.onKulEvent(e, "click");
        }, onFocus: (e) => {
            this.onKulEvent(e, "focus");
        }, onInput: (e) => {
            this.onKulEvent(e, "input");
        }, ref: (el) => {
            if (el) {
                __classPrivateFieldSet(this, _KulTextfield_input, el, "f");
            }
        }, value: this.value })));
}, _KulTextfield_updateStatus = function _KulTextfield_updateStatus() {
    const propertiesToUpdateStatus = [
        { prop: "value", status: "filled" },
        { prop: "kulDisabled", status: "disabled" },
        { prop: "kulFullWidth", status: "full-width" },
        { prop: "kulIcon", status: "has-icon" },
        { prop: "kulLabel", status: "has-label" },
    ];
    propertiesToUpdateStatus.forEach(({ prop, status }) => {
        const propName = prop;
        const propValue = this[propName];
        if (propValue) {
            this.status.add(status);
        }
        else {
            this.status.delete(status);
        }
    });
};
KulTextfield.style = KulTextfieldStyle0;

export { KulTextfield as kul_textfield };

//# sourceMappingURL=kul-textfield.entry.js.map