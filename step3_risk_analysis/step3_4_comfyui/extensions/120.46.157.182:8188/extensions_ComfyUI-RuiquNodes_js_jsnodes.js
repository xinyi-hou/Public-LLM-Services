import { app } from "../../../scripts/app.js";

app.registerExtension({
	name: "ruiqu.EvaluateMultiple",
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
		if (["EvaluateMultiple1", "EvaluateMultiple3", "EvaluateMultiple6", "EvaluateMultiple9",
		     "EvaluateListMultiple1", "EvaluateListMultiple3", "EvaluateListMultiple6", "EvaluateListMultiple9", ].includes(nodeData.name)) {
			nodeType.prototype.onNodeMoved = function () {
				console.log(this.pos[0]);
			}
			nodeType.prototype.onNodeCreated = function () {
				this.any_type = "any_type";
				this.inputs_offset = 0;
				this.outputs_offset = 0;
				this.addWidget("button", "update", null, () => {
					if (! this.inputs) {
						this.inputs = [];
					}
					if (! this.outputs) {
						this.outputs = [];
					}
					const sz = this.size;
					const num_prev = Math.max(this.inputs.length, this.outputs.length);
					const input_count = this.widgets.find(w => w.name === "input_count")["value"];
					for (let i = this.inputs.length + 1 - this.inputs_offset; i <= input_count; ++i) {
						this.addInput(`in${i}`, this.any_type);
					}
					for (let i = this.inputs.length; i >= this.inputs_offset + input_count; --i) {
						this.removeInput(i);
					}
					const output_count = this.outputs.length;
					/*
					const output_count = this.widgets.find(w => w.name === "output_count")["value"];
					for (let i = this.outputs.length + 1 - this.outputs_offset; i <= output_count; ++i) {
						this.addOutput(`out${i}`, this.any_type);
					}
					for (let i = this.outputs.length; i >= this.outputs_offset + output_count; --i) {
						this.removeOutput(i);
					}
					*/
					// 更新 widget 位置
					const num_curr = Math.max(input_count, output_count);
					const offset = LiteGraph.NODE_SLOT_HEIGHT * (num_curr - num_prev);
					for (const widget of this.widgets) {
						widget.last_y += offset;
					}
					this.setSize([this.size[0], sz[1] + offset]);
				});
			}
		}
	},
});
