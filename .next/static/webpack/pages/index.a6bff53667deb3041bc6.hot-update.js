webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  user: {},
  post: {}
};

// action creator
var loginAction = function loginAction(data) {
  return {
    type: "LOG_IN",
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: "LOG_OUT"
  };
};

// reducer은 어떤함수?
// (이전 상태, 액션) => 다음 상태
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      console.log(action);
      return _objectSpread(_objectSpread({}, state), action.payload);
    case "LOG_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });
    case "LOG_OUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3QiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImlzTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUU3QyxJQUFNQSxZQUFZLEdBQUc7RUFDbkJDLElBQUksRUFBRSxDQUFDLENBQUM7RUFDUkMsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDOztBQUVEO0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsSUFBSSxFQUFLO0VBQ25DLE9BQU87SUFDTEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQsSUFBSSxFQUFKQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBRU0sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztFQUNoQyxPQUFPO0lBQ0xELElBQUksRUFBRTtFQUNSLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHUixZQUFZO0VBQUEsSUFBRVMsTUFBTTtFQUMvQyxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDakIsS0FBS0ssMERBQU87TUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztNQUNuQix1Q0FBWUQsS0FBSyxHQUFLQyxNQUFNLENBQUNJLE9BQU87SUFDdEMsS0FBSyxRQUFRO01BQ1gsdUNBQ0tMLEtBQUs7UUFDUlAsSUFBSSxrQ0FDQ08sS0FBSyxDQUFDUCxJQUFJO1VBQ2JhLFVBQVUsRUFBRSxJQUFJO1VBQ2hCYixJQUFJLEVBQUVRLE1BQU0sQ0FBQ0w7UUFBSTtNQUNsQjtJQUVMLEtBQUssU0FBUztNQUNaLHVDQUNLSSxLQUFLO1FBQ1JQLElBQUksa0NBQ0NPLEtBQUssQ0FBQ1AsSUFBSTtVQUNiYSxVQUFVLEVBQUUsS0FBSztVQUNqQmIsSUFBSSxFQUFFO1FBQUk7TUFDWDtJQUVMO01BQ0UsT0FBT08sS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNmJmZjUzNjY3ZGViMzA0MWJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7fSxcclxuICBwb3N0OiB7fSxcclxufTtcclxuXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRcIixcclxuICB9O1xyXG59O1xyXG5cclxuLy8gcmVkdWNlcuydgCDslrTrlqTtlajsiJg/XHJcbi8vICjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiTE9HX0lOXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=