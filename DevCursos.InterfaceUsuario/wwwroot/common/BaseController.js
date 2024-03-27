sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    const NAMESPACE = "dev.cursos.common.BaseController";
    return Controller.extend(NAMESPACE, {

        vincularRota(nomeDaRota, metodo) {
            const rota = this.getOwnerComponent().getRouter();
            rota.getRoute(nomeDaRota).attachPatternMatched(metodo, this);
        },

        navegarPara(nomeDaRota, parametroDeRota) {
            const rota = this.getOwnerComponent().getRouter();
            rota.navTo(nomeDaRota, parametroDeRota, false);
        },

        /**
         * 
         * @param {string} nomeDoModelo 
         * @param {sap.ui.model.json.JSONModel} objeto 
         * @returns {sap.ui.model.json.JSONModel}
         */
        modelo(nomeDoModelo, objeto) {
            if (objeto) {
                this.getView().setModel(new JSONModel(objeto), nomeDoModelo);
            }
            return this.getView().getModel(nomeDoModelo).getData();
        }
    });
});