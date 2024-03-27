sap.ui.define([
    "dev/cursos/common/BaseController",
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    'use strict';

    const ROTA_LOGIN = "login"

    const NAMESPACE = "dev.cursos.app.login.Login";
    return BaseController.extend(NAMESPACE, {
        onInit: function () {
            this.vincularRota(ROTA_LOGIN, this._aoCoincidirComRotaLogin);
        },

        aoClicarEmEntar: function () {
            console.log("hellooo")
        },
        
        _aoCoincidirComRotaLogin: function () {
            // let svgLogo = sap.ui.require.toUrl("dev/cursos/resources/images/logo.svg");
            let svgLogo = sap.ui.require.toUrl("dev/cursos/resources/images/home_banner_1.svg");
            this.getView().setModel(new JSONModel({
                imageWidth: "50vw",
                imageHeight: "100vh",
                svgLogo: svgLogo
            }));
        }
    });
});