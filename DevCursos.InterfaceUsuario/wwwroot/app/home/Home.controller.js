sap.ui.define([
    "dev/cursos/common/BaseController",
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/Fragment',
	'sap/m/MessageToast',
	"sap/m/MenuItem"
], function (BaseController, JSONModel, Fragment, MessageToast, MenuItem) {
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
        },

        onPress: function () {
            var view = this.getView(),
                button = view.byId("button");

            if (!this.menuFragment) {
                this.menuFragment = Fragment.load({
                    id: view.getId(),
                    name: "dev.cursos.app.home.fragments.Menu",
                    controller: this
                }).then(function (menu) {
                    menu.openBy(button);
                    this.menuFragment = menu;
                    return this.menuFragment;
                }.bind(this));
            } else {
                this.menuFragment.openBy(button);
            }
        }
    });
});