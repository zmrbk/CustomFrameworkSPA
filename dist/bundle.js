/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.component.js":
/*!******************************!*\
  !*** ./app/app.component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appComponent: () => (/* binding */ appComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n/* harmony import */ var _common_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/app.header */ \"./app/common/app.header.js\");\n\r\n\r\n\r\nclass AppComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n  constructor(config) {\r\n    super(config);\r\n  }\r\n}\r\n\r\nconst appComponent = new AppComponent({\r\n  selector: \"app-root\",\r\n  template: `\r\n    <header></header>\r\n    <router-outlet></router-outlet> \r\n  `,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/app.component.js?");

/***/ }),

/***/ "./app/app.module.js":
/*!***************************!*\
  !*** ./app/app.module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appModule: () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./app/app.component.js\");\n/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ \"./app/app.routes.js\");\n/* harmony import */ var _common_app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/app.header */ \"./app/common/app.header.js\");\n\r\n\r\n\r\n\r\n\r\nclass AppModule extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMModule {\r\n  constructor(config) {\r\n    super(config);\r\n  }\r\n}\r\n\r\nconst appModule = new AppModule({\r\n  components: [_common_app_header__WEBPACK_IMPORTED_MODULE_3__.appHeader],\r\n  bootstrap: _app_component__WEBPACK_IMPORTED_MODULE_1__.appComponent,\r\n  routes: _app_routes__WEBPACK_IMPORTED_MODULE_2__.appRoutes,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/app.module.js?");

/***/ }),

/***/ "./app/app.routes.js":
/*!***************************!*\
  !*** ./app/app.routes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appRoutes: () => (/* binding */ appRoutes)\n/* harmony export */ });\n/* harmony import */ var _common_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/not-found.component */ \"./app/common/not-found.component.js\");\n/* harmony import */ var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.page.component */ \"./app/pages/home.page.component.js\");\n/* harmony import */ var _pages_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabs.page.component */ \"./app/pages/tabs.page.component.js\");\n\r\n\r\n\r\n\r\nconst appRoutes = [\r\n  {\r\n    path: \"\",\r\n    component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_1__.homePageComponent,\r\n  },\r\n  {\r\n    path: \"tabs\",\r\n    component: _pages_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__.tabsPageComponent,\r\n  },\r\n  {\r\n    path: \"**\",\r\n    component: _common_not_found_component__WEBPACK_IMPORTED_MODULE_0__.notFound,\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack:///./app/app.routes.js?");

/***/ }),

/***/ "./app/common/app.header.js":
/*!**********************************!*\
  !*** ./app/common/app.header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appHeader: () => (/* binding */ appHeader)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\r\n\r\nclass AppHeader extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n  constructor(config) {\r\n    super(config);\r\n  }\r\n}\r\n\r\nconst appHeader = new AppHeader({\r\n  selector: \"header\",\r\n  template: `\r\n    <nav class=\"indigo\">\r\n      <div class=\"nav-wrapper\">\r\n        <a href=\"#\" class=\"brand-logo\" style=\"margin-left: 20px;\" >Custom framework</a>\r\n        <ul class=\"right hide-on-med-and-down\">\r\n          <li><a href=\"#\">Home</a></li>\r\n          <li><a href=\"#tabs\">Tabs</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>      \r\n  `,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/common/app.header.js?");

/***/ }),

/***/ "./app/common/not-found.component.js":
/*!*******************************************!*\
  !*** ./app/common/not-found.component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notFound: () => (/* binding */ notFound)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\r\n\r\nclass NotFound extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n  constructor(config) {\r\n    super(config);\r\n  }\r\n}\r\n\r\nconst notFound = new NotFound({\r\n  selector: \"not-found\",\r\n  template: `\r\n    <div style=\"display: flex; align-items: center; justify-content: center\">\r\n      <div>\r\n        <h2 style=\"color: red;\">Page not found :(</h2>\r\n        <a href=\"#\" style=\"display: flex; justify-content: center\">Link to home page</a>\r\n      </div>\r\n    </div>    \r\n  `,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/common/not-found.component.js?");

/***/ }),

