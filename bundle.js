/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --header-color: rgb(42, 40, 40);\n  --highlight-color: rgb(246, 118, 27);\n  --border-color: rgb(247, 192, 231);\n  --button-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);\n  --task-title-color: rgb(53, 50, 50);\n  --task-date-color: rgb(167, 30, 30);\n  --main-bg-color: rgb(255, 255, 255);\n  --p1-color: rgb(235, 13, 13);\n  --p2-color: rgb(206, 100, 8);\n  --p3-color: rgb(43, 163, 10);\n  --p4-color: rgb(19, 70, 236);\n}\n\nbody {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n#content {\n  align-items: center; \n  justify-content: center;\n  display: grid;\n  grid-template-columns: 250px auto;\n  grid-template-rows: 150px auto 40px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.header {\n  text-transform: uppercase;\n  color: var(--header-color);\n  letter-spacing:.17em;\n  font-size: 10vw;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  /*why does this padding make the side bar closer to edge?*/\n  padding: 0px 5px 0px 5px;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  /* change to 100vh minus height of header */\n  height:100vh;\n  background-color:rgb(154, 177, 247);\n  display: flex;\n  flex-direction: column;\n    /* aligns contents to top */\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0px;\n  padding: 35px 0px 20px 35px;\n  font-size: 20px;\n  border-top:1px solid var(--border-color);\n  /* border-right: 5px solid rgba(217, 193, 89, 0.5); */\n}\n\n.nav {\n  padding: 0px;\n  margin: 0px;\n}\n\n.navsection {\n  display: block;\n  margin-bottom: 20px;\n}\n\n.navsectionheader {\n  margin-top: 0px;\n  margin-bottom: 7px;\n}\n\n.navlink {\n  display: block;\n  margin-bottom: 8px;\n  padding-left: 9px;\n}\n\n.main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 4;\n  background-color: var(--main-bg-color);\n  align-self:flex-start;\n  height: 100vh;\n  border-top:1px solid var(--border-color);\n  padding: 15px 35px 20px 35px;\n}\n\n.maindescription {\n  margin-bottom: 20px;\n  margin-left: 15px;\n  font-style: italic;\n}\n\n.formcontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(208, 243, 243);\n  padding: 20px;\n  width:fit-content;\n  border-radius: 10px;\n  box-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 200px;\n  left: 30%;\n  z-index: 2000;\n}\n\n.form {\n  display:grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto auto;\n  gap: 10px;\n  accent-color: red;\n}\n\n.taskform {\n  display:grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto auto auto auto;\n  gap: 10px;\n  accent-color: red;\n}\n\n.formlabel, .detaillabel {\n  text-align: right;\n  margin-right: 10px;\n  color: rgb(86, 85, 85);\n}\n\n.buttons {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: fit-content;\n}\n\n.requirednote {\n  grid-column: 2 / 3;\n  grid-row: 7 / 8;\n  text-align: end;\n  margin: 0px;\n}\n\n.savebutton {\n  grid-column: 1 / 2;\n  width: 8ch;\n  justify-self: center;\n  background-color: pink;\n  border-radius: 3px;\n  border: solid 1px gray;\n  box-shadow: var(--button-box-shadow);\n  /* x y blur spread */\n}\n\n.cancelbutton {\n  background-color: rgb(235, 231, 231);\n  grid-column: 2 / 3;\n  width: 8ch;\n  border-radius: 3px;\n  border: solid 1px gray;\n  color: brown;\n  justify-self: center;\n  box-shadow: var(--button-box-shadow);\n}\n\n.formheading {\n  padding: 0px;\n  margin: 0px 0px 15px 0px;\n  letter-spacing: .2em;\n}\n\n#pdescription {\n  color:red;\n  height: 5ch;\n}\n\na {\n  cursor: pointer;\n  text-shadow: 1px 1px 3px rgba(248, 122, 243, 0.5);\n}\n\n.delete {\n  cursor: pointer;\n}\n\na:hover, a:active {\n  text-decoration: underline wavy red 1px;\n  text-shadow: 1px 1px 3px rgba(73, 220, 68, 0.5);\n}\n\na:active {\n  color: white;\n}\n\n.mainprojectheader {\n  text-transform:uppercase;\n}\n\n.maintaskarea {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.mainprojectdescription {\n  margin-bottom:10px;\n}\n\n\n\n#overlay {\n  background-color:rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  visibility: hidden;\n}\n\n\n.tinpform {\n  display: grid;\n  grid-template-columns: 4ch 1fr 3fr 1fr;\n  grid-template-rows: max-content;\n}\n\ninput { \n  width : 100%;\n  border: 1px solid #333;\n  box-sizing: border-box;\n}\n\ninput:invalid {\n  box-shadow: 0 0 5px 1px orange;\n}\n\ninput:focus:invalid {\n  box-shadow: none;\n}\n\n/* TASK ROWS IN MAIN AREA */\n\n.maintaskrow {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 80%;\n  border-bottom: 1px pink solid;\n  padding: 0px 10px 0px 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\n\n\n/* .taskrowtitle {\n  color: var(--task-title-color);\n} */\n\n.plussigndiv {\n  justify-self: center;\n  align-self: center;\n}\n\n/* .taskrowduedate {\n  white-space:pre;\n  color: var(--task-date-color);\n} */\n\n.taskrowicon {\n  align-self: center;\n  justify-self: right;\n  cursor: pointer;\n}\n\n.completed {\n  color: gray;\n  text-decoration: line-through;\n}\n\n/* ADD TASK ROW */\n.addtaskrow {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  width: 80%;\n  border-bottom: 1px pink solid;\n  padding: 0px 10px 0px 0px;\n  margin: 0px;\n  height: 30px;\n  color: var(--task-title-color);\n}\n\n.addtaskrow:hover {\n  background-color: pink;\n  margin:0px;\n  cursor: pointer;\n}\n\n.maintaskrow:hover {\n  background-color: pink;\n  margin:0px;\n}\n\n/* TASK DETAIL AREA */\n\n.hidden {\n  display: none;\n}\n\n.taskdetailarea, .edittaskformcontainer {\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color:rgb(231, 184, 184);\n  padding-left: 28px;\n  width: 80%;\n  box-sizing: border-box;\n  padding:10px;\n  /* margin-top: -30px; */\n}\n\n/* .detailtitle {\n  padding: 0px;\n  margin: 0px 0px 10px 0px;\n} */\n\n.taskdetailgrid, .edittaskform {\n  display: grid;\n  padding: 0px;\n  margin: 0px;\n  grid-template-columns: 13ch 1fr;\n  grid-template-rows: 25px 25px 25px 25px 25px;\n}\n\n.detaillabel {\n  padding: 0px;\n  margin-top: 0px;\n  margin-left: 0px;\n  grid-column: 1 / 2;\n}\n\n.detailvalue {\n  margin-top: 0px;\n  padding-left: 5px;\n  margin-left: 5px;\n  grid-column: 2 / 3;\n  width: 100%;\n}\n\n.icon {\n  height: 2ch;\n}\n\n.taskitemgrid {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto 16ch 30px 30px 30px;\n  grid-template-rows: minmax(30px, auto);\n  margin-left: 10px;\n  padding: 2px 0px 2px 0px;\n  box-sizing:content-box;\n}\n\n.taskrowgriditem {\n  margin: 0px 0px 0px 10px;\n  justify-self: flex-start;\n  padding: 2px 0px 2px 0px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n\n\n\n.taskcheckbox {\n  align-self: center;\n  justify-self: center;\n} \n\n .taskchecklabel {\n  padding: 0px;\n  align-self: center;\n  justify-self: center;\n}\n\n.taskcheckboxdiv {\n  margin-left: 10px;\n  padding: 0px;\n}\n\n.taskdetailbutton {\n  width: 9ch;\n}\n\n.p1 {\n  color: var(--p1-color)\n}\n\n.p2 {\n  color: var(--p2-color)\n}\n\n.p3 {\n  color: var(--p3-color)\n}\n\n.p4 {\n  color: var(--p4-color)\n}\n\n.maintaskbox {\n  display:flex;\n  flex-direction:column;\n}\n\n.edittaskformarea {\n  background-color:green;\n}\n\n.visuallyhidden {\n  position: absolute;\n\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --header-color: rgb(42, 40, 40);\n  --highlight-color: rgb(246, 118, 27);\n  --border-color: rgb(247, 192, 231);\n  --button-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);\n  --task-title-color: rgb(53, 50, 50);\n  --task-date-color: rgb(167, 30, 30);\n  --main-bg-color: rgb(255, 255, 255);\n  --p1-color: rgb(235, 13, 13);\n  --p2-color: rgb(206, 100, 8);\n  --p3-color: rgb(43, 163, 10);\n  --p4-color: rgb(19, 70, 236);\n}\n\nbody {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n#content {\n  align-items: center; \n  justify-content: center;\n  display: grid;\n  grid-template-columns: 250px auto;\n  grid-template-rows: 150px auto 40px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.header {\n  text-transform: uppercase;\n  color: var(--header-color);\n  letter-spacing:.17em;\n  font-size: 10vw;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  /*why does this padding make the side bar closer to edge?*/\n  padding: 0px 5px 0px 5px;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  /* change to 100vh minus height of header */\n  height:100vh;\n  background-color:rgb(154, 177, 247);\n  display: flex;\n  flex-direction: column;\n    /* aligns contents to top */\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0px;\n  padding: 35px 0px 20px 35px;\n  font-size: 20px;\n  border-top:1px solid var(--border-color);\n  /* border-right: 5px solid rgba(217, 193, 89, 0.5); */\n}\n\n.nav {\n  padding: 0px;\n  margin: 0px;\n}\n\n.navsection {\n  display: block;\n  margin-bottom: 20px;\n}\n\n.navsectionheader {\n  margin-top: 0px;\n  margin-bottom: 7px;\n}\n\n.navlink {\n  display: block;\n  margin-bottom: 8px;\n  padding-left: 9px;\n}\n\n.main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 4;\n  background-color: var(--main-bg-color);\n  align-self:flex-start;\n  height: 100vh;\n  border-top:1px solid var(--border-color);\n  padding: 15px 35px 20px 35px;\n}\n\n.maindescription {\n  margin-bottom: 20px;\n  margin-left: 15px;\n  font-style: italic;\n}\n\n.formcontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(208, 243, 243);\n  padding: 20px;\n  width:fit-content;\n  border-radius: 10px;\n  box-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 200px;\n  left: 30%;\n  z-index: 2000;\n}\n\n.form {\n  display:grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto auto;\n  gap: 10px;\n  accent-color: red;\n}\n\n.taskform {\n  display:grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto auto auto auto;\n  gap: 10px;\n  accent-color: red;\n}\n\n.formlabel, .detaillabel {\n  text-align: right;\n  margin-right: 10px;\n  color: rgb(86, 85, 85);\n}\n\n.buttons {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: fit-content;\n}\n\n.requirednote {\n  grid-column: 2 / 3;\n  grid-row: 7 / 8;\n  text-align: end;\n  margin: 0px;\n}\n\n.savebutton {\n  grid-column: 1 / 2;\n  width: 8ch;\n  justify-self: center;\n  background-color: pink;\n  border-radius: 3px;\n  border: solid 1px gray;\n  box-shadow: var(--button-box-shadow);\n  /* x y blur spread */\n}\n\n.cancelbutton {\n  background-color: rgb(235, 231, 231);\n  grid-column: 2 / 3;\n  width: 8ch;\n  border-radius: 3px;\n  border: solid 1px gray;\n  color: brown;\n  justify-self: center;\n  box-shadow: var(--button-box-shadow);\n}\n\n.formheading {\n  padding: 0px;\n  margin: 0px 0px 15px 0px;\n  letter-spacing: .2em;\n}\n\n#pdescription {\n  color:red;\n  height: 5ch;\n}\n\na {\n  cursor: pointer;\n  text-shadow: 1px 1px 3px rgba(248, 122, 243, 0.5);\n}\n\n.delete {\n  cursor: pointer;\n}\n\na:hover, a:active {\n  text-decoration: underline wavy red 1px;\n  text-shadow: 1px 1px 3px rgba(73, 220, 68, 0.5);\n}\n\na:active {\n  color: white;\n}\n\n.mainprojectheader {\n  text-transform:uppercase;\n}\n\n.maintaskarea {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.mainprojectdescription {\n  margin-bottom:10px;\n}\n\n\n\n#overlay {\n  background-color:rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  visibility: hidden;\n}\n\n\n.tinpform {\n  display: grid;\n  grid-template-columns: 4ch 1fr 3fr 1fr;\n  grid-template-rows: max-content;\n}\n\ninput { \n  width : 100%;\n  border: 1px solid #333;\n  box-sizing: border-box;\n}\n\ninput:invalid {\n  box-shadow: 0 0 5px 1px orange;\n}\n\ninput:focus:invalid {\n  box-shadow: none;\n}\n\n/* TASK ROWS IN MAIN AREA */\n\n.maintaskrow {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 80%;\n  border-bottom: 1px pink solid;\n  padding: 0px 10px 0px 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\n\n\n/* .taskrowtitle {\n  color: var(--task-title-color);\n} */\n\n.plussigndiv {\n  justify-self: center;\n  align-self: center;\n}\n\n/* .taskrowduedate {\n  white-space:pre;\n  color: var(--task-date-color);\n} */\n\n.taskrowicon {\n  align-self: center;\n  justify-self: right;\n  cursor: pointer;\n}\n\n.completed {\n  color: gray;\n  text-decoration: line-through;\n}\n\n/* ADD TASK ROW */\n.addtaskrow {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  width: 80%;\n  border-bottom: 1px pink solid;\n  padding: 0px 10px 0px 0px;\n  margin: 0px;\n  height: 30px;\n  color: var(--task-title-color);\n}\n\n.addtaskrow:hover {\n  background-color: pink;\n  margin:0px;\n  cursor: pointer;\n}\n\n.maintaskrow:hover {\n  background-color: pink;\n  margin:0px;\n}\n\n/* TASK DETAIL AREA */\n\n.hidden {\n  display: none;\n}\n\n.taskdetailarea, .edittaskformcontainer {\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color:rgb(231, 184, 184);\n  padding-left: 28px;\n  width: 80%;\n  box-sizing: border-box;\n  padding:10px;\n  /* margin-top: -30px; */\n}\n\n/* .detailtitle {\n  padding: 0px;\n  margin: 0px 0px 10px 0px;\n} */\n\n.taskdetailgrid, .edittaskform {\n  display: grid;\n  padding: 0px;\n  margin: 0px;\n  grid-template-columns: 13ch 1fr;\n  grid-template-rows: 25px 25px 25px 25px 25px;\n}\n\n.detaillabel {\n  padding: 0px;\n  margin-top: 0px;\n  margin-left: 0px;\n  grid-column: 1 / 2;\n}\n\n.detailvalue {\n  margin-top: 0px;\n  padding-left: 5px;\n  margin-left: 5px;\n  grid-column: 2 / 3;\n  width: 100%;\n}\n\n.icon {\n  height: 2ch;\n}\n\n.taskitemgrid {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto 16ch 30px 30px 30px;\n  grid-template-rows: minmax(30px, auto);\n  margin-left: 10px;\n  padding: 2px 0px 2px 0px;\n  box-sizing:content-box;\n}\n\n.taskrowgriditem {\n  margin: 0px 0px 0px 10px;\n  justify-self: flex-start;\n  padding: 2px 0px 2px 0px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n\n\n\n.taskcheckbox {\n  align-self: center;\n  justify-self: center;\n} \n\n .taskchecklabel {\n  padding: 0px;\n  align-self: center;\n  justify-self: center;\n}\n\n.taskcheckboxdiv {\n  margin-left: 10px;\n  padding: 0px;\n}\n\n.taskdetailbutton {\n  width: 9ch;\n}\n\n.p1 {\n  color: var(--p1-color)\n}\n\n.p2 {\n  color: var(--p2-color)\n}\n\n.p3 {\n  color: var(--p3-color)\n}\n\n.p4 {\n  color: var(--p4-color)\n}\n\n.maintaskbox {\n  display:flex;\n  flex-direction:column;\n}\n\n.edittaskformarea {\n  background-color:green;\n}\n\n.visuallyhidden {\n  position: absolute;\n\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTaskForm": () => (/* binding */ editTaskForm),
/* harmony export */   "npform": () => (/* binding */ npform),
/* harmony export */   "ntform": () => (/* binding */ ntform)
/* harmony export */ });
/* harmony import */ var _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectmanager.js */ "./src/projectmanager.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.js */ "./src/localstorage.js");





const priorityArray = ['Urgent', 'High', 'Medium', 'Low'];

function cancelButton() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancelbutton');
  cancelButton.textContent = 'Cancel';
  cancelButton.setAttribute("type", "button");
  cancelButton.addEventListener('click', function(){
    cancelForm();
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
  })
  return cancelButton;
}

function cancelForm() {
  let form = document.querySelector('.form')
  form.reset();
  let formcontainer = document.querySelector('.formcontainer');
  formcontainer.remove();
}

function npform() {
  // New Project Form Container Div
  const npFormContainer = document.createElement('div');
  npFormContainer.classList.add('formcontainer');
  // Header Title
  const npFormHeading = document.createElement('h4');
  npFormHeading.textContent = 'Create a new project:'
  npFormHeading.classList.add('formheading');
  // New Project Form
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('form');
  newProjectForm.id = 'newprojectform';
  // create project title label
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.classList.add('formlabel');
  projectTitleLabel.setAttribute("for","ptitle");
  projectTitleLabel.textContent = ('* Title');
  // create input for project title
  const projectTitle = document.createElement('input');
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("name", "ptitle");
  projectTitle.setAttribute("id", "ptitle");
  projectTitle.setAttribute("placeholder", "title");
  projectTitle.setAttribute("required","required");
  // description label
  const projectDescriptionLabel = document.createElement('label');
  projectDescriptionLabel.classList.add('formlabel');
  projectDescriptionLabel.setAttribute("for","pdescription");
  projectDescriptionLabel.textContent = ('Description');
  // description input
  const projectDescription = document.createElement('textarea');
  projectDescription.setAttribute("type", "text");
  projectDescription.setAttribute("name", "pdescription");
  projectDescription.setAttribute("id", "pdescription");
  projectDescription.setAttribute("placeholder", "description");
  // due date label
  const projectDueDateLabel = document.createElement('label');
  projectDueDateLabel.classList.add('formlabel');
  projectDueDateLabel.setAttribute("for","pduedate");
  projectDueDateLabel.textContent = ('Due Date');
  // due date input
  const projectDueDate = document.createElement('input');
  projectDueDate.setAttribute("type", "date");
  projectDueDate.setAttribute("id", "pduedate");
  projectDueDate.setAttribute("name", "pduedate");
  const dueDateMin = new Date().toISOString().split('T')[0];
  projectDueDate.setAttribute("min", dueDateMin);
  // submit button
  const newProjectSubmitButton = document.createElement('button');
  newProjectSubmitButton.classList.add('savebutton');
  newProjectSubmitButton.setAttribute("type", "button");
  newProjectSubmitButton.textContent = 'Save';
  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';
  // put it together
  newProjectForm.appendChild(projectTitleLabel);
  newProjectForm.appendChild(projectTitle);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescription);
  newProjectForm.appendChild(projectDueDateLabel);
  newProjectForm.appendChild(projectDueDate);
  newProjectForm.appendChild(buttonsDiv);
  newProjectForm.appendChild(requiredNote);
  buttonsDiv.appendChild(newProjectSubmitButton);
  buttonsDiv.appendChild(cancelButton());
  npFormContainer.appendChild(npFormHeading);
  npFormContainer.appendChild(newProjectForm);
  // event listener
  newProjectSubmitButton.addEventListener("click", function(){
    const pTitle = document.getElementById('ptitle').value;
    const pDescription = document.getElementById('pdescription').value;
    const pDueDate = document.getElementById('pduedate').value;
    let pStatus = 'open';
    const projectUUID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const taskArray = [];
    (0,_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.saveNewProject)(pTitle, pDescription, pDueDate, pStatus, projectUUID, taskArray);
    newProjectForm.reset();
    npFormContainer.remove();
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
  });
  return npFormContainer;
}

