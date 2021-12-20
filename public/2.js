(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Account.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var naija_state_local_government__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! naija-state-local-government */ "./node_modules/naija-state-local-government/index.js");
/* harmony import */ var naija_state_local_government__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(naija_state_local_government__WEBPACK_IMPORTED_MODULE_2__);


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
    mapActions = _createNamespacedHelp.mapActions;


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      state: {},
      lgas: {},
      errors: {},
      personal: true,
      welcome: false,
      education: false,
      certificate: false,
      referee: false,
      experience: false,
      verification: false,
      bank: false,
      form: {
        name: '',
        gender: '',
        address: '',
        date_of_birth: '',
        phone_number: '',
        email: '',
        password: '',
        password_confirmation: '',
        state: '',
        lga: '',
        cover_letter: '',
        profile_picture: '',
        university: '',
        course: '',
        cgpa: '',
        honor: '',
        start_year: '',
        end_year: '',
        degree_type: '',
        title: '',
        year: '',
        organization_name: '',
        position: '',
        enroll_date: '',
        enroll_end_date: '',
        description: '',
        identity_type: '',
        identity_number: '',
        document: '',
        referee_name: '',
        referee_relationship: '',
        referee_address: '',
        referee_email: '',
        referee_occupation: '',
        referee_phone_number: '',
        account_name: '',
        bank_name: '',
        account_number: '',
        tutor_id: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // this.handleState();
              _this.state = naija_state_local_government__WEBPACK_IMPORTED_MODULE_2___default.a.states();

              _this.handleLga();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    isReferee: function isReferee() {
      var data = this.form.referee_name && this.form.referee_relationship && this.form.address && this.form.address && this.form.referee_email && this.form.referee_occupation && this.form.referee_phone_number; // console.log(data)

      return data;
    },
    isPersonalComplete: function isPersonalComplete() {
      var data = this.form.name && this.form.email && this.form.gender && this.form.date_of_birth && this.form.address && this.form.phone_number && this.form.state && this.form.lga && this.form.password;
      return data;
    }
  },
  methods: _objectSpread(_objectSpread({}, mapActions(["signIn", "getState", 'getLga', 'tutor', 'saveEducation', 'saveExperience', 'saveCertificate', 'saveReferee', 'saveVerification', 'saveBank'])), {}, {
    handleTutorForm: function handleTutorForm() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.tutor(_this2.form);

              case 3:
                res = _context2.sent;

                _this2.$notify({
                  title: 'Success',
                  message: 'successful',
                  type: 'success'
                });

                _this2.personal = false;
                _this2.welcome = true;
                _this2.form.tutor_id = _this2.$store.state.auth.tutor.tutor.id;
                console.log(_this2.form.tutor_id);
                console.log(_this2.$store.state.auth.tutor.tutor);
                console.log(res);
                _context2.next = 18;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);

                _this2.$message.error(_context2.t0.response.data.message);

                _this2.errors = _context2.t0.response.data.errors;
                console.log(_context2.t0.response);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    },
    handleEducationForm: function handleEducationForm() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.form.tutor_id = _this3.$store.state.auth.tutor.tutor.id;
                _context3.next = 4;
                return _this3.saveEducation(_this3.form);

              case 4:
                res = _context3.sent;

                _this3.$swal({
                  icon: 'success',
                  text: 'Your Education has been saved',
                  showConfirmButton: false,
                  timer: 1500
                });

                _this3.form = {};
                console.log(res);
                _context3.next = 15;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);

                _this3.$message.error(_context3.t0.response.data.message);

                _this3.errors = _context3.t0.response.data.errors;
                console.log(_context3.t0.response);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    addWorkExperience: function addWorkExperience() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _this4.form.tutor_id = _this4.$store.state.auth.tutor.tutor.id;
                _context4.next = 4;
                return _this4.saveExperience(_this4.form);

              case 4:
                res = _context4.sent;

                _this4.$swal({
                  icon: 'success',
                  text: 'Your work experience has been saved',
                  showConfirmButton: false,
                  timer: 2500
                });

                _this4.form = {}; // this.errors = {};

                console.log(res);
                _context4.next = 15;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

                _this4.$message.error(_context4.t0.response.data.message);

                _this4.errors = _context4.t0.response.data.errors;
                console.log(_context4.t0.response);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }))();
    },
    addReferee: function addReferee() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _this5.form.tutor_id = _this5.$store.state.auth.tutor.tutor.id;
                _context5.next = 4;
                return _this5.saveReferee(_this5.form);

              case 4:
                res = _context5.sent;

                _this5.$swal({
                  icon: 'success',
                  text: 'Referee saved',
                  showConfirmButton: false,
                  timer: 2500
                });

                _this5.verification = true;
                _this5.referee = false;
                _this5.form = {};
                console.log(res);
                _context5.next = 17;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);

                _this5.$message.error(_context5.t0.response.data.message);

                _this5.errors = _context5.t0.response.data.errors;
                console.log(_context5.t0.response);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }))();
    },
    addBank: function addBank() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _this6.form.tutor_id = _this6.$store.state.auth.tutor.tutor.id;
                _context6.next = 4;
                return _this6.saveBank(_this6.form);

              case 4:
                res = _context6.sent;

                _this6.$swal({
                  icon: 'success',
                  text: 'Registration completed redirecting to login page.',
                  showConfirmButton: false,
                  timer: 2500
                });

                _this6.form = {};
                window.location.href = '/login';
                console.log(res);
                _context6.next = 16;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);

                _this6.$message.error(_context6.t0.response.data.message);

                _this6.errors = _context6.t0.response.data.errors;
                console.log(_context6.t0.response);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }))();
    },
    addCertificate: function addCertificate() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _this7.form.tutor_id = _this7.$store.state.auth.tutor.tutor.id;
                _context7.next = 4;
                return _this7.saveCertificate(_this7.form);

              case 4:
                res = _context7.sent;

                _this7.$swal({
                  icon: 'success',
                  text: 'Your certificate has been saved',
                  showConfirmButton: false,
                  timer: 2500
                });

                _this7.form = {};
                console.log(res);
                _context7.next = 15;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);

                _this7.$message.error(_context7.t0.response.data.message);

                _this7.errors = _context7.t0.response.data.errors;
                console.log(_context7.t0.response);

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 10]]);
      }))();
    },
    addVerification: function addVerification() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var fd, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _this8.form.tutor_id = _this8.$store.state.auth.tutor.tutor.id;
                fd = new FormData();
                fd.append('identity_type', _this8.form.identity_type);
                fd.append('identity_number', _this8.form.identity_number);
                fd.append('document', _this8.form.document);
                fd.append('tutor_id', _this8.form.tutor_id);
                _context8.next = 9;
                return _this8.saveVerification(fd);

              case 9:
                res = _context8.sent;

                _this8.$swal({
                  icon: 'success',
                  text: 'Successfully saved',
                  showConfirmButton: false,
                  timer: 2500
                });

                _this8.verification = false;
                _this8.bank = true;
                _this8.form = {};
                console.log(res);
                _context8.next = 22;
                break;

              case 17:
                _context8.prev = 17;
                _context8.t0 = _context8["catch"](0);

                _this8.$message.error(_context8.t0.response.data.message);

                _this8.errors = _context8.t0.response.data.errors;
                console.log(_context8.t0.response);

              case 22:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 17]]);
      }))();
    },
    cardUpload: function cardUpload(e) {
      this.form.document = e.target.files[0];
      console.log(e.target.files[0]);
    },
    handleState: function handleState() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this9.getState();

              case 2:
                res = _context9.sent;
                _this9.state = res; // console.log(res)

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    handleLga: function handleLga() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (_this10.form.state) {
                  // const res = await this.getLga({lga: this.form.state});
                  _this10.lgas = naija_state_local_government__WEBPACK_IMPORTED_MODULE_2___default.a.lgas(_this10.form.state).lgas;
                }

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    handleRegister: function handleRegister() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this11.signIn(_this11.form);

              case 3:
                res = _context11.sent;

                if (res.user.role === 'parent') {
                  _this11.$message.error('Oops, Please check your credentials.');
                }

                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);

                _this11.$message.error(_context11.t0.response.data.message);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 7]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".el-input{\n  display: block;\n}\n.el-date-editor.el-input, .el-date-editor.el-input__inner{\n  width:100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex flex-wrap bg-white rounded-md shadow relative",
      staticStyle: { "min-height": "104vh" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "lg:w-7/12 md:w-7/12 w-full mb-4 " }, [
        _c("div", { staticClass: "lg:px-10 py-10" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.personal,
                  expression: "personal"
                }
              ],
              staticClass: " px-5 pt-3 pb-6"
            },
            [
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Full name")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: { type: "text", placeholder: "Full name" },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["name"]
                        ) + " "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", {}, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Email Address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: { type: "email", placeholder: "Email Address" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["email"]) + " ")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Gender")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.gender,
                            expression: "form.gender"
                          }
                        ],
                        staticClass:
                          "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "gender",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "male" } }, [
                          _vm._v("Male")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "female" } }, [
                          _vm._v("Female")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "not" } }, [
                          _vm._v("Not specified")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["gender"]) + " ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c(
                    "div",
                    {},
                    [
                      _c(
                        "label",
                        { staticClass: "text-medium mb-3", attrs: { for: "" } },
                        [_vm._v("Date of birth *")]
                      ),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: { type: "date", placeholder: "Pick a day" },
                        model: {
                          value: _vm.form.date_of_birth,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date_of_birth", $$v)
                          },
                          expression: "form.date_of_birth"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-small text-red" }, [
                        _vm._v(_vm._s(_vm.errors["date_of_birth"]) + " ")
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c(
                    "div",
                    { staticClass: "lg:mr-2 md:mr-2" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-medium mb-3", attrs: { for: "" } },
                        [_vm._v("State")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "Select state" },
                          on: { change: _vm.handleLga },
                          model: {
                            value: _vm.form.state,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "state", $$v)
                            },
                            expression: "form.state"
                          }
                        },
                        _vm._l(_vm.state, function(item) {
                          return _c("el-option", {
                            key: item.id,
                            attrs: { label: item, value: item }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-small text-red" }, [
                        _vm._v(_vm._s(_vm.errors["state"]) + " ")
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c(
                    "div",
                    {},
                    [
                      _c(
                        "label",
                        { staticClass: "text-medium mb-3", attrs: { for: "" } },
                        [_vm._v("Local Govt")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "Select Local government" },
                          model: {
                            value: _vm.form.lga,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "lga", $$v)
                            },
                            expression: "form.lga"
                          }
                        },
                        _vm._l(_vm.lgas, function(item) {
                          return _c("el-option", {
                            key: item.id,
                            attrs: { label: item, value: item }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-small text-red" }, [
                        _vm._v(_vm._s(_vm.errors["lga"]) + " ")
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: { type: "password", placeholder: "*******" },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["password"]) + " ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", {}, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Confirm Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: { type: "password", placeholder: "*******" },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["password_confirmation"]) + " ")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.address,
                          expression: "form.address"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: {
                        type: "text",
                        placeholder: "plot 2, street 7 Lagos"
                      },
                      domProps: { value: _vm.form.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "address", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["address"]) + " ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", {}, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Phone number")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.phone_number,
                          expression: "form.phone_number"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: { type: "text", placeholder: "080*****" },
                      domProps: { value: _vm.form.phone_number },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "phone_number",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(_vm._s(_vm.errors["phone_number"]) + " ")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass:
                      "bg-blue py-3 px-8 text-white text-medium rounded-md w-40 ml-auto",
                    attrs: { disabled: !_vm.isPersonalComplete },
                    on: {
                      click: function() {
                        this$1.handleTutorForm()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            \n                            proceed\n                        "
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.welcome,
                  expression: "welcome"
                }
              ],
              staticClass: "px-5 pt-3 pb-6"
            },
            [
              _c(
                "h4",
                { staticClass: "text-large text-blue font-semibold mb-3" },
                [_vm._v("Hello, " + _vm._s(_vm.form.name))]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-medium leading-28" }, [
                _vm._v(
                  "\n                        \n                        Welcome to Heseg Academy tutor registration portal. This page contains a picture demo that will help you understand what the whole registration process entails. If you think you do not need to go through this brief, please click “Skip Demo” at the bottom of this page, and start your registration. However, we advise all prospective tutors to go through this page carefully to fully understand the entire process and avoid not being verified from the first instance due to corrections on their profile.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-5" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "bg-blue py-3 px-8 text-white text-medium rounded-md ",
                    on: {
                      click: function() {
                        this$1.education = true
                        this$1.welcome = false
                      }
                    }
                  },
                  [_vm._v("Proceed to registration")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.education,
                  expression: "education"
                }
              ],
              staticClass: "px-5 pt-3 pb-6"
            },
            [
              _c(
                "h4",
                {
                  staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
                },
                [
                  _vm._v(
                    "\n                        Education Information\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-small text-gray-grayer" }, [
                _vm._v(
                  "Note: You can add as many Educational information as possible"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("University")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.university,
                          expression: "form.university"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: {
                        type: "text",
                        placeholder: "Obafemi Awolowo University"
                      },
                      domProps: { value: _vm.form.university },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "university", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["university"]
                      ) + " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", {}, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Course")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.course,
                          expression: "form.course"
                        }
                      ],
                      staticClass:
                        "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                      attrs: {
                        type: "email",
                        placeholder: "Engineering Physics"
                      },
                      domProps: { value: _vm.form.course },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "course", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["course"]
                        ) + " "
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Degree type")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.degree_type,
                            expression: "form.degree_type"
                          }
                        ],
                        staticClass:
                          "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "degree_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "hnd" } }, [
                          _vm._v("HND")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "ond" } }, [
                          _vm._v("OND")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "msc" } }, [
                          _vm._v(" MSC")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "bsc" } }, [
                          _vm._v(" BSC")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["degree_type"]
                        ) + " "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c("div", {}, [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Class Honour")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.honor,
                            expression: "form.honor"
                          }
                        ],
                        staticClass:
                          "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "honor",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "first-class" } }, [
                          _vm._v("First Class")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "second-class" } }, [
                          _vm._v("Second Class")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "pass" } }, [
                          _vm._v(" Pass")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["honor"]
                        ) + " "
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5" }, [
                _c(
                  "label",
                  { staticClass: "text-medium mb-3", attrs: { for: "" } },
                  [_vm._v("Cgpa")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.cgpa,
                      expression: "form.cgpa"
                    }
                  ],
                  staticClass:
                    "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                  attrs: { type: "email", placeholder: "7.0" },
                  domProps: { value: _vm.form.cgpa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "cgpa", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("small", { staticClass: "text-small text-red" }, [
                  _vm._v(
                    _vm._s(
                      Object.keys(_vm.errors).length === 0
                        ? ""
                        : _vm.errors["cgpa"]
                    ) + " "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c(
                    "div",
                    { staticClass: "lg:mr-2 md:mr-2" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-medium mb-3", attrs: { for: "" } },
                        [_vm._v("Start Date")]
                      ),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: { type: "date", placeholder: "Pick a day" },
                        model: {
                          value: _vm.form.start_date,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "start_date", $$v)
                          },
                          expression: "form.start_date"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-small text-red" }, [
                        _vm._v(
                          _vm._s(
                            Object.keys(_vm.errors).length === 0
                              ? ""
                              : _vm.errors["start_date"]
                          ) + " "
                        )
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                  _c(
                    "div",
                    {},
                    [
                      _c(
                        "label",
                        { staticClass: "text-medium mb-3", attrs: { for: "" } },
                        [_vm._v("End date")]
                      ),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: { type: "date", placeholder: "Pick a day" },
                        model: {
                          value: _vm.form.end_date,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "end_date", $$v)
                          },
                          expression: "form.end_date"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-small text-red" }, [
                        _vm._v(
                          _vm._s(
                            Object.keys(_vm.errors).length === 0
                              ? ""
                              : _vm.errors["end_date"]
                          ) + " "
                        )
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "bg-blue py-3 px-8 text-white text-medium rounded-md",
                    on: { click: this.handleEducationForm }
                  },
                  [_vm._v("Add Qualification")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "bg-blue py-3 px-8 text-white text-medium rounded-md",
                    on: {
                      click: function() {
                        this$1.education = false
                        this$1.experience = true
                      }
                    }
                  },
                  [_vm._v("Proceed to next page")]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.experience,
                expression: "experience"
              }
            ],
            staticClass: "px-5 pt-3 pb-6"
          },
          [
            _c(
              "h4",
              {
                staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
              },
              [
                _vm._v(
                  "\n                    Work Experience\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "text-small text-gray-grayer" }, [
              _vm._v("Note: You can add as many Work Experience as possible")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Organization Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.organization_name,
                        expression: "form.organization_name"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Organization Name" },
                    domProps: { value: _vm.form.organization_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "organization_name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["organization_name"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Position")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.position,
                        expression: "form.position"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "email", placeholder: "Position" },
                    domProps: { value: _vm.form.position },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "position", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["position"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c(
                  "div",
                  { staticClass: "lg:mr-2 md:mr-2" },
                  [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Enroll date")]
                    ),
                    _vm._v(" "),
                    _c("el-date-picker", {
                      attrs: { type: "date", placeholder: "Pick a day" },
                      model: {
                        value: _vm.form.enroll_date,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "enroll_date", $$v)
                        },
                        expression: "form.enroll_date"
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["enroll_date"]
                        ) + " "
                      )
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("End date")]
                    ),
                    _vm._v(" "),
                    _c("el-date-picker", {
                      attrs: { type: "date", placeholder: "Pick a day" },
                      model: {
                        value: _vm.form.enroll_end_date,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "enroll_end_date", $$v)
                        },
                        expression: "form.enroll_end_date"
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["enroll_end_date"]
                        ) + " "
                      )
                    ])
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5" }, [
              _c(
                "label",
                { staticClass: "text-medium mb-3", attrs: { for: "" } },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.description,
                    expression: "form.description"
                  }
                ],
                staticClass:
                  "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                attrs: { rows: "4", placeholder: "Description" },
                domProps: { value: _vm.form.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-small text-red" }, [
                _vm._v(
                  _vm._s(
                    Object.keys(_vm.errors).length === 0
                      ? ""
                      : _vm.errors["description"]
                  ) + " "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: { click: _vm.addWorkExperience }
                },
                [_vm._v("Add Experience")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: {
                    click: function() {
                      this$1.experience = false
                      this$1.certificate = true
                    }
                  }
                },
                [_vm._v("Proceed to next page")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.certificate,
                expression: "certificate"
              }
            ],
            staticClass: "px-5 pt-3 pb-6"
          },
          [
            _c(
              "h4",
              {
                staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
              },
              [_vm._v("\n                    Certificate\n                ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Title")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.title,
                        expression: "form.title"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Title" },
                    domProps: { value: _vm.form.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["title"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "label",
                      { staticClass: "text-medium mb-3", attrs: { for: "" } },
                      [_vm._v("Year")]
                    ),
                    _vm._v(" "),
                    _c("el-date-picker", {
                      attrs: { type: "date", placeholder: "Pick a day" },
                      model: {
                        value: _vm.form.year,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "year", $$v)
                        },
                        expression: "form.year"
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-small text-red" }, [
                      _vm._v(
                        _vm._s(
                          Object.keys(_vm.errors).length === 0
                            ? ""
                            : _vm.errors["year"]
                        ) + " "
                      )
                    ])
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: { click: _vm.addCertificate }
                },
                [_vm._v("Add Certificate")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: {
                    click: function() {
                      this$1.referee = true
                      this$1.certificate = false
                    }
                  }
                },
                [_vm._v("Proceed to next page")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.verification,
                expression: "verification"
              }
            ],
            staticClass: "px-5 pt-3 pb-6"
          },
          [
            _c(
              "h4",
              {
                staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
              },
              [_vm._v("\n                    Verification\n                ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Identity Type")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.identity_type,
                        expression: "form.identity_type"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Type" },
                    domProps: { value: _vm.form.identity_type },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "identity_type", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["identity_type"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Identity Number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.identity_number,
                        expression: "form.identity_number"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Identity " },
                    domProps: { value: _vm.form.identity_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "identity_number",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["identity_number"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c(
                "label",
                { staticClass: "text-medium mb-3", attrs: { for: "" } },
                [_vm._v("Identity Card Upload")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass:
                  "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                attrs: { type: "file", placeholder: "Identity " },
                on: { change: _vm.cardUpload }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-small text-red" }, [
                _vm._v(
                  _vm._s(
                    Object.keys(_vm.errors).length === 0
                      ? ""
                      : _vm.errors["document"]
                  ) + " "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: { click: this.addVerification }
                },
                [_vm._v("Proceed")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.bank,
                expression: "bank"
              }
            ],
            staticClass: "px-5 pt-3 pb-6"
          },
          [
            _c(
              "h4",
              {
                staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
              },
              [_vm._v("\n                    Bank\n                ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5" }, [
              _c(
                "label",
                { staticClass: "text-medium mb-3", attrs: { for: "" } },
                [_vm._v("Bank Name")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.bank_name,
                    expression: "form.bank_name"
                  }
                ],
                staticClass:
                  "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                attrs: { type: "text", placeholder: "Bank name" },
                domProps: { value: _vm.form.bank_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "bank_name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-small text-red" }, [
                _vm._v(
                  _vm._s(
                    Object.keys(_vm.errors).length === 0
                      ? ""
                      : _vm.errors["bank_name"]
                  ) + " "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Account Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.account_name,
                        expression: "form.account_name"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Account name" },
                    domProps: { value: _vm.form.account_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "account_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["account_name"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Account Number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.account_number,
                        expression: "form.account_number"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Account name" },
                    domProps: { value: _vm.form.account_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "account_number",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["account_number"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  on: { click: _vm.addBank }
                },
                [_vm._v("Complete registration")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.referee,
                expression: "referee"
              }
            ],
            staticClass: "px-5 pt-3 pb-6"
          },
          [
            _c(
              "h4",
              {
                staticClass: "text-body-2 text-gray-grayer font-semibold mb-3"
              },
              [_vm._v("\n                    Referee\n                ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Referee Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_name,
                        expression: "form.referee_name"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Name" },
                    domProps: { value: _vm.form.referee_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "referee_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_name"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Occupation")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_occupation,
                        expression: "form.referee_occupation"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Occuptation" },
                    domProps: { value: _vm.form.referee_occupation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "referee_occupation",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_occupation"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Email Address ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_email,
                        expression: "form.referee_email"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Email" },
                    domProps: { value: _vm.form.referee_email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "referee_email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_email"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Phone Number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_phone_number,
                        expression: "form.referee_phone_number"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Phone Number" },
                    domProps: { value: _vm.form.referee_phone_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "referee_phone_number",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_phone_number"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5 flex flex-wrap" }, [
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", { staticClass: "lg:mr-2 md:mr-2" }, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Relationship ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_relationship,
                        expression: "form.referee_relationship"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Relationship" },
                    domProps: { value: _vm.form.referee_relationship },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "referee_relationship",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_relationship"]
                      ) + " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lg:w-1/2 md:w-1/2 w-full " }, [
                _c("div", {}, [
                  _c(
                    "label",
                    { staticClass: "text-medium mb-3", attrs: { for: "" } },
                    [_vm._v("Address")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.referee_address,
                        expression: "form.referee_address"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-2 px-4 border border-gray text-medium w-full",
                    attrs: { type: "text", placeholder: "Address" },
                    domProps: { value: _vm.form.referee_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "referee_address",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-small text-red" }, [
                    _vm._v(
                      _vm._s(
                        Object.keys(_vm.errors).length === 0
                          ? ""
                          : _vm.errors["referee_address"]
                      ) + " "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue py-3 px-8 text-white text-medium rounded-md",
                  attrs: { disabled: !_vm.isReferee },
                  on: {
                    click: function() {
                      this$1.addReferee()
                    }
                  }
                },
                [_vm._v("Proceed")]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "absolute top-0 right-0 mr-4 mt-4 bg-white" },
      [
        _c("a", { attrs: { href: "/" } }, [
          _c("img", {
            staticClass: "object-cover w-16 mx-auto",
            attrs: { src: "/img/logo/logo.png", alt: "" }
          })
        ])
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
          "lg:w-5/12 md:w-5/12 w-full mb-4 lg:px-20 md:px-8 lg:py-12 lg:flex md:flex hidden bg-blue "
      },
      [_c("img", { attrs: { src: "/img/register.svg", alt: "register" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " px-5" }, [
      _c("div", { staticClass: "lg:mt-20 mt-16" }, [
        _c("h3", { staticClass: "text-h3 text-gray-grayer font-semibold" }, [
          _vm._v("Become a tutor")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/public/Account.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/public/Account.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=4c3658b4& */ "./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/views/public/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/Account.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/Account.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/public/Account.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=template&id=4c3658b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Account.vue?vue&type=template&id=4c3658b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c3658b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);