/***/ "./app/pages/home.page.component.js":
/*!******************************************!*\
  !*** ./app/pages/home.page.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePageComponent: () => (/* binding */ homePageComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\r\n\r\nclass HomePageComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n  constructor(config) {\r\n    super(config);\r\n\r\n    this.data = {\r\n      title: \"Main page\",\r\n      linkTitle: \"Link to the another page\",\r\n      ip: \"Loading...\",\r\n    };\r\n  }\r\n\r\n  events() {\r\n    return {\r\n      \"click .js-link\": \"goToTabs\",\r\n    };\r\n  }\r\n\r\n  goToTabs(event) {\r\n    event.preventDefault();\r\n    framework__WEBPACK_IMPORTED_MODULE_0__.router.navigate(\"tabs\");\r\n  }\r\n\r\n  afterInit() {\r\n    framework__WEBPACK_IMPORTED_MODULE_0__.http.get(\"https://api.ipify.org/?format=json\").then(({ ip }) => {\r\n      framework__WEBPACK_IMPORTED_MODULE_0__._.delay(2000).then(() => {\r\n        this.data.ip = ip;\r\n        this.render();\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nconst homePageComponent = new HomePageComponent({\r\n  selector: \"home-page\",\r\n  template: `\r\n  {{ip}}\r\n    <div class=\"row\">\r\n      <div class=\"col s6 offset-s3\" style=\"margin-top: 40px;\">\r\n        <div class=\"card blue-grey darken-1\">\r\n          <div class=\"card-content white-text\">\r\n            <span class=\"card-title\">Main page</span>\r\n            <p>I am a very simple card. I am good at containing small bits of information.\r\n            I am convenient because I require little markup to use effectively.</p>\r\n            <p>{{ip}}</p>\r\n          </div>\r\n          <div class=\"card-action\">\r\n            <a href=\"#\" class=\"js-link\">Link to the another page</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/pages/home.page.component.js?");

/***/ }),

/***/ "./app/pages/tabs.page.component.js":
/*!******************************************!*\
  !*** ./app/pages/tabs.page.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabsPageComponent: () => (/* binding */ tabsPageComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\r\n\r\nclass TabsPageComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n  constructor(config) {\r\n    super(config);\r\n  }\r\n\r\n  events() {\r\n    return {\r\n      \"click .collapsible\": \"onTabClick\",\r\n    };\r\n  }\r\n\r\n  onTabClick({ target }) {\r\n    if (!target.classList.contains(\"collapsible-header\")) return;\r\n\r\n    this.el.querySelectorAll(\".js-tab\").forEach((e) => e.classList.remove(\"active\"));\r\n    target.parentNode.classList.add(\"active\");\r\n  }\r\n}\r\n\r\nconst tabsPageComponent = new TabsPageComponent({\r\n  selector: \"tabs-page\",\r\n  template: `\r\n    <div class=\"row\">\r\n      <div class=\"col s6 offset-s3\">\r\n        <ul class=\"collapsible collapsible-accordion\" style=\"margin-top: 50px;\">\r\n          <li class=\"js-tab active\">\r\n            <div class=\"collapsible-header\">\r\n              <i class=\"material-icons\">filter_drama</i>First</div>\r\n            <div class=\"collapsible-body\">\r\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>\r\n            </div>\r\n          </li>\r\n          <li class=\"js-tab\">\r\n            <div class=\"collapsible-header\">\r\n              <i class=\"material-icons\">place</i>Second</div>\r\n            <div class=\"collapsible-body\">\r\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat.</span>\r\n            </div>\r\n          </li>\r\n          <li class=\"js-tab\">\r\n            <div class=\"collapsible-header\">\r\n              <i class=\"material-icons\">whatshot</i>Third</div>\r\n            <div class=\"collapsible-body\">\r\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat.</span>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  `,\r\n});\r\n\n\n//# sourceURL=webpack:///./app/pages/tabs.page.component.js?");

/***/ }),

