sap.ui.define([
    "dev/cursos/common/BaseController",
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    'use strict';

    const ROTA_HOME = "home";

    const NAMESPACE = "dev.cursos.app.home.Home";
    return BaseController.extend(NAMESPACE, {
        onInit: function () {
            this.vincularRota(ROTA_HOME, this._aoCoincidirComRotaHome);
        },
        
        _aoCoincidirComRotaHome: function () {
            // let svgLogo = sap.ui.require.toUrl("dev/cursos/resources/images/logo.svg");
            let svgLogo = sap.ui.require.toUrl("dev/cursos/resources/images/puc-goias-horizontal.png");
            this.getView().setModel(new JSONModel({
                imageWidth: "50vw",
                imageHeight: "8vh",
                svgLogo: svgLogo
            }));
        },
        
        aoClicarEmEntar() {
            this.navegarPara("login")
        }
    });
});