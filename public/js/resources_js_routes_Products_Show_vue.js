"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD'
      });
    },
    deleteProduct: function deleteProduct(product) {
      if (!window.confirm("Are you sure you want to delete ".concat(product.name))) {
        return;
      }

      var id = product.id;
      var instance = this; //return http().delete(`api/products/delete/${id}`);
      //axios.delete('api/products/delete', {params: {'id': id}}) //NOT WORKING :(

      axios["delete"]('http://localhost:8000/api/products/delete/' + id).then(function (response) {
        alert(response.data.message);
        instance.$store.dispatch('getProducts'); //inefficient way to repopulate view database to changes, should look into pusher / ajax

        instance.$router.push("/");
      })["catch"](function (error) {
        console.log(error);
      }); //*/

      /*this.$http.delete('/products/delete/'+id).then(
          function(response) {
              //this.$products.$remove(product);
              alert(response.data.message);
              console.log(response.data);
              console.log("deleted");
              instance.$router.push("/");
          }).catch(function (error) {
              console.log(error);
          });//*/
    },
    redirectModifyProd: function redirectModifyProd(slug) {
      this.$router.push({
        path: "/product/" + slug + "/modify"
      });
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    product: function product() {
      var _this = this;

      return this.products.find(function (product) {
        return product.slug === _this.$route.params.slug;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/routes/Products/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/routes/Products/Show.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=26de46c1& */ "./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Products/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/routes/Products/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_26de46c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=26de46c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Products/Show.vue?vue&type=template&id=26de46c1& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.product
    ? _c(
        "section",
        { staticClass: "text-gray-700 body-font overflow-hidden" },
        [
          _c("div", { staticClass: "container px-12 py-24 mx-auto" }, [
            _c("div", { staticClass: "lg:w-3/5 mx-auto flex flex-wrap" }, [
              _c("img", {
                staticClass:
                  "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
                attrs: {
                  alt: "ecommerce",
                  src: "https://dummyimage.com/640x640"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                },
                [
                  _vm._l(_vm.product.categories, function(category) {
                    return _c("h2", {
                      key: category.id,
                      staticClass:
                        "text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2",
                      domProps: { textContent: _vm._s(category.name) }
                    })
                  }),
                  _vm._v(" "),
                  _c("h1", {
                    staticClass:
                      "text-gray-900 text-3xl title-font font-medium mb-2",
                    domProps: { textContent: _vm._s(_vm.product.name) }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "leading-relaxed",
                    domProps: { textContent: _vm._s(_vm.product.description) }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "flex mt-6 pt-4 border-t-2 border-gray-200"
                    },
                    [
                      _c("span", {
                        staticClass:
                          "title-font font-medium text-2xl text-gray-900",
                        domProps: {
                          textContent: _vm._s(
                            _vm.formatCurrency(_vm.product.price)
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                          on: {
                            click: function($event) {
                              return _vm.$store.commit("addToCart", _vm.product)
                            }
                          }
                        },
                        [_vm._v("Add To Cart")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded",
                          on: {
                            click: function($event) {
                              return _vm.redirectModifyProd(_vm.product.slug)
                            }
                          }
                        },
                        [
                          _vm._v("Modify"),
                          _c("span", { staticClass: "fa fa-trash" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.deleteProduct(_vm.product)
                            }
                          }
                        },
                        [
                          _vm._v("Delete"),
                          _c("span", { staticClass: "fa fa-trash" })
                        ]
                      )
                    ]
                  )
                ],
                2
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);