/***/ "./framework/core/component/component.js":
/*!***********************************************!*\
  !*** ./framework/core/component/component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/utils */ \"./framework/tools/utils.js\");\n\r\n\r\nclass Component {\r\n  constructor(config) {\r\n    this.template = config.template;\r\n    this.selector = config.selector;\r\n    this.el = null;\r\n  }\r\n\r\n  render() {\r\n    initStyles(this.styles);\r\n\r\n    this.el = document.querySelector(this.selector);\r\n    if (!this.el) throw new Error(`Component with selector ${this.selector} wasn't found.`);\r\n    this.el.innerHTML = compileTemplate(this.template);\r\n\r\n    initEvents.call(this);\r\n  }\r\n}\r\n\r\nfunction initEvents() {\r\n  if (_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(this.events)) return;\r\n\r\n  let events = this.events();\r\n\r\n  Object.keys(events).forEach((key) => {\r\n    let listener = key.split(\" \");\r\n\r\n    this.el.querySelector(listener[1]).addEventListener(listener[0], this[events[key]].bind(this));\r\n  });\r\n}\r\n\r\nfunction compileTemplate(template, data) {\r\n  if (_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(data)) return template;\r\n\r\n  let regex = /\\{{(.*?)}}/g;\r\n\r\n  template = template.replace(regex, (str, d) => {\r\n    let key = d.trim();\r\n    return data[key];\r\n  });\r\n\r\n  return template;\r\n}\r\n\r\n// function initStyles(styles) {\r\n//   if (_.isUndefined(styles)) return;\r\n\r\n//   let style = document.createElement(\"style\");\r\n//   style.innerHTML = styles;\r\n//   document.head.appendChild(style);\r\n// }\r\n\n\n//# sourceURL=webpack:///./framework/core/component/component.js?");

/***/ }),

/***/ "./framework/core/component/init-components.js":
/*!*****************************************************!*\
  !*** ./framework/core/component/init-components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initComponents: () => (/* binding */ initComponents)\n/* harmony export */ });\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/utils */ \"./framework/tools/utils.js\");\n/* harmony import */ var _render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.component */ \"./framework/core/component/render.component.js\");\n\r\n\r\n\r\nfunction initComponents(bootstrap, components) {\r\n  if (_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(bootstrap)) {\r\n    throw new Error(`Bootstrap component is not defined`);\r\n  }\r\n\r\n  [bootstrap, ...components].forEach(_render_component__WEBPACK_IMPORTED_MODULE_1__.renderComponent);\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/component/init-components.js?");

/***/ }),

/***/ "./framework/core/component/render.component.js":
/*!******************************************************!*\
  !*** ./framework/core/component/render.component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComponent: () => (/* binding */ renderComponent)\n/* harmony export */ });\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/utils */ \"./framework/tools/utils.js\");\n\r\n\r\nfunction renderComponent(comp) {\r\n  if (!_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(comp.onInit)) comp.onInit();\r\n  comp.render();\r\n  if (!_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(comp.afterInit)) comp.afterInit();\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/component/render.component.js?");

/***/ }),

/***/ "./framework/core/functions/bootstrap.js":
/*!***********************************************!*\
  !*** ./framework/core/functions/bootstrap.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap)\n/* harmony export */ });\nfunction bootstrap(module) {\r\n  module.start();\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/functions/bootstrap.js?");

/***/ }),

/***/ "./framework/core/module.js":
/*!**********************************!*\
  !*** ./framework/core/module.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Module: () => (/* binding */ Module)\n/* harmony export */ });\n/* harmony import */ var _component_init_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/init-components */ \"./framework/core/component/init-components.js\");\n/* harmony import */ var _routing_init_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing/init-routing */ \"./framework/core/routing/init-routing.js\");\n\r\n\r\n\r\nclass Module {\r\n  constructor(config) {\r\n    this.components = config.components;\r\n    this.bootstrapComp = config.bootstrap;\r\n    this.routes = config.routes;\r\n  }\r\n\r\n  start() {\r\n    (0,_component_init_components__WEBPACK_IMPORTED_MODULE_0__.initComponents)(this.bootstrapComp, this.components);\r\n    (0,_routing_init_routing__WEBPACK_IMPORTED_MODULE_1__.initRouting)(this.routes);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/module.js?");

/***/ }),

/***/ "./framework/core/routing/init-routing.js":
/*!************************************************!*\
  !*** ./framework/core/routing/init-routing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initRouting: () => (/* binding */ initRouting)\n/* harmony export */ });\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/utils */ \"./framework/tools/utils.js\");\n/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing.module */ \"./framework/core/routing/routing.module.js\");\n\r\n\r\n\r\nfunction initRouting(routes) {\r\n  if (_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(routes)) return;\r\n\r\n  let routing = new _routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutingModule(routes);\r\n  routing.init();\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/routing/init-routing.js?");

/***/ }),

