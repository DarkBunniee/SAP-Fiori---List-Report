sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    
    return Controller.extend("listapp2.controller.CustomView", {
        onInit() {
        }
    });
});



// sap.ui.define(['sap/ui/core/UIComponent'],
// 	function (UIComponent) {
// 		"use strict";

// 		return UIComponent.extend("listapp2.controller.CustomView.filterbar.DynamicPageListReport.Component", {
// 			metadata: {
// 				manifest: "json"
// 			}
// 		});
// 	});


// sap.ui.define([
// 	'sap/ui/core/mvc/Controller',
// 	'sap/ui/model/odata/v2/ODataModel'
// ], function(Controller, ODataModel) {
// 	"use strict";

// 	return Controller.extend("listapp2.controller.CustomView.Basic._oSmartFilterBar", {

// 		onInit: function() {
// 			this._oModel = new ODataModel("/MockDataServiceExample1", true);
// 			this.getView().setModel(this._oModel);

// 			this._oSmartFilterBar  = this.byId("smartFilterBar");
// 		},

// 		toggleUpdateMode: function() {
// 			var oButton = this.byId("toggleUpdateMode"),
// 				bLiveMode = this._oSmartFilterBar.getLiveMode();

// 			if (bLiveMode) {
// 				oButton.setText("Change to 'LiveMode'");
// 			} else {
// 				oButton.setText("Change to 'ManualMode'");
// 			}

// 			this._oSmartFilterBar.setLiveMode(!bLiveMode);
// 		},

// 		onExit: function () {
// 			this._oModel.destroy();
// 			this._oModel = null;
// 		}
// 	});
// });