// NEW TASK FORM
function ntform(project) {
  console.log(`Running the new task form function and the current projectArray is ${_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray} and the first object in it is named ${_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[0].pTitle} and the length is ${_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length}`);
  // New Task Form Container Div
  const ntFormContainer = document.createElement('div');
  ntFormContainer.classList.add('formcontainer');
  // Header Title
  const ntFormHeading = document.createElement('h4');
  ntFormHeading.textContent = 'Create a new task:'
  ntFormHeading.classList.add('formheading');
  // New Task Form
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('taskform');
  newTaskForm.classList.add('form');
  newTaskForm.id = 'newtaskform';
  // create task title label
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.classList.add('formlabel');
  taskTitleLabel.setAttribute("for","ttitle");
  taskTitleLabel.textContent = ('* Title');
  // create input for project title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "ttitle");
  taskTitle.setAttribute("id", "ttitle");
  taskTitle.setAttribute("required", "required");
  taskTitle.setAttribute("placeholder", "title");
  // description label
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('formlabel');
  taskDescriptionLabel.setAttribute("for","tdescription");
  taskDescriptionLabel.textContent = ('Description');
  // description input
  const taskDescription = document.createElement('textarea');
  taskDescription.setAttribute("type", "text");
  taskDescription.setAttribute("name", "tdescription");
  taskDescription.setAttribute("id", "tdescription");
  taskDescription.setAttribute("placeholder", "description");
  // due date label
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('formlabel');
  taskDueDateLabel.setAttribute("for","tduedate");
  taskDueDateLabel.textContent = ('Due Date');
  // due date input
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute("type", "date");
  taskDueDate.setAttribute("id", "tduedate");
  taskDueDate.setAttribute("name", "tduedate");
  const dueDateMin = new Date().toISOString().split('T')[0];
  taskDueDate.setAttribute("min", dueDateMin);
  // priority label
  const taskPriorityLabel = document.createElement('label');
  taskPriorityLabel.classList.add('formlabel');
  taskPriorityLabel.setAttribute("for","tpriority");
  taskPriorityLabel.textContent = ('Priority:');
  // priority
  const taskPriority = document.createElement('select');
  taskPriority.setAttribute("id", "tpriority");
  taskPriority.setAttribute("name","tpriority");
  for (var i = 0; i < priorityArray.length; i++) {
    var currentPriorityOption = document.createElement('option');
    currentPriorityOption.setAttribute("value", `${priorityArray[i]}`);
    currentPriorityOption.textContent = priorityArray[i];
    currentPriorityOption.id = priorityArray[i];
    taskPriority.appendChild(currentPriorityOption);
  }
  // associated project label
  const taskAssociatedProjectLabel = document.createElement('label');
  taskAssociatedProjectLabel.classList.add('formlabel');
  taskAssociatedProjectLabel.setAttribute("for","tassociatedproject");
  taskAssociatedProjectLabel.textContent = ('Save to Project:');
  // associated project options
  const taskAssociatedProject = document.createElement('select');
  taskAssociatedProject.setAttribute("id", "tassociatedproject");
  taskAssociatedProject.setAttribute("name", "tassociatedproject");
  for (var j = 0; j < _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; j++) {
    var currentOption = document.createElement('option');
    currentOption.setAttribute("value", `${_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[j].projectUUID}`);
    currentOption.textContent = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[j].pTitle;
    currentOption.id = `option-${j}`;
    // if the currentOption is the same as passed project, make it preselected
    if (_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[j].projectUUID == project.projectUUID) {
      console.log('this is the project');
      currentOption.setAttribute("selected", "selected");
    }
    taskAssociatedProject.appendChild(currentOption);
  }
  // submit button
  const newTaskSubmitButton = document.createElement('button');
  newTaskSubmitButton.classList.add('savebutton');
  newTaskSubmitButton.textContent = 'Save';
  newTaskSubmitButton.setAttribute("type", "button");
  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';
  // put it together
  newTaskForm.appendChild(taskTitleLabel);
  newTaskForm.appendChild(taskTitle);
  newTaskForm.appendChild(taskDescriptionLabel);
  newTaskForm.appendChild(taskDescription);
  newTaskForm.appendChild(taskDueDateLabel);
  newTaskForm.appendChild(taskDueDate);
  newTaskForm.appendChild(taskPriorityLabel);
  newTaskForm.appendChild(taskPriority);
  newTaskForm.appendChild(taskAssociatedProjectLabel);
  newTaskForm.appendChild(taskAssociatedProject);
  newTaskForm.appendChild(buttonsDiv);
  newTaskForm.appendChild(requiredNote);
  buttonsDiv.appendChild(newTaskSubmitButton);
  buttonsDiv.appendChild(cancelButton());
  ntFormContainer.appendChild(ntFormHeading);
  ntFormContainer.appendChild(newTaskForm);
  // event listener for when form is submitted
  newTaskSubmitButton.addEventListener("click", function(){
    const tTitle = document.getElementById('ttitle').value;
    // If title is blank
    if (tTitle == '') {
      // alert user
      alert('please fill out the title!');
    // If title is filled in
    } else {
      // save input values as variables
      // save description
      const tDescription = document.getElementById('tdescription').value;
      // save due date
      let tDueDate = document.getElementById('tduedate').value;
      // if due date is blank, update to No due date
      if (tDueDate == '') {
        tDueDate = String('No due date');
      }
      // save priority
      const tPriority = document.getElementById('tpriority').value;
      // save associated project which is the UUID
      const tAssociatedProject = document.getElementById('tassociatedproject').value;
      console.log(`When you save a new task here is the tAssociatedProject that gets passed to the save new task function: ${tAssociatedProject}`);
      let tStatus = 'open'
      // pass variables to save new task function
      ;(0,_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.saveNewTask)(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject);
      newTaskForm.reset();
      ntFormContainer.remove();
      const overlay = document.getElementById('overlay');
      overlay.style.visibility = 'hidden';
      const index = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.displayOneProject)(_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[index]);
    }
    });

  return ntFormContainer;
}
// END NEW TASK FORM

// EDIT TASK FORM
function editTaskForm(task) {
  console.log('Running the edit task form function');
  console.log(`task.tAssociatedProject is ${task.tAssociatedProject}`);
  // Edit Task Form Container Div
  let editTaskFormContainer = document.createElement('div');
  editTaskFormContainer.id = (`edittaskformcontainer-${task.taskUUID}`);
  editTaskFormContainer.classList.add('edittaskformcontainer');
  // Header Title
  const editTaskFormHeading = document.createElement('h4');
  editTaskFormHeading.textContent = 'Edit Task:'
  editTaskFormHeading.classList.add('formheading');
  // Edit Task Form
  const editTaskForm = document.createElement('form');
  // editTaskForm.classList.add('taskform');
  editTaskForm.classList.add('edittaskform');
  editTaskForm.classList.add('form');
  editTaskForm.Id = `edittaskform-${task.taskUUID}`;
  // create task title label
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.classList.add('formlabel');
  taskTitleLabel.setAttribute("for","ttitle");
  taskTitleLabel.textContent = ('* Title:');
  // create input for project title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "ttitle");
  taskTitle.setAttribute("id", "ttitle");
  taskTitle.setAttribute("required", "required");
  taskTitle.setAttribute("value", task.tTitle);
  // description label
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('formlabel');
  taskDescriptionLabel.setAttribute("for","tdescription");
  taskDescriptionLabel.textContent = ('Description:');
  // description input
  const taskDescription = document.createElement('textarea');
  taskDescription.setAttribute("type", "text");
  taskDescription.setAttribute("name", "tdescription");
  taskDescription.setAttribute("id", "tdescription");
  console.log(task.tDescription);
  taskDescription.textContent=task.tDescription;
  // due date label
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('formlabel');
  taskDueDateLabel.setAttribute("for","tduedate");
  taskDueDateLabel.textContent = ('Due Date:');
  // due date input
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute("type", "date");
  taskDueDate.setAttribute("id", "tduedate");
  taskDueDate.setAttribute("name", "tduedate");
  console.log(task.tDueDate);
  taskDueDate.setAttribute("value", task.tDueDate);
  // const dueDateMin = new Date().toISOString().split('T')[0];
  // taskDueDate.setAttribute("min", dueDateMin);
  // priority label
  const taskPriorityLabel = document.createElement('label');
  taskPriorityLabel.classList.add('formlabel');
  taskPriorityLabel.setAttribute("for","tpriority");
  taskPriorityLabel.textContent = ('Priority:');
  // priority
  const taskPriority = document.createElement('select');
  taskPriority.setAttribute("id", "tpriority");
  taskPriority.setAttribute("name","tpriority");
  for (var i = 0; i < priorityArray.length; i++) {
    var currentPriorityOption = document.createElement('option');
    currentPriorityOption.setAttribute("value", `${priorityArray[i]}`);
    currentPriorityOption.textContent = priorityArray[i];
    currentPriorityOption.id = priorityArray[i];
    // if the currentOption is the same as passed project, make it preselected
    if (priorityArray[i] === task.tPriority) {
      currentPriorityOption.setAttribute("selected", "selected");
    }
    taskPriority.appendChild(currentPriorityOption);
  }
  // associated project label
  const taskAssociatedProjectLabel = document.createElement('label');
  taskAssociatedProjectLabel.classList.add('formlabel');
  taskAssociatedProjectLabel.setAttribute("for","tassociatedproject");
  taskAssociatedProjectLabel.textContent = ('Project:');
  // associated project options
  const taskAssociatedProject = document.createElement('select');
  taskAssociatedProject.setAttribute("id", "tassociatedproject");
  taskAssociatedProject.setAttribute("name", "tassociatedproject");
  for (var k = 0; k < _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; k++) {
    var currentOption = document.createElement('option');
    currentOption.setAttribute("value", `${_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[k].projectUUID}`);
    currentOption.textContent = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[k].pTitle;
    currentOption.id = `option-${k}`;
    // if the currentOption is the same as passed project, make it preselected
    var oldProject = task.tAssociatedProject;
    if (_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[k].projectUUID === task.tAssociatedProject) {
      console.log('this is the project');
      currentOption.setAttribute("selected", "selected");
    }
    taskAssociatedProject.appendChild(currentOption);
  }
  // submit button
  const editTaskSubmitButton = document.createElement('button');
  editTaskSubmitButton.classList.add('savebutton');
  editTaskSubmitButton.textContent = 'Save';
  editTaskSubmitButton.setAttribute("type", "button");
  // edit task cancel button
  const editTaskCancelButton = document.createElement('button');
  editTaskCancelButton.classList.add('cancelbutton');
  editTaskCancelButton.textContent = 'Cancel';
  editTaskCancelButton.setAttribute("type", "button");
  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';
  // put it together
  editTaskFormContainer.appendChild(editTaskFormHeading);
  editTaskForm.appendChild(taskTitleLabel);
  editTaskForm.appendChild(taskTitle);
  editTaskForm.appendChild(taskDescriptionLabel);
  editTaskForm.appendChild(taskDescription);
  editTaskForm.appendChild(taskDueDateLabel);
  editTaskForm.appendChild(taskDueDate);
  editTaskForm.appendChild(taskPriorityLabel);
  editTaskForm.appendChild(taskPriority);
  editTaskForm.appendChild(taskAssociatedProjectLabel);
  editTaskForm.appendChild(taskAssociatedProject);
  editTaskForm.appendChild(buttonsDiv);
  editTaskForm.appendChild(requiredNote);
  buttonsDiv.appendChild(editTaskSubmitButton);
  buttonsDiv.appendChild(editTaskCancelButton);
  editTaskFormContainer.appendChild(editTaskForm);
  // event listener for when cancel is clicked
  editTaskCancelButton.addEventListener("click", function(){
    let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeChildElements)(theTaskEditRow);
    editTaskForm.reset();
  })
  // taskBox.appendChild(editTaskFormContainer);
  // event listener for when form is submitted
  editTaskSubmitButton.addEventListener("click", function(){
    const tTitle = document.getElementById('ttitle').value;
    // If title is blank
    if (tTitle == '') {
      // alert user
      alert('please fill out the title!');
    // If title is filled in
    } else {
      // save input values as variables
      // save description
      const tDescription = document.getElementById('tdescription').value;
      // save due date
      let tDueDate = document.getElementById('tduedate').value;
      // if due date is blank, update to No due date
      if (tDueDate == '') {
        tDueDate = String('No due date');
      // otherwise convert it to nicer format
      // } else {
      //   tDueDate = (new Date(tDueDate)).toDateString();
      }
      // save priority
      const tPriority = document.getElementById('tpriority').value;
      // save associated project which is the UUID
      console.log(document.getElementById('tassociatedproject').value);
      const tAssociatedProject = document.getElementById('tassociatedproject').value;
      // Update Task Data
      console.log('In the editTaskForm submit button event listener, we are now updating the task with any changes.')
      task.tTitle = tTitle;
      task.tDescription = tDescription;
      console.log(`Task's project was ${task.tAssociatedProject}`)
      task.tAssociatedProject = tAssociatedProject;
      console.log(`Now task's associated project is ${task.tAssociatedProject}`)
      task.tDueDate = tDueDate;
      task.tPriority = tPriority;
      // if associated project changed
      console.log(`task.tAssociatedProject is ${task.tAssociatedProject} and oldProject is ${oldProject}`);
      if (task.tAssociatedProject != oldProject) {
        // get index number of old project from project array and remove task
        const indexA = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.map(e => e.projectUUID).indexOf(oldProject);
        _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[indexA].removeTask(task);
        console.log(_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[indexA].taskArray);
        // get index number of new project and add task
        const indexB = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
        _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[indexB].addTask(task);
        console.log(_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[indexB].taskArray);
      }
      editTaskForm.reset();
      // display project that task was saved to
      const indexP = _projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.displayOneProject)(_projectmanager_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[indexP]);
      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
    }
    });
  return editTaskFormContainer;
}
// END EDIT TASK FORM




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.id = 'header';
  header.textContent = 'You can do it';
  return header;
}



/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStorage": () => (/* binding */ setStorage),
/* harmony export */   "simpleCheckForStorage": () => (/* binding */ simpleCheckForStorage)
/* harmony export */ });
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");


// function to update local storage
// run this after any time you update projectArray - deleteTask, saveTask, saveProject, editTask
const setStorage = function(){
  console.log('setStorage function has started.')
  console.log(`projectArray being sent to localStorage is ${(_projectmanager__WEBPACK_IMPORTED_MODULE_0__.projectArray)}`)
  console.log(`allTasksArray being sent to localStorage is ${(_projectmanager__WEBPACK_IMPORTED_MODULE_0__.allTasksArray)}`)
  localStorage.setItem('projects',JSON.stringify(_projectmanager__WEBPACK_IMPORTED_MODULE_0__.projectArray))
  localStorage.setItem('allTasks',JSON.stringify(_projectmanager__WEBPACK_IMPORTED_MODULE_0__.allTasksArray))
  console.log('local storage has been updated.')
}

// simpler check for local storage availability
const simpleCheckForStorage = function(){
  var storage;
  if (typeof(Storage) !== "undefined") {
    console.log('there is local storage')
    storage = 'yes';
  } else {
    console.log('Sorry! No Web Storage support.')
    storage = 'no';
  }
  return storage;
}




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
function main() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.id = 'main';
    // main.textContent = 'test';
  return main;
}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _projectmanager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectmanager.js */ "./src/projectmanager.js");







const pageLoad = function() {
  (0,_projectmanager_js__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
  const content = document.getElementById('content');
  content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.header)());
  content.appendChild((0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar)());
  content.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_2__.main)());
  (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectNavLinks)();
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.mainProjectLayout)();
}



/***/ }),

/***/ "./src/projectmanager.js":
/*!*******************************!*\
  !*** ./src/projectmanager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksArray": () => (/* binding */ allTasksArray),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayOneProject": () => (/* reexport safe */ _ui_js__WEBPACK_IMPORTED_MODULE_1__.displayOneProject),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "saveNewProject": () => (/* binding */ saveNewProject),
/* harmony export */   "saveNewTask": () => (/* binding */ saveNewTask)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.js */ "./src/localstorage.js");





var projectArray = [];
var allTasksArray = [];

// PROJECT CLASS
class Project {
  taskArray = [];
  pTitle;
  pDescription;
  pDueDate;
  pStatus;
  projectUUID;

  constructor (pTitle, pDescription, pDueDate, pStatus, projectUUID, taskArray=[]) {
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
    this.pStatus = pStatus;
    this.projectUUID = projectUUID;
    this.taskArray = taskArray;
    // this.taskArray = taskArray;
    // taskArray = [];
  }

  setStatus(pStatus) {
    this.pStatus = pStatus;
  }

  getStatus() {
    return this.pStatus;
  }

  addTask(task) {
    this.taskArray.push(task);
  }

  removeTask(task) {
    const index = this.taskArray.map(e => e.taskUUID).indexOf(task.taskUUID);
    this.taskArray.splice(index, 1);
  }
}
// END PROJECT CLASS

// TASK CLASS
class Task {
  tTitle;
  tDescription;
  tDueDate;
  tPriority;
  tStatus;
  taskUUID;
  tAssociatedProject;
  tBoxID;
  
  constructor (tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject) {
    this.tTitle = tTitle;
    this.tDescription = tDescription;
    this.tDueDate = tDueDate;
    this.tPriority = tPriority;
    this.tStatus = tStatus;
    this.tAssociatedProject = tAssociatedProject;
    this.taskUUID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }

  getAssociatedProject(){
    return this.tAssociatedProject;
  }

  setStatus(tStatus) {
    this.tStatus = tStatus;
  }

  getStatus() {
    return this.tStatus;
  }  
}
// END TASK CLASS


// function to set up projects - refactor this later
const getStorage = function() {
  // if local storage is available
  if ((0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.simpleCheckForStorage)() === 'yes'){
    // if local storage has a projects array
    if (localStorage.getItem('projects') != null) {
      console.log('there are projects in local storage');
      const projects = JSON.parse(localStorage.getItem('projects'));
      console.log(`projects gotten from localStorage is ${projects}`);
      // console.log(`the second object's title in projects is ${projects[1].pTitle}`);
      projectArray = projects.map((project) => new Project(project.pTitle, project.pDescription, project.pDueDate, project.pStatus, project.projectUUID, project.taskArray));
      console.log(`projectArray is ${projectArray}`);
      // setStorage();
    } else {
      // create default catch all project
      const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
      // add default project to project array
      projectArray.push(defaultProject);
    }
    // if local storage has tasks saved
    if (localStorage.getItem('allTasks') != null) {
      console.log('there are tasks in local storage')
      const tasks = JSON.parse(localStorage.getItem('allTasks'));
      console.log(`Here are the tasks from local storage: ${tasks}`);
      // allTasksArray = tasks.map((task) => saveNewTask(task.tTitle, task.tDescription, task.tDueDate, task.tPriority, task.tStatus, task.tAssociatedProject))
      allTasksArray = tasks;
    } 
  } else {
    // create default catch all project
    const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
    // add default project to project array
    projectArray.push(defaultProject);
  }
};

// FUNCTION TO SAVE NEW PROJECT
const saveNewProject = function(pTitle, pDescription, pDueDate, pStatus, projectUUID){
  console.log('saveNewProject function has started');
  const project = new Project(pTitle, pDescription, pDueDate, pStatus, projectUUID);
  projectArray.push(project);
  console.log(project);
  console.log([projectArray]);
  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
  // addProjectToSidebar(pTitle);
  (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectNavLinks)();
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.displayOneProject)(project);
}
// END FUNCTION TO SAVE NEW PROJECT

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject){
  // getStorage();
  console.log('saveNewTask function has started');
  console.log(`tAssociatedProject passed to this is ${tAssociatedProject}`);
  const task = new Task(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject);
  // find associated project in projectArray to add task to its taskArray
  const index = projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
  console.log(index);
  console.log(`projectArray[index].pTitle for the task you are saving's associated project is ${projectArray[index].pTitle}`);
  console.log(`projectArray[index].taskArray for the task you are saving's associated project is ${projectArray[index].taskArray}`);
  // add task to project's task array
  projectArray[index].addTask(task);
  // projectArray[index].taskArray.push(task);
  // add task to allTasksArray
  allTasksArray.push(task);
  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
  // displayOneProject(projectArray[index]);
}
// END FUNCTION TO SAVE NEW TASK

