import { app } from "../../scripts/app.js";

var localModelPathWidget = null;

app.registerExtension({
    name: "BiRefNet_Hugo",
    async setup() {
        console.log("BiRefNet_Hugo loaded");
        // function queue_button_pressed() {
        //     console.log("Queue button was pressed!");
        // }
        // document.getElementById("queue-button").addEventListener("click", queue_button_pressed);
    },

    async nodeCreated(node) {
		if (node.title === "🔥BiRefNet") {
		    // 查找 load_local_model 和 local_model_path 的 widgets
			let loadLocalModelWidget = node.widgets.find(widget => widget.name === "load_local_model");
			localModelPathWidget = node.widgets.find(widget => widget.name === "local_model_path");
			// 确保找到相关控件
			if (!loadLocalModelWidget || !localModelPathWidget) {
				console.error("Required widgets not found: load_local_model or local_model_path.");
				return;
			}
	
			// 初始状态控制：根据 load_local_model 的值决定是否显示 local_model_path
			if (!loadLocalModelWidget.value) {
				node.widgets = node.widgets.filter(widget => widget.name !== "local_model_path");
			}
	
			// 当 load_local_model 变化时，动态更新 local_model_path 的显示或隐藏
			loadLocalModelWidget.callback = function() {
				console.log("load_local_model changed:", loadLocalModelWidget.value);
				
				// 移除或添加 local_model_path 控件
				if (loadLocalModelWidget.value) {
					if (!node.widgets.includes(localModelPathWidget)) {
						node.widgets.push(localModelPathWidget); // 显示 local_model_path
					}
				} else {
					node.widgets = node.widgets.filter(widget => widget.name !== "local_model_path"); // 隐藏 local_model_path
				}
			};
		}
        
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("beforeRegisterNodeDef called")
    },
	async init(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("init called")
    },
	async addCustomNodeDefs(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("addCustomNodeDefs called")
    },
	async getCustomWidgets(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("getCustomWidgets called")
    },
	async registerCustomNodes(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("registerCustomNodes called")
    },
	async beforeConfigureGraph(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("beforeConfigureGraph called")
    },
	loadedGraphNode(node) {
        // 在注册节点前的逻辑
		if (node.type === "BiRefNet_Hugo") {
		    // 查找 load_local_model 和 local_model_path 的 widgets
			console.log(node)
			let loadLocalModelWidget = node.widgets.find(widget => widget.name === "load_local_model");
			// 确保找到相关控件
			if (!loadLocalModelWidget) {
				console.error("Required widgets not found: load_local_model.");
				return;
			}

			if(node.widgets_values[3] != undefined){
				localModelPathWidget.value = node.widgets_values[3];
			}
			
			// 初始状态控制：根据 load_local_model 的值决定是否显示 local_model_path
			if (!loadLocalModelWidget.value) {
				node.widgets = node.widgets.filter(widget => widget.name !== "local_model_path");
			}else{
				if (!node.widgets.includes(localModelPathWidget)) {
					node.widgets.push(localModelPathWidget); // 显示 local_model_path
				}
			}
	
			// 当 load_local_model 变化时，动态更新 local_model_path 的显示或隐藏
			loadLocalModelWidget.callback = function() {
				console.log("load_local_model changed:", loadLocalModelWidget.value);
				
				// 移除或添加 local_model_path 控件
				if (loadLocalModelWidget.value) {
					if (!node.widgets.includes(localModelPathWidget)) {
						node.widgets.push(localModelPathWidget); // 显示 local_model_path
					}
				} else {
					node.widgets = node.widgets.filter(widget => widget.name !== "local_model_path"); // 隐藏 local_model_path
				}
			};
		}
    },
	async afterConfigureGraph(node, nodeData, app) {
        
    },
	async beforeConfigureGraph(nodeType, nodeData, app) {
        // 在注册节点前的逻辑
		console.log("beforeConfigureGraph called")
    },
});
