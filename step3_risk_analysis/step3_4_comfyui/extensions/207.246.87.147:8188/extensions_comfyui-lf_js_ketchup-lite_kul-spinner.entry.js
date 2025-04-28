import { h, r as registerInstance, d as createEvent, f as forceUpdate, H as Host, g as getElement } from './index-5c52ec0e.js';
import { k as kulManagerInstance, a as KUL_WRAPPER_ID, b as KUL_STYLE_ID } from './kul-manager-c48a993d.js';
import { g as getProps } from './componentUtils-a994b230.js';

//#endregion
//#region Props
var KulSpinnerProps;
(function (KulSpinnerProps) {
    KulSpinnerProps["kulActive"] = "Specifies if the spinner is animating.";
    KulSpinnerProps["kulBarVariant"] = "Controls if the component displays as a bar or a spinner.";
    KulSpinnerProps["kulDimensions"] = "Defines the width and height of the spinner. In the bar variant, it specifies only the height.";
    KulSpinnerProps["kulFader"] = "Applies a blending modal over the component to darken or lighten the view, based on the theme.";
    KulSpinnerProps["kulFaderTimeout"] = "Duration needed for the fader to become active.";
    KulSpinnerProps["kulFullScreen"] = "Fills the entire viewport when enabled.";
    KulSpinnerProps["kulLayout"] = "Selects the spinner layout.";
    KulSpinnerProps["kulStyle"] = "Sets a custom style for the component.";
    KulSpinnerProps["kulTimeout"] = "Duration for the progress bar to fill up (in milliseconds).";
})(KulSpinnerProps || (KulSpinnerProps = {}));
//#endregion

//#region Spinner configs
const SPINNER_CONFIGS = {
    7: {
        className: "spinner-v7",
        elements: () => Array(6)
            .fill(0)
            .map(() => h("div", { class: "sk-spinner-v7-dot" })),
    },
    9: {
        className: "spinner-v9",
        elements: () => [
            h("div", { class: "sk-spinner-v9-bounce1" }),
            h("div", { class: "sk-spinner-v9-bounce2" }),
        ],
    },
    10: {
        className: "spinner-v10",
        elements: () => [
            h("div", { class: "sk-spinner-v10-cube1" }),
            h("div", { class: "sk-spinner-v10-cube2" }),
        ],
    },
    12: {
        className: "spinner-v12",
        elements: () => [
            h("div", { class: "sk-spinner-v12-dot1" }),
            h("div", { class: "sk-spinner-v12-dot2" }),
        ],
    },
    13: {
        className: "spinner-v13",
        elements: () => Array(9)
            .fill(0)
            .map((_, i) => (h("div", { class: `sk-spinner-v13-cube sk-spinner-v13-cube${i + 1}` }))),
    },
    14: {
        className: "spinner-v14",
        elements: () => Array(12)
            .fill(0)
            .map((_, i) => (h("div", { class: `sk-spinner-v14-circle${i + 1} sk-spinner-v14-circle` }))),
    },
};
//#endregion
//#region Bar configs
const BAR_SPINNER_CONFIGS = {
    1: {
        className: "spinner-bar-v1",
        elements: () => [],
    },
    2: {
        className: "spinner-bar-v2",
        elements: () => [],
    },
    3: {
        className: "spinner-bar-v3",
        elements: (progress) => [
            h("div", { class: "progress-bar", style: { width: `${progress}%` } }),
        ],
    },
};
//#endregion

const kulSpinnerCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}@keyframes fade-in-block{0%{display:none}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fade-in-flex{0%{display:none}1%{display:flex;opacity:0}100%{display:flex;opacity:1}}@keyframes fade-in-grid{0%{display:none}1%{display:grid;opacity:0}100%{display:grid;opacity:1}}:host{--kul_spinner_border_color:var(\n    --kul-spinner-border-color,\n    var(--kul-border-color)\n  );display:block}#loading-wrapper-master{background:transparent;opacity:0;overflow:hidden;transition:opacity 0.8s ease-in, background-color 1s ease-in;transform:translatez(0)}#loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner{width:100%;height:100%;position:relative}#loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner div{margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transition:top 0.25s ease-in-out, opacity 0.25s ease-in-out}:host([kul-active]) #loading-wrapper-master{opacity:1}:host([kul-active]) #loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner{opacity:1;overflow:hidden}:host([kul-active]) #loading-wrapper-master[kul-bar-variant]>#loading-wrapper-master-bar{opacity:1}:host([kul-active]) #loading-wrapper-master[kul-bar-variant]>#loading-wrapper-master-bar div.spinner-bar-v2{animation:sk-spinner-bar-v2 20s;background-color:var(--kul-spinner-color);left:-1%}:host([kul-active]) #loading-wrapper-master.loading-wrapper-big-wait{background:rgba(128, 128, 128, 0.25)}:host([kul-active]) #loading-wrapper-master.loading-wrapper-big-wait>#loading-wrapper-master-spinner{font-size:10px}:host([kul-full-screen]) #loading-wrapper-master{top:0;left:0;bottom:0;right:0;pointer-events:none;position:fixed;width:100%;z-index:9999}:host([kul-full-screen]) #loading-wrapper-master div,:host([kul-full-screen]) #loading-wrapper-master.spinner-version #loading-wrapper-master-spinner{position:fixed;transition:opacity 1.25s ease-in, background-color 1s ease-in, top 0.5s ease-in}.spinner-v1{border-top:1em solid var(--kul_spinner_border_color);border-right:1em solid var(--kul_spinner_border_color);border-bottom:1em solid var(--kul_spinner_border_color);border-left:1em solid var(--kul-spinner-color);transform:translatez(0);animation:sk-spinner-v1 1.1s infinite linear}.spinner-v1,.spinner-v1:after{border-radius:50%;width:7em;height:7em}@keyframes sk-spinner-v1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-v2,.spinner-v2:before,.spinner-v2:after{border-radius:50%;width:2em;height:2em;animation-fill-mode:both;animation:sk-spinner-v2 1.4s infinite ease-in-out;transform:translatez(0)}.spinner-v2{backface-visibility:hidden;color:var(--kul-spinner-color);font-size:1em;transform:translateY(-2.5em);animation-delay:-0.16s}.spinner-v2:before,.spinner-v2:after{content:\"\";position:absolute;top:0}.spinner-v2:before{left:-4em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner-v2:after{left:4em}@keyframes sk-spinner-v2{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}.spinner-v3{color:var(--kul-spinner-color);font-size:6em;width:1em;height:1em;border-radius:50%;transform:translatez(0);animation:sk-spinner-v3 1.7s infinite ease, sk-spinner-v3-1 1.7s infinite ease}@keyframes sk-spinner-v3{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}}@keyframes sk-spinner-v3-1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-v4{color:var(--kul-spinner-color);width:1em;height:1em;border-radius:50%;animation:sk-spinner-v4 1.3s infinite linear;transform:translatez(0)}@keyframes sk-spinner-v4{0%,100%{box-shadow:0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em}75%{box-shadow:0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0}87.5%{box-shadow:0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em}}.spinner-v5{margin-top:-0.8em;width:9em;height:9em;border-radius:50%;background:linear-gradient(to right, var(--kul-spinner-color) 10%, rgba(255, 255, 255, 0) 42%);animation:sk-spinner-v5 1.4s infinite linear;transform:translatez(0)}.spinner-v5:before{width:50%;height:50%;background:var(--kul-spinner-color);border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:\"\"}.spinner-v5:after{background:var(--kul_spinner_border_color);width:75%;height:75%;border-radius:50%;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}@keyframes sk-spinner-v5{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spinner-v6,.spinner-v6:before,.spinner-v6:after{background:var(--kul-spinner-color);animation:sk-spinner-v6 1s infinite ease-in-out;width:1em;height:4em}.spinner-v6{color:var(--kul-spinner-color);margin-top:2em;transform:translatez(0);animation-delay:-0.16s}.spinner-v6:before,.spinner-v6:after{position:absolute;top:0;content:\"\"}.spinner-v6:before{left:-1.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner-v6:after{left:1.5em}@keyframes sk-spinner-v6{0%,80%,100%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}.spinner-v7{width:6em;height:6em;position:relative;animation:sk-spinner-v7 2.5s infinite linear both}.sk-spinner-v7-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-spinner-v7-dot 2s infinite ease-in-out both}.sk-spinner-v7-dot:before{content:\"\";display:block;width:25%;height:25%;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v7-dot-before 2s infinite ease-in-out both}.sk-spinner-v7-dot:nth-child(1){animation-delay:-1.1s}.sk-spinner-v7-dot:nth-child(2){animation-delay:-1s}.sk-spinner-v7-dot:nth-child(3){animation-delay:-0.9s}.sk-spinner-v7-dot:nth-child(4){animation-delay:-0.8s}.sk-spinner-v7-dot:nth-child(5){animation-delay:-0.7s}.sk-spinner-v7-dot:nth-child(6){animation-delay:-0.6s}.sk-spinner-v7-dot:nth-child(1):before{animation-delay:-1.1s}.sk-spinner-v7-dot:nth-child(2):before{animation-delay:-1s}.sk-spinner-v7-dot:nth-child(3):before{animation-delay:-0.9s}.sk-spinner-v7-dot:nth-child(4):before{animation-delay:-0.8s}.sk-spinner-v7-dot:nth-child(5):before{animation-delay:-0.7s}.sk-spinner-v7-dot:nth-child(6):before{animation-delay:-0.6s}@keyframes sk-spinner-v7{100%{transform:rotate(360deg)}}@keyframes sk-spinner-v7-dot{80%,100%{transform:rotate(360deg)}}@keyframes sk-spinner-v7-dot-before{50%{transform:scale(0.4)}100%,0%{transform:scale(1)}}.spinner-v8{width:8em;height:8em;background-color:var(--kul-spinner-color);animation:sk-spinner-v8 1.2s infinite ease-in-out}@keyframes sk-spinner-v8{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.spinner-v9{width:8em;height:8em;position:relative}.sk-spinner-v9-bounce1,.sk-spinner-v9-bounce2{width:100%;height:100%;border-radius:50%;background-color:var(--kul-spinner-color);opacity:0.6;position:absolute;top:0;left:0;animation:sk-spinner-v9 2s infinite ease-in-out}.sk-spinner-v9-bounce2{animation-delay:-1s}@keyframes sk-spinner-v9{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.spinner-v10{width:8em;height:8em;position:relative}.sk-spinner-v10-cube1,.sk-spinner-v10-cube2{backface-visibility:hidden;background-color:var(--kul-spinner-color);width:2em;height:2em;position:absolute;top:0;left:0;bottom:unset !important;right:unset !important;animation:sk-spinner-v10 1.8s infinite ease-in-out}.sk-spinner-v10-cube2{animation-delay:-0.9s}@keyframes sk-spinner-v10{25%{transform:translateX(5em) rotate(-90deg) scale(0.5)}50%{transform:translateX(5em) translateY(5em) rotate(-179deg)}50.1%{transform:translateX(5em) translateY(5em) rotate(-180deg)}75%{transform:translateX(0px) translateY(5em) rotate(-270deg) scale(0.5)}100%{transform:rotate(-360deg)}}.spinner-v11{width:8em;height:8em;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v11 1s infinite ease-in-out}@keyframes sk-spinner-v11{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}.spinner-v12{width:8em;height:8em;position:relative;text-align:center;animation:sk-spinner-v12 2s infinite linear}.sk-spinner-v12-dot1,.sk-spinner-v12-dot2{width:60%;height:60%;display:inline-block;position:absolute;top:0 !important;left:unset !important;bottom:unset !important;right:unset !important;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v12-1 2s infinite ease-in-out}.sk-spinner-v12-dot2{top:auto !important;bottom:0 !important;left:unset !important;right:unset !important;animation-delay:-1s}@keyframes sk-spinner-v12{100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@keyframes sk-spinner-v12-1{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.spinner-v13{width:7em;height:7em}.spinner-v13 .sk-spinner-v13-cube{backface-visibility:hidden;background-color:var(--kul-spinner-color);float:left;height:33%;width:33%;position:relative !important;animation:sk-spinner-v13 1.3s infinite ease-in-out;outline:1px solid transparent}.spinner-v13 .sk-spinner-v13-cube1{animation-delay:0.2s}.spinner-v13 .sk-spinner-v13-cube2{animation-delay:0.3s}.spinner-v13 .sk-spinner-v13-cube3{animation-delay:0.4s}.spinner-v13 .sk-spinner-v13-cube4{animation-delay:0.1s}.spinner-v13 .sk-spinner-v13-cube5{animation-delay:0.2s}.spinner-v13 .sk-spinner-v13-cube6{animation-delay:0.3s}.spinner-v13 .sk-spinner-v13-cube7{animation-delay:0s}.spinner-v13 .sk-spinner-v13-cube8{animation-delay:0.1s}.spinner-v13 .sk-spinner-v13-cube9{animation-delay:0.2s}@keyframes sk-spinner-v13{0%,70%,100%{transform:scale3D(1, 1, 1)}35%{transform:scale3D(0, 0, 1)}}.spinner-v14{width:8em;height:8em;position:relative}.spinner-v14 .sk-spinner-v14-circle{width:100%;height:100%;position:absolute;left:0;top:0}.spinner-v14 .sk-spinner-v14-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:var(--kul-spinner-color);border-radius:100%;-webkit-animation:sk-spinner-v14-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-spinner-v14-circleFadeDelay 1.2s infinite ease-in-out both}.spinner-v14 .sk-spinner-v14-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.spinner-v14 .sk-spinner-v14-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.spinner-v14 .sk-spinner-v14-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.spinner-v14 .sk-spinner-v14-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.spinner-v14 .sk-spinner-v14-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.spinner-v14 .sk-spinner-v14-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.spinner-v14 .sk-spinner-v14-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.spinner-v14 .sk-spinner-v14-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.spinner-v14 .sk-spinner-v14-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.spinner-v14 .sk-spinner-v14-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.spinner-v14 .sk-spinner-v14-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.spinner-v14 .sk-spinner-v14-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner-v14 .sk-spinner-v14-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner-v14 .sk-spinner-v14-circle4:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.spinner-v14 .sk-spinner-v14-circle5:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.spinner-v14 .sk-spinner-v14-circle6:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.spinner-v14 .sk-spinner-v14-circle7:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.spinner-v14 .sk-spinner-v14-circle8:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.spinner-v14 .sk-spinner-v14-circle9:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.spinner-v14 .sk-spinner-v14-circle10:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.spinner-v14 .sk-spinner-v14-circle11:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.spinner-v14 .sk-spinner-v14-circle12:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@keyframes sk-spinner-v14-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.spinner-bar-v1{height:1em;width:100%;position:absolute;overflow:hidden;transform:translatez(0)}.spinner-bar-v1:before{display:block;position:absolute;content:\"\";width:25%;height:1em;animation:sk-spinner-bar-v1 5s linear infinite;transform:translatez(0)}@keyframes sk-spinner-bar-v1{from{left:-25%;background:var(--kul-spinner-color);background:linear-gradient(to left, var(--kul-spinner-color) 0, rgba(255, 255, 255, 0) 100%)}50%{left:100%}to{left:-25%;background:var(--kul-spinner-color);background:linear-gradient(to right, var(--kul-spinner-color) 0, rgba(255, 255, 255, 0) 100%)}}.spinner-bar-v2{box-shadow:-1px 0px 2px 2px var(--kul-spinner-color);height:calc(1em - 2px);position:absolute;overflow:hidden;animation-timing-function:cubic-bezier(0.19, 0.78, 0.19, 0.78);transform:translatez(0);animation:none;width:100%}@keyframes sk-spinner-bar-v2{from{left:-100%}to{left:-1%}}.spinner-bar-v3{height:calc(1.5em - 2px);overflow:hidden;position:absolute;width:100%;background-color:var(--kul-border-color, #f0f0f0)}.spinner-bar-v3 .progress-bar{height:100%;background-color:var(--kul-spinner-color);animation:sk-spinner-bar-v3 1s infinite ease-in-out;transition:width 0.1s linear}@keyframes sk-spinner-bar-v3{0%{opacity:1}50%{opacity:0.6}100%{opacity:1}}:host(.kul-unclickable) #loading-wrapper-master{cursor:wait;pointer-events:all}";
const KulSpinnerStyle0 = kulSpinnerCss;

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
var _KulSpinner_instances, _KulSpinner_kulManager, _KulSpinner_progressAnimationFrame, _KulSpinner_startProgressBar;
const KulSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-spinner-event", 6);
        _KulSpinner_instances.add(this);
        //#endregion
        //#region Internal variables
        _KulSpinner_kulManager.set(this, kulManagerInstance());
        _KulSpinner_progressAnimationFrame.set(this, void 0);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulProgress = 0;
        this.kulActive = false;
        this.kulBarVariant = false;
        this.kulDimensions = "";
        this.kulFader = false;
        this.kulFaderTimeout = 3500;
        this.kulFullScreen = false;
        this.kulLayout = 1;
        this.kulStyle = "";
        this.kulTimeout = undefined;
    }
    //#endregion
    //#region Watchers
    kulTimeoutChanged(newValue, oldValue) {
        if (newValue !== oldValue && this.kulBarVariant) {
            __classPrivateFieldGet(this, _KulSpinner_instances, "m", _KulSpinner_startProgressBar).call(this);
        }
    }
    kulBarVariantChanged(newValue) {
        if (newValue && this.kulTimeout) {
            __classPrivateFieldGet(this, _KulSpinner_instances, "m", _KulSpinner_startProgressBar).call(this);
        }
        else {
            this.kulProgress = 0;
            cancelAnimationFrame(__classPrivateFieldGet(this, _KulSpinner_progressAnimationFrame, "f"));
        }
    }
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
        });
    }
    //#endregion
    //#region Public methods
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
        return getProps(this, KulSpinnerProps, descriptions);
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
    //#endregion
    //#region Lifecycle hooks
    componentWillLoad() {
        __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent("ready"), "ready");
        __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").debug.updateDebugInfo(this, "did-load");
        if (this.kulBarVariant && this.kulTimeout) {
            __classPrivateFieldGet(this, _KulSpinner_instances, "m", _KulSpinner_startProgressBar).call(this);
        }
    }
    componentWillRender() {
        __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").debug.updateDebugInfo(this, "will-render");
    }
    componentDidUpdate() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            root
                .querySelector("#loading-wrapper-master")
                .classList.remove("loading-wrapper-big-wait");
        }
    }
    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            if (this.kulFader) {
                setTimeout(() => {
                    root
                        .querySelector("#loading-wrapper-master")
                        .classList.add("loading-wrapper-big-wait");
                }, this.kulFaderTimeout);
            }
        }
        __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").debug.updateDebugInfo(this, "did-render");
    }
    render() {
        let masterClass = "";
        let wrapperClass = "";
        let spinnerClass = "";
        let spinnerEl = [];
        let elStyle = undefined;
        if (this.kulBarVariant) {
            wrapperClass = "loading-wrapper-master-bar";
            const barConfig = BAR_SPINNER_CONFIGS[this.kulLayout];
            if (barConfig) {
                spinnerClass = barConfig.className;
                spinnerEl = barConfig.elements(this.kulProgress);
            }
            else {
                spinnerClass = "spinner-bar-v" + this.kulLayout;
            }
        }
        else {
            masterClass += " spinner-version";
            wrapperClass = "loading-wrapper-master-spinner";
            const config = SPINNER_CONFIGS[this.kulLayout];
            if (config) {
                spinnerClass = config.className;
                spinnerEl = config.elements();
            }
            else {
                spinnerClass = "spinner-v" + this.kulLayout;
            }
        }
        if (!this.kulFullScreen) {
            elStyle = {
                height: "100%",
                width: "100%",
            };
        }
        if (this.kulDimensions) {
            elStyle = {
                ...elStyle,
                fontSize: this.kulDimensions,
            };
        }
        else if (!this.kulBarVariant) {
            elStyle = {
                ...elStyle,
                fontSize: "16px",
            };
        }
        else {
            elStyle = {
                ...elStyle,
                fontSize: "3px",
            };
        }
        return (h(Host, { key: 'e6d80eb0378f6b06eba5f95d287635037ba2034c', style: elStyle }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").theme.setKulStyle(this))) : undefined, h("div", { key: '6fbd120184ed2f7690caf395d2e5e2a15ece2d70', id: KUL_WRAPPER_ID, style: elStyle }, h("div", { key: '07f85063248da8aa15e9860e1b4b19558aa0c934', id: "loading-wrapper-master", class: masterClass, style: elStyle }, h("div", { key: '8a847f80257ed9a566c34ee06b5247a44cd9553c', id: wrapperClass, style: elStyle }, h("div", { key: 'd1c6d32beca46896b00692c90bd11e7ec1d09ef7', class: spinnerClass }, spinnerEl))))));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _KulSpinner_kulManager, "f").theme.unregister(this);
        cancelAnimationFrame(__classPrivateFieldGet(this, _KulSpinner_progressAnimationFrame, "f"));
    }
    get rootElement() { return getElement(this); }
    static get watchers() { return {
        "kulTimeout": ["kulTimeoutChanged"],
        "kulBarVariant": ["kulBarVariantChanged"]
    }; }
};
_KulSpinner_kulManager = new WeakMap(), _KulSpinner_progressAnimationFrame = new WeakMap(), _KulSpinner_instances = new WeakSet(), _KulSpinner_startProgressBar = function _KulSpinner_startProgressBar() {
    this.kulProgress = 0;
    const startTime = Date.now();
    const duration = this.kulTimeout;
    const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        this.kulProgress = Math.min((elapsed / duration) * 100, 100);
        if (this.kulProgress < 100) {
            __classPrivateFieldSet(this, _KulSpinner_progressAnimationFrame, requestAnimationFrame(updateProgress), "f");
        }
        else {
            cancelAnimationFrame(__classPrivateFieldGet(this, _KulSpinner_progressAnimationFrame, "f"));
        }
    };
    __classPrivateFieldSet(this, _KulSpinner_progressAnimationFrame, requestAnimationFrame(updateProgress), "f");
};
KulSpinner.style = KulSpinnerStyle0;

export { KulSpinner as kul_spinner };

//# sourceMappingURL=kul-spinner.entry.js.map