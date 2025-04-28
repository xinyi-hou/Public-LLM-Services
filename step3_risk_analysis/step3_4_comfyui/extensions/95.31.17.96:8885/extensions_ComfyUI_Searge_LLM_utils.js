import {ComfyWidgets} from "../../scripts/widgets.js";

export function createTextWidget(app, node, widgetName, styles = {}) {
    const widget = ComfyWidgets["STRING"](node, widgetName, ["STRING", {multiline: true}], app).widget;
    widget.inputEl.readOnly = true;
    Object.assign(widget.inputEl.style, styles);
    return widget;
}