// CFP_markdown.js
import { app } from "/scripts/app.js";

app.registerExtension({
	name: "Comfy.CFPTextMarkdownNode", // Unique name!
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
		if (nodeData.name === "TextOutputMarkdown" && nodeData.category === "CoFounder/Text") {
			const onNodeCreated = nodeType.prototype.onNodeCreated;
			nodeType.prototype.onNodeCreated = function () {
				const ret = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;

				// Create a div to hold our rendered HTML
				const markdownDiv = document.createElement("div");
				markdownDiv.classList.add("markdown-output"); // Add a class for styling
				markdownDiv.style.overflow = 'auto'; // Add scroll if the content overflows


				// Add the DOM widget
                const widget = this.addDOMWidget("html_output", "HTML", markdownDiv, {  //store the widget object!
                    //You may want to add hideOnZoom: true if hiding the normal text widgets
                    getValue() {
                        return markdownDiv.innerHTML;
                    },
                    setValue(value) {
                        markdownDiv.innerHTML = value;  // Directly manipulate the DOM element.
                    },
                    getMinHeight() {
                       return 120; //set min height
                    },
                });

				// Store a reference to the DOM element *within the widget*. This is key!
				widget.element = markdownDiv;


				return ret;
			};


			// onExecuted:  Update the HTML content
			const onExecuted = nodeType.prototype.onExecuted;
			nodeType.prototype.onExecuted = function (message) {
				onExecuted?.apply(this, arguments);

				if (message?.html_output) {
					// Find the widget.  Note: widget name is all lowercase.
					const widget = this.widgets.find(w => w.name === "html_output");
					if (widget && widget.element) {
						widget.element.innerHTML = message.html_output[0]; // Access the DOM element directly
                        widget.value =  message.html_output[0];
					}
				}
			};

			const onConfigure = nodeType.prototype.onConfigure;
            nodeType.prototype.onConfigure = function (config) {
                onConfigure?.apply(this, arguments);

                if (config && config.widgets_values) {
                   //Find the index of your widget by name
                   let widgetIndex = this.widgets.findIndex(w => w.name === "html_output");
                    if(widgetIndex > -1) {
                       const widget = this.widgets[widgetIndex];
                       if (widget && widget.element) {
                           widget.element.innerHTML = config.widgets_values[widgetIndex];
                           widget.value = config.widgets_values[widgetIndex]
                       }
                    }
                }
            };
		}
	},
});