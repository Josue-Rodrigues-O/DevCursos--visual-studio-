sap.ui.define([
    "dev/cursos/common/BaseController",
    'sap/ui/Device',
    'sap/ui/model/json/JSONModel'
], function(BaseController, Device, JSONModel) {
    'use strict';
    
    const NAMESPACE = "dev.cursos.app.home.Home";
    return BaseController.extend(NAMESPACE, {
        onInit: function() {
            let svgLogo = sap.ui.require.toUrl("dev/cursos/resources/images/logo.svg");
            this.getView().setModel(new JSONModel({
                imageWidth: "4rem",
                svgLogo: svgLogo
            }));
        }
    });
});