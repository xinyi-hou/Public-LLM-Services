import { r as registerInstance, d as createEvent, f as forceUpdate, h, H as Host, g as getElement, a as getAssetPath } from './index-5c52ec0e.js';
import { k as kulManagerInstance, c as KulThemeColorValues, a as KUL_WRAPPER_ID, b as KUL_STYLE_ID, g as KUL_DROPDOWN_CLASS, K as KulDataCyAttributes, h as KUL_DROPDOWN_CLASS_VISIBLE, i as KulDynamicPositionPlacement, C as CSS_VAR_PREFIX, f as KulLanguageGeneric } from './kul-manager-c48a993d.js';
import { g as getProps } from './componentUtils-a994b230.js';

/*-------------------------------------------------*/
/*                    P r o p s                    */
/*-------------------------------------------------*/
var KulBadgeProps;
(function (KulBadgeProps) {
    KulBadgeProps["kulImageProps"] = "The props of the image displayed inside the badge.";
    KulBadgeProps["kulLabel"] = "The text displayed inside the badge.";
    KulBadgeProps["kulStyle"] = "Custom style of the component.";
})(KulBadgeProps || (KulBadgeProps = {}));

const kulBadgeCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_badge_border_radius:var(--kul-badge-border-radius, 30px);--kul_badge_font_family:var(--kul-badge-font-family, var(--kul-font-family));--kul_badge_font_size:var(--kul-badge-font-size, var(--kul-font-size));--kul_badge_min_size:var(--kul-badge-min-size, 1.5em);--kul_badge_padding:var(--kul-badge-padding, 0.25em);--kul_badge_primary_color:var(\n    --kul-badge-primary-color,\n    var(--kul-primary-color)\n  );--kul_badge_text_on_primary_color:var(\n    --kul-badge-text-on-primary-color,\n    var(--kul-text-on-primary-color)\n  );display:block;font-family:var(--kul_badge_font_family);font-size:var(--kul_badge_font_size);position:absolute;top:0;left:0;transform:translate(-50%, -50%)}#kul-component{background-color:var(--kul_badge_primary_color);border-radius:var(--kul_badge_border_radius);color:var(--kul_badge_text_on_primary_color);font-size:0.875em;min-height:var(--kul_badge_min_size);min-width:var(--kul_badge_min_size);padding:var(--kul_badge_padding);text-align:center}kul-image{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}:host(.kul-top-right){bottom:unset;left:unset;right:0;top:0;transform:translate(50%, -50%)}:host(.kul-bottom-right){bottom:0;left:unset;right:0;top:unset;transform:translate(50%, 50%)}:host(.kul-bottom-left){bottom:0;left:0;right:unset;top:unset;transform:translate(-50%, 50%)}:host(.kul-danger){--kul-badge-primary-color:var(--kul-danger-color);--kul-badge-text-on-primary-color:white}:host(.kul-info){--kul-badge-primary-color:var(--kul-info-color);--kul-badge-text-on-primary-color:white}:host(.kul-secondary){--kul-badge-primary-color:var(--kul-secondary-color);--kul-badge-text-on-primary-color:var(--kul-text-on-secondary-color)}:host(.kul-success){--kul-badge-primary-color:var(--kul-success-color);--kul-badge-text-on-primary-color:white}:host(.kul-warning){--kul-badge-primary-color:var(--kul-warning-color);--kul-badge-text-on-primary-color:white}";
const KulBadgeStyle0 = kulBadgeCss;