const deleteTask = function(task) {
  console.log('delete task function has started');
  // remove task box from DOM
  document.getElementById(`taskbox-${task.taskUUID}`).remove();
  // get associated project and delete task from it
  const indexC = projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
  projectArray[indexC].removeTask(task);
  // delete task from allTasksArray
  console.log(`All tasks array was ${allTasksArray}`);
  const indexA = allTasksArray.map(e => e.taskUUID).indexOf(task.taskUUID);
  console.log(indexA);
  allTasksArray.splice(indexA,1);
  console.log(`Now all tasks array is ${allTasksArray}`);
  // clear the values for all keys in task
  console.log(Object.keys(task));
  console.log(task.tTitle); // shows title
  Object.keys(task).forEach(key => {
    task[key] = null;
  });
  console.log(Object.keys(task));
  console.log(task.tTitle); // shows null
  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
}




/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "updateProjectNavLinks": () => (/* binding */ updateProjectNavLinks)
/* harmony export */ });
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _projectmanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmanager.js */ "./src/projectmanager.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



// import { pickRandomTask } from './ui.js'
// import { displayARandomTask } from './ui.js'


function sidebar() {

  // SIDEBAR CONTAINER
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = 'sidebar';

  // NAV
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.id = 'nav';

  // SHORTCUTS SECTION
  const shortcutsDiv = document.createElement('div');
  shortcutsDiv.classList.add('navsection');
  const shortcuts = document.createElement('h4');
  shortcuts.classList.add('navsectionheader');
  shortcuts.id = 'shortcuts';
  shortcuts.textContent = "Shortcuts";

  const addNewTask = document.createElement('a');
  addNewTask.classList.add('navlink');
  addNewTask.classList.add('shortcutnavlink');
  addNewTask.classList.add('newprojectadd');
  addNewTask.textContent = '+ new task';
  // make plus sign different color ?

  const home = document.createElement('a');
  home.classList.add('navlink');
  home.classList.add('shortcutnavlink');
  home.id = 'homenav';
  home.textContent = "Home";

  const dueToday = document.createElement('a');
  dueToday.classList.add('navlink');
  dueToday.classList.add('shortcutnavlink');
  dueToday.id = 'duetodaynav';
  dueToday.textContent = "Due Today";
  // event listener for new project button
  dueToday.addEventListener('click', function() {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayTasksDueToday)();
  });

  // const clearLocal = document.createElement('a');
  // dueToday.classList.add('navlink');
  // dueToday.classList.add('shortcutnavlink');
  // dueToday.id = 'clearlocalnav';
  // dueToday.textContent = "Clear Local Storage";

  // clearLocal.addEventListener('click', function(){
  //   localStorage.clear();
  // })

  // const randomTask = document.createElement('a');
  // randomTask.classList.add('navlink');
  // randomTask.classList.add('shortcutnavlink');
  // randomTask.id = 'randomtask';
  // randomTask.textContent = "Random Task";

  // randomTask.addEventListener('click', function() {
  //   displayARandomTask();
  // });

  // PROJECTS SECTION
  const projectsDiv = document.createElement('div');
  projectsDiv.classList.add('navsection');
  projectsDiv.id = 'projectsdiv';
  const projects = document.createElement('h4');
  projects.classList.add('navsectionheader');
  projects.id = 'projectsnavsection';
  projects.textContent = "Projects";

  const addNewProject = document.createElement('a');
  addNewProject.classList.add('navlink');
  addNewProject.classList.add('newprojectadd');
  addNewProject.textContent = '+ new project';
  // make plus sign different color ?

  const projectNavLinkSection = document.createElement('div');
  projectNavLinkSection.classList.add('projectnavlinksection');
  projectNavLinkSection.id = 'projectnavlinksection';

   // event listener for new project button
  addNewProject.addEventListener('click', function() {
    // const content = document.getElementById('content');
    // content.appendChild(npform());
    const main = document.getElementById('main');
    main.appendChild((0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.npform)());
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  // event listener for new task button
  addNewTask.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild((0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.ntform)(_projectmanager_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[0]));
    console.log(_projectmanager_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  shortcutsDiv.appendChild(shortcuts);
  shortcutsDiv.appendChild(addNewTask);
  shortcutsDiv.appendChild(home);
  shortcutsDiv.appendChild(dueToday);
  // shortcutsDiv.appendChild(randomTask);
  projectsDiv.appendChild(projects);
  projectsDiv.appendChild(addNewProject);
  projectsDiv.appendChild(projectNavLinkSection);
  nav.appendChild(shortcutsDiv);
  nav.appendChild(projectsDiv);
  sidebar.appendChild(nav);

  return sidebar;
}

// FUNCTION populate sidebar project links from projectArray
function updateProjectNavLinks() {
  // clear existing sidebar project links
  var pnavlinksection = document.getElementById('projectnavlinksection');
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeChildElements)(pnavlinksection);
  // get projectArray from local storage?
  // create link for each project in projectArray
  for (let i = 0; i < _projectmanager_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.length; i++) {
    let currentLink = document.createElement('a');
    currentLink.classList.add('projectnavlink');
    currentLink.classList.add('navlink');
    currentLink.textContent = _projectmanager_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].pTitle;
    currentLink.id = `link-${i}`;
    // when each link is clicked, fill main area with project info
    currentLink.addEventListener("click", function(){
      console.log('a project was clicked');
      var index = currentLink.id.substring(5);
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayOneProject)(_projectmanager_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[index]);
    });
    // add project link to sidebar
    pnavlinksection.appendChild(currentLink);
  }
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskRow": () => (/* binding */ createTaskRow),
/* harmony export */   "displayOneProject": () => (/* binding */ displayOneProject),
/* harmony export */   "displayTasksDueToday": () => (/* binding */ displayTasksDueToday),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "mainProjectLayout": () => (/* binding */ mainProjectLayout),
/* harmony export */   "removeChildElements": () => (/* binding */ removeChildElements)
/* harmony export */ });
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectmanager.js */ "./src/projectmanager.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _images_trash_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-2.svg */ "./src/images/trash-2.svg");
/* harmony import */ var _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/plus-circle-black.svg */ "./src/images/plus-circle-black.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_zoom_in_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/zoom-in.svg */ "./src/images/zoom-in.svg");









const main = document.getElementById('main');

function removeChildElements(parent) {
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}
// LAYOUT OF MAIN AREA

// LAYOUT PROJECT AREA
function mainProjectLayout() {
  const main = document.getElementById('main');
  removeChildElements(main);
  const mainHeader = document.createElement('h2');
  mainHeader.classList.add('mainheader');
  const mainDescription = document.createElement('div');
  mainDescription.classList.add('maindescription');
  const mainTaskArea = document.createElement('div');
  mainTaskArea.classList.add('maintaskarea');
  main.appendChild(mainHeader);
  main.appendChild(mainDescription);
  main.appendChild(mainTaskArea);
}
// END MAIN PROJECT LAYOUT

// FILL MAIN HEADER
function fillMainHeader(text) {
  const mainHeader = document.querySelector('.mainheader');
  mainHeader.textContent = text;
}
// END FILL MAIN HEADER

// FILL DESCRIPTION
function fillMainDescription(text) {
  const mainDescription = document.querySelector('.maindescription');
  mainDescription.textContent = text;
}
// END FILL DESCRIPTION

// DISPLAY TASK IN MAIN AREA
function displayTask(task) {
  // get main area
  const mainTaskArea = document.querySelector('.maintaskarea');
  // create task box
  const taskBox = document.createElement('div');
  taskBox.classList.add('maintaskbox');
  console.log(`The task ID is ${task.taskUUID}`);
  taskBox.id = `taskbox-${task.taskUUID}`;
  // put task box in main task area
  mainTaskArea.appendChild(taskBox);
  // create task row
  taskBox.appendChild(createTaskRow(task));
  // create detail row, append, and hide it
  const taskDetailRow = document.createElement('div');
  taskBox.appendChild(taskDetailRow);
  taskDetailRow.id = `taskdetailrow-${task.taskUUID}`;
  taskDetailRow.classList.add('visuallyhidden');
  // create edit row, append, and hide it
  const taskEditRow = document.createElement('div');
  taskBox.appendChild(taskEditRow);
  taskEditRow.id = `taskeditrow-${task.taskUUID}`; 
  taskEditRow.classList.add('visuallyhidden');
}
// END DISPLAY TASK IN MAIN AREA

// MAKE A TASK ROW
function createTaskRow(task) {
  // create task row
  const taskRow = document.createElement('div');
  taskRow.classList.add('maintaskrow');
  taskRow.id = (`taskrow-${task.taskUUID}`);
  // assign color based on priority
  switch (task.tPriority) {
    case 'Urgent':
      taskRow.classList.add('p1');
      break;
    case 'High':
      taskRow.classList.add('p2');
      break;
    case 'Medium':
      taskRow.classList.add('p3');
        break;
    case 'Low':
      taskRow.classList.add('p4');
        break;
  }
  // create task checkbox div inside task row
  let taskCheckBoxDiv = document.createElement('div');
  taskCheckBoxDiv.classList.add('taskcheckboxdiv');
  // task checkbox label
  let taskCheckBoxLabel = document.createElement('label');
  taskCheckBoxLabel.setAttribute("for", `checkbox-${task.taskUUID}`);
  taskCheckBoxLabel.classList.add('taskcheckboxlabel');
  // taskcheckbox
  let taskCheckBox = document.createElement('input');
  taskCheckBox.setAttribute("type", "checkbox");
  taskCheckBox.id=`checkbox-${task.taskUUID}`;
  taskCheckBox.classList.add('taskcheckbox');
  // event listener for task checkbox
  taskCheckBox.addEventListener('change', function() {
    if (taskCheckBox.checked == true) {
      console.log("Checkbox is checked..");
      taskTitleDisplay.classList.remove('undone');
      taskDueDateDisplay.classList.remove('undone');
      taskTitleDisplay.classList.add('completed')
      taskDueDateDisplay.classList.add('completed')
      // change task status to closed
      task.tStatus = 'closed';
      console.log(`task status is ${task.tStatus}`);
    } else {
      taskTitleDisplay.classList.remove('completed');
      taskDueDateDisplay.classList.remove('completed');
      taskTitleDisplay.classList.add('undone');
      taskDueDateDisplay.classList.add('undone');
      console.log("Checkbox is not checked..");
      // change task status to open
      task.tStatus = 'open';
      console.log(`task status is ${task.tStatus}`);
    }
  });
  // task item grid
  let taskItemGrid = document.createElement('div');
  taskItemGrid.classList.add('taskitemgrid');
  // task title
  let taskTitleDisplay = document.createElement('p');
  taskTitleDisplay.classList.add('taskrowgriditem')
  taskTitleDisplay.classList.add('taskrowtitle')
  taskTitleDisplay.id = `taskrowtitle-${task.taskUUID}`;
  taskTitleDisplay.textContent = task.tTitle;
  // task due date
  let taskDueDateDisplay = document.createElement('p');
  taskDueDateDisplay.classList.add('taskrowgriditem')
  taskDueDateDisplay.classList.add('taskrowduedate')
  taskDueDateDisplay.id = `taskrowduedate-${task.taskUUID}`;
  taskDueDateDisplay.textContent = task.tDueDate;
  // taskDueDateDisplay.textContent = (new Date(task.tDueDate)).toDateString();
  console.log(new Date(task.tDueDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}))
  console.log(task.tDueDate);
  // Delete icon
  const myTrash = new Image();
  myTrash.src = _images_trash_2_svg__WEBPACK_IMPORTED_MODULE_2__;
  myTrash.classList.add('icon');
  myTrash.classList.add('taskrowgriditem');
  let taskDelete = document.createElement('div');
  taskDelete.classList.add('taskrowicon');
  taskDelete.appendChild(myTrash);
  taskDelete.addEventListener('click', function() {
    console.log('X was clicked');
    (0,_projectmanager__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task);
  });
  // Magnifying icon
  const myMagnify = new Image();
  myMagnify.src = _images_zoom_in_svg__WEBPACK_IMPORTED_MODULE_5__;
  myMagnify.classList.add('icon');
  myMagnify.classList.add('taskrowgriditem');
  let taskMagnify = document.createElement('div');
  taskMagnify.classList.add('taskrowicon');
  taskMagnify.appendChild(myMagnify);
  console.log(`task id is ${task.taskUUID}`);
  // Edit icon
  const myEdit = new Image();
  myEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
  myEdit.classList.add('icon');
  myEdit.classList.add('taskrowgriditem');
  let taskEdit = document.createElement('div');
  taskEdit.classList.add('taskrowicon');
  taskEdit.appendChild(myEdit);
  // put the row together
  taskRow.appendChild(taskCheckBoxDiv);
  taskCheckBoxDiv.appendChild(taskCheckBoxLabel);
  taskCheckBoxLabel.appendChild(taskCheckBox);
  taskRow.appendChild(taskItemGrid);
  taskItemGrid.appendChild(taskTitleDisplay);
  taskItemGrid.appendChild(taskDueDateDisplay);
  taskItemGrid.appendChild(taskMagnify);
  taskItemGrid.appendChild(taskEdit);
  taskItemGrid.appendChild(taskDelete);
  // EVENT LISTENER - when you click magnify icon in task row to see details
  taskMagnify.addEventListener('click', function() {
    let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
    removeChildElements(theTaskEditRow);
    theTaskEditRow.classList.add('visuallyhidden');
    let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
    theTaskDetailRow.classList.remove('visuallyhidden');
    removeChildElements(theTaskDetailRow);
    theTaskDetailRow.appendChild(createTaskDetailArea(task));
  });
  // EVENT LISTENER - when you click edit icon in task row
  taskEdit.addEventListener('click', function() {
    let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
    removeChildElements(theTaskDetailRow);
    theTaskDetailRow.classList.add('visuallyhidden');
    let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
    removeChildElements(theTaskEditRow);
    theTaskEditRow.classList.remove('visuallyhidden');
    theTaskEditRow.appendChild((0,_forms__WEBPACK_IMPORTED_MODULE_1__.editTaskForm)(task));
  });
return taskRow;
}
// END MAKE A TASK ROW

// CREATE TASK DETAIL AREA
function createTaskDetailArea(task) {
  // Detail Area - starts out hidden
  let taskDetailArea = document.createElement('div');
  taskDetailArea.classList.add('taskdetailarea');
  // taskDetailArea.classList.add('hidden');
  taskDetailArea.id = `detailarea-${task.taskUUID}`;
  // create heading
  const taskDetailHeading = document.createElement('h4');
  taskDetailHeading.textContent = 'Task Details:'
  taskDetailHeading.classList.add('formheading');
  // Task Detail Grid
  let taskDetailGrid = document.createElement('div');
  taskDetailGrid.classList.add('taskdetailgrid');
  // Title Row
  let detailTitleLabel = document.createElement('p');
  detailTitleLabel.classList.add('detaillabel');
  detailTitleLabel.textContent = 'Title:';
  let detailTitle = document.createElement('p');
  detailTitle.classList.add('detailvalue');
  detailTitle.textContent = task.tTitle;
  // Description Row
  let detailDescriptionLabel = document.createElement('p');
  detailDescriptionLabel.classList.add('detaillabel');
  detailDescriptionLabel.textContent = 'Description:';
  let detailDescription = document.createElement('p');
  detailDescription.classList.add('detailvalue');
  detailDescription.textContent = task.tDescription;
  // Date Row
  let detailDateLabel = document.createElement('p');
  detailDateLabel.classList.add('detaillabel');
  detailDateLabel.textContent = 'Due Date:';
  let detailDate = document.createElement('p');
  detailDate.classList.add('detailvalue');
  detailDate.textContent = task.tDueDate;
  // Priority Row
  let detailPriorityLabel = document.createElement('p');
  detailPriorityLabel.classList.add('detaillabel');
  detailPriorityLabel.textContent = 'Priority:';
  let detailPriority = document.createElement('p');
  detailPriority.classList.add('detailvalue');
  detailPriority.textContent = task.tPriority;
  // Project Row
  let detailProjectLabel = document.createElement('p');
  detailProjectLabel.classList.add('detaillabel');
  detailProjectLabel.textContent = 'Project:';
  let detailProject = document.createElement('p');
  detailProject.classList.add('detailvalue');
  //added code below to fix displaying project after task has been edited
  const index = _projectmanager__WEBPACK_IMPORTED_MODULE_0__.projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
  detailProject.textContent = _projectmanager__WEBPACK_IMPORTED_MODULE_0__.projectArray[index].pTitle;
  // Button row
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // Buttons
  let taskDetailEdit = document.createElement('button');
  taskDetailEdit.classList.add('taskdetailbutton');
  taskDetailEdit.textContent = 'Edit';
  let taskDetailClose = document.createElement('button');
  taskDetailClose.classList.add('taskdetailbutton');
  taskDetailClose.textContent = 'Close';
      // event listener for edit button
      taskDetailEdit.addEventListener('click', function() {
        console.log('Task detail edit button was clicked');
        let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
        removeChildElements(theTaskDetailRow);
        theTaskDetailRow.classList.add('visuallyhidden');
        let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
        removeChildElements(theTaskEditRow);
        theTaskEditRow.classList.remove('visuallyhidden');
        theTaskEditRow.appendChild((0,_forms__WEBPACK_IMPORTED_MODULE_1__.editTaskForm)(task));
      });
      // event listener for close button
      taskDetailClose.addEventListener('click', function() {
        console.log('task detail close button was clicked');
        removeChildElements(taskDetailArea);
        taskDetailArea.classList.add('visuallyhidden');
      });
  // put detail area together
  taskDetailArea.appendChild(taskDetailHeading);
  taskDetailArea.appendChild(taskDetailGrid);
  taskDetailGrid.appendChild(detailTitleLabel);
  taskDetailGrid.appendChild(detailTitle);
  taskDetailGrid.appendChild(detailDescriptionLabel);
  taskDetailGrid.appendChild(detailDescription);
  taskDetailGrid.appendChild(detailDateLabel);
  taskDetailGrid.appendChild(detailDate);
  taskDetailGrid.appendChild(detailPriorityLabel);
  taskDetailGrid.appendChild(detailPriority);
  taskDetailGrid.appendChild(detailProjectLabel);
  taskDetailGrid.appendChild(detailProject);
  taskDetailGrid.appendChild(buttonsDiv);
  buttonsDiv.appendChild(taskDetailEdit);
  buttonsDiv.appendChild(taskDetailClose);
  return taskDetailArea;
}

// DISPLAY A PROJECT IN MAIN AREA
function displayOneProject(project){
  console.log(`The length of the project to display's taskArray is ${project.taskArray.length}`);

  mainProjectLayout();
  const mainTaskArea = document.querySelector('.maintaskarea');

  // in this function, it appends it to main
  fillMainHeader(project.pTitle);

  // display project description
  fillMainDescription(project.pDescription);

  // loop over this project's task array
  for (var i = 0; i < project.taskArray.length; i++) {
    displayTask(project.taskArray[i]);
  }

  // add row with an add task button that saves task to this project
  const addTaskRow = document.createElement('div');
  addTaskRow.classList.add('maintaskrow');
  addTaskRow.classList.add('addtaskrow');

  // inside row, add plus sign on the left
  const myPlus = new Image();
  myPlus.src = _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_3__;
  myPlus.classList.add('icon');
  myPlus.classList.add('taskrowgriditem');

  // add add task button
  const addTaskText = document.createElement('p');
  addTaskText.classList.add('addtaskp');
  addTaskText.classList.add('taskrowgriditem');
  addTaskText.textContent = 'Add task ...';
  addTaskText.id = `addtoproject${project.projectUUID};`

  // event listener for adding a task
  addTaskRow.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild((0,_forms__WEBPACK_IMPORTED_MODULE_1__.ntform)(project));
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  // put plus sign and button inside row
  addTaskRow.appendChild(myPlus);
  addTaskRow.appendChild(addTaskText);

  // put row at the end of task list
  mainTaskArea.appendChild(addTaskRow);
}

