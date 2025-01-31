/*global QUnit*/

sap.ui.define([
	"listapp2/controller/CustomView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CustomView Controller");

	QUnit.test("I should test the CustomView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