/***/ "./framework/core/routing/router.js":
/*!******************************************!*\
  !*** ./framework/core/routing/router.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   router: () => (/* binding */ router)\n/* harmony export */ });\nconst router = {\r\n  getUrl() {\r\n    return window.location.hash.slice(1);\r\n  },\r\n\r\n  navigate(hash) {\r\n    window.location.hash = hash;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./framework/core/routing/router.js?");

/***/ }),

/***/ "./framework/core/routing/routing.module.js":
/*!**************************************************!*\
  !*** ./framework/core/routing/routing.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RoutingModule: () => (/* binding */ RoutingModule)\n/* harmony export */ });\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/utils */ \"./framework/tools/utils.js\");\n/* harmony import */ var _component_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/render.component */ \"./framework/core/component/render.component.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./framework/core/routing/router.js\");\n\r\n\r\n\r\n\r\nclass RoutingModule {\r\n  constructor(routes) {\r\n    this.routes = routes;\r\n  }\r\n\r\n  init() {\r\n    window.addEventListener(\"hashchange\", renderRoute.bind(this));\r\n    renderRoute.call(this);\r\n  }\r\n}\r\n\r\nfunction renderRoute() {\r\n  let url = _router__WEBPACK_IMPORTED_MODULE_2__.router.getUrl();\r\n  let route = this.routes.find((eachRoute) => eachRoute.path === url);\r\n\r\n  if (_tools_utils__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(route)) {\r\n    route = this.routes.find((eachRoute) => eachRoute.path === \"**\");\r\n  }\r\n\r\n  document.querySelector(\r\n    \"router-outlet\",\r\n  ).innerHTML = `<${route.component.selector}></${route.component.selector}>`;\r\n  (0,_component_render_component__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(route.component);\r\n}\r\n\n\n//# sourceURL=webpack:///./framework/core/routing/routing.module.js?");

/***/ }),

/***/ "./framework/index.js":
/*!****************************!*\
  !*** ./framework/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WFMComponent: () => (/* reexport safe */ _core_component_component__WEBPACK_IMPORTED_MODULE_1__.Component),\n/* harmony export */   WFMModule: () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.Module),\n/* harmony export */   _: () => (/* reexport safe */ _tools_utils__WEBPACK_IMPORTED_MODULE_3__._),\n/* harmony export */   bootstrap: () => (/* reexport safe */ _core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap),\n/* harmony export */   http: () => (/* reexport safe */ _tools_http__WEBPACK_IMPORTED_MODULE_5__.http),\n/* harmony export */   router: () => (/* reexport safe */ _core_routing_router__WEBPACK_IMPORTED_MODULE_4__.router)\n/* harmony export */ });\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/module */ \"./framework/core/module.js\");\n/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/component/component */ \"./framework/core/component/component.js\");\n/* harmony import */ var _core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/functions/bootstrap */ \"./framework/core/functions/bootstrap.js\");\n/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/utils */ \"./framework/tools/utils.js\");\n/* harmony import */ var _core_routing_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/routing/router */ \"./framework/core/routing/router.js\");\n/* harmony import */ var _tools_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/http */ \"./framework/tools/http.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./framework/index.js?");

/***/ }),

/***/ "./framework/tools/http.js":
/*!*********************************!*\
  !*** ./framework/tools/http.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   http: () => (/* binding */ http)\n/* harmony export */ });\nclass Http {\r\n  get(url) {\r\n    return sendRequest(\"GET\", url);\r\n  }\r\n}\r\n\r\nfunction sendRequest(method, url) {\r\n  return fetch(url, { method }).then((response) => response.json());\r\n}\r\n\r\nconst http = new Http();\r\n\n\n//# sourceURL=webpack:///./framework/tools/http.js?");

/***/ }),

/***/ "./framework/tools/utils.js":
/*!**********************************!*\
  !*** ./framework/tools/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: () => (/* binding */ _)\n/* harmony export */ });\nconst _ = {\r\n  delay(ms = 1000) {\r\n    return new Promise((resolve, reject) => {\r\n      setTimeout(() => {\r\n        resolve();\r\n      }, ms);\r\n    });\r\n  },\r\n\r\n  isUndefined(d) {\r\n    return typeof d === \"undefined\";\r\n  },\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./framework/tools/utils.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ \"./app/app.module.js\");\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\r\n\r\n\r\nframework__WEBPACK_IMPORTED_MODULE_1__._.delay(1000).then(() => {\r\n  (0,framework__WEBPACK_IMPORTED_MODULE_1__.bootstrap)(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.appModule);\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;