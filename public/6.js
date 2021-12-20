(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


var _createNamespacedHelp = Object(vuex__WEBPACK_IMPORTED_MODULE_1__["createNamespacedHelpers"])('admin'),
    mapActions = _createNamespacedHelp.mapActions;

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      count: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.userCount();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, mapActions(['users'])), {}, {
    userCount: function userCount() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.users();

              case 3:
                res = _context2.sent;
                _this2.count = res.data;
                console.log(res);
                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "mt-10 " }, [
      _c("h3", { staticClass: "text-h4" }, [
        _c("span", { staticClass: "font-bold text-blue" }, [
          _vm._v("Hi " + _vm._s(_vm.$store.state.auth.user.name) + ",")
        ]),
        _vm._v(" Welcome back 🤗")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap my-5" }, [
        _c("div", { staticClass: "lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                " flex items-center justify-between bg-white rounded p-5\n                 mr-2"
            },
            [
              _c("div", {}, [
                _c("p", { staticClass: "text-h4 font-bold" }, [
                  _vm._v(_vm._s(_vm.count.class))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-medium my-1 text-gray-grayer" }, [
                  _vm._v("Classes")
                ])
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4 " }, [
          _c(
            "div",
            {
              staticClass:
                " flex items-center justify-between bg-white rounded p-5\n                 mx-2"
            },
            [
              _c("div", {}, [
                _c("p", { staticClass: "text-h4 font-bold" }, [
                  _vm._v(_vm._s(_vm.count.student))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-medium my-1 text-gray-grayer" }, [
                  _vm._v("Learners")
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                " flex items-center justify-between bg-white rounded p-5\n                 mx-2"
            },
            [
              _c("div", {}, [
                _c("p", { staticClass: "text-h4 font-bold" }, [
                  _vm._v(_vm._s(_vm.count.tutor))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-medium my-1 text-gray-grayer" }, [
                  _vm._v("Tutors")
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                " flex items-center justify-between bg-white rounded p-5\n                mr-2"
            },
            [
              _c("div", {}, [
                _c("p", { staticClass: "text-h4 font-bold" }, [
                  _vm._v(_vm._s(_vm.count.guardian))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-medium my-1 text-gray-grayer" }, [
                  _vm._v("Guardian/Parent")
                ])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-large text-blue mt-4" }, [
        _vm._v("Active Tutors")
      ]),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "bg-red opacity-90 flex items-center justify-center rounded-full h-16 w-16"
      },
      [
        _c("img", {
          staticClass: "w-10 h-10",
          attrs: { src: "/img/icon/seminar.svg", alt: "seminar" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "bg-warning opacity-90 flex items-center justify-center rounded-full h-16 w-16"
      },
      [
        _c("img", {
          staticClass: "w-10 h-10",
          attrs: { src: "/img/icon/graduate.svg", alt: "seminar" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "bg-blue-deep opacity-90 flex items-center justify-center rounded-full h-16 w-16"
      },
      [
        _c("img", {
          staticClass: "w-10 h-10",
          attrs: { src: "/img/icon/tutor.svg", alt: "seminar" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "bg-gray-grayer opacity-90 flex items-center justify-center rounded-full h-16 w-16"
      },
      [
        _c("img", {
          staticClass: "w-10 h-10",
          attrs: { src: "/img/icon/team.svg", alt: "seminar" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "my-3 bg-white h-64 rounded-md px-4 py-2" },
      [
        _c("table", { staticClass: "table w-full" }, [
          _c("tr", { staticClass: "border-b border-gray font-semibold" }, [
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [
              _vm._v("Name")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [
              _vm._v("Class")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [
              _vm._v("Guardian")
            ])
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "border-b border-gray text-gray-grayer" }, [
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [
              _vm._v("Jane Doe")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [
              _vm._v("Pry 2")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-2 px-4 text-medium" }, [_vm._v("Layo")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/protected/admin/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/protected/admin/Index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2a6ec122& */ "./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/protected/admin/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2a6ec122& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/protected/admin/Index.vue?vue&type=template&id=2a6ec122&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2a6ec122___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);