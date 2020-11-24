module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(11);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

// Following functions are used by WEB and IOS Render
function cacheDimen(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y,
    gravity: props.gravity,
    padding: props.padding,
    orientation: props.orientation,
    stroke: props.stroke ? props.stroke.split(",")[0] * 1 : 0
  };
  window.__VIEW_DIMENSIONS[props.id] = dimen;
}

function shouldMove(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y
  };
  var cachedDimen = window.__VIEW_DIMENSIONS[props.id];
  var changed = false;
  if (!cachedDimen) return dimen;
  for (var key in dimen) {
    if (cachedDimen[key] != dimen[key]) {
      dimen.id = props.id;
      changed = true;
    }
  }
  if (changed) return dimen;
  return null;
}

function getOS() {
  var userAgent = navigator.userAgent;
  if (!userAgent) return console.error(new Error("UserAgent is null"));
  if (userAgent.includes("Android") && userAgent.includes("Version")) return "ANDROID";
  if ((userAgent.includes("iPhone") || userAgent.includes("iPad")) && !userAgent.includes("Version")) return "IOS";
  return "WEB";
}

function clearViewExternals(view) {
  if (!view) return;

  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];

  if (__OBSERVERS[view.props.id]) delete window.__OBSERVERS[view.props.id];

  view.children.forEach(clearViewExternals);
}

// use: clone( <thing to copy> ) returns <new copy>
function clone(o, m) {
  // return non object values
  if ('object' !== (typeof o === "undefined" ? "undefined" : _typeof(o))) return o;
  // m: a map of old refs to new object refs to stop recursion
  if ('object' !== (typeof m === "undefined" ? "undefined" : _typeof(m)) || null === m) m = new WeakMap();
  var n = m.get(o);
  if ('undefined' !== typeof n) return n;
  // shallow/leaf clone object
  var c = Object.getPrototypeOf(o).constructor;
  // TODO: specialize copies for expected built in types i.e. Date etc
  switch (c) {
    // shouldn't be copied, keep reference
    case Boolean:
    case Error:
    case Function:
    case Number:
    case Promise:
    case String:
    case Symbol:
    case WeakMap:
    case WeakSet:
      n = o;
      break;
    // array like/collection objects
    case Array:
      m.set(o, n = o.slice(0));
      // recursive copy for child objects
      n.forEach(function (v, i) {
        if ('object' === (typeof v === "undefined" ? "undefined" : _typeof(v))) n[i] = clone(v, m);
      });
      break;
    case ArrayBuffer:
      m.set(o, n = o.slice(0));
      break;
    case DataView:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.byteLength));
      break;
    case Map:
    case Set:
      m.set(o, n = new c(clone(Array.from(o.entries()), m)));
      break;
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.length));
      break;
    // use built in copy constructor
    case Date:
    case RegExp:
      m.set(o, n = new c(o));
      break;
    // fallback generic object copy
    default:
      m.set(o, n = Object.assign(new c(), o));
      // recursive copy for child objects
      for (c in n) {
        if ('object' === _typeof(n[c])) n[c] = clone(n[c], m);
      }}
  return n;
}

function merge() {
  var obj = {},
      i = 0,
      il = arguments.length,
      key;
  for (; i < il; i++) {
    for (key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        obj[key] = arguments[i][key];
      }
    }
  }
  return obj;
};

module.exports = {
  shouldMove: shouldMove,
  cacheDimen: cacheDimen,
  getOS: getOS,
  merge: merge,
  clearViewExternals: clearViewExternals,
  clone: clone
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var _require = __webpack_require__(28),
    computeChildDimens = _require.computeChildDimens;

var _require2 = __webpack_require__(8),
    addAdditionalViewProps = _require2.addAdditionalViewProps,
    setAttributes = _require2.setAttributes,
    handleWrapContent = _require2.handleWrapContent;

var events = __webpack_require__(9);
var elements = __webpack_require__(38);

var helper = __webpack_require__(1);

/* Do some actions after rendered */
var cb = function cb(elem, view) {
    if (view.props.feedback && typeof view.props.feedback == "function") {
        view.props.feedback();
    }
};

window.inflateTimings = {
    lastUpdatedAt: null
};

var addDomToParent = function addDomToParent(elem, parentElement, siblingView) {
    var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

    if (siblingElement && siblingElement != undefined) {
        if (parentElement == siblingElement) {
            // Prepend
            parentElement.prepend(elem);
        } else {
            // Insert in specified position
            var nextSiblingElement = siblingElement.nextSibling;
            parentElement.insertBefore(elem, nextSiblingElement);
        }
    } else {
        parentElement.appendChild(elem);
    }
};

// Creates the DOM element if it has not been already inflated
// View: Object of ReactDOM, {type, props, children}
// parentElement: DOM Object
var inflateView = function inflateView(view, parentElement, siblingView, stopChild, stopObserver, renderStyle) {
    var start = performance.now();
    var elem = document.getElementById(view.props.id);
    var subElem = null;
    var newInflated = false;

    if (view.props.x == "NaN" || view.props.y == "NaN") {
        view = handleWrapContent(view, parentElement);
    }

    if (!elem) {
        var _elements$createEleme = elements.createElement(view, parentElement);

        elem = _elements$createEleme.elem;
        subElem = _elements$createEleme.subElem;


        newInflated = true;

        if (parentElement) {
            var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

            if (siblingElement && siblingElement != undefined) {
                if (parentElement == siblingElement) {
                    // Prepend
                    if (subElem) {
                        parentElement.insertBefore(subElem, parentElement.childNodes[0]);
                    }
                    parentElement.insertBefore(elem, parentElement.childNodes[0]);
                } else {
                    // Insert in specified position
                    var nextSiblingElement = siblingElement.nextSibling;

                    parentElement.insertBefore(elem, nextSiblingElement);
                    if (subElem) {
                        parentElement.insertBefore(subElem, nextSiblingElement);
                    }
                }
            } else {
                parentElement.appendChild(elem);
                if (subElem) {
                    parentElement.appendChild(subElem);
                }
            }
        }

        setAttributes(view.type, elem, view.props, true);

        /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
          if(!stopObserver){
            // We should run observer for the element
            observer(elem);
            elem.setAttribute('has_render', true);
          }
        }*/
    } else if (renderStyle) {
        setAttributes(view.type, elem, view.props, false);
    }

    addAdditionalViewProps(view.type, elem, view.props);

    if (!stopChild) {
        computeChildDimens(view);
    }

    if (!stopChild) {
        if (view.hasOwnProperty('children') && view.children.length > 0) {
            for (var i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    if (i != 0) inflateView(view.children[i], elem, view.children[i - 1], stopChild, stopObserver, renderStyle);else inflateView(view.children[i], elem, view, stopChild, stopObserver, renderStyle);
                }
            }
        }
    }

    if (newInflated) {
        if (!stopObserver) {
            events.addObserver(elem, view.props);
        }
        cb(elem, view);
    }

    var end = performance.now();

    window.inflateTimings[view.props.id] = end - start;
    window.inflateTimings.lastUpdatedAt = end;

    return elem;
};

var runInUI = function runInUI(cmd) {
    if (!(cmd instanceof Array)) cmd = [cmd];

    cmd.forEach(function (each) {
        var elem = document.getElementById(each.id);

        if (!elem) {
            return console.error("runInUI (Id NULL) CMD:", each);
        }

        var view = window.__VIEWS[elem.id];
        view.props = helper.merge(view.props, each);

        setAttributes(view.type, elem, view.props, false);
    });
};

module.exports = {
    addDomToParent: addDomToParent,
    inflateView: inflateView,
    runInUI: runInUI,
    computeChildDimens: computeChildDimens
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

function run() {
  if (false) {} else if (true) {
    return __webpack_require__(25);
  } else {}
}

module.exports = run();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	parseParams: __webpack_require__(5)
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

Array.prototype.rotate = function () {
  // save references to array functions to make lookup faster
  var push = Array.prototype.push,
      splice = Array.prototype.splice;

  return function (count) {
    var len = this.length >>> 0,
        // convert to uint
    count = count >> 0; // convert to int

    // convert count to value in range [0, len)
    count = (count % len + len) % len;

    // use splice.call() instead of this.splice() to make function generic
    push.apply(this, splice.call(this, 0, count));
    return this;
  };
}();

function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        if (typeof flatObject[x] !== "undefined") toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
}

function parseColors(color) {
  if (color.length < 8) return color;

  if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1) return color;

  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);

  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

  return rgbaColor;
}

function parseLayoutProps(type, config, key) {
  var isMobile = window.innerWidth < 550;
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    config.style = {};
    config.style.transform = "";
    config.animation = {};
    config.animation.transform = "";
  }

  if (!config.attributes) config.attributes = {};

  if (!config.style.className) config.style.className = "";

  if (key == "onClick" || key == "onClickEvent") {
    if (!isMobile && !config.cursorType) {
      config.style.cursor = "pointer";
    }
  }
  if (key == "cursorType") {
    config.style.cursor = config.cursorType;
  }
  if (key == "textSize") config.style.fontSize = config.textSize + 'px';
  if (key == 'fontSize') config.style.fontSize = config.fontSize + 'px';

  if (key == 'url') config.attributes.src = config.url;

  /*if (key == "imageUrl"){
    let imageUrl = config.imageUrl;
    
    if(config.rawData) {
      // Do nothing
    } else {
      let temp = imageUrl.split('.');
      let ext = '';
      if(temp && temp.length > 0)
        ext = temp[temp.length - 1];
      
      let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
      ext = ext.toLowerCase();
       if(!exts.includes(ext)) {
        imageUrl += '.png';
      }
    }
     config.attributes.src = imageUrl;
  }*/

  if (key == "backgroundColor") {
    config.style.backgroundColor = parseColors(config.backgroundColor);
  }

  if (key == "background") {
    config.style.background = config.background;
  }

  if (key == "backgroundDrawable") {
    config.style["background-image"] = "url('" + config.backgroundDrawable + "')";
  }

  if (key == "color") {
    config.style.color = parseColors(config.color);
  }

  if (key == "position") {
    config.style.position = config.position;
  }

  if (key == "bottomFixed") {
    config.style.bottom = config.bottomFixed;
  }
  if (key == "topFixed") {
    config.style.top = config.topFixed;
  }
  if (key == "leftFixed") {
    config.style.left = config.leftFixed;
  }
  if (key == "rightFixed") {
    config.style.right = config.rightFixed;
  }

  if (key == "zIndex") {
    config.style["z-index"] = config.zIndex;
  }

  if (key == "autofocus") {
    var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;
    if (config.autofocus && !isIPhone) {
      config.attributes["autofocus"] = "autofocus";
    }
  }
  if (key == "focus") {
    if (config.focus && config.id) {
      var doc = document.getElementById(config.id);
      if (doc) {
        doc.focus();
      }
    }
  }

  if (key == "cornerRadius") {
    config.style.borderRadius = config.cornerRadius + "px";
  }

  if (key == "alpha") {
    config.style.opacity = config[key];
  }

  if (key == "a_alpha") {
    config.animation.opacity = config[key];
  }

  if (key == "fontFamily") {
    config.style.fontFamily = config.fontFamily;
  }

  if (key == 'typeface') {
    switch (config.typeface) {
      case 'normal':
        config.style.fontWeight = 400;
        break;
      case 'bold':
        config.style.fontWeight = 700;
        break;
      case 'italic':
        config.style.fontStyle = 'italic';
        break;
      case 'bold_italic':
        config.style.fontWeight = 700;
        config.style.fontStyle = 'italic';
        break;
      case 'underline':
        config.style.textDecoration = 'underline';
        break;
    }
  }

  if (key == "fontStyle") {
    var match = config.fontStyle.match(/[/-]/);
    var fontName = match ? config.fontStyle.slice(0, match.index) : config.fontStyle;
    config.style.fontFamily = fontName;

    if (!match) return;

    var _type = config.fontStyle.slice(match.index + 1);
    _type = _type.replace(/[-/]/g, '');
    _type = _type.toLowerCase();

    if (_type.indexOf('italic') != -1) config.style.fontStyle = 'italic';

    var fontWeight = 0;

    if (_type.indexOf('extralight') != -1) fontWeight = 200;else if (_type.indexOf('light') != -1) fontWeight = 300;else if (_type.indexOf('regular') != -1 || _type.indexOf('book') != -1) fontWeight = 400;else if (_type.indexOf('semibold') != -1 || _type.indexOf('medium') != -1) fontWeight = 500;else if (_type.indexOf('bold') != -1 || _type.indexOf('heavy') != -1) fontWeight = 700;else if (_type.indexOf('black') != -1) fontWeight = 900;

    if (fontWeight > 0) config.style.fontWeight = fontWeight;
  }

  if (key == 'visibility') {
    var visibility = config.visibility;
    if (visibility == 'invisible') config.style.visibility = "hidden";else if (visibility == 'gone') config.style.display = "none";else {
      config.style.visibility = '';
    }
  }

  if (key == 'expand') {
    var _visibility = config.expand + '';
    if (_visibility == 'true') {
      config.style.visibility = '';
    } else config.style.display = "none";
  }

  if (key == "stroke") {
    var _values = config.stroke.split(",");

    if (_values.length == 2) config.style.border = _values[0] + "px solid " + _values[1];else if (_values.length == 3) {
      if (_values[2] == "rbl") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderLeft = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "b") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "r") {
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "rb") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else config.style.border = _values[0] + "px " + _values[1] + " " + _values[2];
    }
  }

  if (key == "strokeTop") {
    var _values2 = config.strokeTop.split(",");

    if (_values2.length == 2) config.style.borderTop = _values2[0] + "px solid " + _values2[1];else if (_values2.length == 3) config.style.borderTop = _values2[0] + "px " + _values2[1] + " " + _values2[2];
  }

  if (key == "strokeRight") {
    var _values3 = config.strokeRight.split(",");

    if (_values3.length == 2) config.style.borderRight = _values3[0] + "px solid " + _values3[1];else if (_values3.length == 3) config.style.borderRight = _values3[0] + "px " + _values3[1] + " " + _values3[2];
  }

  if (key == "strokeBottom") {
    var _values4 = config.strokeBottom.split(",");

    if (_values4.length == 2) config.style.borderBottom = _values4[0] + "px solid " + _values4[1];else if (_values4.length == 3) config.style.borderBottom = _values4[0] + "px " + _values4[1] + " " + _values4[2];
  }

  if (key == "strokeLeft") {
    var _values5 = config.strokeLeft.split(",");

    if (_values5.length == 2) config.style.borderLeft = _values5[0] + "px solid " + _values5[1];else if (_values5.length == 3) config.style.borderLeft = _values5[0] + "px " + _values5[1] + " " + _values5[2];
  }

  if (key == "translationY") {
    config.style.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "a_translationX") {
    config.animation.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "scaleX") {
    config.style.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "a_scaleX") {
    config.animation.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "scaleY") {
    config.style.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "a_scaleY") {
    config.animation.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "rotation") {
    config.style.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "a_rotation") {
    config.animation.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "rotationX") {
    config.style.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "a_rotationX") {
    config.animation.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "rotationY") {
    config.style.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "a_rotationY") {
    config.animation.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "translationZ") {
    var v = config[key];
    config.style["-webkit-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["-moz-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
  }

  if (key == "a_duration" && !isNaN(config[key])) {
    var suffix = config.transitionTimingFunction ? " " + config.transitionTimingFunction : "";
    config.animation.transition = config[key] + 'ms all' + suffix;
  }

  if (type == "textView" && key == "gravity" && config.gravity) {
    config.style.textAlign = config.gravity;
    if (config.gravity == "center_vertical") {
      config.style["align-items"] = "center";
      config.style.display = "flex";
    } else if (config.gravity == "center_horizontal") {
      config.style.display = "flex";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    }
  }
  if (type == "linearLayout" && key == "gravity" && config.gravity) {
    if (config.margin && config.gravity == "center_vertical") {
      var margin = config.margin.split(",");
      if (config.width == "match_parent") {
        config.style.width = "calc(100% - " + (parseInt(margin[0]) + parseInt(margin[2])).toString() + "px )";
      }
    }
  }

  if (key == "hint") {
    config.attributes.placeholder = config.hint;
  }

  if (key == "contentEditable" && config.contentEditable) {
    config.attributes.contenteditable = true;
  }

  if (key == "id") {
    config.attributes.id = config.id;
  }

  if (key == "gradient") {
    var gradientObj = JSON.parse(config.gradient);
    if (gradientObj.type == "linear") {
      var angle = gradientObj.angle;
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "linear-gradient(" + angle + "deg, " + colors + ")";
    } else {
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "radial-gradient(" + colors + ")";
    }
  }

  if (key == "inputType") {
    var inputType = "text";
    if (config.inputType == "numericPassword" || config.inputType == "password") {
      if (config.inputTypeI == 4 && isMobile) {
        inputType = "tel";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password";
        config.attributes.autocomplete = "new-password";
      }
    } else if (config.inputType == "disabled") {
      config.attributes.disabled = 'disabled';
    } else if (config.inputType == "numeric") {
      inputType = "number";
    }
    if (config.separator) {
      if (config.inputType == "numeric") {
        inputType = "tel";
      } else {
        inputType = "text";
      }
    }

    config.attributes.type = inputType;
  }

  if (key == "rotateImage") {
    if (config.rotateImage) {
      config.style["-webkit-animation"] = "load3 4s infinite linear";
      config.style["animation-duration"] = "4s";
      config.style["animation-timing-function"] = "linear";
      config.style["animation-delay"] = "0s";
      config.style["animation-iteration-count"] = "infinite";
      config.style["animation-direction"] = "normal";
      config.style["animation-fill-mode"] = "none";
      config.style["animation-play-state"] = "running";
      config.style["animation-name"] = "rotation";
    }
  }

  if (key == "pattern") {
    config.attributes["data-pattern"] = config.pattern;
    var data = config.pattern.split(',');
    var length = parseInt(data.pop());
    if (length > 10) {
      length = 10;
    }
    config.attributes["size"] = length;
  }
  // if(key == "inputTypeI"){
  //   if(config.inputTypeI == 4){
  //     config.attributes["inputmode"] = "numeric";
  //   }

  // }

  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }
  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
  }
  if (key == "blurBackground" && config.blurBackground) {
    config.style["backdrop-filter"] = "blur(3px)";
  }
  if (key == "shadow") {
    var shadowValues = config.shadow.split(config.shadowSeparator || ',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);
    var shadowType = config.shadowType ? config.shadowType + " " : '';

    config["style"]["box-shadow"] = shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " + shadowColor.g + ", " + shadowColor.b + ", " + shadowColor.a + ")";
  }

  if (key == "lineHeight") config.style.lineHeight = config.lineHeight;

  if (key == "objectFit") config.style.objectFit = config.objectFit;

  if (key == "clickable") {
    config.style.pointerEvents = config.clickable ? "auto" : "none";
  }
  if (key == "display") {
    config.style.display = config.display;
  }
}

function convertColorToRgba(color) {
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: parseInt(rWS(values[0])),
    g: parseInt(rWS(values[1])),
    b: parseInt(rWS(values[2])),
    a: parseFloat(alpha)
  };
}

function convertHexToRgb(hex) {
  var r = parseInt(hex.substring(0, 2), 16).toFixed(2);
  var g = parseInt(hex.substring(2, 4), 16).toFixed(2);
  var b = parseInt(hex.substring(4, 6), 16).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function setDefaults(type, config) {
  if (type == "linearLayout") {
    config.orientation = config.orientation;
  }
}
function this_inlineAnimation(config) {
  var con = modifyTranslation(config);
  var element = document.getElementById(con.name);
}
function modifyTranslation(config) {
  var x = config.x || "0";
  var y = config.y || "0";
  var animationArray = JSON.parse(config.inlineAnimation);
  var animationArray = animationArray.map(function (a) {
    if (a.hasOwnProperty("fromX")) {
      a.fromX = parseInt(a.fromX) + parseInt(x) + '';
      if (!a.hasOwnProperty("toX")) {
        a.toX = 0 + parseInt(x) + '';
      }
    }
    if (a.hasOwnProperty("toX")) {
      a.toX = parseInt(a.toX) + parseInt(x) + '';
    }
    if (a.hasOwnProperty("fromY")) {
      a.fromY = parseInt(a.fromY) + parseInt(y) + '';
      if (!a.hasOwnProperty("toY")) {
        a.toY = 0 + parseInt(y) + '';
      }
    }
    if (a.hasOwnProperty("toY")) {
      a.toY = parseInt(a.toY) + parseInt(y) + '';
    }
    return a;
  });
  return animationArray;
}
module.exports = function (type, config, getSetType) {
  config = flattenObject(config);
  setDefaults(type, config);

  var keys = Object.keys(config);

  for (var i = 0; i < keys.length; i++) {
    if (config.style && config.style.display === 'none' && keys[i] === 'gravity') {
      continue;
    }
    parseLayoutProps(type, config, keys[i]);
  }

  config.transition = [String(config.a_duration || 0) + "ms", "all", config.transitionTimingFunction].filter(Boolean).join(" ");

  if (config.style.transform == "") {
    delete config.style.transform;
  }
  if (config.hasOwnProperty("inlineAnimation")) {
    this_inlineAnimation(config);
  }

  return config;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var helpers = {
	common: __webpack_require__(26)
};

if (false) {} else if (true) {
	helpers.web = __webpack_require__(4);
} else {}

module.exports = helpers;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

module.exports.map = function (fn) {
  if (typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
    var proxyFnName = 'F' + window.__FN_INDEX;
    if (window.__payload && window.__payload.service) {
      proxyFnName = window.__payload.service + "_" + proxyFnName;
    }
    window.__PROXY_FN[proxyFnName] = fn;
    window.__FN_INDEX++;
    return proxyFnName;
  } else {
    throw new Error("Please initialise window.__FN_INDEX = 0 in index.js of your project.");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events = __webpack_require__(9);

var _require = __webpack_require__(29),
    renderComponent = _require.renderComponent;

var animation = __webpack_require__(35);
var elements = __webpack_require__(36);
var layout = __webpack_require__(37);

var _require2 = __webpack_require__(10),
    setLayoutGravity = _require2.setLayoutGravity;

function handleWrapContent(view, parentElement) {
  var newDimen = 0;
  for (var i = 0; i < parentElement.childNodes.length; i++) {
    newDimen += parentElement.childNodes[i].offsetWidth;
  }
  view.props.x = newDimen;
  return view;
}

function applyGlobalStyles(type, elem, props) {
  elem.style.transition = props.transition;

  elem.style.width = 'auto';
  elem.style.height = 'auto';

  if (props.hasOwnProperty('width')) {
    if (props.width == 'match_parent') {
      elem.style.width = '100%';
    } else if (props.width == 'wrap_content') {
      // You see below
    } else if (!isNaN(props.width)) {
      if (props.hasOwnProperty('percentWidth') && props.percentWidth) elem.style.width = props.width + '%';else elem.style.width = props.width + 'px';
    }
  }

  if (props.hasOwnProperty('height')) {
    if (props.height == 'match_parent') {
      elem.style.height = '100%';
    } else if (props.height == 'wrap_content') {
      elem.style.height = "auto";
      // You see below
    } else if (!isNaN(props.height)) {
      if (props.hasOwnProperty('percentHeight') && props.percentHeight) elem.style.height = props.height + '%';else elem.style.height = props.height + 'px';
    }
  }

  if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
    if (props.percentMinWidth) elem.style.minWidth = props.minWidth + '%';else elem.style.minWidth = props.minWidth + 'px';
  }

  if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
    if (props.percentMinHeight) elem.style.minHeight = props.minHeight + '%';else elem.style.minHeight = props.minHeight + 'px';
  }

  if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
    if (props.percentMaxWidth) elem.style.maxWidth = props.maxWidth + '%';else elem.style.maxWidth = props.maxWidth + 'px';
  }

  if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
    if (props.percentMaxHeight) elem.style.maxHeight = props.maxHeight + '%';else elem.style.maxHeight = props.maxHeight + 'px';
  }

  if (props.hasOwnProperty('padding')) {
    var padding = props.padding.split(',').map(function (a) {
      return a * 1;
    });

    elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
  }

  if (props.hasOwnProperty('margin')) {
    var margin = props.margin.split(',').map(function (a) {
      return a * 1;
    });

    elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
  }

  if (props.hasOwnProperty('visibility')) {
    var visibility = props.visibility;
    if (visibility == 'invisible') elem.style.visibility = "hidden";else if (visibility == 'gone') elem.style.display = "none";else {
      elem.style.visibility = '';

      layout.initializeShow(type, elem, props);
    }
  } else {
    layout.initializeShow(type, elem, props);
  }

  if (props.hasOwnProperty('expand')) {
    var _visibility = props.expand + '';
    if (_visibility == 'true') {
      elem.style.visibility = '';
      layout.initializeShow(type, elem, props);
    } else elem.style.display = "none";
  }

  if (props.hasOwnProperty('layout_gravity')) {
    setLayoutGravity(elem, props);
  }
}

function applyStyleByKey(key, type, elem, props) {
  switch (key) {
    case 'popupMenu':
      elements.handlePopup(elem, props);
      break;

    case 'text':
      if (type == "editText") elem.value = props[key];else elements.handleTextElement(elem, props);
      break;

    case 'textFromHtml':
      if (type == "editText") elem.value = props[key];else elements.handleHTMLTextElement(elem, props);
      break;

    case 'style':
      for (var innerKey in props.style) {
        if (innerKey == "className") {
          elem.className += " " + props.style[innerKey];
        } else if (props.buttonClickOverlay !== undefined && ["background", "background-image"].includes(innerKey)) {
          elem.style[innerKey] = 'linear-gradient(to right, rgba(0,0,0,' + props.buttonClickOverlay + ') 50%, transparent 50%), ' + props.style[innerKey];
          elem.style["background-position"] = "right bottom";
          elem.style["background-size"] = "200% 100%, 100% 100%";
        } else {
          elem.style[innerKey] = props.style[innerKey];
        }
      }
      break;

    case 'attributes':
      for (var _innerKey in props.attributes) {
        elem.setAttribute(_innerKey, props.attributes[_innerKey]);
      }
      break;

    case 'className':
      if ((props[key] || "").trim() !== "") {
        props[key].split(" ").map(function (className) {
          elem.classList.add(className);
        });
      }
      break;

    case 'classList':
      JSON.parse(props[key]).forEach(function (obj) {
        elem.classList.add(obj);
      });
      break;

    case 'removeClassList':
      JSON.parse(props[key]).forEach(function (obj) {
        elem.classList.remove(obj);
      });
      break;

    default:
      if (props[key] && typeof props[key] == "function") {
        events.handleEventProp(key, elem, props);
      }
  }
}

function handleComponent(elem, props, firstRender) {
  /* Component Part */
  if (props.hasOwnProperty('elementType') && props.elementType == 'component') {
    elem.classList.add(window.__COM_CLASS_GROUP.WRAPPER);

    if (firstRender) elem.setAttribute('guid', props.guid);
  }

  if (props.hasOwnProperty('componentType') && props.componentType) renderComponent(elem, props, firstRender);
}

function setAttributes(type, elem, props, firstRender) {
  if (elem.classList && elem.classList.length > 0) {
    elem.classList.add(type);
  } else {
    elem.className = type;
  }

  /* New Style */

  applyGlobalStyles(type, elem, props);

  layout.setTypeSpecificStyles(type, elem, props);

  /* New Style End */

  for (var key in props) {
    applyStyleByKey(key, type, elem, props);
  }

  animation.setTransition(elem, props);

  if (firstRender) {
    events.setEventProps(type, elem, props);
  }

  handleComponent(elem, props, firstRender);
}

function addAdditionalViewProps(type, elem, props) {
  layout.setTypeBasedAttributes(type, elem, props);
  layout.setComputedStyles(elem, props);
  animation.setAnimationStyles(elem, props);
}

module.exports = {
  addAdditionalViewProps: addAdditionalViewProps,
  setAttributes: setAttributes,
  handleWrapContent: handleWrapContent
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Observer for afterRender */

var observer = function observer(elem) {
  var id = elem.id;
  if (!id || __OBSERVERS[id]) return;

  __OBSERVERS[id] = new MutationObserver(function (item, observer) {
    if (item && item[0].target) {
      var target = item[0].target;
      var _id = target.id;
      if (_id) {
        var view = __VIEWS[_id];

        if (view && view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
          view.props.afterRender();
        }
      }
    }

    observer.disconnect();
  });

  __OBSERVERS[id].observe(elem, {
    attributes: true
  });
};

function addObserver(elem, props) {
  if (!props.hasOwnProperty('afterRender') || typeof props.afterRender != "function") {
    return;
  }

  // We should run observer for the element
  observer(elem);
  elem.setAttribute('has_render', true);
}

function separatorInputKeyDownHandlerNew(ev) {
  ev.stopPropagation();
  try {
    var inputId = ev.target.id;
    var inputType = ev.inputType;
    var input = document.getElementById(inputId);
    var oldValidValue = "";
    if (input.oldValidValue) {
      oldValidValue = input.oldValidValue;
    }
    if (input.value.length === 0) {
      input.oldValidValue = input.value;
      return;
    }
    var dataPattern = input.getAttribute("data-pattern");
    if (dataPattern) {
      var data = dataPattern.split(',');
      var length = parseInt(data.pop());
      var regexPattern = new RegExp(data.join(''));
      var selectionStart = input.selectionStart;
      var selectionEnd = input.selectionEnd;
      var separator = input.getAttribute("separator");
      var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
      var value = input.value.replace(/[^a-zA-Z0-9@.-]/g, "");
      //If existing value itself greater than equal to max length
      if (length) {
        input.setAttribute("maxlength", length);
      }
      // If code doesn't matches regex pattern
      if (!regexPattern.test(value)) {
        input.value = oldValidValue;
        input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
        input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
        return;
      }
      //Insert separator 
      if (separator && separatorRepeat) {
        ev.preventDefault();
        var formattedString = "";
        for (var i = 0; i < value.length; i++) {
          var element = value[i];
          formattedString += element;
          var factor = 0;
          if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
            formattedString += separator;
          }
        }
        if (formattedString[length] == separator) {
          formattedString = formattedString.substring(0, formattedString.length - 1);
        }
        input.value = formattedString;
        if (inputType == "deleteContentBackward") {
          var cursorPosition = selectionStart;
          if (cursorPosition % (separatorRepeat + 1) === 0) {
            if (input.oldValidValue.length < formattedString.length) {
              cursorPosition += 1;
            } else {
              cursorPosition -= 1;
            }
          }
          if (cursorPosition < 0) {
            cursorPosition = 0;
          }
          input.oldValidValue = formattedString;
          input.focus();
          input.selectionStart = cursorPosition;
          input.selectionEnd = cursorPosition;
        }
      }
      input.oldValidValue = input.value;
    }
  } catch (err) {
    console.error(err);
  }
}

function separatorInputKeyDownHandler(ev) {
  ev.stopPropagation();
  try {
    var inputId = ev.target.id;
    var input = document.getElementById(inputId);
    var oldValidValue = "";
    if (input.oldValidValue) {
      oldValidValue = input.oldValidValue;
    }
    if (input.value.length === 0) {
      input.oldValidValue = input.value;
      return;
    }
    var dataPattern = input.getAttribute("data-pattern");
    if (dataPattern) {
      var data = dataPattern.split(',');
      var length = parseInt(data.pop());
      var regexString = data.join('');
      var selectionStart = input.selectionStart;
      var selectionEnd = input.selectionEnd;
      var newValue = input.value;
      if (length) {
        if (oldValidValue.length < input.value.length && oldValidValue.length + 1 > length) {
          input.value = oldValidValue;
          ev.preventDefault();
          input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
          input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
          return;
        }
      }
      var finalData = newValue.replace(/[^a-zA-Z0-9@.-]/g, "");
      if (regexString) {
        var regexPattern = new RegExp(regexString);
        if (!regexPattern.test(finalData)) {
          ev.preventDefault();
          input.value = oldValidValue;
          input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
          input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
          return;
        }
      }
      var separator = input.getAttribute("separator");
      var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
      if (separator && separatorRepeat) {
        ev.preventDefault();
        var formattedString = "";
        for (var index = 0; index < finalData.length; index++) {
          var element = finalData[index];
          formattedString += element;
          var factor = 0;
          if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
            formattedString += separator;
          }
        }
        if (formattedString[formattedString.length - 1] == separator) {
          formattedString = formattedString.substring(0, formattedString.length - 1);
        }
        input.value = formattedString;
        var cursorPosition = selectionStart;
        if (cursorPosition % (separatorRepeat + 1) === 0) {
          if (input.oldValidValue.length < formattedString.length) {
            cursorPosition += 1;
          } else {
            cursorPosition -= 1;
          }
        }
        if (cursorPosition < 0) {
          cursorPosition = 0;
        }
        input.oldValidValue = formattedString;
        input.focus();
        input.selectionStart = cursorPosition;
        input.selectionEnd = cursorPosition;
        console.log("formattedString----", formattedString);
      } else {
        input.oldValidValue = finalData;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function addEventHandler(eventType, key, elem, callback) {

  if (key == "onEnterPressedEvent") {
    elem.addEventListener('keyup', function (e) {
      e.stopPropagation();

      if (e.keyCode == 13) {
        callback(e);
      }
    });
  }

  switch (eventType) {
    case "input":
      elem.addEventListener('input', callback);
      break;
    case "change":
      elem.addEventListener('keyup', function (e) {
        callback(e.target.value);
      });
      break;
    case "focus":
      elem.addEventListener('focus', function (e) {
        callback(true);
      });
      elem.addEventListener('blur', function (e) {
        callback(false);
      });
      break;
    default:
      elem.addEventListener(eventType, function (e) {
        e.stopPropagation();
        callback(e);
      });
      break;
  }
}

function setEventProps(type, elem, props) {
  if (type == "editText" && elem.tagName.toLowerCase() == "input") {
    var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;
    if (props.autofocus && !isIPhone) {
      elem.focus();
    }
    if (window.preponeSpace) {
      addEventHandler('input', '', elem, separatorInputKeyDownHandlerNew);
    } else {
      addEventHandler('input', '', elem, separatorInputKeyDownHandler);
    }
  }

  var events = ['onClick', 'onEnterPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus'];

  for (var i = 0; i < events.length; i++) {
    var key = events[i];
    var eventType = key.substring(2, key.length).toLowerCase();

    if (props.hasOwnProperty(key) && typeof props[key] == "function") {
      addEventHandler(eventType, key, elem, props[key]);
    }
  }
}

function handleEventProp(key, elem, props) {
  var eventType = key.substring(2, key.length).toLowerCase();
  var elemCB = props[key];
  elem.style.userSelect = 'none';
  if (eventType == "change") {
    eventType = "input";
  }

  elem.addEventListener('blur', function () {
    var inputValue = elem.value;
    if (inputValue == "") {
      elem.classList.remove("filled");
      elem.parentNode.classList.remove('focused');
    } else {
      elem.classList.add('filled');
    }
  });

  elem['onfocus'] = function (e) {
    elem.parentNode.classList.add('focused');
    if (eventType == "focus") {
      e.stopPropagation();
      elemCB(e);
    }
  };
}

module.exports = {
  addObserver: addObserver,
  handleEventProp: handleEventProp,
  setEventProps: setEventProps
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function setLayoutGravity(elem, props) {
  switch (props.layout_gravity) {
    case 'center_horizontal':
    case 'center_vertical':
    case 'center':
      elem.style['align-self'] = 'center';
      break;
    case 'left':
    case 'start':
      elem.style['align-self'] = 'flex-start';
      break;
    case 'right':
    case 'end':
      elem.style['align-self'] = 'flex-end';
      break;
  }
}

function setGravityStylesForRow(elem, props) {
  if (!props.hasOwnProperty('gravity') || !props.gravity) {
    props.gravity = '';
    //return;
  }

  switch (props.gravity) {
    case 'center_vertical':
      elem.style['align-items'] = 'center';
      elem.style['justify-content'] = 'flex-start';
      break;
    case 'center_horizontal':
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'center';
      break;
    case 'center':
      elem.style['align-items'] = "center";
      elem.style['justify-content'] = "center";
      break;
    case 'left':
    case 'start':
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'flex-start';
      break;
    case 'right':
    case 'end':
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'flex-end';
      break;
    default:
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'flex-start';
      break;
  }
}

function setGravityStylesForColumn(elem, props) {
  if (!props.hasOwnProperty('gravity') || !props.gravity) {
    props.gravity = '';
    //return;
  }

  switch (props.gravity) {
    case 'center_vertical':
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'center';
      break;
    case 'center_horizontal':
      elem.style['align-items'] = 'center';
      elem.style['justify-content'] = 'flex-start';
      break;
    case 'center':
      elem.style["align-items"] = "center";
      elem.style["justify-content"] = "center";
      break;
    case 'left':
    case 'start':
      elem.style['justify-content'] = 'flex-start';
      elem.style['align-items'] = 'flex-start';
      break;
    case 'right':
    case 'end':
      elem.style['align-items'] = 'flex-end';
      elem.style['justify-content'] = 'flex-start';
      break;
    default:
      elem.style['align-items'] = 'flex-start';
      elem.style['justify-content'] = 'flex-start';
      break;
  }
}

module.exports = {
  setGravityStylesForRow: setGravityStylesForRow,
  setGravityStylesForColumn: setGravityStylesForColumn,
  setLayoutGravity: setLayoutGravity
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(48);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(15);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(15);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(49);
var buildURL = __webpack_require__(12);
var buildFullPath = __webpack_require__(51);
var parseHeaders = __webpack_require__(54);
var isURLSameOrigin = __webpack_require__(55);
var createError = __webpack_require__(16);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(56);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(50);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var merge = __webpack_require__(1).merge;

String.prototype.addCmd = function (data) {
  return this.concat(data);
};

Array.prototype.addCmd = function (data) {
  this.push(data);
  return this;
};

var parseParams = void 0;
if (false) {}else if (true) parseParams = __webpack_require__(5);else {}

var BaseView = function () {
  function BaseView(props, children) {
    _classCallCheck(this, BaseView);

    this.props = props || {};
    this.children = children || [];

    window.__SETFN = function (config) {
      Android.runInUI(this.set(config), null);
    }.bind(this);

    this.idSet = {};

    if (this.props.id) {
      this.idSet["id"] = this.props.id;
    } else {
      this.props.id = this.id("id");
    }

    if (this.props._ref) {
      this.props._ref(this);
    }
  }

  _createClass(BaseView, [{
    key: "resolveChildren",
    value: function resolveChildren() {
      return this.children.map(function (child) {
        return child.render();
      });
    }
  }, {
    key: "findRecurse",
    value: function findRecurse(obj, selector) {
      var children = obj.children;

      for (var i = 0; i < children.length; i++) {
        if (children[i].displayName && children[i].displayName == selector) {
          this.foundChildren.push(children[i]);
        }

        if (children[i].children && children[i].children.length) this.findRecurse(children[i], selector);
      }

      return;
    }
  }, {
    key: "find",
    value: function find(selector, obj) {
      this.foundChildren = [];

      if (!obj) this.findRecurse(this.layout, selector);else this.findRecurse(obj, selector);

      return this.foundChildren;
    }
  }, {
    key: "id",
    value: function id(name) {
      if (!this.idSet[name]) {
        window.__ID++;
        this.idSet[name] = window.__ID;
      }

      return this.idSet[name];
    }
  }, {
    key: "setIds",
    value: function setIds(arr) {
      if (!this.idSet) this.idSet = {};

      for (var i = 0; i < arr.length; i++) {
        if (!this.idSet[arr[i]]) {
          window.__ID++;
          this.idSet[arr[i]] = window.__ID + '';
        }
      }
    }
  }, {
    key: "handleSpecialChars",
    value: function handleSpecialChars(value) {
      value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
      value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
      value = value.indexOf('=') > -1 ? value.replace(/\=/g, '\\\\=') : value;
      value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

      return value;
    }
  }, {
    key: "cmdForAndroid",
    value: function cmdForAndroid(config) {
      var cmd = "set_view=ctx->findViewById:i_" + config.id + ";";
      var runInUI;

      if (config.toast) {
        cmd = "set_TOAST=android.widget.Toast->makeText:ctx_ctx,cs_" + this.handleSpecialChars(config.text) + ",i_" + (config.duration == "short" ? 0 : 1) + ";get_TOAST->show";
      } else if (config && Object.keys(config).length) {
        delete config.id;

        config.root = "true";
        runInUI = parseParams("linearLayout", config, "get").runInUI;

        cmd += runInUI + ';';
      }

      return cmd;
    }
  }, {
    key: "cmdContainer",
    value: function cmdContainer() {
      if (false) {}
      return [];
    }
  }, {
    key: "cmdForWeb",
    value: function cmdForWeb(config) {
      if (Object.keys(config).length) return parseParams("linearLayout", config, "set");
    }
  }, {
    key: "cmd",
    value: function cmd(config) {
      if (false) {}else if (true) return this.cmdForWeb(config);
      return config;
    }
  }, {
    key: "appendChild",
    value: function appendChild(id, jsx, index, fn, replaceChild) {
      var proxyFnName;
      if (!replaceChild) {
        replaceChild = false;
      }

      if (fn) {
        proxyFnName = 'F' + window.__FN_INDEX;
        window.__PROXY_FN[proxyFnName] = fn;
        window.__FN_INDEX++;
      }

      jsx =  true ? jsx : undefined;

      if (proxyFnName) Android.addViewToParent(id, jsx, index, proxyFnName, replaceChild);else Android.addViewToParent(id, jsx, index, null, replaceChild);
    }
  }, {
    key: "getView",
    value: function getView(jsx) {
      if (true) return jsx;

      return JSON.stringify(jsx);
    }
  }, {
    key: "updateProps",
    value: function updateProps(props) {
      this.props = merge(this.props, props);
      var oldContainerId = this.layout.idSet.id;
      var layout = this.render();
      for (var i = 0; i < layout.children.length; i++) {
        if (i == 0) this.replaceChild(oldContainerId, layout.children[i], i);else this.appendChild(oldContainerId, layout.children[i], i);
      }
      this.layout.idSet.id = oldContainerId;
    }
  }, {
    key: "removeView",
    value: function removeView(id) {
      if (__OS == "WEB") return Android.removeView(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";set_PARENT=get_VIEW->getParent;get_PARENT->removeView:get_VIEW;";
    }
  }, {
    key: "removeChildren",
    value: function removeChildren(id) {
      if (__OS == "WEB") return Android.removeChildren(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";get_VIEW->removeAllViews;";
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(id, jsx, index, fn) {
      this.appendChild(id, jsx, index, fn, true);
    }
  }]);

  return BaseView;
}();

module.exports = BaseView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	init: __webpack_require__(23),
	doms: __webpack_require__(3),
	handler: __webpack_require__(61),
	helpers: __webpack_require__(6),
	baseView: __webpack_require__(20),
	animations: __webpack_require__(62),
	callbackMapper: __webpack_require__(7),
	getOS: __webpack_require__(1).getOS,
	prestoMerge: __webpack_require__(1).merge,
	prestoClone: __webpack_require__(1).clone
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

/*
 Used to initialize defaults for window funcions and variables.
*/
var _require = __webpack_require__(1),
    merge = _require.merge;

window.PrestoUI = __webpack_require__(24);

var getCurrTime = function getCurrTime() {
    return new Date().getTime();
};

// window.__OS = getOS()
if (false) { var getScreenDetails; }

if (true) {
    window.Android = __webpack_require__(27);
    window.JBridge = __webpack_require__(39);
} else {}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_width")) {
    window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
} else {
    window.__WIDTH = "1080";
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_height")) {
    window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
} else {
    window.__HEIGHT = "1920";
}

var guid = Math.random().toString(36).substr(2, 9);

//Intializing defaults
if (true) {
    /* Components */
    window.__COM_EVENT = false;
    window.__COM_RENDERED = {
        SWITCH_GLOBAL: false,
        DRP: {},
        DSB: {},
        DB: {},
        NAVBAR: {}
    };

    window.__COM_CLASS_GROUP = {
        WRAPPER: 'PDC_com_wrapper',
        NAVBAR: 'PDC_com_navbar',
        NAVBAR_ITEM: 'PDC_com_navbar_item',
        NAVBAR_ITEM_WITH_SUB: 'PDC_com_navbar_has_sub',
        NAVBAR_SUB: 'PDC_com_navbar_sub',
        NAVBAR_SUB_RIGHT: 'PDC_com_navbar_sub_right',
        NAVBAR_SUB_ITEM: 'PDC_com_navbar_subitem',
        DRP: 'PDC_com_drp',
        DRP_BODY: 'PDC_com_drp_body',
        DB: 'PDC_com_db',
        DB_FULL_BODY: 'PDC_com_db_full_body',
        DB_BODY: 'PDC_com_db_body',
        DB_OPTIONS: 'PDC_com_db_options',
        DB_OPTION: 'PDC_com_db_option',
        DSB: 'PDC_com_dsb',
        DSB_FULL_BODY: 'PDC_com_dsb_full_body',
        DSB_BODY: 'PDC_com_dsb_body',
        DSB_OPTIONS: 'PDC_com_dsb_options',
        DSB_OPTION: 'PDC_com_dsb_option',
        DSB_SEARCH_WRAP: 'PDC_com_dsb_search_wrap',
        DSB_SEARCH: 'PDC_com_dsb_search',
        SWITCH: 'PDC_com_switch',
        SWITCH_BODY: 'PDC_com_switch_body',
        SWITCH_SLIDER: 'PDC_com_switch_slider',
        BT: 'PDC_com_bt',
        BT_DISABLED: 'PDC_com_bt_disabled'
    };
    window.__COM_COLOR_GROUP = {
        BG: '#ffffff',
        ACTIVE_BG: '#EEF1F8',
        ACTIVE_COLOR: 'rgb(53, 64, 82)',
        INACTIVE_COLOR: 'rgba(53, 64, 82, 0.5)',
        BORDER_COLOR: '#A3AFC2',
        ACTIVE_BORDER_COLOR: '#707886',
        SEARCH_COLOR: '#dddddd',
        INACTIVE_SWITCH: '#B7DBBC',
        ACTIVE_SWITCH: '#36AF47',
        BT_BORDER_COLOR: '#1585D8',
        BT_BG_COLOR: '#1991EB',
        BT_COLOR: '#ffffff'
    };
    window.__COM_ACTIVE = {
        DSB: '',
        NAVBAR: '',
        DB: ''
        /* Components End */

        /* Modal */
    };window.__STYLE_ID = 'style_' + guid;
    window.__RENDERED_KEYFRAMES = [];
    window.__MODAL_PROPS = {};
    window.__CONTENTMODAL_CLASS = 'PDC_modal';
    window.__OPENMODAL_CLASS = 'PDC_modal-open';
    window.__BACKDROPMODAL_CLASS = 'PDC_modal-backdrop';
    window.__DISABLEDBACKDROP_CLASS = 'PDC_modal-backdrop-disabled';
    window.__SHOWNMODAL_CLASS = 'PDC_modal-shown';
    window.__FADEMODAL_CLASS = 'PDC_modal-fade';
    window.__SLIDEMODAL_CLASS = 'PDC_modal-slide';
    /* Modal End */

    window.onclick = function (event) {
        if (event.target && event.target.classList.contains(window.__BACKDROPMODAL_CLASS) && !event.target.classList.contains(window.__DISABLEDBACKDROP_CLASS)) {
            document.body.classList.remove(window.__OPENMODAL_CLASS);
            event.target.classList.remove(window.__SHOWNMODAL_CLASS);

            var id = event.target.id;
            id = id.replace(window.__BACKDROPMODAL_CLASS + '_', '');

            var view = __VIEWS[id];
            if (view && view.props.onDismiss && typeof view.props.onDismiss == "function") {
                view.props.onDismiss();
            }
        }
    };

    var duiShowScreen = function duiShowScreen(callback, state) {
        var popupMenu = document.getElementsByClassName("popupMenu");
        for (var i = 0; i < popupMenu.length; i++) {
            popupMenu[i].style.display = "none";
        }
    };
    window.__duiShowScreen = duiShowScreen;
} else {}

window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1;

window.__PROXY_FN = {};
window.__FN_INDEX = 0;
window.__ROOTSCREEN = null;
window.__CACHED_SCREENS = {};
window.__SCREEN_COUNT = 0;
window.__CURR_SCREEN = null;
window.__PREV_SCREEN = null;
window.__ANIMATE_DIR = null;
window.__SCREEN_STACK = [];
window.__LAST_FN_CALLED = null;
window.__THROTTELED_ACTIONS = [];
window.__VIEWS = {};
window.__VIEW_DIMENSIONS = {};
window.__OBSERVERS = {};
window.ZIndex = 0;

window.callUICallback = function () {
    var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
    var fName = args[0];
    var functionArgs = args.slice(1);
    var currTime;
    var timeDiff;

    if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
        return JBridge.setClickFeedback(args[1]);
    }

    if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
        window.__PROXY_FN[fName].apply(null, functionArgs);
    } else if (window.__LAST_FN_CALLED && fName == window.__LAST_FN_CALLED.fName) {
        currTime = getCurrTime();
        timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;

        if (timeDiff >= 300) {
            window.__PROXY_FN[fName].apply(null, functionArgs);
            window.__LAST_FN_CALLED.timeStamp = currTime;
        } else {
            console.warn("function throtteled", fName);
            console.warn("time diff", timeDiff);
        }
    } else {
        window.__PROXY_FN[fName].apply(null, functionArgs);
        window.__LAST_FN_CALLED = {
            timeStamp: new Date().getTime(),
            fName: fName
        };
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var prestoDom = __webpack_require__(3);
var helpers = __webpack_require__(6);
var webParseParams;
var iOSParseParams;
var parseParams;
var helper = __webpack_require__(1);

if (true) {
  webParseParams = helpers.web.parseParams;
} else {}

function domAll(elem) {
  if (!elem.__ref) {
    elem.__ref = createPrestoElement();
  }

  if (elem.props.id) {
    elem.__ref.__id = parseInt(elem.props.id, 10) || elem.__ref.__id;
  }

  var type = helper.clone(elem.type, null);
  var props = helper.clone(elem.props, null);

  if (props.focus == false && "WEB" === "ANDROID") {
    delete props.focus;
  }

  var children = [];

  for (var i = 0; i < elem.children.length; i++) {
    children.push(domAll(elem.children[i]));
  }

  if (__OS == "WEB" && props.onResize) {
    window.__resizeEvent = props.onResize;
  }

  props.id = elem.__ref.__id;
  if (elem.parentType && "WEB" == "ANDROID") return prestoDom({ elemType: type, parentType: elem.parentType }, props, children);

  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);
  if (false) {} else {
    return res;
  }
}

// Not exported
function cmdForAndroid(config, set, type) {
  if (set) {
    if (config.id) {
      var obj = parseParams(type, config, "set");
      var cmd = obj.runInUI.replace("this->setId", "set_view=ctx->findViewById").replace(/this->/g, "get_view->");
      cmd = cmd.replace(/PARAM_CTR_HOLDER[^;]*/g, "get_view->getLayoutParams;");
      obj.runInUI = cmd;
      return obj;
    } else {
      console.error("ID null, this is not supposed to happen. Debug this or/and raise a issue in bitbucket.");
    }
    return {};
  }

  var _id = config.id;
  var cmd = "set_view=ctx->findViewById:i_" + _id + ";";
  // var runInUI;
  delete config.id;
  config.root = "true";
  var obj = parseParams(type, config, "get");
  obj.runInUI = cmd + obj.runInUI + ';';
  obj.id = _id;
  return obj;
}

function getRunInUICmd(prop) {
  var cmd;
  if (false) {} else if (false) {} else {
    cmd = webParseParams("linearLayout", prop, "set");
  }
  return cmd;
}

// Not exported
function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  };
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false && "WEB" == "ANDROID") {
    return;
  }

  if (false) { var cmd; } else if (false) {} else {
    Android.runInUI(webParseParams("linearLayout", prop, "set"));
  }
  // Android.runInUI(parseParams("linearLayout", prop, "set"));
}

function replaceView(element, attribute, removeProp) {
  // console.log("REPLACE VIEW", element.__ref.__id, element.props);
  var props = helper.clone(element.props, null);
  props.id = element.__ref.__id;
  var rep;
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];

  if (viewGroups.indexOf(element.type) != -1) {
    props.root = true;
    rep = prestoDom(element.type, props, []);
  } else if (false) {} else {
    rep = prestoDom(element.type, props, []);
  }
  if (false) {} else {
    Android.replaceView(rep, element.__ref.__id);
  }
}

function createPrestoElement() {
  if (typeof window.__ui_id_sequence != "undefined" && window.__ui_id_sequence != null) {
    return { __id: ++window.__ui_id_sequence };
  } else {
    window.__ui_id_sequence = typeof Android.getNewID == "function" ? parseInt(Android.getNewID()) * 1000000 : window.__PRESTO_ID;
    return { __id: ++window.__ui_id_sequence };
  }
};

function moveChild(child, parent, index) {
  Android.moveView(child.__ref.__id, index);
}

function removeChild(child, parent, index) {
  // console.log("Remove child :", child.type);
  Android.removeView(child.__ref.__id + "");
}

function addChild(child, parent, index) {
  if (child.type == null) {
    console.warn("child null");
  }
  // console.log("Add child :", child.__ref.__id, child.type);
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];
  if (false) {} else Android.addViewToParent(parent.__ref.__id, domAll(child), index, null, null);
}

function addAttribute(element, attribute) {
  // console.log("add attr :", attribute);
  element.props[attribute.value0] = attribute.value1;
  applyProp(element, attribute, true);
}

function removeAttribute(element, attribute) {
  // console.log("remove attr :", attribute);
  replaceView(element, attribute, true);
}

function updateAttribute(element, attribute) {
  // console.log("update attr :", attribute);
  element.props[attribute.value0] = attribute.value1;

  applyProp(element, attribute, false);
}

function insertDom(root, dom, cb) {
  root.children.push(dom);
  dom.parentNode = root;
  dom.__ref = createPrestoElement();
  window.N = root;

  var rootId = window.__ROOTSCREEN.idSet.root;

  dom.props.root = true;

  var length = window.__ROOTSCREEN.idSet.child.push(dom.__ref.__id);

  var callback = window.callbackMapper(executePostProcess(cb));
  if (false) {} else {
    Android.addViewToParent(rootId, domAll(dom), length - 1, callback, null);
  }

  return dom.__ref.__id;
}

function executePostProcess(cb) {
  return function () {
    cb();

    if (window.__dui_screen && window["afterRender"]) {
      for (var tag in window["afterRender"][window.__dui_screen]) {
        try {
          window["afterRender"][window.__dui_screen][tag]()();
          window["afterRender"][window.__dui_screen]["executed"] = true;
        } catch (err) {
          console.warn(err);
        }
      }
    }

    if (JBridge && JBridge.setShadow) {
      for (var tag in window.shadowObject) {
        JBridge.setShadow(window.shadowObject[tag]["level"], JSON.stringify(window.shadowObject[tag]["viewId"]), JSON.stringify(window.shadowObject[tag]["backgroundColor"]), JSON.stringify(window.shadowObject[tag]["blurValue"]), JSON.stringify(window.shadowObject[tag]["shadowColor"]), JSON.stringify(window.shadowObject[tag]["dx"]), JSON.stringify(window.shadowObject[tag]["dy"]), JSON.stringify(window.shadowObject[tag]["spread"]), JSON.stringify(window.shadowObject[tag]["factor"]));
      }
    }
  };
}

module.exports = {
  domAll: domAll,
  getDomToRender: getDomToRender,
  getRunInUICmd: getRunInUICmd,
  replaceView: replaceView,
  createPrestoElement: createPrestoElement,
  moveChild: moveChild,
  removeChild: removeChild,
  addChild: addChild,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  updateProperty: updateAttribute,
  addProperty: addAttribute,
  insertDom: insertDom
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var parseParams = __webpack_require__(4).parseParams;

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

module.exports = function (type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children = children.flatten();

  if (!props) props = {};

  if (typeof type === "string") {
    props = parseParams(type, props);

    var obj = {
      props: props,
      type: type,
      children: children
    };

    window.__VIEWS[props.id] = obj;
    window.__VIEW_DIMENSIONS[props.id] = null;
    return obj;
  } else {
    return new type(props, children);
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	callbackMapper: __webpack_require__(7)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var _require = __webpack_require__(2),
    inflateView = _require.inflateView,
    computeChildDimens = _require.computeChildDimens,
    addDomToParent = _require.addDomToParent;

var helper = __webpack_require__(1);

function getScreenDimensions() {
  var element = document.getElementById("content");
  return JSON.stringify({
    width: element.offsetWidth,
    height: element.offsetHeight
  });
}

function runInUI(cmd, onlyParent) {
  if (typeof cmd == "string") return;

  var id = cmd.id;
  if (id) {
    var elem = document.getElementById(id);

    if (elem) {
      var view = window.__VIEWS[id];
      view.props = helper.merge(view.props, cmd);

      var parentId = null;
      var parentElem = null;
      var parentView = null;

      if (elem) {
        var _view = window.__VIEWS[id];
        _view.props = helper.merge(_view.props, cmd);

        var _parentId = null;
        var _parentElem = null;
        var _parentView = null;

        if (_view.type == 'modal') {
          _parentId = elem.getAttribute('virtual_parent');

          if (_parentId) {
            _parentView = window.__VIEWS[_parentId];
            _parentElem = document.getElementById(_parentId);

            if (_parentElem && _parentView) {
              inflateView(_view, _parentElem, null, true);
            }
          }
        } else {
          _parentId = elem.parentNode.id;

          if (_parentId) {
            _parentView = window.__VIEWS[_parentId];
            _parentElem = document.getElementById(_parentId);

            if (_parentElem && _parentView) {
              var siblingView = null;

              for (var i = 0; i < _parentView.children.length; i++) {
                if (_parentView.children[i].props.id == id) {
                  if (i != 0) siblingView = _parentView.children[i - 1];else siblingView = _parentView;
                  break;
                }
              }

              computeChildDimens(_parentView);
              inflateView(_view, _parentElem, siblingView, onlyParent || false, false, true);
            }
          }
        }
      }
    }
  }
  //recompute()
  //Render.runInUI(cmd)
}

function Render(view, cb) {
  /* Global Style Tag */
  var style_id = window.__STYLE_ID;

  var styleElem = document.getElementById(style_id);
  if (!styleElem || styleElem == undefined) {
    styleElem = document.createElement('style');
    styleElem.setAttribute('id', style_id);
    styleElem.type = 'text/css';

    if (styleElem.styleSheet) {
      styleElem.styleSheet.cssText = "";
    } else {
      styleElem.appendChild(document.createTextNode(""));
    }

    document.head.appendChild(styleElem);
  }
  /* Global Style Tag End */

  var parentElement = document.getElementById("content");
  var parentView = {
    type: "linearLayout",
    props: {
      "h": parentElement.clientHeight,
      "w": parentElement.clientWidth
    },
    children: [view]
  };

  computeChildDimens(parentView);
  var elem = inflateView(view, parentElement, null);

  if (cb) window.callUICallback(cb);

  if (parentElement.childElementCount > 1) {
    var iterableChildNodes = Array.prototype.slice.call(parentElement.children);
    var maxZIndex = 0;
    var currElement = void 0;
    iterableChildNodes.forEach(function (each) {
      if (each.id == view.props.id) {
        currElement = each;
      } else if (each.style["z-index"] && +each.style["z-index"] > maxZIndex) {
        maxZIndex = +each.style["z-index"];
      }
    });

    if (currElement) {
      currElement.style["z-index"] = maxZIndex + 1;
      // to render on top of the existing screen
      currElement.style["position"] = "absolute";
      currElement.style["top"] = "0";
      currElement.style["left"] = "0";
    }
  }
}

function moveView(id, index) {
  if (!window.__VIEWS[id]) {
    return console.error(new Error("MoveView: Invalid view ID: " + id));
  }
  var view = window.__VIEWS[id];
  var viewElem = document.getElementById(id);
  var parentId = viewElem.parentNode.id;
  var parent = window.__VIEWS[parentId];
  var parentElem = document.getElementById(parentId);
  var children = parent.children;
  children.splice(children.indexOf(view), 1);
  children.splice(index, 0, view);
  computeChildDimens(parent);

  children.forEach(function (child) {
    inflateView(child, parentElem);
  });
}

function prepareAndReturnDom(view) {
  return inflateView(view);
}

function addViewToParent(id, view, index, cb, replace) {
  var parentElem = document.getElementById(id);
  var parentView = window.__VIEWS[id];
  var siblingView = null;

  if (!parentElem || !parentView) return;

  parentView.children.splice(index, 0, view);

  if (index == 0) siblingView = parentView;else siblingView = parentView.children[index - 1];

  inflateView(view, parentElem, siblingView);

  if (cb) window.callUICallback(cb);
}

function addInflatedViewToParent(id, elem, view, index, cb) {
  var parentElem = document.getElementById(id);
  var parentView = window.__VIEWS[id];
  var siblingView = null;

  if (!parentElem || !parentView) return;

  parentView.children.splice(index, 0, view);

  if (index == 0) siblingView = parentView;else siblingView = parentView.children[index - 1];

  addDomToParent(elem, parentElem, siblingView);

  if (cb) window.callUICallback(cb);
}

function getChildModalViews(view) {
  var modalViews = [];

  if (view.children) {
    for (var i = 0; i < view.children.length; i++) {
      var childView = view.children[i];

      if (childView.type == 'modal') {
        modalViews.push(childView);
      } else {
        var items = getChildModalViews(childView);
        if (items && items.length > 0) {
          if (modalViews.length > 0) {
            modalViews = items;
          } else {
            modalViews = modalViews.concat(items);
          }
        }
      }
    }
  }

  return modalViews;
}

function removeView(id, ignoreViewExternals) {
  var viewElem = document.getElementById(id);
  if (!viewElem) {
    !ignoreViewExternals && helper.clearViewExternals(view);
    return;
  }

  var parentId = viewElem.parentNode.id;
  if (!parentId) {
    !ignoreViewExternals && helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var parentElem = document.getElementById(parentId);
  if (!parentElem) {
    !ignoreViewExternals && helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var view = window.__VIEWS[id];

  if (!view || !view.type) return;

  var parent = null;
  var idx = void 0;

  if (view.type == 'modal') {
    var virtualParentId = viewElem.getAttribute('virtual_parent');
    parent = window.__VIEWS[virtualParentId];

    idx = parent.children.indexOf(view);
    parent.children.splice(idx, 1);

    !ignoreViewExternals && helper.clearViewExternals(view);
    parentElem.remove();
  } else {
    /* Modal view among children */
    var childModalViews = getChildModalViews(view);
    if (childModalViews && childModalViews.length > 0) {
      for (var i = 0; i < childModalViews.length; i++) {
        var modalView = childModalViews[i];
        var modalElem = document.getElementById(modalView.props.id);

        if (modalElem) {
          var backdropId = modalElem.parentNode.id;
          var backdropElem = document.getElementById(backdropId);

          backdropElem.remove();
        }
      }
    }
    /* Modal view among children end */

    parent = window.__VIEWS[parentId];

    if (parent) {
      idx = parent.children.indexOf(view);
      parent.children.splice(idx, 1);
    }

    !ignoreViewExternals && helper.clearViewExternals(view);
    viewElem.remove();
  }
}

function replaceModalView(view, id) {
  var elem = document.getElementById(id);
  if (!elem) return;

  var backdropId = elem.parentNode.id;
  var backdropElem = document.getElementById(backdropId);

  var parentId = elem.getAttribute('virtual_parent');
  var parentView = window.__VIEWS[parentId];
  var parentElem = document.getElementById(parentId);

  var oldView = null;

  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      oldView = parentView.children[i];
      break;
    }
  }

  if (!oldView) return;

  /* Get Children */
  var childrenElem = [];
  var children = oldView.children;

  if (elem && children) {
    for (var _i = 0; _i < children.length; _i++) {
      var childId = children[_i].props.id;
      var childElem = document.getElementById(childId);

      if (childElem) childrenElem.push(childElem);
    }
  }
  /* Get Children End */

  oldView.props = view.props;
  backdropElem.remove();
  inflateView(oldView, parentElem, null, true);
  window.__VIEWS[id] = oldView;

  /* Append Children */
  elem = document.getElementById(id);

  if (elem && childrenElem.length > 0) {
    for (var _i2 = 0; _i2 < childrenElem.length; _i2++) {
      elem.appendChild(childrenElem[_i2]);
    }
  }
  /* Append Children End */
}

function replaceView(view, id) {
  if (view.type == 'modal') {
    replaceModalView(view, id);
    return;
  }

  var elem = document.getElementById(id);
  if (!elem) return;

  var parentId = elem.parentNode.id;
  var parentElem = document.getElementById(parentId);
  var parentView = window.__VIEWS[parentId];

  var oldView = null;
  var siblingView = null;

  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      oldView = parentView.children[i];

      if (i != 0) siblingView = parentView.children[i - 1];else siblingView = parentView;
      break;
    }
  }

  if (!oldView) return;

  /* Get Children */
  var childrenElem = [];
  var children = oldView.children;

  if (elem && children) {
    for (var _i3 = 0; _i3 < children.length; _i3++) {
      var childId = children[_i3].props.id;
      var childElem = document.getElementById(childId);

      if (childElem) childrenElem.push(childElem);
    }
  }
  /* Get Children End */

  oldView.props = view.props;
  parentElem.removeChild(elem);
  inflateView(oldView, parentElem, siblingView, true);
  window.__VIEWS[id] = oldView;

  /* Append Children */
  elem = document.getElementById(id);

  if (elem && childrenElem.length > 0) {
    for (var _i4 = 0; _i4 < childrenElem.length; _i4++) {
      elem.appendChild(childrenElem[_i4]);
    }
  }
  /* Append Children End */
}

function recompute() {
  var rootnode = document.getElementById('content');
  var child = rootnode.firstElementChild;
  var rootview = window.__VIEWS[child.id];
  Render(rootview, null);
}

function getNewID() {
  window.JOS_PRESTO_ID = window.JOS_PRESTO_ID || 1;
  return window.JOS_PRESTO_ID++;
}

function getWindow() {
  return window;
}

function getDocument() {
  return window.document;
}

module.exports = {
  getScreenDimensions: getScreenDimensions,

  runInUI: runInUI,

  Render: Render,

  moveView: moveView,

  addViewToParent: addViewToParent,

  addInflatedViewToParent: addInflatedViewToParent,

  prepareAndReturnDom: prepareAndReturnDom,

  getChildModalViews: getChildModalViews,

  removeView: removeView,

  replaceModalView: replaceModalView,

  replaceView: replaceView,

  recompute: recompute,

  getNewID: getNewID,

  getWindow: getWindow,

  getDocument: getDocument
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

/*
  ViewContext of the Parent.f
  Obj holds the available width and height of it's parent container
  and x & y offset for it's children
*/
function viewCtxObj(view) {
  var props = view.props;
  var obj = {
    w: props.w * 1,
    h: props.h * 1,
    width: props.w * 1
  };

  view.children.forEach(function (child) {
    child.props.w = child.props.width;
    child.props.h = child.props.height;
  });

  return obj;
}

/*
  Returns true if container has a child with match_parent for a
  given dimension (width or height)
*/
function hasMatchParentChild(childs, dimen) {
  for (var i = 0; i < childs.length; i++) {
    var childProp = childs[i].props;

    if (childProp[dimen] && childProp[dimen] == "match_parent") {
      return true;
    }
  }
  return false;
}

/*
  Returns true if container has weighted child
*/
function hasWeightChild(type, childs) {
  if (type != "linearLayout") {
    return false;
  }

  for (var i = 0; i < childs.length; i++) {
    var child = childs[i].props;

    if (child.weight && parseFloat(child.weight) > 0) {
      return true;
    }
  }
  return false;
}

function computeRelativeLayout(view) {
  var viewCtx = viewCtxObj(view);
  var children = view.children;

  children.forEach(function (child) {
    var props = child.props;

    props.absolute = true;
    props.fromTop = 0;
    props.fromBottom = 'auto';
    props.fromLeft = 0;
    props.fromRight = 'auto';

    if (props.hasOwnProperty('alignParentLeft') && props.alignParentLeft) {
      props.fromLeft = 0;
      props.fromRight = 'auto';
    }
    if (props.hasOwnProperty('alignParentRight') && props.alignParentRight) {
      props.fromLeft = 'auto';
      props.fromRight = 0;
    }

    if (props.hasOwnProperty('alignParentBottom') && props.alignParentBottom) {
      props.fromTop = 'auto';
      props.fromBottom = 0;
    }
  });
}

function computeLinearlayout(view) {
  var viewCtx = viewCtxObj(view);
  var parentProps = view.props;
  var children = view.children;
  var isHorizontal = parentProps.orientation === "vertical" ? false : true;

  var activeDimen = isHorizontal ? "w" : "h";
  var passiveDimen = isHorizontal ? "h" : "w";

  var hasWeight = hasWeightChild(view.type, children);
  var hasMatchParent = hasMatchParentChild(children, activeDimen);

  if (hasWeight && hasMatchParent) {
    // We can't use both at the same time
    return;
  }

  /* Initialize */
  children.forEach(function (child) {
    var props = child.props;

    if (props.hasOwnProperty("activeDimen")) delete props["activeDimen"];
    if (props.hasOwnProperty("activeWeight")) delete props["activeWeight"];
  });
  /* Initialize End */

  if (hasMatchParent || hasWeight) {
    var first = true;
    /* Iterate Child */
    children.forEach(function (child) {
      var props = child.props;

      if (props.hasOwnProperty(activeDimen) && props[activeDimen] == 'match_parent') {
        props['activeDimen'] = activeDimen;

        if (first) {
          props['activeWeight'] = 1;
          first = false;
        } else {
          props['activeWeight'] = 0;
        }
      } else {
        if (props.hasOwnProperty('weight') && !isNaN(props['weight'])) {
          var weight = parseFloat(props['weight']);

          if (weight > 0) {
            props['activeDimen'] = activeDimen;
            props['activeWeight'] = weight;
          }
        }
      }
    });
    /* Iterate Child End */
  }
} // End Compute LinearLayout

function computeChildDimens(view) {
  if (view.type == "linearLayout") {
    computeLinearlayout(view);
  } else if (view.type == "scrollView" || view.type == "listView") {
    view.props.orientation = "vertical";
    computeLinearlayout(view);
  } else if (view.type == "horizontalScrollView") {
    view.props.orientation = "horizontal";
    computeLinearlayout(view);
  } else if (view.type == "relativeLayout") {
    computeRelativeLayout(view);
  } else {
    // Do Nothing
  }

  return view;
}

module.exports = {
  computeChildDimens: computeChildDimens
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DropdownBox = __webpack_require__(30);
var DropdownSearchBox = __webpack_require__(31);
var NavBar = __webpack_require__(32);
// const DateRangePicker = require('./components/DateRangePicker')
var SwitchButton = __webpack_require__(33);
var Button = __webpack_require__(34);

/* Components */
function closeAllActiveComponents() {
     if (window.__COM_ACTIVE.NAVBAR != '') NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);
     if (window.__COM_ACTIVE.DSB != '') DropdownSearchBox._closeByGUID(window.__COM_ACTIVE.DSB);
     if (window.__COM_ACTIVE.DB != '') DropdownBox._closeByGUID(window.__COM_ACTIVE.DB);
}

function renderComponent(elem, props, firstRender) {
     if (!props.componentType) return;

     var componentType = props.componentType;

     /* Attaching GUID only when firstRender */
     if (firstRender && props.guid) elem.setAttribute('guid', props.guid);

     switch (componentType) {
          // Button
          case 'BT':
               elem.classList.add(window.__COM_CLASS_GROUP.BT);

               Button._renderMain(elem, props, firstRender);
               break;
          // Switch Button
          case 'SWITCH':
               elem.classList.add(window.__COM_CLASS_GROUP.SWITCH);

               SwitchButton._renderMain(elem, props, firstRender);
               break;
          // Date Range Picker
          case 'DRP':
               elem.classList.add(window.__COM_CLASS_GROUP.DRP);

               //   DateRangePicker._renderMain(elem, props, firstRender)
               break;
          case 'DRP_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DRP_BODY);

               //   DateRangePicker._renderBody(elem, props, firstRender)
               break;
          // Nav Bar
          case 'NAVBAR':
               elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR);

               NavBar._renderMain(elem, props, firstRender);
               break;
          // Dropdown Box
          case 'DB':
               elem.classList.add(window.__COM_CLASS_GROUP.DB);

               DropdownBox._renderMain(elem, props, firstRender);
               break;
          case 'DB_FULL_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DB_FULL_BODY);

               DropdownBox._renderFullBody(elem, props, firstRender);
               break;
          // Dropdown Search Box
          case 'DSB':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB);

               DropdownSearchBox._renderMain(elem, props, firstRender);
               break;
          case 'DSB_FULL_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB_FULL_BODY);

               DropdownSearchBox._renderFullBody(elem, props, firstRender);
               break;
     }

     if (!window.__COM_EVENT) {
          window.__COM_EVENT = true;

          // Body click event
          document.body.addEventListener('click', function (e) {
               var target = e.target;
               var guid = target.getAttribute('guid');

               if (!guid) {
                    // We need to close any active components
                    closeAllActiveComponents();
               } else {
                    var classList = target.classList;

                    if (classList.contains(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB)) {
                         // NAVBAR Menu Item with SubRoute
                         if (classList.contains('selected')) {
                              if (!window.__COM_ACTIVE.NAVBAR) return;

                              NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);
                         } else {
                              closeAllActiveComponents();
                              NavBar._openByGUID(guid, target);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.NAVBAR_ITEM) || classList.contains(window.__COM_CLASS_GROUP.NAVBAR_SUB_ITEM)) {
                         // NAVBAR Menu Item (Sub Item as well)
                         if (window.__COM_ACTIVE.NAVBAR) NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);

                         if (classList.contains('selected')) return;

                         NavBar._selectRouteByGUID(guid, target);
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DB)) {
                         // DB Main Click
                         if (guid == window.__COM_ACTIVE.DB) {
                              DropdownBox._closeByGUID(guid);
                         } else {
                              closeAllActiveComponents();
                              DropdownBox._openByGUID(guid);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DB_OPTION)) {
                         // DB Option Select
                         DropdownBox._closeByGUID(guid);
                         DropdownBox._selectOptionByGUID(guid, target);
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DSB)) {
                         // DSB Main Click
                         if (guid == window.__COM_ACTIVE.DSB) {
                              DropdownSearchBox._closeByGUID(guid);
                         } else {
                              closeAllActiveComponents();
                              DropdownSearchBox._openByGUID(guid);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DSB_OPTION)) {
                         // DSB Option Select
                         DropdownSearchBox._closeByGUID(guid);
                         DropdownSearchBox._selectOptionByGUID(guid, target);
                    }
               }
          });

          // Keydown event
          document.body.addEventListener('keyup', function (e) {
               var target = e.target;
               var guid = target.getAttribute('guid');

               if (!guid) return;

               var classList = target.classList;

               if (classList.contains(window.__COM_CLASS_GROUP.DSB_SEARCH)) {
                    if (guid == window.__COM_ACTIVE.DSB) {
                         var query = target.value.trim();
                         DropdownSearchBox._filterOptions(guid, query);
                    }
               }
          });
     }
}

module.exports = {
     renderComponent: renderComponent
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DropdownBox() {}

DropdownBox.prototype._equalOptions = function (a, b, j) {
     var stringA = a.join(j).trim();
     var stringB = b.join(j).trim();

     if (stringA == stringB) return true;
     return false;
};

DropdownBox.prototype._selectOptionByGUID = function (guid, optionElem) {
     var value = optionElem.getAttribute('option-value');
     var text = optionElem.getAttribute('option-text');

     var mainObject = this._getMainObject(guid);
     var mainObjectID = mainObject.id;

     if (!value || !text || !mainObjectID) return;

     var view = window.__VIEWS[mainObjectID];

     if (!view || !view.props) return;

     // Save Option Value
     if (!window.__COM_RENDERED.DB[guid]) window.__COM_RENDERED.DB[guid] = {};
     window.__COM_RENDERED.DB[guid].optionValue = value;

     // Update UI
     var optionsElem = this._getOptionsObject(guid);
     if (optionsElem && optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               if (optionsElem.childNodes[i].getAttribute('option-value') == value && optionsElem.childNodes[i].getAttribute('option-text') == text) {
                    optionsElem.childNodes[i].classList.add('selected');
               } else {
                    optionsElem.childNodes[i].classList.remove('selected');
               }
          }
     }

     var children = mainObject.childNodes;
     var article = null;

     if (children.length) {
          for (var _i = 0; _i < children.length; _i++) {
               if (children[_i].nodeName.toLowerCase() == 'article') {
                    article = children[_i];
                    break;
               }
          }
     }

     mainObject.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;
     if (article) article.innerText = text;

     // Event Trigger
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value);
     }
};

DropdownBox.prototype._isValidOV = function (optionValue, options) {
     var text = "";

     if (options && options.length > 0) {
          for (var i in options) {
               if (options[i].value == optionValue) {
                    text = options[i].text;
                    break;
               }
          }
     }

     return text;
};

DropdownBox.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getFullBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_FULL_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getOptionsObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_OPTIONS + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._renderOption = function (parentElem, props, guid, option, optionValue, renderEvent) {
     var elem = document.createElement('div');

     elem.className = window.__COM_CLASS_GROUP.DB_OPTION;
     elem.setAttribute('option-value', option.value);
     elem.setAttribute('option-text', option.text);

     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     elem.style.height = height + 'px';

     if (props.fontSize) elem.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) elem.style.fontFamily = props.fontFamily;
     if (props.optionPadding) {
          var padding = props.optionPadding.split(',').map(function (a) {
               return a * 1;
          });

          elem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
     }

     elem.setAttribute('guid', guid);

     if (optionValue && optionValue == option.value) {
          elem.classList.add('selected');
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('ARTICLE');
     article.innerText = option.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

DropdownBox.prototype._openByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.add('selected');
     bodyElem.style.display = 'block';
     window.__COM_ACTIVE.DB = guid;
};

DropdownBox.prototype._closeByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.remove('selected');
     bodyElem.style.display = 'none';
     window.__COM_ACTIVE.DB = '';
};

DropdownBox.prototype._renderMain = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var children = elem.childNodes;
     var article = null;

     if (children.length) {
          for (var i = 0; i < children.length; i++) {
               if (children[i].nodeName.toLowerCase() == 'article') {
                    article = children[i];
                    break;
               }
          }
     }

     if (!props.stroke) elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR;

     if (props.options) {
          var options = JSON.parse(props.options);
          var optionValue = null;

          if (props.optionValue) optionValue = props.optionValue;

          // Read option value
          if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue) optionValue = window.__COM_RENDERED.DB[guid].optionValue + "";

          if (optionValue) {
               var optionText = this._isValidOV(optionValue, options);

               if (optionText != "") {
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;

                    if (article) article.innerText = optionText;
               }
          }
     }
     /* Default Styles End */
};

DropdownBox.prototype._renderFullBody = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var bodyElem = null;
     var optionsElement = null;

     if (renderEvent) {
          bodyElem = document.createElement('div');
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DB_BODY);
          bodyElem.style.display = 'none';
          bodyElem.setAttribute('guid', guid);

          optionsElement = document.createElement('div');
          optionsElement.classList.add(window.__COM_CLASS_GROUP.DB_OPTIONS);
          optionsElement.setAttribute('guid', guid);

          bodyElem.appendChild(optionsElement);

          elem.appendChild(bodyElem);
     } else {
          bodyElem = this._getBodyObject(guid);

          optionsElement = this._getOptionsObject(guid);
     }

     if (!bodyElem || !optionsElement) return;

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent);
};

DropdownBox.prototype._renderOptions = function (elem, props, guid, renderEvent) {
     var previousOptions = [];
     var options = [];

     // Current Options
     if (props.options) {
          options = JSON.parse(props.options);
     }

     // Previous Options
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DB[guid].options);
     }

     // Read option value
     var optionValue = null;
     if (props.optionValue) optionValue = props.optionValue;
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue) optionValue = window.__COM_RENDERED.DB[guid].optionValue + "";

     // Save Options
     if (!window.__COM_RENDERED.DB[guid]) window.__COM_RENDERED.DB[guid] = {};
     window.__COM_RENDERED.DB[guid].options = props.options;

     // Style
     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     if (options.length > 5) {
          elem.style.maxHeight = height * 5 + 'px';
     } else {
          elem.style.maxHeight = 'auto';
     }

     if (!this._equalOptions(previousOptions, options, guid)) {
          // Options Changed - Need to Re-render
          elem.innerHTML = '';

          if (options && options.length > 0) {
               for (var i = 0; i < options.length; i++) {
                    var option = options[i];

                    this._renderOption(elem, props, guid, option, optionValue, renderEvent);
               }
          }
     }
};

module.exports = new DropdownBox();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DropdownSearchBox() {}

DropdownSearchBox.prototype._equalOptions = function (a, b, j) {
     var stringA = a.join(j).trim();
     var stringB = b.join(j).trim();

     if (stringA == stringB) return true;
     return false;
};

DropdownSearchBox.prototype._selectOptionByGUID = function (guid, optionElem) {
     var value = optionElem.getAttribute('option-value');
     var text = optionElem.getAttribute('option-text');

     var mainObject = this._getMainObject(guid);
     var mainObjectID = mainObject.id;

     if (!value || !text || !mainObjectID) return;

     var view = window.__VIEWS[mainObjectID];

     if (!view || !view.props) return;

     // Save Option Value
     if (!window.__COM_RENDERED.DSB[guid]) window.__COM_RENDERED.DSB[guid] = {};
     window.__COM_RENDERED.DSB[guid].optionValue = value;

     // Update UI
     var optionsElem = this._getOptionsObject(guid);
     if (optionsElem && optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               if (optionsElem.childNodes[i].getAttribute('option-value') == value && optionsElem.childNodes[i].getAttribute('option-text') == text) {
                    optionsElem.childNodes[i].classList.add('selected');
               } else {
                    optionsElem.childNodes[i].classList.remove('selected');
               }
          }
     }

     var children = mainObject.childNodes;
     var article = null;

     if (children.length) {
          for (var _i = 0; _i < children.length; _i++) {
               if (children[_i].nodeName.toLowerCase() == 'article') {
                    article = children[_i];
                    break;
               }
          }
     }

     mainObject.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;
     if (article) article.innerText = text;

     // Event Trigger
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value);
     }
};

DropdownSearchBox.prototype._isValidOV = function (optionValue, options) {
     var optionText = "";

     if (options && options.length > 0) {
          for (var i in options) {
               if (options[i].value == optionValue) {
                    optionText = options[i].text;
                    break;
               }
          }
     }

     return optionText;
};

DropdownSearchBox.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getFullBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_FULL_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getSearchWrapObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getSearchObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getOptionsObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_OPTIONS + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._filterOptions = function (guid, query) {
     var optionsElem = this._getOptionsObject(guid);

     if (!optionsElem) return;

     query = query.toLowerCase();

     if (optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               var optionElem = optionsElem.childNodes[i];
               var text = optionElem.getAttribute('option-text');

               if (text) {
                    text = text.toLowerCase();

                    if (text.indexOf(query) !== -1) {
                         optionElem.style.display = 'flex';
                    } else {
                         optionElem.style.display = 'none';
                    }
               }
          }
     }
};

DropdownSearchBox.prototype._renderOption = function (parentElem, props, guid, option, optionValue, renderEvent) {
     var elem = document.createElement('div');

     elem.className = window.__COM_CLASS_GROUP.DSB_OPTION;
     elem.setAttribute('option-value', option.value);
     elem.setAttribute('option-text', option.text);

     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     elem.style.height = height + 'px';

     if (props.fontSize) elem.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) elem.style.fontFamily = props.fontFamily;
     if (props.optionPadding) {
          var padding = props.optionPadding.split(',').map(function (a) {
               return a * 1;
          });

          elem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
     }

     elem.setAttribute('guid', guid);

     if (optionValue && optionValue == option.value) {
          elem.classList.add('selected');
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('ARTICLE');
     article.innerText = option.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

DropdownSearchBox.prototype._openByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.add('selected');
     bodyElem.style.display = 'block';
     window.__COM_ACTIVE.DSB = guid;
};

DropdownSearchBox.prototype._closeByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.remove('selected');
     bodyElem.style.display = 'none';
     window.__COM_ACTIVE.DSB = '';
};

DropdownSearchBox.prototype._renderMain = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var children = elem.childNodes;
     var article = null;

     if (children.length) {
          for (var i = 0; i < children.length; i++) {
               if (children[i].nodeName.toLowerCase() == 'article') {
                    article = children[i];
                    break;
               }
          }
     }

     if (!props.stroke) elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR;

     if (props.options) {
          var options = JSON.parse(props.options);
          var optionValue = null;

          if (props.optionValue) optionValue = props.optionValue;

          // Read option value
          if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue) optionValue = window.__COM_RENDERED.DSB[guid].optionValue + "";

          if (optionValue) {
               var optionText = this._isValidOV(optionValue, options);

               if (optionText != "") {
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;

                    if (article) article.innerText = optionText;
               }
          }
     }
     /* Default Styles End */
};

DropdownSearchBox.prototype._renderFullBody = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var bodyElem = null;
     var searchWrapElement = null;
     var searchElement = null;
     var optionsElement = null;

     if (renderEvent) {
          bodyElem = document.createElement('div');
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DSB_BODY);
          bodyElem.style.display = 'none';
          bodyElem.setAttribute('guid', guid);

          searchWrapElement = document.createElement('div');
          searchWrapElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP);
          searchWrapElement.setAttribute('guid', guid);

          searchElement = document.createElement('INPUT');
          searchElement.setAttribute('type', 'text');
          searchElement.setAttribute('placeholder', 'Search...');
          searchElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH);
          searchElement.setAttribute('guid', guid);

          searchWrapElement.appendChild(searchElement);

          bodyElem.appendChild(searchWrapElement);

          optionsElement = document.createElement('div');
          optionsElement.classList.add(window.__COM_CLASS_GROUP.DSB_OPTIONS);
          optionsElement.setAttribute('guid', guid);

          bodyElem.appendChild(optionsElement);

          elem.appendChild(bodyElem);
     } else {
          bodyElem = this._getBodyObject(guid);

          searchWrapElement = this._getSearchWrapObject(guid);

          searchElement = this._getSearchObject(guid);

          optionsElement = this._getOptionsObject(guid);
     }

     if (!bodyElem || !searchWrapElement || !searchElement || !optionsElement) return;

     // Styles
     if (props.fontSize) searchElement.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) searchElement.style.fontFamily = props.fontFamily;

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent);
};

DropdownSearchBox.prototype._renderOptions = function (elem, props, guid, renderEvent) {
     var previousOptions = [];
     var options = [];

     // Current Options
     if (props.options) {
          options = JSON.parse(props.options);
     }

     // Previous Options
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DSB[guid].options);
     }

     // Read option value
     var optionValue = null;
     if (props.optionValue) optionValue = props.optionValue;
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue) optionValue = window.__COM_RENDERED.DSB[guid].optionValue + "";

     // Save Options
     if (!window.__COM_RENDERED.DSB[guid]) window.__COM_RENDERED.DSB[guid] = {};
     window.__COM_RENDERED.DSB[guid].options = props.options;

     // Style
     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     if (options.length > 5) {
          elem.style.maxHeight = height * 5 + 'px';
     } else {
          elem.style.maxHeight = 'auto';
     }

     if (!this._equalOptions(previousOptions, options, guid)) {
          // Options Changed - Need to Re-render
          elem.innerHTML = '';

          if (options && options.length > 0) {
               for (var i = 0; i < options.length; i++) {
                    var option = options[i];

                    this._renderOption(elem, props, guid, option, optionValue, renderEvent);
               }
          }
     }
};

module.exports = new DropdownSearchBox();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function NavBar() {}

NavBar.prototype._getActiveRouteItem = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB + '.selected[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

NavBar.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.NAVBAR + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

NavBar.prototype._openByGUID = function (guid, parentElem) {
     parentElem.classList.add('selected');
     window.__COM_ACTIVE.NAVBAR = guid;
};

NavBar.prototype._closeByGUID = function (guid) {
     var object = this._getActiveRouteItem(guid);
     if (object) object.classList.remove('selected');

     window.__COM_ACTIVE.NAVBAR = '';
};

NavBar.prototype._selectRouteByGUID = function (guid, elem) {
     var key = elem.getAttribute('route-key');
     var text = elem.getAttribute('route-text');

     var object = this._getMainObject(guid);
     var objectID = object.id;

     if (!key || !text || !objectID) return;

     var view = window.__VIEWS[objectID];

     if (!view || !view.props) return;

     /* Update UI */
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].activeElem) window.__COM_RENDERED.NAVBAR[guid].activeElem.classList.remove('selected');

     elem.classList.add('selected');

     if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

     window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
     window.__COM_RENDERED.NAVBAR[guid].defaultValue = key;

     /* Event Trigger */
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(key);
     }
};

NavBar.prototype._renderRoute = function (parentElem, props, guid, route, renderEvent) {
     if (!route.key || !route.text) return;

     var elem = document.createElement('LI');
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM);

     elem.setAttribute('route-key', route.key);
     elem.setAttribute('route-text', route.text);
     elem.setAttribute('guid', guid);

     var defaultValue = null;
     if (props.defaultValue) defaultValue = props.defaultValue;
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].defaultValue) defaultValue = window.__COM_RENDERED.NAVBAR[guid].defaultValue + "";

     if (defaultValue && defaultValue == route.key) {
          elem.classList.add('selected');

          // Save
          if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

          window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
          window.__COM_RENDERED.NAVBAR[guid].defaultValue = route.key;
     } else elem.classList.remove('selected');

     var article = document.createElement('article');
     if (props.height && !isNaN(props.height)) article.style.lineHeight = props.height + 'px';

     elem.appendChild(article);

     if (route.subroutes && route.subroutes.length > 0) {
          article.innerHTML = route.text + ' &#9662;';
          elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB);

          var virtualElem = document.createElement('UL');
          virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB);

          if (route.navDirection && route.navDirection == 'from_right') virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_RIGHT);

          virtualElem.setAttribute('guid', guid);

          if (props.translationZ_nav) virtualElem.style.zIndex = props.translationZ_nav;

          elem.appendChild(virtualElem);

          for (var i = 0; i < route.subroutes.length; i++) {
               var subroute = route.subroutes[i];

               this._renderSubRoute(virtualElem, props, guid, subroute, renderEvent);
          }
     } else {
          article.innerHTML = route.text;
     }

     parentElem.appendChild(elem);
};

NavBar.prototype._renderSubRoute = function (parentElem, props, guid, route, renderEvent) {
     if (!route.key || !route.text) return;

     var elem = document.createElement('LI');
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_ITEM);

     elem.setAttribute('route-key', route.key);
     elem.setAttribute('route-text', route.text);
     elem.setAttribute('guid', guid);

     var defaultValue = null;
     if (props.defaultValue) defaultValue = props.defaultValue;
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].defaultValue) defaultValue = window.__COM_RENDERED.NAVBAR[guid].defaultValue + "";

     if (defaultValue && defaultValue == route.key) {
          elem.classList.add('selected');

          // Save
          if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

          window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
          window.__COM_RENDERED.NAVBAR[guid].defaultValue = route.key;
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('article');
     article.innerHTML = route.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

NavBar.prototype._renderMain = function (elem, props, renderEvent) {
     if (!renderEvent) return;

     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     // ROUTES
     var routes = [];
     if (props && props.routes) routes = JSON.parse(props.routes);

     elem.innerHTML = '';
     var virtualElem = document.createElement('UL');
     elem.appendChild(virtualElem);

     if (routes.length > 0) {
          for (var i = 0; i < routes.length; i++) {
               var route = routes[i];

               this._renderRoute(virtualElem, props, guid, route, renderEvent);
          }
     }
};

module.exports = new NavBar();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SwitchButton() {}

SwitchButton.prototype._renderMain = function (elem, props, renderEvent) {
     if (renderEvent) {
          elem.innerHTML = '';

          var guid = props.guid;
          if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

          this._renderStyle(elem, props, guid);

          var virtualElem = document.createElement('LABEL');
          virtualElem.classList.add(window.__COM_CLASS_GROUP.SWITCH_BODY);
          virtualElem.setAttribute('guid', guid);

          elem.appendChild(virtualElem);

          this._renderSlider(virtualElem, props, guid, renderEvent);
     }
};

SwitchButton.prototype._renderSlider = function (parentElem, props, guid, renderEvent) {
     var selectedDefault = false;
     if (props.hasOwnProperty('selectedDefault')) selectedDefault = props.selectedDefault;

     var checkbox = document.createElement('INPUT');
     checkbox.setAttribute('type', 'checkbox');

     if (selectedDefault) {
          checkbox.setAttribute('checked', 'checked');
     }

     var elem = document.createElement('SPAN');
     elem.classList.add(window.__COM_CLASS_GROUP.SWITCH_SLIDER);

     parentElem.appendChild(checkbox);
     parentElem.appendChild(elem);

     // Events
     if (renderEvent && props.onSwitch && typeof props.onSwitch == "function") {
          checkbox.addEventListener('change', function () {
               props.onSwitch(this.checked);
          });
     }
};

SwitchButton.prototype._renderStyle = function (parentElem, props, guid) {
     var gap = 4;
     var parentWidth = parentElem.offsetWidth;
     var parentHeight = parentElem.offsetHeight;

     var size = Math.min(parentWidth, parentHeight);
     var actualSize = size - 2 * gap;
     if (actualSize < 0) {
          actualSize = size;
          gap = 0;
     }

     var tx = parentWidth - 2 * gap - actualSize;
     if (tx < 0) tx = 0;

     var styleElem = document.createElement('style');
     styleElem.type = 'text/css';

     var css = '';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + '{border-radius: ' + size + 'px} ';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {border-radius: 50%; content: ""; position: absolute; width: ' + actualSize + 'px; height: ' + actualSize + 'px; left: ' + gap + 'px; bottom: ' + gap + 'px; background-color: white; -webkit-transition: .4s; transition: .4s;} ';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] input:checked + .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {transform: translateX(' + tx + 'px);} ';

     styleElem.appendChild(document.createTextNode(css));
     document.head.appendChild(styleElem);
};

module.exports = new SwitchButton();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Button() {}

Button.prototype._renderMain = function (elem, props, renderEvent) {
    var guid = props.guid;
    if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

    elem.style.cursor = 'pointer';
    elem.style.padding = 0;
    elem.innerHTML = '';

    var linkElem = document.createElement('A');
    elem.appendChild(linkElem);

    linkElem.style.pointerEvents = 'auto';

    if (props.hasOwnProperty('disabled') && props.disabled) {
        elem.classList.add(window.__COM_CLASS_GROUP.BT_DISABLED);
        linkElem.style.pointerEvents = 'none';
    }

    var html = '';
    /* Button Image */
    if (props.imageUrl) {
        // Image URL
        var imageUrl = props.imageUrl;

        var temp = imageUrl.split('.');
        var ext = '';
        if (temp && temp.length > 0) ext = temp[temp.length - 1];

        var exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
        ext = ext.toLowerCase();

        if (!imageUrl.includes("data:image/svg+xml") && !exts.includes(ext)) {
            imageUrl += '.png';
        }

        html += '<img src="' + imageUrl + '"/>';
    } else if (props.iconName) {
        // Font Icon
        html += '<i class="' + props.iconName + '"></i>';
    }

    /* Button Text */
    if (props.text) html += "<span>" + props.text + "</span>";else html += "<span>Button Text</span>";

    linkElem.innerHTML = html;

    if (props.hasOwnProperty('padding') && props.padding) {
        var padding = props.padding.split(',').map(function (a) {
            return a * 1;
        });

        linkElem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    } else {
        linkElem.style.padding = 0;
    }

    if (!props.stroke) {
        elem.style.border = '1px solid ' + window.__COM_COLOR_GROUP.BT_BORDER_COLOR;
    }

    if (!props.backgroundColor) {
        elem.style.backgroundColor = window.__COM_COLOR_GROUP.BT_BG_COLOR;
    }

    if (!props.color) {
        elem.style.color = window.__COM_COLOR_GROUP.BT_COLOR;
    }
};

module.exports = new Button();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function setAnimationStyles(elem, props) {
  if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
    return;
  }

  var keyframeName = "keyframe_" + props.id;
  if (!window.__RENDERED_KEYFRAMES.includes(keyframeName)) {
    var styleElem = document.getElementById(window.__STYLE_ID);

    if (!styleElem) {
      return;
    }

    var data = null;

    if (props.inlineAnimation) {
      data = JSON.parse(props.inlineAnimation);
      if (data && data.length > 0) {
        data = data[0];
      }
    }

    if (!data) {
      return;
    }

    var css = "";
    css += "@keyframes " + keyframeName + "{";
    css += "from {";
    if (data.hasOwnProperty('fromX')) {
      css += "margin-left: " + data.fromX + "px;";
    }

    if (data.hasOwnProperty('fromY')) {
      css += "margin-top: " + data.fromY + "px;";
    }

    if (data.hasOwnProperty('fromAlpha')) {
      css += "opacity: " + data.fromAlpha + ";";
    }

    if (data.hasOwnProperty('fromScale')) {
      css += "transform: scale(" + data.fromScale + ");";
    } else if (data.hasOwnProperty('fromScaleX') && data.hasOwnProperty('fromScaleY')) {
      css += "transform: scale(" + data.fromScaleX + ", " + data.fromScaleY + ");";
    } else if (data.hasOwnProperty('fromScaleX')) {
      css += "transform: scaleX(" + data.fromScaleX + ");";
    } else if (data.hasOwnProperty('fromScaleY')) {
      css += "transform: scaleY(" + data.fromScaleY + ");";
    }

    if (data.hasOwnProperty('fromRotation')) {
      css += "transform: rotate(" + data.fromRotation + ");";
    } else {
      if (data.hasOwnProperty('fromRotationX')) {
        css += "transform: rotateX(" + data.fromRotationX + ");";
      } else if (data.hasOwnProperty('fromRotationY')) {
        css += "transform: rotateY(" + data.fromRotationY + ");";
      }
    }
    css += "} ";
    css += "to {";
    if (data.hasOwnProperty('toX')) {
      css += "margin-left: " + data.toX + "px;";
    }

    if (data.hasOwnProperty('toY')) {
      css += "margin-top: " + data.toY + "px;";
    }

    if (data.hasOwnProperty('toAlpha')) {
      css += "opacity: " + data.toAlpha + ";";
    }

    if (data.hasOwnProperty('toScale')) {
      css += "transform: scale(" + data.toScale + ");";
    } else if (data.hasOwnProperty('toScaleX') && data.hasOwnProperty('toScaleY')) {
      css += "transform: scale(" + data.toScaleX + ", " + data.toScaleY + ");";
    } else if (data.hasOwnProperty('toScaleX')) {
      css += "transform: scaleX(" + data.toScaleX + ");";
    } else if (data.hasOwnProperty('toScaleY')) {
      css += "transform: scaleY(" + data.toScaleY + ");";
    }

    if (data.hasOwnProperty('toRotation')) {
      css += "transform: rotate(" + data.toRotation + ");";
    } else {
      if (data.hasOwnProperty('toRotationX')) {
        css += "transform: rotateX(" + data.toRotationX + ");";
      } else if (data.hasOwnProperty('toRotationY')) {
        css += "transform: rotateY(" + data.toRotationY + ");";
      }
    }
    css += "} ";
    css += "}";

    if (styleElem.styleSheet) {
      styleElem.styleSheet.cssText += css;
    } else {
      styleElem.appendChild(document.createTextNode(css));
    }

    elem.style.animationName = keyframeName;
    elem.style.animationDuration = "1s";
    if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
      var duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2);
      elem.style.animationDuration = duration + "s";
    }

    if (data.hasOwnProperty('repeatCount')) {
      if (data.repeatCount == "-1" || data.repeatCount == -1) {
        elem.style.animationIterationCount = "infinite";
      } else {
        elem.style.animationIterationCount = data.repeatCount;
      }
    }

    if (data.hasOwnProperty("interpolator")) {
      elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
    }

    window.__RENDERED_KEYFRAMES.push(keyframeName);
  }
}

function setTransition(elem, props) {
  if (!props.animation) {
    console.error("animaiton not found", props);
    return;
  }

  if (props.animation.transition) {
    var afterTransition = function afterTransition() {
      var animation = props.animation;
      elem.style.transition = animation.transition;
      elem.style.transform = animation.transform;
      if (animation.opacity) {
        elem.style.opacity = animation.opacity;
      }
    };

    if (props.style.transform || props.style.opacity) {
      setTimeout(afterTransition, 100);
    } else {
      afterTransition();
    }
  }
}

module.exports = {
  setAnimationStyles: setAnimationStyles,
  setTransition: setTransition
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function handlePopup(elem, props) {
  var menuItems = props["popupMenu"].split(',');
  var menuBar = document.createElement("div");
  menuBar.setAttribute("class", "popupMenu");
  menuBar.style.cssText = "display: none; position: absolute; right: 20px; top:20px; z-index: 5;" + "box-shadow: 0px 5px 10px #888888;";
  document.body.appendChild(menuBar);
  var clickCb = "onMenuItemClick";

  var _loop = function _loop(i) {
    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menuItem");
    menuDiv.textContent = menuItems[i];
    menuBar.appendChild(menuDiv);
    var index = i;
    if (props[clickCb] && typeof props[clickCb] == "function") {
      menuDiv.addEventListener("click", function () {
        props[clickCb](index);
      });
    }
  };

  for (var i = 0; i < menuItems.length; i++) {
    _loop(i);
  }
  elem.addEventListener("click", function () {
    if (menuBar.style.display == "none") menuBar.style.display = "";else menuBar.style.display = "none";
  });
}

function handleTextElement(elem, config) {
  var children = elem.childNodes;
  var article = null;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].nodeName.toLowerCase() == 'article') {
        article = children[i];
        break;
      }
    }
  }

  if (!article) article = document.createElement('ARTICLE');

  elem.style.whiteSpace = "initial";

  if (config.isHtmlContent) article.innerHTML = config.text;else article.innerText = config.text;

  if (!config.text && config.hint) article.innerText = config.hint;

  article.style.wordBreak = "break-word";
  article.style.display = "inline";

  if (config.letterSpacing) elem["style"]["letter-spacing"] = config.letterSpacing;

  elem.appendChild(article);
}

function handleHTMLTextElement(elem, config) {
  var children = elem.childNodes;
  var article = null;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].nodeName.toLowerCase() == 'article') {
        article = children[i];
        break;
      }
    }
  }

  if (!article) article = document.createElement('ARTICLE');

  elem.style.whiteSpace = "initial";

  if (config.isHtmlContent) article.innerHTML = config.textFromHtml;else article.innerHTML = config.textFromHtml;

  if (!config.text && config.hint) article.innerText = config.hint;

  article.style.wordBreak = "break-word";
  article.style.display = "inline";

  if (config.letterSpacing) elem["style"]["letter-spacing"] = config.letterSpacing;

  elem.appendChild(article);
}

module.exports = {
  handlePopup: handlePopup,
  handleTextElement: handleTextElement,
  handleHTMLTextElement: handleHTMLTextElement
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(10),
    setGravityStylesForRow = _require.setGravityStylesForRow,
    setGravityStylesForColumn = _require.setGravityStylesForColumn;

function initializeShow(type, elem, props) {
  if (type == 'linearLayout') {
    if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
      elem.style.display = 'inline-flex';
      elem.style.width = 'max-content';
    } else {
      elem.style.display = "flex";
    }
  } else {
    if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
      elem.style.display = 'inline-block';
      elem.style.width = 'max-content';
      if (type === "textView" && !props.hasOwnProperty('maxWidth')) {
        elem.style.maxWidth = '100%';
      }
    } else {
      elem.style.display = '';
    }
  }
}

function setTypeSpecificStyles(type, elem, props) {
  var _props$scrollBarX = props.scrollBarX,
      scrollBarX = _props$scrollBarX === undefined ? true : _props$scrollBarX,
      _props$scrollBarY = props.scrollBarY,
      scrollBarY = _props$scrollBarY === undefined ? true : _props$scrollBarY;


  switch (type) {
    case 'linearLayout':
      elem.style["box-sizing"] = "border-box";

      if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
        elem.style["flex-wrap"] = "nowrap";
      } else {
        elem.style["flex-wrap"] = "wrap";
      }

      elem.style["flex-direction"] = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";

      if (elem.style["flex-direction"] == 'row') setGravityStylesForRow(elem, props);else setGravityStylesForColumn(elem, props);

      if (props.hasOwnProperty('scrollBarX')) {
        if (props.scrollBarX) elem.style.overflowX = 'auto';else elem.style.overflowX = 'hidden';
      }

      if (props.hasOwnProperty('scrollBarY')) {
        if (props.scrollBarY) elem.style.overflowY = 'auto';else elem.style.overflowY = 'hidden';
      }

      break;

    case 'horizontalScrollView':
      elem.style.overflowX = "auto";
      elem.style.overflowY = "hidden";

      if (!scrollBarX) elem.style.overflowX = 'hidden';
      break;

    case 'listView':
      elem.style.overflowY = "auto";
      elem.style.overflowX = "hidden";

      if (!scrollBarY) elem.style.overflowY = 'hidden';
      break;

    case 'scrollView':
      elem.style.overflowX = 'auto';
      elem.style.overflowY = 'auto';

      if (!scrollBarX) elem.style.overflowX = 'hidden';
      if (!scrollBarY) elem.style.overflowY = 'hidden';
      break;

    case 'relativeLayout':
      elem.style.position = 'relative';

      if (props.hasOwnProperty('scrollBarX')) {
        if (props.scrollBarX) elem.style.overflowX = 'auto';else elem.style.overflowX = 'hidden';
      }

      if (props.hasOwnProperty('scrollBarY')) {
        if (props.scrollBarY) elem.style.overflowY = 'auto';else elem.style.overflowY = 'hidden';
      }
      break;

    case 'imageView':
      if (props.imageUrl) {
        var imageUrl = props.imageUrl;

        if (props.rawData) {
          // Do Nothing
        } else {
          var temp = imageUrl.split('.');
          var ext = '';
          if (temp && temp.length > 0) ext = temp[temp.length - 1];

          var exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
          ext = ext.toLowerCase();

          if (!imageUrl.includes("data:image/") && !exts.includes(ext)) {
            imageUrl += '.png';
          }
        }

        elem.setAttribute('loading', 'lazy');
        elem.setAttribute('src', imageUrl);
      }
      break;
  }
}

function setTypeBasedAttributes(type, elem, props) {
  switch (type) {
    case 'horizontalScrollView':
      if (props.hasOwnProperty('scrollLeft') && !isNaN(props.scrollLeft)) {
        elem.scrollLeft = props.scrollLeft;
      }
      break;

    case 'listView':
      if (props.hasOwnProperty('scrollLeft') && !isNaN(props.scrollLeft)) {
        elem.scrollLeft = props.scrollLeft;
      }
      break;

    case 'scrollView':
      if (props.hasOwnProperty('scrollLeft') && !isNaN(props.scrollLeft)) {
        elem.scrollLeft = props.scrollLeft;
      }
      if (props.hasOwnProperty('scrollTop') && !isNaN(props.scrollTop)) {
        elem.scrollTop = props.scrollTop;
      }
      break;

    case 'checkBox':
      if (props.hasOwnProperty('checked') && props.checked == true) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
      break;
  }
}

function setComputedStyles(elem, props) {
  /* Computed Styles */
  // LinearLayout Styles
  if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
    var activeDimen = props.activeDimen;
    var weight = props.activeWeight;

    if (weight > 0) {
      elem.style.flex = weight;

      if (activeDimen == 'w') {
        //elem.style.width = 'auto';
      } else {
        elem.style.height = 'auto';
      }
    } else {
      elem.style.flex = 'none';
    }
  } else {
    elem.style.flex = 'none';
  }

  // RelativeLayout Styles
  if (props.hasOwnProperty('absolute') && props.absolute) {
    elem.style.position = 'absolute';

    if (props.hasOwnProperty("fromTop")) {
      if (isNaN(props.fromTop)) elem.style.top = props.fromTop;else elem.style.top = props.fromTop + 'px';
    }

    if (props.hasOwnProperty("fromBottom")) {
      if (isNaN(props.fromBottom)) elem.style.bottom = props.fromBottom;else elem.style.bottom = props.fromBottom + 'px';
    }

    if (props.hasOwnProperty("fromLeft")) {
      if (isNaN(props.fromLeft)) elem.style.left = props.fromLeft;else elem.style.left = props.fromLeft + 'px';
    }

    if (props.hasOwnProperty("fromRight")) {
      if (isNaN(props.fromRight)) elem.style.right = props.fromRight;else elem.style.right = props.fromRight + 'px';
    }
  }
  /* Computed Styles End */
}

module.exports = {
  initializeShow: initializeShow,
  setTypeSpecificStyles: setTypeSpecificStyles,
  setTypeBasedAttributes: setTypeBasedAttributes,
  setComputedStyles: setComputedStyles
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(8),
    setAttributes = _require.setAttributes;

function createEditText(type, props) {
  var elem = void 0;
  if (props.hasOwnProperty('inputType') && props.inputType == 'multiText') {
    elem = document.createElement("textarea");
    elem.style.border = 'none';
    elem.style.resize = 'none';
    elem.style.outline = 'none';
  } else {
    elem = document.createElement("input");
  }

  elem.value = props.text || "";

  if (props.letterSpacing) {
    elem["style"]["letter-spacing"] = props.letterSpacing;
  }

  if (props.label) {
    var inputView = elem;
    inputView.style.width = '100%';
    setAttributes(type, inputView, props, true);
    inputView.setAttribute("id", props.id + "_input");

    var l = document.createElement("label");
    l.setAttribute("for", props.id + "_input");
    l.innerHTML = props.label;
    l.classList.add('input-label');

    l["style"]["position"] = "absolute";
    l["style"]["color"] = "#999";
    l["style"]["background-color"] = "#fff";
    l["style"]["padding"] = "0 5px";
    l["style"]["z-index"] = 10;
    l["style"]["transition"] = "transform 150ms ease-out, font-size 150ms ease-out";

    if (props.letterSpacing) {
      l["style"]["letter-spacing"] = props.letterSpacing;
    }

    elem = document.createElement("div");
    elem.classList.add('input-group');
    elem.appendChild(l);
    elem.appendChild(inputView);

    props.style.position = "relative";
    setAttributes(type, elem, props, true);
    delete props.label;
  } else if (props.hint) {
    elem.placeholder = props.hint || "";
  }

  return elem;
}

function createCheckBox(props, parentElement) {
  var elem = document.createElement("input");
  var subElem = null;

  elem.setAttribute('type', 'checkbox');

  if (props.hasOwnProperty('label') && props.label != '' && parentElement) {
    subElem = document.createElement('label');
    subElem.setAttribute('for', props.id);
    subElem.innerHTML = props.label;
    subElem.style.padding = "0 0 0 5px";
    subElem.classList.add('input-label');

    delete props.label;
  }
  return {
    elem: elem,
    subElem: subElem
  };
}

function addTooltip(type, elem, props) {
  if (['linearLayout', 'relativeLayout', 'horizontalScrollView', 'scrollView', 'listView'].includes(type)) {
    return;
  }

  if (props.hasOwnProperty('tooltipText')) {
    var tooltipText = props.tooltipText.trim();

    if (tooltipText) {
      var tooltipGravity = props.tooltipGravity ? props.tooltipGravity : 'top';

      elem.classList.add('hasTooltip');

      var tooltipElem = document.createElement('div');
      tooltipElem.innerHTML = '<pre>' + tooltipText + '</pre>';
      tooltipElem.classList.add('tooltipText');
      tooltipElem.classList.add('tooltipGravity_' + tooltipGravity);

      var size = 15;
      if (props.hasOwnProperty('tooltipTextSize') && !isNaN(props.tooltipTextSize)) {
        size = props.tooltipTextSize;
      }

      tooltipElem.style.fontSize = size + 'px';

      elem.appendChild(tooltipElem);
    }
  }
}

function createElement(_ref, parentElement) {
  var type = _ref.type,
      props = _ref.props,
      elName = _ref.elName;

  var elem = void 0;
  var subElem = null;

  switch (type) {
    case 'webView':
      elem = document.createElement('iframe');
      elem.style.border = 'none';
      break;

    case 'imageView':
      elem = document.createElement("img");
      elem["style"]["margin"] = "0";
      elem["style"]["padding"] = "0";
      elem["style"]["display"] = "block";
      elem["style"]["max-width"] = "100%";
      elem["style"]["max-height"] = "100%";
      elem["style"]["box-sizing"] = "border-box";
      elem.setAttribute("alt", "");
      break;

    case 'checkBox':
      var _createCheckBox = createCheckBox(props, parentElement);

      elem = _createCheckBox.elem;
      subElem = _createCheckBox.subElem;

      break;

    case 'editText':
      elem = createEditText(type, props);
      break;

    default:
      elem = document.createElement(elName || "div");
      break;
  }

  /* Tooltip */
  addTooltip(type, elem, props);

  return {
    elem: elem,
    subElem: subElem
  };
}

module.exports = {
  createElement: createElement
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var ViewPageAdapter = __webpack_require__(40);
var Renderer = __webpack_require__(2);
var axios = __webpack_require__(41);
var qsstringify = __webpack_require__(59);
var logs_state = {
  session_id: '',
  sn: ''
};
var hasLocalStorage = true;
try {
  _typeof(window.localStorage) !== undefined;
} catch (e) {
  hasLocalStorage = false;
}
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

function sendAnalytics(data) {
  var url = "https://logs.juspay.in/godel/analytics";
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, JSON.stringify({ data: data }));
  } else {
    // try {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", url, false); // third parameter of `false` means synchronous
    //   xhr.send(JSON.stringify({data}));   
    // } catch(err) {
    //   //
    // }
  }
}

module.exports = {
  getSymbol: function getSymbol(type) {
    switch (type) {
      case "tick":
        return "\u2713";
      case "rupee":
        return "\u20B9";
      default:
        return "symbol";
    }
  },
  setLogsState: function setLogsState(session, sn) {
    logs_state.session_id = session;
    logs_state.sn = sn;
  },
  listViewAdapter: function listViewAdapter(id, jsx, callback, type, more) {
    var parent = document.getElementById(id);
    if (!parent) {
      console.error(new Error("Listview parent null"));
      return;
    }
    while (parent.firstElementChild) {
      parent.removeChild(parent.firstElementChild);
    }var view = JSON.parse(jsx);
    var parentView = window.__VIEWS[parent.id];
    view.map(function (x, i) {
      parentView.children.push(x.view);
      parentView.type = "linearLayout";
      Renderer.computeChildDimens(parentView);
      parentView.type = "listView";
      var elem = Renderer.inflateView(x.view, parent);
      elem.addEventListener("click", function () {
        window.callUICallback(callback, [i]);
      });
      Android.runInUI(x.value);
    });
    if (more) {
      var elem = document.createElement("div");
      elem.style.width = "100%";
      elem.style.height = "100px";
      elem.style.borderBottom = "1px solid #eee";
      parent.appendChild(elem);

      Renderer.inflateView(JSON.parse(more), elem);
    }
  },

  callAPI: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, data, headers, shouldEncodeToFormData, isSSLPinnedURL, callback) {
      var something, resp, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = parseJson(headers);
              data = parseJson(data);
              something = false;

              if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
                if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == "object") {
                  something = true;
                  data = qsstringify(data);
                }
              } else {
                data = JSON.stringify(data);
              }
              if (["GET", "HEAD"].includes(method)) {
                data = undefined;
              }
              _context.prev = 5;
              _context.next = 8;
              return axios({ url: url, method: method, data: data, headers: headers });

            case 8:
              resp = _context.sent;
              json = resp.data; //await resp.data.json();

              window.callUICallback(callback, "success", btoa(JSON.stringify(json)), resp.status);
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);

              console.log("ERR", _context.t0);
              window.callUICallback(callback, "failure", btoa("{}"), 50);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 13]]);
    }));

    function callAPI(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
      return _ref.apply(this, arguments);
    }

    return callAPI;
  }(),

  getFromSharedPrefs: function getFromSharedPrefs(key) {
    return hasLocalStorage ? localStorage.getItem(key) || "__failed" : "__failed";
  },

  setInSharedPrefs: function setInSharedPrefs(key, value) {
    if (hasLocalStorage) localStorage.setItem(key, value);
  },

  getKeysInSharedPrefs: function getKeysInSharedPrefs(key) {
    return hasLocalStorage ? localStorage.getItem(key) || "__failed" : "__failed";
  },

  setKeysInSharedPrefs: function setKeysInSharedPrefs(key, value) {
    if (hasLocalStorage) localStorage.setItem(key, value);
  },

  removeKeysInSharedPrefs: function removeKeysInSharedPrefs(key) {
    if (hasLocalStorage) localStorage.removeItem(key);
  },

  viewPagerAdapter: function viewPagerAdapter(id, jsx, tabJsx, cb) {
    ViewPageAdapter.createTabs(id, jsx, tabJsx, cb);
  },

  switchToViewPagerIndex: function switchToViewPagerIndex(index) {
    ViewPageAdapter.toggleView(index);
  },

  getKey: function getKey(key, defaultValue) {
    return hasLocalStorage ? localStorage.getItem(key) || defaultValue : defaultValue;
  },

  setKey: function setKey(key, value) {
    return hasLocalStorage ? localStorage.setItem(key, value) : value;
  },

  getResourceByName: function getResourceByName(tag) {
    return "2.0.0";
  },

  getSessionAttribute: function getSessionAttribute(v1, v2) {
    return JSON.stringify({ a: v1 });
  },

  setAnalyticsEndPoint: function setAnalyticsEndPoint(url) {
    return;
  },

  getSessionInfo: function getSessionInfo() {
    return JSON.stringify({});
  },

  attach: function attach() {
    return;
  },

  addToLogList: function addToLogList(data) {

    var newLog = JSON.parse(data);
    var logsArr = Array.isArray(newLog) ? newLog : [newLog];
    for (var i = 0; i < logsArr.length; i++) {
      logsArr[i].session_id = logs_state.session_id;
      logsArr[i].sn = ++logs_state.sn;
    }
    // console.warn(logsArr)

    sendAnalytics(logsArr);
  },
  saveToLocal: function saveToLocal(a, b, c) {
    if (hasLocalStorage) {
      try {
        window.localStorage.removeItem(c + ":" + "defOptionType");
        window.localStorage.removeItem(c + ":" + "defOption");
      } catch (e) {}
      window.localStorage.setItem(c + ":" + 'defOptionType', a);
      window.localStorage.setItem(c + ":" + 'defOption', JSON.stringify(b));
    }
  },
  deleteFromLocal: function deleteFromLocal() {},
  loadFromLocal: function loadFromLocal(key) {
    if (hasLocalStorage) {
      if (window.localStorage.getItem(key) == undefined) return "";
      try {
        var a = JSON.parse(window.localStorage.getItem(key));
        if (a == undefined) return "";
        return a;
      } catch (e) {
        return window.localStorage.getItem(key);
      }
    }
  },
  postLogs: function postLogs(endPoint, logs) {
    return;
  },


  submitAllLogs: function submitAllLogs() {
    return;
  },

  getLogList: function getLogList() {
    return JSON.stringify([]);
  },

  updateLogList: function updateLogList() {
    return JSON.stringify({});
  },

  isOnline: function isOnline() {
    return true;
  },

  getDeviceDetails: function getDeviceDetails() {
    var deviceDetails = {
      appVersion: "",
      osVersion: "",
      os: "",
      macAddress: "",
      isDual: "",
      manufacturer: "",
      isRooted: "",
      androidId: "",
      appPackageName: "",
      networkOperator: "",
      simOperatorName: "",
      screenHeight: "",
      screenWidth: "",
      screenPpi: "",
      brand: "",
      model: ""
    };
    return JSON.stringify(deviceDetails);
  },

  getDeviceInfo: function getDeviceInfo() {
    return JSON.stringify({});
  },

  getUUID: function getUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },

  renewFile: function renewFile(file) {
    return;
  },
  hideKeyboardOnNavigation: function hideKeyboardOnNavigation() {
    return;
  },
  runInJuspayBrowser: function runInJuspayBrowser(eventName, arg2, arg3) {
    //
    console.log('runInJuspayBrowser', eventName, arg2, arg3);
  },
  loadFileInDUI: function loadFileInDUI(fileName) {
    if (!fileName) {
      return "\n        <html>\n          <body>\n            <script></script>\n          </body>\n        </html>\n      ";
    }
    return fileName;
  },
  setSessionAttribute: function setSessionAttribute() {},
  getMd5: function getMd5() {
    return "";
  },
  setSessionDetails: function setSessionDetails(key, value) {
    window.session = window.session || {};
    window.session[key] = value;
  },
  getSessionDetails: function getSessionDetails() {
    return JSON.stringify(window.session || {});
  },
  /**
   * @method setFCMToken
   * @description Sets token for GCM notifications
   * 
   * Note: Only for Android/iOS. This is just an empty stub in web
   */
  setFCMToken: function setFCMToken() {
    return;
  },
  /**
   * @method requestLocation
   * @description Requests permission to access location
   * 
   * Note: Only for Android/iOS. This is just an empty stub in web
   */
  requestLocation: function requestLocation() {
    return;
  },

  doesSimplExist: function doesSimplExist() {
    return "false";
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var Renderer = __webpack_require__(2);

function generateTabWrapper() {
  var elem = document.createElement("div");

  elem.className = "tab";

  return elem;
}

function generateTabTitleWrapper() {
  var elem = document.createElement("div");
  elem.className = "tab-titleWrapper";

  return elem;
}

function generateTabContentWrapper() {
  var elem = document.createElement("div");

  elem.className = "tab-contentWrapper";

  return elem;
}

function generateTabTitleEl(title) {
  var elem = document.createElement("div");

  elem.innerHTML = title;
  elem.className = "tab-title";

  return elem;
};

function generateTabContentEl(view) {
  var elem = Renderer.inflateView(view.view);
  elem.className += " tab-content";

  return elem;
}

var createTabs = function createTabs(Android, id, tabJsx, jsx, cb) {
  var view = generateTabWrapper();
  var tabTitleWrapper = generateTabTitleWrapper();
  var tabContentWrapper = generateTabContentWrapper();
  var tabItem;

  view.appendChild(tabTitleWrapper);
  view.appendChild(tabContentWrapper);

  jsx.forEach(function (each, index) {
    tabItem = generateTabTitleEl(each.value);

    if (index == 0) tabItem.className += " tab-title-active";

    tabTitleWrapper.appendChild(tabItem);
  });

  tabJsx.forEach(function (each, index) {
    tabItem = generateTabContentEl(each);

    if (index == 0) tabItem.className += " tab-content-active";

    tabContentWrapper.appendChild(tabItem);
  });

  document.getElementById(id).appendChild(view);

  window.callUICallback(cb, "0");
};

module.exports = {
  createTabs: createTabs
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(43);
var mergeConfig = __webpack_require__(17);
var defaults = __webpack_require__(14);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(18);
axios.CancelToken = __webpack_require__(57);
axios.isCancel = __webpack_require__(13);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(58);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(12);
var InterceptorManager = __webpack_require__(44);
var dispatchRequest = __webpack_require__(45);
var mergeConfig = __webpack_require__(17);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(46);
var isCancel = __webpack_require__(13);
var defaults = __webpack_require__(14);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(16);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(52);
var combineURLs = __webpack_require__(53);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(18);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(19);
var formats = __webpack_require__(60);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(19);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
  handle: function handle(ui, callback) {
    if (!ui) {
      return;
    }
    if (ui.render) {
      if (typeof Android === "undefined") throw new Error("Android is undefined");

      if (true) return Android.Render(ui.render, null);else {}
    }

    if (ui.runInUI) {
      Android.runInUI(ui.runInUI, null);
    }
    if (ui.addViewToParent) {
      Android.addViewToParent(ui.addViewToParent.parentId, JSON.stringify(ui.addViewToParent.jsx), ui.addViewToParent.index, null);
    }
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var BaseView = __webpack_require__(20);
var VIEW = new BaseView(null, null, {});

// Object of types of animations available on screen change
var AnimationTypes = {
  SLIDE: {
    name: "slide",
    handler: slideHandler
  },
  SLIDE_VERTICAL: {
    name: "slide_down",
    handler: slideDownHandler
  },
  SIMPLE: {
    name: "simple",
    handler: simpleHandler
  }
};

var DEFAULT_ANIMATION = AnimationTypes.SLIDE;

function simpleHandler(fromId, toId, direction) {
  var cmd = VIEW.cmd({
    id: toId,
    translationZ: ++window.ZIndex
  });
  return cmd;
}

function slideDownHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;

  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      translationY: window.__HEIGHT,
      a_duration: '300',
      a_translationY: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: fromId,
      a_translationY: -0.2 * window.__HEIGHT,
      a_duration: '300'
    });
    container = container.addCmd(cmd);

    return container;
  }

  window.ZIndex++;
  cmd = VIEW.cmd({
    id: fromId,
    translationY: 0,
    a_translationY: window.__HEIGHT,
    a_duration: '300',
    translationZ: ++window.ZIndex
  });
  container = container.addCmd(cmd);

  cmd = VIEW.cmd({
    id: toId,
    translationZ: window.ZIndex - 1,
    a_translationY: '0',
    translationY: -0.2 * window.__HEIGHT,
    a_duration: '300'
  });
  container = container.addCmd(cmd);

  return container;
}

function slideHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;
  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: window.__WIDTH,
      a_duration: '300',
      a_translationX: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      visibility: 'visible',
      a_duration: '300',
      a_translationX: -.2 * window.__WIDTH + ''
    });
    container = container.addCmd(cmd);
  }

  if (direction == -1) {
    window.ZIndex++;
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      a_duration: '300',
      a_translationX: window.__WIDTH,
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: -.2 * window.__WIDTH + '',
      a_duration: '300',
      a_translationX: '0',
      translationZ: window.ZIndex - 1
    });
    container = container.addCmd(cmd);
  }

  return container;
}

/*
  Generic Handler for Animation
  Arguments:
    fromViewId: Number - Id of the view currently visible on the screen
    toViewID: Number - Id of the view which has to be brought on the screen
    ID: Number - Id of the view to be animated
    animator: Obj - {name:string, handler:function}
    direction: Number - Represents of the direction of the screen
      -1 : Go back to the already rendered screen (right to left)
       1 : Go to the new screen (left to right)
*/
function getAnimation(fromViewID, toViewId, direction, animator) {
  if (!animator) animator = DEFAULT_ANIMATION;

  if ((typeof animator === "undefined" ? "undefined" : _typeof(animator)) === "object" && typeof animator.handler === "function") return animator.handler(fromViewID, toViewId, direction);else console.log(new Error("Animation handler is not a function, type: " + animator));
}

module.exports.types = AnimationTypes;
module.exports.getAnimation = getAnimation;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgud2ViLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvUmVuZGVyLmpzIiwid2VicGFjazovLy9zcmMvZG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy93ZWIvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvcHJvcHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvcHJvcHMvZXZlbnRzLmpzIiwid2VicGFjazovLy9zcmMvV0VCL3Byb3BzL2dyYXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9QcmVzdG9VSUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvd2ViLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvQW5kcm9pZEludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXB1dGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duQm94LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Td2l0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL1dFQi9wcm9wcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvcHJvcHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvcHJvcHMvbGF5b3V0LmpzIiwid2VicGFjazovLy9zcmMvV0VCL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy9zcmMvV0VCL0pCcmlkZ2VJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvVmlld1BhZ2VBZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hbmltYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuLy8gRm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgdXNlZCBieSBXRUIgYW5kIElPUyBSZW5kZXJcbmZ1bmN0aW9uIGNhY2hlRGltZW4odmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueSxcbiAgICBncmF2aXR5OiBwcm9wcy5ncmF2aXR5LFxuICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG4gICAgb3JpZW50YXRpb246IHByb3BzLm9yaWVudGF0aW9uLFxuICAgIHN0cm9rZTogcHJvcHMuc3Ryb2tlID8gcHJvcHMuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXSAqIDEgOiAwLFxuICB9XG4gIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBkaW1lbjtcbn1cblxuZnVuY3Rpb24gc2hvdWxkTW92ZSh2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55XG4gIH07XG4gIGxldCBjYWNoZWREaW1lbiA9IHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF07XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGlmICghY2FjaGVkRGltZW4pXG4gICAgcmV0dXJuIGRpbWVuO1xuICBmb3IgKGxldCBrZXkgaW4gZGltZW4pIHtcbiAgICBpZiAoY2FjaGVkRGltZW5ba2V5XSAhPSBkaW1lbltrZXldKSB7XG4gICAgICBkaW1lbi5pZCA9IHByb3BzLmlkO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChjaGFuZ2VkKVxuICAgIHJldHVybiBkaW1lbjtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE9TKCkge1xuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCF1c2VyQWdlbnQpXG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiVXNlckFnZW50IGlzIG51bGxcIikpO1xuICBpZiAodXNlckFnZW50LmluY2x1ZGVzKFwiQW5kcm9pZFwiKSAmJiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIkFORFJPSURcIjtcbiAgaWYgKCh1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGhvbmVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiaVBhZFwiKSkgJiYgIXVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiSU9TXCI7XG4gIHJldHVybiBcIldFQlwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclZpZXdFeHRlcm5hbHModmlldykge1xuICBpZiAoIXZpZXcpXG4gICAgcmV0dXJuO1xuXG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLmlkXTtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1t2aWV3LnByb3BzLmlkXTtcbiAgXG4gIGlmKF9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdKVxuICAgIGRlbGV0ZSB3aW5kb3cuX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF07XG5cbiAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKGNsZWFyVmlld0V4dGVybmFscyk7XG59XG5cbi8vIHVzZTogY2xvbmUoIDx0aGluZyB0byBjb3B5PiApIHJldHVybnMgPG5ldyBjb3B5PlxuZnVuY3Rpb24gY2xvbmUobywgbSl7XG4gIC8vIHJldHVybiBub24gb2JqZWN0IHZhbHVlc1xuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbykgcmV0dXJuIG9cbiAgLy8gbTogYSBtYXAgb2Ygb2xkIHJlZnMgdG8gbmV3IG9iamVjdCByZWZzIHRvIHN0b3AgcmVjdXJzaW9uXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBtIHx8IG51bGwgPT09bSkgbSA9bmV3IFdlYWtNYXAoKVxuICB2YXIgbiA9bS5nZXQobylcbiAgaWYoJ3VuZGVmaW5lZCcgIT09dHlwZW9mIG4pIHJldHVybiBuXG4gIC8vIHNoYWxsb3cvbGVhZiBjbG9uZSBvYmplY3RcbiAgdmFyIGMgPU9iamVjdC5nZXRQcm90b3R5cGVPZihvKS5jb25zdHJ1Y3RvclxuICAvLyBUT0RPOiBzcGVjaWFsaXplIGNvcGllcyBmb3IgZXhwZWN0ZWQgYnVpbHQgaW4gdHlwZXMgaS5lLiBEYXRlIGV0Y1xuICBzd2l0Y2goYykge1xuICAgIC8vIHNob3VsZG4ndCBiZSBjb3BpZWQsIGtlZXAgcmVmZXJlbmNlXG4gICAgY2FzZSBCb29sZWFuOlxuICAgIGNhc2UgRXJyb3I6XG4gICAgY2FzZSBGdW5jdGlvbjpcbiAgICBjYXNlIE51bWJlcjpcbiAgICBjYXNlIFByb21pc2U6XG4gICAgY2FzZSBTdHJpbmc6XG4gICAgY2FzZSBTeW1ib2w6XG4gICAgY2FzZSBXZWFrTWFwOlxuICAgIGNhc2UgV2Vha1NldDpcbiAgICAgIG4gPW9cbiAgICAgIGJyZWFrO1xuICAgIC8vIGFycmF5IGxpa2UvY29sbGVjdGlvbiBvYmplY3RzXG4gICAgY2FzZSBBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKHYsaSl7XG4gICAgICAgIGlmKCdvYmplY3QnID09PXR5cGVvZiB2KSBuW2ldID1jbG9uZSh2LCBtKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5QnVmZmVyOlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRGF0YVZpZXc6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmJ5dGVMZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBNYXA6XG4gICAgY2FzZSBTZXQ6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKEFycmF5LmZyb20oby5lbnRyaWVzKCkpLCBtKSkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIEludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OENsYW1wZWRBcnJheTpcbiAgICBjYXNlIEludDE2QXJyYXk6XG4gICAgY2FzZSBVaW50MTZBcnJheTpcbiAgICBjYXNlIEludDMyQXJyYXk6XG4gICAgY2FzZSBVaW50MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0NjRBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8ubGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIHVzZSBidWlsdCBpbiBjb3B5IGNvbnN0cnVjdG9yXG4gICAgY2FzZSBEYXRlOlxuICAgIGNhc2UgUmVnRXhwOlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShvKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZhbGxiYWNrIGdlbmVyaWMgb2JqZWN0IGNvcHlcbiAgICBkZWZhdWx0OlxuICAgICAgbS5zZXQobywgbiA9T2JqZWN0LmFzc2lnbihuZXcgKGMpKCksIG8pKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIGZvcihjIGluIG4pIGlmKCdvYmplY3QnID09PXR5cGVvZiBuW2NdKSBuW2NdID1jbG9uZShuW2NdLCBtKVxuICB9XG4gIHJldHVybiBuXG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0ge30sXG4gICAgICBpID0gMCxcbiAgICAgIGlsID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGtleTtcbiAgZm9yICg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG91bGRNb3ZlLFxuICBjYWNoZURpbWVuLFxuICBnZXRPUyxcbiAgbWVyZ2UsXG4gIGNsZWFyVmlld0V4dGVybmFscyxcbiAgY2xvbmUsXG59IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbmxldCB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zXG59ID0gcmVxdWlyZShcIi4uL2NvbXB1dGVcIilcblxuY29uc3Qge1xuICAgIGFkZEFkZGl0aW9uYWxWaWV3UHJvcHMsXG4gICAgc2V0QXR0cmlidXRlcyxcbiAgICBoYW5kbGVXcmFwQ29udGVudCxcbn0gPSByZXF1aXJlKFwiLi9wcm9wc1wiKVxuXG5jb25zdCBldmVudHMgPSByZXF1aXJlKFwiLi9wcm9wcy9ldmVudHNcIilcbmNvbnN0IGVsZW1lbnRzID0gcmVxdWlyZShcIi4vZWxlbWVudHNcIik7XG5cbmxldCBoZWxwZXIgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpXG5cbi8qIERvIHNvbWUgYWN0aW9ucyBhZnRlciByZW5kZXJlZCAqL1xubGV0IGNiID0gKGVsZW0sIHZpZXcpID0+IHtcbiAgICBpZiAodmlldy5wcm9wcy5mZWVkYmFjayAmJiB0eXBlb2Ygdmlldy5wcm9wcy5mZWVkYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmlldy5wcm9wcy5mZWVkYmFjaygpXG4gICAgfVxufVxuXG53aW5kb3cuaW5mbGF0ZVRpbWluZ3MgPSB7XG4gICAgbGFzdFVwZGF0ZWRBdDogbnVsbFxufVxuXG5sZXQgYWRkRG9tVG9QYXJlbnQgPSBmdW5jdGlvbiAoZWxlbSwgcGFyZW50RWxlbWVudCwgc2libGluZ1ZpZXcpIHtcbiAgICBsZXQgc2libGluZ0VsZW1lbnQgPSBzaWJsaW5nVmlldyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpYmxpbmdWaWV3LnByb3BzLmlkKSA6IG51bGw7XG5cbiAgICBpZiAoc2libGluZ0VsZW1lbnQgJiYgc2libGluZ0VsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09IHNpYmxpbmdFbGVtZW50KSB7IC8vIFByZXBlbmRcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJlcGVuZChlbGVtKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gSW5zZXJ0IGluIHNwZWNpZmllZCBwb3NpdGlvblxuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWxlbSwgbmV4dFNpYmxpbmdFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufVxuXG4vLyBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBpZiBpdCBoYXMgbm90IGJlZW4gYWxyZWFkeSBpbmZsYXRlZFxuLy8gVmlldzogT2JqZWN0IG9mIFJlYWN0RE9NLCB7dHlwZSwgcHJvcHMsIGNoaWxkcmVufVxuLy8gcGFyZW50RWxlbWVudDogRE9NIE9iamVjdFxubGV0IGluZmxhdGVWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIHBhcmVudEVsZW1lbnQsIHNpYmxpbmdWaWV3LCBzdG9wQ2hpbGQsIHN0b3BPYnNlcnZlciwgcmVuZGVyU3R5bGUpIHtcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5wcm9wcy5pZCk7XG4gICAgbGV0IHN1YkVsZW0gPSBudWxsO1xuICAgIGxldCBuZXdJbmZsYXRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHZpZXcucHJvcHMueCA9PSBcIk5hTlwiIHx8IHZpZXcucHJvcHMueSA9PSBcIk5hTlwiKSB7XG4gICAgICAgIHZpZXcgPSBoYW5kbGVXcmFwQ29udGVudCh2aWV3LCBwYXJlbnRFbGVtZW50KVxuICAgIH1cblxuICAgIGlmICghZWxlbSkge1xuICAgICAgICAoeyBlbGVtLCBzdWJFbGVtIH0gPSBlbGVtZW50cy5jcmVhdGVFbGVtZW50KHZpZXcsIHBhcmVudEVsZW1lbnQpKTtcblxuICAgICAgICBuZXdJbmZsYXRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaWJsaW5nRWxlbWVudCA9IHNpYmxpbmdWaWV3ID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2libGluZ1ZpZXcucHJvcHMuaWQpIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKHNpYmxpbmdFbGVtZW50ICYmIHNpYmxpbmdFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09IHNpYmxpbmdFbGVtZW50KSB7IC8vIFByZXBlbmRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YkVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN1YkVsZW0sIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWxlbSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBJbnNlcnQgaW4gc3BlY2lmaWVkIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlbGVtLCBuZXh0U2libGluZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3ViRWxlbSwgbmV4dFNpYmxpbmdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCB0cnVlKTtcblxuICAgICAgICAvKmlmKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICBpZighc3RvcE9ic2VydmVyKXtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBydW4gb2JzZXJ2ZXIgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAgICBvYnNlcnZlcihlbGVtKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdoYXNfcmVuZGVyJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9Ki9cbiAgICB9IGVsc2UgaWYgKHJlbmRlclN0eWxlKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYWRkQWRkaXRpb25hbFZpZXdQcm9wcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMpO1xuXG4gICAgaWYgKCFzdG9wQ2hpbGQpIHtcbiAgICAgICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIH1cblxuICAgIGlmICghc3RvcENoaWxkKSB7XG4gICAgICAgIGlmICh2aWV3Lmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpICYmIHZpZXcuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmxhdGVWaWV3KHZpZXcuY2hpbGRyZW5baV0sIGVsZW0sIHZpZXcuY2hpbGRyZW5baSAtIDFdLCBzdG9wQ2hpbGQsIHN0b3BPYnNlcnZlciwgcmVuZGVyU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LmNoaWxkcmVuW2ldLCBlbGVtLCB2aWV3LCBzdG9wQ2hpbGQsIHN0b3BPYnNlcnZlciwgcmVuZGVyU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdJbmZsYXRlZCkge1xuICAgICAgICBpZiAoIXN0b3BPYnNlcnZlcikge1xuICAgICAgICAgICAgZXZlbnRzLmFkZE9ic2VydmVyKGVsZW0sIHZpZXcucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGNiKGVsZW0sIHZpZXcpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgd2luZG93LmluZmxhdGVUaW1pbmdzW3ZpZXcucHJvcHMuaWRdID0gZW5kIC0gc3RhcnRcbiAgICB3aW5kb3cuaW5mbGF0ZVRpbWluZ3MubGFzdFVwZGF0ZWRBdCA9IGVuZFxuXG4gICAgcmV0dXJuIGVsZW07XG59O1xuXG5sZXQgcnVuSW5VSSA9IGZ1bmN0aW9uIChjbWQpIHtcbiAgICBpZiAoIShjbWQgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgIGNtZCA9IFtjbWRdO1xuXG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlYWNoLmlkKTtcblxuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwicnVuSW5VSSAoSWQgTlVMTCkgQ01EOlwiLCBlYWNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbZWxlbS5pZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG5cbiAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIGZhbHNlKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFkZERvbVRvUGFyZW50LFxuICAgIGluZmxhdGVWaWV3LFxuICAgIHJ1bkluVUksXG4gICAgY29tcHV0ZUNoaWxkRGltZW5zXG59OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuZnVuY3Rpb24gcnVuKCkge1xuICBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vaW9zXCIpXG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vd2ViXCIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2FuZHJvaWRcIilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bigpOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbkFycmF5LnByb3RvdHlwZS5yb3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBzYXZlIHJlZmVyZW5jZXMgdG8gYXJyYXkgZnVuY3Rpb25zIHRvIG1ha2UgbG9va3VwIGZhc3RlclxuICB2YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoLFxuICAgIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCA+Pj4gMCwgLy8gY29udmVydCB0byB1aW50XG4gICAgICBjb3VudCA9IGNvdW50ID4+IDA7IC8vIGNvbnZlcnQgdG8gaW50XG5cbiAgICAvLyBjb252ZXJ0IGNvdW50IHRvIHZhbHVlIGluIHJhbmdlIFswLCBsZW4pXG4gICAgY291bnQgPSAoKGNvdW50ICUgbGVuKSArIGxlbikgJSBsZW47XG5cbiAgICAvLyB1c2Ugc3BsaWNlLmNhbGwoKSBpbnN0ZWFkIG9mIHRoaXMuc3BsaWNlKCkgdG8gbWFrZSBmdW5jdGlvbiBnZW5lcmljXG4gICAgcHVzaC5hcHBseSh0aGlzLCBzcGxpY2UuY2FsbCh0aGlzLCAwLCBjb3VudCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZsYXRPYmplY3RbeF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b1JldHVybjtcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcnMoY29sb3IpIHtcbiAgaWYgKGNvbG9yLmxlbmd0aCA8IDgpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIGlmIChjb2xvci5pbmRleE9mKFwicmdiYVwiKSAhPT0gLTEgfHwgY29sb3IuaW5kZXhPZihcInJnYlwiKSAhPT0gLTEpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIHZhciBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcblxuICB2YXIgaGV4Q29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIHZhciByZ2JhQ29sb3IgPSBcInJnYmEoXCIgKyBjb252ZXJ0SGV4VG9SZ2IoaGV4Q29sb3IpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuXG4gIHJldHVybiByZ2JhQ29sb3I7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXkpIHtcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDU1MFxuICBpZiAodHlwZW9mIGNvbmZpZ1trZXldID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleV0gPT0gbnVsbCkge1xuICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5zdHlsZSkge1xuICAgIGNvbmZpZy5zdHlsZSA9IHt9O1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24gPSB7fTtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5hdHRyaWJ1dGVzKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzID0ge307XG5cbiAgaWYgKCFjb25maWcuc3R5bGUuY2xhc3NOYW1lKVxuICAgIGNvbmZpZy5zdHlsZS5jbGFzc05hbWUgPSBcIlwiO1xuXG4gIGlmICgoa2V5ID09IFwib25DbGlja1wiIHx8IGtleSA9PSBcIm9uQ2xpY2tFdmVudFwiKSkge1xuICAgIGlmKCFpc01vYmlsZSAmJiAhY29uZmlnLmN1cnNvclR5cGUpe1xuICAgICAgY29uZmlnLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZihrZXkgPT0gXCJjdXJzb3JUeXBlXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gY29uZmlnLmN1cnNvclR5cGU7XG4gIH1cbiAgaWYgKGtleSA9PSBcInRleHRTaXplXCIpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLnRleHRTaXplICsgJ3B4JztcbiAgaWYgKGtleSA9PSAnZm9udFNpemUnKVxuICAgIGNvbmZpZy5zdHlsZS5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZSArICdweCc7XG4gIFxuICBpZiAoa2V5ID09ICd1cmwnKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGNvbmZpZy51cmxcbiAgICBcbiAgLyppZiAoa2V5ID09IFwiaW1hZ2VVcmxcIil7XG4gICAgbGV0IGltYWdlVXJsID0gY29uZmlnLmltYWdlVXJsO1xuICAgIFxuICAgIGlmKGNvbmZpZy5yYXdEYXRhKSB7XG4gICAgICAvLyBEbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBleHQgPSAnJztcbiAgICAgIGlmKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICBcbiAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXTtcbiAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZighZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgIGltYWdlVXJsICs9ICcucG5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy5zcmMgPSBpbWFnZVVybDtcbiAgfSovXG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRDb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcnNlQ29sb3JzKGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5iYWNrZ3JvdW5kID0gY29uZmlnLmJhY2tncm91bmQ7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZERyYXdhYmxlXCIpIHtcbiAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJ1cmwoJ1wiK2NvbmZpZy5iYWNrZ3JvdW5kRHJhd2FibGUrXCInKVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvbG9yXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY29sb3IgPSBwYXJzZUNvbG9ycyhjb25maWcuY29sb3IpO1xuICB9XG5cbiAgaWYoa2V5ID09IFwicG9zaXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImJvdHRvbUZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm90dG9tID0gY29uZmlnLmJvdHRvbUZpeGVkO1xuICB9XG4gIGlmKGtleSA9PSBcInRvcEZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUudG9wID0gY29uZmlnLnRvcEZpeGVkO1xuICB9XG4gIGlmKGtleSA9PSBcImxlZnRGaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmxlZnQgPSBjb25maWcubGVmdEZpeGVkO1xuICB9XG4gIGlmKGtleSA9PSBcInJpZ2h0Rml4ZWRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5yaWdodCA9IGNvbmZpZy5yaWdodEZpeGVkO1xuICB9XG5cbiAgaWYoa2V5ID09IFwiekluZGV4XCIpIHtcbiAgICBjb25maWcuc3R5bGVbXCJ6LWluZGV4XCJdID0gY29uZmlnLnpJbmRleDtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImF1dG9mb2N1c1wiKXtcbiAgICB2YXIgaXNJUGhvbmUgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiaVBob25lXCIpICE9PSAtMSlcbiAgICBpZihjb25maWcuYXV0b2ZvY3VzICYmICFpc0lQaG9uZSl7XG4gICAgICBjb25maWcuYXR0cmlidXRlc1tcImF1dG9mb2N1c1wiXSA9IFwiYXV0b2ZvY3VzXCI7ICBcbiAgICB9XG4gIH1cbiAgaWYoa2V5PT1cImZvY3VzXCIpIHtcbiAgICBpZiAoY29uZmlnLmZvY3VzICYmIGNvbmZpZy5pZCl7XG4gICAgICB2YXIgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmlkKTtcbiAgICAgIGlmIChkb2Mpe1xuICAgICAgICBkb2MuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb3JuZXJSYWRpdXNcIikge1xuICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBjb25maWcuY29ybmVyUmFkaXVzICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFscGhhXCIpIHtcbiAgICBjb25maWcuc3R5bGUub3BhY2l0eSA9IGNvbmZpZ1trZXldO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfYWxwaGFcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24ub3BhY2l0eSA9IGNvbmZpZ1trZXldO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImZvbnRGYW1pbHlcIikge1xuICAgIGNvbmZpZy5zdHlsZS5mb250RmFtaWx5ID0gY29uZmlnLmZvbnRGYW1pbHk7XG4gIH1cblxuICBpZiAoa2V5ID09ICd0eXBlZmFjZScpIHtcbiAgICBzd2l0Y2goY29uZmlnLnR5cGVmYWNlKXtcbiAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNDAwO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2l0YWxpYyc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9sZF9pdGFsaWMnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDcwMDtcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICBjb25maWcuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJmb250U3R5bGVcIikge1xuICAgIGxldCBtYXRjaCA9IGNvbmZpZy5mb250U3R5bGUubWF0Y2goL1svLV0vKTtcbiAgICBsZXQgZm9udE5hbWUgPSBtYXRjaCA/IGNvbmZpZy5mb250U3R5bGUuc2xpY2UoMCwgbWF0Y2guaW5kZXgpIDogY29uZmlnLmZvbnRTdHlsZTtcbiAgICBjb25maWcuc3R5bGUuZm9udEZhbWlseSA9IGZvbnROYW1lO1xuXG4gICAgaWYgKCFtYXRjaClcbiAgICAgIHJldHVybjtcblxuICAgIGxldCB0eXBlID0gY29uZmlnLmZvbnRTdHlsZS5zbGljZShtYXRjaC5pbmRleCArIDEpO1xuICAgIHR5cGUgPSB0eXBlLnJlcGxhY2UoL1stL10vZywgJycpO1xuICAgIHR5cGUgID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHR5cGUuaW5kZXhPZignaXRhbGljJykgIT0gLTEpXG4gICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG5cbiAgICBsZXQgZm9udFdlaWdodCA9IDA7XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKCdleHRyYWxpZ2h0JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gMjAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignbGlnaHQnKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSAzMDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdyZWd1bGFyJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdib29rJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNDAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignc2VtaWJvbGQnKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ21lZGl1bScpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDUwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2JvbGQnKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ2hlYXZ5JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNzAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignYmxhY2snKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA5MDA7XG5cbiAgICBpZihmb250V2VpZ2h0ID4gMClcbiAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gZm9udFdlaWdodDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ3Zpc2liaWxpdHknKSB7XG4gICAgbGV0IHZpc2liaWxpdHkgPSBjb25maWcudmlzaWJpbGl0eTtcbiAgICBpZiAodmlzaWJpbGl0eSA9PSAnaW52aXNpYmxlJylcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBlbHNlIGlmICh2aXNpYmlsaXR5ID09ICdnb25lJylcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWxzZSB7XG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgfSBcblxuICBpZiAoa2V5ID09ICdleHBhbmQnKSB7XG4gICAgbGV0IHZpc2liaWxpdHkgPSBjb25maWcuZXhwYW5kICsgJyc7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ3RydWUnKXtcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZS5zcGxpdChcIixcIik7XG5cbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMyl7XG4gICAgICBpZiAodmFsdWVzWzJdID09IFwicmJsXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsdWVzWzJdID09IFwiYlwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWx1ZXNbMl0gPT0gXCJyXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsdWVzWzJdID09IFwicmJcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VUb3BcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlVG9wLnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJUb3AgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlUmlnaHRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlUmlnaHQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlQm90dG9tXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUJvdHRvbS5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUxlZnRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlTGVmdC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvbllcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25YXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVYXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVlcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblpcIikge1xuICAgIHZhciB2ID0gY29uZmlnW2tleV07XG4gICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC1ib3gtc2hhZG93XCJdID0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiLW1vei1ib3gtc2hhZG93XCJdPSBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBjb25maWcuc3R5bGVbXCJib3gtc2hhZG93XCJdPSAgXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9kdXJhdGlvblwiICYmICFpc05hTihjb25maWdba2V5XSkpIHtcbiAgICBjb25zdCBzdWZmaXggPSBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID8gKFwiIFwiICsgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbikgOiBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNpdGlvbiA9IGNvbmZpZ1trZXldICsgJ21zIGFsbCcgKyBzdWZmaXg7XG4gIH1cbiAgXG4gIGlmICh0eXBlID09IFwidGV4dFZpZXdcIiAmJiBrZXkgPT0gXCJncmF2aXR5XCIgJiYgY29uZmlnLmdyYXZpdHkpIHtcbiAgICBjb25maWcuc3R5bGUudGV4dEFsaWduID0gY29uZmlnLmdyYXZpdHk7XG4gICAgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyX3ZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl9ob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJcIikge1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpe1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KXtcbiAgICBpZiAoY29uZmlnLm1hcmdpbiAmJiBjb25maWcuZ3Jhdml0eT09XCJjZW50ZXJfdmVydGljYWxcIil7XG4gICAgICB2YXIgbWFyZ2luPWNvbmZpZy5tYXJnaW4uc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKGNvbmZpZy53aWR0aCA9PSBcIm1hdGNoX3BhcmVudFwiKXtcbiAgICAgICAgIGNvbmZpZy5zdHlsZS53aWR0aD1cImNhbGMoMTAwJSAtIFwiKyhwYXJzZUludChtYXJnaW5bMF0pK3BhcnNlSW50KG1hcmdpblsyXSkpLnRvU3RyaW5nKCkrXCJweCApXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImhpbnRcIil7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBjb25maWcuaGludDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb250ZW50RWRpdGFibGVcIiAmJiBjb25maWcuY29udGVudEVkaXRhYmxlKXtcbiAgICBjb25maWcuYXR0cmlidXRlcy5jb250ZW50ZWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImlkXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlcy5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPUpTT04ucGFyc2UoY29uZmlnLmdyYWRpZW50KTtcbiAgICBpZiAoZ3JhZGllbnRPYmoudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICB2YXIgYW5nbGUgPSBncmFkaWVudE9iai5hbmdsZTtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcImxpbmVhci1ncmFkaWVudChcIithbmdsZStcImRlZywgXCIrY29sb3JzK1wiKVwiXG4gICAgfVxuICAgICBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInJhZGlhbC1ncmFkaWVudChcIitjb2xvcnMrXCIpXCJcbiAgICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImlucHV0VHlwZVwiKSB7XG4gICAgdmFyIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1Bhc3N3b3JkXCIgfHwgY29uZmlnLmlucHV0VHlwZSA9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQgJiYgaXNNb2JpbGUpe1xuICAgICAgICBpbnB1dFR5cGUgPSBcInRlbFwiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCItd2Via2l0LXRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1wiLW1vei10ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcInRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwicGFzc3dvcmRcIlxuICAgICAgICBjb25maWcuYXR0cmlidXRlcy5hdXRvY29tcGxldGUgPSBcIm5ldy1wYXNzd29yZFwiXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwiZGlzYWJsZWRcIikge1xuICAgICAgICBjb25maWcuYXR0cmlidXRlcy5kaXNhYmxlZCA9ICdkaXNhYmxlZCdcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJudW1lcmljXCIpIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJudW1iZXJcIlxuICAgIH1cbiAgICBpZiAoY29uZmlnLnNlcGFyYXRvcikge1xuICAgICAgaWYoY29uZmlnLmlucHV0VHlwZSA9PSBcIm51bWVyaWNcIil7XG4gICAgICAgIGlucHV0VHlwZSA9IFwidGVsXCIgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJ0ZXh0XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy50eXBlID0gaW5wdXRUeXBlXG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRlSW1hZ2VcIikge1xuICAgIGlmKGNvbmZpZy5yb3RhdGVJbWFnZSl7XG4gICAgICBjb25maWcuc3R5bGVbXCItd2Via2l0LWFuaW1hdGlvblwiXSA9IFwibG9hZDMgNHMgaW5maW5pdGUgbGluZWFyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZHVyYXRpb25cIl0gPSBcIjRzXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdID0gXCJsaW5lYXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kZWxheVwiXSA9IFwiMHNcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIl0gPSBcImluZmluaXRlXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZGlyZWN0aW9uXCJdID0gXCJub3JtYWxcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1maWxsLW1vZGVcIl0gPSBcIm5vbmVcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1wbGF5LXN0YXRlXCJdID0gXCJydW5uaW5nXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tbmFtZVwiXSA9IFwicm90YXRpb25cIjtcblxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJwYXR0ZXJuXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcImRhdGEtcGF0dGVyblwiXSA9IGNvbmZpZy5wYXR0ZXJuO1xuICAgIHZhciBkYXRhID0gY29uZmlnLnBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICB2YXIgbGVuZ3RoID0gcGFyc2VJbnQoZGF0YS5wb3AoKSk7XG4gICAgaWYobGVuZ3RoPjEwKSB7bGVuZ3RoID0gMTA7fVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wic2l6ZVwiXSA9bGVuZ3RoO1xuXG4gIH1cbiAgLy8gaWYoa2V5ID09IFwiaW5wdXRUeXBlSVwiKXtcbiAgLy8gICBpZihjb25maWcuaW5wdXRUeXBlSSA9PSA0KXtcbiAgLy8gICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiaW5wdXRtb2RlXCJdID0gXCJudW1lcmljXCI7XG4gIC8vICAgfVxuICAgIFxuICAvLyB9XG5cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JcIl0gPSBjb25maWcuc2VwYXJhdG9yO1xuICB9XG4gIGlmIChrZXkgPT0gXCJzZXBhcmF0b3JSZXBlYXRcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wic2VwYXJhdG9yUmVwZWF0XCJdID0gY29uZmlnLnNlcGFyYXRvclJlcGVhdDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJteUF0dHJcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wibXlBdHRyXCJdID0gY29uZmlnLm15QXR0cjtcbiAgfVxuICBpZiAoa2V5ID09IFwiYmx1ckJhY2tncm91bmRcIiAmJiBjb25maWcuYmx1ckJhY2tncm91bmQpe1xuICAgIGNvbmZpZy5zdHlsZVtcImJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigzcHgpXCI7XG4gIH1cbiAgaWYgKGtleSA9PSBcInNoYWRvd1wiKSB7XG4gICAgdmFyIHNoYWRvd1ZhbHVlcyA9IGNvbmZpZy5zaGFkb3cuc3BsaXQoY29uZmlnLnNoYWRvd1NlcGFyYXRvciB8fCAnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgICAgeDogcldTKGNTKHNoYWRvd1ZhbHVlc1swXSkpLFxuICAgICAgICB5OiByV1MoY1Moc2hhZG93VmFsdWVzWzFdKSlcbiAgICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcbiAgICB2YXIgc2hhZG93VHlwZSA9IGNvbmZpZy5zaGFkb3dUeXBlID8gYCR7Y29uZmlnLnNoYWRvd1R5cGV9IGAgOiAnJ1xuXG4gICAgY29uZmlnW1wic3R5bGVcIl1bXCJib3gtc2hhZG93XCJdID0gc2hhZG93VHlwZSArIHBhcnNlSW50KHNoYWRvd09mZnNldC54KSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dPZmZzZXQueSkgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93Qmx1cikgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93U3ByZWFkKSArIFwicHggcmdiYShcIiArIHNoYWRvd0NvbG9yLnIgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuZyArIFwiLCBcIiArICBzaGFkb3dDb2xvci5iICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmEgKyBcIilcIiA7XG4gIH1cblxuICBpZiAoa2V5ID09IFwibGluZUhlaWdodFwiKVxuICAgIGNvbmZpZy5zdHlsZS5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGtleSA9PSBcIm9iamVjdEZpdFwiKVxuICAgIGNvbmZpZy5zdHlsZS5vYmplY3RGaXQgPSBjb25maWcub2JqZWN0Rml0O1xuXG4gIGlmIChrZXkgPT0gXCJjbGlja2FibGVcIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb2ludGVyRXZlbnRzID0gY29uZmlnLmNsaWNrYWJsZSA/IFwiYXV0b1wiIDogXCJub25lXCI7XG4gIH1cbiAgaWYgKGtleSA9PSBcImRpc3BsYXlcIikge1xuICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gY29uZmlnLmRpc3BsYXlcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3IpIHtcbiAgY29sb3IgPSByV1MoY1MoY29sb3IpKTtcblxuICB2YXIgdmFsdWVzO1xuICB2YXIgYWxwaGEgPSBcIjEuMDBcIjtcblxuICBpZiAoY29sb3IubGVuZ3RoID49IDgpIHtcbiAgICBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDMsIDkpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDEsIGNvbG9yLmxlbmd0aCk7XG4gIH1cblxuICBjb2xvciA9IGNvbnZlcnRIZXhUb1JnYihyV1MoY29sb3IpKTtcbiAgdmFsdWVzID0gY29sb3Iuc3BsaXQoJywnKTtcblxuICByZXR1cm4ge1xuICAgIHI6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMF0pKSxcbiAgICBnOiBwYXJzZUludChyV1ModmFsdWVzWzFdKSksXG4gICAgYjogcGFyc2VJbnQocldTKHZhbHVlc1syXSkpLFxuICAgIGE6IHBhcnNlRmxvYXQoYWxwaGEpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb1JnYihoZXgpIHtcbiAgdmFyIHIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpKS50b0ZpeGVkKDIpO1xuICB2YXIgZyA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNikpLnRvRml4ZWQoMik7XG4gIHZhciBiID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KSkudG9GaXhlZCgyKTtcblxuICByZXR1cm4gciArIFwiLFwiICsgZyArIFwiLFwiICsgYjtcbn1cblxuZnVuY3Rpb24gY1ModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gdmFsdWUgKyAnJyA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJXUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvIC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzKHR5cGUsIGNvbmZpZykge1xuICBpZiAodHlwZSA9PSBcImxpbmVhckxheW91dFwiKSB7XG4gICAgY29uZmlnLm9yaWVudGF0aW9uID0gY29uZmlnLm9yaWVudGF0aW9uO1xuICB9XG59XG5mdW5jdGlvbiB0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpIHtcbiAgdmFyIGNvbj1tb2RpZnlUcmFuc2xhdGlvbihjb25maWcpO1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbi5uYW1lKTtcbn1cbmZ1bmN0aW9uIG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyl7XG4gIHZhciB4ID0gY29uZmlnLnggfHwgXCIwXCI7XG4gIHZhciB5ID0gY29uZmlnLnkgfHwgXCIwXCI7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IEpTT04ucGFyc2UoY29uZmlnLmlubGluZUFuaW1hdGlvbik7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IGFuaW1hdGlvbkFycmF5Lm1hcChmdW5jdGlvbihhKXtcbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVhcIikpe1xuICAgICAgYS5mcm9tWCA9IHBhcnNlSW50KGEuZnJvbVgpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgICAgYS50b1ggPSAwICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICBhLnRvWCA9IHBhcnNlSW50KGEudG9YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWVwiKSl7XG4gICAgICBhLmZyb21ZID0gcGFyc2VJbnQoYS5mcm9tWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgICBhLnRvWSA9IDAgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgIGEudG9ZID0gcGFyc2VJbnQoYS50b1kpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pXG4gIHJldHVybiAoYW5pbWF0aW9uQXJyYXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBnZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGZsYXR0ZW5PYmplY3QoY29uZmlnKTtcbiAgc2V0RGVmYXVsdHModHlwZSwgY29uZmlnKTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChjb25maWcuc3R5bGUgJiYgY29uZmlnLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgJiYga2V5c1tpXSA9PT0gJ2dyYXZpdHknKSAge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXlzW2ldKTtcbiAgfVxuXG4gIGNvbmZpZy50cmFuc2l0aW9uID0gW1xuICAgIFN0cmluZyhjb25maWcuYV9kdXJhdGlvbiB8fCAwKSArXCJtc1wiLFxuICAgIFwiYWxsXCIsXG4gICAgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKFwiIFwiKTtcblxuICBpZiAoY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9PSBcIlwiKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm07XG4gIH1cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgaGVscGVycyA9IHtcblx0Y29tbW9uIDogcmVxdWlyZShcIi4vY29tbW9uXCIpXG59O1xuXG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuXHRoZWxwZXJzLmFuZHJvaWQgPSByZXF1aXJlKFwiLi9hbmRyb2lkXCIpXG59XG5lbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG5cdGhlbHBlcnMud2ViID0gcmVxdWlyZShcIi4vd2ViXCIpO1xufVxuZWxzZSB7XG5cdGhlbHBlcnMuaW9zID0gcmVxdWlyZShcIi4vaW9zXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbm1vZHVsZS5leHBvcnRzLm1hcCA9IChmbikgPT4ge1xuXHRpZih0eXBlb2Ygd2luZG93Ll9fRk5fSU5ERVggIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX0ZOX0lOREVYICE9PSBudWxsKSB7XG5cdFx0dmFyIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG5cdFx0aWYgKHdpbmRvdy5fX3BheWxvYWQgJiYgd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlKXtcblx0XHRcdHByb3h5Rm5OYW1lID0gd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlICsgXCJfXCIgKyBwcm94eUZuTmFtZTtcblx0XHR9XG5cdFx0d2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG5cdCAgXHR3aW5kb3cuX19GTl9JTkRFWCsrO1xuXHRcdHJldHVybiBwcm94eUZuTmFtZTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgaW5pdGlhbGlzZSB3aW5kb3cuX19GTl9JTkRFWCA9IDAgaW4gaW5kZXguanMgb2YgeW91ciBwcm9qZWN0LlwiKTtcblx0fVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cycpO1xuY29uc3Qge1xuICByZW5kZXJDb21wb25lbnRcbn0gPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50XCIpO1xuY29uc3QgYW5pbWF0aW9uID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uXCIpO1xuY29uc3QgZWxlbWVudHMgPSByZXF1aXJlKFwiLi9lbGVtZW50c1wiKTtcbmNvbnN0IGxheW91dCA9IHJlcXVpcmUoXCIuL2xheW91dFwiKTtcbmNvbnN0IHtcbiAgc2V0TGF5b3V0R3Jhdml0eVxufSA9IHJlcXVpcmUoXCIuL2dyYXZpdHlcIik7XG5cbmZ1bmN0aW9uIGhhbmRsZVdyYXBDb250ZW50KHZpZXcsIHBhcmVudEVsZW1lbnQpIHtcbiAgbGV0IG5ld0RpbWVuID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBuZXdEaW1lbiArPSBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaV0ub2Zmc2V0V2lkdGg7XG4gIH1cbiAgdmlldy5wcm9wcy54ID0gbmV3RGltZW47XG4gIHJldHVybiB2aWV3O1xufVxuXG5mdW5jdGlvbiBhcHBseUdsb2JhbFN0eWxlcyh0eXBlLCBlbGVtLCBwcm9wcykge1xuICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uO1xuXG4gIGVsZW0uc3R5bGUud2lkdGggPSAnYXV0byc7XG4gIGVsZW0uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSkge1xuICAgIGlmIChwcm9wcy53aWR0aCA9PSAnbWF0Y2hfcGFyZW50Jykge1xuICAgICAgZWxlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB9IGVsc2UgaWYgKHByb3BzLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAvLyBZb3Ugc2VlIGJlbG93XG4gICAgfSBlbHNlIGlmICghaXNOYU4ocHJvcHMud2lkdGgpKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BlcmNlbnRXaWR0aCcpICYmIHByb3BzLnBlcmNlbnRXaWR0aClcbiAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHByb3BzLndpZHRoICsgJyUnO1xuICAgICAgZWxzZVxuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gcHJvcHMud2lkdGggKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0JykpIHtcbiAgICBpZiAocHJvcHMuaGVpZ2h0ID09ICdtYXRjaF9wYXJlbnQnKSB7XG4gICAgICBlbGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB9IGVsc2UgaWYgKHByb3BzLmhlaWdodCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgIC8vIFlvdSBzZWUgYmVsb3dcbiAgICB9IGVsc2UgaWYgKCFpc05hTihwcm9wcy5oZWlnaHQpKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BlcmNlbnRIZWlnaHQnKSAmJiBwcm9wcy5wZXJjZW50SGVpZ2h0KVxuICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IHByb3BzLmhlaWdodCArICclJztcbiAgICAgIGVsc2VcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBwcm9wcy5oZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbWluV2lkdGgnKSAmJiAhaXNOYU4ocHJvcHMubWluV2lkdGgpKSB7XG4gICAgaWYgKHByb3BzLnBlcmNlbnRNaW5XaWR0aClcbiAgICAgIGVsZW0uc3R5bGUubWluV2lkdGggPSBwcm9wcy5taW5XaWR0aCArICclJztcbiAgICBlbHNlXG4gICAgICBlbGVtLnN0eWxlLm1pbldpZHRoID0gcHJvcHMubWluV2lkdGggKyAncHgnO1xuICB9XG5cbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtaW5IZWlnaHQnKSAmJiAhaXNOYU4ocHJvcHMubWluSGVpZ2h0KSkge1xuICAgIGlmIChwcm9wcy5wZXJjZW50TWluSGVpZ2h0KVxuICAgICAgZWxlbS5zdHlsZS5taW5IZWlnaHQgPSBwcm9wcy5taW5IZWlnaHQgKyAnJSc7XG4gICAgZWxzZVxuICAgICAgZWxlbS5zdHlsZS5taW5IZWlnaHQgPSBwcm9wcy5taW5IZWlnaHQgKyAncHgnO1xuICB9XG5cbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXhXaWR0aCcpICYmICFpc05hTihwcm9wcy5tYXhXaWR0aCkpIHtcbiAgICBpZiAocHJvcHMucGVyY2VudE1heFdpZHRoKVxuICAgICAgZWxlbS5zdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJyUnO1xuICAgIGVsc2VcbiAgICAgIGVsZW0uc3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICdweCc7XG4gIH1cblxuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21heEhlaWdodCcpICYmICFpc05hTihwcm9wcy5tYXhIZWlnaHQpKSB7XG4gICAgaWYgKHByb3BzLnBlcmNlbnRNYXhIZWlnaHQpXG4gICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IHByb3BzLm1heEhlaWdodCArICclJztcbiAgICBlbHNlXG4gICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IHByb3BzLm1heEhlaWdodCArICdweCc7XG4gIH1cblxuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BhZGRpbmcnKSkge1xuICAgIGxldCBwYWRkaW5nID0gcHJvcHMucGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcblxuICAgIGVsZW0uc3R5bGVbJ3BhZGRpbmcnXSA9IHBhZGRpbmdbMV0gKyAncHggJyArIHBhZGRpbmdbMl0gKyAncHggJyArIHBhZGRpbmdbM10gKyAncHggJyArIHBhZGRpbmdbMF0gKyAncHgnO1xuICB9XG5cbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXJnaW4nKSkge1xuICAgIGxldCBtYXJnaW4gPSBwcm9wcy5tYXJnaW4uc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG5cbiAgICBlbGVtLnN0eWxlWydtYXJnaW4nXSA9IG1hcmdpblsxXSArICdweCAnICsgbWFyZ2luWzJdICsgJ3B4ICcgKyBtYXJnaW5bM10gKyAncHggJyArIG1hcmdpblswXSArICdweCc7XG4gIH1cblxuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Zpc2liaWxpdHknKSkge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gcHJvcHMudmlzaWJpbGl0eTtcbiAgICBpZiAodmlzaWJpbGl0eSA9PSAnaW52aXNpYmxlJylcbiAgICAgIGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuXG4gICAgICBsYXlvdXQuaW5pdGlhbGl6ZVNob3codHlwZSwgZWxlbSwgcHJvcHMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsYXlvdXQuaW5pdGlhbGl6ZVNob3codHlwZSwgZWxlbSwgcHJvcHMpO1xuICB9XG5cbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdleHBhbmQnKSkge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gcHJvcHMuZXhwYW5kICsgJyc7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ3RydWUnKSB7XG4gICAgICBlbGVtLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgIGxheW91dC5pbml0aWFsaXplU2hvdyh0eXBlLCBlbGVtLCBwcm9wcyk7XG4gICAgfSBlbHNlXG4gICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0X2dyYXZpdHknKSkge1xuICAgIHNldExheW91dEdyYXZpdHkoZWxlbSwgcHJvcHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVCeUtleShrZXksIHR5cGUsIGVsZW0sIHByb3BzKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncG9wdXBNZW51JzpcbiAgICAgIGVsZW1lbnRzLmhhbmRsZVBvcHVwKGVsZW0sIHByb3BzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGV4dCc6XG4gICAgICBpZiAodHlwZSA9PSBcImVkaXRUZXh0XCIpXG4gICAgICAgIGVsZW0udmFsdWUgPSBwcm9wc1trZXldXG4gICAgICBlbHNlXG4gICAgICAgIGVsZW1lbnRzLmhhbmRsZVRleHRFbGVtZW50KGVsZW0sIHByb3BzKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0ZXh0RnJvbUh0bWwnOlxuICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiKVxuICAgICAgICBlbGVtLnZhbHVlID0gcHJvcHNba2V5XVxuICAgICAgZWxzZVxuICAgICAgICBlbGVtZW50cy5oYW5kbGVIVE1MVGV4dEVsZW1lbnQoZWxlbSwgcHJvcHMpXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIHByb3BzLnN0eWxlKSB7XG4gICAgICAgIGlmIChpbm5lcktleSA9PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gXCIgXCIgKyBwcm9wcy5zdHlsZVtpbm5lcktleV07XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuYnV0dG9uQ2xpY2tPdmVybGF5ICE9PSB1bmRlZmluZWQgJiYgW1wiYmFja2dyb3VuZFwiLCBcImJhY2tncm91bmQtaW1hZ2VcIl0uaW5jbHVkZXMoaW5uZXJLZXkpKSB7XG4gICAgICAgICAgZWxlbS5zdHlsZVtpbm5lcktleV0gPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLCR7cHJvcHMuYnV0dG9uQ2xpY2tPdmVybGF5fSkgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBgICsgcHJvcHMuc3R5bGVbaW5uZXJLZXldO1xuICAgICAgICAgIGVsZW0uc3R5bGVbXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCJdID0gXCJyaWdodCBib3R0b21cIjtcbiAgICAgICAgICBlbGVtLnN0eWxlW1wiYmFja2dyb3VuZC1zaXplXCJdID0gXCIyMDAlIDEwMCUsIDEwMCUgMTAwJVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uc3R5bGVbaW5uZXJLZXldID0gcHJvcHMuc3R5bGVbaW5uZXJLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgZm9yIChsZXQgaW5uZXJLZXkgaW4gcHJvcHMuYXR0cmlidXRlcykge1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShpbm5lcktleSwgcHJvcHMuYXR0cmlidXRlc1tpbm5lcktleV0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgaWYgKChwcm9wc1trZXldIHx8IFwiXCIpLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBwcm9wc1trZXldLnNwbGl0KFwiIFwiKS5tYXAoY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2xhc3NMaXN0JzpcbiAgICAgIEpTT04ucGFyc2UocHJvcHNba2V5XSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChvYmopO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBcbiAgICBjYXNlICdyZW1vdmVDbGFzc0xpc3QnOlxuICAgICAgSlNPTi5wYXJzZShwcm9wc1trZXldKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKG9iaik7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwcm9wc1trZXldICYmIHR5cGVvZiBwcm9wc1trZXldID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBldmVudHMuaGFuZGxlRXZlbnRQcm9wKGtleSwgZWxlbSwgcHJvcHMpXG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29tcG9uZW50KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcikge1xuICAvKiBDb21wb25lbnQgUGFydCAqL1xuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2VsZW1lbnRUeXBlJykgJiYgcHJvcHMuZWxlbWVudFR5cGUgPT0gJ2NvbXBvbmVudCcpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLldSQVBQRVIpXG5cbiAgICBpZiAoZmlyc3RSZW5kZXIpXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIHByb3BzLmd1aWQpXG4gIH1cblxuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbXBvbmVudFR5cGUnKSAmJiBwcm9wcy5jb21wb25lbnRUeXBlKVxuICAgIHJlbmRlckNvbXBvbmVudChlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXModHlwZSwgZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKSB7XG4gIGlmIChlbGVtLmNsYXNzTGlzdCAmJiBlbGVtLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uY2xhc3NOYW1lID0gdHlwZTtcbiAgfVxuXG4gIC8qIE5ldyBTdHlsZSAqL1xuXG4gIGFwcGx5R2xvYmFsU3R5bGVzKHR5cGUsIGVsZW0sIHByb3BzKTtcblxuICBsYXlvdXQuc2V0VHlwZVNwZWNpZmljU3R5bGVzKHR5cGUsIGVsZW0sIHByb3BzKTtcblxuICAvKiBOZXcgU3R5bGUgRW5kICovXG5cbiAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgYXBwbHlTdHlsZUJ5S2V5KGtleSwgdHlwZSwgZWxlbSwgcHJvcHMpO1xuICB9XG5cbiAgYW5pbWF0aW9uLnNldFRyYW5zaXRpb24oZWxlbSwgcHJvcHMpO1xuXG4gIGlmIChmaXJzdFJlbmRlcikge1xuICAgIGV2ZW50cy5zZXRFdmVudFByb3BzKHR5cGUsIGVsZW0sIHByb3BzKTtcbiAgfVxuXG4gIGhhbmRsZUNvbXBvbmVudChlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBZGRpdGlvbmFsVmlld1Byb3BzKHR5cGUsIGVsZW0sIHByb3BzKSB7XG4gIGxheW91dC5zZXRUeXBlQmFzZWRBdHRyaWJ1dGVzKHR5cGUsIGVsZW0sIHByb3BzKTtcbiAgbGF5b3V0LnNldENvbXB1dGVkU3R5bGVzKGVsZW0sIHByb3BzKTtcbiAgYW5pbWF0aW9uLnNldEFuaW1hdGlvblN0eWxlcyhlbGVtLCBwcm9wcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGRBZGRpdGlvbmFsVmlld1Byb3BzLFxuICBzZXRBdHRyaWJ1dGVzLFxuICBoYW5kbGVXcmFwQ29udGVudCxcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8qIE9ic2VydmVyIGZvciBhZnRlclJlbmRlciAqL1xubGV0IG9ic2VydmVyID0gKGVsZW0pID0+IHtcbiAgbGV0IGlkID0gZWxlbS5pZDtcbiAgaWYgKCFpZCB8fCBfX09CU0VSVkVSU1tpZF0pXG4gICAgcmV0dXJuO1xuXG4gIF9fT0JTRVJWRVJTW2lkXSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChpdGVtLCBvYnNlcnZlcikge1xuICAgIGlmIChpdGVtICYmIGl0ZW1bMF0udGFyZ2V0KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gaXRlbVswXS50YXJnZXQ7XG4gICAgICBsZXQgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgbGV0IHZpZXcgPSBfX1ZJRVdTW2lkXTtcblxuICAgICAgICBpZiAodmlldyAmJiB2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdhZnRlclJlbmRlcicpICYmIHR5cGVvZiB2aWV3LnByb3BzLmFmdGVyUmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9KTtcblxuICAoX19PQlNFUlZFUlNbaWRdKS5vYnNlcnZlKGVsZW0sIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRPYnNlcnZlcihlbGVtLCBwcm9wcykge1xuICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdhZnRlclJlbmRlcicpIHx8IHR5cGVvZiBwcm9wcy5hZnRlclJlbmRlciAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBXZSBzaG91bGQgcnVuIG9ic2VydmVyIGZvciB0aGUgZWxlbWVudFxuICBvYnNlcnZlcihlbGVtKTtcbiAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2hhc19yZW5kZXInLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdG9ySW5wdXRLZXlEb3duSGFuZGxlck5ldyhldil7XG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB0cnkge1xuICAgIHZhciBpbnB1dElkID0gZXYudGFyZ2V0LmlkO1xuICAgIHZhciBpbnB1dFR5cGUgPSBldi5pbnB1dFR5cGU7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgdmFyIG9sZFZhbGlkVmFsdWUgPSBcIlwiO1xuICAgIGlmKGlucHV0Lm9sZFZhbGlkVmFsdWUpe1xuICAgICAgb2xkVmFsaWRWYWx1ZSA9IGlucHV0Lm9sZFZhbGlkVmFsdWU7XG4gICAgfVxuICAgIGlmKGlucHV0LnZhbHVlLmxlbmd0aD09PTApe1xuICAgICAgaW5wdXQub2xkVmFsaWRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGF0YVBhdHRlcm4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdHRlcm5cIik7XG4gICAgaWYgKGRhdGFQYXR0ZXJuKXtcbiAgICAgIHZhciBkYXRhID0gZGF0YVBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICAgIHZhciByZWdleFBhdHRlcm4gPSBuZXcgUmVnRXhwKGRhdGEuam9pbignJykpO1xuICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uRW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGlucHV0LmdldEF0dHJpYnV0ZShcInNlcGFyYXRvclwiKTtcbiAgICAgIHZhciBzZXBhcmF0b3JSZXBlYXQgPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JSZXBlYXRcIikpO1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW15hLXpBLVowLTlALi1dL2csIFwiXCIpO1xuICAgICAgLy9JZiBleGlzdGluZyB2YWx1ZSBpdHNlbGYgZ3JlYXRlciB0aGFuIGVxdWFsIHRvIG1heCBsZW5ndGhcbiAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIGxlbmd0aCk7XG4gICAgICB9XG4gICAgICAvLyBJZiBjb2RlIGRvZXNuJ3QgbWF0Y2hlcyByZWdleCBwYXR0ZXJuXG4gICAgICBpZiAoIXJlZ2V4UGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IG9sZFZhbGlkVmFsdWU7XG4gICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQtIChzZWxlY3Rpb25FbmQtc2VsZWN0aW9uU3RhcnQpLTE7XG4gICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZC0gKHNlbGVjdGlvbkVuZCAtIHNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvL0luc2VydCBzZXBhcmF0b3IgXG4gICAgICBpZihzZXBhcmF0b3IgJiYgc2VwYXJhdG9yUmVwZWF0KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvcih2YXIgaSA9MDtpPHZhbHVlLmxlbmd0aDtpKyspe1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gdmFsdWVbaV07XG4gICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IGVsZW1lbnQ7XG4gICAgICAgICAgdmFyIGZhY3RvciA9IDA7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlZFN0cmluZy5sZW5ndGggJiYgZm9ybWF0dGVkU3RyaW5nLnJlcGxhY2UoL1teYS16QS1aMC05QC4tXS9nLCBcIlwiKS5sZW5ndGggJSAoc2VwYXJhdG9yUmVwZWF0ICsgZmFjdG9yKSA9PSAwKSB7XG4gICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmdbbGVuZ3RoXSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSBmb3JtYXR0ZWRTdHJpbmcuc3Vic3RyaW5nKDAsIGZvcm1hdHRlZFN0cmluZy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFN0cmluZztcbiAgICAgICAgaWYoaW5wdXRUeXBlID09IFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCIpe1xuICAgICAgICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgIGlmICgoY3Vyc29yUG9zaXRpb24gJSAoc2VwYXJhdG9yUmVwZWF0ICsgMSkgKSA9PT0gMCkge1xuICAgICAgICAgICAgICBpZihpbnB1dC5vbGRWYWxpZFZhbHVlLmxlbmd0aCA8IGZvcm1hdHRlZFN0cmluZy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gKz0gMVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gLT0gMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGN1cnNvclBvc2l0aW9uPDApe1xuICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0Lm9sZFZhbGlkVmFsdWUgPSBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuICB9IGNhdGNoKGVycil7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRvcklucHV0S2V5RG93bkhhbmRsZXIoZXYpIHtcbiAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHRyeSB7XG4gICAgdmFyIGlucHV0SWQgPSBldi50YXJnZXQuaWQ7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZClcbiAgICB2YXIgb2xkVmFsaWRWYWx1ZSA9IFwiXCI7XG4gICAgaWYgKGlucHV0Lm9sZFZhbGlkVmFsdWUpIHtcbiAgICAgIG9sZFZhbGlkVmFsdWUgPSBpbnB1dC5vbGRWYWxpZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBkYXRhUGF0dGVybiA9IGlucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtcGF0dGVyblwiKTtcbiAgICBpZiAoZGF0YVBhdHRlcm4pIHtcbiAgICAgIHZhciBkYXRhID0gZGF0YVBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICAgIHZhciByZWdleFN0cmluZyA9IGRhdGEuam9pbignJyk7XG4gICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICBpZiAob2xkVmFsaWRWYWx1ZS5sZW5ndGggPCBpbnB1dC52YWx1ZS5sZW5ndGggJiYgb2xkVmFsaWRWYWx1ZS5sZW5ndGggKyAxID4gbGVuZ3RoKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydCAtIChzZWxlY3Rpb25FbmQgLSBzZWxlY3Rpb25TdGFydCkgLSAxO1xuICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZCAtIChzZWxlY3Rpb25FbmQgLSBzZWxlY3Rpb25TdGFydCkgLSAxO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGZpbmFsRGF0YSA9IG5ld1ZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05QC4tXS9nLCBcIlwiKTtcbiAgICAgIGlmIChyZWdleFN0cmluZykge1xuICAgICAgICB2YXIgcmVnZXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZyk7XG4gICAgICAgIGlmICghcmVnZXhQYXR0ZXJuLnRlc3QoZmluYWxEYXRhKSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQgLSAoc2VsZWN0aW9uRW5kIC0gc2VsZWN0aW9uU3RhcnQpIC0gMTtcbiAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQgLSAoc2VsZWN0aW9uRW5kIC0gc2VsZWN0aW9uU3RhcnQpIC0gMTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzZXBhcmF0b3IgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JcIik7XG4gICAgICB2YXIgc2VwYXJhdG9yUmVwZWF0ID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKFwic2VwYXJhdG9yUmVwZWF0XCIpKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgJiYgc2VwYXJhdG9yUmVwZWF0KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmluYWxEYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZmluYWxEYXRhW2luZGV4XTtcbiAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gZWxlbWVudDtcbiAgICAgICAgICB2YXIgZmFjdG9yID0gMDtcbiAgICAgICAgICBpZiAoZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCAmJiBmb3JtYXR0ZWRTdHJpbmcucmVwbGFjZSgvW15hLXpBLVowLTlALi1dL2csIFwiXCIpLmxlbmd0aCAlIChzZXBhcmF0b3JSZXBlYXQgKyBmYWN0b3IpID09IDApIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmdbZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCAtIDFdID09IHNlcGFyYXRvcikge1xuICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IGZvcm1hdHRlZFN0cmluZy5zdWJzdHJpbmcoMCwgZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkU3RyaW5nO1xuICAgICAgICBsZXQgY3Vyc29yUG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKChjdXJzb3JQb3NpdGlvbiAlIChzZXBhcmF0b3JSZXBlYXQgKyAxKSkgPT09IDApIHtcbiAgICAgICAgICBpZiAoaW5wdXQub2xkVmFsaWRWYWx1ZS5sZW5ndGggPCBmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiArPSAxXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnNvclBvc2l0aW9uIC09IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnNvclBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgIGN1cnNvclBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gZm9ybWF0dGVkU3RyaW5nO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtYXR0ZWRTdHJpbmctLS0tXCIsIGZvcm1hdHRlZFN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gZmluYWxEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50SGFuZGxlcihldmVudFR5cGUsIGtleSwgZWxlbSwgY2FsbGJhY2spIHtcblxuICBpZiAoa2V5ID09IFwib25FbnRlclByZXNzZWRFdmVudFwiKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlIFwiaW5wdXRcIjpcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxsYmFjayk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2hhbmdlXCI6XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZS50YXJnZXQudmFsdWUpXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmb2N1c1wiOlxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpXG4gICAgICB9KTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RXZlbnRQcm9wcyh0eXBlLCBlbGVtLCBwcm9wcykge1xuICBpZiAodHlwZSA9PSBcImVkaXRUZXh0XCIgJiYgZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnB1dFwiKSB7XG4gICAgdmFyIGlzSVBob25lID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQaG9uZVwiKSAhPT0gLTEpXG4gICAgaWYgKHByb3BzLmF1dG9mb2N1cyAmJiAhaXNJUGhvbmUpIHtcbiAgICAgIGVsZW0uZm9jdXMoKVxuICAgIH1cbiAgICBpZiAod2luZG93LnByZXBvbmVTcGFjZSkge1xuICAgICAgYWRkRXZlbnRIYW5kbGVyKCdpbnB1dCcsICcnLCBlbGVtLCBzZXBhcmF0b3JJbnB1dEtleURvd25IYW5kbGVyTmV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnRIYW5kbGVyKCdpbnB1dCcsICcnLCBlbGVtLCBzZXBhcmF0b3JJbnB1dEtleURvd25IYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBsZXQgZXZlbnRzID0gWydvbkNsaWNrJywgJ29uRW50ZXJQcmVzc2VkRXZlbnQnLCAnb25DaGFuZ2UnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZVVwJywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3V0JywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJ11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBrZXkgPSBldmVudHNbaV1cbiAgICBsZXQgZXZlbnRUeXBlID0ga2V5LnN1YnN0cmluZygyLCBrZXkubGVuZ3RoKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgcHJvcHNba2V5XSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGFkZEV2ZW50SGFuZGxlcihldmVudFR5cGUsIGtleSwgZWxlbSwgcHJvcHNba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50UHJvcChrZXksIGVsZW0sIHByb3BzKSB7XG4gIGxldCBldmVudFR5cGUgPSBrZXkuc3Vic3RyaW5nKDIsIGtleS5sZW5ndGgpLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBlbGVtQ0IgPSBwcm9wc1trZXldO1xuICBlbGVtLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gIGlmIChldmVudFR5cGUgPT0gXCJjaGFuZ2VcIikge1xuICAgIGV2ZW50VHlwZSA9IFwiaW5wdXRcIjtcbiAgfVxuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IGVsZW0udmFsdWU7XG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsbGVkXCIpO1xuICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdmaWxsZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1bJ29uZm9jdXMnXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICBpZiAoZXZlbnRUeXBlID09IFwiZm9jdXNcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGVsZW1DQihlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGRPYnNlcnZlcixcbiAgaGFuZGxlRXZlbnRQcm9wLFxuICBzZXRFdmVudFByb3BzLFxufSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc2V0TGF5b3V0R3Jhdml0eShlbGVtLCBwcm9wcykge1xuICBzd2l0Y2ggKHByb3BzLmxheW91dF9ncmF2aXR5KSB7XG4gICAgY2FzZSAnY2VudGVyX2hvcml6b250YWwnOlxuICAgIGNhc2UgJ2NlbnRlcl92ZXJ0aWNhbCc6XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLXNlbGYnXSA9ICdjZW50ZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgZWxlbS5zdHlsZVsnYWxpZ24tc2VsZiddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgIGNhc2UgJ2VuZCc6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1zZWxmJ10gPSAnZmxleC1lbmQnO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyhlbGVtLCBwcm9wcykge1xuICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdncmF2aXR5JykgfHwgIXByb3BzLmdyYXZpdHkpIHtcbiAgICBwcm9wcy5ncmF2aXR5ID0gJyc7XG4gICAgLy9yZXR1cm47XG4gIH1cblxuICBzd2l0Y2ggKHByb3BzLmdyYXZpdHkpIHtcbiAgICBjYXNlICdjZW50ZXJfdmVydGljYWwnOlxuICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdjZW50ZXInO1xuICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXJfaG9yaXpvbnRhbCc6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnY2VudGVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gXCJjZW50ZXJcIjtcbiAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gXCJjZW50ZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICBjYXNlICdlbmQnOlxuICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtZW5kJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRHcmF2aXR5U3R5bGVzRm9yQ29sdW1uKGVsZW0sIHByb3BzKSB7XG4gIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ2dyYXZpdHknKSB8fCAhcHJvcHMuZ3Jhdml0eSkge1xuICAgIHByb3BzLmdyYXZpdHkgPSAnJztcbiAgICAvL3JldHVybjtcbiAgfVxuXG4gIHN3aXRjaCAocHJvcHMuZ3Jhdml0eSkge1xuICAgIGNhc2UgJ2NlbnRlcl92ZXJ0aWNhbCc6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnY2VudGVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlcl9ob3Jpem9udGFsJzpcbiAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnY2VudGVyJztcbiAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIGVsZW0uc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBlbGVtLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICBjYXNlICdlbmQnOlxuICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LWVuZCc7XG4gICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyxcbiAgc2V0R3Jhdml0eVN0eWxlc0ZvckNvbHVtbixcbiAgc2V0TGF5b3V0R3Jhdml0eVxufSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IG1lcmdlID0gIHJlcXVpcmUoXCIuL2hlbHBlclwiKS5tZXJnZTtcblxuU3RyaW5nLnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNvbmNhdChkYXRhKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMucHVzaChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5sZXQgcGFyc2VQYXJhbXM7XG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMnKTtcbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dlYi9wYXJzZVBhcmFtcycpO1xuZWxzZVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9pb3MvcGFyc2VQYXJhbXMnKTtcblxuY2xhc3MgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xuXG4gICAgd2luZG93Ll9fU0VURk4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyksXG4gICAgICAgIG51bGxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcblxuICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLmlkU2V0W1wiaWRcIl0gPSB0aGlzLnByb3BzLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmlkID0gdGhpcy5pZChcImlkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLl9yZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuX3JlZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gb2JqLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lICYmIGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lID09IHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm91bmRDaGlsZHJlbi5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuICYmIGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgdGhpcy5maW5kUmVjdXJzZShjaGlsZHJlbltpXSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpbmQoc2VsZWN0b3IsIG9iaikge1xuICAgIHRoaXMuZm91bmRDaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFvYmopXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKHRoaXMubGF5b3V0LCBzZWxlY3Rvcik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmZvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBpZChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0W25hbWVdKSB7XG4gICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgdGhpcy5pZFNldFtuYW1lXSA9IHdpbmRvdy5fX0lEO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5pZFNldFtuYW1lXTtcbiAgfVxuXG4gIHNldElkcyhhcnIpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXQpXG4gICAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlkU2V0W2FycltpXV0pIHtcbiAgICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgICAgdGhpcy5pZFNldFthcnJbaV1dID0gd2luZG93Ll9fSUQgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJywnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOicpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc9JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzsnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKSA6IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY21kRm9yQW5kcm9pZChjb25maWcpIHtcbiAgICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgY29uZmlnLmlkICsgXCI7XCI7XG4gICAgdmFyIHJ1bkluVUk7XG5cbiAgICBpZiAoY29uZmlnLnRvYXN0KSB7XG4gICAgICBjbWQgPSBcInNldF9UT0FTVD1hbmRyb2lkLndpZGdldC5Ub2FzdC0+bWFrZVRleHQ6Y3R4X2N0eCxjc19cIiArIHRoaXMuaGFuZGxlU3BlY2lhbENoYXJzKFxuICAgICAgICAgIGNvbmZpZy50ZXh0KSArIFwiLGlfXCIgKyAoY29uZmlnLmR1cmF0aW9uID09IFwic2hvcnRcIiA/IDAgOiAxKSArXG4gICAgICAgIFwiO2dldF9UT0FTVC0+c2hvd1wiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICAgICAgcnVuSW5VSSA9IHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJnZXRcIikucnVuSW5VSTtcblxuICAgICAgY21kICs9IHJ1bkluVUkgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtZDtcbiAgfVxuXG4gIGNtZENvbnRhaW5lcigpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbWRGb3JXZWIoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKVxuICAgICAgcmV0dXJuIHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJzZXRcIik7XG4gIH1cblxuICBjbWQoY29uZmlnKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yQW5kcm9pZChjb25maWcpO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JXZWIoY29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCByZXBsYWNlQ2hpbGQpIHtcbiAgICB2YXIgcHJveHlGbk5hbWU7XG4gICAgaWYgKCFyZXBsYWNlQ2hpbGQpIHtcbiAgICAgIHJlcGxhY2VDaGlsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcbiAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuICAgICAgd2luZG93Ll9fRk5fSU5ERVgrKztcbiAgICB9XG5cbiAgICBqc3ggPSAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpID8ganN4IDogSlNPTi5zdHJpbmdpZnkoanN4KTtcblxuICAgIGlmIChwcm94eUZuTmFtZSlcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBwcm94eUZuTmFtZSwgcmVwbGFjZUNoaWxkKTtcbiAgICBlbHNlXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgbnVsbCwgcmVwbGFjZUNoaWxkKTtcbiAgfVxuXG4gIGdldFZpZXcoanN4KSB7XG4gICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIGpzeDtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc3gpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gbWVyZ2UodGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGNvbnN0IG9sZENvbnRhaW5lcklkID0gdGhpcy5sYXlvdXQuaWRTZXQuaWQ7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaT09MCkgdGhpcy5yZXBsYWNlQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgICBlbHNlIHRoaXMuYXBwZW5kQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0LmlkU2V0LmlkID0gb2xkQ29udGFpbmVySWQ7XG4gIH1cblxuICByZW1vdmVWaWV3KGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZVZpZXcoaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtzZXRfUEFSRU5UPWdldF9WSUVXLT5nZXRQYXJlbnQ7Z2V0X1BBUkVOVC0+cmVtb3ZlVmlldzpnZXRfVklFVztcIlxuICB9XG5cbiAgcmVtb3ZlQ2hpbGRyZW4oaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlQ2hpbGRyZW4oaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtnZXRfVklFVy0+cmVtb3ZlQWxsVmlld3M7XCJcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZChpZCwganN4LCBpbmRleCwgZm4pIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgdHJ1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldzsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxuLypcbiBVc2VkIHRvIGluaXRpYWxpemUgZGVmYXVsdHMgZm9yIHdpbmRvdyBmdW5jaW9ucyBhbmQgdmFyaWFibGVzLlxuKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG53aW5kb3cuUHJlc3RvVUkgPSByZXF1aXJlKFwiLi9QcmVzdG9VSUludGVyZmFjZVwiKTtcblxuY29uc3QgZ2V0Q3VyclRpbWUgPSAoKSA9PiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cbi8vIHdpbmRvdy5fX09TID0gZ2V0T1MoKVxuaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIHZhciBnZXRTY3JlZW5EZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBKU09OLnBhcnNlKEFuZHJvaWQuZ2V0U2NyZWVuRGltZW5zaW9ucygpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbl93aWR0aDogZGV0YWlscy53aWR0aCArIFwiXCIsXG4gICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBkZXRhaWxzLmhlaWdodCArIFwiXCJcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZXJyb3IgaW4gZ2V0dHRpbmcgc2NyZWVuIGRpbWVuc2lvbnMsIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXNcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBcIjEwODBcIixcbiAgICAgICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBcIjE5MjBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMgPSBnZXRTY3JlZW5EZXRhaWxzKCk7XG59XG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9XRUIvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gcmVxdWlyZShcIi4vV0VCL0pCcmlkZ2VJbnRlcmZhY2VcIilcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vSU9TL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IG1lcmdlKHdpbmRvdy5KQnJpZGdlLCB7fSlcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX3dpZHRoXCIpKSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5fd2lkdGg7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gXCIxMDgwXCI7XG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl9oZWlnaHRcIikpIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSBcIjE5MjBcIjtcbn1cblxuY29uc3QgZ3VpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuXG4vL0ludGlhbGl6aW5nIGRlZmF1bHRzXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIC8qIENvbXBvbmVudHMgKi9cbiAgICB3aW5kb3cuX19DT01fRVZFTlQgPSBmYWxzZVxuICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRCA9IHtcbiAgICAgICAgU1dJVENIX0dMT0JBTDogZmFsc2UsXG4gICAgICAgIERSUDoge30sXG4gICAgICAgIERTQjoge30sXG4gICAgICAgIERCOiB7fSxcbiAgICAgICAgTkFWQkFSOiB7fVxuICAgIH1cblxuICAgIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUCA9IHtcbiAgICAgICAgV1JBUFBFUjogJ1BEQ19jb21fd3JhcHBlcicsXG4gICAgICAgIE5BVkJBUjogJ1BEQ19jb21fbmF2YmFyJyxcbiAgICAgICAgTkFWQkFSX0lURU06ICdQRENfY29tX25hdmJhcl9pdGVtJyxcbiAgICAgICAgTkFWQkFSX0lURU1fV0lUSF9TVUI6ICdQRENfY29tX25hdmJhcl9oYXNfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQjogJ1BEQ19jb21fbmF2YmFyX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUJfUklHSFQ6ICdQRENfY29tX25hdmJhcl9zdWJfcmlnaHQnLFxuICAgICAgICBOQVZCQVJfU1VCX0lURU06ICdQRENfY29tX25hdmJhcl9zdWJpdGVtJyxcbiAgICAgICAgRFJQOiAnUERDX2NvbV9kcnAnLFxuICAgICAgICBEUlBfQk9EWTogJ1BEQ19jb21fZHJwX2JvZHknLFxuICAgICAgICBEQjogJ1BEQ19jb21fZGInLFxuICAgICAgICBEQl9GVUxMX0JPRFk6ICdQRENfY29tX2RiX2Z1bGxfYm9keScsXG4gICAgICAgIERCX0JPRFk6ICdQRENfY29tX2RiX2JvZHknLFxuICAgICAgICBEQl9PUFRJT05TOiAnUERDX2NvbV9kYl9vcHRpb25zJyxcbiAgICAgICAgREJfT1BUSU9OOiAnUERDX2NvbV9kYl9vcHRpb24nLFxuICAgICAgICBEU0I6ICdQRENfY29tX2RzYicsXG4gICAgICAgIERTQl9GVUxMX0JPRFk6ICdQRENfY29tX2RzYl9mdWxsX2JvZHknLFxuICAgICAgICBEU0JfQk9EWTogJ1BEQ19jb21fZHNiX2JvZHknLFxuICAgICAgICBEU0JfT1BUSU9OUzogJ1BEQ19jb21fZHNiX29wdGlvbnMnLFxuICAgICAgICBEU0JfT1BUSU9OOiAnUERDX2NvbV9kc2Jfb3B0aW9uJyxcbiAgICAgICAgRFNCX1NFQVJDSF9XUkFQOiAnUERDX2NvbV9kc2Jfc2VhcmNoX3dyYXAnLFxuICAgICAgICBEU0JfU0VBUkNIOiAnUERDX2NvbV9kc2Jfc2VhcmNoJyxcbiAgICAgICAgU1dJVENIOiAnUERDX2NvbV9zd2l0Y2gnLFxuICAgICAgICBTV0lUQ0hfQk9EWTogJ1BEQ19jb21fc3dpdGNoX2JvZHknLFxuICAgICAgICBTV0lUQ0hfU0xJREVSOiAnUERDX2NvbV9zd2l0Y2hfc2xpZGVyJyxcbiAgICAgICAgQlQ6ICdQRENfY29tX2J0JyxcbiAgICAgICAgQlRfRElTQUJMRUQ6ICdQRENfY29tX2J0X2Rpc2FibGVkJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAgPSB7XG4gICAgICAgIEJHOiAnI2ZmZmZmZicsXG4gICAgICAgIEFDVElWRV9CRzogJyNFRUYxRjgnLFxuICAgICAgICBBQ1RJVkVfQ09MT1I6ICdyZ2IoNTMsIDY0LCA4MiknLFxuICAgICAgICBJTkFDVElWRV9DT0xPUjogJ3JnYmEoNTMsIDY0LCA4MiwgMC41KScsXG4gICAgICAgIEJPUkRFUl9DT0xPUjogJyNBM0FGQzInLFxuICAgICAgICBBQ1RJVkVfQk9SREVSX0NPTE9SOiAnIzcwNzg4NicsXG4gICAgICAgIFNFQVJDSF9DT0xPUjogJyNkZGRkZGQnLFxuICAgICAgICBJTkFDVElWRV9TV0lUQ0g6ICcjQjdEQkJDJyxcbiAgICAgICAgQUNUSVZFX1NXSVRDSDogJyMzNkFGNDcnLFxuICAgICAgICBCVF9CT1JERVJfQ09MT1I6ICcjMTU4NUQ4JyxcbiAgICAgICAgQlRfQkdfQ09MT1I6ICcjMTk5MUVCJyxcbiAgICAgICAgQlRfQ09MT1I6ICcjZmZmZmZmJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQUNUSVZFID0ge1xuICAgICAgICBEU0I6ICcnLFxuICAgICAgICBOQVZCQVI6ICcnLFxuICAgICAgICBEQjogJydcbiAgICB9XG4gICAgLyogQ29tcG9uZW50cyBFbmQgKi9cblxuICAgIC8qIE1vZGFsICovXG4gICAgd2luZG93Ll9fU1RZTEVfSUQgPSAnc3R5bGVfJyArIGd1aWRcbiAgICB3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMgPSBbXVxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTID0ge31cbiAgICB3aW5kb3cuX19DT05URU5UTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsJ1xuICAgIHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtb3BlbidcbiAgICB3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcCdcbiAgICB3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcC1kaXNhYmxlZCdcbiAgICB3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zaG93bidcbiAgICB3aW5kb3cuX19GQURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWZhZGUnXG4gICAgd2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2xpZGUnXG4gICAgLyogTW9kYWwgRW5kICovXG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MpICYmXG4gICAgICAgICAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIGlkID0gaWQucmVwbGFjZSh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nLCAnJyk7XG5cbiAgICAgICAgICAgIGxldCB2aWV3ID0gX19WSUVXU1tpZF07XG4gICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3LnByb3BzLm9uRGlzbWlzcyAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vbkRpc21pc3MgPT1cbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnByb3BzLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHVpU2hvd1NjcmVlbiA9IChjYWxsYmFjaywgc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHBvcHVwTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3B1cE1lbnVcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBNZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3B1cE1lbnVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19kdWlTaG93U2NyZWVuID0gZHVpU2hvd1NjcmVlbjtcblxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93Ll9fQ09MT1JfSU5ERVggPSB3aW5kb3cuX19DT0xPUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0ZPTlRfSU5ERVggPSB3aW5kb3cuX19GT05UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUkVDVF9JTkRFWCA9IHdpbmRvdy5SRUNUX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fVklFV19JTkRFWCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19JTUFHRV9JTkRFWCA9IHdpbmRvdy5fX0lNQUdFX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUE9JTlRfSU5ERVggPSB3aW5kb3cuX19QT0lOVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0xBWUVSX0lOREVYID0gd2luZG93Ll9fTEFZRVJfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19TSVpFX0lOREVYID0gd2luZG93Ll9fU0laRV9JTkRFWCB8fCAxO1xufSBlbHNlIHtcbiAgICAvL1RoaXMgd291bGQgYmUgY2FzZSBmb3IgYW5kcm9pZFxuICAgIHdpbmRvdy5fX0ZOX01BUCA9IHt9O1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUyA9IFtdO1xufVxuXG53aW5kb3cuX19JRCA9IDE7XG53aW5kb3cuX19OT0RFX0lEID0gMTtcbndpbmRvdy5fX1NDUkVFTl9JTkRFWCA9IC0xO1xuXG53aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xud2luZG93Ll9fRk5fSU5ERVggPSAwO1xud2luZG93Ll9fUk9PVFNDUkVFTiA9IG51bGw7XG53aW5kb3cuX19DQUNIRURfU0NSRUVOUyA9IHt9O1xud2luZG93Ll9fU0NSRUVOX0NPVU5UID0gMDtcbndpbmRvdy5fX0NVUlJfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX1BSRVZfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0FOSU1BVEVfRElSID0gbnVsbDtcbndpbmRvdy5fX1NDUkVFTl9TVEFDSyA9IFtdO1xud2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSBudWxsO1xud2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TID0gW107XG53aW5kb3cuX19WSUVXUyA9IHt9O1xud2luZG93Ll9fVklFV19ESU1FTlNJT05TID0ge307XG53aW5kb3cuX19PQlNFUlZFUlMgPSB7fTtcbndpbmRvdy5aSW5kZXggPSAwO1xuXG53aW5kb3cuY2FsbFVJQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IFthcmd1bWVudHNbMF1dIDogQXJyYXkuYXBwbHkobnVsbCxcbiAgICAgICAgYXJndW1lbnRzKSk7XG4gICAgdmFyIGZOYW1lID0gYXJnc1swXVxuICAgIHZhciBmdW5jdGlvbkFyZ3MgPSBhcmdzLnNsaWNlKDEpXG4gICAgdmFyIGN1cnJUaW1lO1xuICAgIHZhciB0aW1lRGlmZjtcbiAgICBcbiAgICBpZiAod2luZG93Ll9fQUxMX09OQ0xJQ0tTICYmIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5pbmRleE9mKGZOYW1lKSAhPSAtMSAmJiBhcmdzWzJdID09IFwiZmVlZGJhY2tcIiAmJiBKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjaykge1xuICAgICAgICByZXR1cm4gSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKGFyZ3NbMV0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgJiYgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLmluZGV4T2YoZk5hbWUpID09IC0xKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgJiYgKGZOYW1lID09IHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELmZOYW1lKSkge1xuICAgICAgICBjdXJyVGltZSA9IGdldEN1cnJUaW1lKCk7XG4gICAgICAgIHRpbWVEaWZmID0gY3VyclRpbWUgLSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXA7XG5cbiAgICAgICAgaWYgKHRpbWVEaWZmID49IDMwMCkge1xuICAgICAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXAgPSBjdXJyVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZ1bmN0aW9uIHRocm90dGVsZWRcIiwgZk5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidGltZSBkaWZmXCIsIHRpbWVEaWZmKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IHtcbiAgICAgICAgICAgIHRpbWVTdGFtcDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGZOYW1lOiBmTmFtZVxuICAgICAgICB9XG4gICAgfVxufTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBwcmVzdG9Eb20gPSByZXF1aXJlKFwiLi9kb21zXCIpO1xudmFyIGhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpXG52YXIgd2ViUGFyc2VQYXJhbXM7XG52YXIgaU9TUGFyc2VQYXJhbXM7XG52YXIgcGFyc2VQYXJhbXM7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuXG5pZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgd2ViUGFyc2VQYXJhbXMgPSBoZWxwZXJzLndlYi5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgaU9TUGFyc2VQYXJhbXMgPSBoZWxwZXJzLmlvcy5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gIHBhcnNlUGFyYW1zID0gaGVscGVycy5hbmRyb2lkLnBhcnNlUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBkb21BbGwoZWxlbSkge1xuICBpZiAoIWVsZW0uX19yZWYpIHtcbiAgICBlbGVtLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB9XG5cbiAgaWYgKGVsZW0ucHJvcHMuaWQpIHtcbiAgICBlbGVtLl9fcmVmLl9faWQgPSBwYXJzZUludChlbGVtLnByb3BzLmlkLCAxMCkgfHwgZWxlbS5fX3JlZi5fX2lkO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBoZWxwZXIuY2xvbmUoZWxlbS50eXBlLG51bGwpO1xuICB2YXIgcHJvcHMgPSBoZWxwZXIuY2xvbmUoZWxlbS5wcm9wcyxudWxsKTtcblxuICBpZiAocHJvcHMuZm9jdXMgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICAgIGRlbGV0ZSBwcm9wcy5mb2N1cztcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkcmVuLnB1c2goZG9tQWxsKGVsZW0uY2hpbGRyZW5baV0pKTtcbiAgfVxuXG5cbiAgaWYgKF9fT1MgPT0gXCJXRUJcIiAmJiBwcm9wcy5vblJlc2l6ZSkge1xuICAgIHdpbmRvdy5fX3Jlc2l6ZUV2ZW50ID0gcHJvcHMub25SZXNpemU7XG4gIH1cblxuICBwcm9wcy5pZCA9IGVsZW0uX19yZWYuX19pZDtcbiAgaWYoZWxlbS5wYXJlbnRUeXBlICYmIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgIHJldHVybiBwcmVzdG9Eb20oe2VsZW1UeXBlOiB0eXBlLCBwYXJlbnRUeXBlOiBlbGVtLnBhcmVudFR5cGV9LCBwcm9wcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBwcmVzdG9Eb20odHlwZSwgcHJvcHMsIGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tVG9SZW5kZXIoZWxlbSkge1xuICB2YXIgcmVzID0gZG9tQWxsKGVsZW0pO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBjbWRGb3JBbmRyb2lkKGNvbmZpZywgc2V0LCB0eXBlKSB7XG4gIGlmIChzZXQpIHtcbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcInNldFwiKTtcbiAgICAgIHZhciBjbWQgPSBvYmoucnVuSW5VSS5yZXBsYWNlKFwidGhpcy0+c2V0SWRcIiwgXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZFwiKS5yZXBsYWNlKC90aGlzLT4vZywgXCJnZXRfdmlldy0+XCIpO1xuICAgICAgY21kID0gY21kLnJlcGxhY2UoL1BBUkFNX0NUUl9IT0xERVJbXjtdKi9nLCBcImdldF92aWV3LT5nZXRMYXlvdXRQYXJhbXM7XCIpO1xuICAgICAgb2JqLnJ1bkluVUkgPSBjbWQ7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSUQgbnVsbCwgdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuLiBEZWJ1ZyB0aGlzIG9yL2FuZCByYWlzZSBhIGlzc3VlIGluIGJpdGJ1Y2tldC5cIik7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBfaWQgPSBjb25maWcuaWQ7XG4gIHZhciBjbWQgPSBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBfaWQgKyBcIjtcIjtcbiAgLy8gdmFyIHJ1bkluVUk7XG4gIGRlbGV0ZSBjb25maWcuaWQ7XG4gIGNvbmZpZy5yb290ID0gXCJ0cnVlXCI7XG4gIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwiZ2V0XCIpO1xuICBvYmoucnVuSW5VSSA9IGNtZCArIG9iai5ydW5JblVJICsgJzsnO1xuICBvYmouaWQgPSBfaWQ7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldFJ1bkluVUlDbWQocHJvcCkge1xuICB2YXIgY21kO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHRydWUsIFwibGluZWFyTGF5b3V0XCIpLnJ1bkluVUk7XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgY21kID0gcHJvcDtcbiAgfSBlbHNlIHtcbiAgICBjbWQgPSB3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKTtcbiAgfVxuICByZXR1cm4gY21kO1xufVxuXG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBzZXQpIHtcbiAgdmFyIHByb3AgPSB7XG4gICAgaWQ6IGVsZW1lbnQuX19yZWYuX19pZFxuICB9XG4gIHByb3BbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGlmIChhdHRyaWJ1dGUudmFsdWUwID09ICdmb2N1cycgJiYgYXR0cmlidXRlLnZhbHVlMSA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICB2YXIgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCBzZXQsIGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKEFuZHJvaWQudXBkYXRlUHJvcGVydGllcykge1xuICAgICAgQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoY21kLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBBbmRyb2lkLnJ1bkluVUkocHJvcCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5ydW5JblVJKHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbiAgfVxuICAvLyBBbmRyb2lkLnJ1bkluVUkocGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHJlbW92ZVByb3ApIHtcbiAgLy8gY29uc29sZS5sb2coXCJSRVBMQUNFIFZJRVdcIiwgZWxlbWVudC5fX3JlZi5fX2lkLCBlbGVtZW50LnByb3BzKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW1lbnQucHJvcHMsbnVsbCk7XG4gIHByb3BzLmlkID0gZWxlbWVudC5fX3JlZi5fX2lkO1xuICB2YXIgcmVwO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG5cbiAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihlbGVtZW50LnR5cGUpICE9IC0xKXtcbiAgICBwcm9wcy5yb290ID0gdHJ1ZTtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKHtlbGVtVHlwZTogZWxlbWVudC50eXBlLCBwYXJlbnRUeXBlOiBlbGVtZW50LnBhcmVudE5vZGUudHlwZX0sIHByb3BzLCBbXSk7XG4gIH0gZWxzZSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfVxuICBpZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhKU09OLnN0cmluZ2lmeShyZXApLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcocmVwLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJlc3RvRWxlbWVudCgpIHtcbiAgICBpZih0eXBlb2Yod2luZG93Ll9fdWlfaWRfc2VxdWVuY2UpICE9IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlID0gdHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiID8gcGFyc2VJbnQoQW5kcm9pZC5nZXROZXdJRCgpKSAqIDEwMDAwMDAgOiB3aW5kb3cuX19QUkVTVE9fSUQgO1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIEFuZHJvaWQubW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCwgaW5kZXgpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmUgY2hpbGQgOlwiLCBjaGlsZC50eXBlKTtcbiAgQW5kcm9pZC5yZW1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQgKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgaWYoY2hpbGQudHlwZSA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKFwiY2hpbGQgbnVsbFwiKTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhcIkFkZCBjaGlsZCA6XCIsIGNoaWxkLl9fcmVmLl9faWQsIGNoaWxkLnR5cGUpO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoY2hpbGQudHlwZSkgIT0gLTEpe1xuICAgICAgY2hpbGQucHJvcHMucm9vdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkLnBhcmVudFR5cGUgPSBwYXJlbnQudHlwZTtcbiAgICB9XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoY2hpbGQpKSwgaW5kZXgsIG51bGwsIG51bGwpO1xuICB9XG4gIGVsc2VcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCwgZG9tQWxsKGNoaWxkKSwgaW5kZXgsIG51bGwsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiYWRkIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJyZW1vdmUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbnNlcnREb20ocm9vdCwgZG9tLCBjYikge1xuICByb290LmNoaWxkcmVuLnB1c2goZG9tKTtcbiAgZG9tLnBhcmVudE5vZGUgPSByb290O1xuICBkb20uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIHdpbmRvdy5OID0gcm9vdDtcblxuICB2YXIgcm9vdElkID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5yb290O1xuXG4gIGRvbS5wcm9wcy5yb290ID0gdHJ1ZTtcblxuICB2YXIgbGVuZ3RoID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5jaGlsZC5wdXNoKGRvbS5fX3JlZi5fX2lkKTtcblxuICB2YXIgY2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZXIoZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChkb20pKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG4gIGVsc2Uge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCwgZG9tQWxsKGRvbSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiBkb20uX19yZWYuX19pZDtcblxufVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2IoKTtcblxuICAgIGlmKHdpbmRvdy5fX2R1aV9zY3JlZW4gJiYgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl0pIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW3RhZ10oKSgpO1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW1wiZXhlY3V0ZWRcIl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0U2hhZG93KSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93LnNoYWRvd09iamVjdCkge1xuICAgICAgICBKQnJpZGdlLnNldFNoYWRvdyh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInZpZXdJZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tQWxsOiBkb21BbGwsXG4gIGdldERvbVRvUmVuZGVyOiBnZXREb21Ub1JlbmRlcixcbiAgZ2V0UnVuSW5VSUNtZDogZ2V0UnVuSW5VSUNtZCxcbiAgcmVwbGFjZVZpZXc6IHJlcGxhY2VWaWV3LFxuICBjcmVhdGVQcmVzdG9FbGVtZW50OiBjcmVhdGVQcmVzdG9FbGVtZW50LFxuICBtb3ZlQ2hpbGQ6IG1vdmVDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgdXBkYXRlUHJvcGVydHk6IHVwZGF0ZUF0dHJpYnV0ZSxcbiAgYWRkUHJvcGVydHk6IGFkZEF0dHJpYnV0ZSxcbiAgaW5zZXJ0RG9tOiBpbnNlcnREb21cbn07XG5cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycy93ZWInKS5wYXJzZVBhcmFtcztcblxuQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgdmFyIG1vcmUgPSBbXS5jb25jYXQoY3VyKS5zb21lKEFycmF5LmlzQXJyYXkpO1xuICAgIHJldHVybiBwcmV2LmNvbmNhdChtb3JlID8gY3VyLmZsYXR0ZW4oKSA6IGN1cik7XG4gIH0sIFtdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZsYXR0ZW4oKTtcbiAgXG4gIGlmICghcHJvcHMpXG4gICAgcHJvcHMgPSB7fTtcbiAgXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHByb3BzID0gcGFyc2VQYXJhbXModHlwZSwgcHJvcHMpO1xuICAgIFxuICAgIGxldCBvYmogPSB7XG4gICAgICBwcm9wczogcHJvcHMsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfTtcblxuICAgIHdpbmRvdy5fX1ZJRVdTW3Byb3BzLmlkXSA9IG9iajtcbiAgICB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdID0gbnVsbDtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgdHlwZShwcm9wcywgY2hpbGRyZW4pO1xuICB9XG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbnZhciB7XG4gIGluZmxhdGVWaWV3LFxuICBjb21wdXRlQ2hpbGREaW1lbnMsXG4gIGFkZERvbVRvUGFyZW50XG59ID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xudmFyIGhlbHBlciA9IHJlcXVpcmUoJy4uL2hlbHBlcicpO1xuXG5cbmZ1bmN0aW9uIGdldFNjcmVlbkRpbWVuc2lvbnMoKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gcnVuSW5VSShjbWQsIG9ubHlQYXJlbnQpIHtcbiAgaWYgKHR5cGVvZiBjbWQgPT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm5cblxuICBsZXQgaWQgPSBjbWQuaWRcbiAgaWYoaWQpe1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgICBpZihlbGVtKXtcbiAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICB2aWV3LnByb3BzID0gaGVscGVyLm1lcmdlKHZpZXcucHJvcHMsIGNtZClcbiAgICAgIFxuICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgbGV0IHBhcmVudEVsZW0gPSBudWxsXG4gICAgICBsZXQgcGFyZW50VmlldyA9IG51bGxcblxuICAgICAgaWYoZWxlbSl7XG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgY21kKVxuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgICBsZXQgcGFyZW50RWxlbSA9IG51bGxcbiAgICAgICAgbGV0IHBhcmVudFZpZXcgPSBudWxsXG5cbiAgICAgICAgaWYodmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JylcblxuICAgICAgICAgIGlmKHBhcmVudElkKXtcbiAgICAgICAgICAgIHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cbiAgICAgICAgICAgIHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocGFyZW50RWxlbSAmJiBwYXJlbnRWaWV3KXtcbiAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbSwgbnVsbCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgICBpZihwYXJlbnRJZCl7XG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG4gICAgICAgICAgICBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG5cbiAgICAgICAgICAgIGlmKHBhcmVudEVsZW0gJiYgcGFyZW50Vmlldyl7XG4gICAgICAgICAgICAgIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgICAgICAgICAgICAgIGlmKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ktMV1cbiAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KVxuICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtLCBzaWJsaW5nVmlldywgb25seVBhcmVudCB8fCBmYWxzZSwgZmFsc2UsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vcmVjb21wdXRlKClcbiAgLy9SZW5kZXIucnVuSW5VSShjbWQpXG59XG5cbmZ1bmN0aW9uIFJlbmRlcih2aWV3LCBjYikge1xuICAvKiBHbG9iYWwgU3R5bGUgVGFnICovXG4gIGxldCBzdHlsZV9pZCA9IHdpbmRvdy5fX1NUWUxFX0lEO1xuICBcbiAgbGV0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlX2lkKTtcbiAgaWYoIXN0eWxlRWxlbSB8fCBzdHlsZUVsZW0gPT0gdW5kZWZpbmVkKXtcbiAgICBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgc3R5bGVfaWQpO1xuICAgIHN0eWxlRWxlbS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBcbiAgICBpZihzdHlsZUVsZW0uc3R5bGVTaGVldCl7XG4gICAgICBzdHlsZUVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gXCJcIjtcbiAgICB9ZWxzZXtcbiAgICAgIHN0eWxlRWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW0pO1xuICB9XG4gIC8qIEdsb2JhbCBTdHlsZSBUYWcgRW5kICovXG5cbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwYXJlbnRWaWV3ID0ge1xuICAgIHR5cGU6IFwibGluZWFyTGF5b3V0XCIsXG4gICAgcHJvcHM6IHtcbiAgICAgIFwiaFwiOiBwYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIFwid1wiOiBwYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIH0sXG4gICAgY2hpbGRyZW46IFt2aWV3XVxuICB9O1xuXG4gIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KTtcbiAgY29uc3QgZWxlbSA9IGluZmxhdGVWaWV3KHZpZXcsIHBhcmVudEVsZW1lbnQsIG51bGwpO1xuXG4gIGlmIChjYilcbiAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2IpO1xuXG4gIGlmIChwYXJlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgIGxldCBpdGVyYWJsZUNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICBsZXQgbWF4WkluZGV4ID0gMDtcbiAgICBsZXQgY3VyckVsZW1lbnQ7XG4gICAgaXRlcmFibGVDaGlsZE5vZGVzLmZvckVhY2goKGVhY2gpID0+IHtcbiAgICAgIGlmIChlYWNoLmlkID09IHZpZXcucHJvcHMuaWQpIHtcbiAgICAgICAgY3VyckVsZW1lbnQgPSBlYWNoO1xuICAgICAgfSBlbHNlIGlmIChlYWNoLnN0eWxlW1wiei1pbmRleFwiXSAmJiArZWFjaC5zdHlsZVtcInotaW5kZXhcIl0gPiBtYXhaSW5kZXgpIHtcbiAgICAgICAgbWF4WkluZGV4ID0gK2VhY2guc3R5bGVbXCJ6LWluZGV4XCJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJFbGVtZW50KSB7XG4gICAgICBjdXJyRWxlbWVudC5zdHlsZVtcInotaW5kZXhcIl0gPSBtYXhaSW5kZXggKyAxO1xuICAgICAgLy8gdG8gcmVuZGVyIG9uIHRvcCBvZiB0aGUgZXhpc3Rpbmcgc2NyZWVuXG4gICAgICBjdXJyRWxlbWVudC5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgY3VyckVsZW1lbnQuc3R5bGVbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgIGN1cnJFbGVtZW50LnN0eWxlW1wibGVmdFwiXSA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlVmlldyhpZCwgaW5kZXgpIHtcbiAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJNb3ZlVmlldzogSW52YWxpZCB2aWV3IElEOiBcIiArIGlkKSk7XG4gIH1cbiAgdmFyIHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gIHZhciB2aWV3RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgXG4gIHZhciBwYXJlbnRJZCA9IHZpZXdFbGVtLnBhcmVudE5vZGUuaWQ7XG4gIHZhciBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF07XG4gIHZhciBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpO1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gIGNoaWxkcmVuLnNwbGljZShjaGlsZHJlbi5pbmRleE9mKHZpZXcpLCAxKTtcbiAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudClcblxuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBpbmZsYXRlVmlldyhjaGlsZCwgcGFyZW50RWxlbSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUFuZFJldHVybkRvbSh2aWV3KSB7XG4gIHJldHVybiBpbmZsYXRlVmlldyh2aWV3KTtcbn1cblxuZnVuY3Rpb24gYWRkVmlld1RvUGFyZW50KGlkLCB2aWV3LCBpbmRleCwgY2IsIHJlcGxhY2UpIHtcbiAgbGV0IHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgbGV0IHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF1cbiAgbGV0IHNpYmxpbmdWaWV3ID0gbnVsbFxuXG4gIGlmKCFwYXJlbnRFbGVtIHx8ICFwYXJlbnRWaWV3KVxuICAgIHJldHVyblxuXG4gIHBhcmVudFZpZXcuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KVxuICBcbiAgaWYoaW5kZXggPT0gMClcbiAgICBzaWJsaW5nVmlldyA9IHBhcmVudFZpZXdcbiAgZWxzZVxuICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpbmRleC0xXVxuICBcbiAgaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbSwgc2libGluZ1ZpZXcpXG4gIFxuICBpZiAoY2IpXG4gICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKVxufVxuXG5mdW5jdGlvbiBhZGRJbmZsYXRlZFZpZXdUb1BhcmVudChpZCwgZWxlbSwgdmlldywgaW5kZXgsIGNiKSB7XG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgbGV0IHNpYmxpbmdWaWV3ID0gbnVsbFxuXG4gIGlmKCFwYXJlbnRFbGVtIHx8ICFwYXJlbnRWaWV3KVxuICAgIHJldHVyblxuXG4gIHBhcmVudFZpZXcuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcblxuICBpZihpbmRleCA9PSAwKVxuICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlld1xuICBlbHNlXG4gICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2luZGV4LTFdXG5cbiAgYWRkRG9tVG9QYXJlbnQoZWxlbSwgcGFyZW50RWxlbSwgc2libGluZ1ZpZXcpO1xuXG4gIGlmIChjYilcbiAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2IpXG59XG5cbmZ1bmN0aW9uIGdldENoaWxkTW9kYWxWaWV3cyh2aWV3KSB7XG4gIGxldCBtb2RhbFZpZXdzID0gW11cblxuICBpZih2aWV3LmNoaWxkcmVuKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGNoaWxkVmlldyA9IHZpZXcuY2hpbGRyZW5baV1cblxuICAgICAgaWYoY2hpbGRWaWV3LnR5cGUgPT0gJ21vZGFsJyl7XG4gICAgICAgIG1vZGFsVmlld3MucHVzaChjaGlsZFZpZXcpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGl0ZW1zID0gZ2V0Q2hpbGRNb2RhbFZpZXdzKGNoaWxkVmlldylcbiAgICAgICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgaWYobW9kYWxWaWV3cy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIG1vZGFsVmlld3MgPSBpdGVtc1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbW9kYWxWaWV3cyA9IG1vZGFsVmlld3MuY29uY2F0KGl0ZW1zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtb2RhbFZpZXdzXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVZpZXcoaWQsIGlnbm9yZVZpZXdFeHRlcm5hbHMpIHtcbiAgbGV0IHZpZXdFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZighdmlld0VsZW0pe1xuICAgICFpZ25vcmVWaWV3RXh0ZXJuYWxzICYmIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXJlbnRJZCA9IHZpZXdFbGVtLnBhcmVudE5vZGUuaWRcbiAgaWYoIXBhcmVudElkKXtcbiAgICAhaWdub3JlVmlld0V4dGVybmFscyAmJiBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgdmlld0VsZW0ucmVtb3ZlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpO1xuICBpZighcGFyZW50RWxlbSl7XG4gICAgIWlnbm9yZVZpZXdFeHRlcm5hbHMgJiYgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHZpZXdFbGVtLnJlbW92ZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXVxuICBcbiAgaWYoIXZpZXcgfHwgIXZpZXcudHlwZSlcbiAgICByZXR1cm5cbiAgXG4gIGxldCBwYXJlbnQgPSBudWxsXG4gIGxldCBpZHhcbiAgICAgICAgXG4gIGlmKHZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICBsZXQgdmlydHVhbFBhcmVudElkID0gdmlld0VsZW0uZ2V0QXR0cmlidXRlKCd2aXJ0dWFsX3BhcmVudCcpXG4gICAgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbdmlydHVhbFBhcmVudElkXVxuXG4gICAgaWR4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodmlldylcbiAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSlcblxuICAgICFpZ25vcmVWaWV3RXh0ZXJuYWxzICYmIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICBwYXJlbnRFbGVtLnJlbW92ZSgpXG4gIH1lbHNle1xuICAgIC8qIE1vZGFsIHZpZXcgYW1vbmcgY2hpbGRyZW4gKi9cbiAgICBsZXQgY2hpbGRNb2RhbFZpZXdzID0gZ2V0Q2hpbGRNb2RhbFZpZXdzKHZpZXcpXG4gICAgaWYoY2hpbGRNb2RhbFZpZXdzICYmIGNoaWxkTW9kYWxWaWV3cy5sZW5ndGggPiAwKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZE1vZGFsVmlld3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbW9kYWxWaWV3ID0gY2hpbGRNb2RhbFZpZXdzW2ldXG4gICAgICAgIGxldCBtb2RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbFZpZXcucHJvcHMuaWQpXG5cbiAgICAgICAgaWYobW9kYWxFbGVtKXtcbiAgICAgICAgICBsZXQgYmFja2Ryb3BJZCA9IG1vZGFsRWxlbS5wYXJlbnROb2RlLmlkXG4gICAgICAgICAgbGV0IGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhY2tkcm9wSWQpXG5cbiAgICAgICAgICBiYWNrZHJvcEVsZW0ucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiBNb2RhbCB2aWV3IGFtb25nIGNoaWxkcmVuIGVuZCAqL1xuXG4gICAgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KVxuICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpZHgsIDEpXG4gICAgfVxuXG4gICAgIWlnbm9yZVZpZXdFeHRlcm5hbHMgJiYgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHZpZXdFbGVtLnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU1vZGFsVmlldyh2aWV3LCBpZCkge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICBpZighZWxlbSlcbiAgICByZXR1cm5cblxuICBsZXQgYmFja2Ryb3BJZCA9IGVsZW0ucGFyZW50Tm9kZS5pZFxuICBsZXQgYmFja2Ryb3BFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFja2Ryb3BJZClcblxuICBsZXQgcGFyZW50SWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgndmlydHVhbF9wYXJlbnQnKVxuICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXVxuICBsZXQgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKVxuXG4gIGxldCBvbGRWaWV3ID0gbnVsbFxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRWaWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYocGFyZW50Vmlldy5jaGlsZHJlbltpXS5wcm9wcy5pZCA9PSBpZCl7XG4gICAgICBvbGRWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpXVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoIW9sZFZpZXcpXG4gICAgcmV0dXJuXG5cbiAgLyogR2V0IENoaWxkcmVuICovXG4gIGxldCBjaGlsZHJlbkVsZW0gPSBbXVxuICBsZXQgY2hpbGRyZW4gPSBvbGRWaWV3LmNoaWxkcmVuXG5cbiAgaWYoZWxlbSAmJiBjaGlsZHJlbil7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBjaGlsZElkID0gY2hpbGRyZW5baV0ucHJvcHMuaWRcbiAgICAgIGxldCBjaGlsZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGlsZElkKVxuXG4gICAgICBpZihjaGlsZEVsZW0pXG4gICAgICAgIGNoaWxkcmVuRWxlbS5wdXNoKGNoaWxkRWxlbSlcbiAgICB9XG4gIH1cbiAgLyogR2V0IENoaWxkcmVuIEVuZCAqL1xuXG4gIG9sZFZpZXcucHJvcHMgPSB2aWV3LnByb3BzXG4gIGJhY2tkcm9wRWxlbS5yZW1vdmUoKVxuICBpbmZsYXRlVmlldyhvbGRWaWV3LCBwYXJlbnRFbGVtLCBudWxsLCB0cnVlKVxuICB3aW5kb3cuX19WSUVXU1tpZF0gPSBvbGRWaWV3XG5cbiAgLyogQXBwZW5kIENoaWxkcmVuICovXG4gIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICBpZihlbGVtICYmIGNoaWxkcmVuRWxlbS5sZW5ndGggPiAwKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtLmxlbmd0aDsgaSsrKXtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGRyZW5FbGVtW2ldKVxuICAgIH1cbiAgfVxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gRW5kICovXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWaWV3KHZpZXcsIGlkKSB7XG4gIGlmKHZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICByZXBsYWNlTW9kYWxWaWV3KHZpZXcsIGlkKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgaWYoIWVsZW0pXG4gICAgcmV0dXJuXG5cbiAgbGV0IHBhcmVudElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG4gIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG5cbiAgbGV0IG9sZFZpZXcgPSBudWxsXG4gIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgIG9sZFZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ldXG5cbiAgICAgIGlmKGkgIT0gMClcbiAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ktMV1cbiAgICAgIGVsc2VcbiAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIGlmKCFvbGRWaWV3KVxuICAgIHJldHVyblxuXG4gIC8qIEdldCBDaGlsZHJlbiAqL1xuICBsZXQgY2hpbGRyZW5FbGVtID0gW11cbiAgbGV0IGNoaWxkcmVuID0gb2xkVmlldy5jaGlsZHJlblxuXG4gIGlmKGVsZW0gJiYgY2hpbGRyZW4pe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgY2hpbGRJZCA9IGNoaWxkcmVuW2ldLnByb3BzLmlkXG4gICAgICBsZXQgY2hpbGRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGRJZClcblxuICAgICAgaWYoY2hpbGRFbGVtKVxuICAgICAgICBjaGlsZHJlbkVsZW0ucHVzaChjaGlsZEVsZW0pXG4gICAgfVxuICB9XG4gIC8qIEdldCBDaGlsZHJlbiBFbmQgKi9cblxuICBvbGRWaWV3LnByb3BzID0gdmlldy5wcm9wc1xuICBwYXJlbnRFbGVtLnJlbW92ZUNoaWxkKGVsZW0pXG4gIGluZmxhdGVWaWV3KG9sZFZpZXcsIHBhcmVudEVsZW0sIHNpYmxpbmdWaWV3LCB0cnVlKVxuICB3aW5kb3cuX19WSUVXU1tpZF0gPSBvbGRWaWV3XG5cbiAgLyogQXBwZW5kIENoaWxkcmVuICovXG4gIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICBpZihlbGVtICYmIGNoaWxkcmVuRWxlbS5sZW5ndGggPiAwKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtLmxlbmd0aDsgaSsrKXtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGRyZW5FbGVtW2ldKVxuICAgIH1cbiAgfVxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gRW5kICovXG59XG5cbmZ1bmN0aW9uIHJlY29tcHV0ZSgpIHtcbiAgY29uc3Qgcm9vdG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjaGlsZCA9IHJvb3Rub2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW2NoaWxkLmlkXTtcbiAgUmVuZGVyKHJvb3R2aWV3LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3SUQoKSB7XG4gIHdpbmRvdy5KT1NfUFJFU1RPX0lEID0gd2luZG93LkpPU19QUkVTVE9fSUQgfHwgMTtcbiAgcmV0dXJuIHdpbmRvdy5KT1NfUFJFU1RPX0lEKys7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgcmV0dXJuIHdpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRTY3JlZW5EaW1lbnNpb25zOiBnZXRTY3JlZW5EaW1lbnNpb25zLFxuXG4gIHJ1bkluVUk6IHJ1bkluVUksXG5cbiAgUmVuZGVyOiBSZW5kZXIsXG5cbiAgbW92ZVZpZXc6IG1vdmVWaWV3LFxuXG4gIGFkZFZpZXdUb1BhcmVudDogYWRkVmlld1RvUGFyZW50LFxuXG4gIGFkZEluZmxhdGVkVmlld1RvUGFyZW50OiBhZGRJbmZsYXRlZFZpZXdUb1BhcmVudCxcblxuICBwcmVwYXJlQW5kUmV0dXJuRG9tOiBwcmVwYXJlQW5kUmV0dXJuRG9tLFxuXG4gIGdldENoaWxkTW9kYWxWaWV3czogZ2V0Q2hpbGRNb2RhbFZpZXdzLFxuXG4gIHJlbW92ZVZpZXc6IHJlbW92ZVZpZXcsXG5cbiAgcmVwbGFjZU1vZGFsVmlldzogcmVwbGFjZU1vZGFsVmlldyxcblxuICByZXBsYWNlVmlldzogcmVwbGFjZVZpZXcsXG5cbiAgcmVjb21wdXRlOiByZWNvbXB1dGUsXG5cbiAgZ2V0TmV3SUQ6IGdldE5ld0lELFxuXG4gIGdldFdpbmRvdzogZ2V0V2luZG93LFxuXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudFxufTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbi8qXG4gIFZpZXdDb250ZXh0IG9mIHRoZSBQYXJlbnQuZlxuICBPYmogaG9sZHMgdGhlIGF2YWlsYWJsZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGl0J3MgcGFyZW50IGNvbnRhaW5lclxuICBhbmQgeCAmIHkgb2Zmc2V0IGZvciBpdCdzIGNoaWxkcmVuXG4qL1xuZnVuY3Rpb24gdmlld0N0eE9iaih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBvYmogPSB7XG4gICAgdzogcHJvcHMudyAqIDEsXG4gICAgaDogcHJvcHMuaCAqIDEsXG4gICAgd2lkdGg6IHByb3BzLncgKiAxLFxuICB9O1xuXG4gIHZpZXcuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQucHJvcHMudyA9IGNoaWxkLnByb3BzLndpZHRoO1xuICAgIGNoaWxkLnByb3BzLmggPSBjaGlsZC5wcm9wcy5oZWlnaHQ7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qXG4gIFJldHVybnMgdHJ1ZSBpZiBjb250YWluZXIgaGFzIGEgY2hpbGQgd2l0aCBtYXRjaF9wYXJlbnQgZm9yIGFcbiAgZ2l2ZW4gZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXG4qL1xuZnVuY3Rpb24gaGFzTWF0Y2hQYXJlbnRDaGlsZChjaGlsZHMsIGRpbWVuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkUHJvcCA9IGNoaWxkc1tpXS5wcm9wcztcbiAgICBcbiAgICBpZiAoY2hpbGRQcm9wW2RpbWVuXSAmJiAoY2hpbGRQcm9wW2RpbWVuXSA9PSBcIm1hdGNoX3BhcmVudFwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLypcbiAgUmV0dXJucyB0cnVlIGlmIGNvbnRhaW5lciBoYXMgd2VpZ2h0ZWQgY2hpbGRcbiovXG5mdW5jdGlvbiBoYXNXZWlnaHRDaGlsZCh0eXBlLCBjaGlsZHMpIHtcbiAgaWYgKHR5cGUgIT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGRzW2ldLnByb3BzO1xuICAgIFxuICAgIGlmIChjaGlsZC53ZWlnaHQgJiYgcGFyc2VGbG9hdChjaGlsZC53ZWlnaHQpID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVJlbGF0aXZlTGF5b3V0KHZpZXcpIHtcbiAgbGV0IHZpZXdDdHggPSB2aWV3Q3R4T2JqKHZpZXcpO1xuICBsZXQgY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuO1xuXG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxldCBwcm9wcyA9IGNoaWxkLnByb3BzO1xuXG4gICAgcHJvcHMuYWJzb2x1dGUgPSB0cnVlO1xuICAgIHByb3BzLmZyb21Ub3AgPSAwO1xuICAgIHByb3BzLmZyb21Cb3R0b20gPSAnYXV0byc7XG4gICAgcHJvcHMuZnJvbUxlZnQgPSAwO1xuICAgIHByb3BzLmZyb21SaWdodCA9ICdhdXRvJztcblxuICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCdhbGlnblBhcmVudExlZnQnKSAmJiBwcm9wcy5hbGlnblBhcmVudExlZnQpe1xuICAgICAgcHJvcHMuZnJvbUxlZnQgPSAwO1xuICAgICAgcHJvcHMuZnJvbVJpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWxpZ25QYXJlbnRSaWdodCcpICYmIHByb3BzLmFsaWduUGFyZW50UmlnaHQpe1xuICAgICAgcHJvcHMuZnJvbUxlZnQgPSAnYXV0byc7XG4gICAgICBwcm9wcy5mcm9tUmlnaHQgPSAwO1xuICAgIH1cblxuICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCdhbGlnblBhcmVudEJvdHRvbScpICYmIHByb3BzLmFsaWduUGFyZW50Qm90dG9tKXtcbiAgICAgIHByb3BzLmZyb21Ub3AgPSAnYXV0byc7XG4gICAgICBwcm9wcy5mcm9tQm90dG9tID0gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlTGluZWFybGF5b3V0KHZpZXcpIHtcbiAgbGV0IHZpZXdDdHggPSB2aWV3Q3R4T2JqKHZpZXcpO1xuICBsZXQgcGFyZW50UHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuO1xuICBsZXQgaXNIb3Jpem9udGFsID0gKHBhcmVudFByb3BzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpID8gZmFsc2UgOiB0cnVlO1xuICBcbiAgbGV0IGFjdGl2ZURpbWVuID0gKGlzSG9yaXpvbnRhbCkgPyBcIndcIiA6IFwiaFwiO1xuICBsZXQgcGFzc2l2ZURpbWVuID0gKGlzSG9yaXpvbnRhbCkgPyBcImhcIiA6IFwid1wiO1xuXG4gIGxldCBoYXNXZWlnaHQgPSBoYXNXZWlnaHRDaGlsZCh2aWV3LnR5cGUsIGNoaWxkcmVuKTtcbiAgbGV0IGhhc01hdGNoUGFyZW50ID0gaGFzTWF0Y2hQYXJlbnRDaGlsZChjaGlsZHJlbiwgYWN0aXZlRGltZW4pO1xuICBcbiAgaWYgKGhhc1dlaWdodCAmJiBoYXNNYXRjaFBhcmVudCkge1xuICAgIC8vIFdlIGNhbid0IHVzZSBib3RoIGF0IHRoZSBzYW1lIHRpbWVcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBJbml0aWFsaXplICovXG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxldCBwcm9wcyA9IGNoaWxkLnByb3BzO1xuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiYWN0aXZlRGltZW5cIikpXG4gICAgICBkZWxldGUgcHJvcHNbXCJhY3RpdmVEaW1lblwiXTtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJhY3RpdmVXZWlnaHRcIikpXG4gICAgICBkZWxldGUgcHJvcHNbXCJhY3RpdmVXZWlnaHRcIl07XG4gIH0pO1xuICAvKiBJbml0aWFsaXplIEVuZCAqL1xuICBcbiAgaWYoaGFzTWF0Y2hQYXJlbnQgfHwgaGFzV2VpZ2h0KXtcbiAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgIC8qIEl0ZXJhdGUgQ2hpbGQgKi9cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGxldCBwcm9wcyA9IGNoaWxkLnByb3BzO1xuXG4gICAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eShhY3RpdmVEaW1lbikgJiYgcHJvcHNbYWN0aXZlRGltZW5dID09ICdtYXRjaF9wYXJlbnQnKXtcbiAgICAgICAgcHJvcHNbJ2FjdGl2ZURpbWVuJ10gPSBhY3RpdmVEaW1lbjtcbiAgICAgICAgXG4gICAgICAgIGlmKGZpcnN0KXtcbiAgICAgICAgICBwcm9wc1snYWN0aXZlV2VpZ2h0J10gPSAxO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHByb3BzWydhY3RpdmVXZWlnaHQnXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2VpZ2h0JykgJiYgIWlzTmFOKHByb3BzWyd3ZWlnaHQnXSkpe1xuICAgICAgICAgIGxldCB3ZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzWyd3ZWlnaHQnXSk7XG5cbiAgICAgICAgICBpZih3ZWlnaHQgPiAwKXtcbiAgICAgICAgICAgIHByb3BzWydhY3RpdmVEaW1lbiddID0gYWN0aXZlRGltZW47XG4gICAgICAgICAgICBwcm9wc1snYWN0aXZlV2VpZ2h0J10gPSB3ZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLyogSXRlcmF0ZSBDaGlsZCBFbmQgKi9cbiAgfVxufSAvLyBFbmQgQ29tcHV0ZSBMaW5lYXJMYXlvdXRcblxuZnVuY3Rpb24gY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpIHtcbiAgaWYgKHZpZXcudHlwZSA9PSBcImxpbmVhckxheW91dFwiKSB7XG4gICAgY29tcHV0ZUxpbmVhcmxheW91dCh2aWV3KTtcbiAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJzY3JvbGxWaWV3XCIgfHwgdmlldy50eXBlID09IFwibGlzdFZpZXdcIikge1xuICAgIHZpZXcucHJvcHMub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgY29tcHV0ZUxpbmVhcmxheW91dCh2aWV3KTtcbiAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiKSB7XG4gICAgdmlldy5wcm9wcy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldyk7XG4gIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwicmVsYXRpdmVMYXlvdXRcIikge1xuICAgIGNvbXB1dGVSZWxhdGl2ZUxheW91dCh2aWV3KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBEbyBOb3RoaW5nXG4gIH1cblxuICByZXR1cm4gdmlldztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVDaGlsZERpbWVuc1xufTsiLCJjb25zdCBEcm9wZG93bkJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93bkJveCcpXG5jb25zdCBEcm9wZG93blNlYXJjaEJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveCcpIFxuY29uc3QgTmF2QmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05hdkJhcicpXG4vLyBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyJylcbmNvbnN0IFN3aXRjaEJ1dHRvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Td2l0Y2hCdXR0b24nKVxuY29uc3QgQnV0dG9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0J1dHRvbicpXG5cblxuXG4vKiBDb21wb25lbnRzICovXG5mdW5jdGlvbiBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKSB7XG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgIT0gJycpXG4gICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5EU0IgIT0gJycpXG4gICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLkRTQilcbiAgICBpZih3aW5kb3cuX19DT01fQUNUSVZFLkRCICE9ICcnKVxuICAgICAgICBEcm9wZG93bkJveC5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5EQilcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcikge1xuICAgIGlmKCFwcm9wcy5jb21wb25lbnRUeXBlKVxuICAgICAgICByZXR1cm5cblxuICAgIGxldCBjb21wb25lbnRUeXBlID0gcHJvcHMuY29tcG9uZW50VHlwZVxuXG4gICAgLyogQXR0YWNoaW5nIEdVSUQgb25seSB3aGVuIGZpcnN0UmVuZGVyICovXG4gICAgaWYoZmlyc3RSZW5kZXIgJiYgcHJvcHMuZ3VpZClcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBwcm9wcy5ndWlkKVxuXG4gICAgc3dpdGNoKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgLy8gQnV0dG9uXG4gICAgICAgIGNhc2UgJ0JUJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuQlQpXG5cbiAgICAgICAgICAgIEJ1dHRvbi5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrICAgIFxuICAgICAgICAvLyBTd2l0Y2ggQnV0dG9uXG4gICAgICAgIGNhc2UgJ1NXSVRDSCc6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSClcblxuICAgICAgICAgICAgU3dpdGNoQnV0dG9uLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gRGF0ZSBSYW5nZSBQaWNrZXJcbiAgICAgICAgY2FzZSAnRFJQJzogXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRSUClcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnRFJQX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EUlBfQk9EWSlcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJCb2R5KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gTmF2IEJhclxuICAgICAgICBjYXNlICdOQVZCQVInOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVIpXG5cbiAgICAgICAgICAgIE5hdkJhci5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIEJveFxuICAgICAgICBjYXNlICdEQic6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCKVxuXG4gICAgICAgICAgICBEcm9wZG93bkJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RCX0ZVTExfQk9EWSc6IFxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9GVUxMX0JPRFkpXG5cbiAgICAgICAgICAgIERyb3Bkb3duQm94Ll9yZW5kZXJGdWxsQm9keShlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIFNlYXJjaCBCb3hcbiAgICAgICAgY2FzZSAnRFNCJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RTQl9GVUxMX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfRlVMTF9CT0RZKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyRnVsbEJvZHkoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICB9XG5cbiAgICAgaWYoIXdpbmRvdy5fX0NPTV9FVkVOVCkge1xuICAgICAgICAgIHdpbmRvdy5fX0NPTV9FVkVOVCA9IHRydWVcblxuICAgICAgICAgIC8vIEJvZHkgY2xpY2sgZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZCkgeyAvLyBXZSBuZWVkIHRvIGNsb3NlIGFueSBhY3RpdmUgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3RcblxuICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIHdpdGggU3ViUm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXZCYXIuX29wZW5CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU0pIHx8IGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQl9JVEVNKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIChTdWIgSXRlbSBhcyB3ZWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2QmFyLl9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fc2VsZWN0Um91dGVCeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQikpIHsgLy8gREIgTWFpbiBDbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EQikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93bkJveC5fb3BlbkJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OKSkgeyAvLyBEQiBPcHRpb24gU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX3NlbGVjdE9wdGlvbkJ5R1VJRChndWlkLCB0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQikpIHsgLy8gRFNCIE1haW4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihndWlkID09IHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fY2xvc2VCeUdVSUQoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxBY3RpdmVDb21wb25lbnRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9vcGVuQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OKSkgeyAvLyBEU0IgT3B0aW9uIFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9zZWxlY3RPcHRpb25CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIEtleWRvd24gZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gdGFyZ2V0LmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EU0IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSB0YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX2ZpbHRlck9wdGlvbnMoZ3VpZCwgcXVlcnkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICByZW5kZXJDb21wb25lbnRcbn0iLCJmdW5jdGlvbiBEcm9wZG93bkJveCgpIHt9XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZXF1YWxPcHRpb25zID0gZnVuY3Rpb24oYSwgYiwgaikge1xuICAgICBsZXQgc3RyaW5nQSA9IGEuam9pbihqKS50cmltKClcbiAgICAgbGV0IHN0cmluZ0IgPSBiLmpvaW4oaikudHJpbSgpXG5cbiAgICAgaWYgKHN0cmluZ0EgPT0gc3RyaW5nQilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICByZXR1cm4gZmFsc2Vcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9zZWxlY3RPcHRpb25CeUdVSUQgPSBmdW5jdGlvbihndWlkLCBvcHRpb25FbGVtKSB7XG4gICAgIGxldCB2YWx1ZSA9IG9wdGlvbkVsZW0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKVxuICAgICBsZXQgdGV4dCA9IG9wdGlvbkVsZW0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcpXG5cbiAgICAgbGV0IG1haW5PYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBtYWluT2JqZWN0SUQgPSBtYWluT2JqZWN0LmlkXG5cbiAgICAgaWYoIXZhbHVlIHx8ICF0ZXh0IHx8ICFtYWluT2JqZWN0SUQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgIFxuICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW21haW5PYmplY3RJRF0gXG4gICAgIFxuICAgICBpZighdmlldyB8fCAhdmlldy5wcm9wcylcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvLyBTYXZlIE9wdGlvbiBWYWx1ZVxuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUgPSB2YWx1ZVxuXG4gICAgIC8vIFVwZGF0ZSBVSVxuICAgICBsZXQgb3B0aW9uc0VsZW0gPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG4gICAgIGlmIChvcHRpb25zRWxlbSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICBpZiAob3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScpID09IHZhbHVlICYmIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcpID09IHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBsZXQgY2hpbGRyZW4gPSBtYWluT2JqZWN0LmNoaWxkTm9kZXNcbiAgICAgbGV0IGFydGljbGUgPSBudWxsXG5cbiAgICAgaWYoY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBtYWluT2JqZWN0LnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkFDVElWRV9DT0xPUlxuICAgICBpZiAoYXJ0aWNsZSlcbiAgICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IHRleHRcblxuICAgICAvLyBFdmVudCBUcmlnZ2VyXG4gICAgIGlmICh2aWV3LnByb3BzLm9uU2VsZWN0ICYmIHR5cGVvZiB2aWV3LnByb3BzLm9uU2VsZWN0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHZpZXcucHJvcHMub25TZWxlY3QodmFsdWUpXG4gICAgIH1cbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9pc1ZhbGlkT1YgPSBmdW5jdGlvbihvcHRpb25WYWx1ZSwgb3B0aW9ucykge1xuICAgICBsZXQgdGV4dCA9IFwiXCJcbiAgICAgXG4gICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yKGxldCBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgIGlmKG9wdGlvbnNbaV0udmFsdWUgPT0gb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IG9wdGlvbnNbaV0udGV4dFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfSBcblxuICAgICByZXR1cm4gdGV4dFxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2dldE1haW5PYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQiArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2dldEZ1bGxCb2R5T2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfRlVMTF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZ2V0Qm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRPcHRpb25zT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OUyArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbiA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgZWxlbS5jbGFzc05hbWUgPSB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnLCBvcHRpb24udmFsdWUpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcsIG9wdGlvbi50ZXh0KVxuXG4gICAgIGxldCBoZWlnaHQgPSA1MFxuICAgICBpZihwcm9wcy5vcHRpb25IZWlnaHQgJiYgIWlzTmFOKHByb3BzLm9wdGlvbkhlaWdodCkpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzLm9wdGlvbkhlaWdodClcbiAgICAgfVxuXG4gICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4J1xuICAgICBcbiAgICAgaWYocHJvcHMuZm9udFNpemUpIFxuICAgICAgICAgIGVsZW0uc3R5bGUuZm9udFNpemUgPSBwcm9wcy5mb250U2l6ZSArICdweCdcbiAgICAgaWYocHJvcHMuZm9udEZhbWlseSlcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSBwcm9wcy5mb250RmFtaWx5XG4gICAgIGlmKHByb3BzLm9wdGlvblBhZGRpbmcpIHsgXG4gICAgICAgICAgbGV0IHBhZGRpbmcgPSBwcm9wcy5vcHRpb25QYWRkaW5nLnNwbGl0KCcsJykubWFwKGEgPT4gYSAqIDEpO1xuICBcbiAgICAgICAgICBlbGVtLnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nWzFdICsgJ3B4ICcgKyBwYWRkaW5nWzJdICsgJ3B4ICcgKyBwYWRkaW5nWzNdICsgJ3B4ICcgKyBwYWRkaW5nWzBdICsgJ3B4J1xuICAgICB9XG5cbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKSBcblxuICAgICBpZihvcHRpb25WYWx1ZSAmJiBvcHRpb25WYWx1ZSA9PSBvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgfVxuXG4gICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVJUSUNMRScpXG4gICAgIGFydGljbGUuaW5uZXJUZXh0ID0gb3B0aW9uLnRleHRcbiAgICAgXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX29wZW5CeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcbiAgICAgXG4gICAgIGlmKCFvYmplY3QgfHwgIWJvZHlFbGVtKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIG9iamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuREIgPSBndWlkXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fY2xvc2VCeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcbiAgICAgXG4gICAgIGlmKCFvYmplY3QgfHwgIWJvZHlFbGVtKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIG9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5EQiA9ICcnXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgbGV0IGNoaWxkcmVuID0gZWxlbS5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaWYoIXByb3BzLnN0cm9rZSlcbiAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJPUkRFUl9DT0xPUlxuICAgICBcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIGxldCBvcHRpb25zID0gSlNPTi5wYXJzZShwcm9wcy5vcHRpb25zKVxuICAgICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG51bGxcblxuICAgICAgICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gcHJvcHMub3B0aW9uVmFsdWVcblxuICAgICAgICAgIC8vIFJlYWQgb3B0aW9uIHZhbHVlXG4gICAgICAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUpXG4gICAgICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAgICAgIGlmKG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICBsZXQgb3B0aW9uVGV4dCA9IHRoaXMuX2lzVmFsaWRPVihvcHRpb25WYWx1ZSwgb3B0aW9ucylcblxuICAgICAgICAgICAgICAgaWYgKG9wdGlvblRleHQgIT0gXCJcIikgeyBcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcblxuICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gb3B0aW9uVGV4dFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuICAgICAvKiBEZWZhdWx0IFN0eWxlcyBFbmQgKi9cbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9yZW5kZXJGdWxsQm9keSA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgbGV0IGJvZHlFbGVtID0gbnVsbFxuICAgICAgICAgIGxldCBvcHRpb25zRWxlbWVudCA9IG51bGxcblxuICAgICBpZiAocmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICBib2R5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgYm9keUVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfQk9EWSlcbiAgICAgICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgYm9keUVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTlMpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgICAgICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChvcHRpb25zRWxlbWVudClcblxuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoYm9keUVsZW0pXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG4gICAgIH1cblxuICAgICBpZiAoIWJvZHlFbGVtIHx8ICFvcHRpb25zRWxlbWVudClcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvLyBPcHRpb25zXG4gICAgIHRoaXMuX3JlbmRlck9wdGlvbnMob3B0aW9uc0VsZW1lbnQsIHByb3BzLCBndWlkLCByZW5kZXJFdmVudClcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9yZW5kZXJPcHRpb25zID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KSB7XG4gICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSBbXVxuICAgICBsZXQgb3B0aW9ucyA9IFtdXG5cbiAgICAgLy8gQ3VycmVudCBPcHRpb25zXG4gICAgIGlmKHByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zID0gSlNPTi5wYXJzZShwcm9wcy5vcHRpb25zKVxuICAgICB9XG5cbiAgICAgLy8gUHJldmlvdXMgT3B0aW9uc1xuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25zKSB7XG4gICAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZSh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9ucylcbiAgICAgfVxuXG4gICAgIC8vIFJlYWQgb3B0aW9uIHZhbHVlXG4gICAgIGxldCBvcHRpb25WYWx1ZSA9IG51bGxcbiAgICAgaWYgKHByb3BzLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gcHJvcHMub3B0aW9uVmFsdWVcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUpXG4gICAgICAgICAgb3B0aW9uVmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUgKyBcIlwiXG5cbiAgICAgLy8gU2F2ZSBPcHRpb25zXG4gICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSA9IHt9XG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25zID0gcHJvcHMub3B0aW9uc1xuICAgICBcbiAgICAgLy8gU3R5bGVcbiAgICAgbGV0IGhlaWdodCA9IDUwXG4gICAgIGlmKHByb3BzLm9wdGlvbkhlaWdodCAmJiAhaXNOYU4ocHJvcHMub3B0aW9uSGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQocHJvcHMub3B0aW9uSGVpZ2h0KVxuICAgICB9XG5cbiAgICAgaWYob3B0aW9ucy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAoaGVpZ2h0ICogNSkgKyAncHgnXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAnYXV0bydcbiAgICAgfVxuICAgICBcbiAgICAgaWYgKCF0aGlzLl9lcXVhbE9wdGlvbnMocHJldmlvdXNPcHRpb25zLCBvcHRpb25zLCBndWlkKSkgeyAvLyBPcHRpb25zIENoYW5nZWQgLSBOZWVkIHRvIFJlLXJlbmRlclxuICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBcbiAgICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlck9wdGlvbihlbGVtLCBwcm9wcywgZ3VpZCwgb3B0aW9uLCBvcHRpb25WYWx1ZSwgcmVuZGVyRXZlbnQpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERyb3Bkb3duQm94KCkiLCJmdW5jdGlvbiBEcm9wZG93blNlYXJjaEJveCgpIHt9XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZXF1YWxPcHRpb25zID0gZnVuY3Rpb24oYSwgYiwgaikge1xuICAgICBsZXQgc3RyaW5nQSA9IGEuam9pbihqKS50cmltKClcbiAgICAgbGV0IHN0cmluZ0IgPSBiLmpvaW4oaikudHJpbSgpXG5cbiAgICAgaWYgKHN0cmluZ0EgPT0gc3RyaW5nQilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICByZXR1cm4gZmFsc2Vcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9zZWxlY3RPcHRpb25CeUdVSUQgPSBmdW5jdGlvbihndWlkLCBvcHRpb25FbGVtKSB7XG4gICAgIGxldCB2YWx1ZSA9IG9wdGlvbkVsZW0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKVxuICAgICBsZXQgdGV4dCA9IG9wdGlvbkVsZW0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcpXG5cbiAgICAgbGV0IG1haW5PYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBtYWluT2JqZWN0SUQgPSBtYWluT2JqZWN0LmlkXG5cbiAgICAgaWYoIXZhbHVlIHx8ICF0ZXh0IHx8ICFtYWluT2JqZWN0SUQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgIFxuICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW21haW5PYmplY3RJRF0gXG4gICAgIFxuICAgICBpZighdmlldyB8fCAhdmlldy5wcm9wcylcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvLyBTYXZlIE9wdGlvbiBWYWx1ZVxuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSA9IHt9XG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9uVmFsdWUgPSB2YWx1ZVxuXG4gICAgIC8vIFVwZGF0ZSBVSVxuICAgICBsZXQgb3B0aW9uc0VsZW0gPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG4gICAgIGlmIChvcHRpb25zRWxlbSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICBpZiAob3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScpID09IHZhbHVlICYmIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcpID09IHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBsZXQgY2hpbGRyZW4gPSBtYWluT2JqZWN0LmNoaWxkTm9kZXNcbiAgICAgbGV0IGFydGljbGUgPSBudWxsXG5cbiAgICAgaWYoY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBtYWluT2JqZWN0LnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkFDVElWRV9DT0xPUlxuICAgICBpZiAoYXJ0aWNsZSlcbiAgICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IHRleHRcblxuICAgICAvLyBFdmVudCBUcmlnZ2VyXG4gICAgIGlmICh2aWV3LnByb3BzLm9uU2VsZWN0ICYmIHR5cGVvZiB2aWV3LnByb3BzLm9uU2VsZWN0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHZpZXcucHJvcHMub25TZWxlY3QodmFsdWUpXG4gICAgIH1cbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9pc1ZhbGlkT1YgPSBmdW5jdGlvbihvcHRpb25WYWx1ZSwgb3B0aW9ucykge1xuICAgICBsZXQgb3B0aW9uVGV4dCA9IFwiXCJcbiAgICAgXG4gICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yKGxldCBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgIGlmKG9wdGlvbnNbaV0udmFsdWUgPT0gb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGV4dCA9IG9wdGlvbnNbaV0udGV4dFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfSBcblxuICAgICByZXR1cm4gb3B0aW9uVGV4dFxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldE1haW5PYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0IgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRGdWxsQm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9GVUxMX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRCb2R5T2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRTZWFyY2hXcmFwT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX1NFQVJDSF9XUkFQICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0U2VhcmNoT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX1NFQVJDSCArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldE9wdGlvbnNPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OUyArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2ZpbHRlck9wdGlvbnMgPSBmdW5jdGlvbihndWlkLCBxdWVyeSkge1xuICAgICBsZXQgb3B0aW9uc0VsZW0gPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG5cbiAgICAgaWYgKCFvcHRpb25zRWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKClcblxuICAgICBpZiAob3B0aW9uc0VsZW0uY2hpbGROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW0gPSBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldXG4gICAgICAgICAgICAgICBsZXQgdGV4dCA9IG9wdGlvbkVsZW0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcpXG5cbiAgICAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKClcblxuICAgICAgICAgICAgICAgICAgICBpZih0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fcmVuZGVyT3B0aW9uID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIG9wdGlvbiwgb3B0aW9uVmFsdWUsIHJlbmRlckV2ZW50KSB7XG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICBlbGVtLmNsYXNzTmFtZSA9IHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnLCBvcHRpb24udmFsdWUpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdvcHRpb24tdGV4dCcsIG9wdGlvbi50ZXh0KVxuXG4gICAgIGxldCBoZWlnaHQgPSA1MFxuICAgICBpZihwcm9wcy5vcHRpb25IZWlnaHQgJiYgIWlzTmFOKHByb3BzLm9wdGlvbkhlaWdodCkpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzLm9wdGlvbkhlaWdodClcbiAgICAgfVxuXG4gICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4J1xuICAgICBcbiAgICAgaWYocHJvcHMuZm9udFNpemUpIFxuICAgICAgICAgIGVsZW0uc3R5bGUuZm9udFNpemUgPSBwcm9wcy5mb250U2l6ZSArICdweCdcbiAgICAgaWYocHJvcHMuZm9udEZhbWlseSlcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSBwcm9wcy5mb250RmFtaWx5XG4gICAgIGlmKHByb3BzLm9wdGlvblBhZGRpbmcpIHsgXG4gICAgICAgICAgbGV0IHBhZGRpbmcgPSBwcm9wcy5vcHRpb25QYWRkaW5nLnNwbGl0KCcsJykubWFwKGEgPT4gYSAqIDEpO1xuICBcbiAgICAgICAgICBlbGVtLnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nWzFdICsgJ3B4ICcgKyBwYWRkaW5nWzJdICsgJ3B4ICcgKyBwYWRkaW5nWzNdICsgJ3B4ICcgKyBwYWRkaW5nWzBdICsgJ3B4J1xuICAgICB9XG5cbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKSBcblxuICAgICBpZihvcHRpb25WYWx1ZSAmJiBvcHRpb25WYWx1ZSA9PSBvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgfVxuXG4gICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVJUSUNMRScpXG4gICAgIGFydGljbGUuaW5uZXJUZXh0ID0gb3B0aW9uLnRleHRcbiAgICAgXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX29wZW5CeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcbiAgICAgXG4gICAgIGlmKCFvYmplY3QgfHwgIWJvZHlFbGVtKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIG9iamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCID0gZ3VpZFxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2Nsb3NlQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCID0gJydcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICBsZXQgY2hpbGRyZW4gPSBlbGVtLmNoaWxkTm9kZXNcbiAgICAgbGV0IGFydGljbGUgPSBudWxsXG5cbiAgICAgaWYoY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBpZighcHJvcHMuc3Ryb2tlKVxuICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQk9SREVSX0NPTE9SXG4gICAgIFxuICAgICBpZihwcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSBKU09OLnBhcnNlKHByb3BzLm9wdGlvbnMpXG4gICAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gbnVsbFxuXG4gICAgICAgICAgaWYgKHByb3BzLm9wdGlvblZhbHVlKVxuICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBwcm9wcy5vcHRpb25WYWx1ZVxuXG4gICAgICAgICAgLy8gUmVhZCBvcHRpb24gdmFsdWVcbiAgICAgICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlICsgXCJcIlxuXG4gICAgICAgICAgaWYgKG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICBsZXQgb3B0aW9uVGV4dCA9IHRoaXMuX2lzVmFsaWRPVihvcHRpb25WYWx1ZSwgb3B0aW9ucylcblxuICAgICAgICAgICAgICAgaWYob3B0aW9uVGV4dCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQUNUSVZFX0NPTE9SXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvblRleHRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbiAgICAgLyogRGVmYXVsdCBTdHlsZXMgRW5kICovXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fcmVuZGVyRnVsbEJvZHkgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBib2R5RWxlbSA9IG51bGxcbiAgICAgICAgICBsZXQgc2VhcmNoV3JhcEVsZW1lbnQgPSBudWxsXG4gICAgICAgICAgICAgICBsZXQgc2VhcmNoRWxlbWVudCA9IG51bGxcbiAgICAgICAgICBsZXQgb3B0aW9uc0VsZW1lbnQgPSBudWxsXG5cbiAgICAgaWYgKHJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgYm9keUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9CT0RZKVxuICAgICAgICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBib2R5RWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgc2VhcmNoV3JhcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgc2VhcmNoV3JhcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX1NFQVJDSF9XUkFQKSBcbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaC4uLicpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX1NFQVJDSClcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50LmFwcGVuZENoaWxkKHNlYXJjaEVsZW1lbnQpXG5cbiAgICAgICAgICAgICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHNlYXJjaFdyYXBFbGVtZW50KVxuXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OUylcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG5cbiAgICAgICAgICAgICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKG9wdGlvbnNFbGVtZW50KVxuXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChib2R5RWxlbSlcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcblxuICAgICAgICAgICAgICAgc2VhcmNoV3JhcEVsZW1lbnQgPSB0aGlzLl9nZXRTZWFyY2hXcmFwT2JqZWN0KGd1aWQpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudCA9IHRoaXMuX2dldFNlYXJjaE9iamVjdChndWlkKVxuXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudCA9IHRoaXMuX2dldE9wdGlvbnNPYmplY3QoZ3VpZClcbiAgICAgfVxuXG4gICAgIGlmICghYm9keUVsZW0gfHwgIXNlYXJjaFdyYXBFbGVtZW50IHx8ICFzZWFyY2hFbGVtZW50IHx8ICFvcHRpb25zRWxlbWVudClcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvLyBTdHlsZXNcbiAgICAgaWYocHJvcHMuZm9udFNpemUpIFxuICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBwcm9wcy5mb250U2l6ZSArICdweCdcbiAgICAgaWYocHJvcHMuZm9udEZhbWlseSlcbiAgICAgICAgICBzZWFyY2hFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBwcm9wcy5mb250RmFtaWx5XG5cbiAgICAgLy8gT3B0aW9uc1xuICAgICB0aGlzLl9yZW5kZXJPcHRpb25zKG9wdGlvbnNFbGVtZW50LCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fcmVuZGVyT3B0aW9ucyA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gW11cbiAgICAgbGV0IG9wdGlvbnMgPSBbXVxuXG4gICAgIC8vIEN1cnJlbnQgT3B0aW9uc1xuICAgICBpZihwcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgfVxuXG4gICAgIC8vIFByZXZpb3VzIE9wdGlvbnNcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25zKSB7XG4gICAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZSh3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9uVmFsdWUpXG4gICAgICAgICAgb3B0aW9uVmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlICsgXCJcIlxuXG4gICAgIC8vIFNhdmUgT3B0aW9uc1xuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSA9IHt9XG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9ucyA9IHByb3BzLm9wdGlvbnNcbiAgICAgXG4gICAgIC8vIFN0eWxlXG4gICAgIGxldCBoZWlnaHQgPSA1MFxuICAgICBpZihwcm9wcy5vcHRpb25IZWlnaHQgJiYgIWlzTmFOKHByb3BzLm9wdGlvbkhlaWdodCkpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzLm9wdGlvbkhlaWdodClcbiAgICAgfVxuXG4gICAgIGlmKG9wdGlvbnMubGVuZ3RoID4gNSkge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCAqIDUpICsgJ3B4J1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nXG4gICAgIH1cbiAgICAgXG4gICAgIGlmICghdGhpcy5fZXF1YWxPcHRpb25zKHByZXZpb3VzT3B0aW9ucywgb3B0aW9ucywgZ3VpZCkpIHsgLy8gT3B0aW9ucyBDaGFuZ2VkIC0gTmVlZCB0byBSZS1yZW5kZXJcbiAgICAgICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgXG4gICAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2ldXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJPcHRpb24oZWxlbSwgcHJvcHMsIGd1aWQsIG9wdGlvbiwgb3B0aW9uVmFsdWUsIHJlbmRlckV2ZW50KVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEcm9wZG93blNlYXJjaEJveCgpIiwiZnVuY3Rpb24gTmF2QmFyKCkge31cblxuTmF2QmFyLnByb3RvdHlwZS5fZ2V0QWN0aXZlUm91dGVJdGVtID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU1fV0lUSF9TVUIgKyAnLnNlbGVjdGVkW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSkgXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX2dldE1haW5PYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVIgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fb3BlbkJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQsIHBhcmVudEVsZW0pIHtcbiAgICAgcGFyZW50RWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSID0gZ3VpZFxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9jbG9zZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldEFjdGl2ZVJvdXRlSXRlbShndWlkKVxuICAgICBpZihvYmplY3QpXG4gICAgICAgICAgb2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcblxuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUiA9ICcnXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX3NlbGVjdFJvdXRlQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgZWxlbSkge1xuICAgICBsZXQga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvdXRlLWtleScpXG4gICAgIGxldCB0ZXh0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3JvdXRlLXRleHQnKVxuXG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBvYmplY3RJRCA9IG9iamVjdC5pZFxuICAgICBcbiAgICAgaWYoIWtleSB8fCAhdGV4dCB8fCAhb2JqZWN0SUQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgIFxuICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW29iamVjdElEXVxuICAgICBcbiAgICAgaWYoIXZpZXcgfHwgIXZpZXcucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLyogVXBkYXRlIFVJICovXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuXG4gICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuXG4gICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdID0ge31cblxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0gPSBlbGVtXG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlID0ga2V5XG4gICAgIFxuICAgICAvKiBFdmVudCBUcmlnZ2VyICovXG4gICAgIGlmICh2aWV3LnByb3BzLm9uU2VsZWN0ICYmIHR5cGVvZiB2aWV3LnByb3BzLm9uU2VsZWN0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHZpZXcucHJvcHMub25TZWxlY3Qoa2V5KVxuICAgICB9XG59XG5cbk5hdkJhci5wcm90b3R5cGUuX3JlbmRlclJvdXRlID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIHJvdXRlLCByZW5kZXJFdmVudCkge1xuICAgICBpZighcm91dGUua2V5IHx8ICFyb3V0ZS50ZXh0KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKVxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNKVxuICAgICBcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3JvdXRlLWtleScsIHJvdXRlLmtleSlcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3JvdXRlLXRleHQnLCByb3V0ZS50ZXh0KVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG5cbiAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IG51bGxcbiAgICAgaWYgKHByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWVcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUgKyBcIlwiXG5cbiAgICAgaWYoZGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZSA9PSByb3V0ZS5rZXkpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBTYXZlXG4gICAgICAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdKVxuICAgICAgICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSA9IHt9XG5cbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0gPSBlbGVtXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUgPSByb3V0ZS5rZXlcbiAgICAgfSBlbHNlXG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG5cbiAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJylcbiAgICAgaWYocHJvcHMuaGVpZ2h0ICYmICFpc05hTihwcm9wcy5oZWlnaHQpKVxuICAgICAgICAgIGFydGljbGUuc3R5bGUubGluZUhlaWdodCA9IHByb3BzLmhlaWdodCArICdweCdcblxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG5cbiAgICAgaWYocm91dGUuc3Vicm91dGVzICYmIHJvdXRlLnN1YnJvdXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSByb3V0ZS50ZXh0ICsgJyAmIzk2NjI7J1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU1fV0lUSF9TVUIpXG5cbiAgICAgICAgICBsZXQgdmlydHVhbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpXG4gICAgICAgICAgdmlydHVhbEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQilcblxuICAgICAgICAgIGlmKHJvdXRlLm5hdkRpcmVjdGlvbiAmJiByb3V0ZS5uYXZEaXJlY3Rpb24gPT0gJ2Zyb21fcmlnaHQnKSBcbiAgICAgICAgICAgICAgIHZpcnR1YWxFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUJfUklHSFQpXG5cbiAgICAgICAgICB2aXJ0dWFsRWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKSAgICAgICAgICBcblxuICAgICAgICAgIGlmKHByb3BzLnRyYW5zbGF0aW9uWl9uYXYpXG4gICAgICAgICAgICAgICB2aXJ0dWFsRWxlbS5zdHlsZS56SW5kZXggPSBwcm9wcy50cmFuc2xhdGlvblpfbmF2XG5cbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHZpcnR1YWxFbGVtKVxuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvdXRlLnN1YnJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgbGV0IHN1YnJvdXRlID0gcm91dGUuc3Vicm91dGVzW2ldXG5cbiAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclN1YlJvdXRlKHZpcnR1YWxFbGVtLCBwcm9wcywgZ3VpZCwgc3Vicm91dGUsIHJlbmRlckV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnRpY2xlLmlubmVySFRNTCA9IHJvdXRlLnRleHRcbiAgICAgfVxuXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fcmVuZGVyU3ViUm91dGUgPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgcm91dGUsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmKCFyb3V0ZS5rZXkgfHwgIXJvdXRlLnRleHQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpXG4gICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQl9JVEVNKVxuXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS1rZXknLCByb3V0ZS5rZXkpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS10ZXh0Jywgcm91dGUudGV4dClcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgIGxldCBkZWZhdWx0VmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlICsgXCJcIlxuXG4gICAgIGlmKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgPT0gcm91dGUua2V5KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSlcbiAgICAgICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gPSB7fVxuXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtID0gZWxlbVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlID0gcm91dGUua2V5XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIH1cblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKSBcbiAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSByb3V0ZS50ZXh0XG5cbiAgICAgZWxlbS5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgaWYgKCFyZW5kZXJFdmVudClcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgLy8gUk9VVEVTXG4gICAgIGxldCByb3V0ZXMgPSBbXVxuICAgICBpZihwcm9wcyAmJiBwcm9wcy5yb3V0ZXMpXG4gICAgICAgICAgcm91dGVzID0gSlNPTi5wYXJzZShwcm9wcy5yb3V0ZXMpICAgICAgICBcbiAgICAgXG4gICAgIGVsZW0uaW5uZXJIVE1MID0gJydcbiAgICAgbGV0IHZpcnR1YWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKVxuICAgICBlbGVtLmFwcGVuZENoaWxkKHZpcnR1YWxFbGVtKVxuXG4gICAgIGlmKHJvdXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gcm91dGVzW2ldXG5cbiAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclJvdXRlKHZpcnR1YWxFbGVtLCBwcm9wcywgZ3VpZCwgcm91dGUsIHJlbmRlckV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOYXZCYXIoKSIsImZ1bmN0aW9uIFN3aXRjaEJ1dHRvbigpIHt9XG5cblN3aXRjaEJ1dHRvbi5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgaWYgKHJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkIFxuICAgICAgICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGUoZWxlbSwgcHJvcHMsIGd1aWQpXG5cbiAgICAgICAgICBsZXQgdmlydHVhbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMQUJFTCcpXG4gICAgICAgICAgdmlydHVhbEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX0JPRFkpXG4gICAgICAgICAgdmlydHVhbEVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcbiAgICAgICAgICBcbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHZpcnR1YWxFbGVtKVxuXG4gICAgICAgICAgdGhpcy5fcmVuZGVyU2xpZGVyKHZpcnR1YWxFbGVtLCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpXG4gICAgIH1cbn1cblxuU3dpdGNoQnV0dG9uLnByb3RvdHlwZS5fcmVuZGVyU2xpZGVyID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KSB7XG4gICAgIGxldCBzZWxlY3RlZERlZmF1bHQgPSBmYWxzZVxuICAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWREZWZhdWx0JykpIFxuICAgICAgICAgIHNlbGVjdGVkRGVmYXVsdCA9IHByb3BzLnNlbGVjdGVkRGVmYXVsdFxuXG4gICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJylcbiAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAgXG4gICAgIGlmKHNlbGVjdGVkRGVmYXVsdCkge1xuICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICAgfVxuICAgICBcbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJylcbiAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfU0xJREVSKVxuXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcblxuICAgICAvLyBFdmVudHNcbiAgICAgaWYgKHJlbmRlckV2ZW50ICYmIHByb3BzLm9uU3dpdGNoICYmIHR5cGVvZiBwcm9wcy5vblN3aXRjaCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgIHByb3BzLm9uU3dpdGNoKHRoaXMuY2hlY2tlZClcbiAgICAgICAgICB9KVxuICAgICB9XG59XG5cblN3aXRjaEJ1dHRvbi5wcm90b3R5cGUuX3JlbmRlclN0eWxlID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQpIHtcbiAgICAgbGV0IGdhcCA9IDRcbiAgICAgbGV0IHBhcmVudFdpZHRoID0gcGFyZW50RWxlbS5vZmZzZXRXaWR0aFxuICAgICBsZXQgcGFyZW50SGVpZ2h0ID0gcGFyZW50RWxlbS5vZmZzZXRIZWlnaHRcblxuICAgICBsZXQgc2l6ZSA9IE1hdGgubWluKHBhcmVudFdpZHRoLCBwYXJlbnRIZWlnaHQpXG4gICAgIGxldCBhY3R1YWxTaXplID0gc2l6ZSAtIDIgKiBnYXBcbiAgICAgaWYgKGFjdHVhbFNpemUgPCAwKSB7XG4gICAgICAgICAgYWN0dWFsU2l6ZSA9IHNpemVcbiAgICAgICAgICBnYXAgPSAwXG4gICAgIH1cblxuICAgICBsZXQgdHggPSBwYXJlbnRXaWR0aCAtIDIgKiBnYXAgLSBhY3R1YWxTaXplXG4gICAgIGlmICh0eCA8IDApXG4gICAgICAgICAgdHggPSAwXG5cbiAgICAgbGV0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgc3R5bGVFbGVtLnR5cGUgPSAndGV4dC9jc3MnXG5cbiAgICAgbGV0IGNzcyA9ICcnXG4gICAgIGNzcyArPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArICdcIl0gLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUiArICd7Ym9yZGVyLXJhZGl1czogJyArIHNpemUgKyAncHh9ICdcbiAgICAgY3NzICs9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsgJ1wiXSAuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfU0xJREVSICsgJzpiZWZvcmUge2JvcmRlci1yYWRpdXM6IDUwJTsgY29udGVudDogXCJcIjsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogJyArIGFjdHVhbFNpemUgKyAncHg7IGhlaWdodDogJyArIGFjdHVhbFNpemUgKyAncHg7IGxlZnQ6ICcgKyBnYXAgKyAncHg7IGJvdHRvbTogJyArIGdhcCArICdweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC13ZWJraXQtdHJhbnNpdGlvbjogLjRzOyB0cmFuc2l0aW9uOiAuNHM7fSAnXG4gICAgIGNzcyArPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArICdcIl0gaW5wdXQ6Y2hlY2tlZCArIC4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9TTElERVIgKyAnOmJlZm9yZSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKCcgKyB0eCArICdweCk7fSAnXG5cbiAgICAgc3R5bGVFbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTd2l0Y2hCdXR0b24oKSIsImZ1bmN0aW9uIEJ1dHRvbigpIHt9XG5cbkJ1dHRvbi5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWQgXG4gICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgIGVsZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInIFxuICAgIGVsZW0uc3R5bGUucGFkZGluZyA9IDBcbiAgICBlbGVtLmlubmVySFRNTCA9ICcnXG5cbiAgICBsZXQgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJylcbiAgICBlbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKVxuXG4gICAgbGlua0VsZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdkaXNhYmxlZCcpICYmIHByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuQlRfRElTQUJMRUQpXG4gICAgICAgIGxpbmtFbGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZScgICAgICAgIFxuICAgIH1cblxuICAgIGxldCBodG1sID0gJydcbiAgICAvKiBCdXR0b24gSW1hZ2UgKi9cbiAgICBpZiAocHJvcHMuaW1hZ2VVcmwpIHsgLy8gSW1hZ2UgVVJMXG4gICAgICAgIGxldCBpbWFnZVVybCA9IHByb3BzLmltYWdlVXJsXG5cbiAgICAgICAgbGV0IHRlbXAgPSBpbWFnZVVybC5zcGxpdCgnLicpXG4gICAgICAgIGxldCBleHQgPSAnJ1xuICAgICAgICBpZih0ZW1wICYmIHRlbXAubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGV4dCA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXVxuICAgICAgICBcbiAgICAgICAgbGV0IGV4dHMgPSBbXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwiYm1wXCIsIFwic3ZnXCIsIFwiZ2lmXCJdXG4gICAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgaWYoIWltYWdlVXJsLmluY2x1ZGVzKFwiZGF0YTppbWFnZS9zdmcreG1sXCIpICYmICFleHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgICAgIGltYWdlVXJsICs9ICcucG5nJ1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSAnPGltZyBzcmM9XCInICsgaW1hZ2VVcmwgKyAnXCIvPidcbiAgICB9IGVsc2UgaWYgKHByb3BzLmljb25OYW1lKSB7IC8vIEZvbnQgSWNvblxuICAgICAgICBodG1sICs9ICc8aSBjbGFzcz1cIicgKyBwcm9wcy5pY29uTmFtZSArICdcIj48L2k+J1xuICAgIH1cblxuICAgIC8qIEJ1dHRvbiBUZXh0ICovXG4gICAgaWYgKHByb3BzLnRleHQpIFxuICAgICAgICBodG1sICs9IFwiPHNwYW4+XCIgKyBwcm9wcy50ZXh0ICsgXCI8L3NwYW4+XCJcbiAgICBlbHNlXG4gICAgICAgIGh0bWwgKz0gXCI8c3Bhbj5CdXR0b24gVGV4dDwvc3Bhbj5cIlxuXG4gICAgbGlua0VsZW0uaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BhZGRpbmcnKSAmJiBwcm9wcy5wYWRkaW5nKSB7XG4gICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMucGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKVxuICAgICAgICBcbiAgICAgICAgbGlua0VsZW0uc3R5bGUucGFkZGluZyA9IHBhZGRpbmdbMV0gKyAncHggJyArIHBhZGRpbmdbMl0gKyAncHggJyArIHBhZGRpbmdbM10gKyAncHggJyArIHBhZGRpbmdbMF0gKyAncHgnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlua0VsZW0uc3R5bGUucGFkZGluZyA9IDBcbiAgICB9XG5cbiAgICBpZiAoIXByb3BzLnN0cm9rZSkge1xuICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgJyArIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CVF9CT1JERVJfQ09MT1JcbiAgICB9XG5cbiAgICBpZiAoIXByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CVF9CR19DT0xPUlxuICAgIH1cblxuICAgIGlmICghcHJvcHMuY29sb3IpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CVF9DT0xPUlxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQnV0dG9uKCkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNldEFuaW1hdGlvblN0eWxlcyhlbGVtLCBwcm9wcykge1xuICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdoYXNBbmltYXRpb24nKSB8fCAhcHJvcHMuaGFzQW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBrZXlmcmFtZU5hbWUgPSBcImtleWZyYW1lX1wiICsgcHJvcHMuaWRcbiAgaWYgKCF3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMuaW5jbHVkZXMoa2V5ZnJhbWVOYW1lKSkge1xuICAgIGxldCBzdHlsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cuX19TVFlMRV9JRClcblxuICAgIGlmICghc3R5bGVFbGVtKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IG51bGxcblxuICAgIGlmIChwcm9wcy5pbmxpbmVBbmltYXRpb24pIHtcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHByb3BzLmlubGluZUFuaW1hdGlvbilcbiAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhID0gZGF0YVswXVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGNzcyA9IFwiXCJcbiAgICBjc3MgKz0gXCJAa2V5ZnJhbWVzIFwiICsga2V5ZnJhbWVOYW1lICsgXCJ7XCJcbiAgICBjc3MgKz0gXCJmcm9tIHtcIlxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tWCcpKSB7XG4gICAgICBjc3MgKz0gXCJtYXJnaW4tbGVmdDogXCIgKyBkYXRhLmZyb21YICsgXCJweDtcIlxuICAgIH1cblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tWScpKSB7XG4gICAgICBjc3MgKz0gXCJtYXJnaW4tdG9wOiBcIiArIGRhdGEuZnJvbVkgKyBcInB4O1wiXG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21BbHBoYScpKSB7XG4gICAgICBjc3MgKz0gXCJvcGFjaXR5OiBcIiArIGRhdGEuZnJvbUFscGhhICsgXCI7XCJcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlJykpIHtcbiAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGUoXCIgKyBkYXRhLmZyb21TY2FsZSArIFwiKTtcIlxuICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWCcpICYmIGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21TY2FsZVknKSkge1xuICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEuZnJvbVNjYWxlWCArIFwiLCBcIiArIGRhdGEuZnJvbVNjYWxlWSArIFwiKTtcIlxuICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWCcpKSB7XG4gICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlWChcIiArIGRhdGEuZnJvbVNjYWxlWCArIFwiKTtcIlxuICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWScpKSB7XG4gICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlWShcIiArIGRhdGEuZnJvbVNjYWxlWSArIFwiKTtcIlxuICAgIH1cblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb24nKSkge1xuICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGUoXCIgKyBkYXRhLmZyb21Sb3RhdGlvbiArIFwiKTtcIlxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVJvdGF0aW9uWCcpKSB7XG4gICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWChcIiArIGRhdGEuZnJvbVJvdGF0aW9uWCArIFwiKTtcIlxuICAgICAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb25ZJykpIHtcbiAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGVZKFwiICsgZGF0YS5mcm9tUm90YXRpb25ZICsgXCIpO1wiXG4gICAgICB9XG4gICAgfVxuICAgIGNzcyArPSBcIn0gXCJcbiAgICBjc3MgKz0gXCJ0byB7XCJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9YJykpIHtcbiAgICAgIGNzcyArPSBcIm1hcmdpbi1sZWZ0OiBcIiArIGRhdGEudG9YICsgXCJweDtcIlxuICAgIH1cblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1knKSkge1xuICAgICAgY3NzICs9IFwibWFyZ2luLXRvcDogXCIgKyBkYXRhLnRvWSArIFwicHg7XCJcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9BbHBoYScpKSB7XG4gICAgICBjc3MgKz0gXCJvcGFjaXR5OiBcIiArIGRhdGEudG9BbHBoYSArIFwiO1wiXG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvU2NhbGUnKSkge1xuICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEudG9TY2FsZSArIFwiKTtcIlxuICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVgnKSAmJiBkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWScpKSB7XG4gICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS50b1NjYWxlWCArIFwiLCBcIiArIGRhdGEudG9TY2FsZVkgKyBcIik7XCJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvU2NhbGVYJykpIHtcbiAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGVYKFwiICsgZGF0YS50b1NjYWxlWCArIFwiKTtcIlxuICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVknKSkge1xuICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVkoXCIgKyBkYXRhLnRvU2NhbGVZICsgXCIpO1wiXG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvUm90YXRpb24nKSkge1xuICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGUoXCIgKyBkYXRhLnRvUm90YXRpb24gKyBcIik7XCJcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvUm90YXRpb25YJykpIHtcbiAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGVYKFwiICsgZGF0YS50b1JvdGF0aW9uWCArIFwiKTtcIlxuICAgICAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1JvdGF0aW9uWScpKSB7XG4gICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGRhdGEudG9Sb3RhdGlvblkgKyBcIik7XCJcbiAgICAgIH1cbiAgICB9XG4gICAgY3NzICs9IFwifSBcIlxuICAgIGNzcyArPSBcIn1cIlxuXG4gICAgaWYgKHN0eWxlRWxlbS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZUVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uTmFtZSA9IGtleWZyYW1lTmFtZVxuICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjFzXCJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZHVyYXRpb24nKSAmJiAhaXNOYU4oZGF0YS5kdXJhdGlvbikpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGRhdGEuZHVyYXRpb24pIC8gMTAwMCkudG9GaXhlZCgyKVxuICAgICAgZWxlbS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgXCJzXCJcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0Q291bnQnKSkge1xuICAgICAgaWYgKGRhdGEucmVwZWF0Q291bnQgPT0gXCItMVwiIHx8IGRhdGEucmVwZWF0Q291bnQgPT0gLTEpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9IFwiaW5maW5pdGVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zdHlsZS5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9IGRhdGEucmVwZWF0Q291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImludGVycG9sYXRvclwiKSkge1xuICAgICAgZWxlbS5zdHlsZS5hbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9IFwiY3ViaWMtYmV6aWVyKFwiICsgZGF0YS5pbnRlcnBvbGF0b3IgKyBcIilcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMucHVzaChrZXlmcmFtZU5hbWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihlbGVtLCBwcm9wcykge1xuICBpZiAoIXByb3BzLmFuaW1hdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJhbmltYWl0b24gbm90IGZvdW5kXCIsIHByb3BzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocHJvcHMuYW5pbWF0aW9uLnRyYW5zaXRpb24pIHtcbiAgICBjb25zdCBhZnRlclRyYW5zaXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb247XG4gICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBhbmltYXRpb24udHJhbnNpdGlvbjtcbiAgICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gYW5pbWF0aW9uLnRyYW5zZm9ybTtcbiAgICAgIGlmIChhbmltYXRpb24ub3BhY2l0eSkge1xuICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSBhbmltYXRpb24ub3BhY2l0eTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLnN0eWxlLnRyYW5zZm9ybSB8fCBwcm9wcy5zdHlsZS5vcGFjaXR5KSB7XG4gICAgICBzZXRUaW1lb3V0KGFmdGVyVHJhbnNpdGlvbiwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBbmltYXRpb25TdHlsZXMsXG4gIHNldFRyYW5zaXRpb24sXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBoYW5kbGVQb3B1cChlbGVtLCBwcm9wcykge1xuICBsZXQgbWVudUl0ZW1zID0gcHJvcHNbXCJwb3B1cE1lbnVcIl0uc3BsaXQoJywnKTtcbiAgbGV0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXBNZW51XCIpO1xuICBtZW51QmFyLnN0eWxlLmNzc1RleHQgPVxuICAgIFwiZGlzcGxheTogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjBweDsgdG9wOjIwcHg7IHotaW5kZXg6IDU7XCIgK1xuICAgIFwiYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICM4ODg4ODg7XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJhcilcbiAgbGV0IGNsaWNrQ2IgPSBcIm9uTWVudUl0ZW1DbGlja1wiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudUl0ZW1cIik7XG4gICAgbWVudURpdi50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGxldCBpbmRleCA9IGk7XG4gICAgaWYgKHByb3BzW2NsaWNrQ2JdICYmXG4gICAgICB0eXBlb2YgcHJvcHNbY2xpY2tDYl0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBtZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb3BzW2NsaWNrQ2JdKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1lbnVCYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIilcbiAgICAgIG1lbnVCYXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgZWxzZVxuICAgICAgbWVudUJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUZXh0RWxlbWVudChlbGVtLCBjb25maWcpIHtcbiAgbGV0IGNoaWxkcmVuID0gZWxlbS5jaGlsZE5vZGVzO1xuICBsZXQgYXJ0aWNsZSA9IG51bGxcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJykge1xuICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWFydGljbGUpXG4gICAgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuXG4gIGVsZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwiaW5pdGlhbFwiXG5cbiAgaWYgKGNvbmZpZy5pc0h0bWxDb250ZW50KVxuICAgIGFydGljbGUuaW5uZXJIVE1MID0gY29uZmlnLnRleHRcbiAgZWxzZVxuICAgIGFydGljbGUuaW5uZXJUZXh0ID0gY29uZmlnLnRleHRcblxuICBpZiAoIWNvbmZpZy50ZXh0ICYmIGNvbmZpZy5oaW50KVxuICAgIGFydGljbGUuaW5uZXJUZXh0ID0gY29uZmlnLmhpbnRcblxuICBhcnRpY2xlLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiXG4gIGFydGljbGUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcblxuICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpXG4gICAgZWxlbVtcInN0eWxlXCJdW1wibGV0dGVyLXNwYWNpbmdcIl0gPSBjb25maWcubGV0dGVyU3BhY2luZ1xuXG4gIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlSFRNTFRleHRFbGVtZW50KGVsZW0sIGNvbmZpZykge1xuICBsZXQgY2hpbGRyZW4gPSBlbGVtLmNoaWxkTm9kZXM7XG4gIGxldCBhcnRpY2xlID0gbnVsbFxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKSB7XG4gICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghYXJ0aWNsZSlcbiAgICBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVJUSUNMRScpXG5cbiAgZWxlbS5zdHlsZS53aGl0ZVNwYWNlID0gXCJpbml0aWFsXCJcblxuICBpZiAoY29uZmlnLmlzSHRtbENvbnRlbnQpXG4gICAgYXJ0aWNsZS5pbm5lckhUTUwgPSBjb25maWcudGV4dEZyb21IdG1sXG4gIGVsc2VcbiAgICBhcnRpY2xlLmlubmVySFRNTCA9IGNvbmZpZy50ZXh0RnJvbUh0bWxcblxuICBpZiAoIWNvbmZpZy50ZXh0ICYmIGNvbmZpZy5oaW50KVxuICAgIGFydGljbGUuaW5uZXJUZXh0ID0gY29uZmlnLmhpbnRcblxuICBhcnRpY2xlLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiXG4gIGFydGljbGUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcblxuICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpXG4gICAgZWxlbVtcInN0eWxlXCJdW1wibGV0dGVyLXNwYWNpbmdcIl0gPSBjb25maWcubGV0dGVyU3BhY2luZ1xuXG4gIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhhbmRsZVBvcHVwLFxuICBoYW5kbGVUZXh0RWxlbWVudCxcbiAgaGFuZGxlSFRNTFRleHRFbGVtZW50LFxufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBzZXRHcmF2aXR5U3R5bGVzRm9yUm93LFxuICBzZXRHcmF2aXR5U3R5bGVzRm9yQ29sdW1uXG59ID0gcmVxdWlyZShcIi4vZ3Jhdml0eVwiKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNob3codHlwZSwgZWxlbSwgcHJvcHMpIHtcbiAgaWYgKHR5cGUgPT0gJ2xpbmVhckxheW91dCcpIHtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykgJiYgcHJvcHMud2lkdGggPT0gJ3dyYXBfY29udGVudCcpIHtcbiAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gICAgICBlbGVtLnN0eWxlLndpZHRoID0gJ21heC1jb250ZW50JztcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSAmJiBwcm9wcy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICBlbGVtLnN0eWxlLndpZHRoID0gJ21heC1jb250ZW50JztcbiAgICAgIGlmICh0eXBlID09PSBcInRleHRWaWV3XCIgJiYgIXByb3BzLmhhc093blByb3BlcnR5KCdtYXhXaWR0aCcpKSB7XG4gICAgICAgIGVsZW0uc3R5bGUubWF4V2lkdGggPSAnMTAwJSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUeXBlU3BlY2lmaWNTdHlsZXModHlwZSwgZWxlbSwgcHJvcHMpIHtcbiAgbGV0IHtcbiAgICBzY3JvbGxCYXJYID0gdHJ1ZSwgc2Nyb2xsQmFyWSA9IHRydWVcbiAgfSA9IHByb3BzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2xpbmVhckxheW91dCc6XG4gICAgICBlbGVtLnN0eWxlW1wiYm94LXNpemluZ1wiXSA9IFwiYm9yZGVyLWJveFwiO1xuXG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2ZpeGVkV3JhcCcpICYmICFwcm9wcy5maXhlZFdyYXApIHtcbiAgICAgICAgZWxlbS5zdHlsZVtcImZsZXgtd3JhcFwiXSA9IFwibm93cmFwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlW1wiZmxleC13cmFwXCJdID0gXCJ3cmFwXCI7XG4gICAgICB9XG5cbiAgICAgIGVsZW0uc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9IHByb3BzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiIHx8IHByb3BzLm9yaWVudGF0aW9uID09IG51bGwgPyBcInJvd1wiIDogXCJjb2x1bW5cIjtcblxuICAgICAgaWYgKGVsZW0uc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9PSAncm93JylcbiAgICAgICAgc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyhlbGVtLCBwcm9wcyk7XG4gICAgICBlbHNlXG4gICAgICAgIHNldEdyYXZpdHlTdHlsZXNGb3JDb2x1bW4oZWxlbSwgcHJvcHMpO1xuXG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclgnKSkge1xuICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWClcbiAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJ1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclknKSkge1xuICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWSlcbiAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hvcml6b250YWxTY3JvbGxWaWV3JzpcbiAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gXCJhdXRvXCI7XG4gICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgIGlmICghc2Nyb2xsQmFyWClcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbGlzdFZpZXcnOlxuICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcbiAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcblxuICAgICAgaWYgKCFzY3JvbGxCYXJZKVxuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzY3JvbGxWaWV3JzpcbiAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nO1xuICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG5cbiAgICAgIGlmICghc2Nyb2xsQmFyWClcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICAgIGlmICghc2Nyb2xsQmFyWSlcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVsYXRpdmVMYXlvdXQnOlxuICAgICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWCcpKSB7XG4gICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJYKVxuICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWScpKSB7XG4gICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJZKVxuICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ltYWdlVmlldyc6XG4gICAgICBpZiAocHJvcHMuaW1hZ2VVcmwpIHtcbiAgICAgICAgbGV0IGltYWdlVXJsID0gcHJvcHMuaW1hZ2VVcmxcblxuICAgICAgICBpZiAocHJvcHMucmF3RGF0YSkge1xuICAgICAgICAgIC8vIERvIE5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGltYWdlVXJsLnNwbGl0KCcuJylcbiAgICAgICAgICBsZXQgZXh0ID0gJydcbiAgICAgICAgICBpZiAodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV1cblxuICAgICAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXVxuICAgICAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgICBpZiAoIWltYWdlVXJsLmluY2x1ZGVzKFwiZGF0YTppbWFnZS9cIikgJiYgIWV4dHMuaW5jbHVkZXMoZXh0KSkge1xuICAgICAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpXG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVVybClcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFR5cGVCYXNlZEF0dHJpYnV0ZXModHlwZSwgZWxlbSwgcHJvcHMpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnOlxuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxMZWZ0JykgJiYgIWlzTmFOKHByb3BzLnNjcm9sbExlZnQpKSB7XG4gICAgICAgIGVsZW0uc2Nyb2xsTGVmdCA9IHByb3BzLnNjcm9sbExlZnQ7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpc3RWaWV3JzpcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsTGVmdCcpICYmICFpc05hTihwcm9wcy5zY3JvbGxMZWZ0KSkge1xuICAgICAgICBlbGVtLnNjcm9sbExlZnQgPSBwcm9wcy5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzY3JvbGxWaWV3JzpcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsTGVmdCcpICYmICFpc05hTihwcm9wcy5zY3JvbGxMZWZ0KSkge1xuICAgICAgICBlbGVtLnNjcm9sbExlZnQgPSBwcm9wcy5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxUb3AnKSAmJiAhaXNOYU4ocHJvcHMuc2Nyb2xsVG9wKSkge1xuICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IHByb3BzLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2hlY2tCb3gnOlxuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgJiYgcHJvcHMuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb21wdXRlZFN0eWxlcyhlbGVtLCBwcm9wcykge1xuICAvKiBDb21wdXRlZCBTdHlsZXMgKi9cbiAgLy8gTGluZWFyTGF5b3V0IFN0eWxlc1xuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2FjdGl2ZURpbWVuJykgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoJ2FjdGl2ZVdlaWdodCcpKSB7XG4gICAgbGV0IGFjdGl2ZURpbWVuID0gcHJvcHMuYWN0aXZlRGltZW47XG4gICAgbGV0IHdlaWdodCA9IHByb3BzLmFjdGl2ZVdlaWdodDtcblxuICAgIGlmICh3ZWlnaHQgPiAwKSB7XG4gICAgICBlbGVtLnN0eWxlLmZsZXggPSB3ZWlnaHQ7XG5cbiAgICAgIGlmIChhY3RpdmVEaW1lbiA9PSAndycpIHtcbiAgICAgICAgLy9lbGVtLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUuZmxleCA9ICdub25lJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5mbGV4ID0gJ25vbmUnO1xuICB9XG5cbiAgLy8gUmVsYXRpdmVMYXlvdXQgU3R5bGVzXG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWJzb2x1dGUnKSAmJiBwcm9wcy5hYnNvbHV0ZSkge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiZnJvbVRvcFwiKSkge1xuICAgICAgaWYgKGlzTmFOKHByb3BzLmZyb21Ub3ApKVxuICAgICAgICBlbGVtLnN0eWxlLnRvcCA9IHByb3BzLmZyb21Ub3A7XG4gICAgICBlbHNlXG4gICAgICAgIGVsZW0uc3R5bGUudG9wID0gcHJvcHMuZnJvbVRvcCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiZnJvbUJvdHRvbVwiKSkge1xuICAgICAgaWYgKGlzTmFOKHByb3BzLmZyb21Cb3R0b20pKVxuICAgICAgICBlbGVtLnN0eWxlLmJvdHRvbSA9IHByb3BzLmZyb21Cb3R0b207XG4gICAgICBlbHNlXG4gICAgICAgIGVsZW0uc3R5bGUuYm90dG9tID0gcHJvcHMuZnJvbUJvdHRvbSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiZnJvbUxlZnRcIikpIHtcbiAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tTGVmdCkpXG4gICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHByb3BzLmZyb21MZWZ0O1xuICAgICAgZWxzZVxuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSBwcm9wcy5mcm9tTGVmdCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiZnJvbVJpZ2h0XCIpKSB7XG4gICAgICBpZiAoaXNOYU4ocHJvcHMuZnJvbVJpZ2h0KSlcbiAgICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IHByb3BzLmZyb21SaWdodDtcbiAgICAgIGVsc2VcbiAgICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IHByb3BzLmZyb21SaWdodCArICdweCc7XG4gICAgfVxuICB9XG4gIC8qIENvbXB1dGVkIFN0eWxlcyBFbmQgKi9cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRpYWxpemVTaG93LFxuICBzZXRUeXBlU3BlY2lmaWNTdHlsZXMsXG4gIHNldFR5cGVCYXNlZEF0dHJpYnV0ZXMsXG4gIHNldENvbXB1dGVkU3R5bGVzLFxufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBzZXRBdHRyaWJ1dGVzXG59ID0gcmVxdWlyZSgnLi9wcm9wcycpO1xuXG5mdW5jdGlvbiBjcmVhdGVFZGl0VGV4dCh0eXBlLCBwcm9wcykge1xuICBsZXQgZWxlbTtcbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdpbnB1dFR5cGUnKSAmJiBwcm9wcy5pbnB1dFR5cGUgPT0gJ211bHRpVGV4dCcpIHtcbiAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgIGVsZW0uc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICAgIGVsZW0uc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB9XG5cbiAgZWxlbS52YWx1ZSA9IHByb3BzLnRleHQgfHwgXCJcIjtcblxuICBpZiAocHJvcHMubGV0dGVyU3BhY2luZykge1xuICAgIGVsZW1bXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gcHJvcHMubGV0dGVyU3BhY2luZztcbiAgfVxuXG4gIGlmIChwcm9wcy5sYWJlbCkge1xuICAgIHZhciBpbnB1dFZpZXcgPSBlbGVtO1xuICAgIGlucHV0Vmlldy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBzZXRBdHRyaWJ1dGVzKHR5cGUsIGlucHV0VmlldywgcHJvcHMsIHRydWUpO1xuICAgIGlucHV0Vmlldy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9wcy5pZCArIFwiX2lucHV0XCIpO1xuXG4gICAgdmFyIGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJvcHMuaWQgKyBcIl9pbnB1dFwiKTtcbiAgICBsLmlubmVySFRNTCA9IHByb3BzLmxhYmVsO1xuICAgIGwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICAgIGxbXCJzdHlsZVwiXVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgIGxbXCJzdHlsZVwiXVtcImNvbG9yXCJdID0gXCIjOTk5XCI7XG4gICAgbFtcInN0eWxlXCJdW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiI2ZmZlwiO1xuICAgIGxbXCJzdHlsZVwiXVtcInBhZGRpbmdcIl0gPSBcIjAgNXB4XCI7XG4gICAgbFtcInN0eWxlXCJdW1wiei1pbmRleFwiXSA9IDEwO1xuICAgIGxbXCJzdHlsZVwiXVtcInRyYW5zaXRpb25cIl0gPSBcInRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCwgZm9udC1zaXplIDE1MG1zIGVhc2Utb3V0XCI7XG5cbiAgICBpZiAocHJvcHMubGV0dGVyU3BhY2luZykge1xuICAgICAgbFtcInN0eWxlXCJdW1wibGV0dGVyLXNwYWNpbmdcIl0gPSBwcm9wcy5sZXR0ZXJTcGFjaW5nO1xuICAgIH1cblxuICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAnKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGwpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoaW5wdXRWaWV3KTtcblxuICAgIHByb3BzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHNldEF0dHJpYnV0ZXModHlwZSwgZWxlbSwgcHJvcHMsIHRydWUpO1xuICAgIGRlbGV0ZSBwcm9wcy5sYWJlbDtcbiAgfSBlbHNlIGlmIChwcm9wcy5oaW50KSB7XG4gICAgZWxlbS5wbGFjZWhvbGRlciA9IHByb3BzLmhpbnQgfHwgXCJcIjtcbiAgfVxuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGVja0JveChwcm9wcywgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsZXQgc3ViRWxlbSA9IG51bGw7XG5cbiAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgJiYgcHJvcHMubGFiZWwgIT0gJycgJiYgcGFyZW50RWxlbWVudCkge1xuICAgIHN1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHN1YkVsZW0uc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wcy5pZCk7XG4gICAgc3ViRWxlbS5pbm5lckhUTUwgPSBwcm9wcy5sYWJlbDtcbiAgICBzdWJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcIjAgMCAwIDVweFwiO1xuICAgIHN1YkVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5sYWJlbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVsZW0sXG4gICAgc3ViRWxlbVxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRUb29sdGlwKHR5cGUsIGVsZW0sIHByb3BzKSB7XG4gIGlmIChbJ2xpbmVhckxheW91dCcsXG4gICAgICAncmVsYXRpdmVMYXlvdXQnLFxuICAgICAgJ2hvcml6b250YWxTY3JvbGxWaWV3JyxcbiAgICAgICdzY3JvbGxWaWV3JyxcbiAgICAgICdsaXN0VmlldydcbiAgICBdLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dCcpKSB7XG4gICAgbGV0IHRvb2x0aXBUZXh0ID0gcHJvcHMudG9vbHRpcFRleHQudHJpbSgpXG5cbiAgICBpZiAodG9vbHRpcFRleHQpIHtcbiAgICAgIGxldCB0b29sdGlwR3Jhdml0eSA9IHByb3BzLnRvb2x0aXBHcmF2aXR5ID8gcHJvcHMudG9vbHRpcEdyYXZpdHkgOiAndG9wJ1xuXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hhc1Rvb2x0aXAnKVxuXG4gICAgICBsZXQgdG9vbHRpcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdG9vbHRpcEVsZW0uaW5uZXJIVE1MID0gJzxwcmU+JyArIHRvb2x0aXBUZXh0ICsgJzwvcHJlPidcbiAgICAgIHRvb2x0aXBFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBUZXh0JylcbiAgICAgIHRvb2x0aXBFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBHcmF2aXR5XycgKyB0b29sdGlwR3Jhdml0eSlcblxuICAgICAgbGV0IHNpemUgPSAxNVxuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dFNpemUnKSAmJiAhaXNOYU4ocHJvcHMudG9vbHRpcFRleHRTaXplKSkge1xuICAgICAgICBzaXplID0gcHJvcHMudG9vbHRpcFRleHRTaXplXG4gICAgICB9XG5cbiAgICAgIHRvb2x0aXBFbGVtLnN0eWxlLmZvbnRTaXplID0gc2l6ZSArICdweCdcblxuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0b29sdGlwRWxlbSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7IHR5cGUsIHByb3BzLCBlbE5hbWUgfSwgcGFyZW50RWxlbWVudCkge1xuICBsZXQgZWxlbTtcbiAgbGV0IHN1YkVsZW0gPSBudWxsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3dlYlZpZXcnOlxuICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXG4gICAgICBlbGVtLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW1hZ2VWaWV3JzpcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZWxlbVtcInN0eWxlXCJdW1wibWFyZ2luXCJdID0gXCIwXCI7XG4gICAgICBlbGVtW1wic3R5bGVcIl1bXCJwYWRkaW5nXCJdID0gXCIwXCI7XG4gICAgICBlbGVtW1wic3R5bGVcIl1bXCJkaXNwbGF5XCJdID0gXCJibG9ja1wiO1xuICAgICAgZWxlbVtcInN0eWxlXCJdW1wibWF4LXdpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICBlbGVtW1wic3R5bGVcIl1bXCJtYXgtaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICBlbGVtW1wic3R5bGVcIl1bXCJib3gtc2l6aW5nXCJdID0gXCJib3JkZXItYm94XCI7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2hlY2tCb3gnOlxuICAgICAgKHsgZWxlbSwgc3ViRWxlbSB9ID0gY3JlYXRlQ2hlY2tCb3gocHJvcHMsIHBhcmVudEVsZW1lbnQpKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZWRpdFRleHQnOlxuICAgICAgZWxlbSA9IGNyZWF0ZUVkaXRUZXh0KHR5cGUsIHByb3BzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsTmFtZSB8fCBcImRpdlwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLyogVG9vbHRpcCAqL1xuICBhZGRUb29sdGlwKHR5cGUsIGVsZW0sIHByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIGVsZW0sXG4gICAgc3ViRWxlbVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudFxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG52YXIgVmlld1BhZ2VBZGFwdGVyID0gcmVxdWlyZShcIi4vVmlld1BhZ2VBZGFwdGVyXCIpO1xudmFyIFJlbmRlcmVyID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xudmFyIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuY29uc3QgcXNzdHJpbmdpZnkgPSByZXF1aXJlKFwicXMvbGliL3N0cmluZ2lmeVwiKTtcbnZhciBsb2dzX3N0YXRlID0ge1xuICBzZXNzaW9uX2lkIDogJycsXG4gIHNuOicnXG59XG52YXIgaGFzTG9jYWxTdG9yYWdlID0gdHJ1ZTtcbnRyeSB7XG4gIHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSB1bmRlZmluZWQ7XG59IGNhdGNoKGUpe1xuICBoYXNMb2NhbFN0b3JhZ2UgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBhcnNlSnNvbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kQW5hbHl0aWNzKGRhdGEpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2xvZ3MuanVzcGF5LmluL2dvZGVsL2FuYWx5dGljc1wiO1xuICBpZiAobmF2aWdhdG9yLnNlbmRCZWFjb24pIHtcbiAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KHsgZGF0YSB9KSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvLyAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIGZhbHNlKTsgLy8gdGhpcmQgcGFyYW1ldGVyIG9mIGBmYWxzZWAgbWVhbnMgc3luY2hyb25vdXNcbiAgICAvLyAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhfSkpOyAgIFxuICAgIC8vIH0gY2F0Y2goZXJyKSB7XG4gICAgLy8gICAvL1xuICAgIC8vIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U3ltYm9sOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidGlja1wiOlxuICAgICAgICByZXR1cm4gXCJcXHUyNzEzXCI7XG4gICAgICBjYXNlIFwicnVwZWVcIjpcbiAgICAgICAgcmV0dXJuIFwiXFx1MjBCOVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gICAgfVxuICB9LFxuICBzZXRMb2dzU3RhdGUgOiBmdW5jdGlvbihzZXNzaW9uLHNuKXtcbiAgICBsb2dzX3N0YXRlLnNlc3Npb25faWQgPSBzZXNzaW9uO1xuICAgIGxvZ3Nfc3RhdGUuc24gPSBzbjtcbiAgfSxcbiAgbGlzdFZpZXdBZGFwdGVyOiBmdW5jdGlvbihpZCwganN4LCBjYWxsYmFjaywgdHlwZSwgbW9yZSkge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiTGlzdHZpZXcgcGFyZW50IG51bGxcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aGlsZSAocGFyZW50LmZpcnN0RWxlbWVudENoaWxkKVxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICBsZXQgdmlldyA9IEpTT04ucGFyc2UoanN4KTtcbiAgICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudC5pZF07XG4gICAgdmlldy5tYXAoKHgsIGkpID0+IHtcbiAgICAgIHBhcmVudFZpZXcuY2hpbGRyZW4ucHVzaCh4LnZpZXcpO1xuICAgICAgcGFyZW50Vmlldy50eXBlID0gXCJsaW5lYXJMYXlvdXRcIjtcbiAgICAgIFJlbmRlcmVyLmNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KTtcbiAgICAgIHBhcmVudFZpZXcudHlwZSA9IFwibGlzdFZpZXdcIjtcbiAgICAgIGxldCBlbGVtID0gUmVuZGVyZXIuaW5mbGF0ZVZpZXcoeC52aWV3LCBwYXJlbnQpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYWxsYmFjaywgW2ldKTtcbiAgICAgIH0pO1xuICAgICAgQW5kcm9pZC5ydW5JblVJKHgudmFsdWUpO1xuICAgIH0pO1xuICAgIGlmIChtb3JlKSB7XG4gICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIjtcbiAgICAgIGVsZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgI2VlZVwiO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgICBSZW5kZXJlci5pbmZsYXRlVmlldyhKU09OLnBhcnNlKG1vcmUpLCBlbGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgY2FsbEFQSTogYXN5bmMgZnVuY3Rpb24gY2FsbEFQSShtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycywgc2hvdWxkRW5jb2RlVG9Gb3JtRGF0YSwgaXNTU0xQaW5uZWRVUkwsIGNhbGxiYWNrKSB7XG4gICAgaGVhZGVycyA9IHBhcnNlSnNvbihoZWFkZXJzKTtcbiAgICBkYXRhID0gcGFyc2VKc29uKGRhdGEpO1xuICAgIGxldCBzb21ldGhpbmcgPSBmYWxzZTtcbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgc29tZXRoaW5nID0gdHJ1ZTtcbiAgICAgICAgZGF0YSA9IHFzc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIGlmIChbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKG1ldGhvZCkpIHtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3Moe3VybCwgbWV0aG9kLCBkYXRhLCBoZWFkZXJzIH0pO1xuICAgICAgY29uc3QganNvbiA9IHJlc3AuZGF0YTsvL2F3YWl0IHJlc3AuZGF0YS5qc29uKCk7XG4gICAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgYnRvYShKU09OLnN0cmluZ2lmeShqc29uKSksXG4gICAgICAgIHJlc3Auc3RhdHVzXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJcIiwgZXJyKTtcbiAgICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYWxsYmFjaywgXCJmYWlsdXJlXCIsIGJ0b2EoXCJ7fVwiKSwgNTApO1xuICAgIH1cbiAgfSxcblxuICBnZXRGcm9tU2hhcmVkUHJlZnM6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBoYXNMb2NhbFN0b3JhZ2U/KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgXCJfX2ZhaWxlZFwiKTogXCJfX2ZhaWxlZFwiO1xuICB9LFxuXG4gIHNldEluU2hhcmVkUHJlZnM6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBpZihoYXNMb2NhbFN0b3JhZ2UpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfSxcblxuICBnZXRLZXlzSW5TaGFyZWRQcmVmczogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXNMb2NhbFN0b3JhZ2U/KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgXCJfX2ZhaWxlZFwiKTogXCJfX2ZhaWxlZFwiO1xuICB9LFxuXG4gIHNldEtleXNJblNoYXJlZFByZWZzOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmKGhhc0xvY2FsU3RvcmFnZSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9LFxuXG4gIHJlbW92ZUtleXNJblNoYXJlZFByZWZzOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYoaGFzTG9jYWxTdG9yYWdlKVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfSxcblxuICB2aWV3UGFnZXJBZGFwdGVyOiBmdW5jdGlvbihpZCwganN4LCB0YWJKc3gsIGNiKSB7XG4gICAgVmlld1BhZ2VBZGFwdGVyLmNyZWF0ZVRhYnMoaWQsIGpzeCwgdGFiSnN4LCBjYik7XG4gIH0sXG5cbiAgc3dpdGNoVG9WaWV3UGFnZXJJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBWaWV3UGFnZUFkYXB0ZXIudG9nZ2xlVmlldyhpbmRleCk7XG4gIH0sXG5cbiAgZ2V0S2V5OiBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBoYXNMb2NhbFN0b3JhZ2U/IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IGRlZmF1bHRWYWx1ZSk6IGRlZmF1bHRWYWx1ZTtcbiAgfSxcblxuICBzZXRLZXk6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gaGFzTG9jYWxTdG9yYWdlP2xvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpOiB2YWx1ZTtcbiAgfSxcblxuICBnZXRSZXNvdXJjZUJ5TmFtZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2VCeU5hbWUodGFnKSB7XG4gICAgcmV0dXJuIFwiMi4wLjBcIjtcbiAgfSxcblxuICBnZXRTZXNzaW9uQXR0cmlidXRlOiBmdW5jdGlvbiBnZXRTZXNzaW9uQXR0cmlidXRlKHYxLCB2Mikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7IGE6IHYxIH0pO1xuICB9LFxuXG4gIHNldEFuYWx5dGljc0VuZFBvaW50OiBmdW5jdGlvbiBzZXRBbmFseXRpY3NFbmRQb2ludCh1cmwpIHtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgZ2V0U2Vzc2lvbkluZm86IGZ1bmN0aW9uIGdldFNlc3Npb25JbmZvKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH0sXG5cbiAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGFkZFRvTG9nTGlzdDogZnVuY3Rpb24gYWRkVG9Mb2dMaXN0KGRhdGEpIHtcblxuXG4gICAgY29uc3QgbmV3TG9nID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB2YXIgbG9nc0FyciA9IEFycmF5LmlzQXJyYXkobmV3TG9nKSA/IG5ld0xvZyA6IFtuZXdMb2ddO1xuICAgIGZvciAodmFyIGkgPSAwO2k8bG9nc0Fyci5sZW5ndGg7aSsrKXtcbiAgICAgIGxvZ3NBcnJbaV0uc2Vzc2lvbl9pZCA9IGxvZ3Nfc3RhdGUuc2Vzc2lvbl9pZDtcbiAgICAgIGxvZ3NBcnJbaV0uc24gPSArKyBsb2dzX3N0YXRlLnNuO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLndhcm4obG9nc0FycilcblxuICAgIHNlbmRBbmFseXRpY3MobG9nc0FycilcbiAgfSxcbiAgc2F2ZVRvTG9jYWw6IGZ1bmN0aW9uKGEsYixjKXtcbiAgICBpZiAoaGFzTG9jYWxTdG9yYWdlKXtcbiAgICAgIHRyeXtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjK1wiOlwiK1wiZGVmT3B0aW9uVHlwZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjK1wiOlwiK1wiZGVmT3B0aW9uXCIpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZSl7fVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGMrXCI6XCIrJ2RlZk9wdGlvblR5cGUnLCBhKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjK1wiOlwiKydkZWZPcHRpb24nLCBKU09OLnN0cmluZ2lmeShiKSk7XG4gICAgfVxuXG4gIH0sXG4gIGRlbGV0ZUZyb21Mb2NhbDogZnVuY3Rpb24oKXt9LFxuICBsb2FkRnJvbUxvY2FsOiBmdW5jdGlvbihrZXkpe1xuICAgIGlmIChoYXNMb2NhbFN0b3JhZ2Upe1xuICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpPT11bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB0cnl7XG4gICAgICBjb25zdCBhID0gIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgaWYgKGE9PXVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIHJldHVybiBhXG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvc3RMb2dzKGVuZFBvaW50LCBsb2dzKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIHN1Ym1pdEFsbExvZ3M6IGZ1bmN0aW9uIHN1Ym1pdEFsbExvZ3MoKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGdldExvZ0xpc3Q6IGZ1bmN0aW9uIGdldExvZ0xpc3QoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFtdKTtcbiAgfSxcblxuICB1cGRhdGVMb2dMaXN0OiBmdW5jdGlvbiB1cGRhdGVMb2dMaXN0KCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH0sXG5cbiAgaXNPbmxpbmU6IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGdldERldmljZURldGFpbHM6IGZ1bmN0aW9uIGdldERldmljZURldGFpbHMoKSB7XG4gICAgY29uc3QgZGV2aWNlRGV0YWlscyA9IHtcbiAgICAgIGFwcFZlcnNpb246IFwiXCIsXG4gICAgICBvc1ZlcnNpb246IFwiXCIsXG4gICAgICBvczogXCJcIixcbiAgICAgIG1hY0FkZHJlc3M6IFwiXCIsXG4gICAgICBpc0R1YWw6IFwiXCIsXG4gICAgICBtYW51ZmFjdHVyZXI6IFwiXCIsXG4gICAgICBpc1Jvb3RlZDogXCJcIixcbiAgICAgIGFuZHJvaWRJZDogXCJcIixcbiAgICAgIGFwcFBhY2thZ2VOYW1lOiBcIlwiLFxuICAgICAgbmV0d29ya09wZXJhdG9yOiBcIlwiLFxuICAgICAgc2ltT3BlcmF0b3JOYW1lOiBcIlwiLFxuICAgICAgc2NyZWVuSGVpZ2h0OiBcIlwiLFxuICAgICAgc2NyZWVuV2lkdGg6IFwiXCIsXG4gICAgICBzY3JlZW5QcGk6IFwiXCIsXG4gICAgICBicmFuZDogXCJcIixcbiAgICAgIG1vZGVsOiBcIlwiLFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGV2aWNlRGV0YWlscyk7XG4gIH0sXG5cbiAgZ2V0RGV2aWNlSW5mbzogZnVuY3Rpb24gZ2V0RGV2aWNlSW5mbygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe30pXG4gIH0sXG5cbiAgZ2V0VVVJRDogZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgICBmdW5jdGlvbiBzNCgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7ICBcbiAgfSxcblxuICByZW5ld0ZpbGU6IGZ1bmN0aW9uIHJlbmV3RmlsZShmaWxlKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuICBoaWRlS2V5Ym9hcmRPbk5hdmlnYXRpb246IGZ1bmN0aW9uIGhpZGVLZXlib2FyZE9uTmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm47XG4gIH0sXG4gIHJ1bkluSnVzcGF5QnJvd3NlcjogZnVuY3Rpb24gcnVuSW5KdXNwYXlCcm93c2VyKGV2ZW50TmFtZSwgYXJnMiwgYXJnMykge1xuICAgIC8vXG4gICAgY29uc29sZS5sb2coJ3J1bkluSnVzcGF5QnJvd3NlcicsIGV2ZW50TmFtZSwgYXJnMiwgYXJnMylcbiAgfSxcbiAgbG9hZEZpbGVJbkRVSTogZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZSkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVOYW1lO1xuICB9LFxuICBzZXRTZXNzaW9uQXR0cmlidXRlOiBmdW5jdGlvbigpIHtcblxuICB9LFxuICBnZXRNZDU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIlwiXG4gIH0sXG4gIHNldFNlc3Npb25EZXRhaWxzOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgd2luZG93LnNlc3Npb24gPSB3aW5kb3cuc2Vzc2lvbiB8fCB7fTtcbiAgICB3aW5kb3cuc2Vzc2lvbltrZXldID0gdmFsdWU7XG4gIH0sXG4gIGdldFNlc3Npb25EZXRhaWxzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkod2luZG93LnNlc3Npb24gfHwge30pO1xuICB9LFxuICAvKipcbiAgICogQG1ldGhvZCBzZXRGQ01Ub2tlblxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0b2tlbiBmb3IgR0NNIG5vdGlmaWNhdGlvbnNcbiAgICogXG4gICAqIE5vdGU6IE9ubHkgZm9yIEFuZHJvaWQvaU9TLiBUaGlzIGlzIGp1c3QgYW4gZW1wdHkgc3R1YiBpbiB3ZWJcbiAgICovXG4gIHNldEZDTVRva2VuOiBmdW5jdGlvbiBzZXRGQ01Ub2tlbiAoKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuICAvKipcbiAgICogQG1ldGhvZCByZXF1ZXN0TG9jYXRpb25cbiAgICogQGRlc2NyaXB0aW9uIFJlcXVlc3RzIHBlcm1pc3Npb24gdG8gYWNjZXNzIGxvY2F0aW9uXG4gICAqIFxuICAgKiBOb3RlOiBPbmx5IGZvciBBbmRyb2lkL2lPUy4gVGhpcyBpcyBqdXN0IGFuIGVtcHR5IHN0dWIgaW4gd2ViXG4gICAqL1xuICByZXF1ZXN0TG9jYXRpb246IGZ1bmN0aW9uIHJlcXVlc3RMb2NhdGlvbigpIHtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgZG9lc1NpbXBsRXhpc3Q6IGZ1bmN0aW9uIGRvZXNTaW1wbEV4aXN0ICgpIHtcbiAgICByZXR1cm4gXCJmYWxzZVwiO1xuICB9XG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFiV3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYlwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlciAoKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi10aXRsZVdyYXBwZXJcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJDb250ZW50V3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi1jb250ZW50V3JhcHBlclwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlRWwgKHRpdGxlKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlbGVtLmlubmVySFRNTCA9IHRpdGxlO1xuICBlbGVtLmNsYXNzTmFtZSA9IFwidGFiLXRpdGxlXCI7XG5cbiAgcmV0dXJuIGVsZW07XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYkNvbnRlbnRFbCAodmlldykgIHtcbiAgdmFyIGVsZW0gPSBSZW5kZXJlci5pbmZsYXRlVmlldyh2aWV3LnZpZXcpO1xuICBlbGVtLmNsYXNzTmFtZSArPSBcIiB0YWItY29udGVudFwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG52YXIgY3JlYXRlVGFicyA9IGZ1bmN0aW9uKEFuZHJvaWQsIGlkLCB0YWJKc3gsIGpzeCwgY2IpICB7XG4gIHZhciB2aWV3ID0gZ2VuZXJhdGVUYWJXcmFwcGVyKCk7XG4gIHZhciB0YWJUaXRsZVdyYXBwZXIgPSBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlcigpO1xuICB2YXIgdGFiQ29udGVudFdyYXBwZXIgPSBnZW5lcmF0ZVRhYkNvbnRlbnRXcmFwcGVyKCk7XG4gIHZhciB0YWJJdGVtO1xuXG4gIHZpZXcuYXBwZW5kQ2hpbGQodGFiVGl0bGVXcmFwcGVyKTtcbiAgdmlldy5hcHBlbmRDaGlsZCh0YWJDb250ZW50V3JhcHBlcik7XG5cbiAganN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiVGl0bGVFbChlYWNoLnZhbHVlKTtcblxuICAgIGlmIChpbmRleCA9PSAwKVxuICAgIHRhYkl0ZW0uY2xhc3NOYW1lICs9IFwiIHRhYi10aXRsZS1hY3RpdmVcIjtcblxuICAgIHRhYlRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgdGFiSnN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiQ29udGVudEVsKGVhY2gpO1xuXG4gICAgaWYgKGluZGV4ID09IDApXG4gICAgdGFiSXRlbS5jbGFzc05hbWUgKz0gXCIgdGFiLWNvbnRlbnQtYWN0aXZlXCI7XG5cbiAgICB0YWJDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKHZpZXcpO1xuXG4gIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYiAsIFwiMFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUYWJzOiBjcmVhdGVUYWJzLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnO1xufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXRcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChpc05vbk51bGxpc2hQcmltaXRpdmUob2JqKSB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ3ZhbHVlJykpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsLmFzc2lnbihcbiAgICB7XG4gICAgICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgRm9ybWF0XG4pO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGFuZGxlIDogKHVpLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICghdWkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodWkucmVuZGVyKSB7XG4gICAgICBpZiAodHlwZW9mIEFuZHJvaWQgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFuZHJvaWQgaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcih1aS5yZW5kZXIsIG51bGwpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsLCBcImZhbHNlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHVpLnJ1bkluVUkpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSSh1aS5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gICAgaWYodWkuYWRkVmlld1RvUGFyZW50KSB7XG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudCh1aS5hZGRWaWV3VG9QYXJlbnQucGFyZW50SWQsIEpTT04uc3RyaW5naWZ5KHVpLmFkZFZpZXdUb1BhcmVudC5qc3gpLCB1aS5hZGRWaWV3VG9QYXJlbnQuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgQmFzZVZpZXcgPSByZXF1aXJlKCcuL2Jhc2VWaWV3Jyk7XG5jb25zdCBWSUVXID0gbmV3IEJhc2VWaWV3KG51bGwsIG51bGwsIHt9KTtcblxuLy8gT2JqZWN0IG9mIHR5cGVzIG9mIGFuaW1hdGlvbnMgYXZhaWxhYmxlIG9uIHNjcmVlbiBjaGFuZ2VcbmNvbnN0IEFuaW1hdGlvblR5cGVzID0ge1xuICBTTElERToge1xuICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICBoYW5kbGVyOiBzbGlkZUhhbmRsZXJcbiAgfSxcbiAgU0xJREVfVkVSVElDQUw6IHtcbiAgICBuYW1lOiBcInNsaWRlX2Rvd25cIixcbiAgICBoYW5kbGVyOiBzbGlkZURvd25IYW5kbGVyXG4gIH0sXG4gIFNJTVBMRToge1xuICAgIG5hbWU6IFwic2ltcGxlXCIsXG4gICAgaGFuZGxlcjogc2ltcGxlSGFuZGxlclxuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfQU5JTUFUSU9OID0gQW5pbWF0aW9uVHlwZXMuU0xJREU7XG5cbmZ1bmN0aW9uIHNpbXBsZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgcmV0dXJuIGNtZDtcbn1cblxuZnVuY3Rpb24gc2xpZGVEb3duSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcblxuICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHRyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCdcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgd2luZG93LlpJbmRleCsrO1xuICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IGZyb21JZCxcbiAgICB0cmFuc2xhdGlvblk6IDAsXG4gICAgYV90cmFuc2xhdGlvblk6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXgtMSxcbiAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgIHRyYW5zbGF0aW9uWTogLTAuMiAqIHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgfSk7XG4gIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzbGlkZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvbnRhaW5lciA9IFZJRVcuY21kQ29udGFpbmVyKCk7XG4gIGxldCBjbWQ7XG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSAtMSkge1xuICAgIHdpbmRvdy5aSW5kZXgrKztcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXggLSAxLFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qXG4gIEdlbmVyaWMgSGFuZGxlciBmb3IgQW5pbWF0aW9uXG4gIEFyZ3VtZW50czpcbiAgICBmcm9tVmlld0lkOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyBjdXJyZW50bHkgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgdG9WaWV3SUQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IHdoaWNoIGhhcyB0byBiZSBicm91Z2h0IG9uIHRoZSBzY3JlZW5cbiAgICBJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgdG8gYmUgYW5pbWF0ZWRcbiAgICBhbmltYXRvcjogT2JqIC0ge25hbWU6c3RyaW5nLCBoYW5kbGVyOmZ1bmN0aW9ufVxuICAgIGRpcmVjdGlvbjogTnVtYmVyIC0gUmVwcmVzZW50cyBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JlZW5cbiAgICAgIC0xIDogR28gYmFjayB0byB0aGUgYWxyZWFkeSByZW5kZXJlZCBzY3JlZW4gKHJpZ2h0IHRvIGxlZnQpXG4gICAgICAgMSA6IEdvIHRvIHRoZSBuZXcgc2NyZWVuIChsZWZ0IHRvIHJpZ2h0KVxuKi9cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbihmcm9tVmlld0lELCB0b1ZpZXdJZCwgZGlyZWN0aW9uLCBhbmltYXRvcikge1xuICBpZiAoIWFuaW1hdG9yKVxuICAgIGFuaW1hdG9yID0gREVGQVVMVF9BTklNQVRJT047XG5cbiAgaWYgKHR5cGVvZiBhbmltYXRvciA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYW5pbWF0b3IuaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHJldHVybiBhbmltYXRvci5oYW5kbGVyKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24pO1xuICBlbHNlXG4gICAgY29uc29sZS5sb2cobmV3IEVycm9yKFwiQW5pbWF0aW9uIGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24sIHR5cGU6IFwiICtcbiAgICAgIGFuaW1hdG9yKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnR5cGVzID0gQW5pbWF0aW9uVHlwZXM7XG5tb2R1bGUuZXhwb3J0cy5nZXRBbmltYXRpb24gPSBnZXRBbmltYXRpb247Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7OztBQzFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQURBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7O0FDOUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0EsZUFFQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbnFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7QUFDQTtBQUlBLGFBRUE7QUFFQTtBQUNBLFNBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlEQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7OztBQzlPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7QUNoU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM09BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esb0NBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7OztBQ3BQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0EsbUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFFQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7Ozs7Ozs7OztBQ2pTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTs7Ozs7Ozs7O0FDL2NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQUNBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQVFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7OztBQ3BHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBHQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7QUNuT0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7O0FDL0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQWxCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBalNBOzs7Ozs7Ozs7QUM5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7O0FDbEdBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSw4REFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=