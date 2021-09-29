"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Vendor_VendorRegister_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterVendor",
  data: function data() {
    return {
      product: []
    };
  },
  methods: {
    RequestRegister: function RequestRegister() {
      var formData = new FormData(document.getElementById("myForm"));
      var instance = this;
      axios.post('api/vendor/register', formData).then(function (response) {
        console.log(formData);
        instance.$router.push("/");
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/routes/Vendor/VendorRegister.vue":
/*!*******************************************************!*\
  !*** ./resources/js/routes/Vendor/VendorRegister.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true& */ "./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true&");
/* harmony import */ var _VendorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorRegister.vue?vue&type=script&lang=js& */ "./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "913a78aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Vendor/VendorRegister.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VendorRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorRegister_vue_vue_type_template_id_913a78aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Vendor/VendorRegister.vue?vue&type=template&id=913a78aa&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        attrs: { name: "myform", id: "myForm" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.RequestRegister.apply(null, arguments)
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _vm._m(7),
        _vm._v(" "),
        _vm._m(8)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "vendor_name" } }, [_vm._v("Company Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          name: "name",
          placeholder: "Enter Company Name",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "vendor_email" } }, [
        _vm._v("Company Email")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Enter Email",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "product_description" } }, [
        _vm._v("Company Description")
      ]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: {
          name: "description",
          id: "",
          cols: "30",
          rows: "10",
          placeholder: "Enter Company Description"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        {
          staticClass: "leading-7 text-sm text-gray-600",
          attrs: { for: "address" }
        },
        [_vm._v("Street Address")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "address", name: "address" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        {
          staticClass: "leading-7 text-sm text-gray-600",
          attrs: { for: "city" }
        },
        [_vm._v("City")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "city", name: "city" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        {
          staticClass: "leading-7 text-sm text-gray-600",
          attrs: { for: "province" }
        },
        [_vm._v("Province")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "province", name: "province" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "relative" }, [
      _c(
        "label",
        {
          staticClass: "leading-7 text-sm text-gray-600",
          attrs: { for: "postal_code" }
        },
        [_vm._v("Postal Code")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "postal_code", name: "postal_code" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-sm btn-flat",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("input", {
        attrs: { type: "button", value: "Go Back", onclick: "history.back(-1)" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);