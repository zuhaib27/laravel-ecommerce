"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Products_ModifyProd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddProduct",
  data: function data() {
    return {
      product: []
    };
  },
  methods: {
    ModifyProduct: function ModifyProduct() {
      var formData = new FormData(document.getElementById("myForm"));
      var instance = this;
      axios.post('api/product/modify', formData).then(function (response) {
        console.log(formData);
        instance.$router.push("/");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateProduct: function updateProduct() {
      var _this = this;

      this.axios.patch("http://localhost:8000/api/products/".concat(this.$route.params.id), this.product).then(function (res) {
        _this.$router.push({
          name: 'home'
        });
      });
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    product: function product() {
      var _this2 = this;

      return this.products.find(function (product) {
        return product.slug === _this2.$route.params.slug;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/routes/Products/ModifyProd.vue":
/*!*****************************************************!*\
  !*** ./resources/js/routes/Products/ModifyProd.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true& */ "./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true&");
/* harmony import */ var _ModifyProd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyProd.vue?vue&type=script&lang=js& */ "./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModifyProd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b6863f5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Products/ModifyProd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyProd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModifyProd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyProd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyProd_vue_vue_type_template_id_3b6863f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/ModifyProd.vue?vue&type=template&id=3b6863f5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
            return _vm.ModifyProduct.apply(null, arguments)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "product_name" } }, [
            _vm._v("Product Name")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.name,
                expression: "product.name"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "currentProdName", type: "text" },
            domProps: { value: _vm.product.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.product, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2)
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
      _c("label", { attrs: { for: "product_cost" } }, [
        _vm._v("Product Price $")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "number",
          min: "0.01",
          step: "0.01",
          max: "100000",
          name: "price",
          placeholder: "Enter Product Price"
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
        _vm._v("Product Description")
      ]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: {
          name: "description",
          id: "",
          cols: "30",
          rows: "10",
          placeholder: "Enter Product Description"
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
        "button",
        {
          staticClass: "btn btn-primary btn-sm btn-flat",
          attrs: { type: "submit" }
        },
        [_vm._v("Submit Changes")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);