var __classPrivateFieldGet$3 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _KulBadge_kulManager;
const KulBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-badge-event", 6);
        /*-------------------------------------------------*/
        /*       I n t e r n a l   V a r i a b l e s       */
        /*-------------------------------------------------*/
        _KulBadge_kulManager.set(this, kulManagerInstance());
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulImageProps = null;
        this.kulLabel = "";
        this.kulStyle = "";
    }
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
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
        return getProps(this, KulBadgeProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
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
        __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").debug.updateDebugInfo(this, "did-load");
    }
    componentWillRender() {
        __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").debug.updateDebugInfo(this, "will-render");
    }
    componentDidRender() {
        __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        let imageEl = null;
        if (!this.kulLabel && this.kulImageProps) {
            if (!this.kulImageProps.kulColor) {
                this.kulImageProps.kulColor = `var(${KulThemeColorValues.TEXT_ON_PRIMARY})`;
            }
            imageEl = h("kul-image", { key: '0febac5e5a958329535243d4547a2513ac34b792', ...this.kulImageProps });
        }
        return (h(Host, { key: '1f1f3438eb1a0ea01d1cb6bfbb3fb7963a01eec9' }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").theme.setKulStyle(this))) : undefined, h("div", { key: 'ff95905d92f54570b935c9fbf174dc91378cc65c', id: KUL_WRAPPER_ID, onClick: (e) => this.onKulEvent(e, "click") }, this.kulLabel, imageEl)));
    }
    disconnectedCallback() {
        __classPrivateFieldGet$3(this, _KulBadge_kulManager, "f").theme.unregister(this);
    }
    get rootElement() { return getElement(this); }
};
_KulBadge_kulManager = new WeakMap();
KulBadge.style = KulBadgeStyle0;

/*-------------------------------------------------*/
/*                    P r o p s                    */
/*-------------------------------------------------*/
var KulButtonProps;
(function (KulButtonProps) {
    KulButtonProps["kulData"] = "Actual data of the button, used to render dropdown buttons.";
    KulButtonProps["kulDisabled"] = "When true, the component is disabled.";
    KulButtonProps["kulIcon"] = "Specifies an icon to display.";
    KulButtonProps["kulIconOff"] = "Icon to be used for the off state when the button is toggable.";
    KulButtonProps["kulLabel"] = "Defines text to display on the button.";
    KulButtonProps["kulRipple"] = "When set to true, the pointerdown event will trigger a ripple effect.";
    KulButtonProps["kulShowSpinner"] = "When true, a spinner will be shown on the button.";
    KulButtonProps["kulStyle"] = "Sets a custom CSS style for the component.";
    KulButtonProps["kulStyling"] = "Defines the button appearance. Possible values are \"flat\", \"floating\", \"icon\", \"outlined\", and \"raised\". The default is \"raised\".";
    KulButtonProps["kulToggable"] = "Makes the button toggable between an on and off state.";
    KulButtonProps["kulTrailingIcon"] = "If set, displays an icon after the text.";
    KulButtonProps["kulType"] = "Defines the button type attribute.";
    KulButtonProps["kulValue"] = "If true, the button is marked as checked.";
})(KulButtonProps || (KulButtonProps = {}));

const kulButtonCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_button_backdrop_filter:var(--kul-button-backdrop-filter, blur(3.5px));--kul_button_backdrop_filter_hover:var(\n    --kul-button-backdrop-filter-hover,\n    blur(5px)\n  );--kul_button_border_radius:var(--kul-button-border-radius, 4px);--kul_button_disabled_color:var(\n    --kul-button-disabled-color,\n    var(--kul-disabled-color)\n  );--kul_button_font_family:var(\n    --kul-button-font-family,\n    var(--kul-font-family)\n  );--kul_button_font_size:var(--kul-button-font-size, var(--kul-font-size));--kul_button_font_weight:var(--kul-button-font-weight, 400);--kul_button_height:var(--kul-button-height, 3em);--kul_button_padding:var(--kul-button-padding, 0 1.25em);--kul_button_primary_color:var(\n    --kul-button-primary-color,\n    var(--kul-primary-color)\n  );--kul_button_primary_color_h:var(\n    --kul-button-primary-color-h,\n    var(--kul-primary-color-h)\n  );--kul_button_primary_color_s:var(\n    --kul-button-primary-color-s,\n    var(--kul-primary-color-s)\n  );--kul_button_primary_color_l:var(\n    --kul-button-primary-color-l,\n    var(--kul-primary-color-l)\n  );--kul_button_primary_color_rgb:var(\n    --kul-button-primary-color-rgb,\n    var(--kul-primary-color-rgb)\n  );--kul_button_text_on_primary_color:var(\n    --kul-button-text-on-primary-color,\n    var(--kul-text-on-primary-color)\n  );--kul_button_text_transform:var(--kul-button-text-transform, uppercase);--kul_spinner_color:var(--kul_button_primary_color);display:block;font-size:var(--kul_button_font_size);width:max-content}#kul-component{align-items:center;display:flex}.button{align-items:center;background-color:transparent;border:none;border-radius:var(--kul_button_border_radius);box-sizing:border-box;color:var(--kul_button_primary_color);cursor:pointer;display:inline-flex;font-family:var(--kul_button_font_family);font-size:0.775em;font-weight:var(--kul_button_font_weight);height:var(--kul_button_height);justify-content:center;letter-spacing:0.0892857143em;line-height:inherit;min-width:64px;outline:none;overflow:visible;padding:var(--kul_button_padding);position:relative;text-decoration:none;text-transform:var(--kul_button_text_transform);transition:background-color 80ms linear, box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);user-select:none;vertical-align:middle}.button:hover{background-color:rgba(var(--kul_button_primary_color_rgb), 0.125)}.button:focus{background-color:rgba(var(--kul_button_primary_color_rgb), 0.375)}.button--floating,.button--raised,.button--outlined{-webkit-backdrop-filter:var(--kul_button_backdrop_filter);backdrop-filter:var(--kul_button_backdrop_filter)}.button--floating,.button--raised{--kul-spinner-color:var(--kul-text-color)}.button--floating:not(.button--disabled),.button--raised:not(.button--disabled){--kul-spinner-border-color:hsl(\n    var(--kul_button_primary_color_h),\n    calc(var(--kul_button_primary_color_s) * 0.75),\n    calc(var(--kul_button_primary_color_l) * 0.85)\n  );background-color:rgba(var(--kul_button_primary_color_rgb), 0.15)}.button--floating:focus,.button--floating:hover,.button--raised:focus,.button--raised:hover{-webkit-backdrop-filter:var(--kul_button_backdrop_filter);backdrop-filter:var(--kul_button_backdrop_filter)}.button--floating.button--disabled,.button--raised.button--disabled{background-color:var(--kul-disabled-background-color);box-shadow:none}.button--floating{border-radius:24px;box-shadow:0 0.215em 0.35em -1px rgba(var(--kul-text-color-rgb), 0.2), 0 0.43em 0.71em 0 rgba(var(--kul-text-color-rgb), 0.14), 0 0.07em 1.285em 0 rgba(var(--kul-text-color-rgb), 0.12);font-weight:500;font-size:1em;height:3.4em;width:auto;padding:0 1.5em}.button--floating.button--no-label{border-radius:50%;height:4em;padding:0;width:4em}.button--floating:hover,.button--floating:focus{box-shadow:0 5px 5px -3px rgba(var(--kul-text-color-rgb), 0.25), 0 8px 10px 1px rgba(var(--kul-text-color-rgb), 0.18), 0 3px 14px 2px rgba(var(--kul-text-color-rgb), 0.15)}.button--floating:active{box-shadow:0 7px 8px -4px rgba(var(--kul-text-color-rgb), 0.2), 0 12px 17px 2px rgba(var(--kul-text-color-rgb), 0.14), 0 5px 22px 4px rgba(var(--kul-text-color-rgb), 0.12)}.button--disabled{color:var(--kul_button_disabled_color);cursor:auto;opacity:0.75;pointer-events:none}.button--no-label{min-width:unset;padding:0 0.5em}.button--no-label .button__icon{margin:0}.button--outlined{border-width:1px;border-style:solid}.button--outlined:not(.button--disabled){border-color:var(--kul_button_primary_color);background-color:transparent;color:var(--kul_button_primary_color)}.button--outlined:focus,.button--outlined:hover{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.button--outlined:hover{background-color:rgba(var(--kul_button_primary_color_rgb), 0.125)}.button--outlined:focus{background-color:rgba(var(--kul_button_primary_color_rgb), 0.175)}.button--outlined.button--disabled{opacity:0.75;border-color:var(--kul_button_disabled_color)}.button--raised{box-shadow:0 3px 1px -2px rgba(var(--kul-text-color-rgb), 0.2), 0 2px 2px 0 rgba(var(--kul-text-color-rgb), 0.14), 0 1px 5px 0 rgba(var(--kul-text-color-rgb), 0.12)}.button--raised:focus,.button--raised:hover{box-shadow:0 2px 4px -1px rgba(var(--kul-text-color-rgb), 0.25), 0 4px 5px 0 rgba(var(--kul-text-color-rgb), 0.18), 0 1px 10px 0 rgba(var(--kul-text-color-rgb), 0.15)}.button--raised:active{box-shadow:0 5px 5px -3px rgba(var(--kul-text-color-rgb), 0.2), 0 8px 10px 1px rgba(var(--kul-text-color-rgb), 0.14), 0 3px 14px 2px rgba(var(--kul-text-color-rgb), 0.12)}.button--with-spinner{opacity:0.8;pointer-events:none}.button--dropdown{max-width:max-content;min-width:unset;padding:0.5em;position:relative}.button--dropdown:before{background-color:var(--kul-border-color);content:\"\";height:100%;left:0;opacity:0.75;position:absolute;top:0;width:1px}.button--dropdown kul-image{margin:0}.button__spinner-container{width:100%;height:var(--kul_button_spinner_height);left:0;position:absolute}.button__icon{margin-left:-0.25em;margin-right:0.75em}.button__icon--hidden{visibility:hidden}.button__label+.button__icon{margin-left:0.75em;margin-right:-0.25em}.icon-button{background-color:transparent;color:var(--kul_button_primary_color);display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;font-size:var(--kul_button_font_size);text-decoration:none;cursor:pointer;user-select:none;padding:0.75em;border-radius:50%}.icon-button:hover,.icon-button:focus{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(var(--kul_button_primary_color_rgb), 0.125)}.icon-button__icon{display:flex;margin:auto}.icon-button__icon.icon-button__icon--on{display:none}.icon-button--with-spinner{pointer-events:none}.icon-button--with-spinner .icon-button__icon{opacity:0}.icon-button--with-spinner .button__spinner-container{width:100%;height:100%;left:0;position:absolute;top:0}.icon-button--disabled{opacity:0.75;pointer-events:none}.icon-button__spinner-container{width:var(--kul_button_spinner_width);height:var(--kul_button_spinner_height)}.content--hidden{visibility:hidden}@keyframes pulsating{0%{transform:scale(2);box-shadow:0 0 0 0 rgba(var(--kul_button_primary_color_rgb), 0.7)}70%{transform:scale(2.75);box-shadow:0 0 0 10px rgba(var(--kul_button_primary_color_rgb), 0)}100%{transform:scale(2);box-shadow:0 0 0 0 rgba(var(--kul_button_primary_color_rgb), 0)}}:host(.kul-full-height){height:100%}:host(.kul-full-height) #kul-component,:host(.kul-full-height) .button{height:100%}:host(.kul-full-width){width:100%}:host(.kul-full-width) #kul-component,:host(.kul-full-width) .button{width:100%}:host(.kul-large) button{font-size:1.25em}:host(.kul-shaped) .button{border-radius:18px}:host(.kul-shaped) .button.button--floating{border-radius:50% 0}:host(.kul-slim) button{font-size:0.675em}:host(.kul-pulsating) .icon-button--on:after{content:\"\";animation:pulsating 1250ms infinite;position:absolute;height:2px;width:2px;top:calc(50% - 1px);left:calc(50% - 1px);border-radius:50%}:host(.kul-danger){--kul-button-primary-color:var(--kul-danger-color);--kul-button-primary-color-h:var(--kul-danger-color-h);--kul-button-primary-color-s:var(--kul-danger-color-s);--kul-button-primary-color-l:var(--kul-danger-color-l);--kul-button-primary-color-rgb:var(--kul-danger-color-rgb);--kul-button-text-on-primary-color:white}:host(.kul-info){--kul-button-primary-color:var(--kul-info-color);--kul-button-primary-color-h:var(--kul-info-color-h);--kul-button-primary-color-s:var(--kul-info-color-s);--kul-button-primary-color-l:var(--kul-info-color-l);--kul-button-primary-color-rgb:var(--kul-info-color-rgb);--kul-button-text-on-primary-color:white}:host(.kul-secondary){--kul-button-primary-color:var(--kul-secondary-color);--kul-button-primary-color-h:var(--kul-secondary-color-h);--kul-button-primary-color-s:var(--kul-secondary-color-s);--kul-button-primary-color-l:var(--kul-secondary-color-l);--kul-button-primary-color-rgb:var(--kul-secondary-color-rgb);--kul-button-text-on-primary-color:var(--kul-text-on-secondary-color)}:host(.kul-success){--kul-button-primary-color:var(--kul-success-color);--kul-button-primary-color-h:var(--kul-success-color-h);--kul-button-primary-color-s:var(--kul-success-color-s);--kul-button-primary-color-l:var(--kul-success-color-l);--kul-button-primary-color-rgb:var(--kul-success-color-rgb);--kul-button-text-on-primary-color:white}:host(.kul-warning){--kul-button-primary-color:var(--kul-warning-color);--kul-button-primary-color-h:var(--kul-warning-color-h);--kul-button-primary-color-s:var(--kul-warning-color-s);--kul-button-primary-color-l:var(--kul-warning-color-l);--kul-button-primary-color-rgb:var(--kul-warning-color-rgb);--kul-button-text-on-primary-color:white}";
const KulButtonStyle0 = kulButtonCss;

