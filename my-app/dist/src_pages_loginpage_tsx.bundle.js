"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_pages_loginpage_tsx"],{

/***/ "./node_modules/@mui/material/esm/Card/Card.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/esm/Card/Card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_chainPropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/utils/chainPropTypes */ "./node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _Paper_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Paper/index.js */ "./node_modules/@mui/material/esm/Paper/Paper.js");
/* harmony import */ var _cardClasses_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardClasses.js */ "./node_modules/@mui/material/esm/Card/cardClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _cardClasses_js__WEBPACK_IMPORTED_MODULE_4__.getCardUtilityClass, classes);
};
const CardRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_Paper_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: 'MuiCard',
  slot: 'Root'
})({
  overflow: 'hidden'
});
const Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Card(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__.useDefaultProps)({
    props: inProps,
    name: 'MuiCard'
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardRoot, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
 true ? Card.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_8__.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8__.object,
  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: (0,_mui_utils_chainPropTypes__WEBPACK_IMPORTED_MODULE_9__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_8__.bool, props => {
    if (props.raised && props.variant === 'outlined') {
      return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8__.func, prop_types__WEBPACK_IMPORTED_MODULE_8__.object, prop_types__WEBPACK_IMPORTED_MODULE_8__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_8__.func, prop_types__WEBPACK_IMPORTED_MODULE_8__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/@mui/material/esm/Card/cardClasses.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/esm/Card/cardClasses.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCardUtilityClass: () => (/* binding */ getCardUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getCardUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCard', slot);
}
const cardClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCard', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/CardContent/CardContent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/material/esm/CardContent/CardContent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _cardContentClasses_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardContentClasses.js */ "./node_modules/@mui/material/esm/CardContent/cardContentClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _cardContentClasses_js__WEBPACK_IMPORTED_MODULE_4__.getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])('div', {
  name: 'MuiCardContent',
  slot: 'Root'
})({
  padding: 16,
  '&:last-child': {
    paddingBottom: 24
  }
});
const CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardContent(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.useDefaultProps)({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
    className,
    component = 'div',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardContentRoot, {
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other
  });
});
 true ? CardContent.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7__.object,
  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_7__.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7__.func, prop_types__WEBPACK_IMPORTED_MODULE_7__.object, prop_types__WEBPACK_IMPORTED_MODULE_7__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_7__.func, prop_types__WEBPACK_IMPORTED_MODULE_7__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardContent);

/***/ }),

/***/ "./node_modules/@mui/material/esm/CardContent/cardContentClasses.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mui/material/esm/CardContent/cardContentClasses.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCardContentUtilityClass: () => (/* binding */ getCardContentUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getCardContentUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCardContent', slot);
}
const cardContentClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCardContent', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardContentClasses);

/***/ }),

/***/ "./src/pages/loginpage.tsx":
/*!*********************************!*\
  !*** ./src/pages/loginpage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _container_store_login_LoginStoreSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @container/store/login/LoginStoreSelectors */ "./src/store/login/LoginStoreSelectors.ts");
/* harmony import */ var _container_store_login_LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @container/store/login/LoginStoreSlice */ "./src/store/login/LoginStoreSlice.ts");
/* harmony import */ var _container_store_login_LoginStoreThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @container/store/login/LoginStoreThunk */ "./src/store/login/LoginStoreThunk.ts");
/* harmony import */ var _container_store_storetypedhooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @container/store/storetypedhooks */ "./src/store/storetypedhooks.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs");








function LoginPage() {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const dispatch = (0,_container_store_storetypedhooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    const selectUsername = (0,_container_store_storetypedhooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_container_store_login_LoginStoreSelectors__WEBPACK_IMPORTED_MODULE_1__.username);
    const selectPassword = (0,_container_store_storetypedhooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_container_store_login_LoginStoreSelectors__WEBPACK_IMPORTED_MODULE_1__.password);
    const selectloginStatus = (0,_container_store_storetypedhooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_container_store_login_LoginStoreSelectors__WEBPACK_IMPORTED_MODULE_1__.status);
    const [isempty, setEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const obj = {
        username: selectUsername,
        password: selectPassword
    };
    console.log("component re-renderd");
    //call thunk for clicking login
    const handleNavigation = () => {
        dispatch((0,_container_store_login_LoginStoreThunk__WEBPACK_IMPORTED_MODULE_3__.login)(obj));
        validateUsername();
        if (selectloginStatus === true) {
            navigate('/home');
        }
        else {
            console.log("Invalid username and passsword");
        }
    };
    const validateUsername = () => {
        if (selectUsername.trim() === "") {
            setEmpty(true);
        }
        else {
            setEmpty(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
        validateUsername();
    }, [selectUsername, selectPassword]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "w-full flex flex-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { height: "100vh", display: "flex", bgcolor: "#f5f5f5" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: { p: 2, borderRadius: 3 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { variant: "h5", align: "center", sx: { mb: 3 }, children: "Login" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { autoComplete: "off", label: "Email", type: "email", fullWidth: true, margin: "normal", onChange: (e) => dispatch((0,_container_store_login_LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__.setUserName)(e.target.value)) }), isempty &&
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-red-500", children: " Please fill out the username " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { label: "Password", type: "password", fullWidth: true, margin: "normal", onChange: (e) => dispatch((0,_container_store_login_LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__.setUserPassword)(e.target.value)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { variant: "contained", color: "primary", fullWidth: true, sx: { mt: 3, borderRadius: 2 }, onClick: () => handleNavigation(), children: "Login" })] }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {})] }));
}


/***/ }),

/***/ "./src/service/loginService.ts":
/*!*************************************!*\
  !*** ./src/service/loginService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginService: () => (/* binding */ loginService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const loginService = async (obj) => {
    return await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('api/login', obj);
};


/***/ }),

/***/ "./src/store/login/LoginStoreSelectors.ts":
/*!************************************************!*\
  !*** ./src/store/login/LoginStoreSelectors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   password: () => (/* binding */ password),
/* harmony export */   status: () => (/* binding */ status),
/* harmony export */   username: () => (/* binding */ username)
/* harmony export */ });
const username = (state) => state.logIn.username;
const password = (state) => state.logIn.password;
const status = (state) => state.logIn.status;


/***/ }),

/***/ "./src/store/login/LoginStoreThunk.ts":
/*!********************************************!*\
  !*** ./src/store/login/LoginStoreThunk.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _container_service_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @container/service/loginService */ "./src/service/loginService.ts");
/* harmony import */ var _storetypedhooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storetypedhooks */ "./src/store/storetypedhooks.ts");
/* harmony import */ var _LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginStoreSlice */ "./src/store/login/LoginStoreSlice.ts");



const login = (0,_storetypedhooks__WEBPACK_IMPORTED_MODULE_1__.createAppAsyncThunk)('login-user', async (data, { dispatch }) => {
    const payload = { ...data };
    try {
        const result = await (0,_container_service_loginService__WEBPACK_IMPORTED_MODULE_0__.loginService)(payload);
        if (result.status == 200 && result.data.sucess == true) {
            dispatch((0,_LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__.setLoginStatus)(true));
        }
        else if (result.data.sucess == false) {
            dispatch((0,_LoginStoreSlice__WEBPACK_IMPORTED_MODULE_2__.setLoginStatus)(false));
        }
    }
    catch (e) {
        console.log("error occured processing API ");
    }
});


/***/ })

}]);
//# sourceMappingURL=src_pages_loginpage_tsx.bundle.js.map