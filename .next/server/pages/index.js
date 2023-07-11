"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888,660];
exports.modules = {

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(35);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./utils/constants.js
// export const localhost = "http://127.0.0.1:8000/";
const localhost = "https://herokugit-auto-deploy.herokuapp.com/";
const api = "api/";
const endpoint = `${localhost}${api}`;
const productsListUrl = `${endpoint}products-list`;

;// CONCATENATED MODULE: ./pages/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function Home({ items }) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        w: "100vw",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                children: "Simple Ecommerce AutoDeploy Site"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}),
            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                ...settings,
                children: items?.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                        w: "300px",
                        h: "300px",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                src: item.image,
                                fallbackSrc: "/jacket.png"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                fontSize: "20px",
                                children: item.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        children: [
                                            "Ksh.",
                                            item.discount_price.toLocaleString()
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@chakra-ui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        ml: 3,
                                        style: {
                                            textDecoration: "line-through"
                                        },
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        children: [
                                            "Ksh.",
                                            item.price.toLocaleString()
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, item.id))
            })
        ]
    });
}
async function getStaticProps() {
    const res = await fetch(productsListUrl);
    const items = await res.json();
    return {
        props: {
            items
        },
        revalidate: 1
    };
}
/* harmony default export */ const pages = (Home);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: (_app_default()),
            Document: (_document_default()),
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,35,722,893], () => (__webpack_exec__(40)));
module.exports = __webpack_exports__;

})();