var __classPrivateFieldGet$2 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KulButton_instances, _KulButton_clickCb, _KulButton_dropdown, _KulButton_dropdownRippleSurface, _KulButton_list, _KulButton_kulManager, _KulButton_rippleSurface, _KulButton_timeout, _KulButton_listManager, _KulButton_isDropdown, _KulButton_isOn, _KulButton_updateState, _KulButton_prepIcon, _KulButton_prepLabel, _KulButton_prepRipple, _KulButton_prepSpinner, _KulButton_normalizedStyling, _KulButton_renderButton, _KulButton_renderIconButton, _KulButton_renderDropdown;
const KulButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-button-event", 6);
        _KulButton_instances.add(this);
        /*-------------------------------------------------*/
        /*       I n t e r n a l   V a r i a b l e s       */
        /*-------------------------------------------------*/
        _KulButton_clickCb.set(this, void 0);
        _KulButton_dropdown.set(this, void 0);
        _KulButton_dropdownRippleSurface.set(this, void 0);
        _KulButton_list.set(this, void 0);
        _KulButton_kulManager.set(this, kulManagerInstance());
        _KulButton_rippleSurface.set(this, void 0);
        _KulButton_timeout.set(this, void 0);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.value = "off";
        this.kulData = null;
        this.kulDisabled = false;
        this.kulIcon = "";
        this.kulIconOff = "";
        this.kulLabel = "";
        this.kulRipple = true;
        this.kulShowSpinner = false;
        this.kulStyle = "";
        this.kulStyling = "raised";
        this.kulToggable = false;
        this.kulTrailingIcon = false;
        this.kulType = "button";
        this.kulValue = false;
    }
    onKulEvent(e, eventType, isDropdown = false) {
        switch (eventType) {
            case "click":
                __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_updateState).call(this, __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_isOn).call(this) ? "off" : "on");
                break;
            case "pointerdown":
                if (this.kulRipple) {
                    __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.ripple.trigger(e, isDropdown ? __classPrivateFieldGet$2(this, _KulButton_dropdownRippleSurface, "f") : __classPrivateFieldGet$2(this, _KulButton_rippleSurface, "f"));
                }
                break;
        }
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
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
     * Used to retrieve component's properties and descriptions.
     * @param {boolean} descriptions - When true, includes descriptions for each property.
     * @returns {Promise<GenericObject>} Promise resolved with an object containing the component's properties.
     */
    async getProps(descriptions) {
        return getProps(this, KulButtonProps, descriptions);
    }
    /**
     * Used to retrieve the component's current state.
     * @returns {Promise<KulButtonState>} Promise resolved with the current state of the component.
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
     * Temporarily sets a different label/icon combination, falling back to their previous value after a timeout.
     * @param {string} label - Temporary label to display.
     * @param {string} icon - Temporary icon to display.
     * @param {number} timeout - Time in ms to wait before restoring previous values.
     * @returns {Promise<void>}
     */
    async setMessage(label = "Copied!", icon = "check", timeout = 1000) {
        if (__classPrivateFieldGet$2(this, _KulButton_timeout, "f")) {
            return;
        }
        const oldIcon = this.kulIcon;
        const oldLabel = this.kulLabel;
        requestAnimationFrame(() => {
            this.kulLabel = label;
            this.kulIcon = icon;
        });
        __classPrivateFieldSet$1(this, _KulButton_timeout, setTimeout(() => {
            this.kulLabel = oldLabel;
            this.kulIcon = oldIcon;
            __classPrivateFieldSet$1(this, _KulButton_timeout, null, "f");
        }, timeout), "f");
    }
    /**
     * Sets the component's state.
     * @param {KulButtonState} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    async setValue(value) {
        __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_updateState).call(this, value);
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
        if (this.kulValue) {
            this.value = "on";
        }
        const firstNode = this.kulData?.nodes?.[0];
        if (firstNode) {
            if (!this.kulIcon) {
                this.kulIcon = firstNode.icon;
            }
            if (!this.kulLabel) {
                this.kulLabel = __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").data.cell.stringify(firstNode.value);
            }
        }
        __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.register(this);
    }
    componentDidLoad() {
        if (__classPrivateFieldGet$2(this, _KulButton_rippleSurface, "f")) {
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.ripple.setup(__classPrivateFieldGet$2(this, _KulButton_rippleSurface, "f"));
        }
        if (__classPrivateFieldGet$2(this, _KulButton_dropdownRippleSurface, "f")) {
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.ripple.setup(__classPrivateFieldGet$2(this, _KulButton_dropdownRippleSurface, "f"));
        }
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").debug.updateDebugInfo(this, "did-load");
    }
    componentWillRender() {
        __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").debug.updateDebugInfo(this, "will-render");
    }
    componentDidRender() {
        __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        const buttonStyling = __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_normalizedStyling).call(this);
        const isIconButton = !!(buttonStyling === "icon" ||
            (buttonStyling === "raised" &&
                this.kulIcon &&
                (this.kulLabel === null || this.kulLabel === undefined)));
        if (!this.kulLabel && !this.kulIcon && !this.kulData) {
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").debug.logs.new(this, "Empty button.", "informational");
            return;
        }
        return (h(Host, null, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.setKulStyle(this))) : undefined, h("div", { id: KUL_WRAPPER_ID }, isIconButton ? __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_renderIconButton).call(this) : __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_renderButton).call(this))));
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet$2(this, _KulButton_list, "f")) {
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.unregister([__classPrivateFieldGet$2(this, _KulButton_list, "f")]);
        }
        __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").theme.unregister(this);
    }
    get rootElement() { return getElement(this); }
};
_KulButton_clickCb = new WeakMap(), _KulButton_dropdown = new WeakMap(), _KulButton_dropdownRippleSurface = new WeakMap(), _KulButton_list = new WeakMap(), _KulButton_kulManager = new WeakMap(), _KulButton_rippleSurface = new WeakMap(), _KulButton_timeout = new WeakMap(), _KulButton_instances = new WeakSet(), _KulButton_listManager = function _KulButton_listManager() {
    return {
        close: () => {
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.stop(__classPrivateFieldGet$2(this, _KulButton_list, "f"));
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").removeClickCallback(__classPrivateFieldGet$2(this, _KulButton_clickCb, "f"));
        },
        isOpened: () => {
            return __classPrivateFieldGet$2(this, _KulButton_list, "f").classList.contains(KUL_DROPDOWN_CLASS_VISIBLE);
        },
        open: () => {
            if (__classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.isRegistered(__classPrivateFieldGet$2(this, _KulButton_list, "f"))) {
                __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.changeAnchor(__classPrivateFieldGet$2(this, _KulButton_list, "f"), __classPrivateFieldGet$2(this, _KulButton_dropdown, "f"));
            }
            else {
                __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.register(__classPrivateFieldGet$2(this, _KulButton_list, "f"), __classPrivateFieldGet$2(this, _KulButton_dropdown, "f"), 0, KulDynamicPositionPlacement.AUTO, true);
            }
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").dynamicPosition.start(__classPrivateFieldGet$2(this, _KulButton_list, "f"));
            if (!__classPrivateFieldGet$2(this, _KulButton_clickCb, "f")) {
                __classPrivateFieldSet$1(this, _KulButton_clickCb, {
                    cb: () => {
                        __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).close();
                    },
                    el: __classPrivateFieldGet$2(this, _KulButton_list, "f"),
                }, "f");
            }
            __classPrivateFieldGet$2(this, _KulButton_kulManager, "f").addClickCallback(__classPrivateFieldGet$2(this, _KulButton_clickCb, "f"), true);
        },
        toggle: () => {
            if (__classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).isOpened()) {
                __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).close();
            }
            else {
                __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).open();
            }
        },
    };
}, _KulButton_isDropdown = function _KulButton_isDropdown() {
    return this.kulData?.nodes?.[0]?.children?.length;
}, _KulButton_isOn = function _KulButton_isOn() {
    return this.value === "on" ? true : false;
}, _KulButton_updateState = function _KulButton_updateState(value) {
    if (this.kulToggable &&
        !this.kulDisabled &&
        (value === "off" || value === "on")) {
        this.value = value;
    }
}, _KulButton_prepIcon = function _KulButton_prepIcon(image) {
    return this.kulIcon ? (h("kul-image", { class: `button__icon kul-icon ${this.kulShowSpinner ? "button__icon--hidden" : ""}`, ...image })) : undefined;
}, _KulButton_prepLabel = function _KulButton_prepLabel(className) {
    return h("span", { class: className }, this.kulLabel);
}, _KulButton_prepRipple = function _KulButton_prepRipple(isDropdown = false) {
    return this.kulRipple ? (h("div", { ref: (el) => {
            if (el && this.kulRipple) {
                if (isDropdown) {
                    __classPrivateFieldSet$1(this, _KulButton_dropdownRippleSurface, el, "f");
                }
                else {
                    __classPrivateFieldSet$1(this, _KulButton_rippleSurface, el, "f");
                }
            }
        } })) : undefined;
}, _KulButton_prepSpinner = function _KulButton_prepSpinner() {
    return this.kulShowSpinner ? (h("div", { class: "button__spinner-container" }, h("slot", { name: "spinner" }))) : undefined;
}, _KulButton_normalizedStyling = function _KulButton_normalizedStyling() {
    return this.kulStyling
        ? this.kulStyling.toLowerCase()
        : "raised";
}, _KulButton_renderButton = function _KulButton_renderButton() {
    const buttonStyling = __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_normalizedStyling).call(this);
    const image = {
        kulColor: this.kulDisabled
            ? `var(--kul_button_disabled_color)`
            : `var(--kul_button_primary_color)`,
        kulValue: this.kulIcon,
        kulSizeX: buttonStyling === "floating" ? "1.75em" : "1.475em",
        kulSizeY: buttonStyling === "floating" ? "1.75em" : "1.475em",
    };
    const className = {
        button: true,
        "button--disabled": this.kulDisabled ? true : false,
        [`button--${buttonStyling}`]: true,
        "button--no-label": !this.kulLabel || this.kulLabel === " " ? true : false,
        "button--with-spinner": this.kulShowSpinner,
    };
    const labelClassName = {
        button__label: true,
        "content--hidden": this.kulShowSpinner && !this.kulDisabled ? true : false,
    };
    const styleSpinnerContainer = {
        "--kul_button_spinner_height": image.kulSizeY,
    };
    return [
        h("button", { "aria-label": this.rootElement.title, class: className, disabled: this.kulDisabled, onBlur: (e) => this.onKulEvent(e, "blur"), onClick: (e) => this.onKulEvent(e, "click"), onFocus: (e) => this.onKulEvent(e, "focus"), onPointerDown: (e) => this.onKulEvent(e, "pointerdown"), style: styleSpinnerContainer, type: this.kulType ? this.kulType : "button" }, __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepRipple).call(this), this.kulTrailingIcon
            ? [__classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepLabel).call(this, labelClassName), __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepIcon).call(this, image)]
            : [__classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepIcon).call(this, image), __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepLabel).call(this, labelClassName)], __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepSpinner).call(this)),
        __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_renderDropdown).call(this, image, buttonStyling),
    ];
}, _KulButton_renderIconButton = function _KulButton_renderIconButton() {
    const isLarge = this.rootElement.classList.contains("large");
    const isOn = __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_isOn).call(this);
    const image = {
        kulColor: this.kulDisabled
            ? `var(--kul_button_disabled_color)`
            : `var(--kul_button_primary_color)`,
        kulSizeX: isLarge ? "calc(1.75em * 1.5)" : "1.75em",
        kulSizeY: isLarge ? "calc(1.75em * 1.5)" : "1.75em",
    };
    const className = {
        "icon-button": true,
        "button--disabled": this.kulDisabled ? true : false,
        "icon-button--on": this.kulToggable && isOn ? true : false,
        toggable: this.kulToggable ? true : false,
        "icon-button--with-spinner": this.kulShowSpinner ? true : false,
    };
    const styleSpinnerContainer = {
        "--kul_button_spinner_height": image.kulSizeY,
        "--kul_button_spinner_width": image.kulSizeX,
    };
    const iconOff = this.kulIconOff
        ? this.kulIconOff
        : this.kulIcon + "_border";
    return [
        h("button", { "aria-label": this.rootElement.title, class: className, disabled: this.kulDisabled, onBlur: (e) => this.onKulEvent(e, "blur"), onClick: (e) => this.onKulEvent(e, "click"), onFocus: (e) => this.onKulEvent(e, "focus"), onPointerDown: (e) => this.onKulEvent(e, "pointerdown"), style: styleSpinnerContainer, value: this.value, type: this.kulType ? this.kulType : "button" }, __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepRipple).call(this), h("kul-image", { class: "icon-button__icon", ...image, kulValue: this.kulToggable && !isOn ? iconOff : this.kulIcon }), __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepSpinner).call(this)),
        __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_renderDropdown).call(this, image, "icon"),
    ];
}, _KulButton_renderDropdown = function _KulButton_renderDropdown(image, styling) {
    if (!__classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_isDropdown).call(this)) {
        return;
    }
    const className = {
        button: true,
        [`button--${styling}`]: true,
        ["button--dropdown"]: true,
        "button--disabled": this.kulDisabled ? true : false,
    };
    const eventHandler = (e) => {
        if (e.detail.eventType === "click") {
            this.onKulEvent(e, "kul-event");
            __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).close();
        }
    };
    return (h("button", { class: className, "data-cy": KulDataCyAttributes.DROPDOWN_BUTTON, disabled: this.kulDisabled, onClick: () => {
            __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_listManager).call(this).toggle();
        }, onPointerDown: (e) => this.onKulEvent(e, "pointerdown", true), ref: (el) => {
            if (el) {
                __classPrivateFieldSet$1(this, _KulButton_dropdown, el, "f");
            }
        } }, __classPrivateFieldGet$2(this, _KulButton_instances, "m", _KulButton_prepRipple).call(this, true), h("kul-image", { ...image, kulValue: "--kul-dropdown-icon" }), h("kul-list", { class: KUL_DROPDOWN_CLASS, "data-cy": KulDataCyAttributes.DROPDOWN_MENU, kulData: { nodes: this.kulData.nodes[0].children }, "onKul-list-event": eventHandler, ref: (el) => (__classPrivateFieldSet$1(this, _KulButton_list, el, "f")) })));
};
KulButton.style = KulButtonStyle0;

//#endregion
//#region Props
var KulImageProps;
(function (KulImageProps) {
    KulImageProps["kulBadgeProps"] = "Sets the props to show a badge.";
    KulImageProps["kulColor"] = "The color of the icon, defaults to the CSS variable --kul-icon-color.";
    KulImageProps["kulShowSpinner"] = "When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.";
    KulImageProps["kulSizeX"] = "The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).";
    KulImageProps["kulSizeY"] = "The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).";
    KulImageProps["kulStyle"] = "Custom style of the component.";
    KulImageProps["kulValue"] = "Defines the source URL of the image. This property is used to set the image resource that the component should display.";
})(KulImageProps || (KulImageProps = {}));
//#endregion

const kulImageCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_image_aspect_ratio:var(--kul-image-aspect-ratio, 1);--kul_image_background:var(--kul-image-background, transparent);--kul_image_height:var(--kul-image-height, 100%);--kul_image_margin:var(--kul-image-margin, auto);--kul_image_mask:var(--kul-image-mask, none);--kul_image_spinner_offset:var(\n    --kul-image-spinner-offset,\n    calc(var(--kul_image_spinner_size) / 2)\n  );--kul_image_spinner_size:var(--kul-image-spinner-size, 32px);--kul_image_transition_duration:var(--kul-image-transition-duration, 0.2s);--kul_image_transition_timing_function:var(\n    --kul-image-transition-timing-function,\n    ease\n  );--kul_image_width:var(--kul-image-width, 100%);display:block;height:var(--kul_image_height);margin:var(--kul_image_margin);min-height:var(--kul_image_height);min-width:var(--kul_image_width);position:relative;transition:color var(--kul_image_transition_duration) var(--kul_image_transition_timing_function);width:var(--kul_image_width)}#kul-component{height:100%;margin:var(--kul_image_margin);position:relative;transition:color var(--kul_image_transition_duration) var(--kul_image_transition_timing_function);width:100%}.image{display:block;height:var(--kul_image_height);margin:var(--kul_image_margin);position:relative;width:var(--kul_image_width)}.image__icon{aspect-ratio:var(--kul_image_aspect_ratio);background-color:var(--kul_image_background);height:var(--kul_image_height);margin:var(--kul_image_margin);mask:var(--kul_image_mask);-webkit-mask:var(--kul_image_mask);width:var(--kul_image_width)}img{display:block;height:var(--kul_image_height);margin:var(--kul_image_margin);width:var(--kul_image_width)}.spinner{height:var(--kul_image_spinner_size);left:calc(50% - var(--kul_image_spinner_offset));position:absolute;top:calc(50% - var(--kul_image_spinner_offset));width:var(--kul_image_spinner_size)}:host(.kul-fit) img{max-width:max-content;object-fit:contain}:host(.kul-cover) img{object-fit:cover}";
const KulImageStyle0 = kulImageCss;

var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _KulImage_kulManager;
const KulImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-image-event", 6);
        /*-------------------------------------------------*/
        /*        I n t e r n a l   V a r i a b l e s      */
        /*-------------------------------------------------*/
        _KulImage_kulManager.set(this, kulManagerInstance());
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.error = false;
        this.kulBadgeProps = null;
        this.kulColor = `var(${KulThemeColorValues.ICON})`;
        this.kulShowSpinner = false;
        this.kulSizeX = "100%";
        this.kulSizeY = "100%";
        this.kulStyle = "";
        this.kulValue = "";
    }
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
        });
    }
    /*-------------------------------------------------*/
    /*                 W a t c h e r s                 */
    /*-------------------------------------------------*/
    async resetState() {
        this.error = false;
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
        return getProps(this, KulImageProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
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
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/
    createIcon() {
        const className = {
            image__icon: true,
        };
        const style = {
            ["--kul_image_background"]: this.kulColor
                ? this.kulColor
                : `var(${KulThemeColorValues.ICON})`,
            ["--kul_image_mask"]: "",
        };
        const isThemeIcon = this.kulValue.indexOf(CSS_VAR_PREFIX) > -1;
        if (isThemeIcon) {
            const themeIcon = this.kulValue.replace("--", "");
            className["kul-icon"] = true;
            className[themeIcon] = true;
        }
        const icon = this.error
            ? "broken_image"
            : isThemeIcon
                ? __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").theme.list[__classPrivateFieldGet$1(this, _KulImage_kulManager, "f").theme.name].icons[this.kulValue]
                : this.kulValue;
        style["--kul_image_mask"] =
            `url('${getAssetPath(`./assets/svg/${icon}.svg`)}') no-repeat center`;
        return h("div", { class: className, style: style });
    }
    createImage() {
        return (h("img", { onError: (e) => {
                this.error = true;
                this.onKulEvent(e, "error");
            }, onLoad: (e) => {
                this.resetState();
                this.onKulEvent(e, "load");
            }, src: this.kulValue }));
    }
    isResourceUrl() {
        return !!(this.kulValue &&
            (this.kulValue.indexOf(".") > -1 ||
                this.kulValue.indexOf("/") > -1 ||
                this.kulValue.indexOf("\\") > -1));
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    componentWillLoad() {
        __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").debug.updateDebugInfo(this, "did-load");
    }
    componentWillRender() {
        __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").debug.updateDebugInfo(this, "will-render");
    }
    componentDidRender() {
        __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        if (!this.kulValue) {
            __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").debug.logs.new(this, "Empty image.");
            return;
        }
        let el;
        let feedback;
        const isUrl = this.isResourceUrl();
        let spinnerLayout;
        let style = {
            "--kul_image_height": this.kulSizeY ? this.kulSizeY : "auto",
            "--kul_image_width": this.kulSizeX ? this.kulSizeX : "100%",
        };
        if (isUrl && !this.error) {
            el = this.createImage();
        }
        else {
            el = this.createIcon();
        }
        if (this.kulShowSpinner && isUrl) {
            spinnerLayout = 14;
            feedback = (h("div", { class: "spinner", title: "Image not loaded yet..." }, h("kul-spinner", { kulActive: true, kulDimensions: "3px", kulLayout: spinnerLayout })));
        }
        return (h(Host, { style: style }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").theme.setKulStyle(this))) : undefined, feedback, h("div", { id: KUL_WRAPPER_ID }, h("div", { class: "image", onClick: (e) => {
                this.onKulEvent(e, "click");
            } }, el, this.kulBadgeProps ? (h("kul-badge", { ...this.kulBadgeProps })) : undefined))));
    }
    disconnectedCallback() {
        __classPrivateFieldGet$1(this, _KulImage_kulManager, "f").theme.unregister(this);
    }
    static get assetsDirs() { return ["assets/svg"]; }
    get rootElement() { return getElement(this); }
    static get watchers() { return {
        "kulValue": ["resetState"]
    }; }
};
_KulImage_kulManager = new WeakMap();
KulImage.style = KulImageStyle0;

