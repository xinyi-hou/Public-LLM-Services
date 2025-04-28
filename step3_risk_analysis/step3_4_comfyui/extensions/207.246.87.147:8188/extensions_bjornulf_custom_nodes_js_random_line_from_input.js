import { app } from "../../../scripts/app.js";

app.registerExtension({
    name: "Bjornulf.RandomLineFromInput",
    async nodeCreated(node) {
        if (node.comfyClass === "Bjornulf_RandomLineFromInput") {
            // Set seed widget to hidden input
            const seedWidget = node.widgets.find(w => w.name === "seed");
            if (seedWidget) {
                seedWidget.type = "HIDDEN";
            }
        }
    }
});