// FOR LATER
// RANDOM TASK
// function pickRandomTask() {
//   // set min and max as lowest and highest index numbers
//   var min = 0;
//   var max = allTasksArray.length-1;
//   min = Math.ceil(min);
//   max = Math.floor(max)
//   const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
//   // generate random index number
//   console.log(allTasksArray[randomIndex]);
//   return randomIndex;
// }

// function displayARandomTask() {
//   removeChildElements(main);
//   // pick random task from allTasksArray
//   let randomIndex = pickRandomTask();
//   // create header for main area
//   fillMainHeader('Random Task');
//   // create row for random task
//   createTaskRow(allTasksArray[randomIndex]);
// }

// DISPLAY TASKS DUE TODAY
const displayTasksDueToday = function() {
  console.log(_projectmanager__WEBPACK_IMPORTED_MODULE_0__.allTasksArray.length)
  console.log('displayTasksDueToday has started');
  mainProjectLayout();
  fillMainHeader('Tasks Due Today');
  fillMainDescription('Here is a list of tasks due today.');
  _projectmanager__WEBPACK_IMPORTED_MODULE_0__.allTasksArray.forEach((task) => {
    console.log(task.tTitle);
    var currentTime = new Date().toISOString().split('T')[0];
    console.log(`currentTime is ${currentTime} and task.tDueDate is ${task.tDueDate}`);
    if (task.tDueDate <= currentTime) {
      displayTask(task);
    }
  });
}




/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a985514490b0533545.svg";

/***/ }),

/***/ "./src/images/plus-circle-black.svg":
/*!******************************************!*\
  !*** ./src/images/plus-circle-black.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ccef3018bcc6d53d56e.svg";

/***/ }),

/***/ "./src/images/trash-2.svg":
/*!********************************!*\
  !*** ./src/images/trash-2.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bba7f8a90befcbd8f9c0.svg";

/***/ }),

