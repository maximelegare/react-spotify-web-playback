"use strict";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = function(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
    }) : obj[key] = value;
};
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
var __publicField = function(obj, key, value) {
    __defNormalProp(obj, (typeof key === "undefined" ? "undefined" : _typeof(key)) !== "symbol" ? key + "" : key, value);
    return value;
};
// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js": function(exports) {
        "use strict";
        var A = function A(a) {
            if (null === a || "object" !== typeof a) return null;
            a = z && a[z] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        };
        var E = function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        };
        var F = function F() {};
        var G = function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        };
        var M = function M(a, b, e) {
            var d, c = {}, k = null, h = null;
            if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
            var g = arguments.length - 2;
            if (1 === g) c.children = e;
            else if (1 < g) {
                for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                c.children = f;
            }
            if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
            return {
                $$typeof: l,
                type: a,
                key: k,
                ref: h,
                props: c,
                _owner: K.current
            };
        };
        var N = function N(a, b) {
            return {
                $$typeof: l,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        };
        var O = function O(a) {
            return "object" === typeof a && null !== a && a.$$typeof === l;
        };
        var escape = function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, function(a2) {
                return b[a2];
            });
        };
        var Q = function Q(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        };
        var S = function S(a, b, e) {
            if (null == a) return a;
            var d = [], c = 0;
            R(a, d, "", "", function(a2) {
                return b.call(e, a2, c++);
            });
            return d;
        };
        var T = function T(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                b.then(function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
                }, function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
                });
                -1 === a._status && (a._status = 0, a._result = b);
            }
            if (1 === a._status) return a._result.default;
            throw a._result;
        };
        var l = Symbol.for("react.element");
        var n = Symbol.for("react.portal");
        var p = Symbol.for("react.fragment");
        var q = Symbol.for("react.strict_mode");
        var r = Symbol.for("react.profiler");
        var t = Symbol.for("react.provider");
        var u = Symbol.for("react.context");
        var v = Symbol.for("react.forward_ref");
        var w = Symbol.for("react.suspense");
        var x = Symbol.for("react.memo");
        var y = Symbol.for("react.lazy");
        var z = Symbol.iterator;
        var B = {
            isMounted: function isMounted() {
                return false;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {}
        };
        var C = Object.assign;
        var D = {};
        E.prototype.isReactComponent = {};
        E.prototype.setState = function(a, b) {
            if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        F.prototype = E.prototype;
        var H = G.prototype = new F();
        H.constructor = G;
        C(H, E.prototype);
        H.isPureReactComponent = true;
        var I = Array.isArray;
        var J = Object.prototype.hasOwnProperty;
        var K = {
            current: null
        };
        var L = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var P = /\/+/g;
        function R(a, b, e, d, c) {
            var k = typeof a === "undefined" ? "undefined" : _typeof(a);
            if ("undefined" === k || "boolean" === k) a = null;
            var h = false;
            if (null === a) h = true;
            else switch(k){
                case "string":
                case "number":
                    h = true;
                    break;
                case "object":
                    switch(a.$$typeof){
                        case l:
                        case n:
                            h = true;
                    }
            }
            if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
                return a2;
            })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
            h = 0;
            d = "" === d ? "." : d + ":";
            if (I(a)) for(var g = 0; g < a.length; g++){
                k = a[g];
                var f = d + Q(k, g);
                h += R(k, b, e, f, c);
            }
            else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
            else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
            return h;
        }
        var U = {
            current: null
        };
        var V = {
            transition: null
        };
        var W = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: K
        };
        exports.Children = {
            map: S,
            forEach: function forEach(a, b, e) {
                S(a, function() {
                    b.apply(this, arguments);
                }, e);
            },
            count: function count(a) {
                var b = 0;
                S(a, function() {
                    b++;
                });
                return b;
            },
            toArray: function toArray(a) {
                return S(a, function(a2) {
                    return a2;
                }) || [];
            },
            only: function only(a) {
                if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                return a;
            }
        };
        exports.Component = E;
        exports.Fragment = p;
        exports.Profiler = r;
        exports.PureComponent = G;
        exports.StrictMode = q;
        exports.Suspense = w;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
        exports.cloneElement = function(a, b, e) {
            if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
            var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = K.current);
                void 0 !== b.key && (c = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) d.children = e;
            else if (1 < f) {
                g = Array(f);
                for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                d.children = g;
            }
            return {
                $$typeof: l,
                type: a.type,
                key: c,
                ref: k,
                props: d,
                _owner: h
            };
        };
        exports.createContext = function(a) {
            a = {
                $$typeof: u,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            a.Provider = {
                $$typeof: t,
                _context: a
            };
            return a.Consumer = a;
        };
        exports.createElement = M;
        exports.createFactory = function(a) {
            var b = M.bind(null, a);
            b.type = a;
            return b;
        };
        exports.createRef = function() {
            return {
                current: null
            };
        };
        exports.forwardRef = function(a) {
            return {
                $$typeof: v,
                render: a
            };
        };
        exports.isValidElement = O;
        exports.lazy = function(a) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: T
            };
        };
        exports.memo = function(a, b) {
            return {
                $$typeof: x,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        exports.startTransition = function(a) {
            var b = V.transition;
            V.transition = {};
            try {
                a();
            } finally{
                V.transition = b;
            }
        };
        exports.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.");
        };
        exports.useCallback = function(a, b) {
            return U.current.useCallback(a, b);
        };
        exports.useContext = function(a) {
            return U.current.useContext(a);
        };
        exports.useDebugValue = function() {};
        exports.useDeferredValue = function(a) {
            return U.current.useDeferredValue(a);
        };
        exports.useEffect = function(a, b) {
            return U.current.useEffect(a, b);
        };
        exports.useId = function() {
            return U.current.useId();
        };
        exports.useImperativeHandle = function(a, b, e) {
            return U.current.useImperativeHandle(a, b, e);
        };
        exports.useInsertionEffect = function(a, b) {
            return U.current.useInsertionEffect(a, b);
        };
        exports.useLayoutEffect = function(a, b) {
            return U.current.useLayoutEffect(a, b);
        };
        exports.useMemo = function(a, b) {
            return U.current.useMemo(a, b);
        };
        exports.useReducer = function(a, b, e) {
            return U.current.useReducer(a, b, e);
        };
        exports.useRef = function(a) {
            return U.current.useRef(a);
        };
        exports.useState = function(a) {
            return U.current.useState(a);
        };
        exports.useSyncExternalStore = function(a, b, e) {
            return U.current.useSyncExternalStore(a, b, e);
        };
        exports.useTransition = function() {
            return U.current.useTransition();
        };
        exports.version = "18.2.0";
    }
});
// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js": function(exports, module2) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                var getIteratorFn = function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                };
                var setExtraStackFrame = function setExtraStackFrame(stack) {
                    {
                        currentExtraStackFrame = stack;
                    }
                };
                var warn = function warn(format) {
                    {
                        {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            printWarning("warn", format, args);
                        }
                    }
                };
                var error = function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                };
                var printWarning = function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                };
                var warnNoop = function warnNoop(publicInstance, callerName) {
                    {
                        var _constructor = publicInstance.constructor;
                        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                        var warningKey = componentName + "." + callerName;
                        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                            return;
                        }
                        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                    }
                };
                var Component = function Component(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                };
                var ComponentDummy = function ComponentDummy() {};
                var PureComponent2 = function PureComponent2(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                };
                var createRef2 = function createRef2() {
                    var refObject = {
                        current: null
                    };
                    {
                        Object.seal(refObject);
                    }
                    return refObject;
                };
                var isArray = function isArray(a) {
                    return isArrayImpl(a);
                };
                var typeName = function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                };
                var willCoercionThrow = function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                };
                var testStringCoercion = function testStringCoercion(value) {
                    return "" + value;
                };
                var checkKeyStringCoercion = function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                };
                var getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                };
                var getContextName = function getContextName(type) {
                    return type.displayName || "Context";
                };
                var hasValidRef = function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                };
                var hasValidKey = function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                };
                var defineKeyPropWarningGetter = function defineKeyPropWarningGetter(props, displayName) {
                    var warnAboutAccessingKey = function warnAboutAccessingKey() {
                        {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingKey.isReactWarning = true;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: true
                    });
                };
                var defineRefPropWarningGetter = function defineRefPropWarningGetter(props, displayName) {
                    var warnAboutAccessingRef = function warnAboutAccessingRef() {
                        {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, "ref", {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                };
                var warnIfStringRefCannotBeAutoConverted = function warnIfStringRefCannotBeAutoConverted(config) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                };
                var createElement2 = function createElement2(type, config, children) {
                    var propName;
                    var props = {};
                    var key = null;
                    var ref = null;
                    var self = null;
                    var source = null;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            {
                                warnIfStringRefCannotBeAutoConverted(config);
                            }
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        self = config.__self === void 0 ? null : config.__self;
                        source = config.__source === void 0 ? null : config.__source;
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        {
                            if (Object.freeze) {
                                Object.freeze(childArray);
                            }
                        }
                        props.children = childArray;
                    }
                    if (type && type.defaultProps) {
                        var defaultProps = type.defaultProps;
                        for(propName in defaultProps){
                            if (props[propName] === void 0) {
                                props[propName] = defaultProps[propName];
                            }
                        }
                    }
                    {
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                    }
                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                };
                var cloneAndReplaceKey = function cloneAndReplaceKey(oldElement, newKey) {
                    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                    return newElement;
                };
                var cloneElement = function cloneElement(element, config, children) {
                    if (element === null || element === void 0) {
                        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                    }
                    var propName;
                    var props = assign({}, element.props);
                    var key = element.key;
                    var ref = element.ref;
                    var self = element._self;
                    var source = element._source;
                    var owner = element._owner;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            owner = ReactCurrentOwner.current;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        var defaultProps;
                        if (element.type && element.type.defaultProps) {
                            defaultProps = element.type.defaultProps;
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                if (config[propName] === void 0 && defaultProps !== void 0) {
                                    props[propName] = defaultProps[propName];
                                } else {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        props.children = childArray;
                    }
                    return ReactElement(element.type, key, ref, self, source, owner, props);
                };
                var isValidElement = function isValidElement(object) {
                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                };
                var escape = function escape(key) {
                    var escapeRegex = /[=:]/g;
                    var escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    };
                    var escapedString = key.replace(escapeRegex, function(match) {
                        return escaperLookup[match];
                    });
                    return "$" + escapedString;
                };
                var escapeUserProvidedKey = function escapeUserProvidedKey(text) {
                    return text.replace(userProvidedKeyEscapeRegex, "$&/");
                };
                var getElementKey = function getElementKey(element, index) {
                    if (typeof element === "object" && element !== null && element.key != null) {
                        {
                            checkKeyStringCoercion(element.key);
                        }
                        return escape("" + element.key);
                    }
                    return index.toString(36);
                };
                var mapChildren = function mapChildren(children, func, context) {
                    if (children == null) {
                        return children;
                    }
                    var result = [];
                    var count = 0;
                    mapIntoArray(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    });
                    return result;
                };
                var countChildren = function countChildren(children) {
                    var n = 0;
                    mapChildren(children, function() {
                        n++;
                    });
                    return n;
                };
                var forEachChildren = function forEachChildren(children, forEachFunc, forEachContext) {
                    mapChildren(children, function() {
                        forEachFunc.apply(this, arguments);
                    }, forEachContext);
                };
                var toArray = function toArray(children) {
                    return mapChildren(children, function(child) {
                        return child;
                    }) || [];
                };
                var onlyChild = function onlyChild(children) {
                    if (!isValidElement(children)) {
                        throw new Error("React.Children.only expected to receive a single React element child.");
                    }
                    return children;
                };
                var createContext = function createContext(defaultValue) {
                    var context = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        // As a workaround to support multiple concurrent renderers, we categorize
                        // some renderers as primary and others as secondary. We only expect
                        // there to be two concurrent renderers at most: React Native (primary) and
                        // Fabric (secondary); React DOM (primary) and React ART (secondary).
                        // Secondary renderers store their context values on separate fields.
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        // Used to track how many concurrent renderers this context currently
                        // supports within in a single renderer. Such as parallel server rendering.
                        _threadCount: 0,
                        // These are circular
                        Provider: null,
                        Consumer: null,
                        // Add these to use same hidden class in VM as ServerContext
                        _defaultValue: null,
                        _globalName: null
                    };
                    context.Provider = {
                        $$typeof: REACT_PROVIDER_TYPE,
                        _context: context
                    };
                    var hasWarnedAboutUsingNestedContextConsumers = false;
                    var hasWarnedAboutUsingConsumerProvider = false;
                    var hasWarnedAboutDisplayNameOnConsumer = false;
                    {
                        var Consumer = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            _context: context
                        };
                        Object.defineProperties(Consumer, {
                            Provider: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingConsumerProvider) {
                                        hasWarnedAboutUsingConsumerProvider = true;
                                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                    }
                                    return context.Provider;
                                },
                                set: function set(_Provider) {
                                    context.Provider = _Provider;
                                }
                            },
                            _currentValue: {
                                get: function get() {
                                    return context._currentValue;
                                },
                                set: function set(_currentValue) {
                                    context._currentValue = _currentValue;
                                }
                            },
                            _currentValue2: {
                                get: function get() {
                                    return context._currentValue2;
                                },
                                set: function set(_currentValue2) {
                                    context._currentValue2 = _currentValue2;
                                }
                            },
                            _threadCount: {
                                get: function get() {
                                    return context._threadCount;
                                },
                                set: function set(_threadCount) {
                                    context._threadCount = _threadCount;
                                }
                            },
                            Consumer: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                                        hasWarnedAboutUsingNestedContextConsumers = true;
                                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                    }
                                    return context.Consumer;
                                }
                            },
                            displayName: {
                                get: function get() {
                                    return context.displayName;
                                },
                                set: function set(displayName) {
                                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                        hasWarnedAboutDisplayNameOnConsumer = true;
                                    }
                                }
                            }
                        });
                        context.Consumer = Consumer;
                    }
                    {
                        context._currentRenderer = null;
                        context._currentRenderer2 = null;
                    }
                    return context;
                };
                var lazyInitializer = function lazyInitializer(payload) {
                    if (payload._status === Uninitialized) {
                        var ctor = payload._result;
                        var thenable = ctor();
                        thenable.then(function(moduleObject2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var resolved = payload;
                                resolved._status = Resolved;
                                resolved._result = moduleObject2;
                            }
                        }, function(error2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var rejected = payload;
                                rejected._status = Rejected;
                                rejected._result = error2;
                            }
                        });
                        if (payload._status === Uninitialized) {
                            var pending = payload;
                            pending._status = Pending;
                            pending._result = thenable;
                        }
                    }
                    if (payload._status === Resolved) {
                        var moduleObject = payload._result;
                        {
                            if (moduleObject === void 0) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                            }
                        }
                        {
                            if (!("default" in moduleObject)) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                            }
                        }
                        return moduleObject.default;
                    } else {
                        throw payload._result;
                    }
                };
                var lazy = function lazy(ctor) {
                    var payload = {
                        // We use these fields to store the result.
                        _status: Uninitialized,
                        _result: ctor
                    };
                    var lazyType = {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: payload,
                        _init: lazyInitializer
                    };
                    {
                        var defaultProps;
                        var propTypes;
                        Object.defineProperties(lazyType, {
                            defaultProps: {
                                configurable: true,
                                get: function get() {
                                    return defaultProps;
                                },
                                set: function set(newDefaultProps) {
                                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    defaultProps = newDefaultProps;
                                    Object.defineProperty(lazyType, "defaultProps", {
                                        enumerable: true
                                    });
                                }
                            },
                            propTypes: {
                                configurable: true,
                                get: function get() {
                                    return propTypes;
                                },
                                set: function set(newPropTypes) {
                                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    propTypes = newPropTypes;
                                    Object.defineProperty(lazyType, "propTypes", {
                                        enumerable: true
                                    });
                                }
                            }
                        });
                    }
                    return lazyType;
                };
                var forwardRef = function forwardRef(render) {
                    {
                        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                            error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                        } else if (typeof render !== "function") {
                            error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _typeof(render));
                        } else {
                            if (render.length !== 0 && render.length !== 2) {
                                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                            }
                        }
                        if (render != null) {
                            if (render.defaultProps != null || render.propTypes != null) {
                                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                            }
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!render.name && !render.displayName) {
                                    render.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                };
                var isValidElementType = function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if (typeof type === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                };
                var memo6 = function memo6(type, compare) {
                    {
                        if (!isValidElementType(type)) {
                            error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _typeof(type));
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: compare === void 0 ? null : compare
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!type.name && !type.displayName) {
                                    type.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                };
                var resolveDispatcher = function resolveDispatcher() {
                    var dispatcher = ReactCurrentDispatcher.current;
                    {
                        if (dispatcher === null) {
                            error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                        }
                    }
                    return dispatcher;
                };
                var useContext = function useContext(Context) {
                    var dispatcher = resolveDispatcher();
                    {
                        if (Context._context !== void 0) {
                            var realContext = Context._context;
                            if (realContext.Consumer === Context) {
                                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                            } else if (realContext.Provider === Context) {
                                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                            }
                        }
                    }
                    return dispatcher.useContext(Context);
                };
                var useState5 = function useState5(initialState) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useState(initialState);
                };
                var useReducer = function useReducer(reducer, initialArg, init) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useReducer(reducer, initialArg, init);
                };
                var useRef5 = function useRef5(initialValue) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useRef(initialValue);
                };
                var useEffect5 = function useEffect5(create2, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useEffect(create2, deps);
                };
                var useInsertionEffect = function useInsertionEffect(create2, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useInsertionEffect(create2, deps);
                };
                var useLayoutEffect = function useLayoutEffect(create2, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useLayoutEffect(create2, deps);
                };
                var useCallback3 = function useCallback3(callback, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useCallback(callback, deps);
                };
                var useMemo = function useMemo(create2, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useMemo(create2, deps);
                };
                var useImperativeHandle = function useImperativeHandle(ref, create2, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useImperativeHandle(ref, create2, deps);
                };
                var useDebugValue = function useDebugValue(value, formatterFn) {
                    {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDebugValue(value, formatterFn);
                    }
                };
                var useTransition = function useTransition() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useTransition();
                };
                var useDeferredValue = function useDeferredValue(value) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useDeferredValue(value);
                };
                var useId = function useId() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useId();
                };
                var useSyncExternalStore = function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                };
                var disabledLog = function disabledLog() {};
                var disableLogs = function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                };
                var reenableLogs = function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                };
                var describeBuiltInComponentFrame = function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                };
                var describeNativeComponentFrame = function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher$1.current;
                        ReactCurrentDispatcher$1.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher$1.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                };
                var describeFunctionComponentFrame = function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                };
                var shouldConstruct = function shouldConstruct(Component2) {
                    var prototype = Component2.prototype;
                    return !!(prototype && prototype.isReactComponent);
                };
                var setCurrentlyValidatingElement = function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                };
                var checkPropTypes = function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _typeof(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                };
                var setCurrentlyValidatingElement$1 = function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            setExtraStackFrame(stack);
                        } else {
                            setExtraStackFrame(null);
                        }
                    }
                };
                var getDeclarationErrorAddendum = function getDeclarationErrorAddendum() {
                    if (ReactCurrentOwner.current) {
                        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                        if (name) {
                            return "\n\nCheck the render method of `" + name + "`.";
                        }
                    }
                    return "";
                };
                var getSourceInfoErrorAddendum = function getSourceInfoErrorAddendum(source) {
                    if (source !== void 0) {
                        var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                        var lineNumber = source.lineNumber;
                        return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                    }
                    return "";
                };
                var getSourceInfoErrorAddendumForProps = function getSourceInfoErrorAddendumForProps(elementProps) {
                    if (elementProps !== null && elementProps !== void 0) {
                        return getSourceInfoErrorAddendum(elementProps.__source);
                    }
                    return "";
                };
                var getCurrentComponentErrorInfo = function getCurrentComponentErrorInfo(parentType) {
                    var info = getDeclarationErrorAddendum();
                    if (!info) {
                        var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                        if (parentName) {
                            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                        }
                    }
                    return info;
                };
                var validateExplicitKey = function validateExplicitKey(element, parentType) {
                    if (!element._store || element._store.validated || element.key != null) {
                        return;
                    }
                    element._store.validated = true;
                    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                        return;
                    }
                    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                    var childOwner = "";
                    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                    }
                    {
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                };
                var validateChildKeys = function validateChildKeys(node, parentType) {
                    if (typeof node !== "object") {
                        return;
                    }
                    if (isArray(node)) {
                        for(var i = 0; i < node.length; i++){
                            var child = node[i];
                            if (isValidElement(child)) {
                                validateExplicitKey(child, parentType);
                            }
                        }
                    } else if (isValidElement(node)) {
                        if (node._store) {
                            node._store.validated = true;
                        }
                    } else if (node) {
                        var iteratorFn = getIteratorFn(node);
                        if (typeof iteratorFn === "function") {
                            if (iteratorFn !== node.entries) {
                                var iterator = iteratorFn.call(node);
                                var step;
                                while(!(step = iterator.next()).done){
                                    if (isValidElement(step.value)) {
                                        validateExplicitKey(step.value, parentType);
                                    }
                                }
                            }
                        }
                    }
                };
                var validatePropTypes = function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                };
                var validateFragmentProps = function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                };
                var createElementWithValidation = function createElementWithValidation(type, props, children) {
                    var validType = isValidElementType(type);
                    if (!validType) {
                        var info = "";
                        if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                        }
                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                        if (sourceInfo) {
                            info += sourceInfo;
                        } else {
                            info += getDeclarationErrorAddendum();
                        }
                        var typeString;
                        if (type === null) {
                            typeString = "null";
                        } else if (isArray(type)) {
                            typeString = "array";
                        } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                            info = " Did you accidentally export a JSX literal instead of a component?";
                        } else {
                            typeString = typeof type === "undefined" ? "undefined" : _typeof(type);
                        }
                        {
                            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                    }
                    var element = createElement2.apply(this, arguments);
                    if (element == null) {
                        return element;
                    }
                    if (validType) {
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], type);
                        }
                    }
                    if (type === REACT_FRAGMENT_TYPE) {
                        validateFragmentProps(element);
                    } else {
                        validatePropTypes(element);
                    }
                    return element;
                };
                var createFactoryWithValidation = function createFactoryWithValidation(type) {
                    var validatedFactory = createElementWithValidation.bind(null, type);
                    validatedFactory.type = type;
                    {
                        if (!didWarnAboutDeprecatedCreateFactory) {
                            didWarnAboutDeprecatedCreateFactory = true;
                            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                        }
                        Object.defineProperty(validatedFactory, "type", {
                            enumerable: false,
                            get: function get() {
                                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                Object.defineProperty(this, "type", {
                                    value: type
                                });
                                return type;
                            }
                        });
                    }
                    return validatedFactory;
                };
                var cloneElementWithValidation = function cloneElementWithValidation(element, props, children) {
                    var newElement = cloneElement.apply(this, arguments);
                    for(var i = 2; i < arguments.length; i++){
                        validateChildKeys(arguments[i], newElement.type);
                    }
                    validatePropTypes(newElement);
                    return newElement;
                };
                var startTransition = function startTransition(scope, options) {
                    var prevTransition = ReactCurrentBatchConfig.transition;
                    ReactCurrentBatchConfig.transition = {};
                    var currentTransition = ReactCurrentBatchConfig.transition;
                    {
                        ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                    }
                    try {
                        scope();
                    } finally{
                        ReactCurrentBatchConfig.transition = prevTransition;
                        {
                            if (prevTransition === null && currentTransition._updatedFibers) {
                                var updatedFibersCount = currentTransition._updatedFibers.size;
                                if (updatedFibersCount > 10) {
                                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                                }
                                currentTransition._updatedFibers.clear();
                            }
                        }
                    }
                };
                var enqueueTask = function enqueueTask(task) {
                    if (enqueueTaskImpl === null) {
                        try {
                            var requireString = ("require" + Math.random()).slice(0, 7);
                            var nodeRequire = module2 && module2[requireString];
                            enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
                        } catch (_err) {
                            enqueueTaskImpl = function enqueueTaskImpl(callback) {
                                {
                                    if (didWarnAboutMessageChannel === false) {
                                        didWarnAboutMessageChannel = true;
                                        if (typeof MessageChannel === "undefined") {
                                            error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                                        }
                                    }
                                }
                                var channel = new MessageChannel();
                                channel.port1.onmessage = callback;
                                channel.port2.postMessage(void 0);
                            };
                        }
                    }
                    return enqueueTaskImpl(task);
                };
                var act = function act(callback) {
                    {
                        var prevActScopeDepth = actScopeDepth;
                        actScopeDepth++;
                        if (ReactCurrentActQueue.current === null) {
                            ReactCurrentActQueue.current = [];
                        }
                        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                        var result;
                        try {
                            ReactCurrentActQueue.isBatchingLegacy = true;
                            result = callback();
                            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                var queue = ReactCurrentActQueue.current;
                                if (queue !== null) {
                                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                    flushActQueue(queue);
                                }
                            }
                        } catch (error2) {
                            popActScope(prevActScopeDepth);
                            throw error2;
                        } finally{
                            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                        }
                        if (result !== null && typeof result === "object" && typeof result.then === "function") {
                            var thenableResult = result;
                            var wasAwaited = false;
                            var thenable = {
                                then: function then(resolve, reject) {
                                    wasAwaited = true;
                                    thenableResult.then(function(returnValue2) {
                                        popActScope(prevActScopeDepth);
                                        if (actScopeDepth === 0) {
                                            recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                        } else {
                                            resolve(returnValue2);
                                        }
                                    }, function(error2) {
                                        popActScope(prevActScopeDepth);
                                        reject(error2);
                                    });
                                }
                            };
                            {
                                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                    Promise.resolve().then(function() {}).then(function() {
                                        if (!wasAwaited) {
                                            didWarnNoAwaitAct = true;
                                            error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                                        }
                                    });
                                }
                            }
                            return thenable;
                        } else {
                            var returnValue = result;
                            popActScope(prevActScopeDepth);
                            if (actScopeDepth === 0) {
                                var _queue = ReactCurrentActQueue.current;
                                if (_queue !== null) {
                                    flushActQueue(_queue);
                                    ReactCurrentActQueue.current = null;
                                }
                                var _thenable = {
                                    then: function then(resolve, reject) {
                                        if (ReactCurrentActQueue.current === null) {
                                            ReactCurrentActQueue.current = [];
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        } else {
                                            resolve(returnValue);
                                        }
                                    }
                                };
                                return _thenable;
                            } else {
                                var _thenable2 = {
                                    then: function then(resolve, reject) {
                                        resolve(returnValue);
                                    }
                                };
                                return _thenable2;
                            }
                        }
                    }
                };
                var popActScope = function popActScope(prevActScopeDepth) {
                    {
                        if (prevActScopeDepth !== actScopeDepth - 1) {
                            error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                        }
                        actScopeDepth = prevActScopeDepth;
                    }
                };
                var flushActQueue = function flushActQueue(queue) {
                    {
                        if (!isFlushing) {
                            isFlushing = true;
                            var i = 0;
                            try {
                                for(; i < queue.length; i++){
                                    var callback = queue[i];
                                    do {
                                        callback = callback(true);
                                    }while (callback !== null);
                                }
                                queue.length = 0;
                            } catch (error2) {
                                queue = queue.slice(i + 1);
                                throw error2;
                            } finally{
                                isFlushing = false;
                            }
                        }
                    }
                };
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                }
                var ReactVersion = "18.2.0";
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                var ReactCurrentDispatcher = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactCurrentBatchConfig = {
                    transition: null
                };
                var ReactCurrentActQueue = {
                    current: null,
                    // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                    isBatchingLegacy: false,
                    didScheduleLegacyUpdate: false
                };
                var ReactCurrentOwner = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactDebugCurrentFrame = {};
                var currentExtraStackFrame = null;
                {
                    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    };
                    ReactDebugCurrentFrame.getCurrentStack = null;
                    ReactDebugCurrentFrame.getStackAddendum = function() {
                        var stack = "";
                        if (currentExtraStackFrame) {
                            stack += currentExtraStackFrame;
                        }
                        var impl = ReactDebugCurrentFrame.getCurrentStack;
                        if (impl) {
                            stack += impl() || "";
                        }
                        return stack;
                    };
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var ReactSharedInternals = {
                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                    ReactCurrentOwner: ReactCurrentOwner
                };
                {
                    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                }
                var didWarnStateUpdateForUnmountedComponent = {};
                var ReactNoopUpdateQueue = {
                    /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */ isMounted: function isMounted(publicInstance) {
                        return false;
                    },
                    /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */ enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                        warnNoop(publicInstance, "setState");
                    }
                };
                var assign = Object.assign;
                var emptyObject = {};
                {
                    Object.freeze(emptyObject);
                }
                Component.prototype.isReactComponent = {};
                Component.prototype.setState = function(partialState, callback) {
                    if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
                        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    }
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                {
                    var deprecatedAPIs = {
                        isMounted: [
                            "isMounted",
                            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                        ],
                        replaceState: [
                            "replaceState",
                            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                        ]
                    };
                    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                        Object.defineProperty(Component.prototype, methodName, {
                            get: function get() {
                                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                return void 0;
                            }
                        });
                    };
                    for(var fnName in deprecatedAPIs){
                        if (deprecatedAPIs.hasOwnProperty(fnName)) {
                            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                        }
                    }
                }
                ComponentDummy.prototype = Component.prototype;
                var pureComponentPrototype = PureComponent2.prototype = new ComponentDummy();
                pureComponentPrototype.constructor = PureComponent2;
                assign(pureComponentPrototype, Component.prototype);
                pureComponentPrototype.isPureReactComponent = true;
                var isArrayImpl = Array.isArray;
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                var SEPARATOR = ".";
                var SUBSEPARATOR = ":";
                var didWarnAboutMaps = false;
                var userProvidedKeyEscapeRegex = /\/+/g;
                function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                    var type = typeof children === "undefined" ? "undefined" : _typeof(children);
                    if (type === "undefined" || type === "boolean") {
                        children = null;
                    }
                    var invokeCallback = false;
                    if (children === null) {
                        invokeCallback = true;
                    } else {
                        switch(type){
                            case "string":
                            case "number":
                                invokeCallback = true;
                                break;
                            case "object":
                                switch(children.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                    case REACT_PORTAL_TYPE:
                                        invokeCallback = true;
                                }
                        }
                    }
                    if (invokeCallback) {
                        var _child = children;
                        var mappedChild = callback(_child);
                        var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                        if (isArray(mappedChild)) {
                            var escapedChildKey = "";
                            if (childKey != null) {
                                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                            }
                            mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                return c;
                            });
                        } else if (mappedChild != null) {
                            if (isValidElement(mappedChild)) {
                                {
                                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                        checkKeyStringCoercion(mappedChild.key);
                                    }
                                }
                                mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                                // traverseAllChildren used to do for objects as children
                                escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                // eslint-disable-next-line react-internal/safe-string-coercion
                                escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                            }
                            array.push(mappedChild);
                        }
                        return 1;
                    }
                    var child;
                    var nextName;
                    var subtreeCount = 0;
                    var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++){
                            child = children[i];
                            nextName = nextNamePrefix + getElementKey(child, i);
                            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                        }
                    } else {
                        var iteratorFn = getIteratorFn(children);
                        if (typeof iteratorFn === "function") {
                            var iterableChildren = children;
                            {
                                if (iteratorFn === iterableChildren.entries) {
                                    if (!didWarnAboutMaps) {
                                        warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                    }
                                    didWarnAboutMaps = true;
                                }
                            }
                            var iterator = iteratorFn.call(iterableChildren);
                            var step;
                            var ii = 0;
                            while(!(step = iterator.next()).done){
                                child = step.value;
                                nextName = nextNamePrefix + getElementKey(child, ii++);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else if (type === "object") {
                            var childrenString = String(children);
                            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                        }
                    }
                    return subtreeCount;
                }
                var Uninitialized = -1;
                var Pending = 0;
                var Resolved = 1;
                var Rejected = 2;
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                disabledLog.__reactDisabledLog = true;
                var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                var ownerHasKeyUseWarning = {};
                var didWarnAboutDeprecatedCreateFactory = false;
                var didWarnAboutMessageChannel = false;
                var enqueueTaskImpl = null;
                var actScopeDepth = 0;
                var didWarnNoAwaitAct = false;
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    {
                        var queue = ReactCurrentActQueue.current;
                        if (queue !== null) {
                            try {
                                flushActQueue(queue);
                                enqueueTask(function() {
                                    if (queue.length === 0) {
                                        ReactCurrentActQueue.current = null;
                                        resolve(returnValue);
                                    } else {
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    }
                                });
                            } catch (error2) {
                                reject(error2);
                            }
                        } else {
                            resolve(returnValue);
                        }
                    }
                }
                var isFlushing = false;
                var createElement$1 = createElementWithValidation;
                var cloneElement$1 = cloneElementWithValidation;
                var createFactory = createFactoryWithValidation;
                var Children = {
                    map: mapChildren,
                    forEach: forEachChildren,
                    count: countChildren,
                    toArray: toArray,
                    only: onlyChild
                };
                exports.Children = Children;
                exports.Component = Component;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.Profiler = REACT_PROFILER_TYPE;
                exports.PureComponent = PureComponent2;
                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                exports.Suspense = REACT_SUSPENSE_TYPE;
                exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                exports.cloneElement = cloneElement$1;
                exports.createContext = createContext;
                exports.createElement = createElement$1;
                exports.createFactory = createFactory;
                exports.createRef = createRef2;
                exports.forwardRef = forwardRef;
                exports.isValidElement = isValidElement;
                exports.lazy = lazy;
                exports.memo = memo6;
                exports.startTransition = startTransition;
                exports.unstable_act = act;
                exports.useCallback = useCallback3;
                exports.useContext = useContext;
                exports.useDebugValue = useDebugValue;
                exports.useDeferredValue = useDeferredValue;
                exports.useEffect = useEffect5;
                exports.useId = useId;
                exports.useImperativeHandle = useImperativeHandle;
                exports.useInsertionEffect = useInsertionEffect;
                exports.useLayoutEffect = useLayoutEffect;
                exports.useMemo = useMemo;
                exports.useReducer = useReducer;
                exports.useRef = useRef5;
                exports.useState = useState5;
                exports.useSyncExternalStore = useSyncExternalStore;
                exports.useTransition = useTransition;
                exports.version = ReactVersion;
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                }
            })();
        }
    }
});
// node_modules/react/index.js
var require_react = __commonJS({
    "node_modules/react/index.js": function(exports, module2) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module2.exports = require_react_production_min();
        } else {
            module2.exports = require_react_development();
        }
    }
});
// src/index.tsx
var src_exports = {};
__export(src_exports, {
    ERROR_TYPE: function() {
        return ERROR_TYPE;
    },
    STATUS: function() {
        return STATUS;
    },
    TYPE: function() {
        return TYPE;
    },
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
var import_react23 = __toESM(require_react());
var import_deep_equal = __toESM(require("@gilbarbara/deep-equal"));
var import_memoize_one = __toESM(require("memoize-one"));
// src/components/Actions.tsx
var import_react2 = __toESM(require_react());
// src/modules/styled.tsx
var import_react = __toESM(require_react());
var import_nano_css = require("nano-css");
var import_jsx = require("nano-css/addon/jsx.js");
var import_keyframes = require("nano-css/addon/keyframes.js");
var import_nesting = require("nano-css/addon/nesting.js");
var import_rule = require("nano-css/addon/rule.js");
var import_style = require("nano-css/addon/style.js");
var import_styled = require("nano-css/addon/styled.js");
var import_nano_css2 = require("nano-css");
var nano = (0, import_nano_css.create)({
    h: import_react.createElement
});
(0, import_rule.addon)(nano);
(0, import_keyframes.addon)(nano);
(0, import_jsx.addon)(nano);
(0, import_style.addon)(nano);
(0, import_styled.addon)(nano);
(0, import_nesting.addon)(nano);
var keyframes = nano.keyframes, put = nano.put, styled = nano.styled;
var px = function(value) {
    return typeof value === "number" ? "".concat(value, "px") : value;
};
// src/components/Actions.tsx
var Wrapper = styled("div")({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    "pointer-events": "none"
}, function(param) {
    var style = param.style;
    var styles = {
        bottom: 0,
        position: "absolute",
        right: 0,
        width: "auto"
    };
    if (style.layout === "responsive") {
        styles = {
            "@media (max-width: 767px)": styles,
            "@media (min-width: 768px)": {
                height: px(style.h)
            }
        };
    }
    return _objectSpread({
        height: px(32)
    }, styles);
}, "ActionsRSWP");
function Actions(props) {
    var children = props.children, layout = props.layout, styles = props.styles;
    return /* @__PURE__ */ import_react2.default.createElement(Wrapper, {
        "data-component-name": "Actions",
        style: {
            h: styles.height,
            layout: layout
        }
    }, children);
}
var Actions_default = (0, import_react2.memo)(Actions);
// src/components/Controls.tsx
var import_react4 = __toESM(require_react());
// src/components/Slider.tsx
var import_react3 = __toESM(require_react());
var import_react_range_slider = __toESM(require("@gilbarbara/react-range-slider"));
// src/modules/helpers.ts
function convertTrack(track) {
    var album = track.album, artists = track.artists, duration_ms = track.duration_ms, id = track.id, name = track.name, uri = track.uri;
    return {
        artists: artists,
        durationMs: duration_ms,
        id: id !== null && id !== void 0 ? id : "",
        image: getAlbumImage(album),
        name: name,
        uri: uri
    };
}
function getAlbumImage(album) {
    var _Math;
    var _album_images_find;
    var maxWidth = (_Math = Math).max.apply(_Math, _toConsumableArray(album.images.map(function(d) {
        return d.width || 0;
    })));
    return ((_album_images_find = album.images.find(function(d) {
        return d.width === maxWidth;
    })) === null || _album_images_find === void 0 ? void 0 : _album_images_find.url) || "";
}
function isNumber(value) {
    return typeof value === "number";
}
function loadSpotifyPlayer() {
    return new Promise(function(resolve, reject) {
        var scriptTag = document.getElementById("spotify-player");
        if (!scriptTag) {
            var script = document.createElement("script");
            script.id = "spotify-player";
            script.type = "text/javascript";
            script.async = false;
            script.defer = true;
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.onload = function() {
                return resolve();
            };
            script.onerror = function(error) {
                return reject(new Error("loadScript: ".concat(error.message)));
            };
            document.head.appendChild(script);
        } else {
            resolve();
        }
    });
}
function millisecondsToTime(input) {
    var seconds = Math.floor(input / 1e3 % 60);
    var minutes = Math.floor(input / (1e3 * 60) % 60);
    var hours = Math.floor(input / (1e3 * 60 * 60) % 24);
    var parts = [];
    if (hours > 0) {
        parts.push("".concat(hours).padStart(2, "0"), "".concat(minutes).padStart(2, "0"), "".concat(seconds).padStart(2, "0"));
    } else {
        parts.push("".concat(minutes), "".concat(seconds).padStart(2, "0"));
    }
    return parts.join(":");
}
function parseVolume(value) {
    if (!isNumber(value)) {
        return 1;
    }
    if (value > 1) {
        return value / 100;
    }
    return value;
}
function round(number) {
    var digits = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    var factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
}
function validateURI(input) {
    var validTypes = [
        "album",
        "artist",
        "playlist",
        "show",
        "track"
    ];
    if (input && input.indexOf(":") > -1) {
        var _input_split = _slicedToArray(input.split(":"), 3), key = _input_split[0], type = _input_split[1], id = _input_split[2];
        if (key === "spotify" && validTypes.indexOf(type) >= 0 && id.length === 22) {
            return true;
        }
    }
    return false;
}
// src/components/Slider.tsx
var Wrapper2 = styled("div")({
    alignItems: "center",
    display: "flex",
    fontSize: px(12),
    transition: "height 0.3s",
    zIndex: 10
}, function(param) {
    var style = param.style;
    return {
        '[class^="rswp_"]': {
            color: style.c,
            lineHeight: 1,
            minWidth: px(32)
        },
        ".rswp_progress": {
            textAlign: "right"
        },
        ".rswp_duration": {
            textAlign: "left"
        }
    };
}, "SliderRSWP");
function Slider(props) {
    var durationMs = props.durationMs, isMagnified = props.isMagnified, onChangeRange = props.onChangeRange, onToggleMagnify = props.onToggleMagnify, position = props.position, progressMs = props.progressMs, styles = props.styles;
    var handleChangeRange = function() {
        var _ref = _asyncToGenerator(function(param) {
            var x;
            return __generator(this, function(_state) {
                x = param.x;
                onChangeRange(x);
                return [
                    2
                ];
            });
        });
        return function handleChangeRange(_) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleSize = styles.sliderHeight + 6;
    return /* @__PURE__ */ import_react3.default.createElement(Wrapper2, {
        "data-component-name": "Slider",
        "data-position": position,
        onMouseEnter: onToggleMagnify,
        onMouseLeave: onToggleMagnify,
        style: {
            c: styles.color,
            sliderHeight: styles.sliderHeight
        }
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "rswp_progress",
        style: {
            fontFamily: styles.sliderDurationFontFamily,
            fontSize: styles.sliderDurationFontSize
        }
    }, millisecondsToTime(progressMs)), /* @__PURE__ */ import_react3.default.createElement(import_react_range_slider.default, {
        axis: "x",
        className: "slider",
        "data-component-name": "progress-bar",
        onChange: handleChangeRange,
        styles: {
            options: {
                thumbBorder: 0,
                thumbBorderRadius: styles.sliderHandleBorderRadius,
                thumbColor: styles.sliderHandleColor,
                thumbSize: isMagnified ? handleSize + 4 : handleSize,
                height: isMagnified ? styles.sliderHeight + 4 : styles.sliderHeight,
                padding: "0px 13px",
                rangeColor: styles.sliderColor,
                trackBorderRadius: styles.sliderTrackBorderRadius,
                trackColor: styles.sliderTrackColor,
                width: "100%"
            }
        },
        x: position,
        xMax: 100,
        xMin: 0,
        xStep: 0.1
    }), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "rswp_duration",
        style: {
            fontFamily: styles.sliderDurationFontFamily,
            fontSize: styles.sliderDurationFontSize
        }
    }, millisecondsToTime(durationMs)));
}
var Slider_default = (0, import_react3.memo)(Slider);
// src/components/Controls.tsx
function Controls(props) {
    var // devices,
    durationMs = props.durationMs, // isExternalDevice,
    isMagnified = props.isMagnified, // isPlaying,
    // layout,
    // locale,
    // nextTracks,
    onChangeRange = props.onChangeRange, // onClickNext,
    // onClickPrevious,
    // onClickTogglePlay,
    onToggleMagnify = props.onToggleMagnify, position = props.position, // previousTracks,
    progressMs = props.progressMs, styles = props.styles;
    return /* @__PURE__ */ import_react4.default.createElement("div", {
        style: {
            width: "100%"
        }
    }, /* @__PURE__ */ import_react4.default.createElement(Slider_default, {
        durationMs: durationMs,
        isMagnified: isMagnified,
        onChangeRange: onChangeRange,
        onToggleMagnify: onToggleMagnify,
        position: position,
        progressMs: progressMs,
        styles: styles
    }));
}
var Controls_default = (0, import_react4.memo)(Controls);
{}// src/components/Devices.tsx
var import_react10 = __toESM(require_react());
// src/components/ClickOutside.tsx
var import_react5 = __toESM(require_react());
function ClickOutside(props) {
    var children = props.children, isActive = props.isActive, onClick = props.onClick, rest = _objectWithoutProperties(props, [
        "children",
        "isActive",
        "onClick"
    ]);
    var containerRef = (0, import_react5.useRef)(null);
    var isTouch = (0, import_react5.useRef)(false);
    var handleClick = (0, import_react5.useRef)(function(event) {
        var container = containerRef.current;
        if (event.type === "touchend") {
            isTouch.current = true;
        }
        if (event.type === "click" && isTouch.current) {
            return;
        }
        if (container && !container.contains(event.target)) {
            onClick();
        }
    });
    (0, import_react5.useEffect)(function() {
        var current = handleClick.current;
        if (isActive) {
            document.addEventListener("touchend", current, true);
            document.addEventListener("click", current, true);
        }
        return function() {
            document.removeEventListener("touchend", current, true);
            document.removeEventListener("click", current, true);
        };
    }, [
        isActive
    ]);
    return /* @__PURE__ */ import_react5.default.createElement("div", _objectSpread({
        ref: containerRef
    }, rest), children);
}
var ClickOutside_default = (0, import_react5.memo)(ClickOutside);
// src/components/icons/Devices.tsx
var import_react6 = __toESM(require_react());
function DevicesIcon(props) {
    return /* @__PURE__ */ import_react6.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react6.default.createElement("path", {
        d: "M57 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H31a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26ZM16 54v6H8v-6h8Zm41-44H31a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM44 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM16 4v6H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h9v6H7a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h9Zm28 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        fill: "currentColor"
    }));
}
// src/components/icons/DevicesComputer.tsx
var import_react7 = __toESM(require_react());
function DevicesComputerIcon(props) {
    return /* @__PURE__ */ import_react7.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react7.default.createElement("path", {
        d: "M7.226 10.323a7.228 7.228 0 0 1 7.226-7.226h35.096a7.228 7.228 0 0 1 7.226 7.226V37.16a7.226 7.226 0 0 1-7.226 7.226H14.452a7.226 7.226 0 0 1-7.226-7.226V10.323Zm7.226-1.033c-.57 0-1.033.462-1.033 1.033V37.16c0 .57.463 1.033 1.033 1.033h35.096c.57 0 1.033-.463 1.033-1.033V10.323c0-.57-.463-1.033-1.033-1.033H14.452ZM0 57.806a3.097 3.097 0 0 1 3.097-3.096h57.806a3.097 3.097 0 0 1 0 6.193H3.097A3.097 3.097 0 0 1 0 57.806Z",
        fill: "currentColor"
    }));
}
// src/components/icons/DevicesMobile.tsx
var import_react8 = __toESM(require_react());
function DevicesMobileIcon(props) {
    return /* @__PURE__ */ import_react8.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react8.default.createElement("path", {
        d: "M44.8 0a9.6 9.6 0 0 1 9.6 9.6v44.8a9.6 9.6 0 0 1-9.6 9.6H19.2a9.6 9.6 0 0 1-9.6-9.6V9.6A9.6 9.6 0 0 1 19.2 0h25.6Zm0 6.4H19.2A3.2 3.2 0 0 0 16 9.6v44.8a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V9.6a3.2 3.2 0 0 0-3.2-3.2ZM32 43.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        fill: "currentColor"
    }));
}
// src/components/icons/DevicesSpeaker.tsx
var import_react9 = __toESM(require_react());
function DevicesSpeakerIcon(props) {
    return /* @__PURE__ */ import_react9.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react9.default.createElement("path", {
        d: "M45 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26Zm0 6H19a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM32 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0-16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        fill: "currentColor"
    }));
}
// src/components/Devices.tsx
var Wrapper3 = styled("div")({
    "pointer-events": "all",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 20,
    "> div": {
        backgroundColor: "#000",
        borderRadius: px(8),
        color: "#fff",
        filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
        fontSize: px(14),
        padding: px(16),
        position: "absolute",
        textAlign: "left",
        "> p": {
            fontWeight: "bold",
            marginBottom: px(8),
            marginTop: px(16),
            whiteSpace: "nowrap"
        },
        button: {
            alignItems: "center",
            display: "flex",
            whiteSpace: "nowrap",
            "&:not(:last-of-type)": {
                marginBottom: px(12)
            },
            span: {
                display: "inline-block",
                marginLeft: px(4)
            }
        },
        "> span": {
            background: "transparent",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            content: '""',
            display: "block",
            height: 0,
            position: "absolute",
            width: 0
        }
    },
    "> button": {
        alignItems: "center",
        display: "flex",
        fontSize: px(24),
        height: px(32),
        justifyContent: "center",
        width: px(32)
    }
}, function(param) {
    var style = param.style;
    var isCompact = style.layout === "compact";
    var _obj;
    var divStyles = isCompact ? {
        bottom: "120%",
        left: 0
    } : (_obj = {}, _defineProperty(_obj, style.p, "120%"), _defineProperty(_obj, "left", 0), _defineProperty(_obj, "@media (min-width: 768px)", {
        left: "auto",
        right: 0
    }), _obj);
    var _obj1;
    var spanStyles = isCompact ? {
        bottom: "-".concat(px(6)),
        borderTop: "6px solid #000",
        left: px(10)
    } : (_obj1 = {}, _defineProperty(_obj1, style.p === "top" ? "border-bottom" : "border-top", "6px solid #000"), _defineProperty(_obj1, style.p, "-6px"), _defineProperty(_obj1, "left", px(10)), _defineProperty(_obj1, "@media (min-width: 768px)", {
        left: "auto",
        right: px(10)
    }), _obj1);
    return {
        "> button": {
            color: style.c
        },
        "> div": _objectSpreadProps(_objectSpread({}, divStyles), {
            "> span": spanStyles
        })
    };
}, "DevicesRSWP");
var ListHeader = styled("div")({
    p: {
        whiteSpace: "nowrap",
        "&:nth-of-type(1)": {
            fontWeight: "bold",
            marginBottom: px(8)
        },
        "&:nth-of-type(2)": {
            alignItems: "center",
            display: "flex",
            span: {
                display: "inline-block",
                marginLeft: px(4)
            }
        }
    }
});
function getDeviceIcon(type) {
    if (type.toLowerCase().includes("speaker")) {
        return /* @__PURE__ */ import_react10.default.createElement(DevicesSpeakerIcon, null);
    }
    if (type.toLowerCase().includes("computer")) {
        return /* @__PURE__ */ import_react10.default.createElement(DevicesComputerIcon, null);
    }
    return /* @__PURE__ */ import_react10.default.createElement(DevicesMobileIcon, null);
}
function Devices(props) {
    var currentDeviceId = props.currentDeviceId, deviceId = props.deviceId, devices = props.devices, layout = props.layout, locale = props.locale, onClickDevice = props.onClickDevice, open = props.open, playerPosition = props.playerPosition, color = props.styles.color;
    var _ref = _slicedToArray((0, import_react10.useState)(open), 2), isOpen = _ref[0], setOpen = _ref[1];
    var handleClickSetDevice = function(event) {
        var dataset = event.currentTarget.dataset;
        if (dataset.id) {
            onClickDevice(dataset.id);
            setOpen(false);
        }
    };
    var handleClickToggleList = (0, import_react10.useCallback)(function() {
        setOpen(function(s) {
            return !s;
        });
    }, []);
    var _devices_reduce = devices.reduce(function(acc, device) {
        if (device.id === currentDeviceId) {
            acc.currentDevice = device;
        } else {
            acc.otherDevices.push(device);
        }
        return acc;
    }, {
        currentDevice: null,
        otherDevices: []
    }), currentDevice = _devices_reduce.currentDevice, otherDevices = _devices_reduce.otherDevices;
    var icon = /* @__PURE__ */ import_react10.default.createElement(DevicesIcon, null);
    if (deviceId && currentDevice && currentDevice.id !== deviceId) {
        icon = getDeviceIcon(currentDevice.type);
    }
    return /* @__PURE__ */ import_react10.default.createElement(ClickOutside_default, {
        isActive: isOpen,
        onClick: handleClickToggleList
    }, /* @__PURE__ */ import_react10.default.createElement(Wrapper3, {
        "data-component-name": "Devices",
        "data-device-id": currentDeviceId,
        style: {
            c: color,
            layout: layout,
            p: playerPosition
        }
    }, !!devices.length && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, isOpen && /* @__PURE__ */ import_react10.default.createElement("div", null, currentDevice && /* @__PURE__ */ import_react10.default.createElement(ListHeader, null, /* @__PURE__ */ import_react10.default.createElement("p", null, locale.currentDevice), /* @__PURE__ */ import_react10.default.createElement("p", null, getDeviceIcon(currentDevice.type), /* @__PURE__ */ import_react10.default.createElement("span", null, currentDevice.name))), !!otherDevices.length && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("p", null, locale.otherDevices), otherDevices.map(function(device) {
        return /* @__PURE__ */ import_react10.default.createElement("button", {
            key: device.id,
            "aria-label": device.name,
            "data-id": device.id,
            onClick: handleClickSetDevice,
            type: "button"
        }, getDeviceIcon(device.type), /* @__PURE__ */ import_react10.default.createElement("span", null, device.name));
    })), /* @__PURE__ */ import_react10.default.createElement("span", null)), /* @__PURE__ */ import_react10.default.createElement("button", {
        "aria-label": locale.devices,
        onClick: handleClickToggleList,
        title: locale.devices,
        type: "button"
    }, icon))));
}
// src/components/ErrorMessage.tsx
var import_react11 = __toESM(require_react());
var Wrapper4 = styled("div")({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
}, function(param) {
    var style = param.style;
    return {
        backgroundColor: style.bgColor,
        borderTop: "1px solid ".concat(style.errorColor),
        color: style.errorColor,
        height: px(style.h)
    };
}, "ErrorRSWP");
function ErrorMessage(param) {
    var children = param.children, _param_styles = param.styles, bgColor = _param_styles.bgColor, errorColor = _param_styles.errorColor, height = _param_styles.height;
    return /* @__PURE__ */ import_react11.default.createElement(Wrapper4, {
        "data-component-name": "ErrorMessage",
        style: {
            bgColor: bgColor,
            errorColor: errorColor,
            h: height
        }
    }, children);
}
// src/components/Info.tsx
var import_react16 = __toESM(require_react());
var import_colorizr2 = require("colorizr");
// src/components/icons/Favorite.tsx
var import_react12 = __toESM(require_react());
function Favorite(props) {
    return /* @__PURE__ */ import_react12.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react12.default.createElement("path", {
        d: "M63.673 16.52A17.676 17.676 0 0 0 49.197 2.563c-5.4-.861-10.891.852-14.844 4.63a3.43 3.43 0 0 1-4.672 0C22.956.689 12.305.62 5.498 7.039c-6.808 6.419-7.366 17.055-1.268 24.15l24.246 28.894a4.623 4.623 0 0 0 7.078 0L59.8 31.19a17.328 17.328 0 0 0 3.873-14.66v-.008Z",
        fill: "currentColor"
    }));
}
// src/components/icons/FavoriteOutline.tsx
var import_react13 = __toESM(require_react());
function FavoriteOutline(props) {
    return /* @__PURE__ */ import_react13.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react13.default.createElement("path", {
        d: "M5.944 7.206C13.271.3 24.723.34 31.999 7.3A18.924 18.924 0 0 1 48.02 2.32h.008a19.068 19.068 0 0 1 15.617 15.071v.013A18.759 18.759 0 0 1 59.47 33.26L37.573 59.353a7.288 7.288 0 0 1-8.642 1.916 7.276 7.276 0 0 1-2.498-1.912l-21.901-26.1c-6.55-7.671-5.93-19.131 1.408-26.051h.004Zm13.04 1.04a12.726 12.726 0 0 0-9.737 20.997l.021.02 21.905 26.105c.316.372.84.488 1.284.285.143-.066.27-.164.372-.285l21.934-26.137a12.565 12.565 0 0 0 2.808-10.625 12.875 12.875 0 0 0-10.534-10.17 12.714 12.714 0 0 0-10.785 3.37l-.029.029a6.198 6.198 0 0 1-8.444 0l-.037-.033a12.727 12.727 0 0 0-8.758-3.556Z",
        fill: "currentColor"
    }));
}
// src/components/SpotifyLogo.tsx
var import_react14 = __toESM(require_react());
var import_colorizr = require("colorizr");
function SpotifyLogo(_param) {
    var bgColor = _param.bgColor, rest = _objectWithoutProperties(_param, [
        "bgColor"
    ]);
    return /* @__PURE__ */ import_react14.default.createElement("svg", _objectSpread({
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 512 160",
        width: "3.2em"
    }, rest), /* @__PURE__ */ import_react14.default.createElement("path", {
        d: "M79.655 0C35.664 0 0 35.663 0 79.654c0 43.993 35.664 79.653 79.655 79.653 43.996 0 79.656-35.66 79.656-79.653 0-43.988-35.66-79.65-79.657-79.65L79.655 0Zm36.53 114.884a4.963 4.963 0 0 1-6.83 1.646c-18.702-11.424-42.246-14.011-69.973-7.676a4.967 4.967 0 0 1-5.944-3.738 4.958 4.958 0 0 1 3.734-5.945c30.343-6.933 56.37-3.948 77.367 8.884a4.965 4.965 0 0 1 1.645 6.83Zm9.75-21.689c-1.799 2.922-5.622 3.845-8.543 2.047-21.41-13.16-54.049-16.972-79.374-9.284a6.219 6.219 0 0 1-7.75-4.138 6.22 6.22 0 0 1 4.141-7.745c28.929-8.778 64.892-4.526 89.48 10.583 2.92 1.798 3.843 5.622 2.045 8.538Zm.836-22.585C101.1 55.362 58.742 53.96 34.231 61.4c-3.936 1.194-8.098-1.028-9.29-4.964a7.453 7.453 0 0 1 4.965-9.294c28.137-8.542 74.912-6.892 104.469 10.655a7.441 7.441 0 0 1 2.606 10.209c-2.092 3.54-6.677 4.707-10.206 2.605h-.004Zm89.944 2.922c-13.754-3.28-16.198-5.581-16.198-10.418 0-4.57 4.299-7.645 10.7-7.645 6.202 0 12.347 2.336 18.796 7.143.19.145.437.203.675.165a.888.888 0 0 0 .6-.367l6.715-9.466a.903.903 0 0 0-.171-1.225c-7.676-6.157-16.313-9.15-26.415-9.15-14.848 0-25.225 8.911-25.225 21.662 0 13.673 8.95 18.515 24.417 22.252 13.155 3.031 15.38 5.57 15.38 10.11 0 5.032-4.49 8.161-11.718 8.161-8.028 0-14.582-2.71-21.906-9.046a.932.932 0 0 0-.656-.218.89.89 0 0 0-.619.313l-7.533 8.96a.906.906 0 0 0 .086 1.256c8.522 7.61 19.004 11.624 30.323 11.624 16 0 26.339-8.742 26.339-22.277.028-11.421-6.81-17.746-23.561-21.821l-.029-.013Zm59.792-13.564c-6.934 0-12.622 2.732-17.321 8.33v-6.3c0-.498-.4-.903-.894-.903h-12.318a.899.899 0 0 0-.894.902v70.009c0 .494.4.903.894.903h12.318a.901.901 0 0 0 .894-.903v-22.097c4.699 5.26 10.387 7.838 17.32 7.838 12.89 0 25.94-9.92 25.94-28.886.019-18.97-13.032-28.894-25.93-28.894l-.01.001Zm11.614 28.893c0 9.653-5.945 16.397-14.468 16.397-8.418 0-14.772-7.048-14.772-16.397 0-9.35 6.354-16.397 14.772-16.397 8.38 0 14.468 6.893 14.468 16.396Zm47.759-28.893c-16.598 0-29.601 12.78-29.601 29.1 0 16.143 12.917 28.784 29.401 28.784 16.655 0 29.696-12.736 29.696-28.991 0-16.2-12.955-28.89-29.496-28.89v-.003Zm0 45.385c-8.827 0-15.485-7.096-15.485-16.497 0-9.444 6.43-16.298 15.285-16.298 8.884 0 15.58 7.093 15.58 16.504 0 9.443-6.468 16.291-15.38 16.291Zm64.937-44.258h-13.554V47.24c0-.497-.4-.902-.894-.902H374.05a.906.906 0 0 0-.904.902v13.855h-5.916a.899.899 0 0 0-.894.902v10.584a.9.9 0 0 0 .894.903h5.916v27.39c0 11.062 5.508 16.674 16.38 16.674 4.413 0 8.075-.914 11.528-2.873a.88.88 0 0 0 .457-.78v-10.083a.896.896 0 0 0-.428-.76.873.873 0 0 0-.876-.039c-2.368 1.19-4.66 1.741-7.229 1.741-3.947 0-5.716-1.798-5.716-5.812V73.49h13.554a.899.899 0 0 0 .894-.903V62.003a.873.873 0 0 0-.884-.903l-.01-.005Zm47.217.054v-1.702c0-5.006 1.921-7.238 6.22-7.238 2.57 0 4.633.51 6.945 1.28a.895.895 0 0 0 1.18-.858l-.001-10.377a.891.891 0 0 0-.637-.865c-2.435-.726-5.555-1.47-10.235-1.47-11.367 0-17.388 6.405-17.388 18.516v2.606h-5.916a.906.906 0 0 0-.904.902v10.638c0 .497.41.903.904.903h5.916v42.237c0 .504.41.904.904.904h12.308c.504 0 .904-.4.904-.904V73.487h11.5l17.616 42.234c-1.998 4.433-3.967 5.317-6.65 5.317-2.168 0-4.46-.646-6.79-1.93a.98.98 0 0 0-.714-.067.896.896 0 0 0-.533.485l-4.175 9.16a.9.9 0 0 0 .39 1.17c4.356 2.359 8.284 3.367 13.145 3.367 9.093 0 14.125-4.242 18.548-15.637l21.364-55.204a.88.88 0 0 0-.095-.838.878.878 0 0 0-.733-.392h-12.822a.901.901 0 0 0-.856.605l-13.136 37.509-14.382-37.534a.898.898 0 0 0-.837-.58h-21.04v-.003Zm-27.375-.054h-12.318a.907.907 0 0 0-.903.902v53.724c0 .504.409.904.903.904h12.318c.495 0 .904-.4.904-.904v-53.72a.9.9 0 0 0-.904-.903v-.003Zm-6.088-24.464c-4.88 0-8.836 3.95-8.836 8.828a8.835 8.835 0 0 0 8.836 8.836c4.88 0 8.827-3.954 8.827-8.836a8.83 8.83 0 0 0-8.827-8.828Z",
        fill: (0, import_colorizr.textColor)(bgColor)
    }));
}
// src/modules/getters.ts
function getLocale(locale) {
    return _objectSpread({
        currentDevice: "Current device",
        devices: "Devices",
        next: "Next",
        otherDevices: "Select other device",
        pause: "Pause",
        play: "Play",
        previous: "Previous",
        removeTrack: "Remove from your favorites",
        saveTrack: "Save to your favorites",
        title: "{name} on SPOTIFY",
        volume: "Volume"
    }, locale);
}
function getMergedStyles(styles) {
    return _objectSpread({
        activeColor: "#1cb954",
        altColor: "#ccc",
        bgColor: "#fff",
        color: "#333",
        errorColor: "#ff0026",
        height: 80,
        loaderColor: "#ccc",
        loaderSize: 32,
        sliderColor: "#666",
        sliderHandleBorderRadius: "50%",
        sliderHandleColor: "#000",
        sliderHeight: 4,
        sliderTrackBorderRadius: 4,
        sliderTrackColor: "#ccc",
        trackArtistColor: "#666",
        trackNameColor: "#333"
    }, styles);
}
function getSpotifyLink(uri) {
    var _uri_split = _slicedToArray(uri.split(":"), 3), tmp = _uri_split[1], type = tmp === void 0 ? "" : tmp, tmp1 = _uri_split[2], id = tmp1 === void 0 ? "" : tmp1;
    return "https://open.spotify.com/".concat(type, "/").concat(id);
}
function getSpotifyLinkTitle(name, locale) {
    return locale.replace("{name}", name);
}
function getSpotifyURIType(uri) {
    var _uri_split = _slicedToArray(uri.split(":"), 2), tmp = _uri_split[1], type = tmp === void 0 ? "" : tmp;
    return type;
}
// src/modules/hooks.ts
var import_react15 = __toESM(require_react());
function useMediaQuery(input) {
    var handleChange = function handleChange() {
        setMatches(getMatches(input));
    };
    var getMatches = function(query) {
        return window.matchMedia(query).matches;
    };
    var _ref = _slicedToArray((0, import_react15.useState)(getMatches(input)), 2), matches = _ref[0], setMatches = _ref[1];
    (0, import_react15.useEffect)(function() {
        var matchMedia = window.matchMedia(input);
        handleChange();
        try {
            matchMedia.addEventListener("change", handleChange);
        } catch (e) {
            matchMedia.addListener(handleChange);
        }
        return function() {
            try {
                matchMedia.removeEventListener("change", handleChange);
            } catch (e) {
                matchMedia.removeListener(handleChange);
            }
        };
    }, [
        input
    ]);
    return matches;
}
function usePrevious(value) {
    var ref = (0, import_react15.useRef)();
    (0, import_react15.useEffect)(function() {
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
function checkTracksStatus(token, tracks) {
    return _checkTracksStatus.apply(this, arguments);
}
function _checkTracksStatus() {
    _checkTracksStatus = // src/modules/spotify.ts
    _asyncToGenerator(function(token, tracks) {
        var ids;
        return __generator(this, function(_state) {
            ids = Array.isArray(tracks) ? tracks : [
                tracks
            ];
            return [
                2,
                fetch("https://api.spotify.com/v1/me/tracks/contains?ids=".concat(ids), {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                }).then(function(d) {
                    return d.json();
                })
            ];
        });
    });
    return _checkTracksStatus.apply(this, arguments);
}
function getDevices(token) {
    return _getDevices.apply(this, arguments);
}
function _getDevices() {
    _getDevices = _asyncToGenerator(function(token) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player/devices", {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                }).then(function(d) {
                    return d.json();
                })
            ];
        });
    });
    return _getDevices.apply(this, arguments);
}
function getPlaybackState(token) {
    return _getPlaybackState.apply(this, arguments);
}
function _getPlaybackState() {
    _getPlaybackState = _asyncToGenerator(function(token) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player", {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                }).then(function(d) {
                    if (d.status === 204) {
                        return null;
                    }
                    return d.json();
                })
            ];
        });
    });
    return _getPlaybackState.apply(this, arguments);
}
function pause(token) {
    return _pause.apply(this, arguments);
}
function _pause() {
    _pause = _asyncToGenerator(function(token) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player/pause", {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _pause.apply(this, arguments);
}
function play(token, _) {
    return _play.apply(this, arguments);
}
function _play() {
    _play = _asyncToGenerator(function(token, param) {
        var context_uri, deviceId, _param_offset, offset, uris, body, isArtist, position;
        return __generator(this, function(_state) {
            context_uri = param.context_uri, deviceId = param.deviceId, _param_offset = param.offset, offset = _param_offset === void 0 ? 0 : _param_offset, uris = param.uris;
            if (context_uri) {
                isArtist = context_uri.indexOf("artist") >= 0;
                ;
                if (!isArtist) {
                    position = {
                        position: offset
                    };
                }
                body = JSON.stringify({
                    context_uri: context_uri,
                    offset: position
                });
            } else if (Array.isArray(uris) && uris.length) {
                body = JSON.stringify({
                    uris: uris,
                    offset: {
                        position: offset
                    }
                });
            }
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(deviceId), {
                    body: body,
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _play.apply(this, arguments);
}
function removeTracks(token, tracks) {
    return _removeTracks.apply(this, arguments);
}
function _removeTracks() {
    _removeTracks = _asyncToGenerator(function(token, tracks) {
        var ids;
        return __generator(this, function(_state) {
            ids = Array.isArray(tracks) ? tracks : [
                tracks
            ];
            return [
                2,
                fetch("https://api.spotify.com/v1/me/tracks", {
                    body: JSON.stringify(ids),
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "DELETE"
                })
            ];
        });
    });
    return _removeTracks.apply(this, arguments);
}
function saveTracks(token, tracks) {
    return _saveTracks.apply(this, arguments);
}
function _saveTracks() {
    _saveTracks = _asyncToGenerator(function(token, tracks) {
        var ids;
        return __generator(this, function(_state) {
            ids = Array.isArray(tracks) ? tracks : [
                tracks
            ];
            return [
                2,
                fetch("https://api.spotify.com/v1/me/tracks", {
                    body: JSON.stringify({
                        ids: ids
                    }),
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _saveTracks.apply(this, arguments);
}
function seek(token, position) {
    return _seek.apply(this, arguments);
}
function _seek() {
    _seek = _asyncToGenerator(function(token, position) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player/seek?position_ms=".concat(position), {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _seek.apply(this, arguments);
}
function setDevice(token, deviceId, shouldPlay) {
    return _setDevice.apply(this, arguments);
}
function _setDevice() {
    _setDevice = _asyncToGenerator(function(token, deviceId, shouldPlay) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player", {
                    body: JSON.stringify({
                        device_ids: [
                            deviceId
                        ],
                        play: shouldPlay
                    }),
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _setDevice.apply(this, arguments);
}
function setVolume(token, volume) {
    return _setVolume.apply(this, arguments);
}
function _setVolume() {
    _setVolume = _asyncToGenerator(function(token, volume) {
        return __generator(this, function(_state) {
            return [
                2,
                fetch("https://api.spotify.com/v1/me/player/volume?volume_percent=".concat(volume), {
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    method: "PUT"
                })
            ];
        });
    });
    return _setVolume.apply(this, arguments);
}
// src/components/Info.tsx
var imageSize = 64;
var iconSize = 32;
var Wrapper5 = styled("div")({
    textAlign: "left",
    "> a": {
        display: "inline-flex",
        textDecoration: "none",
        minHeigth: px(64),
        minWidth: px(64),
        "&:hover": {
            textDecoration: "underline"
        }
    },
    button: {
        alignItems: "center",
        display: "flex",
        fontSize: px(16),
        height: px(iconSize + 8),
        justifyContent: "center",
        width: px(iconSize)
    }
}, function(param) {
    var style = param.style;
    var isCompactLayout = style.layout === "compact";
    var styles = {};
    if (isCompactLayout) {
        styles.borderBottom = "1px solid ".concat((0, import_colorizr2.fade)(style.c, 40));
        styles["> a"] = {
            display: "flex",
            margin: "0 auto",
            maxWidth: px(640),
            paddingBottom: "100%",
            position: "relative",
            img: {
                display: "block",
                bottom: 0,
                left: 0,
                maxWidth: "100%",
                position: "absolute",
                right: 0,
                top: 0
            }
        };
    } else {
        styles.alignItems = "center";
        styles.display = "flex";
        styles.minHeight = px(80);
        styles["@media (max-width: 767px)"] = {
            borderBottom: "1px solid ".concat((0, import_colorizr2.fade)(style.c, 40)),
            paddingLeft: px(8),
            display: "none",
            width: "100%"
        };
        styles.img = {
            height: px(imageSize),
            width: px(imageSize)
        };
        styles["&.rswp__active"] = {
            "@media (max-width: 767px)": {
                display: "flex"
            }
        };
    }
    return _objectSpread({
        button: {
            color: style.c,
            "&.rswp__active": {
                color: style.activeColor
            }
        }
    }, styles);
}, "InfoRSWP");
var ContentWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "> a": {
        fontSize: px(22),
        marginTop: px(4)
    }
}, function(param) {
    var style = param.style;
    var isCompactLayout = style.layout === "compact";
    var styles = {};
    if (isCompactLayout) {
        styles.padding = px(8);
        styles.width = "100%";
    } else {
        styles.minHeight = px(imageSize);
        if (!style.hideCoverArt) {
            styles.marginLeft = px(8);
            styles.width = "calc(100% - ".concat(px(imageSize + 8), ")");
        } else {
            styles.width = "100%";
        }
    }
    return styles;
}, "ContentWrapperRSWP");
var Content = styled("div")({
    display: "flex",
    justifyContent: "start",
    '[data-type="title-artist-wrapper"]': {
        overflow: "hidden",
        div: {
            marginLeft: "-".concat(px(8)),
            whiteSpace: "nowrap"
        }
    },
    p: {
        fontSize: px(14),
        lineHeight: 1.3,
        paddingLeft: px(8),
        paddingRight: px(8),
        width: "100%",
        "&:nth-of-type(1)": {
            alignItems: "center",
            display: "inline-flex"
        },
        "&:nth-of-type(2)": {
            fontSize: px(12)
        }
    },
    span: {
        display: "inline-block"
    }
}, function(param) {
    var style = param.style;
    return {
        '[data-type="title-artist-wrapper"]': {
            color: style.trackNameColor,
            maxWidth: "calc(100% - ".concat(px(style.showSaveIcon ? iconSize : 0), ")"),
            div: {
                "-webkit-mask-image": "linear-gradient(90deg,transparent 0, ".concat(style.bgColor, " 6px, ").concat(style.bgColor, " calc(100% - 12px),transparent)")
            }
        },
        p: {
            "&:nth-of-type(1)": {
                color: style.trackNameColor,
                a: {
                    color: style.trackNameColor
                }
            },
            "&:nth-of-type(2)": {
                color: style.trackArtistColor,
                a: {
                    color: style.trackArtistColor
                }
            }
        }
    };
}, "ContentRSWP");
function Info(props) {
    var hideAttribution = props.hideAttribution, hideCoverArt = props.hideCoverArt, isActive = props.isActive, layout = props.layout, locale = props.locale, onFavoriteStatusChange = props.onFavoriteStatusChange, showSaveIcon = props.showSaveIcon, _props_styles = props.styles, activeColor = _props_styles.activeColor, bgColor = _props_styles.bgColor, color = _props_styles.color, height = _props_styles.height, trackArtistColor = _props_styles.trackArtistColor, trackNameColor = _props_styles.trackNameColor, token = props.token, _props_track = props.track, _props_track_artists = _props_track.artists, artists = _props_track_artists === void 0 ? [] : _props_track_artists, id = _props_track.id, image = _props_track.image, name = _props_track.name, uri = _props_track.uri, updateSavedStatus = props.updateSavedStatus;
    var _ref = _slicedToArray((0, import_react16.useState)(false), 2), isSaved = _ref[0], setIsSaved = _ref[1];
    var isMounted = (0, import_react16.useRef)(false);
    var previousId = usePrevious(id);
    var isCompactLayout = layout === "compact";
    var updateState = function(state) {
        if (!isMounted.current) {
            return;
        }
        setIsSaved(state);
    };
    var setStatus = function() {
        var _ref = _asyncToGenerator(function() {
            var status, _ref, isFavorite;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!isMounted.current) {
                            return [
                                2
                            ];
                        }
                        if (updateSavedStatus && id) {
                            updateSavedStatus(function(newStatus) {
                                updateState(newStatus);
                            });
                        }
                        return [
                            4,
                            checkTracksStatus(token, id)
                        ];
                    case 1:
                        status = _state.sent();
                        _ref = _slicedToArray(status || [
                            false
                        ], 1), isFavorite = _ref[0];
                        updateState(isFavorite);
                        onFavoriteStatusChange(isSaved);
                        return [
                            2
                        ];
                }
            });
        });
        return function setStatus() {
            return _ref.apply(this, arguments);
        };
    }();
    (0, import_react16.useEffect)(function() {
        isMounted.current = true;
        if (showSaveIcon && id) {
            setStatus();
        }
        return function() {
            isMounted.current = false;
        };
    }, []);
    (0, import_react16.useEffect)(function() {
        if (showSaveIcon && previousId !== id && id) {
            updateState(false);
            setStatus();
        }
    });
    var handleClickIcon = function() {
        var _ref = _asyncToGenerator(function() {
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!isSaved) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            removeTracks(token, id)
                        ];
                    case 1:
                        _state.sent();
                        updateState(false);
                        return [
                            3,
                            4
                        ];
                    case 2:
                        return [
                            4,
                            saveTracks(token, id)
                        ];
                    case 3:
                        _state.sent();
                        updateState(true);
                        _state.label = 4;
                    case 4:
                        onFavoriteStatusChange(!isSaved);
                        return [
                            2
                        ];
                }
            });
        });
        return function handleClickIcon() {
            return _ref.apply(this, arguments);
        };
    }();
    var title = getSpotifyLinkTitle(name, locale.title);
    var favorite;
    if (showSaveIcon && id) {
        favorite = /* @__PURE__ */ import_react16.default.createElement("button", {
            "aria-label": isSaved ? locale.removeTrack : locale.saveTrack,
            className: isSaved ? "rswp__active" : void 0,
            onClick: handleClickIcon,
            title: isSaved ? locale.removeTrack : locale.saveTrack,
            type: "button"
        }, isSaved ? /* @__PURE__ */ import_react16.default.createElement(Favorite, null) : /* @__PURE__ */ import_react16.default.createElement(FavoriteOutline, null));
    }
    var content = {};
    var classes = [];
    if (isActive) {
        classes.push("rswp__active");
    }
    if (isCompactLayout) {
        content.image = /* @__PURE__ */ import_react16.default.createElement("img", {
            alt: name,
            src: image
        });
    }
    if (!id) {
        return /* @__PURE__ */ import_react16.default.createElement("div", null);
    }
    return /* @__PURE__ */ import_react16.default.createElement(Wrapper5, {
        className: classes.join(" "),
        "data-component-name": "Info",
        style: {
            activeColor: activeColor,
            c: color,
            h: height,
            layout: layout,
            showSaveIcon: showSaveIcon
        }
    }, !hideCoverArt && /* @__PURE__ */ import_react16.default.createElement("a", {
        "aria-label": title,
        href: getSpotifyLink(uri),
        rel: "noreferrer",
        target: "_blank",
        title: title
    }, /* @__PURE__ */ import_react16.default.createElement("img", {
        alt: name,
        src: image
    })), /* @__PURE__ */ import_react16.default.createElement(ContentWrapper, {
        style: {
            hideCoverArt: hideCoverArt,
            layout: layout,
            showSaveIcon: showSaveIcon
        }
    }, !!name && /* @__PURE__ */ import_react16.default.createElement(Content, {
        style: {
            bgColor: bgColor,
            layout: layout,
            showSaveIcon: showSaveIcon,
            trackArtistColor: trackArtistColor,
            trackNameColor: trackNameColor
        }
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
        "data-type": "title-artist-wrapper"
    }, /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("p", null, /* @__PURE__ */ import_react16.default.createElement("span", null, /* @__PURE__ */ import_react16.default.createElement("a", {
        "aria-label": title,
        href: getSpotifyLink(uri),
        rel: "noreferrer",
        target: "_blank",
        title: title
    }, name))), /* @__PURE__ */ import_react16.default.createElement("p", {
        title: artists.map(function(d) {
            return d.name;
        }).join(", ")
    }, artists.map(function(artist, index) {
        var artistTitle = getSpotifyLinkTitle(artist.name, locale.title);
        return /* @__PURE__ */ import_react16.default.createElement("span", {
            key: artist.uri
        }, index ? ", " : "", /* @__PURE__ */ import_react16.default.createElement("a", {
            "aria-label": artistTitle,
            href: getSpotifyLink(artist.uri),
            rel: "noreferrer",
            target: "_blank",
            title: artistTitle
        }, artist.name));
    })))), favorite), !hideAttribution && /* @__PURE__ */ import_react16.default.createElement("a", {
        "aria-label": "Play on Spotify",
        href: getSpotifyLink(uri),
        rel: "noreferrer",
        target: "_blank"
    }, /* @__PURE__ */ import_react16.default.createElement(SpotifyLogo, {
        bgColor: bgColor
    }))));
}
var Info_default = (0, import_react16.memo)(Info);
// src/components/Loader.tsx
var import_react17 = __toESM(require_react());
var Wrapper6 = styled("div")({
    alignItems: "center",
    display: "flex",
    jsutifyContent: "center",
    position: "relative",
    "> div": {
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: 0,
        boxSizing: "border-box",
        height: 0,
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 0
    }
}, function(param) {
    var style = param.style;
    var pulse = keyframes({
        "0%": {
            height: 0,
            width: 0
        },
        "30%": {
            borderWidth: px(8),
            height: px(style.loaderSize),
            opacity: 1,
            width: px(style.loaderSize)
        },
        "100%": {
            borderWidth: 0,
            height: px(style.loaderSize),
            opacity: 0,
            width: px(style.loaderSize)
        }
    });
    return {
        height: px(style.h),
        "> div": {
            animation: "".concat(pulse, " 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1)"),
            borderColor: style.loaderColor,
            height: px(style.loaderSize),
            width: px(style.loaderSize)
        }
    };
}, "LoaderRSWP");
function Loader(param) {
    var _param_styles = param.styles, height = _param_styles.height, loaderColor = _param_styles.loaderColor, loaderSize = _param_styles.loaderSize;
    return /* @__PURE__ */ import_react17.default.createElement(Wrapper6, {
        "data-component-name": "Loader",
        style: {
            h: height,
            loaderColor: loaderColor,
            loaderSize: loaderSize
        }
    }, /* @__PURE__ */ import_react17.default.createElement("div", null));
}
// src/components/Volume.tsx
var import_react22 = __toESM(require_react());
var import_react_range_slider2 = __toESM(require("@gilbarbara/react-range-slider"));
// src/components/icons/VolumeHigh.tsx
var import_react18 = __toESM(require_react());
function VolumeHigh(props) {
    return /* @__PURE__ */ import_react18.default.createElement("svg", _objectSpread({
        "data-component-name": "VolumeHigh",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react18.default.createElement("path", {
        d: "M37.963 3.402a2.989 2.989 0 0 1 1.5 2.596v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0ZM45 9.542a23.008 23.008 0 0 1 0 44.912V48.25a17.008 17.008 0 0 0 0-32.508Zm-11.532 1.656-23.2 13.4a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6ZM45 22.238a11 11 0 0 1 0 19.52v-19.52Z",
        fill: "currentColor"
    }));
}
// src/components/icons/VolumeLow.tsx
var import_react19 = __toESM(require_react());
function VolumeLow(props) {
    return /* @__PURE__ */ import_react19.default.createElement("svg", _objectSpread({
        "data-component-name": "VolumeLow",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react19.default.createElement("path", {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 41.758v-19.52a11 11 0 0 1 0 19.52Z",
        fill: "currentColor"
    }));
}
// src/components/icons/VolumeMid.tsx
var import_react20 = __toESM(require_react());
function VolumeHigh2(props) {
    return /* @__PURE__ */ import_react20.default.createElement("svg", _objectSpread({
        "data-component-name": "VolumeMid",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react20.default.createElement("path", {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 48.946a18.008 18.008 0 0 0 0-33.896v6.6a11.996 11.996 0 0 1 0 20.7v6.596Z",
        fill: "currentColor"
    }));
}
// src/components/icons/VolumeMute.tsx
var import_react21 = __toESM(require_react());
function VolumeMute(props) {
    return /* @__PURE__ */ import_react21.default.createElement("svg", _objectSpread({
        "data-component-name": "VolumeMute",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 64 64",
        width: "1em"
    }, props), /* @__PURE__ */ import_react21.default.createElement("path", {
        d: "M34.963 3.402a3 3 0 0 1 4.5 2.6v7.624a19.03 19.03 0 0 0-6 2.776v-5.2l-23.2 13.4a8.57 8.57 0 0 0-3.12 3.128 8.564 8.564 0 0 0 3.124 11.68l23.196 13.392v-5.2a18.92 18.92 0 0 0 6 2.776v7.624a3 3 0 0 1-4.5 2.596l-27.7-16a14.556 14.556 0 0 1-5.32-5.328C-2.06 32.313.32 23.428 7.263 19.402l27.7-16Zm17.354 17.6a3 3 0 0 1 2.122 5.12l-5.88 5.88 5.876 5.88a3 3 0 0 1-4.24 4.24l-5.88-5.88-5.88 5.88a3 3 0 1 1-4.385-4.095l6.025-6.025-5.876-5.88a3 3 0 0 1 4.236-4.24l5.88 5.88 5.88-5.88a3 3 0 0 1 2.122-.88Z",
        fill: "currentColor"
    }));
}
// src/components/Volume.tsx
var WrapperWithToggle = styled("div")({
    display: "none",
    "pointer-events": "all",
    position: "relative",
    zIndex: 20,
    "> div": {
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: px(4),
        color: "#fff",
        display: "flex",
        filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
        flexDirection: "column",
        left: "-4px",
        padding: px(16),
        position: "absolute",
        "> span": {
            background: "transparent",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            content: '""',
            display: "block",
            height: 0,
            position: "absolute",
            width: 0
        }
    },
    "> button": {
        alignItems: "center",
        display: "flex",
        fontSize: px(24),
        height: px(32),
        justifyContent: "center",
        width: px(32)
    },
    "@media (any-pointer: fine)": {
        display: "block"
    }
}, function(param) {
    var style = param.style;
    var isCompact = style.layout === "compact";
    var _obj;
    var spanStyles = isCompact ? {
        bottom: "-".concat(px(6)),
        borderTop: "6px solid #000"
    } : (_obj = {}, _defineProperty(_obj, style.p === "top" ? "border-bottom" : "border-top", "6px solid #000"), _defineProperty(_obj, style.p, "-6px"), _obj);
    var _obj1;
    return {
        "> button": {
            color: style.c
        },
        "> div": (_obj1 = {}, _defineProperty(_obj1, isCompact ? "bottom" : style.p, "130%"), _defineProperty(_obj1, "> span", spanStyles), _obj1)
    };
}, "VolumeRSWP");
var WrapperInline = styled("div")({
    display: "none",
    padding: "0 ".concat(px(8)),
    "pointer-events": "all",
    "> div": {
        display: "flex",
        padding: "0 ".concat(px(5)),
        width: px(100)
    },
    "> span": {
        display: "flex",
        fontSize: px(24)
    },
    "@media (any-pointer: fine)": {
        alignItems: "center",
        display: "flex"
    }
}, function(param) {
    var style = param.style;
    return {
        color: style.c
    };
}, "VolumeInlineRSWP");
function Volume(props) {
    var inlineVolume = props.inlineVolume, layout = props.layout, locale = props.locale, playerPosition = props.playerPosition, setVolume2 = props.setVolume, styles = props.styles, volume = props.volume;
    var _ref = _slicedToArray((0, import_react22.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var _ref1 = _slicedToArray((0, import_react22.useState)(volume), 2), volumeState = _ref1[0], setVolumeState = _ref1[1];
    var timeoutRef = (0, import_react22.useRef)();
    var previousVolume = usePrevious(volume);
    var isMediumScreen = useMediaQuery("(min-width: 768px)");
    var isInline = layout === "responsive" && inlineVolume && isMediumScreen;
    (0, import_react22.useEffect)(function() {
        if (previousVolume !== volume && volume !== volumeState) {
            setVolumeState(volume);
        }
    }, [
        previousVolume,
        volume,
        volumeState
    ]);
    var handleClickToggleList = (0, import_react22.useCallback)(function() {
        setIsOpen(function(s) {
            return !s;
        });
    }, []);
    var handleChangeSlider = function(param) {
        var x = param.x, y = param.y;
        var value = isInline ? x : y;
        var currentvolume = Math.round(value) / 100;
        clearTimeout(timeoutRef.current);
        setVolume2(currentvolume);
        setVolumeState(currentvolume);
    };
    var handleAfterEnd = function() {
        setTimeout(function() {
            setIsOpen(false);
        }, 100);
    };
    var icon = /* @__PURE__ */ import_react22.default.createElement(VolumeHigh, null);
    if (volume === 0) {
        icon = /* @__PURE__ */ import_react22.default.createElement(VolumeMute, null);
    } else if (volume <= 0.4) {
        icon = /* @__PURE__ */ import_react22.default.createElement(VolumeLow, null);
    } else if (volume <= 0.7) {
        icon = /* @__PURE__ */ import_react22.default.createElement(VolumeHigh2, null);
    }
    if (isInline) {
        return /* @__PURE__ */ import_react22.default.createElement(WrapperInline, {
            "data-component-name": "Volume",
            "data-value": volume,
            style: {
                c: styles.color
            }
        }, /* @__PURE__ */ import_react22.default.createElement("span", null, icon), /* @__PURE__ */ import_react22.default.createElement("div", null, /* @__PURE__ */ import_react22.default.createElement(import_react_range_slider2.default, {
            axis: "x",
            className: "volume",
            "data-component-name": "volume-bar",
            onAfterEnd: handleAfterEnd,
            onChange: handleChangeSlider,
            styles: {
                options: {
                    thumbBorder: 0,
                    thumbBorderRadius: styles.sliderHandleBorderRadius,
                    thumbColor: styles.sliderHandleColor,
                    height: styles.sliderHeight,
                    padding: 0,
                    rangeColor: styles.sliderColor,
                    trackBorderRadius: styles.sliderTrackBorderRadius,
                    trackColor: styles.sliderTrackColor
                }
            },
            x: volume * 100,
            xMax: 100,
            xMin: 0
        })));
    }
    return /* @__PURE__ */ import_react22.default.createElement(ClickOutside_default, {
        isActive: isOpen,
        onClick: handleClickToggleList
    }, /* @__PURE__ */ import_react22.default.createElement(WrapperWithToggle, {
        "data-component-name": "Volume",
        "data-value": volume,
        style: {
            c: styles.color,
            layout: layout,
            p: playerPosition
        }
    }, isOpen && /* @__PURE__ */ import_react22.default.createElement("div", null, /* @__PURE__ */ import_react22.default.createElement(import_react_range_slider2.default, {
        axis: "y",
        className: "volume",
        "data-component-name": "volume-bar",
        onAfterEnd: handleAfterEnd,
        onChange: handleChangeSlider,
        styles: {
            options: {
                padding: 0,
                rangeColor: "#fff",
                thumbBorder: 0,
                thumbBorderRadius: 12,
                thumbColor: "#fff",
                thumbSize: 12,
                trackColor: "rgba(255, 255, 255, 0.5)",
                width: 6
            }
        },
        y: volume * 100,
        yMax: 100,
        yMin: 0
    }), /* @__PURE__ */ import_react22.default.createElement("span", null)), /* @__PURE__ */ import_react22.default.createElement("button", {
        "aria-label": locale.volume,
        onClick: handleClickToggleList,
        title: locale.volume,
        type: "button"
    }, icon)));
}
// src/constants.ts
var ERROR_TYPE = {
    ACCOUNT: "account",
    AUTHENTICATION: "authentication",
    INITIALIZATION: "initialization",
    PLAYBACK: "playback",
    PLAYER: "player"
};
var STATUS = {
    ERROR: "ERROR",
    IDLE: "IDLE",
    INITIALIZING: "INITIALIZING",
    READY: "READY",
    RUNNING: "RUNNING",
    UNSUPPORTED: "UNSUPPORTED"
};
var TYPE = {
    DEVICE: "device_update",
    FAVORITE: "favorite_update",
    PLAYER: "player_update",
    PROGRESS: "progress_update",
    STATUS: "status_update",
    TRACK: "track_update"
};
// src/index.tsx
var SpotifyWebPlayer = /*#__PURE__*/ function(_import_react23_PureComponent) {
    _inherits(SpotifyWebPlayer, _import_react23_PureComponent);
    var _super = _createSuper(SpotifyWebPlayer);
    function SpotifyWebPlayer(props) {
        _classCallCheck(this, SpotifyWebPlayer);
        var _this;
        _this = _super.call(this, props);
        __publicField(_assertThisInitialized(_this), "isMounted", false);
        __publicField(_assertThisInitialized(_this), "emptyTrack", {
            artists: [],
            durationMs: 0,
            id: "",
            image: "",
            name: "",
            uri: ""
        });
        __publicField(_assertThisInitialized(_this), "locale");
        __publicField(_assertThisInitialized(_this), "player");
        __publicField(_assertThisInitialized(_this), "playerProgressInterval");
        __publicField(_assertThisInitialized(_this), "playerSyncInterval");
        __publicField(_assertThisInitialized(_this), "ref", (0, import_react23.createRef)());
        __publicField(_assertThisInitialized(_this), "renderInlineActions", false);
        __publicField(_assertThisInitialized(_this), "resizeTimeout");
        __publicField(_assertThisInitialized(_this), "seekUpdateInterval", 100);
        __publicField(_assertThisInitialized(_this), "styles");
        __publicField(_assertThisInitialized(_this), "syncTimeout");
        // eslint-disable-next-line unicorn/consistent-function-scoping
        __publicField(_assertThisInitialized(_this), "getPlayOptions", (0, import_memoize_one.default)(function(data) {
            var playOptions = {
                context_uri: void 0,
                uris: void 0
            };
            if (data) {
                var ids = Array.isArray(data) ? data : [
                    data
                ];
                if (!ids.every(function(d) {
                    return validateURI(d);
                })) {
                    console.error("Invalid URI");
                    return playOptions;
                }
                if (ids.some(function(d) {
                    return getSpotifyURIType(d) === "track";
                })) {
                    if (!ids.every(function(d) {
                        return getSpotifyURIType(d) === "track";
                    })) {
                        console.warn("You can't mix tracks URIs with other types");
                    }
                    playOptions.uris = ids.filter(function(d) {
                        return validateURI(d) && getSpotifyURIType(d) === "track";
                    });
                } else {
                    if (ids.length > 1) {
                        console.warn("Albums, Artists, Playlists and Podcasts can't have multiple URIs");
                    }
                    playOptions.context_uri = ids[0];
                }
            }
            return playOptions;
        }));
        var _this1 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "handleChangeRange", function() {
            var _ref = _asyncToGenerator(function(position) {
                var track, callback, progress, percentage, stateChanges, state, error;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            track = _this1.state.track;
                            callback = _this1.props.callback;
                            progress = 0;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                8,
                                ,
                                9
                            ]);
                            percentage = position / 100;
                            stateChanges = {};
                            if (!_this1.isExternalPlayer) return [
                                3,
                                3
                            ];
                            progress = Math.round(track.durationMs * percentage);
                            return [
                                4,
                                seek(_this1.token, progress)
                            ];
                        case 2:
                            _state.sent();
                            stateChanges = {
                                position: position,
                                progressMs: progress
                            };
                            return [
                                3,
                                7
                            ];
                        case 3:
                            if (!_this1.player) return [
                                3,
                                7
                            ];
                            return [
                                4,
                                _this1.player.getCurrentState()
                            ];
                        case 4:
                            state = _state.sent();
                            if (!state) return [
                                3,
                                6
                            ];
                            progress = Math.round(state.track_window.current_track.duration_ms * percentage);
                            return [
                                4,
                                _this1.player.seek(progress)
                            ];
                        case 5:
                            _state.sent();
                            stateChanges = {
                                position: position,
                                progressMs: progress
                            };
                            return [
                                3,
                                7
                            ];
                        case 6:
                            stateChanges = {
                                position: 0
                            };
                            _state.label = 7;
                        case 7:
                            _this1.updateState(stateChanges);
                            if (callback) {
                                callback(_objectSpreadProps(_objectSpread({}, _this1.state, stateChanges), {
                                    type: TYPE.PROGRESS
                                }));
                            }
                            return [
                                3,
                                9
                            ];
                        case 8:
                            error = _state.sent();
                            console.error(error);
                            return [
                                3,
                                9
                            ];
                        case 9:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(position) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = _assertThisInitialized(_this);
        // private handleClickTogglePlay = async () => {
        //   const { isActive } = this.state;
        //   try {
        //     await this.togglePlay(!this.isExternalPlayer && !isActive);
        //   } catch (error) {
        //     // eslint-disable-next-line no-console
        //     console.error(error);
        //   }
        // };
        // private handleClickPrevious = async () => {
        //   try {
        //     /* istanbul ignore else */
        //     if (this.isExternalPlayer) {
        //       await previous(this.token);
        //       this.syncTimeout = window.setTimeout(() => {
        //         this.syncDevice();
        //       }, 300);
        //     } else if (this.player) {
        //       await this.player.previousTrack();
        //     }
        //   } catch (error) {
        //     // eslint-disable-next-line no-console
        //     console.error(error);
        //   }
        // };
        // private handleClickNext = async () => {
        //   try {
        //     /* istanbul ignore else */
        //     if (this.isExternalPlayer) {
        //       await next(this.token);
        //       this.syncTimeout = window.setTimeout(() => {
        //         this.syncDevice();
        //       }, 300);
        //     } else if (this.player) {
        //       await this.player.nextTrack();
        //     }
        //   } catch (error) {
        //     // eslint-disable-next-line no-console
        //     console.error(error);
        //   }
        // };
        __publicField(_assertThisInitialized(_this), "handleClickDevice", function() {
            var _ref = _asyncToGenerator(function(deviceId) {
                var isUnsupported, _this_props, autoPlay, persistDeviceSelection, player, error;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            isUnsupported = _this2.state.isUnsupported;
                            _this_props = _this2.props, autoPlay = _this_props.autoPlay, persistDeviceSelection = _this_props.persistDeviceSelection;
                            _this2.updateState({
                                currentDeviceId: deviceId
                            });
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                7,
                                ,
                                8
                            ]);
                            return [
                                4,
                                setDevice(_this2.token, deviceId)
                            ];
                        case 2:
                            _state.sent();
                            if (persistDeviceSelection) {
                                sessionStorage.setItem("rswpDeviceId", deviceId);
                            }
                            if (!isUnsupported) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                _this2.syncDevice()
                            ];
                        case 3:
                            _state.sent();
                            return [
                                4,
                                getPlaybackState(_this2.token)
                            ];
                        case 4:
                            player = _state.sent();
                            if (!(player && !player.is_playing && autoPlay)) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                _this2.togglePlay(true)
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            return [
                                3,
                                8
                            ];
                        case 7:
                            error = _state.sent();
                            console.error(error);
                            return [
                                3,
                                8
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(deviceId) {
                return _ref.apply(this, arguments);
            };
        }());
        __publicField(_assertThisInitialized(_this), "handleFavoriteStatusChange", function(status) {
            var isSaved = _this.state.isSaved;
            _this.updateState({
                isSaved: status
            });
            if (isSaved !== status) {
                _this.handleCallback(_objectSpreadProps(_objectSpread({}, _this.state), {
                    isSaved: status,
                    type: TYPE.FAVORITE
                }));
            }
        });
        var _this3 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "handlePlayerErrors", function() {
            var _ref = _asyncToGenerator(function(type, message) {
                var status, isPlaybackError, isInitializationError, nextStatus, devices, ref, ref1;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            status = _this3.state.status;
                            isPlaybackError = type === ERROR_TYPE.PLAYBACK;
                            isInitializationError = type === ERROR_TYPE.INITIALIZATION;
                            nextStatus = status;
                            devices = [];
                            if (_this3.player && !isPlaybackError) {
                                _this3.player.disconnect();
                                _this3.player = void 0;
                            }
                            if (!isInitializationError) return [
                                3,
                                2
                            ];
                            nextStatus = STATUS.UNSUPPORTED;
                            return [
                                4,
                                getDevices(_this3.token)
                            ];
                        case 1:
                            ref = _state.sent(), ref1 = ref.devices, devices = ref1 === void 0 ? [] : ref1, ref;
                            return [
                                3,
                                3
                            ];
                        case 2:
                            if (!isPlaybackError) {
                                nextStatus = STATUS.ERROR;
                            }
                            _state.label = 3;
                        case 3:
                            _this3.updateState({
                                devices: devices,
                                error: message,
                                errorType: type,
                                isInitializing: false,
                                isUnsupported: isInitializationError,
                                status: nextStatus
                            });
                            return [
                                2
                            ];
                    }
                });
            });
            return function(type, message) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "handlePlayerStateChanges", function() {
            var _ref = _asyncToGenerator(function(state) {
                var _this_player, paused, position, _state_track_window, current_track, next_tracks, previous_tracks, isPlaying, volume, trackState, error;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                6,
                                ,
                                7
                            ]);
                            if (!state) return [
                                3,
                                2
                            ];
                            paused = state.paused, position = state.position, _state_track_window = state.track_window, current_track = _state_track_window.current_track, next_tracks = _state_track_window.next_tracks, previous_tracks = _state_track_window.previous_tracks;
                            isPlaying = !paused;
                            return [
                                4,
                                (_this_player = _this4.player) === null || _this_player === void 0 ? void 0 : _this_player.getVolume()
                            ];
                        case 1:
                            volume = _state.sent() || 100;
                            trackState = {};
                            if (position === 0 && current_track) {
                                trackState = {
                                    nextTracks: next_tracks.map(convertTrack),
                                    position: 0,
                                    previousTracks: previous_tracks.map(convertTrack),
                                    track: convertTrack(current_track)
                                };
                            }
                            _this4.updateState(_objectSpread({
                                error: "",
                                errorType: null,
                                isActive: true,
                                isPlaying: isPlaying,
                                progressMs: position,
                                volume: round(volume)
                            }, trackState));
                            return [
                                3,
                                5
                            ];
                        case 2:
                            if (!_this4.isExternalPlayer) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                _this4.syncDevice()
                            ];
                        case 3:
                            _state.sent();
                            return [
                                3,
                                5
                            ];
                        case 4:
                            _this4.updateState({
                                isActive: false,
                                isPlaying: false,
                                nextTracks: [],
                                position: 0,
                                previousTracks: [],
                                track: {
                                    artists: [],
                                    durationMs: 0,
                                    id: "",
                                    image: "",
                                    name: "",
                                    uri: ""
                                }
                            });
                            _state.label = 5;
                        case 5:
                            return [
                                3,
                                7
                            ];
                        case 6:
                            error = _state.sent();
                            console.error(error);
                            return [
                                3,
                                7
                            ];
                        case 7:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(state) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this5 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "handlePlayerStatus", function() {
            var _ref = _asyncToGenerator(function(param) {
                var device_id, _ref, currentDeviceId, devices;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            device_id = param.device_id;
                            return [
                                4,
                                _this5.initializeDevices(device_id)
                            ];
                        case 1:
                            _ref = _state.sent(), currentDeviceId = _ref.currentDeviceId, devices = _ref.devices;
                            _this5.updateState({
                                currentDeviceId: currentDeviceId,
                                deviceId: device_id,
                                devices: devices,
                                isInitializing: false,
                                status: device_id ? STATUS.READY : STATUS.IDLE
                            });
                            return [
                                2
                            ];
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        __publicField(_assertThisInitialized(_this), "handleResize", function() {
            var _this_props = _this.props, _this_props_layout = _this_props.layout, layout = _this_props_layout === void 0 ? "responsive" : _this_props_layout;
            clearTimeout(_this.resizeTimeout);
            _this.resizeTimeout = window.setTimeout(function() {
                _this.renderInlineActions = window.innerWidth >= 768 && layout === "responsive";
                _this.forceUpdate();
            }, 100);
        });
        __publicField(_assertThisInitialized(_this), "handleToggleMagnify", function() {
            var magnifySliderOnHover = _this.props.magnifySliderOnHover;
            if (magnifySliderOnHover) {
                _this.updateState(function(previousState) {
                    return {
                        isMagnified: !previousState.isMagnified
                    };
                });
            }
        });
        __publicField(_assertThisInitialized(_this), "initializePlayer", function() {
            var volume = _this.state.volume;
            var _this_props = _this.props, _this_props_getOAuthToken = _this_props.getOAuthToken, getOAuthToken = _this_props_getOAuthToken === void 0 ? function(callback) {
                callback(_this.token);
            } : _this_props_getOAuthToken, _this_props_name = _this_props.name, name = _this_props_name === void 0 ? "Spotify Web Player" : _this_props_name;
            if (!window.Spotify) {
                return;
            }
            _this.updateState({
                error: "",
                errorType: null,
                isInitializing: true
            });
            _this.player = new window.Spotify.Player({
                getOAuthToken: getOAuthToken,
                name: name,
                volume: volume
            });
            _this.player.addListener("ready", _this.handlePlayerStatus);
            _this.player.addListener("not_ready", _this.handlePlayerStatus);
            _this.player.addListener("player_state_changed", _this.handlePlayerStateChanges);
            _this.player.addListener("initialization_error", function(error) {
                return _this.handlePlayerErrors(ERROR_TYPE.INITIALIZATION, error.message);
            });
            _this.player.addListener("authentication_error", function(error) {
                return _this.handlePlayerErrors(ERROR_TYPE.AUTHENTICATION, error.message);
            });
            _this.player.addListener("account_error", function(error) {
                return _this.handlePlayerErrors(ERROR_TYPE.ACCOUNT, error.message);
            });
            _this.player.addListener("playback_error", function(error) {
                return _this.handlePlayerErrors(ERROR_TYPE.PLAYBACK, error.message);
            });
            _this.player.addListener("autoplay_failed", /*#__PURE__*/ _asyncToGenerator(function() {
                return __generator(this, function(_state) {
                    console.log("Autoplay is not allowed by the browser autoplay rules");
                    return [
                        2
                    ];
                });
            }));
            _this.player.connect();
        });
        __publicField(_assertThisInitialized(_this), "setExternalDevice", function(id) {
            _this.updateState({
                currentDeviceId: id,
                isPlaying: true
            });
        });
        var _this6 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "setVolume", function() {
            var _ref = _asyncToGenerator(function(volume) {
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!_this6.isExternalPlayer) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                setVolume(_this6.token, Math.round(volume * 100))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                _this6.syncDevice()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                5
                            ];
                        case 3:
                            if (!_this6.player) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                _this6.player.setVolume(volume)
                            ];
                        case 4:
                            _state.sent();
                            _state.label = 5;
                        case 5:
                            _this6.updateState({
                                volume: volume
                            });
                            return [
                                2
                            ];
                    }
                });
            });
            return function(volume) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this7 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "syncDevice", /*#__PURE__*/ _asyncToGenerator(function() {
            var deviceId, player, track, error, state;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!_this7.isMounted) {
                            return [
                                2
                            ];
                        }
                        deviceId = _this7.state.deviceId;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            getPlaybackState(_this7.token)
                        ];
                    case 2:
                        player = _state.sent();
                        track = _this7.emptyTrack;
                        if (!player) {
                            throw new Error("No player");
                        }
                        if (player.item) {
                            track = {
                                artists: player.item.artists,
                                durationMs: player.item.duration_ms,
                                id: player.item.id,
                                image: getAlbumImage(player.item.album),
                                name: player.item.name,
                                uri: player.item.uri
                            };
                        }
                        _this7.updateState({
                            error: "",
                            errorType: null,
                            isActive: true,
                            isPlaying: player.is_playing,
                            nextTracks: [],
                            previousTracks: [],
                            progressMs: player.item ? player.progress_ms : 0,
                            status: STATUS.READY,
                            track: track,
                            volume: parseVolume(player.device.volume_percent)
                        });
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        state = {
                            isActive: false,
                            isPlaying: false,
                            position: 0,
                            track: _this7.emptyTrack
                        };
                        if (deviceId) {
                            _this7.updateState(_objectSpread({
                                currentDeviceId: deviceId
                            }, state));
                            return [
                                2
                            ];
                        }
                        _this7.updateState(_objectSpread({
                            error: error.message,
                            errorType: ERROR_TYPE.PLAYER,
                            status: STATUS.ERROR
                        }, state));
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        }));
        var _this8 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "toggleOffset", /*#__PURE__*/ _asyncToGenerator(function() {
            var currentDeviceId, _this_props, offset, uris;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        currentDeviceId = _this8.state.currentDeviceId;
                        _this_props = _this8.props, offset = _this_props.offset, uris = _this_props.uris;
                        if (!(typeof offset === "number" && Array.isArray(uris))) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            play(_this8.token, {
                                deviceId: currentDeviceId,
                                offset: offset,
                                uris: uris
                            })
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        }));
        var _this9 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "togglePlay", /*#__PURE__*/ _asyncToGenerator(function() {
            var force, _this_state, currentDeviceId, isPlaying, needsUpdate, _this_props, offset, uris, shouldInitialize, playOptions, playerState, shouldPlay, error;
            var _arguments = arguments;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        force = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
                        _this_state = _this9.state, currentDeviceId = _this_state.currentDeviceId, isPlaying = _this_state.isPlaying, needsUpdate = _this_state.needsUpdate;
                        _this_props = _this9.props, offset = _this_props.offset, uris = _this_props.uris;
                        shouldInitialize = force || needsUpdate;
                        playOptions = _this9.getPlayOptions(uris);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            14,
                            ,
                            15
                        ]);
                        if (!_this9.isExternalPlayer) return [
                            3,
                            6
                        ];
                        if (!!isPlaying) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            play(_this9.token, _objectSpread({
                                deviceId: currentDeviceId,
                                offset: offset
                            }, shouldInitialize ? playOptions : void 0))
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            5
                        ];
                    case 3:
                        return [
                            4,
                            pause(_this9.token)
                        ];
                    case 4:
                        _state.sent();
                        _this9.updateState({
                            isPlaying: false
                        });
                        _state.label = 5;
                    case 5:
                        _this9.syncTimeout = window.setTimeout(function() {
                            _this9.syncDevice();
                        }, 300);
                        return [
                            3,
                            13
                        ];
                    case 6:
                        if (!_this9.player) return [
                            3,
                            13
                        ];
                        return [
                            4,
                            _this9.player.activateElement()
                        ];
                    case 7:
                        _state.sent();
                        return [
                            4,
                            _this9.player.getCurrentState()
                        ];
                    case 8:
                        playerState = _state.sent();
                        shouldPlay = !playerState && !!(playOptions.context_uri || playOptions.uris);
                        if (!(shouldPlay || shouldInitialize)) return [
                            3,
                            11
                        ];
                        return [
                            4,
                            play(_this9.token, _objectSpread({
                                deviceId: currentDeviceId,
                                offset: offset
                            }, shouldInitialize ? playOptions : void 0))
                        ];
                    case 9:
                        _state.sent();
                        return [
                            4,
                            _this9.player.togglePlay()
                        ];
                    case 10:
                        _state.sent();
                        return [
                            3,
                            13
                        ];
                    case 11:
                        return [
                            4,
                            _this9.player.togglePlay()
                        ];
                    case 12:
                        _state.sent();
                        _state.label = 13;
                    case 13:
                        if (needsUpdate) {
                            _this9.updateState({
                                needsUpdate: false
                            });
                        }
                        return [
                            3,
                            15
                        ];
                    case 14:
                        error = _state.sent();
                        console.error(error);
                        return [
                            3,
                            15
                        ];
                    case 15:
                        return [
                            2
                        ];
                }
            });
        }));
        var _this10 = _assertThisInitialized(_this);
        __publicField(_assertThisInitialized(_this), "updateSeekBar", function() {
            var _ref = _asyncToGenerator(function(setNextSong) {
                var _this_state, progressMs, track, position, state, progress, position1, error;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!_this10.isMounted) {
                                return [
                                    2
                                ];
                            }
                            _this_state = _this10.state, progressMs = _this_state.progressMs, track = _this_state.track;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            if (!_this10.isExternalPlayer) return [
                                3,
                                2
                            ];
                            position = progressMs / track.durationMs;
                            position = Number(((Number.isFinite(position) ? position : 0) * 100).toFixed(1));
                            _this10.updateState({
                                position: position,
                                progressMs: progressMs + _this10.seekUpdateInterval
                            });
                            if (position === 100 && setNextSong) {
                                setNextSong();
                            }
                            return [
                                3,
                                4
                            ];
                        case 2:
                            if (!_this10.player) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                _this10.player.getCurrentState()
                            ];
                        case 3:
                            state = _state.sent();
                            if (state) {
                                progress = state.position;
                                position1 = Number((progress / state.track_window.current_track.duration_ms * 100).toFixed(1));
                                _this10.updateState({
                                    position: position1,
                                    progressMs: progress + _this10.seekUpdateInterval
                                });
                                if (position1 === 100 && setNextSong) {
                                    setNextSong();
                                }
                            }
                            _state.label = 4;
                        case 4:
                            return [
                                3,
                                6
                            ];
                        case 5:
                            error = _state.sent();
                            console.error(error);
                            return [
                                3,
                                6
                            ];
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(setNextSong) {
                return _ref.apply(this, arguments);
            };
        }());
        __publicField(_assertThisInitialized(_this), "updateState", function(state) {
            if (!_this.isMounted) {
                return;
            }
            _this.setState(state);
        });
        _this.state = {
            currentDeviceId: "",
            deviceId: "",
            devices: [],
            error: "",
            errorType: null,
            isActive: false,
            isInitializing: false,
            isMagnified: false,
            isPlaying: false,
            isSaved: false,
            isUnsupported: false,
            needsUpdate: false,
            nextTracks: [],
            playerPosition: "bottom",
            position: 0,
            previousTracks: [],
            progressMs: 0,
            status: STATUS.IDLE,
            track: _this.emptyTrack,
            volume: parseVolume(props.initialVolume) || 1
        };
        _this.locale = getLocale(props.locale);
        _this.styles = getMergedStyles(props.styles);
        return _this;
    }
    _createClass(SpotifyWebPlayer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                return _asyncToGenerator(function() {
                    var _this_ref_current, _ref, _ref_top, top;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.isMounted = true;
                                _ref = ((_this_ref_current = _this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.getBoundingClientRect()) || {}, _ref_top = _ref.top, top = _ref_top === void 0 ? 0 : _ref_top;
                                _this.updateState({
                                    playerPosition: top > window.innerHeight / 2 ? "bottom" : "top",
                                    status: STATUS.INITIALIZING
                                });
                                if (!window.onSpotifyWebPlaybackSDKReady) {
                                    window.onSpotifyWebPlaybackSDKReady = _this.initializePlayer;
                                } else {
                                    _this.initializePlayer();
                                }
                                return [
                                    4,
                                    loadSpotifyPlayer()
                                ];
                            case 1:
                                _state.sent();
                                window.addEventListener("resize", _this.handleResize);
                                _this.handleResize();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(previousProps, previousState) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var _this_state, currentDeviceId, deviceId, isInitializing, isPlaying, status, track, volume, _this_props, autoPlay, layout, locale, offset, playProp, setNextSong, setVolumeProp, showSaveIcon, styles, syncExternalDevice, uris, isReady, changedLayout, changedLocale, changedStyles, changedURIs, playOptions, canPlay, shouldPlay, player;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_state = _this.state, currentDeviceId = _this_state.currentDeviceId, deviceId = _this_state.deviceId, isInitializing = _this_state.isInitializing, isPlaying = _this_state.isPlaying, status = _this_state.status, track = _this_state.track, volume = _this_state.volume;
                                _this_props = _this.props, autoPlay = _this_props.autoPlay, layout = _this_props.layout, locale = _this_props.locale, offset = _this_props.offset, playProp = _this_props.play, setNextSong = _this_props.setNextSong, setVolumeProp = _this_props.setVolume, showSaveIcon = _this_props.showSaveIcon, styles = _this_props.styles, syncExternalDevice = _this_props.syncExternalDevice, uris = _this_props.uris;
                                isReady = previousState.status !== STATUS.READY && status === STATUS.READY;
                                changedLayout = !(0, import_deep_equal.default)(previousProps.layout, layout);
                                changedLocale = !(0, import_deep_equal.default)(previousProps.locale, locale);
                                changedStyles = !(0, import_deep_equal.default)(previousProps.styles, styles);
                                changedURIs = !(0, import_deep_equal.default)(previousProps.uris, uris);
                                playOptions = _this.getPlayOptions(uris);
                                canPlay = !!currentDeviceId && !!(playOptions.context_uri || playOptions.uris);
                                shouldPlay = isReady && (autoPlay || playProp);
                                if (!(canPlay && shouldPlay)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.togglePlay(true)
                                ];
                            case 1:
                                _state.sent();
                                if (!isPlaying) {
                                    _this.updateState({
                                        isPlaying: true
                                    });
                                }
                                if (_this.isExternalPlayer) {
                                    _this.syncTimeout = window.setTimeout(function() {
                                        _this.syncDevice();
                                    }, 600);
                                }
                                return [
                                    3,
                                    8
                                ];
                            case 2:
                                if (!changedURIs) return [
                                    3,
                                    6
                                ];
                                if (!(isPlaying || playProp)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.togglePlay(true)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                _this.updateState({
                                    needsUpdate: true
                                });
                                _state.label = 5;
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                if (!(previousProps.play !== playProp && playProp !== isPlaying)) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    _this.togglePlay(!track.id)
                                ];
                            case 7:
                                _state.sent();
                                _state.label = 8;
                            case 8:
                                if (previousState.status !== status) {
                                    _this.handleCallback(_objectSpreadProps(_objectSpread({}, _this.state), {
                                        type: TYPE.STATUS
                                    }));
                                }
                                if (!(previousState.currentDeviceId !== currentDeviceId && currentDeviceId)) return [
                                    3,
                                    11
                                ];
                                if (!isReady) {
                                    _this.handleCallback(_objectSpreadProps(_objectSpread({}, _this.state), {
                                        type: TYPE.DEVICE
                                    }));
                                }
                                return [
                                    4,
                                    _this.toggleSyncInterval(_this.isExternalPlayer)
                                ];
                            case 9:
                                _state.sent();
                                return [
                                    4,
                                    _this.updateSeekBar(setNextSong)
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                if (previousState.track.id !== track.id && track.id) {
                                    _this.handleCallback(_objectSpreadProps(_objectSpread({}, _this.state), {
                                        type: TYPE.TRACK
                                    }));
                                    if (showSaveIcon) {
                                        _this.updateState({
                                            isSaved: false
                                        });
                                    }
                                }
                                if (!(previousState.isPlaying !== isPlaying)) return [
                                    3,
                                    13
                                ];
                                _this.toggleProgressBar();
                                return [
                                    4,
                                    _this.toggleSyncInterval(_this.isExternalPlayer)
                                ];
                            case 12:
                                _state.sent();
                                _this.handleCallback(_objectSpreadProps(_objectSpread({}, _this.state), {
                                    type: TYPE.PLAYER
                                }));
                                _state.label = 13;
                            case 13:
                                if (!(previousProps.offset !== offset)) return [
                                    3,
                                    15
                                ];
                                return [
                                    4,
                                    _this.toggleOffset()
                                ];
                            case 14:
                                _state.sent();
                                _state.label = 15;
                            case 15:
                                if (!(previousState.isInitializing && !isInitializing)) return [
                                    3,
                                    17
                                ];
                                if (!(syncExternalDevice && !uris)) return [
                                    3,
                                    17
                                ];
                                return [
                                    4,
                                    getPlaybackState(_this.token)
                                ];
                            case 16:
                                player = _state.sent();
                                if (player && player.is_playing && player.device.id !== deviceId) {
                                    _this.setExternalDevice(player.device.id);
                                }
                                _state.label = 17;
                            case 17:
                                if (!(setVolumeProp && setVolumeProp !== volume)) return [
                                    3,
                                    19
                                ];
                                return [
                                    4,
                                    _this.setVolume(setVolumeProp)
                                ];
                            case 18:
                                _state.sent();
                                _state.label = 19;
                            case 19:
                                if (changedLayout) {
                                    _this.handleResize();
                                }
                                if (changedLocale) {
                                    _this.locale = getLocale(locale);
                                }
                                if (changedStyles) {
                                    _this.styles = getMergedStyles(styles);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        _this.isMounted = false;
                        if (_this.player) {
                            _this.player.disconnect();
                        }
                        clearInterval(_this.playerSyncInterval);
                        clearInterval(_this.playerProgressInterval);
                        clearTimeout(_this.syncTimeout);
                        window.removeEventListener("resize", _this.handleResize);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "handleCallback",
            value: function handleCallback(state) {
                var callback = this.props.callback;
                if (callback) {
                    callback(state);
                }
            }
        },
        {
            key: "token",
            get: function get() {
                var token = this.props.token;
                return token;
            }
        },
        {
            key: "initializeDevices",
            value: function initializeDevices(id) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var persistDeviceSelection, devices, currentDeviceId, savedDeviceId;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                persistDeviceSelection = _this.props.persistDeviceSelection;
                                return [
                                    4,
                                    getDevices(_this.token)
                                ];
                            case 1:
                                devices = _state.sent().devices;
                                currentDeviceId = id;
                                if (persistDeviceSelection) {
                                    savedDeviceId = sessionStorage.getItem("rswpDeviceId");
                                    if (!savedDeviceId || !devices.some(function(d) {
                                        return d.id === savedDeviceId;
                                    })) {
                                        sessionStorage.setItem("rswpDeviceId", currentDeviceId);
                                    } else {
                                        currentDeviceId = savedDeviceId;
                                    }
                                }
                                return [
                                    2,
                                    {
                                        currentDeviceId: currentDeviceId,
                                        devices: devices
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "isExternalPlayer",
            get: function get() {
                var _this_state = this.state, currentDeviceId = _this_state.currentDeviceId, deviceId = _this_state.deviceId, status = _this_state.status;
                return currentDeviceId && currentDeviceId !== deviceId || status === STATUS.UNSUPPORTED;
            }
        },
        {
            key: "toggleSyncInterval",
            value: function toggleSyncInterval(shouldSync) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var syncExternalDeviceInterval, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                syncExternalDeviceInterval = _this.props.syncExternalDeviceInterval;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                if (!(_this.isExternalPlayer && shouldSync && !_this.playerSyncInterval)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.syncDevice()
                                ];
                            case 2:
                                _state.sent();
                                clearInterval(_this.playerSyncInterval);
                                _this.playerSyncInterval = window.setInterval(_this.syncDevice, syncExternalDeviceInterval * 1e3);
                                _state.label = 3;
                            case 3:
                                if ((!shouldSync || !_this.isExternalPlayer) && _this.playerSyncInterval) {
                                    clearInterval(_this.playerSyncInterval);
                                    _this.playerSyncInterval = void 0;
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                error = _state.sent();
                                console.error(error);
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "toggleProgressBar",
            value: function toggleProgressBar() {
                var isPlaying = this.state.isPlaying;
                if (isPlaying) {
                    if (!this.playerProgressInterval) {
                        this.playerProgressInterval = window.setInterval(this.updateSeekBar, this.seekUpdateInterval);
                    }
                } else if (this.playerProgressInterval) {
                    clearInterval(this.playerProgressInterval);
                    this.playerProgressInterval = void 0;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_state = this.state, currentDeviceId = _this_state.currentDeviceId, deviceId = _this_state.deviceId, devices = _this_state.devices, error = _this_state.error, isActive = _this_state.isActive, isMagnified = _this_state.isMagnified, // isPlaying,
                isUnsupported = _this_state.isUnsupported, // nextTracks,
                playerPosition = _this_state.playerPosition, position = _this_state.position, // previousTracks,
                progressMs = _this_state.progressMs, status = _this_state.status, track = _this_state.track, volume = _this_state.volume;
                var _this_props = this.props, _this_props_hideAttribution = _this_props.hideAttribution, hideAttribution = _this_props_hideAttribution === void 0 ? false : _this_props_hideAttribution, _this_props_hideCoverArt = _this_props.hideCoverArt, hideCoverArt = _this_props_hideCoverArt === void 0 ? false : _this_props_hideCoverArt, _this_props_inlineVolume = _this_props.inlineVolume, inlineVolume = _this_props_inlineVolume === void 0 ? true : _this_props_inlineVolume, _this_props_layout = _this_props.layout, layout = _this_props_layout === void 0 ? "responsive" : _this_props_layout, showSaveIcon = _this_props.showSaveIcon, updateSavedStatus = _this_props.updateSavedStatus;
                var isReady = [
                    STATUS.READY,
                    STATUS.UNSUPPORTED
                ].includes(status);
                var output = {
                    main: /* @__PURE__ */ import_react23.default.createElement(Loader, {
                        styles: this.styles
                    })
                };
                if (isReady) {
                    if (!output.info) {
                        output.info = /* @__PURE__ */ import_react23.default.createElement(Info_default, {
                            hideAttribution: hideAttribution,
                            hideCoverArt: hideCoverArt,
                            isActive: isActive,
                            layout: layout,
                            locale: this.locale,
                            onFavoriteStatusChange: this.handleFavoriteStatusChange,
                            showSaveIcon: showSaveIcon,
                            styles: this.styles,
                            token: this.token,
                            track: track,
                            updateSavedStatus: updateSavedStatus
                        });
                    }
                    output.devices = /* @__PURE__ */ import_react23.default.createElement(Devices, {
                        currentDeviceId: currentDeviceId,
                        deviceId: deviceId,
                        devices: devices,
                        layout: layout,
                        locale: this.locale,
                        onClickDevice: this.handleClickDevice,
                        open: isUnsupported && !deviceId,
                        playerPosition: playerPosition,
                        styles: this.styles
                    });
                    output.volume = currentDeviceId ? /* @__PURE__ */ import_react23.default.createElement(Volume, {
                        inlineVolume: inlineVolume,
                        layout: layout,
                        locale: this.locale,
                        playerPosition: playerPosition,
                        setVolume: this.setVolume,
                        styles: this.styles,
                        volume: volume
                    }) : null;
                    if (this.renderInlineActions) {
                        output.actions = /* @__PURE__ */ import_react23.default.createElement(Actions_default, {
                            layout: layout,
                            styles: this.styles
                        }, output.devices, output.volume);
                    }
                    output.controls = /* @__PURE__ */ import_react23.default.createElement(Controls_default, {
                        durationMs: track.durationMs,
                        isMagnified: isMagnified,
                        onChangeRange: this.handleChangeRange,
                        onToggleMagnify: this.handleToggleMagnify,
                        position: position,
                        progressMs: progressMs,
                        styles: this.styles
                    });
                    output.main = /* @__PURE__ */ import_react23.default.createElement("div", null, output.controls);
                } else if (output.info) {
                    output.main = output.info;
                }
                if (status === STATUS.ERROR) {
                    output.main = /* @__PURE__ */ import_react23.default.createElement(ErrorMessage, {
                        styles: this.styles
                    }, error);
                }
                return(// <Player ref={this.ref} data-ready={isReady} styles={this.styles}>
                /* @__PURE__ */ import_react23.default.createElement("div", null, output.main));
            }
        }
    ]);
    return SpotifyWebPlayer;
}(import_react23.PureComponent);
// eslint-disable-next-line react/static-property-placement
__publicField(SpotifyWebPlayer, "defaultProps", {
    autoPlay: false,
    initialVolume: 1,
    magnifySliderOnHover: false,
    name: "Spotify Web Player",
    persistDeviceSelection: false,
    showSaveIcon: false,
    syncExternalDeviceInterval: 5,
    syncExternalDevice: false
});
var src_default = SpotifyWebPlayer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    ERROR_TYPE: ERROR_TYPE,
    STATUS: STATUS,
    TYPE: TYPE
}); /*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
//# sourceMappingURL=index.js.map