//#endregion
//#region Props
var KulListProps;
(function (KulListProps) {
    KulListProps["kulData"] = "The actual data of the list.";
    KulListProps["kulEmptyLabel"] = "Text displayed when the list is empty.";
    KulListProps["kulEnableDeletions"] = "Defines whether items can be removed from the list or not.";
    KulListProps["kulNavigation"] = "When true, enables items' navigation through arrow keys.";
    KulListProps["kulRipple"] = "When set to true, the pointerdown event will trigger a ripple effect.";
    KulListProps["kulSelectable"] = "Defines whether items are selectable or not.";
    KulListProps["kulStyle"] = "Custom style of the component.";
})(KulListProps || (KulListProps = {}));
//#endregion

const kulListCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_list_backdrop_filter:var(--kul-list-backdrop-filter, blur(3.5px));--kul_list_background_color:rgba(var(--kul-background-color-rgb), 0.75);--kul_list_font_family:var(--kul-list-font-family, var(--kul-font-family));--kul_list_font_size:var(--kul-list-font-size, var(--kul-font-size));--kul_list_font_weight:var(--kul-list-font-weight, 400);--kul_list_group_item_height:var(--kul-list-group-item-height, 3em);--kul_list_item_height:var(--kul-list-item-height, 2.5em);--kul_list_item_padding:var(--kul-list-item-padding, 0 0.75em);--kul_list_primary_color:var(\n    --kul-list-primary-color,\n    var(--kul-primary-color)\n  );--kul_list_primary_color_rgb:var(\n    --kul-list-primary-color-rgb,\n    var(--kul-primary-color-rgb)\n  );--kul_list_text_color:var(--kul-list-text-color, var(--kul-text-color));--kul_list_text_color_rgb:var(\n    --kul-list-text-color-rgb,\n    var(--kul-text-color-rgb)\n  );--kul_list_transition:var(--kul-list-transition, 125ms);-webkit-backdrop-filter:var(--kul_list_backdrop_filter);backdrop-filter:var(--kul_list_backdrop_filter);background-color:var(--kul_list_background_color);display:block;font-family:var(--kul_list_font_family);font-size:var(--kul_list_font_size);height:100%;outline:none;width:100%}#kul-component{height:100%;width:100%}.list{box-sizing:border-box;color:var(--kul_list_text_color);font-weight:var(--kul_list_font_weight);height:100%;letter-spacing:0.009375em;line-height:1.5em;list-style-type:none;margin:0;padding:0.5em 0;text-decoration:inherit;text-transform:inherit;width:100%}.list--empty{padding:0}.list--selectable .node{cursor:pointer;pointer-events:all}.list--selectable .node:not(.node--selected):hover,.list--selectable .node:not(.node--selected).node--focused{background-color:rgba(var(--kul_list_text_color_rgb), 0.125)}.list--selectable .node.node--selected:hover{background-color:rgba(var(--kul_list_primary_color_rgb), 0.225);color:var(--kul_list_primary_color)}.list-item{align-items:center;display:flex;width:100%}.list-item:hover .delete{width:1.5em}.delete{box-sizing:border-box;cursor:pointer;height:var(--kul_list_item_height);opacity:0.75;overflow:hidden;transition:opacity 125ms ease, width 125ms ease;width:0}.delete:hover{opacity:1}.delete__icon{background-color:var(--kul_list_text_color);height:100%;margin:0;width:100%}.node{align-items:center;display:flex;height:var(--kul_list_item_height);justify-content:flex-start;padding:var(--kul_list_item_padding);pointer-events:none;position:relative;outline:none;overflow:hidden;transition:background-color var(--kul_list_transition), color var(--kul_list_transition);width:100%}.node--has-description{align-self:flex-start;height:3.6em}.node--selected{background-color:rgba(var(--kul_list_primary_color_rgb), 0.175);color:var(--kul_list_primary_color)}.node__title{display:block;line-height:normal;margin-bottom:-1.5em;margin-top:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.node__title:before{content:\"\";display:inline-block;width:0;height:1.5em;vertical-align:0}.node__title:after{content:\"\";display:inline-block;width:0;height:2em;vertical-align:-2em}.node__subtitle{color:var(--kul_list_text_color);display:block;font-size:0.875em;font-weight:400;letter-spacing:0.0178571429em;line-height:normal;margin-top:0;opacity:0.75;overflow:hidden;padding-bottom:0.5em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap}.node__icon{background-color:var(--kul_list_text_color);height:1.5em;margin:0 0.75em 0 0;width:1.5em}.empty-data{align-items:center;display:flex;justify-content:center;height:100%;width:100%}:host(.kul-dropdown-menu){display:none;height:max-content;max-height:50dvh;max-width:75dvw;overflow:auto;width:max-content}:host(.kul-dropdown-menu--visible){display:block}";
const KulListStyle0 = kulListCss;

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
var _KulList_instances, _KulList_kulManager, _KulList_listItems, _KulList_rippleSurface, _KulList_handleSelection, _KulList_prepDeleteIcon, _KulList_prepIcon, _KulList_prepNode, _KulList_prepSubtitle, _KulList_prepTitle;
const KulList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-list-event", 6);
        _KulList_instances.add(this);
        /*-------------------------------------------------*/
        /*       I n t e r n a l   V a r i a b l e s       */
        /*-------------------------------------------------*/
        _KulList_kulManager.set(this, kulManagerInstance());
        _KulList_listItems.set(this, []);
        _KulList_rippleSurface.set(this, []);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.focused = undefined;
        this.selected = undefined;
        this.kulData = null;
        this.kulEmptyLabel = "";
        this.kulEnableDeletions = false;
        this.kulNavigation = true;
        this.kulRipple = true;
        this.kulSelectable = true;
        this.kulStyle = "";
    }
    onKulEvent(e, eventType, node, index = 0) {
        switch (eventType) {
            case "blur":
                this.focused = null;
                break;
            case "click":
                this.focused = index;
                __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_handleSelection).call(this, index);
                break;
            case "delete":
                if (index > -1) {
                    this.kulData.nodes.splice(index, 1);
                    this.refresh();
                }
                break;
            case "focus":
                this.focused = index;
                break;
            case "pointerdown":
                if (this.kulRipple) {
                    __classPrivateFieldGet(this, _KulList_kulManager, "f").theme.ripple.trigger(e, __classPrivateFieldGet(this, _KulList_rippleSurface, "f")[index]);
                }
                break;
        }
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            node,
        });
    }
    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/
    listenKeydown(e) {
        if (this.kulNavigation) {
            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusNext();
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusPrevious();
                    break;
                case "Enter":
                    e.preventDefault();
                    e.stopPropagation();
                    __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_handleSelection).call(this, this.focused);
                    break;
            }
        }
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * Focuses the next element of the list.
     */
    async focusNext() {
        if (isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined) {
            this.focused = this.selected;
        }
        else {
            this.focused++;
        }
        if (this.focused > __classPrivateFieldGet(this, _KulList_listItems, "f").length - 1) {
            this.focused = 0;
        }
        __classPrivateFieldGet(this, _KulList_listItems, "f")[this.focused].focus();
    }
    /**
     * Focuses the previous element of the list.
     */
    async focusPrevious() {
        if (isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined) {
            this.focused = this.selected;
        }
        else {
            this.focused--;
        }
        if (this.focused < 0) {
            this.focused = __classPrivateFieldGet(this, _KulList_listItems, "f").length - 1;
        }
        __classPrivateFieldGet(this, _KulList_listItems, "f")[this.focused].focus();
    }
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
        return getProps(this, KulListProps, descriptions);
    }
    /**
     * Returns the selected node.
     * @returns {Promise<KulListNode>} Selected node.
     */
    async getSelected() {
        return this.kulData.nodes[this.selected];
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
    }
    /**
     * Calls handleSelection private method to select the given item.
     * @param {number} index - Zero-based index of the item that must be selected, when not provided the list will attempt to select the focused element.
     */
    async selectNode(index) {
        if (index === undefined) {
            index = this.focused;
        }
        __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_handleSelection).call(this, index);
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
        __classPrivateFieldGet(this, _KulList_kulManager, "f").theme.register(this);
    }
    componentDidLoad() {
        if (__classPrivateFieldGet(this, _KulList_rippleSurface, "f")?.length) {
            __classPrivateFieldGet(this, _KulList_rippleSurface, "f").forEach((el) => {
                __classPrivateFieldGet(this, _KulList_kulManager, "f").theme.ripple.setup(el);
            });
        }
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet(this, _KulList_kulManager, "f").debug.updateDebugInfo(this, "did-load");
    }
    componentWillRender() {
        __classPrivateFieldGet(this, _KulList_kulManager, "f").debug.updateDebugInfo(this, "will-render");
    }
    componentDidRender() {
        __classPrivateFieldGet(this, _KulList_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        const isEmpty = !!!this.kulData?.nodes?.length;
        __classPrivateFieldSet(this, _KulList_listItems, [], "f");
        const className = {
            list: true,
            "list--empty": isEmpty,
            "list--selectable": this.kulSelectable,
        };
        return (h(Host, { key: 'dc2f8705dbd2a9f8cebe3e09e2565f5e77652440' }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet(this, _KulList_kulManager, "f").theme.setKulStyle(this))) : undefined, h("div", { key: 'b4d523e09d0cd9aba708cc28bd9cc9f70deaa420', id: KUL_WRAPPER_ID }, isEmpty ? (h("div", { class: "empty-data" }, h("div", { class: "empty-data__text" }, this.kulEmptyLabel ||
            __classPrivateFieldGet(this, _KulList_kulManager, "f").language.translate(KulLanguageGeneric.EMPTY_DATA)))) : (h("ul", { "aria-multiselectable": "false", class: className, role: "listbox" }, this.kulData.nodes.map((item, index) => __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_prepNode).call(this, item, index)))))));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _KulList_kulManager, "f").theme.unregister(this);
    }
    get rootElement() { return getElement(this); }
};
_KulList_kulManager = new WeakMap(), _KulList_listItems = new WeakMap(), _KulList_rippleSurface = new WeakMap(), _KulList_instances = new WeakSet(), _KulList_handleSelection = function _KulList_handleSelection(index) {
    if (this.kulSelectable &&
        index !== null &&
        index !== undefined &&
        !isNaN(index)) {
        this.selected = index;
    }
}, _KulList_prepDeleteIcon = function _KulList_prepDeleteIcon(node) {
    const path = getAssetPath(`./assets/svg/clear.svg`);
    const style = {
        mask: `url('${path}') no-repeat center`,
        webkitMask: `url('${path}') no-repeat center`,
    };
    return (h("div", { class: "delete", "data-cy": KulDataCyAttributes.BUTTON, onClick: (e) => {
            const index = this.kulData?.nodes?.indexOf(node);
            this.onKulEvent(e, "delete", node, index);
        } }, h("div", { class: "delete__icon", key: node.id + "_delete", style: style })));
}, _KulList_prepIcon = function _KulList_prepIcon(node) {
    const path = getAssetPath(`./assets/svg/${node.icon}.svg`);
    const style = {
        mask: `url('${path}') no-repeat center`,
        webkitMask: `url('${path}') no-repeat center`,
    };
    return h("div", { class: "node__icon", style: style });
}, _KulList_prepNode = function _KulList_prepNode(node, index) {
    const isFocused = this.focused === this.kulData.nodes.findIndex((n) => n.id === node.id);
    const isSelected = this.selected === this.kulData.nodes.findIndex((n) => n.id === node.id);
    const className = {
        node: true,
        "node--focused": isFocused,
        "node--has-description": !!node.description,
        "node--selected": isSelected,
    };
    return (h("li", { class: "list-item" }, this.kulEnableDeletions ? __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_prepDeleteIcon).call(this, node) : null, h("div", { "aria-selected": isSelected, "aria-checked": isSelected, class: className, "data-cy": KulDataCyAttributes.NODE, "data-index": index.toString(), onBlur: (e) => this.onKulEvent(e, "blur", node, index), onClick: (e) => this.onKulEvent(e, "click", node, index), onFocus: (e) => this.onKulEvent(e, "focus", node, index), onPointerDown: (e) => this.onKulEvent(e, "pointerdown", node, index), ref: (el) => {
            if (el) {
                __classPrivateFieldGet(this, _KulList_listItems, "f").push(el);
            }
        }, role: "option", tabindex: isSelected ? "0" : "-1" }, h("div", { ref: (el) => {
            if (this.kulRipple && el) {
                __classPrivateFieldGet(this, _KulList_rippleSurface, "f").push(el);
            }
        } }), node.icon ? __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_prepIcon).call(this, node) : null, h("span", { class: "node__text" }, __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_prepTitle).call(this, node), __classPrivateFieldGet(this, _KulList_instances, "m", _KulList_prepSubtitle).call(this, node)))));
}, _KulList_prepSubtitle = function _KulList_prepSubtitle(node) {
    return node.description ? (h("div", { class: "node__subtitle" }, node.description)) : undefined;
}, _KulList_prepTitle = function _KulList_prepTitle(node) {
    return String(node.value).valueOf() ? (h("div", { class: "node__title" }, String(node.value).valueOf())) : undefined;
};
KulList.style = KulListStyle0;

export { KulBadge as kul_badge, KulButton as kul_button, KulImage as kul_image, KulList as kul_list };

//# sourceMappingURL=kul-badge_4.entry.js.map