(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var _createNamespacedHelp = Object(vuex__WEBPACK_IMPORTED_MODULE_1__["createNamespacedHelpers"])('auth'),
    mapGetters = _createNamespacedHelp.mapGetters; // import { RepositoryFactory as Repo } from "./../../../repository/RepositoryFactory";
// const PR = Repo.get('request');


var demoEvents = [{
  title: 'Sunny Out of Office',
  start: '2016-08-25',
  end: '2017-07-27'
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      fcEvents: demoEvents
    };
  },
  computed: _objectSpread({}, mapGetters(['getUser'])),
  mounted: function mounted() {//   console.log(this.$route);
    // const res  = await PR.getBooks();
    // console.log(res)

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    hardCopy: function hardCopy() {//
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "mt-10 " },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("full-calendar", { attrs: { events: _vm.fcEvents, locale: "en" } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap" }, [
      _c(
        "div",
        { staticClass: "lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5" },
        [
          _c(
            "div",
            {
              staticClass:
                " flex items-center bg-white rounded p-5\n                 "
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded"
                },
                [_c("i", { staticClass: "ri-book-line" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-4" }, [
                _c("p", { staticClass: "text-medium my-1" }, [
                  _vm._v("Total Classes")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-h4 font-bold" }, [_vm._v("1")])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "bg-gray-200 py-4 px-5" }, [
            _c("p", { staticClass: "text-blue text-medium font-bold" }, [
              _vm._v("View all")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5" },
        [
          _c(
            "div",
            {
              staticClass:
                " flex items-center bg-white rounded p-5\n                 "
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded"
                },
                [_c("i", { staticClass: "ri-book-line" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-4" }, [
                _c("p", { staticClass: "text-medium my-1" }, [
                  _vm._v("Total Learners")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-h4 font-bold" }, [_vm._v("8")])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "bg-gray-200 py-4 px-5" }, [
            _c("p", { staticClass: "text-blue text-medium font-bold" }, [
              _vm._v("View all")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5" },
        [
          _c(
            "div",
            {
              staticClass:
                " flex items-center bg-white rounded p-5\n                 "
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded"
                },
                [_c("i", { staticClass: "ri-book-line" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-4" }, [
                _c("p", { staticClass: "text-medium my-1" }, [
                  _vm._v("Total tutors")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-h4 font-bold" }, [_vm._v("2")])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "bg-gray-200 py-4 px-5" }, [
            _c("p", { staticClass: "text-blue text-medium font-bold" }, [
              _vm._v("View all")
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/protected/students/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/protected/students/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3da859fb& */ "./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/protected/students/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/students/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3da859fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/students/Index.vue?vue&type=template&id=3da859fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3da859fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);