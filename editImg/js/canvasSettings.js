/**
 * initialize selection setting panel
 */
(function () {
   'use strict';
   var canvasSettings = function () {
      const _self = this;
      $(`${this.containerSelector} .main-panel`).append(`<div class="toolpanel" id="background-panel"><div class="content"><p class="title">Canvas Settings</p></div></div>`);
   }
   window.ImageEditor.prototype.initializeCanvasSettingPanel = canvasSettings;
})()