/***/ "./src/images/zoom-in.svg":
/*!********************************!*\
  !*** ./src/images/zoom-in.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bd438a75f4b1c762f10.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");



(0,_pageload__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFNBQVMsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcs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O0FBQ2lCOztBQUV0QyxtREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdG1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0taGVhZGVyLWNvbG9yOiByZ2IoNDIsIDQwLCA0MCk7XFxuICAtLWhpZ2hsaWdodC1jb2xvcjogcmdiKDI0NiwgMTE4LCAyNyk7XFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDI0NywgMTkyLCAyMzEpO1xcbiAgLS1idXR0b24tYm94LXNoYWRvdzogMXB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIC0tdGFzay10aXRsZS1jb2xvcjogcmdiKDUzLCA1MCwgNTApO1xcbiAgLS10YXNrLWRhdGUtY29sb3I6IHJnYigxNjcsIDMwLCAzMCk7XFxuICAtLW1haW4tYmctY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tcDEtY29sb3I6IHJnYigyMzUsIDEzLCAxMyk7XFxuICAtLXAyLWNvbG9yOiByZ2IoMjA2LCAxMDAsIDgpO1xcbiAgLS1wMy1jb2xvcjogcmdiKDQzLCAxNjMsIDEwKTtcXG4gIC0tcDQtY29sb3I6IHJnYigxOSwgNzAsIDIzNik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IGF1dG8gNDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGxldHRlci1zcGFjaW5nOi4xN2VtO1xcbiAgZm9udC1zaXplOiAxMHZ3O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgLyp3aHkgZG9lcyB0aGlzIHBhZGRpbmcgbWFrZSB0aGUgc2lkZSBiYXIgY2xvc2VyIHRvIGVkZ2U/Ki9cXG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgLyogY2hhbmdlIHRvIDEwMHZoIG1pbnVzIGhlaWdodCBvZiBoZWFkZXIgKi9cXG4gIGhlaWdodDoxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE1NCwgMTc3LCAyNDcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWducyBjb250ZW50cyB0byB0b3AgKi9cXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAzNXB4IDBweCAyMHB4IDM1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgLyogYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiYSgyMTcsIDE5MywgODksIDAuNSk7ICovXFxufVxcblxcbi5uYXYge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5uYXZzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm5hdnNlY3Rpb25oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbn1cXG5cXG4ubmF2bGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIHBhZGRpbmctbGVmdDogOXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcGFkZGluZzogMTVweCAzNXB4IDIwcHggMzVweDtcXG59XFxuXFxuLm1haW5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5mb3JtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjQzLCAyNDMpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6MnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMDBweDtcXG4gIGxlZnQ6IDMwJTtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICBhY2NlbnQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tmb3JtIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWNjZW50LWNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JtbGFiZWwsIC5kZXRhaWxsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGNvbG9yOiByZ2IoODYsIDg1LCA4NSk7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucmVxdWlyZWRub3RlIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiA3IC8gODtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uc2F2ZWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICB3aWR0aDogOGNoO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1ib3gtc2hhZG93KTtcXG4gIC8qIHggeSBibHVyIHNwcmVhZCAqL1xcbn1cXG5cXG4uY2FuY2VsYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMSwgMjMxKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiA4Y2g7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xcbiAgY29sb3I6IGJyb3duO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tYm94LXNoYWRvdyk7XFxufVxcblxcbi5mb3JtaGVhZGluZyB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTVweCAwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcXG59XFxuXFxuI3BkZXNjcmlwdGlvbiB7XFxuICBjb2xvcjpyZWQ7XFxuICBoZWlnaHQ6IDVjaDtcXG59XFxuXFxuYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgyNDgsIDEyMiwgMjQzLCAwLjUpO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2F2eSByZWQgMXB4O1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoNzMsIDIyMCwgNjgsIDAuNSk7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW5wcm9qZWN0aGVhZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXG59XFxuXFxuLm1haW50YXNrYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4ubWFpbnByb2plY3RkZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOjEwcHg7XFxufVxcblxcblxcblxcbiNvdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuXFxuLnRpbnBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRjaCAxZnIgM2ZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XFxufVxcblxcbmlucHV0IHsgXFxuICB3aWR0aCA6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCBvcmFuZ2U7XFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogVEFTSyBST1dTIElOIE1BSU4gQVJFQSAqL1xcblxcbi5tYWludGFza3JvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggcGluayBzb2xpZDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcblxcbi8qIC50YXNrcm93dGl0bGUge1xcbiAgY29sb3I6IHZhcigtLXRhc2stdGl0bGUtY29sb3IpO1xcbn0gKi9cXG5cXG4ucGx1c3NpZ25kaXYge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC50YXNrcm93ZHVlZGF0ZSB7XFxuICB3aGl0ZS1zcGFjZTpwcmU7XFxuICBjb2xvcjogdmFyKC0tdGFzay1kYXRlLWNvbG9yKTtcXG59ICovXFxuXFxuLnRhc2tyb3dpY29uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLyogQUREIFRBU0sgUk9XICovXFxuLmFkZHRhc2tyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBwaW5rIHNvbGlkO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLXRhc2stdGl0bGUtY29sb3IpO1xcbn1cXG5cXG4uYWRkdGFza3Jvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgbWFyZ2luOjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW50YXNrcm93OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICBtYXJnaW46MHB4O1xcbn1cXG5cXG4vKiBUQVNLIERFVEFJTCBBUkVBICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFza2RldGFpbGFyZWEsIC5lZGl0dGFza2Zvcm1jb250YWluZXIge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzEsIDE4NCwgMTg0KTtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzoxMHB4O1xcbiAgLyogbWFyZ2luLXRvcDogLTMwcHg7ICovXFxufVxcblxcbi8qIC5kZXRhaWx0aXRsZSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufSAqL1xcblxcbi50YXNrZGV0YWlsZ3JpZCwgLmVkaXR0YXNrZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzY2ggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDI1cHggMjVweCAyNXB4IDI1cHg7XFxufVxcblxcbi5kZXRhaWxsYWJlbCB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uZGV0YWlsdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMmNoO1xcbn1cXG5cXG4udGFza2l0ZW1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxNmNoIDMwcHggMzBweCAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMzBweCwgYXV0byk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDBweDtcXG4gIGJveC1zaXppbmc6Y29udGVudC1ib3g7XFxufVxcblxcbi50YXNrcm93Z3JpZGl0ZW0ge1xcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMnB4IDBweCAycHggMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi50YXNrY2hlY2tib3gge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufSBcXG5cXG4gLnRhc2tjaGVja2xhYmVsIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFza2NoZWNrYm94ZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGFza2RldGFpbGJ1dHRvbiB7XFxuICB3aWR0aDogOWNoO1xcbn1cXG5cXG4ucDEge1xcbiAgY29sb3I6IHZhcigtLXAxLWNvbG9yKVxcbn1cXG5cXG4ucDIge1xcbiAgY29sb3I6IHZhcigtLXAyLWNvbG9yKVxcbn1cXG5cXG4ucDMge1xcbiAgY29sb3I6IHZhcigtLXAzLWNvbG9yKVxcbn1cXG5cXG4ucDQge1xcbiAgY29sb3I6IHZhcigtLXA0LWNvbG9yKVxcbn1cXG5cXG4ubWFpbnRhc2tib3gge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4uZWRpdHRhc2tmb3JtYXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xcbn1cXG5cXG4udmlzdWFsbHloaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsdURBQXVEO0VBQ3ZELG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZFQUE2RTtFQUM3RSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMERBQTBEO0VBQzFELHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHNCQUFzQjtJQUNwQiwyQkFBMkI7RUFDN0IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix3Q0FB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RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7O0VBRVYsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWhlYWRlci1jb2xvcjogcmdiKDQyLCA0MCwgNDApO1xcbiAgLS1oaWdobGlnaHQtY29sb3I6IHJnYigyNDYsIDExOCwgMjcpO1xcbiAgLS1ib3JkZXItY29sb3I6IHJnYigyNDcsIDE5MiwgMjMxKTtcXG4gIC0tYnV0dG9uLWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAtLXRhc2stdGl0bGUtY29sb3I6IHJnYig1MywgNTAsIDUwKTtcXG4gIC0tdGFzay1kYXRlLWNvbG9yOiByZ2IoMTY3LCAzMCwgMzApO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLXAxLWNvbG9yOiByZ2IoMjM1LCAxMywgMTMpO1xcbiAgLS1wMi1jb2xvcjogcmdiKDIwNiwgMTAwLCA4KTtcXG4gIC0tcDMtY29sb3I6IHJnYig0MywgMTYzLCAxMCk7XFxuICAtLXA0LWNvbG9yOiByZ2IoMTksIDcwLCAyMzYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCBhdXRvIDQwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBsZXR0ZXItc3BhY2luZzouMTdlbTtcXG4gIGZvbnQtc2l6ZTogMTB2dztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIC8qd2h5IGRvZXMgdGhpcyBwYWRkaW5nIG1ha2UgdGhlIHNpZGUgYmFyIGNsb3NlciB0byBlZGdlPyovXFxuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gNDtcXG4gIC8qIGNoYW5nZSB0byAxMDB2aCBtaW51cyBoZWlnaHQgb2YgaGVhZGVyICovXFxuICBoZWlnaHQ6MTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTQsIDE3NywgMjQ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBhbGlnbnMgY29udGVudHMgdG8gdG9wICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMzVweCAwcHggMjBweCAzNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIC8qIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEoMjE3LCAxOTMsIDg5LCAwLjUpOyAqL1xcbn1cXG5cXG4ubmF2IHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubmF2c2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5uYXZzZWN0aW9uaGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG59XFxuXFxuLm5hdmxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDlweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE1cHggMzVweCAyMHB4IDM1cHg7XFxufVxcblxcbi5tYWluZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZm9ybWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDI0MywgMjQzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDpmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OjJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAwcHg7XFxuICBsZWZ0OiAzMCU7XFxuICB6LWluZGV4OiAyMDAwO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWNjZW50LWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrZm9ybSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIGdhcDogMTBweDtcXG4gIGFjY2VudC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9ybWxhYmVsLCAuZGV0YWlsbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogcmdiKDg2LCA4NSwgODUpO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnJlcXVpcmVkbm90ZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogNyAvIDg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnNhdmVidXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgd2lkdGg6IDhjaDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tYm94LXNoYWRvdyk7XFxuICAvKiB4IHkgYmx1ciBzcHJlYWQgKi9cXG59XFxuXFxuLmNhbmNlbGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzEsIDIzMSk7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogOGNoO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXG4gIGNvbG9yOiBicm93bjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4uZm9ybWhlYWRpbmcge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XFxufVxcblxcbiNwZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6cmVkO1xcbiAgaGVpZ2h0OiA1Y2g7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMjQ4LCAxMjIsIDI0MywgMC41KTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnkgcmVkIDFweDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDczLCAyMjAsIDY4LCAwLjUpO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWlucHJvamVjdGhlYWRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbi5tYWludGFza2FyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLm1haW5wcm9qZWN0ZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbn1cXG5cXG5cXG5cXG4jb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcblxcbi50aW5wZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0Y2ggMWZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG5cXG5pbnB1dCB7IFxcbiAgd2lkdGggOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggb3JhbmdlO1xcbn1cXG5cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIFRBU0sgUk9XUyBJTiBNQUlOIEFSRUEgKi9cXG5cXG4ubWFpbnRhc2tyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHBpbmsgc29saWQ7XFxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5cXG4vKiAudGFza3Jvd3RpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS10YXNrLXRpdGxlLWNvbG9yKTtcXG59ICovXFxuXFxuLnBsdXNzaWduZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAudGFza3Jvd2R1ZWRhdGUge1xcbiAgd2hpdGUtc3BhY2U6cHJlO1xcbiAgY29sb3I6IHZhcigtLXRhc2stZGF0ZS1jb2xvcik7XFxufSAqL1xcblxcbi50YXNrcm93aWNvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qIEFERCBUQVNLIFJPVyAqL1xcbi5hZGR0YXNrcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggcGluayBzb2xpZDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS10YXNrLXRpdGxlLWNvbG9yKTtcXG59XFxuXFxuLmFkZHRhc2tyb3c6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gIG1hcmdpbjowcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWludGFza3Jvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgbWFyZ2luOjBweDtcXG59XFxuXFxuLyogVEFTSyBERVRBSUwgQVJFQSAqL1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2tkZXRhaWxhcmVhLCAuZWRpdHRhc2tmb3JtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMxLCAxODQsIDE4NCk7XFxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICB3aWR0aDogODAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIC8qIG1hcmdpbi10b3A6IC0zMHB4OyAqL1xcbn1cXG5cXG4vKiAuZGV0YWlsdGl0bGUge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xcbn0gKi9cXG5cXG4udGFza2RldGFpbGdyaWQsIC5lZGl0dGFza2Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxM2NoIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAyNXB4IDI1cHggMjVweCAyNXB4O1xcbn1cXG5cXG4uZGV0YWlsbGFiZWwge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmRldGFpbHZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDJjaDtcXG59XFxuXFxuLnRhc2tpdGVtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTZjaCAzMHB4IDMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDMwcHgsIGF1dG8pO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiAycHggMHB4IDJweCAwcHg7XFxuICBib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xcbn1cXG5cXG4udGFza3Jvd2dyaWRpdGVtIHtcXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4udGFza2NoZWNrYm94IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn0gXFxuXFxuIC50YXNrY2hlY2tsYWJlbCB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tjaGVja2JveGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRhc2tkZXRhaWxidXR0b24ge1xcbiAgd2lkdGg6IDljaDtcXG59XFxuXFxuLnAxIHtcXG4gIGNvbG9yOiB2YXIoLS1wMS1jb2xvcilcXG59XFxuXFxuLnAyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMi1jb2xvcilcXG59XFxuXFxuLnAzIHtcXG4gIGNvbG9yOiB2YXIoLS1wMy1jb2xvcilcXG59XFxuXFxuLnA0IHtcXG4gIGNvbG9yOiB2YXIoLS1wNC1jb2xvcilcXG59XFxuXFxuLm1haW50YXNrYm94IHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLmVkaXR0YXNrZm9ybWFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcXG59XFxuXFxuLnZpc3VhbGx5aGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7IHNhdmVOZXdUYXNrLCBwcm9qZWN0QXJyYXksIHNhdmVOZXdQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0bWFuYWdlci5qcyc7XG5pbXBvcnQgeyByZW1vdmVDaGlsZEVsZW1lbnRzLCBkaXNwbGF5T25lUHJvamVjdCB9IGZyb20gJy4vdWkuanMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBzZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UuanMnO1xuXG5jb25zdCBwcmlvcml0eUFycmF5ID0gWydVcmdlbnQnLCAnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG5cbmZ1bmN0aW9uIGNhbmNlbEJ1dHRvbigpIHtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxidXR0b24nKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNhbmNlbEZvcm0oKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSlcbiAgcmV0dXJuIGNhbmNlbEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpXG4gIGZvcm0ucmVzZXQoKTtcbiAgbGV0IGZvcm1jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybWNvbnRhaW5lcicpO1xuICBmb3JtY29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBucGZvcm0oKSB7XG4gIC8vIE5ldyBQcm9qZWN0IEZvcm0gQ29udGFpbmVyIERpdlxuICBjb25zdCBucEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbnBGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1jb250YWluZXInKTtcbiAgLy8gSGVhZGVyIFRpdGxlXG4gIGNvbnN0IG5wRm9ybUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBucEZvcm1IZWFkaW5nLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBhIG5ldyBwcm9qZWN0OidcbiAgbnBGb3JtSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb3JtaGVhZGluZycpO1xuICAvLyBOZXcgUHJvamVjdCBGb3JtXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gIG5ld1Byb2plY3RGb3JtLmlkID0gJ25ld3Byb2plY3Rmb3JtJztcbiAgLy8gY3JlYXRlIHByb2plY3QgdGl0bGUgbGFiZWxcbiAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcm9qZWN0VGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtbGFiZWwnKTtcbiAgcHJvamVjdFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJwdGl0bGVcIik7XG4gIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gKCcqIFRpdGxlJyk7XG4gIC8vIGNyZWF0ZSBpbnB1dCBmb3IgcHJvamVjdCB0aXRsZVxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwdGl0bGVcIik7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcInJlcXVpcmVkXCIpO1xuICAvLyBkZXNjcmlwdGlvbiBsYWJlbFxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1sYWJlbCcpO1xuICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInBkZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAoJ0Rlc2NyaXB0aW9uJyk7XG4gIC8vIGRlc2NyaXB0aW9uIGlucHV0XG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBkZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIC8vIGR1ZSBkYXRlIGxhYmVsXG4gIGNvbnN0IHByb2plY3REdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcm9qZWN0RHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1sYWJlbCcpO1xuICBwcm9qZWN0RHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicGR1ZWRhdGVcIik7XG4gIHByb2plY3REdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAoJ0R1ZSBEYXRlJyk7XG4gIC8vIGR1ZSBkYXRlIGlucHV0XG4gIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHByb2plY3REdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGR1ZWRhdGVcIik7XG4gIHByb2plY3REdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwZHVlZGF0ZVwiKTtcbiAgY29uc3QgZHVlRGF0ZU1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZHVlRGF0ZU1pbik7XG4gIC8vIHN1Ym1pdCBidXR0b25cbiAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0U3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NhdmVidXR0b24nKTtcbiAgbmV3UHJvamVjdFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0U3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAvLyBidXR0b25zIGRpdlxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAvLyByZXF1aXJlZCBub3RlXG4gIGNvbnN0IHJlcXVpcmVkTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVxdWlyZWROb3RlLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkbm90ZScpO1xuICByZXF1aXJlZE5vdGUudGV4dENvbnRlbnQgPSAnKiA9IHJlcXVpcmVkJztcbiAgLy8gcHV0IGl0IHRvZ2V0aGVyXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uTGFiZWwpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZUxhYmVsKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGUpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocmVxdWlyZWROb3RlKTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0QnV0dG9uKTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24oKSk7XG4gIG5wRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChucEZvcm1IZWFkaW5nKTtcbiAgbnBGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcbiAgLy8gZXZlbnQgbGlzdGVuZXJcbiAgbmV3UHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgcERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHBEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkdWVkYXRlJykudmFsdWU7XG4gICAgbGV0IHBTdGF0dXMgPSAnb3Blbic7XG4gICAgY29uc3QgcHJvamVjdFVVSUQgPSB1dWlkdjQoKTtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgICBzYXZlTmV3UHJvamVjdChwVGl0bGUsIHBEZXNjcmlwdGlvbiwgcER1ZURhdGUsIHBTdGF0dXMsIHByb2plY3RVVUlELCB0YXNrQXJyYXkpO1xuICAgIG5ld1Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgbnBGb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbiAgcmV0dXJuIG5wRm9ybUNvbnRhaW5lcjtcbn1cblxuLy8gTkVXIFRBU0sgRk9STVxuZnVuY3Rpb24gbnRmb3JtKHByb2plY3QpIHtcbiAgY29uc29sZS5sb2coYFJ1bm5pbmcgdGhlIG5ldyB0YXNrIGZvcm0gZnVuY3Rpb24gYW5kIHRoZSBjdXJyZW50IHByb2plY3RBcnJheSBpcyAke3Byb2plY3RBcnJheX0gYW5kIHRoZSBmaXJzdCBvYmplY3QgaW4gaXQgaXMgbmFtZWQgJHtwcm9qZWN0QXJyYXlbMF0ucFRpdGxlfSBhbmQgdGhlIGxlbmd0aCBpcyAke3Byb2plY3RBcnJheS5sZW5ndGh9YCk7XG4gIC8vIE5ldyBUYXNrIEZvcm0gQ29udGFpbmVyIERpdlxuICBjb25zdCBudEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbnRGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1jb250YWluZXInKTtcbiAgLy8gSGVhZGVyIFRpdGxlXG4gIGNvbnN0IG50Rm9ybUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBudEZvcm1IZWFkaW5nLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBhIG5ldyB0YXNrOidcbiAgbnRGb3JtSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb3JtaGVhZGluZycpO1xuICAvLyBOZXcgVGFzayBGb3JtXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrZm9ybScpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gIG5ld1Rhc2tGb3JtLmlkID0gJ25ld3Rhc2tmb3JtJztcbiAgLy8gY3JlYXRlIHRhc2sgdGl0bGUgbGFiZWxcbiAgY29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrVGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtbGFiZWwnKTtcbiAgdGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0dGl0bGVcIik7XG4gIHRhc2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gKCcqIFRpdGxlJyk7XG4gIC8vIGNyZWF0ZSBpbnB1dCBmb3IgcHJvamVjdCB0aXRsZVxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidHRpdGxlXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0dGl0bGVcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInJlcXVpcmVkXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJ0aXRsZVwiKTtcbiAgLy8gZGVzY3JpcHRpb24gbGFiZWxcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtbGFiZWwnKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0ZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gKCdEZXNjcmlwdGlvbicpO1xuICAvLyBkZXNjcmlwdGlvbiBpbnB1dFxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGRlc2NyaXB0aW9uXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAvLyBkdWUgZGF0ZSBsYWJlbFxuICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtbGFiZWwnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRkdWVkYXRlXCIpO1xuICB0YXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gKCdEdWUgRGF0ZScpO1xuICAvLyBkdWUgZGF0ZSBpbnB1dFxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRkdWVkYXRlXCIpO1xuICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGR1ZWRhdGVcIik7XG4gIGNvbnN0IGR1ZURhdGVNaW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIGR1ZURhdGVNaW4pO1xuICAvLyBwcmlvcml0eSBsYWJlbFxuICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1sYWJlbCcpO1xuICB0YXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRwcmlvcml0eVwiKTtcbiAgdGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAoJ1ByaW9yaXR5OicpO1xuICAvLyBwcmlvcml0eVxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHByaW9yaXR5XCIpO1xuICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidHByaW9yaXR5XCIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY3VycmVudFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3ByaW9yaXR5QXJyYXlbaV19YCk7XG4gICAgY3VycmVudFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlBcnJheVtpXTtcbiAgICBjdXJyZW50UHJpb3JpdHlPcHRpb24uaWQgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChjdXJyZW50UHJpb3JpdHlPcHRpb24pO1xuICB9XG4gIC8vIGFzc29jaWF0ZWQgcHJvamVjdCBsYWJlbFxuICBjb25zdCB0YXNrQXNzb2NpYXRlZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tBc3NvY2lhdGVkUHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1sYWJlbCcpO1xuICB0YXNrQXNzb2NpYXRlZFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRhc3NvY2lhdGVkcHJvamVjdFwiKTtcbiAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAoJ1NhdmUgdG8gUHJvamVjdDonKTtcbiAgLy8gYXNzb2NpYXRlZCBwcm9qZWN0IG9wdGlvbnNcbiAgY29uc3QgdGFza0Fzc29jaWF0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tBc3NvY2lhdGVkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc3NvY2lhdGVkcHJvamVjdFwiKTtcbiAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNzb2NpYXRlZHByb2plY3RcIik7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgdmFyIGN1cnJlbnRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjdXJyZW50T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3Byb2plY3RBcnJheVtqXS5wcm9qZWN0VVVJRH1gKTtcbiAgICBjdXJyZW50T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2pdLnBUaXRsZTtcbiAgICBjdXJyZW50T3B0aW9uLmlkID0gYG9wdGlvbi0ke2p9YDtcbiAgICAvLyBpZiB0aGUgY3VycmVudE9wdGlvbiBpcyB0aGUgc2FtZSBhcyBwYXNzZWQgcHJvamVjdCwgbWFrZSBpdCBwcmVzZWxlY3RlZFxuICAgIGlmIChwcm9qZWN0QXJyYXlbal0ucHJvamVjdFVVSUQgPT0gcHJvamVjdC5wcm9qZWN0VVVJRCkge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHByb2plY3QnKTtcbiAgICAgIGN1cnJlbnRPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0LmFwcGVuZENoaWxkKGN1cnJlbnRPcHRpb24pO1xuICB9XG4gIC8vIHN1Ym1pdCBidXR0b25cbiAgY29uc3QgbmV3VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUYXNrU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NhdmVidXR0b24nKTtcbiAgbmV3VGFza1N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgbmV3VGFza1N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAvLyBidXR0b25zIGRpdlxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAvLyByZXF1aXJlZCBub3RlXG4gIGNvbnN0IHJlcXVpcmVkTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVxdWlyZWROb3RlLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkbm90ZScpO1xuICByZXF1aXJlZE5vdGUudGV4dENvbnRlbnQgPSAnKiA9IHJlcXVpcmVkJztcbiAgLy8gcHV0IGl0IHRvZ2V0aGVyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbCk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tBc3NvY2lhdGVkUHJvamVjdExhYmVsKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Fzc29jaWF0ZWRQcm9qZWN0KTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHJlcXVpcmVkTm90ZSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQobmV3VGFza1N1Ym1pdEJ1dHRvbik7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKCkpO1xuICBudEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobnRGb3JtSGVhZGluZyk7XG4gIG50Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gIC8vIGV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG4gIG5ld1Rhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0aXRsZScpLnZhbHVlO1xuICAgIC8vIElmIHRpdGxlIGlzIGJsYW5rXG4gICAgaWYgKHRUaXRsZSA9PSAnJykge1xuICAgICAgLy8gYWxlcnQgdXNlclxuICAgICAgYWxlcnQoJ3BsZWFzZSBmaWxsIG91dCB0aGUgdGl0bGUhJyk7XG4gICAgLy8gSWYgdGl0bGUgaXMgZmlsbGVkIGluXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNhdmUgaW5wdXQgdmFsdWVzIGFzIHZhcmlhYmxlc1xuICAgICAgLy8gc2F2ZSBkZXNjcmlwdGlvblxuICAgICAgY29uc3QgdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgLy8gc2F2ZSBkdWUgZGF0ZVxuICAgICAgbGV0IHREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkdWVkYXRlJykudmFsdWU7XG4gICAgICAvLyBpZiBkdWUgZGF0ZSBpcyBibGFuaywgdXBkYXRlIHRvIE5vIGR1ZSBkYXRlXG4gICAgICBpZiAodER1ZURhdGUgPT0gJycpIHtcbiAgICAgICAgdER1ZURhdGUgPSBTdHJpbmcoJ05vIGR1ZSBkYXRlJyk7XG4gICAgICB9XG4gICAgICAvLyBzYXZlIHByaW9yaXR5XG4gICAgICBjb25zdCB0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHByaW9yaXR5JykudmFsdWU7XG4gICAgICAvLyBzYXZlIGFzc29jaWF0ZWQgcHJvamVjdCB3aGljaCBpcyB0aGUgVVVJRFxuICAgICAgY29uc3QgdEFzc29jaWF0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc3NvY2lhdGVkcHJvamVjdCcpLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coYFdoZW4geW91IHNhdmUgYSBuZXcgdGFzayBoZXJlIGlzIHRoZSB0QXNzb2NpYXRlZFByb2plY3QgdGhhdCBnZXRzIHBhc3NlZCB0byB0aGUgc2F2ZSBuZXcgdGFzayBmdW5jdGlvbjogJHt0QXNzb2NpYXRlZFByb2plY3R9YCk7XG4gICAgICBsZXQgdFN0YXR1cyA9ICdvcGVuJ1xuICAgICAgLy8gcGFzcyB2YXJpYWJsZXMgdG8gc2F2ZSBuZXcgdGFzayBmdW5jdGlvblxuICAgICAgc2F2ZU5ld1Rhc2sodFRpdGxlLCB0RGVzY3JpcHRpb24sIHREdWVEYXRlLCB0UHJpb3JpdHksIHRTdGF0dXMsIHRBc3NvY2lhdGVkUHJvamVjdCk7XG4gICAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICAgICAgbnRGb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lm1hcChlID0+IGUucHJvamVjdFVVSUQpLmluZGV4T2YodEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgICAgIGRpc3BsYXlPbmVQcm9qZWN0KHByb2plY3RBcnJheVtpbmRleF0pO1xuICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gbnRGb3JtQ29udGFpbmVyO1xufVxuLy8gRU5EIE5FVyBUQVNLIEZPUk1cblxuLy8gRURJVCBUQVNLIEZPUk1cbmZ1bmN0aW9uIGVkaXRUYXNrRm9ybSh0YXNrKSB7XG4gIGNvbnNvbGUubG9nKCdSdW5uaW5nIHRoZSBlZGl0IHRhc2sgZm9ybSBmdW5jdGlvbicpO1xuICBjb25zb2xlLmxvZyhgdGFzay50QXNzb2NpYXRlZFByb2plY3QgaXMgJHt0YXNrLnRBc3NvY2lhdGVkUHJvamVjdH1gKTtcbiAgLy8gRWRpdCBUYXNrIEZvcm0gQ29udGFpbmVyIERpdlxuICBsZXQgZWRpdFRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXRUYXNrRm9ybUNvbnRhaW5lci5pZCA9IChgZWRpdHRhc2tmb3JtY29udGFpbmVyLSR7dGFzay50YXNrVVVJRH1gKTtcbiAgZWRpdFRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXR0YXNrZm9ybWNvbnRhaW5lcicpO1xuICAvLyBIZWFkZXIgVGl0bGVcbiAgY29uc3QgZWRpdFRhc2tGb3JtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGVkaXRUYXNrRm9ybUhlYWRpbmcudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrOidcbiAgZWRpdFRhc2tGb3JtSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb3JtaGVhZGluZycpO1xuICAvLyBFZGl0IFRhc2sgRm9ybVxuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIC8vIGVkaXRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrZm9ybScpO1xuICBlZGl0VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdHRhc2tmb3JtJyk7XG4gIGVkaXRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gIGVkaXRUYXNrRm9ybS5JZCA9IGBlZGl0dGFza2Zvcm0tJHt0YXNrLnRhc2tVVUlEfWA7XG4gIC8vIGNyZWF0ZSB0YXNrIHRpdGxlIGxhYmVsXG4gIGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1RpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybWxhYmVsJyk7XG4gIHRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidHRpdGxlXCIpO1xuICB0YXNrVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICgnKiBUaXRsZTonKTtcbiAgLy8gY3JlYXRlIGlucHV0IGZvciBwcm9qZWN0IHRpdGxlXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0dGl0bGVcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR0aXRsZVwiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwicmVxdWlyZWRcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnRUaXRsZSk7XG4gIC8vIGRlc2NyaXB0aW9uIGxhYmVsXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybWxhYmVsJyk7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidGRlc2NyaXB0aW9uXCIpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICgnRGVzY3JpcHRpb246Jyk7XG4gIC8vIGRlc2NyaXB0aW9uIGlucHV0XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0ZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRkZXNjcmlwdGlvblwiKTtcbiAgY29uc29sZS5sb2codGFzay50RGVzY3JpcHRpb24pO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQ9dGFzay50RGVzY3JpcHRpb247XG4gIC8vIGR1ZSBkYXRlIGxhYmVsXG4gIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrRHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1sYWJlbCcpO1xuICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidGR1ZWRhdGVcIik7XG4gIHRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAoJ0R1ZSBEYXRlOicpO1xuICAvLyBkdWUgZGF0ZSBpbnB1dFxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRkdWVkYXRlXCIpO1xuICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGR1ZWRhdGVcIik7XG4gIGNvbnNvbGUubG9nKHRhc2sudER1ZURhdGUpO1xuICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnREdWVEYXRlKTtcbiAgLy8gY29uc3QgZHVlRGF0ZU1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAvLyB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZHVlRGF0ZU1pbik7XG4gIC8vIHByaW9yaXR5IGxhYmVsXG4gIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1ByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybWxhYmVsJyk7XG4gIHRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwidHByaW9yaXR5XCIpO1xuICB0YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICgnUHJpb3JpdHk6Jyk7XG4gIC8vIHByaW9yaXR5XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cHJpb3JpdHlcIik7XG4gIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0cHJpb3JpdHlcIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdHlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjdXJyZW50UHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjdXJyZW50UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cHJpb3JpdHlBcnJheVtpXX1gKTtcbiAgICBjdXJyZW50UHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgIGN1cnJlbnRQcmlvcml0eU9wdGlvbi5pZCA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgLy8gaWYgdGhlIGN1cnJlbnRPcHRpb24gaXMgdGhlIHNhbWUgYXMgcGFzc2VkIHByb2plY3QsIG1ha2UgaXQgcHJlc2VsZWN0ZWRcbiAgICBpZiAocHJpb3JpdHlBcnJheVtpXSA9PT0gdGFzay50UHJpb3JpdHkpIHtcbiAgICAgIGN1cnJlbnRQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoY3VycmVudFByaW9yaXR5T3B0aW9uKTtcbiAgfVxuICAvLyBhc3NvY2lhdGVkIHByb2plY3QgbGFiZWxcbiAgY29uc3QgdGFza0Fzc29jaWF0ZWRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrQXNzb2NpYXRlZFByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtbGFiZWwnKTtcbiAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0YXNzb2NpYXRlZHByb2plY3RcIik7XG4gIHRhc2tBc3NvY2lhdGVkUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gKCdQcm9qZWN0OicpO1xuICAvLyBhc3NvY2lhdGVkIHByb2plY3Qgb3B0aW9uc1xuICBjb25zdCB0YXNrQXNzb2NpYXRlZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzc29jaWF0ZWRwcm9qZWN0XCIpO1xuICB0YXNrQXNzb2NpYXRlZFByb2plY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc3NvY2lhdGVkcHJvamVjdFwiKTtcbiAgZm9yICh2YXIgayA9IDA7IGsgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBrKyspIHtcbiAgICB2YXIgY3VycmVudE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGN1cnJlbnRPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cHJvamVjdEFycmF5W2tdLnByb2plY3RVVUlEfWApO1xuICAgIGN1cnJlbnRPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlba10ucFRpdGxlO1xuICAgIGN1cnJlbnRPcHRpb24uaWQgPSBgb3B0aW9uLSR7a31gO1xuICAgIC8vIGlmIHRoZSBjdXJyZW50T3B0aW9uIGlzIHRoZSBzYW1lIGFzIHBhc3NlZCBwcm9qZWN0LCBtYWtlIGl0IHByZXNlbGVjdGVkXG4gICAgdmFyIG9sZFByb2plY3QgPSB0YXNrLnRBc3NvY2lhdGVkUHJvamVjdDtcbiAgICBpZiAocHJvamVjdEFycmF5W2tdLnByb2plY3RVVUlEID09PSB0YXNrLnRBc3NvY2lhdGVkUHJvamVjdCkge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHByb2plY3QnKTtcbiAgICAgIGN1cnJlbnRPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgdGFza0Fzc29jaWF0ZWRQcm9qZWN0LmFwcGVuZENoaWxkKGN1cnJlbnRPcHRpb24pO1xuICB9XG4gIC8vIHN1Ym1pdCBidXR0b25cbiAgY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRhc2tTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2F2ZWJ1dHRvbicpO1xuICBlZGl0VGFza1N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgZWRpdFRhc2tTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgLy8gZWRpdCB0YXNrIGNhbmNlbCBidXR0b25cbiAgY29uc3QgZWRpdFRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsYnV0dG9uJyk7XG4gIGVkaXRUYXNrQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGVkaXRUYXNrQ2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIC8vIGJ1dHRvbnMgZGl2XG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gIC8vIHJlcXVpcmVkIG5vdGVcbiAgY29uc3QgcmVxdWlyZWROb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZXF1aXJlZE5vdGUuY2xhc3NMaXN0LmFkZCgncmVxdWlyZWRub3RlJyk7XG4gIHJlcXVpcmVkTm90ZS50ZXh0Q29udGVudCA9ICcqID0gcmVxdWlyZWQnO1xuICAvLyBwdXQgaXQgdG9nZXRoZXJcbiAgZWRpdFRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybUhlYWRpbmcpO1xuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlTGFiZWwpO1xuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcbiAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcbiAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsKTtcbiAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrQXNzb2NpYXRlZFByb2plY3RMYWJlbCk7XG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrQXNzb2NpYXRlZFByb2plY3QpO1xuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChyZXF1aXJlZE5vdGUpO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrU3VibWl0QnV0dG9uKTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VGFza0NhbmNlbEJ1dHRvbik7XG4gIGVkaXRUYXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0pO1xuICAvLyBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiBjYW5jZWwgaXMgY2xpY2tlZFxuICBlZGl0VGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBsZXQgdGhlVGFza0VkaXRSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza2VkaXRyb3ctJHt0YXNrLnRhc2tVVUlEfWApO1xuICAgIHJlbW92ZUNoaWxkRWxlbWVudHModGhlVGFza0VkaXRSb3cpO1xuICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xuICB9KVxuICAvLyB0YXNrQm94LmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybUNvbnRhaW5lcik7XG4gIC8vIGV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG4gIGVkaXRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dGl0bGUnKS52YWx1ZTtcbiAgICAvLyBJZiB0aXRsZSBpcyBibGFua1xuICAgIGlmICh0VGl0bGUgPT0gJycpIHtcbiAgICAgIC8vIGFsZXJ0IHVzZXJcbiAgICAgIGFsZXJ0KCdwbGVhc2UgZmlsbCBvdXQgdGhlIHRpdGxlIScpO1xuICAgIC8vIElmIHRpdGxlIGlzIGZpbGxlZCBpblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzYXZlIGlucHV0IHZhbHVlcyBhcyB2YXJpYWJsZXNcbiAgICAgIC8vIHNhdmUgZGVzY3JpcHRpb25cbiAgICAgIGNvbnN0IHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgIC8vIHNhdmUgZHVlIGRhdGVcbiAgICAgIGxldCB0RHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZHVlZGF0ZScpLnZhbHVlO1xuICAgICAgLy8gaWYgZHVlIGRhdGUgaXMgYmxhbmssIHVwZGF0ZSB0byBObyBkdWUgZGF0ZVxuICAgICAgaWYgKHREdWVEYXRlID09ICcnKSB7XG4gICAgICAgIHREdWVEYXRlID0gU3RyaW5nKCdObyBkdWUgZGF0ZScpO1xuICAgICAgLy8gb3RoZXJ3aXNlIGNvbnZlcnQgaXQgdG8gbmljZXIgZm9ybWF0XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0RHVlRGF0ZSA9IChuZXcgRGF0ZSh0RHVlRGF0ZSkpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgfVxuICAgICAgLy8gc2F2ZSBwcmlvcml0eVxuICAgICAgY29uc3QgdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rwcmlvcml0eScpLnZhbHVlO1xuICAgICAgLy8gc2F2ZSBhc3NvY2lhdGVkIHByb2plY3Qgd2hpY2ggaXMgdGhlIFVVSURcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNzb2NpYXRlZHByb2plY3QnKS52YWx1ZSk7XG4gICAgICBjb25zdCB0QXNzb2NpYXRlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzc29jaWF0ZWRwcm9qZWN0JykudmFsdWU7XG4gICAgICAvLyBVcGRhdGUgVGFzayBEYXRhXG4gICAgICBjb25zb2xlLmxvZygnSW4gdGhlIGVkaXRUYXNrRm9ybSBzdWJtaXQgYnV0dG9uIGV2ZW50IGxpc3RlbmVyLCB3ZSBhcmUgbm93IHVwZGF0aW5nIHRoZSB0YXNrIHdpdGggYW55IGNoYW5nZXMuJylcbiAgICAgIHRhc2sudFRpdGxlID0gdFRpdGxlO1xuICAgICAgdGFzay50RGVzY3JpcHRpb24gPSB0RGVzY3JpcHRpb247XG4gICAgICBjb25zb2xlLmxvZyhgVGFzaydzIHByb2plY3Qgd2FzICR7dGFzay50QXNzb2NpYXRlZFByb2plY3R9YClcbiAgICAgIHRhc2sudEFzc29jaWF0ZWRQcm9qZWN0ID0gdEFzc29jaWF0ZWRQcm9qZWN0O1xuICAgICAgY29uc29sZS5sb2coYE5vdyB0YXNrJ3MgYXNzb2NpYXRlZCBwcm9qZWN0IGlzICR7dGFzay50QXNzb2NpYXRlZFByb2plY3R9YClcbiAgICAgIHRhc2sudER1ZURhdGUgPSB0RHVlRGF0ZTtcbiAgICAgIHRhc2sudFByaW9yaXR5ID0gdFByaW9yaXR5O1xuICAgICAgLy8gaWYgYXNzb2NpYXRlZCBwcm9qZWN0IGNoYW5nZWRcbiAgICAgIGNvbnNvbGUubG9nKGB0YXNrLnRBc3NvY2lhdGVkUHJvamVjdCBpcyAke3Rhc2sudEFzc29jaWF0ZWRQcm9qZWN0fSBhbmQgb2xkUHJvamVjdCBpcyAke29sZFByb2plY3R9YCk7XG4gICAgICBpZiAodGFzay50QXNzb2NpYXRlZFByb2plY3QgIT0gb2xkUHJvamVjdCkge1xuICAgICAgICAvLyBnZXQgaW5kZXggbnVtYmVyIG9mIG9sZCBwcm9qZWN0IGZyb20gcHJvamVjdCBhcnJheSBhbmQgcmVtb3ZlIHRhc2tcbiAgICAgICAgY29uc3QgaW5kZXhBID0gcHJvamVjdEFycmF5Lm1hcChlID0+IGUucHJvamVjdFVVSUQpLmluZGV4T2Yob2xkUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RBcnJheVtpbmRleEFdLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheVtpbmRleEFdLnRhc2tBcnJheSk7XG4gICAgICAgIC8vIGdldCBpbmRleCBudW1iZXIgb2YgbmV3IHByb2plY3QgYW5kIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IGluZGV4QiA9IHByb2plY3RBcnJheS5tYXAoZSA9PiBlLnByb2plY3RVVUlEKS5pbmRleE9mKHRhc2sudEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdEFycmF5W2luZGV4Ql0uYWRkVGFzayh0YXNrKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5W2luZGV4Ql0udGFza0FycmF5KTtcbiAgICAgIH1cbiAgICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xuICAgICAgLy8gZGlzcGxheSBwcm9qZWN0IHRoYXQgdGFzayB3YXMgc2F2ZWQgdG9cbiAgICAgIGNvbnN0IGluZGV4UCA9IHByb2plY3RBcnJheS5tYXAoZSA9PiBlLnByb2plY3RVVUlEKS5pbmRleE9mKHRhc2sudEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgICAgIGRpc3BsYXlPbmVQcm9qZWN0KHByb2plY3RBcnJheVtpbmRleFBdKTtcbiAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgfSk7XG4gIHJldHVybiBlZGl0VGFza0Zvcm1Db250YWluZXI7XG59XG4vLyBFTkQgRURJVCBUQVNLIEZPUk1cblxuZXhwb3J0IHsgbnBmb3JtLCBudGZvcm0sIGVkaXRUYXNrRm9ybSB9O1xuIiwiZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdSBjYW4gZG8gaXQnO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgeyBoZWFkZXIgfTsiLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXksIGFsbFRhc2tzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0bWFuYWdlclwiO1xuXG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuLy8gcnVuIHRoaXMgYWZ0ZXIgYW55IHRpbWUgeW91IHVwZGF0ZSBwcm9qZWN0QXJyYXkgLSBkZWxldGVUYXNrLCBzYXZlVGFzaywgc2F2ZVByb2plY3QsIGVkaXRUYXNrXG5jb25zdCBzZXRTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ3NldFN0b3JhZ2UgZnVuY3Rpb24gaGFzIHN0YXJ0ZWQuJylcbiAgY29uc29sZS5sb2coYHByb2plY3RBcnJheSBiZWluZyBzZW50IHRvIGxvY2FsU3RvcmFnZSBpcyAkeyhwcm9qZWN0QXJyYXkpfWApXG4gIGNvbnNvbGUubG9nKGBhbGxUYXNrc0FycmF5IGJlaW5nIHNlbnQgdG8gbG9jYWxTdG9yYWdlIGlzICR7KGFsbFRhc2tzQXJyYXkpfWApXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJyxKU09OLnN0cmluZ2lmeShhbGxUYXNrc0FycmF5KSlcbiAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgaGFzIGJlZW4gdXBkYXRlZC4nKVxufVxuXG4vLyBzaW1wbGVyIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlIGF2YWlsYWJpbGl0eVxuY29uc3Qgc2ltcGxlQ2hlY2tGb3JTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgdmFyIHN0b3JhZ2U7XG4gIGlmICh0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zb2xlLmxvZygndGhlcmUgaXMgbG9jYWwgc3RvcmFnZScpXG4gICAgc3RvcmFnZSA9ICd5ZXMnO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdTb3JyeSEgTm8gV2ViIFN0b3JhZ2Ugc3VwcG9ydC4nKVxuICAgIHN0b3JhZ2UgPSAnbm8nO1xuICB9XG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgeyBzZXRTdG9yYWdlLCBzaW1wbGVDaGVja0ZvclN0b3JhZ2UgfVxuIiwiZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICAvLyBtYWluLnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IHsgbWFpbiB9OyIsImltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL3NpZGViYXIuanMnO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdE5hdkxpbmtzIH0gZnJvbSAnLi9zaWRlYmFyLmpzJztcbmltcG9ydCB7IG1haW4gfSBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IHsgbWFpblByb2plY3RMYXlvdXQgfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RtYW5hZ2VyLmpzJztcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgZ2V0U3RvcmFnZSgpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICB1cGRhdGVQcm9qZWN0TmF2TGlua3MoKTtcbiAgbWFpblByb2plY3RMYXlvdXQoKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQgfTsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3ROYXZMaW5rc30gZnJvbSAnLi9zaWRlYmFyLmpzJztcbmltcG9ydCB7IGRpc3BsYXlPbmVQcm9qZWN0IH0gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQgeyBzZXRTdG9yYWdlLCBzaW1wbGVDaGVja0ZvclN0b3JhZ2UgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5qcyc7XG5cbnZhciBwcm9qZWN0QXJyYXkgPSBbXTtcbnZhciBhbGxUYXNrc0FycmF5ID0gW107XG5cbi8vIFBST0pFQ1QgQ0xBU1NcbmNsYXNzIFByb2plY3Qge1xuICB0YXNrQXJyYXkgPSBbXTtcbiAgcFRpdGxlO1xuICBwRGVzY3JpcHRpb247XG4gIHBEdWVEYXRlO1xuICBwU3RhdHVzO1xuICBwcm9qZWN0VVVJRDtcblxuICBjb25zdHJ1Y3RvciAocFRpdGxlLCBwRGVzY3JpcHRpb24sIHBEdWVEYXRlLCBwU3RhdHVzLCBwcm9qZWN0VVVJRCwgdGFza0FycmF5PVtdKSB7XG4gICAgdGhpcy5wVGl0bGUgPSBwVGl0bGU7XG4gICAgdGhpcy5wRGVzY3JpcHRpb24gPSBwRGVzY3JpcHRpb247XG4gICAgdGhpcy5wRHVlRGF0ZSA9IHBEdWVEYXRlO1xuICAgIHRoaXMucFN0YXR1cyA9IHBTdGF0dXM7XG4gICAgdGhpcy5wcm9qZWN0VVVJRCA9IHByb2plY3RVVUlEO1xuICAgIHRoaXMudGFza0FycmF5ID0gdGFza0FycmF5O1xuICAgIC8vIHRoaXMudGFza0FycmF5ID0gdGFza0FycmF5O1xuICAgIC8vIHRhc2tBcnJheSA9IFtdO1xuICB9XG5cbiAgc2V0U3RhdHVzKHBTdGF0dXMpIHtcbiAgICB0aGlzLnBTdGF0dXMgPSBwU3RhdHVzO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnBTdGF0dXM7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tBcnJheS5tYXAoZSA9PiBlLnRhc2tVVUlEKS5pbmRleE9mKHRhc2sudGFza1VVSUQpO1xuICAgIHRoaXMudGFza0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbi8vIEVORCBQUk9KRUNUIENMQVNTXG5cbi8vIFRBU0sgQ0xBU1NcbmNsYXNzIFRhc2sge1xuICB0VGl0bGU7XG4gIHREZXNjcmlwdGlvbjtcbiAgdER1ZURhdGU7XG4gIHRQcmlvcml0eTtcbiAgdFN0YXR1cztcbiAgdGFza1VVSUQ7XG4gIHRBc3NvY2lhdGVkUHJvamVjdDtcbiAgdEJveElEO1xuICBcbiAgY29uc3RydWN0b3IgKHRUaXRsZSwgdERlc2NyaXB0aW9uLCB0RHVlRGF0ZSwgdFByaW9yaXR5LCB0U3RhdHVzLCB0QXNzb2NpYXRlZFByb2plY3QpIHtcbiAgICB0aGlzLnRUaXRsZSA9IHRUaXRsZTtcbiAgICB0aGlzLnREZXNjcmlwdGlvbiA9IHREZXNjcmlwdGlvbjtcbiAgICB0aGlzLnREdWVEYXRlID0gdER1ZURhdGU7XG4gICAgdGhpcy50UHJpb3JpdHkgPSB0UHJpb3JpdHk7XG4gICAgdGhpcy50U3RhdHVzID0gdFN0YXR1cztcbiAgICB0aGlzLnRBc3NvY2lhdGVkUHJvamVjdCA9IHRBc3NvY2lhdGVkUHJvamVjdDtcbiAgICB0aGlzLnRhc2tVVUlEID0gdXVpZHY0KCk7XG4gIH1cblxuICBnZXRBc3NvY2lhdGVkUHJvamVjdCgpe1xuICAgIHJldHVybiB0aGlzLnRBc3NvY2lhdGVkUHJvamVjdDtcbiAgfVxuXG4gIHNldFN0YXR1cyh0U3RhdHVzKSB7XG4gICAgdGhpcy50U3RhdHVzID0gdFN0YXR1cztcbiAgfVxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy50U3RhdHVzO1xuICB9ICBcbn1cbi8vIEVORCBUQVNLIENMQVNTXG5cblxuLy8gZnVuY3Rpb24gdG8gc2V0IHVwIHByb2plY3RzIC0gcmVmYWN0b3IgdGhpcyBsYXRlclxuY29uc3QgZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGlzIGF2YWlsYWJsZVxuICBpZiAoc2ltcGxlQ2hlY2tGb3JTdG9yYWdlKCkgPT09ICd5ZXMnKXtcbiAgICAvLyBpZiBsb2NhbCBzdG9yYWdlIGhhcyBhIHByb2plY3RzIGFycmF5XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0cyBnb3R0ZW4gZnJvbSBsb2NhbFN0b3JhZ2UgaXMgJHtwcm9qZWN0c31gKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgc2Vjb25kIG9iamVjdCdzIHRpdGxlIGluIHByb2plY3RzIGlzICR7cHJvamVjdHNbMV0ucFRpdGxlfWApO1xuICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBuZXcgUHJvamVjdChwcm9qZWN0LnBUaXRsZSwgcHJvamVjdC5wRGVzY3JpcHRpb24sIHByb2plY3QucER1ZURhdGUsIHByb2plY3QucFN0YXR1cywgcHJvamVjdC5wcm9qZWN0VVVJRCwgcHJvamVjdC50YXNrQXJyYXkpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0QXJyYXkgaXMgJHtwcm9qZWN0QXJyYXl9YCk7XG4gICAgICAvLyBzZXRTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGNhdGNoIGFsbCBwcm9qZWN0XG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnLCdBIGNhdGNoLWFsbCBmb3IgdGFza3Mgbm90IGFzc2lnbmVkIHRvIGEgcGFydGljdWxhciBwcm9qZWN0LicsIHVuZGVmaW5lZCwgJ29wZW4nKTtcbiAgICAgIC8vIGFkZCBkZWZhdWx0IHByb2plY3QgdG8gcHJvamVjdCBhcnJheVxuICAgICAgcHJvamVjdEFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIH1cbiAgICAvLyBpZiBsb2NhbCBzdG9yYWdlIGhhcyB0YXNrcyBzYXZlZFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIHRhc2tzIGluIGxvY2FsIHN0b3JhZ2UnKVxuICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBIZXJlIGFyZSB0aGUgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlOiAke3Rhc2tzfWApO1xuICAgICAgLy8gYWxsVGFza3NBcnJheSA9IHRhc2tzLm1hcCgodGFzaykgPT4gc2F2ZU5ld1Rhc2sodGFzay50VGl0bGUsIHRhc2sudERlc2NyaXB0aW9uLCB0YXNrLnREdWVEYXRlLCB0YXNrLnRQcmlvcml0eSwgdGFzay50U3RhdHVzLCB0YXNrLnRBc3NvY2lhdGVkUHJvamVjdCkpXG4gICAgICBhbGxUYXNrc0FycmF5ID0gdGFza3M7XG4gICAgfSBcbiAgfSBlbHNlIHtcbiAgICAvLyBjcmVhdGUgZGVmYXVsdCBjYXRjaCBhbGwgcHJvamVjdFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsJ0EgY2F0Y2gtYWxsIGZvciB0YXNrcyBub3QgYXNzaWduZWQgdG8gYSBwYXJ0aWN1bGFyIHByb2plY3QuJywgdW5kZWZpbmVkLCAnb3BlbicpO1xuICAgIC8vIGFkZCBkZWZhdWx0IHByb2plY3QgdG8gcHJvamVjdCBhcnJheVxuICAgIHByb2plY3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfVxufTtcblxuLy8gRlVOQ1RJT04gVE8gU0FWRSBORVcgUFJPSkVDVFxuY29uc3Qgc2F2ZU5ld1Byb2plY3QgPSBmdW5jdGlvbihwVGl0bGUsIHBEZXNjcmlwdGlvbiwgcER1ZURhdGUsIHBTdGF0dXMsIHByb2plY3RVVUlEKXtcbiAgY29uc29sZS5sb2coJ3NhdmVOZXdQcm9qZWN0IGZ1bmN0aW9uIGhhcyBzdGFydGVkJyk7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwVGl0bGUsIHBEZXNjcmlwdGlvbiwgcER1ZURhdGUsIHBTdGF0dXMsIHByb2plY3RVVUlEKTtcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBjb25zb2xlLmxvZyhbcHJvamVjdEFycmF5XSk7XG4gIHNldFN0b3JhZ2UoKTtcbiAgLy8gYWRkUHJvamVjdFRvU2lkZWJhcihwVGl0bGUpO1xuICB1cGRhdGVQcm9qZWN0TmF2TGlua3MoKTtcbiAgZGlzcGxheU9uZVByb2plY3QocHJvamVjdCk7XG59XG4vLyBFTkQgRlVOQ1RJT04gVE8gU0FWRSBORVcgUFJPSkVDVFxuXG4vLyBGVU5DVElPTiBUTyBTQVZFIE5FVyBUQVNLXG5jb25zdCBzYXZlTmV3VGFzayA9IGZ1bmN0aW9uKHRUaXRsZSwgdERlc2NyaXB0aW9uLCB0RHVlRGF0ZSwgdFByaW9yaXR5LCB0U3RhdHVzLCB0QXNzb2NpYXRlZFByb2plY3Qpe1xuICAvLyBnZXRTdG9yYWdlKCk7XG4gIGNvbnNvbGUubG9nKCdzYXZlTmV3VGFzayBmdW5jdGlvbiBoYXMgc3RhcnRlZCcpO1xuICBjb25zb2xlLmxvZyhgdEFzc29jaWF0ZWRQcm9qZWN0IHBhc3NlZCB0byB0aGlzIGlzICR7dEFzc29jaWF0ZWRQcm9qZWN0fWApO1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodFRpdGxlLCB0RGVzY3JpcHRpb24sIHREdWVEYXRlLCB0UHJpb3JpdHksIHRTdGF0dXMsIHRBc3NvY2lhdGVkUHJvamVjdCk7XG4gIC8vIGZpbmQgYXNzb2NpYXRlZCBwcm9qZWN0IGluIHByb2plY3RBcnJheSB0byBhZGQgdGFzayB0byBpdHMgdGFza0FycmF5XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lm1hcChlID0+IGUucHJvamVjdFVVSUQpLmluZGV4T2YodEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coaW5kZXgpO1xuICBjb25zb2xlLmxvZyhgcHJvamVjdEFycmF5W2luZGV4XS5wVGl0bGUgZm9yIHRoZSB0YXNrIHlvdSBhcmUgc2F2aW5nJ3MgYXNzb2NpYXRlZCBwcm9qZWN0IGlzICR7cHJvamVjdEFycmF5W2luZGV4XS5wVGl0bGV9YCk7XG4gIGNvbnNvbGUubG9nKGBwcm9qZWN0QXJyYXlbaW5kZXhdLnRhc2tBcnJheSBmb3IgdGhlIHRhc2sgeW91IGFyZSBzYXZpbmcncyBhc3NvY2lhdGVkIHByb2plY3QgaXMgJHtwcm9qZWN0QXJyYXlbaW5kZXhdLnRhc2tBcnJheX1gKTtcbiAgLy8gYWRkIHRhc2sgdG8gcHJvamVjdCdzIHRhc2sgYXJyYXlcbiAgcHJvamVjdEFycmF5W2luZGV4XS5hZGRUYXNrKHRhc2spO1xuICAvLyBwcm9qZWN0QXJyYXlbaW5kZXhdLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAvLyBhZGQgdGFzayB0byBhbGxUYXNrc0FycmF5XG4gIGFsbFRhc2tzQXJyYXkucHVzaCh0YXNrKTtcbiAgc2V0U3RvcmFnZSgpO1xuICAvLyBkaXNwbGF5T25lUHJvamVjdChwcm9qZWN0QXJyYXlbaW5kZXhdKTtcbn1cbi8vIEVORCBGVU5DVElPTiBUTyBTQVZFIE5FVyBUQVNLXG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gIGNvbnNvbGUubG9nKCdkZWxldGUgdGFzayBmdW5jdGlvbiBoYXMgc3RhcnRlZCcpO1xuICAvLyByZW1vdmUgdGFzayBib3ggZnJvbSBET01cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tib3gtJHt0YXNrLnRhc2tVVUlEfWApLnJlbW92ZSgpO1xuICAvLyBnZXQgYXNzb2NpYXRlZCBwcm9qZWN0IGFuZCBkZWxldGUgdGFzayBmcm9tIGl0XG4gIGNvbnN0IGluZGV4QyA9IHByb2plY3RBcnJheS5tYXAoZSA9PiBlLnByb2plY3RVVUlEKS5pbmRleE9mKHRhc2sudEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgcHJvamVjdEFycmF5W2luZGV4Q10ucmVtb3ZlVGFzayh0YXNrKTtcbiAgLy8gZGVsZXRlIHRhc2sgZnJvbSBhbGxUYXNrc0FycmF5XG4gIGNvbnNvbGUubG9nKGBBbGwgdGFza3MgYXJyYXkgd2FzICR7YWxsVGFza3NBcnJheX1gKTtcbiAgY29uc3QgaW5kZXhBID0gYWxsVGFza3NBcnJheS5tYXAoZSA9PiBlLnRhc2tVVUlEKS5pbmRleE9mKHRhc2sudGFza1VVSUQpO1xuICBjb25zb2xlLmxvZyhpbmRleEEpO1xuICBhbGxUYXNrc0FycmF5LnNwbGljZShpbmRleEEsMSk7XG4gIGNvbnNvbGUubG9nKGBOb3cgYWxsIHRhc2tzIGFycmF5IGlzICR7YWxsVGFza3NBcnJheX1gKTtcbiAgLy8gY2xlYXIgdGhlIHZhbHVlcyBmb3IgYWxsIGtleXMgaW4gdGFza1xuICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh0YXNrKSk7XG4gIGNvbnNvbGUubG9nKHRhc2sudFRpdGxlKTsgLy8gc2hvd3MgdGl0bGVcbiAgT2JqZWN0LmtleXModGFzaykuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRhc2tba2V5XSA9IG51bGw7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh0YXNrKSk7XG4gIGNvbnNvbGUubG9nKHRhc2sudFRpdGxlKTsgLy8gc2hvd3MgbnVsbFxuICBzZXRTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCB7IHNhdmVOZXdQcm9qZWN0LCBzYXZlTmV3VGFzaywgcHJvamVjdEFycmF5LCBhbGxUYXNrc0FycmF5LCBkZWxldGVUYXNrLCBkaXNwbGF5T25lUHJvamVjdCwgZ2V0U3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgbnBmb3JtLCBudGZvcm0gfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vcHJvamVjdG1hbmFnZXIuanMnO1xuaW1wb3J0IHsgZGlzcGxheU9uZVByb2plY3QsIGRpc3BsYXlUYXNrc0R1ZVRvZGF5IH0gZnJvbSAnLi91aS5qcyc7XG4vLyBpbXBvcnQgeyBwaWNrUmFuZG9tVGFzayB9IGZyb20gJy4vdWkuanMnXG4vLyBpbXBvcnQgeyBkaXNwbGF5QVJhbmRvbVRhc2sgfSBmcm9tICcuL3VpLmpzJ1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRFbGVtZW50cyB9IGZyb20gJy4vdWkuanMnXG5cbmZ1bmN0aW9uIHNpZGViYXIoKSB7XG5cbiAgLy8gU0lERUJBUiBDT05UQUlORVJcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcblxuICAvLyBOQVZcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmlkID0gJ25hdic7XG5cbiAgLy8gU0hPUlRDVVRTIFNFQ1RJT05cbiAgY29uc3Qgc2hvcnRjdXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3J0Y3V0c0Rpdi5jbGFzc0xpc3QuYWRkKCduYXZzZWN0aW9uJyk7XG4gIGNvbnN0IHNob3J0Y3V0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHNob3J0Y3V0cy5jbGFzc0xpc3QuYWRkKCduYXZzZWN0aW9uaGVhZGVyJyk7XG4gIHNob3J0Y3V0cy5pZCA9ICdzaG9ydGN1dHMnO1xuICBzaG9ydGN1dHMudGV4dENvbnRlbnQgPSBcIlNob3J0Y3V0c1wiO1xuXG4gIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFkZE5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnbmF2bGluaycpO1xuICBhZGROZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Nob3J0Y3V0bmF2bGluaycpO1xuICBhZGROZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ25ld3Byb2plY3RhZGQnKTtcbiAgYWRkTmV3VGFzay50ZXh0Q29udGVudCA9ICcrIG5ldyB0YXNrJztcbiAgLy8gbWFrZSBwbHVzIHNpZ24gZGlmZmVyZW50IGNvbG9yID9cblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdmxpbmsnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdzaG9ydGN1dG5hdmxpbmsnKTtcbiAgaG9tZS5pZCA9ICdob21lbmF2JztcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIGNvbnN0IGR1ZVRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBkdWVUb2RheS5jbGFzc0xpc3QuYWRkKCduYXZsaW5rJyk7XG4gIGR1ZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3J0Y3V0bmF2bGluaycpO1xuICBkdWVUb2RheS5pZCA9ICdkdWV0b2RheW5hdic7XG4gIGR1ZVRvZGF5LnRleHRDb250ZW50ID0gXCJEdWUgVG9kYXlcIjtcbiAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIG5ldyBwcm9qZWN0IGJ1dHRvblxuICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRpc3BsYXlUYXNrc0R1ZVRvZGF5KCk7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGNsZWFyTG9jYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIC8vIGR1ZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ25hdmxpbmsnKTtcbiAgLy8gZHVlVG9kYXkuY2xhc3NMaXN0LmFkZCgnc2hvcnRjdXRuYXZsaW5rJyk7XG4gIC8vIGR1ZVRvZGF5LmlkID0gJ2NsZWFybG9jYWxuYXYnO1xuICAvLyBkdWVUb2RheS50ZXh0Q29udGVudCA9IFwiQ2xlYXIgTG9jYWwgU3RvcmFnZVwiO1xuXG4gIC8vIGNsZWFyTG9jYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAvLyAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAvLyB9KVxuXG4gIC8vIGNvbnN0IHJhbmRvbVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIC8vIHJhbmRvbVRhc2suY2xhc3NMaXN0LmFkZCgnbmF2bGluaycpO1xuICAvLyByYW5kb21UYXNrLmNsYXNzTGlzdC5hZGQoJ3Nob3J0Y3V0bmF2bGluaycpO1xuICAvLyByYW5kb21UYXNrLmlkID0gJ3JhbmRvbXRhc2snO1xuICAvLyByYW5kb21UYXNrLnRleHRDb250ZW50ID0gXCJSYW5kb20gVGFza1wiO1xuXG4gIC8vIHJhbmRvbVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgLy8gICBkaXNwbGF5QVJhbmRvbVRhc2soKTtcbiAgLy8gfSk7XG5cbiAgLy8gUFJPSkVDVFMgU0VDVElPTlxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCduYXZzZWN0aW9uJyk7XG4gIHByb2plY3RzRGl2LmlkID0gJ3Byb2plY3RzZGl2JztcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCduYXZzZWN0aW9uaGVhZGVyJyk7XG4gIHByb2plY3RzLmlkID0gJ3Byb2plY3RzbmF2c2VjdGlvbic7XG4gIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFkZE5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmF2bGluaycpO1xuICBhZGROZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ld3Byb2plY3RhZGQnKTtcbiAgYWRkTmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICcrIG5ldyBwcm9qZWN0JztcbiAgLy8gbWFrZSBwbHVzIHNpZ24gZGlmZmVyZW50IGNvbG9yID9cblxuICBjb25zdCBwcm9qZWN0TmF2TGlua1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdE5hdkxpbmtTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RuYXZsaW5rc2VjdGlvbicpO1xuICBwcm9qZWN0TmF2TGlua1NlY3Rpb24uaWQgPSAncHJvamVjdG5hdmxpbmtzZWN0aW9uJztcblxuICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIG5ldyBwcm9qZWN0IGJ1dHRvblxuICBhZGROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChucGZvcm0oKSk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChucGZvcm0oKSk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9KTtcblxuICAvLyBldmVudCBsaXN0ZW5lciBmb3IgbmV3IHRhc2sgYnV0dG9uXG4gIGFkZE5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG50Zm9ybShwcm9qZWN0QXJyYXlbMF0pKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSk7XG5cbiAgc2hvcnRjdXRzRGl2LmFwcGVuZENoaWxkKHNob3J0Y3V0cyk7XG4gIHNob3J0Y3V0c0Rpdi5hcHBlbmRDaGlsZChhZGROZXdUYXNrKTtcbiAgc2hvcnRjdXRzRGl2LmFwcGVuZENoaWxkKGhvbWUpO1xuICBzaG9ydGN1dHNEaXYuYXBwZW5kQ2hpbGQoZHVlVG9kYXkpO1xuICAvLyBzaG9ydGN1dHNEaXYuYXBwZW5kQ2hpbGQocmFuZG9tVGFzayk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdCk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYXZMaW5rU2VjdGlvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChzaG9ydGN1dHNEaXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbi8vIEZVTkNUSU9OIHBvcHVsYXRlIHNpZGViYXIgcHJvamVjdCBsaW5rcyBmcm9tIHByb2plY3RBcnJheVxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdE5hdkxpbmtzKCkge1xuICAvLyBjbGVhciBleGlzdGluZyBzaWRlYmFyIHByb2plY3QgbGlua3NcbiAgdmFyIHBuYXZsaW5rc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0bmF2bGlua3NlY3Rpb24nKTtcbiAgcmVtb3ZlQ2hpbGRFbGVtZW50cyhwbmF2bGlua3NlY3Rpb24pO1xuICAvLyBnZXQgcHJvamVjdEFycmF5IGZyb20gbG9jYWwgc3RvcmFnZT9cbiAgLy8gY3JlYXRlIGxpbmsgZm9yIGVhY2ggcHJvamVjdCBpbiBwcm9qZWN0QXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VycmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY3VycmVudExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdG5hdmxpbmsnKTtcbiAgICBjdXJyZW50TGluay5jbGFzc0xpc3QuYWRkKCduYXZsaW5rJyk7XG4gICAgY3VycmVudExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ucFRpdGxlO1xuICAgIGN1cnJlbnRMaW5rLmlkID0gYGxpbmstJHtpfWA7XG4gICAgLy8gd2hlbiBlYWNoIGxpbmsgaXMgY2xpY2tlZCwgZmlsbCBtYWluIGFyZWEgd2l0aCBwcm9qZWN0IGluZm9cbiAgICBjdXJyZW50TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdhIHByb2plY3Qgd2FzIGNsaWNrZWQnKTtcbiAgICAgIHZhciBpbmRleCA9IGN1cnJlbnRMaW5rLmlkLnN1YnN0cmluZyg1KTtcbiAgICAgIGRpc3BsYXlPbmVQcm9qZWN0KHByb2plY3RBcnJheVtpbmRleF0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCBwcm9qZWN0IGxpbmsgdG8gc2lkZWJhclxuICAgIHBuYXZsaW5rc2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50TGluayk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2lkZWJhciwgdXBkYXRlUHJvamVjdE5hdkxpbmtzIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXksIGFsbFRhc2tzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0bWFuYWdlclwiO1xuaW1wb3J0IHsgbnRmb3JtIH0gZnJvbSBcIi4vZm9ybXNcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0bWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIjtcbmltcG9ydCBUcmFzaCBmcm9tICcuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XG5pbXBvcnQgUGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLWNpcmNsZS1ibGFjay5zdmcnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9pbWFnZXMvZWRpdC5zdmcnO1xuaW1wb3J0IE1hZ25pZnkgZnJvbSAnLi9pbWFnZXMvem9vbS1pbi5zdmcnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRFbGVtZW50cyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgIHBhcmVudC5maXJzdENoaWxkLnJlbW92ZSgpXG4gIH1cbn1cbi8vIExBWU9VVCBPRiBNQUlOIEFSRUFcblxuLy8gTEFZT1VUIFBST0pFQ1QgQVJFQVxuZnVuY3Rpb24gbWFpblByb2plY3RMYXlvdXQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICByZW1vdmVDaGlsZEVsZW1lbnRzKG1haW4pO1xuICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbWFpbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluaGVhZGVyJyk7XG4gIGNvbnN0IG1haW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWFpbmRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IG1haW5UYXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluVGFza0FyZWEuY2xhc3NMaXN0LmFkZCgnbWFpbnRhc2thcmVhJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkRlc2NyaXB0aW9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluVGFza0FyZWEpO1xufVxuLy8gRU5EIE1BSU4gUFJPSkVDVCBMQVlPVVRcblxuLy8gRklMTCBNQUlOIEhFQURFUlxuZnVuY3Rpb24gZmlsbE1haW5IZWFkZXIodGV4dCkge1xuICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5oZWFkZXInKTtcbiAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XG59XG4vLyBFTkQgRklMTCBNQUlOIEhFQURFUlxuXG4vLyBGSUxMIERFU0NSSVBUSU9OXG5mdW5jdGlvbiBmaWxsTWFpbkRlc2NyaXB0aW9uKHRleHQpIHtcbiAgY29uc3QgbWFpbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5kZXNjcmlwdGlvbicpO1xuICBtYWluRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuLy8gRU5EIEZJTEwgREVTQ1JJUFRJT05cblxuLy8gRElTUExBWSBUQVNLIElOIE1BSU4gQVJFQVxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICAvLyBnZXQgbWFpbiBhcmVhXG4gIGNvbnN0IG1haW5UYXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWludGFza2FyZWEnKTtcbiAgLy8gY3JlYXRlIHRhc2sgYm94XG4gIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCdtYWludGFza2JveCcpO1xuICBjb25zb2xlLmxvZyhgVGhlIHRhc2sgSUQgaXMgJHt0YXNrLnRhc2tVVUlEfWApO1xuICB0YXNrQm94LmlkID0gYHRhc2tib3gtJHt0YXNrLnRhc2tVVUlEfWA7XG4gIC8vIHB1dCB0YXNrIGJveCBpbiBtYWluIHRhc2sgYXJlYVxuICBtYWluVGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0JveCk7XG4gIC8vIGNyZWF0ZSB0YXNrIHJvd1xuICB0YXNrQm94LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tSb3codGFzaykpO1xuICAvLyBjcmVhdGUgZGV0YWlsIHJvdywgYXBwZW5kLCBhbmQgaGlkZSBpdFxuICBjb25zdCB0YXNrRGV0YWlsUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RldGFpbFJvdyk7XG4gIHRhc2tEZXRhaWxSb3cuaWQgPSBgdGFza2RldGFpbHJvdy0ke3Rhc2sudGFza1VVSUR9YDtcbiAgdGFza0RldGFpbFJvdy5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xuICAvLyBjcmVhdGUgZWRpdCByb3csIGFwcGVuZCwgYW5kIGhpZGUgaXRcbiAgY29uc3QgdGFza0VkaXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRWRpdFJvdyk7XG4gIHRhc2tFZGl0Um93LmlkID0gYHRhc2tlZGl0cm93LSR7dGFzay50YXNrVVVJRH1gOyBcbiAgdGFza0VkaXRSb3cuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcbn1cbi8vIEVORCBESVNQTEFZIFRBU0sgSU4gTUFJTiBBUkVBXG5cbi8vIE1BS0UgQSBUQVNLIFJPV1xuZnVuY3Rpb24gY3JlYXRlVGFza1Jvdyh0YXNrKSB7XG4gIC8vIGNyZWF0ZSB0YXNrIHJvd1xuICBjb25zdCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgnbWFpbnRhc2tyb3cnKTtcbiAgdGFza1Jvdy5pZCA9IChgdGFza3Jvdy0ke3Rhc2sudGFza1VVSUR9YCk7XG4gIC8vIGFzc2lnbiBjb2xvciBiYXNlZCBvbiBwcmlvcml0eVxuICBzd2l0Y2ggKHRhc2sudFByaW9yaXR5KSB7XG4gICAgY2FzZSAnVXJnZW50JzpcbiAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdwMicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgncDMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTG93JzpcbiAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgncDQnKTtcbiAgICAgICAgYnJlYWs7XG4gIH1cbiAgLy8gY3JlYXRlIHRhc2sgY2hlY2tib3ggZGl2IGluc2lkZSB0YXNrIHJvd1xuICBsZXQgdGFza0NoZWNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tDaGVja0JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrY2hlY2tib3hkaXYnKTtcbiAgLy8gdGFzayBjaGVja2JveCBsYWJlbFxuICBsZXQgdGFza0NoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrQ2hlY2tCb3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYGNoZWNrYm94LSR7dGFzay50YXNrVVVJRH1gKTtcbiAgdGFza0NoZWNrQm94TGFiZWwuY2xhc3NMaXN0LmFkZCgndGFza2NoZWNrYm94bGFiZWwnKTtcbiAgLy8gdGFza2NoZWNrYm94XG4gIGxldCB0YXNrQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrQ2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICB0YXNrQ2hlY2tCb3guaWQ9YGNoZWNrYm94LSR7dGFzay50YXNrVVVJRH1gO1xuICB0YXNrQ2hlY2tCb3guY2xhc3NMaXN0LmFkZCgndGFza2NoZWNrYm94Jyk7XG4gIC8vIGV2ZW50IGxpc3RlbmVyIGZvciB0YXNrIGNoZWNrYm94XG4gIHRhc2tDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAodGFza0NoZWNrQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJDaGVja2JveCBpcyBjaGVja2VkLi5cIik7XG4gICAgICB0YXNrVGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3VuZG9uZScpO1xuICAgICAgdGFza0R1ZURhdGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3VuZG9uZScpO1xuICAgICAgdGFza1RpdGxlRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKVxuICAgICAgdGFza0R1ZURhdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpXG4gICAgICAvLyBjaGFuZ2UgdGFzayBzdGF0dXMgdG8gY2xvc2VkXG4gICAgICB0YXNrLnRTdGF0dXMgPSAnY2xvc2VkJztcbiAgICAgIGNvbnNvbGUubG9nKGB0YXNrIHN0YXR1cyBpcyAke3Rhc2sudFN0YXR1c31gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza1RpdGxlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgIHRhc2tEdWVEYXRlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgIHRhc2tUaXRsZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgndW5kb25lJyk7XG4gICAgICB0YXNrRHVlRGF0ZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgndW5kb25lJyk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYm94IGlzIG5vdCBjaGVja2VkLi5cIik7XG4gICAgICAvLyBjaGFuZ2UgdGFzayBzdGF0dXMgdG8gb3BlblxuICAgICAgdGFzay50U3RhdHVzID0gJ29wZW4nO1xuICAgICAgY29uc29sZS5sb2coYHRhc2sgc3RhdHVzIGlzICR7dGFzay50U3RhdHVzfWApO1xuICAgIH1cbiAgfSk7XG4gIC8vIHRhc2sgaXRlbSBncmlkXG4gIGxldCB0YXNrSXRlbUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0l0ZW1HcmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tpdGVtZ3JpZCcpO1xuICAvLyB0YXNrIHRpdGxlXG4gIGxldCB0YXNrVGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0YXNrVGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tyb3dncmlkaXRlbScpXG4gIHRhc2tUaXRsZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgndGFza3Jvd3RpdGxlJylcbiAgdGFza1RpdGxlRGlzcGxheS5pZCA9IGB0YXNrcm93dGl0bGUtJHt0YXNrLnRhc2tVVUlEfWA7XG4gIHRhc2tUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnRUaXRsZTtcbiAgLy8gdGFzayBkdWUgZGF0ZVxuICBsZXQgdGFza0R1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0YXNrRHVlRGF0ZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgndGFza3Jvd2dyaWRpdGVtJylcbiAgdGFza0R1ZURhdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tyb3dkdWVkYXRlJylcbiAgdGFza0R1ZURhdGVEaXNwbGF5LmlkID0gYHRhc2tyb3dkdWVkYXRlLSR7dGFzay50YXNrVVVJRH1gO1xuICB0YXNrRHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnREdWVEYXRlO1xuICAvLyB0YXNrRHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSAobmV3IERhdGUodGFzay50RHVlRGF0ZSkpLnRvRGF0ZVN0cmluZygpO1xuICBjb25zb2xlLmxvZyhuZXcgRGF0ZSh0YXNrLnREdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywgeyB3ZWVrZGF5OlwibG9uZ1wiLCB5ZWFyOlwibnVtZXJpY1wiLCBtb250aDpcInNob3J0XCIsIGRheTpcIm51bWVyaWNcIn0pKVxuICBjb25zb2xlLmxvZyh0YXNrLnREdWVEYXRlKTtcbiAgLy8gRGVsZXRlIGljb25cbiAgY29uc3QgbXlUcmFzaCA9IG5ldyBJbWFnZSgpO1xuICBteVRyYXNoLnNyYyA9IFRyYXNoO1xuICBteVRyYXNoLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgbXlUcmFzaC5jbGFzc0xpc3QuYWRkKCd0YXNrcm93Z3JpZGl0ZW0nKTtcbiAgbGV0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrcm93aWNvbicpO1xuICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKG15VHJhc2gpO1xuICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ1ggd2FzIGNsaWNrZWQnKTtcbiAgICBkZWxldGVUYXNrKHRhc2spO1xuICB9KTtcbiAgLy8gTWFnbmlmeWluZyBpY29uXG4gIGNvbnN0IG15TWFnbmlmeSA9IG5ldyBJbWFnZSgpO1xuICBteU1hZ25pZnkuc3JjID0gTWFnbmlmeTtcbiAgbXlNYWduaWZ5LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgbXlNYWduaWZ5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tyb3dncmlkaXRlbScpO1xuICBsZXQgdGFza01hZ25pZnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza01hZ25pZnkuY2xhc3NMaXN0LmFkZCgndGFza3Jvd2ljb24nKTtcbiAgdGFza01hZ25pZnkuYXBwZW5kQ2hpbGQobXlNYWduaWZ5KTtcbiAgY29uc29sZS5sb2coYHRhc2sgaWQgaXMgJHt0YXNrLnRhc2tVVUlEfWApO1xuICAvLyBFZGl0IGljb25cbiAgY29uc3QgbXlFZGl0ID0gbmV3IEltYWdlKCk7XG4gIG15RWRpdC5zcmMgPSBFZGl0O1xuICBteUVkaXQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICBteUVkaXQuY2xhc3NMaXN0LmFkZCgndGFza3Jvd2dyaWRpdGVtJyk7XG4gIGxldCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrcm93aWNvbicpO1xuICB0YXNrRWRpdC5hcHBlbmRDaGlsZChteUVkaXQpO1xuICAvLyBwdXQgdGhlIHJvdyB0b2dldGhlclxuICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tDaGVja0JveERpdik7XG4gIHRhc2tDaGVja0JveERpdi5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tCb3hMYWJlbCk7XG4gIHRhc2tDaGVja0JveExhYmVsLmFwcGVuZENoaWxkKHRhc2tDaGVja0JveCk7XG4gIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0l0ZW1HcmlkKTtcbiAgdGFza0l0ZW1HcmlkLmFwcGVuZENoaWxkKHRhc2tUaXRsZURpc3BsYXkpO1xuICB0YXNrSXRlbUdyaWQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVEaXNwbGF5KTtcbiAgdGFza0l0ZW1HcmlkLmFwcGVuZENoaWxkKHRhc2tNYWduaWZ5KTtcbiAgdGFza0l0ZW1HcmlkLmFwcGVuZENoaWxkKHRhc2tFZGl0KTtcbiAgdGFza0l0ZW1HcmlkLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuICAvLyBFVkVOVCBMSVNURU5FUiAtIHdoZW4geW91IGNsaWNrIG1hZ25pZnkgaWNvbiBpbiB0YXNrIHJvdyB0byBzZWUgZGV0YWlsc1xuICB0YXNrTWFnbmlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB0aGVUYXNrRWRpdFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrZWRpdHJvdy0ke3Rhc2sudGFza1VVSUR9YCk7XG4gICAgcmVtb3ZlQ2hpbGRFbGVtZW50cyh0aGVUYXNrRWRpdFJvdyk7XG4gICAgdGhlVGFza0VkaXRSb3cuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcbiAgICBsZXQgdGhlVGFza0RldGFpbFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrZGV0YWlscm93LSR7dGFzay50YXNrVVVJRH1gKTtcbiAgICB0aGVUYXNrRGV0YWlsUm93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5aGlkZGVuJyk7XG4gICAgcmVtb3ZlQ2hpbGRFbGVtZW50cyh0aGVUYXNrRGV0YWlsUm93KTtcbiAgICB0aGVUYXNrRGV0YWlsUm93LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEZXRhaWxBcmVhKHRhc2spKTtcbiAgfSk7XG4gIC8vIEVWRU5UIExJU1RFTkVSIC0gd2hlbiB5b3UgY2xpY2sgZWRpdCBpY29uIGluIHRhc2sgcm93XG4gIHRhc2tFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRoZVRhc2tEZXRhaWxSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza2RldGFpbHJvdy0ke3Rhc2sudGFza1VVSUR9YCk7XG4gICAgcmVtb3ZlQ2hpbGRFbGVtZW50cyh0aGVUYXNrRGV0YWlsUm93KTtcbiAgICB0aGVUYXNrRGV0YWlsUm93LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XG4gICAgbGV0IHRoZVRhc2tFZGl0Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tlZGl0cm93LSR7dGFzay50YXNrVVVJRH1gKTtcbiAgICByZW1vdmVDaGlsZEVsZW1lbnRzKHRoZVRhc2tFZGl0Um93KTtcbiAgICB0aGVUYXNrRWRpdFJvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseWhpZGRlbicpO1xuICAgIHRoZVRhc2tFZGl0Um93LmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybSh0YXNrKSk7XG4gIH0pO1xucmV0dXJuIHRhc2tSb3c7XG59XG4vLyBFTkQgTUFLRSBBIFRBU0sgUk9XXG5cbi8vIENSRUFURSBUQVNLIERFVEFJTCBBUkVBXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGV0YWlsQXJlYSh0YXNrKSB7XG4gIC8vIERldGFpbCBBcmVhIC0gc3RhcnRzIG91dCBoaWRkZW5cbiAgbGV0IHRhc2tEZXRhaWxBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEZXRhaWxBcmVhLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXRhaWxhcmVhJyk7XG4gIC8vIHRhc2tEZXRhaWxBcmVhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB0YXNrRGV0YWlsQXJlYS5pZCA9IGBkZXRhaWxhcmVhLSR7dGFzay50YXNrVVVJRH1gO1xuICAvLyBjcmVhdGUgaGVhZGluZ1xuICBjb25zdCB0YXNrRGV0YWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHRhc2tEZXRhaWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Rhc2sgRGV0YWlsczonXG4gIHRhc2tEZXRhaWxIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Zvcm1oZWFkaW5nJyk7XG4gIC8vIFRhc2sgRGV0YWlsIEdyaWRcbiAgbGV0IHRhc2tEZXRhaWxHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEZXRhaWxHcmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXRhaWxncmlkJyk7XG4gIC8vIFRpdGxlIFJvd1xuICBsZXQgZGV0YWlsVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsVGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxsYWJlbCcpO1xuICBkZXRhaWxUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gIGxldCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsdmFsdWUnKTtcbiAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRUaXRsZTtcbiAgLy8gRGVzY3JpcHRpb24gUm93XG4gIGxldCBkZXRhaWxEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RldGFpbGxhYmVsJyk7XG4gIGRldGFpbERlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgbGV0IGRldGFpbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWx2YWx1ZScpO1xuICBkZXRhaWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2sudERlc2NyaXB0aW9uO1xuICAvLyBEYXRlIFJvd1xuICBsZXQgZGV0YWlsRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGV0YWlsbGFiZWwnKTtcbiAgZGV0YWlsRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gIGxldCBkZXRhaWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEYXRlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHZhbHVlJyk7XG4gIGRldGFpbERhdGUudGV4dENvbnRlbnQgPSB0YXNrLnREdWVEYXRlO1xuICAvLyBQcmlvcml0eSBSb3dcbiAgbGV0IGRldGFpbFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbFByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZGV0YWlsbGFiZWwnKTtcbiAgZGV0YWlsUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICBsZXQgZGV0YWlsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHZhbHVlJyk7XG4gIGRldGFpbFByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay50UHJpb3JpdHk7XG4gIC8vIFByb2plY3QgUm93XG4gIGxldCBkZXRhaWxQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbFByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxsYWJlbCcpO1xuICBkZXRhaWxQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdDonO1xuICBsZXQgZGV0YWlsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZXRhaWx2YWx1ZScpO1xuICAvL2FkZGVkIGNvZGUgYmVsb3cgdG8gZml4IGRpc3BsYXlpbmcgcHJvamVjdCBhZnRlciB0YXNrIGhhcyBiZWVuIGVkaXRlZFxuICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5tYXAoZSA9PiBlLnByb2plY3RVVUlEKS5pbmRleE9mKHRhc2sudEFzc29jaWF0ZWRQcm9qZWN0KTtcbiAgZGV0YWlsUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpbmRleF0ucFRpdGxlO1xuICAvLyBCdXR0b24gcm93XG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gIC8vIEJ1dHRvbnNcbiAgbGV0IHRhc2tEZXRhaWxFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tEZXRhaWxFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXRhaWxidXR0b24nKTtcbiAgdGFza0RldGFpbEVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGxldCB0YXNrRGV0YWlsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGFza0RldGFpbENsb3NlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXRhaWxidXR0b24nKTtcbiAgdGFza0RldGFpbENsb3NlLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBlZGl0IGJ1dHRvblxuICAgICAgdGFza0RldGFpbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgZGV0YWlsIGVkaXQgYnV0dG9uIHdhcyBjbGlja2VkJyk7XG4gICAgICAgIGxldCB0aGVUYXNrRGV0YWlsUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tkZXRhaWxyb3ctJHt0YXNrLnRhc2tVVUlEfWApO1xuICAgICAgICByZW1vdmVDaGlsZEVsZW1lbnRzKHRoZVRhc2tEZXRhaWxSb3cpO1xuICAgICAgICB0aGVUYXNrRGV0YWlsUm93LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XG4gICAgICAgIGxldCB0aGVUYXNrRWRpdFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrZWRpdHJvdy0ke3Rhc2sudGFza1VVSUR9YCk7XG4gICAgICAgIHJlbW92ZUNoaWxkRWxlbWVudHModGhlVGFza0VkaXRSb3cpO1xuICAgICAgICB0aGVUYXNrRWRpdFJvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseWhpZGRlbicpO1xuICAgICAgICB0aGVUYXNrRWRpdFJvdy5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0odGFzaykpO1xuICAgICAgfSk7XG4gICAgICAvLyBldmVudCBsaXN0ZW5lciBmb3IgY2xvc2UgYnV0dG9uXG4gICAgICB0YXNrRGV0YWlsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgZGV0YWlsIGNsb3NlIGJ1dHRvbiB3YXMgY2xpY2tlZCcpO1xuICAgICAgICByZW1vdmVDaGlsZEVsZW1lbnRzKHRhc2tEZXRhaWxBcmVhKTtcbiAgICAgICAgdGFza0RldGFpbEFyZWEuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcbiAgICAgIH0pO1xuICAvLyBwdXQgZGV0YWlsIGFyZWEgdG9nZXRoZXJcbiAgdGFza0RldGFpbEFyZWEuYXBwZW5kQ2hpbGQodGFza0RldGFpbEhlYWRpbmcpO1xuICB0YXNrRGV0YWlsQXJlYS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsR3JpZCk7XG4gIHRhc2tEZXRhaWxHcmlkLmFwcGVuZENoaWxkKGRldGFpbFRpdGxlTGFiZWwpO1xuICB0YXNrRGV0YWlsR3JpZC5hcHBlbmRDaGlsZChkZXRhaWxUaXRsZSk7XG4gIHRhc2tEZXRhaWxHcmlkLmFwcGVuZENoaWxkKGRldGFpbERlc2NyaXB0aW9uTGFiZWwpO1xuICB0YXNrRGV0YWlsR3JpZC5hcHBlbmRDaGlsZChkZXRhaWxEZXNjcmlwdGlvbik7XG4gIHRhc2tEZXRhaWxHcmlkLmFwcGVuZENoaWxkKGRldGFpbERhdGVMYWJlbCk7XG4gIHRhc2tEZXRhaWxHcmlkLmFwcGVuZENoaWxkKGRldGFpbERhdGUpO1xuICB0YXNrRGV0YWlsR3JpZC5hcHBlbmRDaGlsZChkZXRhaWxQcmlvcml0eUxhYmVsKTtcbiAgdGFza0RldGFpbEdyaWQuYXBwZW5kQ2hpbGQoZGV0YWlsUHJpb3JpdHkpO1xuICB0YXNrRGV0YWlsR3JpZC5hcHBlbmRDaGlsZChkZXRhaWxQcm9qZWN0TGFiZWwpO1xuICB0YXNrRGV0YWlsR3JpZC5hcHBlbmRDaGlsZChkZXRhaWxQcm9qZWN0KTtcbiAgdGFza0RldGFpbEdyaWQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbEVkaXQpO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxDbG9zZSk7XG4gIHJldHVybiB0YXNrRGV0YWlsQXJlYTtcbn1cblxuLy8gRElTUExBWSBBIFBST0pFQ1QgSU4gTUFJTiBBUkVBXG5mdW5jdGlvbiBkaXNwbGF5T25lUHJvamVjdChwcm9qZWN0KXtcbiAgY29uc29sZS5sb2coYFRoZSBsZW5ndGggb2YgdGhlIHByb2plY3QgdG8gZGlzcGxheSdzIHRhc2tBcnJheSBpcyAke3Byb2plY3QudGFza0FycmF5Lmxlbmd0aH1gKTtcblxuICBtYWluUHJvamVjdExheW91dCgpO1xuICBjb25zdCBtYWluVGFza0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbnRhc2thcmVhJyk7XG5cbiAgLy8gaW4gdGhpcyBmdW5jdGlvbiwgaXQgYXBwZW5kcyBpdCB0byBtYWluXG4gIGZpbGxNYWluSGVhZGVyKHByb2plY3QucFRpdGxlKTtcblxuICAvLyBkaXNwbGF5IHByb2plY3QgZGVzY3JpcHRpb25cbiAgZmlsbE1haW5EZXNjcmlwdGlvbihwcm9qZWN0LnBEZXNjcmlwdGlvbik7XG5cbiAgLy8gbG9vcCBvdmVyIHRoaXMgcHJvamVjdCdzIHRhc2sgYXJyYXlcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGRpc3BsYXlUYXNrKHByb2plY3QudGFza0FycmF5W2ldKTtcbiAgfVxuXG4gIC8vIGFkZCByb3cgd2l0aCBhbiBhZGQgdGFzayBidXR0b24gdGhhdCBzYXZlcyB0YXNrIHRvIHRoaXMgcHJvamVjdFxuICBjb25zdCBhZGRUYXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFRhc2tSb3cuY2xhc3NMaXN0LmFkZCgnbWFpbnRhc2tyb3cnKTtcbiAgYWRkVGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrcm93Jyk7XG5cbiAgLy8gaW5zaWRlIHJvdywgYWRkIHBsdXMgc2lnbiBvbiB0aGUgbGVmdFxuICBjb25zdCBteVBsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgbXlQbHVzLnNyYyA9IFBsdXM7XG4gIG15UGx1cy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gIG15UGx1cy5jbGFzc0xpc3QuYWRkKCd0YXNrcm93Z3JpZGl0ZW0nKTtcblxuICAvLyBhZGQgYWRkIHRhc2sgYnV0dG9uXG4gIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrcCcpO1xuICBhZGRUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrcm93Z3JpZGl0ZW0nKTtcbiAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSAnQWRkIHRhc2sgLi4uJztcbiAgYWRkVGFza1RleHQuaWQgPSBgYWRkdG9wcm9qZWN0JHtwcm9qZWN0LnByb2plY3RVVUlEfTtgXG5cbiAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBhIHRhc2tcbiAgYWRkVGFza1Jvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobnRmb3JtKHByb2plY3QpKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pO1xuXG4gIC8vIHB1dCBwbHVzIHNpZ24gYW5kIGJ1dHRvbiBpbnNpZGUgcm93XG4gIGFkZFRhc2tSb3cuYXBwZW5kQ2hpbGQobXlQbHVzKTtcbiAgYWRkVGFza1Jvdy5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG5cbiAgLy8gcHV0IHJvdyBhdCB0aGUgZW5kIG9mIHRhc2sgbGlzdFxuICBtYWluVGFza0FyZWEuYXBwZW5kQ2hpbGQoYWRkVGFza1Jvdyk7XG59XG5cbi8vIEZPUiBMQVRFUlxuLy8gUkFORE9NIFRBU0tcbi8vIGZ1bmN0aW9uIHBpY2tSYW5kb21UYXNrKCkge1xuLy8gICAvLyBzZXQgbWluIGFuZCBtYXggYXMgbG93ZXN0IGFuZCBoaWdoZXN0IGluZGV4IG51bWJlcnNcbi8vICAgdmFyIG1pbiA9IDA7XG4vLyAgIHZhciBtYXggPSBhbGxUYXNrc0FycmF5Lmxlbmd0aC0xO1xuLy8gICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbi8vICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4vLyAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbi8vICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGluZGV4IG51bWJlclxuLy8gICBjb25zb2xlLmxvZyhhbGxUYXNrc0FycmF5W3JhbmRvbUluZGV4XSk7XG4vLyAgIHJldHVybiByYW5kb21JbmRleDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZGlzcGxheUFSYW5kb21UYXNrKCkge1xuLy8gICByZW1vdmVDaGlsZEVsZW1lbnRzKG1haW4pO1xuLy8gICAvLyBwaWNrIHJhbmRvbSB0YXNrIGZyb20gYWxsVGFza3NBcnJheVxuLy8gICBsZXQgcmFuZG9tSW5kZXggPSBwaWNrUmFuZG9tVGFzaygpO1xuLy8gICAvLyBjcmVhdGUgaGVhZGVyIGZvciBtYWluIGFyZWFcbi8vICAgZmlsbE1haW5IZWFkZXIoJ1JhbmRvbSBUYXNrJyk7XG4vLyAgIC8vIGNyZWF0ZSByb3cgZm9yIHJhbmRvbSB0YXNrXG4vLyAgIGNyZWF0ZVRhc2tSb3coYWxsVGFza3NBcnJheVtyYW5kb21JbmRleF0pO1xuLy8gfVxuXG4vLyBESVNQTEFZIFRBU0tTIERVRSBUT0RBWVxuY29uc3QgZGlzcGxheVRhc2tzRHVlVG9kYXkgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coYWxsVGFza3NBcnJheS5sZW5ndGgpXG4gIGNvbnNvbGUubG9nKCdkaXNwbGF5VGFza3NEdWVUb2RheSBoYXMgc3RhcnRlZCcpO1xuICBtYWluUHJvamVjdExheW91dCgpO1xuICBmaWxsTWFpbkhlYWRlcignVGFza3MgRHVlIFRvZGF5Jyk7XG4gIGZpbGxNYWluRGVzY3JpcHRpb24oJ0hlcmUgaXMgYSBsaXN0IG9mIHRhc2tzIGR1ZSB0b2RheS4nKTtcbiAgYWxsVGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzay50VGl0bGUpO1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50VGltZSBpcyAke2N1cnJlbnRUaW1lfSBhbmQgdGFzay50RHVlRGF0ZSBpcyAke3Rhc2sudER1ZURhdGV9YCk7XG4gICAgaWYgKHRhc2sudER1ZURhdGUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IG1haW5Qcm9qZWN0TGF5b3V0LCByZW1vdmVDaGlsZEVsZW1lbnRzLCBkaXNwbGF5T25lUHJvamVjdCwgbWFpbiwgY3JlYXRlVGFza1JvdywgZGlzcGxheVRhc2tzRHVlVG9kYXkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFnZWxvYWQnO1xuXG5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9