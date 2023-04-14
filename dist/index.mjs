var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
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
    function A(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
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
    exports.useDebugValue = function() {
    };
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
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
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
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
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
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
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
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
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
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
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
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
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
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
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
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
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
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent2.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent2;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef2() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
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
          switch (type) {
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
            switch (type.$$typeof) {
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
              case REACT_LAZY_TYPE: {
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
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
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
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
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
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
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
        function createElement2(type, config, children) {
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
            for (propName in config) {
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
            for (var i = 0; i < childrenLength; i++) {
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
            for (propName in defaultProps) {
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
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
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
            for (propName in config) {
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
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
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
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
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
            for (var i = 0; i < children.length; i++) {
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
              while (!(step = iterator.next()).done) {
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
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
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
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
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
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
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
        }
        function lazy(ctor) {
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
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
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
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
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
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
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
        }
        function memo6(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
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
        }
        function useState5(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef5(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect5(create2, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create2, deps);
        }
        function useInsertionEffect(create2, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create2, deps);
        }
        function useLayoutEffect(create2, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create2, deps);
        }
        function useCallback3(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create2, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create2, deps);
        }
        function useImperativeHandle(ref, create2, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create2, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
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
        }
        function reenableLogs() {
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
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
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
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
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
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
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
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
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
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
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
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
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
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
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
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
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
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
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
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
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
        }
        function createElementWithValidation(type, props, children) {
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
              typeString = typeof type;
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
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
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
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
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
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
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
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
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
                  Promise.resolve().then(function() {
                  }).then(function() {
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
                  then: function(resolve, reject) {
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
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
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
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
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
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production_min();
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/index.tsx
var import_react23 = __toESM(require_react());
import isEqual from "@gilbarbara/deep-equal";
import memoize from "memoize-one";

// src/components/Actions.tsx
var import_react2 = __toESM(require_react());

// src/modules/styled.tsx
var import_react = __toESM(require_react());
import { create } from "nano-css";
import { addon as addonJSX } from "nano-css/addon/jsx.js";
import { addon as addonKeyframes } from "nano-css/addon/keyframes.js";
import { addon as addonNesting } from "nano-css/addon/nesting.js";
import { addon as addonRule } from "nano-css/addon/rule.js";
import { addon as addonStyle } from "nano-css/addon/style.js";
import { addon as addonStyled } from "nano-css/addon/styled.js";
import {} from "nano-css";
var nano = create({ h: import_react.createElement });
addonRule(nano);
addonKeyframes(nano);
addonJSX(nano);
addonStyle(nano);
addonStyled(nano);
addonNesting(nano);
var { keyframes, put, styled } = nano;
var px = (value) => typeof value === "number" ? `${value}px` : value;

// src/components/Actions.tsx
var Wrapper = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    "pointer-events": "none"
  },
  ({ style }) => {
    let styles = {
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
    return {
      height: px(32),
      ...styles
    };
  },
  "ActionsRSWP"
);
function Actions(props) {
  const { children, layout, styles } = props;
  return /* @__PURE__ */ import_react2.default.createElement(Wrapper, { "data-component-name": "Actions", style: { h: styles.height, layout } }, children);
}
var Actions_default = (0, import_react2.memo)(Actions);

// src/components/Controls.tsx
var import_react4 = __toESM(require_react());

// src/components/Slider.tsx
var import_react3 = __toESM(require_react());
import RangeSlider from "@gilbarbara/react-range-slider";

// src/modules/helpers.ts
function convertTrack(track) {
  const { album, artists, duration_ms, id, name, uri } = track;
  return {
    artists,
    durationMs: duration_ms,
    id: id ?? "",
    image: getAlbumImage(album),
    name,
    uri
  };
}
function getAlbumImage(album) {
  const maxWidth = Math.max(...album.images.map((d) => d.width || 0));
  return album.images.find((d) => d.width === maxWidth)?.url || "";
}
function isNumber(value) {
  return typeof value === "number";
}
function loadSpotifyPlayer() {
  return new Promise((resolve, reject) => {
    const scriptTag = document.getElementById("spotify-player");
    if (!scriptTag) {
      const script = document.createElement("script");
      script.id = "spotify-player";
      script.type = "text/javascript";
      script.async = false;
      script.defer = true;
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.onload = () => resolve();
      script.onerror = (error) => reject(new Error(`loadScript: ${error.message}`));
      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
}
function millisecondsToTime(input) {
  const seconds = Math.floor(input / 1e3 % 60);
  const minutes = Math.floor(input / (1e3 * 60) % 60);
  const hours = Math.floor(input / (1e3 * 60 * 60) % 24);
  const parts = [];
  if (hours > 0) {
    parts.push(
      `${hours}`.padStart(2, "0"),
      `${minutes}`.padStart(2, "0"),
      `${seconds}`.padStart(2, "0")
    );
  } else {
    parts.push(`${minutes}`, `${seconds}`.padStart(2, "0"));
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
function round(number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(number * factor) / factor;
}
function validateURI(input) {
  const validTypes = ["album", "artist", "playlist", "show", "track"];
  if (input && input.indexOf(":") > -1) {
    const [key, type, id] = input.split(":");
    if (key === "spotify" && validTypes.indexOf(type) >= 0 && id.length === 22) {
      return true;
    }
  }
  return false;
}

// src/components/Slider.tsx
var Wrapper2 = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    fontSize: px(12),
    transition: "height 0.3s",
    zIndex: 10
  },
  ({ style }) => ({
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
  }),
  "SliderRSWP"
);
function Slider(props) {
  const { durationMs, isMagnified, onChangeRange, onToggleMagnify, position, progressMs, styles } = props;
  const handleChangeRange = async ({ x }) => {
    onChangeRange(x);
  };
  const handleSize = styles.sliderHeight + 6;
  return /* @__PURE__ */ import_react3.default.createElement(
    Wrapper2,
    {
      "data-component-name": "Slider",
      "data-position": position,
      onMouseEnter: onToggleMagnify,
      onMouseLeave: onToggleMagnify,
      style: {
        c: styles.color,
        sliderHeight: styles.sliderHeight
      }
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "rswp_progress", style: { fontFamily: styles.sliderDurationFontFamily, fontSize: styles.sliderDurationFontSize } }, millisecondsToTime(progressMs)),
    /* @__PURE__ */ import_react3.default.createElement(
      RangeSlider,
      {
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
      }
    ),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "rswp_duration", style: { fontFamily: styles.sliderDurationFontFamily, fontSize: styles.sliderDurationFontSize } }, millisecondsToTime(durationMs))
  );
}
var Slider_default = (0, import_react3.memo)(Slider);

// src/components/Controls.tsx
function Controls(props) {
  const {
    // devices,
    durationMs,
    // isExternalDevice,
    isMagnified,
    // isPlaying,
    // layout,
    // locale,
    // nextTracks,
    onChangeRange,
    // onClickNext,
    // onClickPrevious,
    // onClickTogglePlay,
    onToggleMagnify,
    position,
    // previousTracks,
    progressMs,
    styles
    // volume,
  } = props;
  return /* @__PURE__ */ import_react4.default.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ import_react4.default.createElement(
    Slider_default,
    {
      durationMs,
      isMagnified,
      onChangeRange,
      onToggleMagnify,
      position,
      progressMs,
      styles
    }
  ));
}
var Controls_default = (0, import_react4.memo)(Controls);
{
}

// src/components/Devices.tsx
var import_react10 = __toESM(require_react());

// src/components/ClickOutside.tsx
var import_react5 = __toESM(require_react());
function ClickOutside(props) {
  const { children, isActive, onClick, ...rest } = props;
  const containerRef = (0, import_react5.useRef)(null);
  const isTouch = (0, import_react5.useRef)(false);
  const handleClick = (0, import_react5.useRef)((event) => {
    const container = containerRef.current;
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
  (0, import_react5.useEffect)(() => {
    const { current } = handleClick;
    if (isActive) {
      document.addEventListener("touchend", current, true);
      document.addEventListener("click", current, true);
    }
    return () => {
      document.removeEventListener("touchend", current, true);
      document.removeEventListener("click", current, true);
    };
  }, [isActive]);
  return /* @__PURE__ */ import_react5.default.createElement("div", { ref: containerRef, ...rest }, children);
}
var ClickOutside_default = (0, import_react5.memo)(ClickOutside);

// src/components/icons/Devices.tsx
var import_react6 = __toESM(require_react());
function DevicesIcon(props) {
  return /* @__PURE__ */ import_react6.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react6.default.createElement(
    "path",
    {
      d: "M57 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H31a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26ZM16 54v6H8v-6h8Zm41-44H31a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM44 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM16 4v6H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h9v6H7a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h9Zm28 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesComputer.tsx
var import_react7 = __toESM(require_react());
function DevicesComputerIcon(props) {
  return /* @__PURE__ */ import_react7.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react7.default.createElement(
    "path",
    {
      d: "M7.226 10.323a7.228 7.228 0 0 1 7.226-7.226h35.096a7.228 7.228 0 0 1 7.226 7.226V37.16a7.226 7.226 0 0 1-7.226 7.226H14.452a7.226 7.226 0 0 1-7.226-7.226V10.323Zm7.226-1.033c-.57 0-1.033.462-1.033 1.033V37.16c0 .57.463 1.033 1.033 1.033h35.096c.57 0 1.033-.463 1.033-1.033V10.323c0-.57-.463-1.033-1.033-1.033H14.452ZM0 57.806a3.097 3.097 0 0 1 3.097-3.096h57.806a3.097 3.097 0 0 1 0 6.193H3.097A3.097 3.097 0 0 1 0 57.806Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesMobile.tsx
var import_react8 = __toESM(require_react());
function DevicesMobileIcon(props) {
  return /* @__PURE__ */ import_react8.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react8.default.createElement(
    "path",
    {
      d: "M44.8 0a9.6 9.6 0 0 1 9.6 9.6v44.8a9.6 9.6 0 0 1-9.6 9.6H19.2a9.6 9.6 0 0 1-9.6-9.6V9.6A9.6 9.6 0 0 1 19.2 0h25.6Zm0 6.4H19.2A3.2 3.2 0 0 0 16 9.6v44.8a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V9.6a3.2 3.2 0 0 0-3.2-3.2ZM32 43.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesSpeaker.tsx
var import_react9 = __toESM(require_react());
function DevicesSpeakerIcon(props) {
  return /* @__PURE__ */ import_react9.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react9.default.createElement(
    "path",
    {
      d: "M45 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26Zm0 6H19a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM32 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0-16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/Devices.tsx
var Wrapper3 = styled("div")(
  {
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
        borderLeft: `6px solid transparent`,
        borderRight: `6px solid transparent`,
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
  },
  ({ style }) => {
    const isCompact = style.layout === "compact";
    const divStyles = isCompact ? {
      bottom: "120%",
      left: 0
    } : {
      [style.p]: "120%",
      left: 0,
      "@media (min-width: 768px)": {
        left: "auto",
        right: 0
      }
    };
    const spanStyles = isCompact ? {
      bottom: `-${px(6)}`,
      borderTop: `6px solid #000`,
      left: px(10)
    } : {
      [style.p === "top" ? "border-bottom" : "border-top"]: `6px solid #000`,
      [style.p]: "-6px",
      left: px(10),
      "@media (min-width: 768px)": {
        left: "auto",
        right: px(10)
      }
    };
    return {
      "> button": {
        color: style.c
      },
      "> div": {
        ...divStyles,
        "> span": spanStyles
      }
    };
  },
  "DevicesRSWP"
);
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
  const {
    currentDeviceId,
    deviceId,
    devices,
    layout,
    locale,
    onClickDevice,
    open,
    playerPosition,
    styles: { color }
  } = props;
  const [isOpen, setOpen] = (0, import_react10.useState)(open);
  const handleClickSetDevice = (event) => {
    const { dataset } = event.currentTarget;
    if (dataset.id) {
      onClickDevice(dataset.id);
      setOpen(false);
    }
  };
  const handleClickToggleList = (0, import_react10.useCallback)(() => {
    setOpen((s) => !s);
  }, []);
  const { currentDevice, otherDevices } = devices.reduce(
    (acc, device) => {
      if (device.id === currentDeviceId) {
        acc.currentDevice = device;
      } else {
        acc.otherDevices.push(device);
      }
      return acc;
    },
    { currentDevice: null, otherDevices: [] }
  );
  let icon = /* @__PURE__ */ import_react10.default.createElement(DevicesIcon, null);
  if (deviceId && currentDevice && currentDevice.id !== deviceId) {
    icon = getDeviceIcon(currentDevice.type);
  }
  return /* @__PURE__ */ import_react10.default.createElement(ClickOutside_default, { isActive: isOpen, onClick: handleClickToggleList }, /* @__PURE__ */ import_react10.default.createElement(
    Wrapper3,
    {
      "data-component-name": "Devices",
      "data-device-id": currentDeviceId,
      style: {
        c: color,
        layout,
        p: playerPosition
      }
    },
    !!devices.length && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, isOpen && /* @__PURE__ */ import_react10.default.createElement("div", null, currentDevice && /* @__PURE__ */ import_react10.default.createElement(ListHeader, null, /* @__PURE__ */ import_react10.default.createElement("p", null, locale.currentDevice), /* @__PURE__ */ import_react10.default.createElement("p", null, getDeviceIcon(currentDevice.type), /* @__PURE__ */ import_react10.default.createElement("span", null, currentDevice.name))), !!otherDevices.length && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("p", null, locale.otherDevices), otherDevices.map((device) => /* @__PURE__ */ import_react10.default.createElement(
      "button",
      {
        key: device.id,
        "aria-label": device.name,
        "data-id": device.id,
        onClick: handleClickSetDevice,
        type: "button"
      },
      getDeviceIcon(device.type),
      /* @__PURE__ */ import_react10.default.createElement("span", null, device.name)
    ))), /* @__PURE__ */ import_react10.default.createElement("span", null)), /* @__PURE__ */ import_react10.default.createElement(
      "button",
      {
        "aria-label": locale.devices,
        onClick: handleClickToggleList,
        title: locale.devices,
        type: "button"
      },
      icon
    ))
  ));
}

// src/components/ErrorMessage.tsx
var import_react11 = __toESM(require_react());
var Wrapper4 = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  ({ style }) => ({
    backgroundColor: style.bgColor,
    borderTop: `1px solid ${style.errorColor}`,
    color: style.errorColor,
    height: px(style.h)
  }),
  "ErrorRSWP"
);
function ErrorMessage({
  children,
  styles: { bgColor, errorColor, height }
}) {
  return /* @__PURE__ */ import_react11.default.createElement(Wrapper4, { "data-component-name": "ErrorMessage", style: { bgColor, errorColor, h: height } }, children);
}

// src/components/Info.tsx
var import_react16 = __toESM(require_react());
import { fade } from "colorizr";

// src/components/icons/Favorite.tsx
var import_react12 = __toESM(require_react());
function Favorite(props) {
  return /* @__PURE__ */ import_react12.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react12.default.createElement(
    "path",
    {
      d: "M63.673 16.52A17.676 17.676 0 0 0 49.197 2.563c-5.4-.861-10.891.852-14.844 4.63a3.43 3.43 0 0 1-4.672 0C22.956.689 12.305.62 5.498 7.039c-6.808 6.419-7.366 17.055-1.268 24.15l24.246 28.894a4.623 4.623 0 0 0 7.078 0L59.8 31.19a17.328 17.328 0 0 0 3.873-14.66v-.008Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/FavoriteOutline.tsx
var import_react13 = __toESM(require_react());
function FavoriteOutline(props) {
  return /* @__PURE__ */ import_react13.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ import_react13.default.createElement(
    "path",
    {
      d: "M5.944 7.206C13.271.3 24.723.34 31.999 7.3A18.924 18.924 0 0 1 48.02 2.32h.008a19.068 19.068 0 0 1 15.617 15.071v.013A18.759 18.759 0 0 1 59.47 33.26L37.573 59.353a7.288 7.288 0 0 1-8.642 1.916 7.276 7.276 0 0 1-2.498-1.912l-21.901-26.1c-6.55-7.671-5.93-19.131 1.408-26.051h.004Zm13.04 1.04a12.726 12.726 0 0 0-9.737 20.997l.021.02 21.905 26.105c.316.372.84.488 1.284.285.143-.066.27-.164.372-.285l21.934-26.137a12.565 12.565 0 0 0 2.808-10.625 12.875 12.875 0 0 0-10.534-10.17 12.714 12.714 0 0 0-10.785 3.37l-.029.029a6.198 6.198 0 0 1-8.444 0l-.037-.033a12.727 12.727 0 0 0-8.758-3.556Z",
      fill: "currentColor"
    }
  ));
}

// src/components/SpotifyLogo.tsx
var import_react14 = __toESM(require_react());
import { textColor } from "colorizr";
function SpotifyLogo({ bgColor, ...rest }) {
  return /* @__PURE__ */ import_react14.default.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 512 160", width: "3.2em", ...rest }, /* @__PURE__ */ import_react14.default.createElement(
    "path",
    {
      d: "M79.655 0C35.664 0 0 35.663 0 79.654c0 43.993 35.664 79.653 79.655 79.653 43.996 0 79.656-35.66 79.656-79.653 0-43.988-35.66-79.65-79.657-79.65L79.655 0Zm36.53 114.884a4.963 4.963 0 0 1-6.83 1.646c-18.702-11.424-42.246-14.011-69.973-7.676a4.967 4.967 0 0 1-5.944-3.738 4.958 4.958 0 0 1 3.734-5.945c30.343-6.933 56.37-3.948 77.367 8.884a4.965 4.965 0 0 1 1.645 6.83Zm9.75-21.689c-1.799 2.922-5.622 3.845-8.543 2.047-21.41-13.16-54.049-16.972-79.374-9.284a6.219 6.219 0 0 1-7.75-4.138 6.22 6.22 0 0 1 4.141-7.745c28.929-8.778 64.892-4.526 89.48 10.583 2.92 1.798 3.843 5.622 2.045 8.538Zm.836-22.585C101.1 55.362 58.742 53.96 34.231 61.4c-3.936 1.194-8.098-1.028-9.29-4.964a7.453 7.453 0 0 1 4.965-9.294c28.137-8.542 74.912-6.892 104.469 10.655a7.441 7.441 0 0 1 2.606 10.209c-2.092 3.54-6.677 4.707-10.206 2.605h-.004Zm89.944 2.922c-13.754-3.28-16.198-5.581-16.198-10.418 0-4.57 4.299-7.645 10.7-7.645 6.202 0 12.347 2.336 18.796 7.143.19.145.437.203.675.165a.888.888 0 0 0 .6-.367l6.715-9.466a.903.903 0 0 0-.171-1.225c-7.676-6.157-16.313-9.15-26.415-9.15-14.848 0-25.225 8.911-25.225 21.662 0 13.673 8.95 18.515 24.417 22.252 13.155 3.031 15.38 5.57 15.38 10.11 0 5.032-4.49 8.161-11.718 8.161-8.028 0-14.582-2.71-21.906-9.046a.932.932 0 0 0-.656-.218.89.89 0 0 0-.619.313l-7.533 8.96a.906.906 0 0 0 .086 1.256c8.522 7.61 19.004 11.624 30.323 11.624 16 0 26.339-8.742 26.339-22.277.028-11.421-6.81-17.746-23.561-21.821l-.029-.013Zm59.792-13.564c-6.934 0-12.622 2.732-17.321 8.33v-6.3c0-.498-.4-.903-.894-.903h-12.318a.899.899 0 0 0-.894.902v70.009c0 .494.4.903.894.903h12.318a.901.901 0 0 0 .894-.903v-22.097c4.699 5.26 10.387 7.838 17.32 7.838 12.89 0 25.94-9.92 25.94-28.886.019-18.97-13.032-28.894-25.93-28.894l-.01.001Zm11.614 28.893c0 9.653-5.945 16.397-14.468 16.397-8.418 0-14.772-7.048-14.772-16.397 0-9.35 6.354-16.397 14.772-16.397 8.38 0 14.468 6.893 14.468 16.396Zm47.759-28.893c-16.598 0-29.601 12.78-29.601 29.1 0 16.143 12.917 28.784 29.401 28.784 16.655 0 29.696-12.736 29.696-28.991 0-16.2-12.955-28.89-29.496-28.89v-.003Zm0 45.385c-8.827 0-15.485-7.096-15.485-16.497 0-9.444 6.43-16.298 15.285-16.298 8.884 0 15.58 7.093 15.58 16.504 0 9.443-6.468 16.291-15.38 16.291Zm64.937-44.258h-13.554V47.24c0-.497-.4-.902-.894-.902H374.05a.906.906 0 0 0-.904.902v13.855h-5.916a.899.899 0 0 0-.894.902v10.584a.9.9 0 0 0 .894.903h5.916v27.39c0 11.062 5.508 16.674 16.38 16.674 4.413 0 8.075-.914 11.528-2.873a.88.88 0 0 0 .457-.78v-10.083a.896.896 0 0 0-.428-.76.873.873 0 0 0-.876-.039c-2.368 1.19-4.66 1.741-7.229 1.741-3.947 0-5.716-1.798-5.716-5.812V73.49h13.554a.899.899 0 0 0 .894-.903V62.003a.873.873 0 0 0-.884-.903l-.01-.005Zm47.217.054v-1.702c0-5.006 1.921-7.238 6.22-7.238 2.57 0 4.633.51 6.945 1.28a.895.895 0 0 0 1.18-.858l-.001-10.377a.891.891 0 0 0-.637-.865c-2.435-.726-5.555-1.47-10.235-1.47-11.367 0-17.388 6.405-17.388 18.516v2.606h-5.916a.906.906 0 0 0-.904.902v10.638c0 .497.41.903.904.903h5.916v42.237c0 .504.41.904.904.904h12.308c.504 0 .904-.4.904-.904V73.487h11.5l17.616 42.234c-1.998 4.433-3.967 5.317-6.65 5.317-2.168 0-4.46-.646-6.79-1.93a.98.98 0 0 0-.714-.067.896.896 0 0 0-.533.485l-4.175 9.16a.9.9 0 0 0 .39 1.17c4.356 2.359 8.284 3.367 13.145 3.367 9.093 0 14.125-4.242 18.548-15.637l21.364-55.204a.88.88 0 0 0-.095-.838.878.878 0 0 0-.733-.392h-12.822a.901.901 0 0 0-.856.605l-13.136 37.509-14.382-37.534a.898.898 0 0 0-.837-.58h-21.04v-.003Zm-27.375-.054h-12.318a.907.907 0 0 0-.903.902v53.724c0 .504.409.904.903.904h12.318c.495 0 .904-.4.904-.904v-53.72a.9.9 0 0 0-.904-.903v-.003Zm-6.088-24.464c-4.88 0-8.836 3.95-8.836 8.828a8.835 8.835 0 0 0 8.836 8.836c4.88 0 8.827-3.954 8.827-8.836a8.83 8.83 0 0 0-8.827-8.828Z",
      fill: textColor(bgColor)
    }
  ));
}

// src/modules/getters.ts
function getLocale(locale) {
  return {
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
    volume: "Volume",
    ...locale
  };
}
function getMergedStyles(styles) {
  return {
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
    trackNameColor: "#333",
    ...styles
  };
}
function getSpotifyLink(uri) {
  const [, type = "", id = ""] = uri.split(":");
  return `https://open.spotify.com/${type}/${id}`;
}
function getSpotifyLinkTitle(name, locale) {
  return locale.replace("{name}", name);
}
function getSpotifyURIType(uri) {
  const [, type = ""] = uri.split(":");
  return type;
}

// src/modules/hooks.ts
var import_react15 = __toESM(require_react());
function useMediaQuery(input) {
  const getMatches = (query) => {
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = (0, import_react15.useState)(getMatches(input));
  function handleChange() {
    setMatches(getMatches(input));
  }
  (0, import_react15.useEffect)(() => {
    const matchMedia = window.matchMedia(input);
    handleChange();
    try {
      matchMedia.addEventListener("change", handleChange);
    } catch {
      matchMedia.addListener(handleChange);
    }
    return () => {
      try {
        matchMedia.removeEventListener("change", handleChange);
      } catch {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [input]);
  return matches;
}
function usePrevious(value) {
  const ref = (0, import_react15.useRef)();
  (0, import_react15.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// src/modules/spotify.ts
async function checkTracksStatus(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => d.json());
}
async function getDevices(token) {
  return fetch(`https://api.spotify.com/v1/me/player/devices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => d.json());
}
async function getPlaybackState(token) {
  return fetch(`https://api.spotify.com/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => {
    if (d.status === 204) {
      return null;
    }
    return d.json();
  });
}
async function pause(token) {
  return fetch(`https://api.spotify.com/v1/me/player/pause`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function play(token, { context_uri, deviceId, offset = 0, uris }) {
  let body;
  if (context_uri) {
    const isArtist = context_uri.indexOf("artist") >= 0;
    let position;
    if (!isArtist) {
      position = { position: offset };
    }
    body = JSON.stringify({ context_uri, offset: position });
  } else if (Array.isArray(uris) && uris.length) {
    body = JSON.stringify({ uris, offset: { position: offset } });
  }
  return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    body,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function removeTracks(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks`, {
    body: JSON.stringify(ids),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });
}
async function saveTracks(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks`, {
    body: JSON.stringify({ ids }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function seek(token, position) {
  return fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function setDevice(token, deviceId, shouldPlay) {
  return fetch(`https://api.spotify.com/v1/me/player`, {
    body: JSON.stringify({ device_ids: [deviceId], play: shouldPlay }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function setVolume(token, volume) {
  return fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}

// src/components/Info.tsx
var imageSize = 64;
var iconSize = 32;
var Wrapper5 = styled("div")(
  {
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
  },
  ({ style }) => {
    const isCompactLayout = style.layout === "compact";
    const styles = {};
    if (isCompactLayout) {
      styles.borderBottom = `1px solid ${fade(style.c, 40)}`;
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
        borderBottom: `1px solid ${fade(style.c, 40)}`,
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
    return {
      button: {
        color: style.c,
        "&.rswp__active": {
          color: style.activeColor
        }
      },
      ...styles
    };
  },
  "InfoRSWP"
);
var ContentWrapper = styled("div")(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "> a": {
      fontSize: px(22),
      marginTop: px(4)
    }
  },
  ({ style }) => {
    const isCompactLayout = style.layout === "compact";
    const styles = {};
    if (isCompactLayout) {
      styles.padding = px(8);
      styles.width = "100%";
    } else {
      styles.minHeight = px(imageSize);
      if (!style.hideCoverArt) {
        styles.marginLeft = px(8);
        styles.width = `calc(100% - ${px(imageSize + 8)})`;
      } else {
        styles.width = "100%";
      }
    }
    return styles;
  },
  "ContentWrapperRSWP"
);
var Content = styled("div")(
  {
    display: "flex",
    justifyContent: "start",
    '[data-type="title-artist-wrapper"]': {
      overflow: "hidden",
      div: {
        marginLeft: `-${px(8)}`,
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
  },
  ({ style }) => {
    return {
      '[data-type="title-artist-wrapper"]': {
        color: style.trackNameColor,
        maxWidth: `calc(100% - ${px(style.showSaveIcon ? iconSize : 0)})`,
        div: {
          "-webkit-mask-image": `linear-gradient(90deg,transparent 0, ${style.bgColor} 6px, ${style.bgColor} calc(100% - 12px),transparent)`
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
  },
  "ContentRSWP"
);
function Info(props) {
  const {
    hideAttribution,
    hideCoverArt,
    isActive,
    layout,
    locale,
    onFavoriteStatusChange,
    showSaveIcon,
    styles: { activeColor, bgColor, color, height, trackArtistColor, trackNameColor },
    token,
    track: { artists = [], id, image, name, uri },
    updateSavedStatus
  } = props;
  const [isSaved, setIsSaved] = (0, import_react16.useState)(false);
  const isMounted = (0, import_react16.useRef)(false);
  const previousId = usePrevious(id);
  const isCompactLayout = layout === "compact";
  const updateState = (state) => {
    if (!isMounted.current) {
      return;
    }
    setIsSaved(state);
  };
  const setStatus = async () => {
    if (!isMounted.current) {
      return;
    }
    if (updateSavedStatus && id) {
      updateSavedStatus((newStatus) => {
        updateState(newStatus);
      });
    }
    const status = await checkTracksStatus(token, id);
    const [isFavorite] = status || [false];
    updateState(isFavorite);
    onFavoriteStatusChange(isSaved);
  };
  (0, import_react16.useEffect)(() => {
    isMounted.current = true;
    if (showSaveIcon && id) {
      setStatus();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0, import_react16.useEffect)(() => {
    if (showSaveIcon && previousId !== id && id) {
      updateState(false);
      setStatus();
    }
  });
  const handleClickIcon = async () => {
    if (isSaved) {
      await removeTracks(token, id);
      updateState(false);
    } else {
      await saveTracks(token, id);
      updateState(true);
    }
    onFavoriteStatusChange(!isSaved);
  };
  const title = getSpotifyLinkTitle(name, locale.title);
  let favorite;
  if (showSaveIcon && id) {
    favorite = /* @__PURE__ */ import_react16.default.createElement(
      "button",
      {
        "aria-label": isSaved ? locale.removeTrack : locale.saveTrack,
        className: isSaved ? "rswp__active" : void 0,
        onClick: handleClickIcon,
        title: isSaved ? locale.removeTrack : locale.saveTrack,
        type: "button"
      },
      isSaved ? /* @__PURE__ */ import_react16.default.createElement(Favorite, null) : /* @__PURE__ */ import_react16.default.createElement(FavoriteOutline, null)
    );
  }
  const content = {};
  const classes = [];
  if (isActive) {
    classes.push("rswp__active");
  }
  if (isCompactLayout) {
    content.image = /* @__PURE__ */ import_react16.default.createElement("img", { alt: name, src: image });
  }
  if (!id) {
    return /* @__PURE__ */ import_react16.default.createElement("div", null);
  }
  return /* @__PURE__ */ import_react16.default.createElement(
    Wrapper5,
    {
      className: classes.join(" "),
      "data-component-name": "Info",
      style: {
        activeColor,
        c: color,
        h: height,
        layout,
        showSaveIcon
      }
    },
    !hideCoverArt && /* @__PURE__ */ import_react16.default.createElement(
      "a",
      {
        "aria-label": title,
        href: getSpotifyLink(uri),
        rel: "noreferrer",
        target: "_blank",
        title
      },
      /* @__PURE__ */ import_react16.default.createElement("img", { alt: name, src: image })
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      ContentWrapper,
      {
        style: {
          hideCoverArt,
          layout,
          showSaveIcon
        }
      },
      !!name && /* @__PURE__ */ import_react16.default.createElement(
        Content,
        {
          style: {
            bgColor,
            layout,
            showSaveIcon,
            trackArtistColor,
            trackNameColor
          }
        },
        /* @__PURE__ */ import_react16.default.createElement("div", { "data-type": "title-artist-wrapper" }, /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("p", null, /* @__PURE__ */ import_react16.default.createElement("span", null, /* @__PURE__ */ import_react16.default.createElement(
          "a",
          {
            "aria-label": title,
            href: getSpotifyLink(uri),
            rel: "noreferrer",
            target: "_blank",
            title
          },
          name
        ))), /* @__PURE__ */ import_react16.default.createElement("p", { title: artists.map((d) => d.name).join(", ") }, artists.map((artist, index) => {
          const artistTitle = getSpotifyLinkTitle(artist.name, locale.title);
          return /* @__PURE__ */ import_react16.default.createElement("span", { key: artist.uri }, index ? ", " : "", /* @__PURE__ */ import_react16.default.createElement(
            "a",
            {
              "aria-label": artistTitle,
              href: getSpotifyLink(artist.uri),
              rel: "noreferrer",
              target: "_blank",
              title: artistTitle
            },
            artist.name
          ));
        })))),
        favorite
      ),
      !hideAttribution && /* @__PURE__ */ import_react16.default.createElement(
        "a",
        {
          "aria-label": "Play on Spotify",
          href: getSpotifyLink(uri),
          rel: "noreferrer",
          target: "_blank"
        },
        /* @__PURE__ */ import_react16.default.createElement(SpotifyLogo, { bgColor })
      )
    )
  );
}
var Info_default = (0, import_react16.memo)(Info);

// src/components/Loader.tsx
var import_react17 = __toESM(require_react());
var Wrapper6 = styled("div")(
  {
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
  },
  ({ style }) => {
    const pulse = keyframes({
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
        animation: `${pulse} 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1)`,
        borderColor: style.loaderColor,
        height: px(style.loaderSize),
        width: px(style.loaderSize)
      }
    };
  },
  "LoaderRSWP"
);
function Loader({ styles: { height, loaderColor, loaderSize } }) {
  return /* @__PURE__ */ import_react17.default.createElement(Wrapper6, { "data-component-name": "Loader", style: { h: height, loaderColor, loaderSize } }, /* @__PURE__ */ import_react17.default.createElement("div", null));
}

// src/components/Volume.tsx
var import_react22 = __toESM(require_react());
import RangeSlider2 from "@gilbarbara/react-range-slider";

// src/components/icons/VolumeHigh.tsx
var import_react18 = __toESM(require_react());
function VolumeHigh(props) {
  return /* @__PURE__ */ import_react18.default.createElement(
    "svg",
    {
      "data-component-name": "VolumeHigh",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ import_react18.default.createElement(
      "path",
      {
        d: "M37.963 3.402a2.989 2.989 0 0 1 1.5 2.596v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0ZM45 9.542a23.008 23.008 0 0 1 0 44.912V48.25a17.008 17.008 0 0 0 0-32.508Zm-11.532 1.656-23.2 13.4a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6ZM45 22.238a11 11 0 0 1 0 19.52v-19.52Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeLow.tsx
var import_react19 = __toESM(require_react());
function VolumeLow(props) {
  return /* @__PURE__ */ import_react19.default.createElement(
    "svg",
    {
      "data-component-name": "VolumeLow",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ import_react19.default.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 41.758v-19.52a11 11 0 0 1 0 19.52Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeMid.tsx
var import_react20 = __toESM(require_react());
function VolumeHigh2(props) {
  return /* @__PURE__ */ import_react20.default.createElement(
    "svg",
    {
      "data-component-name": "VolumeMid",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ import_react20.default.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 48.946a18.008 18.008 0 0 0 0-33.896v6.6a11.996 11.996 0 0 1 0 20.7v6.596Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeMute.tsx
var import_react21 = __toESM(require_react());
function VolumeMute(props) {
  return /* @__PURE__ */ import_react21.default.createElement(
    "svg",
    {
      "data-component-name": "VolumeMute",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ import_react21.default.createElement(
      "path",
      {
        d: "M34.963 3.402a3 3 0 0 1 4.5 2.6v7.624a19.03 19.03 0 0 0-6 2.776v-5.2l-23.2 13.4a8.57 8.57 0 0 0-3.12 3.128 8.564 8.564 0 0 0 3.124 11.68l23.196 13.392v-5.2a18.92 18.92 0 0 0 6 2.776v7.624a3 3 0 0 1-4.5 2.596l-27.7-16a14.556 14.556 0 0 1-5.32-5.328C-2.06 32.313.32 23.428 7.263 19.402l27.7-16Zm17.354 17.6a3 3 0 0 1 2.122 5.12l-5.88 5.88 5.876 5.88a3 3 0 0 1-4.24 4.24l-5.88-5.88-5.88 5.88a3 3 0 1 1-4.385-4.095l6.025-6.025-5.876-5.88a3 3 0 0 1 4.236-4.24l5.88 5.88 5.88-5.88a3 3 0 0 1 2.122-.88Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/Volume.tsx
var WrapperWithToggle = styled("div")(
  {
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
        borderLeft: `6px solid transparent`,
        borderRight: `6px solid transparent`,
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
  },
  ({ style }) => {
    const isCompact = style.layout === "compact";
    const spanStyles = isCompact ? {
      bottom: `-${px(6)}`,
      borderTop: `6px solid #000`
    } : {
      [style.p === "top" ? "border-bottom" : "border-top"]: `6px solid #000`,
      [style.p]: "-6px"
    };
    return {
      "> button": {
        color: style.c
      },
      "> div": {
        [isCompact ? "bottom" : style.p]: "130%",
        "> span": spanStyles
      }
    };
  },
  "VolumeRSWP"
);
var WrapperInline = styled("div")(
  {
    display: "none",
    padding: `0 ${px(8)}`,
    "pointer-events": "all",
    "> div": {
      display: "flex",
      padding: `0 ${px(5)}`,
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
  },
  ({ style }) => ({
    color: style.c
  }),
  "VolumeInlineRSWP"
);
function Volume(props) {
  const { inlineVolume, layout, locale, playerPosition, setVolume: setVolume2, styles, volume } = props;
  const [isOpen, setIsOpen] = (0, import_react22.useState)(false);
  const [volumeState, setVolumeState] = (0, import_react22.useState)(volume);
  const timeoutRef = (0, import_react22.useRef)();
  const previousVolume = usePrevious(volume);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isInline = layout === "responsive" && inlineVolume && isMediumScreen;
  (0, import_react22.useEffect)(() => {
    if (previousVolume !== volume && volume !== volumeState) {
      setVolumeState(volume);
    }
  }, [previousVolume, volume, volumeState]);
  const handleClickToggleList = (0, import_react22.useCallback)(() => {
    setIsOpen((s) => !s);
  }, []);
  const handleChangeSlider = ({ x, y }) => {
    const value = isInline ? x : y;
    const currentvolume = Math.round(value) / 100;
    clearTimeout(timeoutRef.current);
    setVolume2(currentvolume);
    setVolumeState(currentvolume);
  };
  const handleAfterEnd = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  let icon = /* @__PURE__ */ import_react22.default.createElement(VolumeHigh, null);
  if (volume === 0) {
    icon = /* @__PURE__ */ import_react22.default.createElement(VolumeMute, null);
  } else if (volume <= 0.4) {
    icon = /* @__PURE__ */ import_react22.default.createElement(VolumeLow, null);
  } else if (volume <= 0.7) {
    icon = /* @__PURE__ */ import_react22.default.createElement(VolumeHigh2, null);
  }
  if (isInline) {
    return /* @__PURE__ */ import_react22.default.createElement(WrapperInline, { "data-component-name": "Volume", "data-value": volume, style: { c: styles.color } }, /* @__PURE__ */ import_react22.default.createElement("span", null, icon), /* @__PURE__ */ import_react22.default.createElement("div", null, /* @__PURE__ */ import_react22.default.createElement(
      RangeSlider2,
      {
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
      }
    )));
  }
  return /* @__PURE__ */ import_react22.default.createElement(ClickOutside_default, { isActive: isOpen, onClick: handleClickToggleList }, /* @__PURE__ */ import_react22.default.createElement(
    WrapperWithToggle,
    {
      "data-component-name": "Volume",
      "data-value": volume,
      style: { c: styles.color, layout, p: playerPosition }
    },
    isOpen && /* @__PURE__ */ import_react22.default.createElement("div", null, /* @__PURE__ */ import_react22.default.createElement(
      RangeSlider2,
      {
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
      }
    ), /* @__PURE__ */ import_react22.default.createElement("span", null)),
    /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        "aria-label": locale.volume,
        onClick: handleClickToggleList,
        title: locale.volume,
        type: "button"
      },
      icon
    )
  ));
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
var SpotifyWebPlayer = class extends import_react23.PureComponent {
  constructor(props) {
    super(props);
    __publicField(this, "isMounted", false);
    __publicField(this, "emptyTrack", {
      artists: [],
      durationMs: 0,
      id: "",
      image: "",
      name: "",
      uri: ""
    });
    __publicField(this, "locale");
    __publicField(this, "player");
    __publicField(this, "playerProgressInterval");
    __publicField(this, "playerSyncInterval");
    __publicField(this, "ref", (0, import_react23.createRef)());
    __publicField(this, "renderInlineActions", false);
    __publicField(this, "resizeTimeout");
    __publicField(this, "seekUpdateInterval", 100);
    __publicField(this, "styles");
    __publicField(this, "syncTimeout");
    // eslint-disable-next-line unicorn/consistent-function-scoping
    __publicField(this, "getPlayOptions", memoize((data) => {
      const playOptions = {
        context_uri: void 0,
        uris: void 0
      };
      if (data) {
        const ids = Array.isArray(data) ? data : [data];
        if (!ids.every((d) => validateURI(d))) {
          console.error("Invalid URI");
          return playOptions;
        }
        if (ids.some((d) => getSpotifyURIType(d) === "track")) {
          if (!ids.every((d) => getSpotifyURIType(d) === "track")) {
            console.warn("You can't mix tracks URIs with other types");
          }
          playOptions.uris = ids.filter((d) => validateURI(d) && getSpotifyURIType(d) === "track");
        } else {
          if (ids.length > 1) {
            console.warn("Albums, Artists, Playlists and Podcasts can't have multiple URIs");
          }
          playOptions.context_uri = ids[0];
        }
      }
      return playOptions;
    }));
    __publicField(this, "handleChangeRange", async (position) => {
      const { track } = this.state;
      const { callback } = this.props;
      let progress = 0;
      try {
        const percentage = position / 100;
        let stateChanges = {};
        if (this.isExternalPlayer) {
          progress = Math.round(track.durationMs * percentage);
          await seek(this.token, progress);
          stateChanges = {
            position,
            progressMs: progress
          };
        } else if (this.player) {
          const state = await this.player.getCurrentState();
          if (state) {
            progress = Math.round(state.track_window.current_track.duration_ms * percentage);
            await this.player.seek(progress);
            stateChanges = {
              position,
              progressMs: progress
            };
          } else {
            stateChanges = { position: 0 };
          }
        }
        this.updateState(stateChanges);
        if (callback) {
          callback({
            ...this.state,
            ...stateChanges,
            type: TYPE.PROGRESS
          });
        }
      } catch (error) {
        console.error(error);
      }
    });
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
    __publicField(this, "handleClickDevice", async (deviceId) => {
      const { isUnsupported } = this.state;
      const { autoPlay, persistDeviceSelection } = this.props;
      this.updateState({ currentDeviceId: deviceId });
      try {
        await setDevice(this.token, deviceId);
        if (persistDeviceSelection) {
          sessionStorage.setItem("rswpDeviceId", deviceId);
        }
        if (isUnsupported) {
          await this.syncDevice();
          const player = await getPlaybackState(this.token);
          if (player && !player.is_playing && autoPlay) {
            await this.togglePlay(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "handleFavoriteStatusChange", (status) => {
      const { isSaved } = this.state;
      this.updateState({ isSaved: status });
      if (isSaved !== status) {
        this.handleCallback({
          ...this.state,
          isSaved: status,
          type: TYPE.FAVORITE
        });
      }
    });
    __publicField(this, "handlePlayerErrors", async (type, message) => {
      const { status } = this.state;
      const isPlaybackError = type === ERROR_TYPE.PLAYBACK;
      const isInitializationError = type === ERROR_TYPE.INITIALIZATION;
      let nextStatus = status;
      let devices = [];
      if (this.player && !isPlaybackError) {
        this.player.disconnect();
        this.player = void 0;
      }
      if (isInitializationError) {
        nextStatus = STATUS.UNSUPPORTED;
        ({ devices = [] } = await getDevices(this.token));
      } else if (!isPlaybackError) {
        nextStatus = STATUS.ERROR;
      }
      this.updateState({
        devices,
        error: message,
        errorType: type,
        isInitializing: false,
        isUnsupported: isInitializationError,
        status: nextStatus
      });
    });
    __publicField(this, "handlePlayerStateChanges", async (state) => {
      try {
        if (state) {
          const {
            paused,
            position,
            track_window: { current_track, next_tracks, previous_tracks }
          } = state;
          const isPlaying = !paused;
          const volume = await this.player?.getVolume() || 100;
          let trackState = {};
          if (position === 0 && current_track) {
            trackState = {
              nextTracks: next_tracks.map(convertTrack),
              position: 0,
              previousTracks: previous_tracks.map(convertTrack),
              track: convertTrack(current_track)
            };
          }
          this.updateState({
            error: "",
            errorType: null,
            isActive: true,
            isPlaying,
            progressMs: position,
            volume: round(volume),
            ...trackState
          });
        } else if (this.isExternalPlayer) {
          await this.syncDevice();
        } else {
          this.updateState({
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
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "handlePlayerStatus", async ({ device_id }) => {
      const { currentDeviceId, devices } = await this.initializeDevices(device_id);
      this.updateState({
        currentDeviceId,
        deviceId: device_id,
        devices,
        isInitializing: false,
        status: device_id ? STATUS.READY : STATUS.IDLE
      });
    });
    __publicField(this, "handleResize", () => {
      const { layout = "responsive" } = this.props;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => {
        this.renderInlineActions = window.innerWidth >= 768 && layout === "responsive";
        this.forceUpdate();
      }, 100);
    });
    __publicField(this, "handleToggleMagnify", () => {
      const { magnifySliderOnHover } = this.props;
      if (magnifySliderOnHover) {
        this.updateState((previousState) => {
          return { isMagnified: !previousState.isMagnified };
        });
      }
    });
    __publicField(this, "initializePlayer", () => {
      const { volume } = this.state;
      const {
        getOAuthToken = (callback) => {
          callback(this.token);
        },
        name = "Spotify Web Player"
      } = this.props;
      if (!window.Spotify) {
        return;
      }
      this.updateState({
        error: "",
        errorType: null,
        isInitializing: true
      });
      this.player = new window.Spotify.Player({
        getOAuthToken,
        name,
        volume
      });
      this.player.addListener("ready", this.handlePlayerStatus);
      this.player.addListener("not_ready", this.handlePlayerStatus);
      this.player.addListener("player_state_changed", this.handlePlayerStateChanges);
      this.player.addListener(
        "initialization_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.INITIALIZATION, error.message)
      );
      this.player.addListener(
        "authentication_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.AUTHENTICATION, error.message)
      );
      this.player.addListener(
        "account_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.ACCOUNT, error.message)
      );
      this.player.addListener(
        "playback_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.PLAYBACK, error.message)
      );
      this.player.addListener("autoplay_failed", async () => {
        console.log("Autoplay is not allowed by the browser autoplay rules");
      });
      this.player.connect();
    });
    __publicField(this, "setExternalDevice", (id) => {
      this.updateState({ currentDeviceId: id, isPlaying: true });
    });
    __publicField(this, "setVolume", async (volume) => {
      if (this.isExternalPlayer) {
        await setVolume(this.token, Math.round(volume * 100));
        await this.syncDevice();
      } else if (this.player) {
        await this.player.setVolume(volume);
      }
      this.updateState({ volume });
    });
    __publicField(this, "syncDevice", async () => {
      if (!this.isMounted) {
        return;
      }
      const { deviceId } = this.state;
      try {
        const player = await getPlaybackState(this.token);
        let track = this.emptyTrack;
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
        this.updateState({
          error: "",
          errorType: null,
          isActive: true,
          isPlaying: player.is_playing,
          nextTracks: [],
          previousTracks: [],
          progressMs: player.item ? player.progress_ms : 0,
          status: STATUS.READY,
          track,
          volume: parseVolume(player.device.volume_percent)
        });
      } catch (error) {
        const state = {
          isActive: false,
          isPlaying: false,
          position: 0,
          track: this.emptyTrack
        };
        if (deviceId) {
          this.updateState({
            currentDeviceId: deviceId,
            ...state
          });
          return;
        }
        this.updateState({
          error: error.message,
          errorType: ERROR_TYPE.PLAYER,
          status: STATUS.ERROR,
          ...state
        });
      }
    });
    __publicField(this, "toggleOffset", async () => {
      const { currentDeviceId } = this.state;
      const { offset, uris } = this.props;
      if (typeof offset === "number" && Array.isArray(uris)) {
        await play(this.token, { deviceId: currentDeviceId, offset, uris });
      }
    });
    __publicField(this, "togglePlay", async (force = false) => {
      const { currentDeviceId, isPlaying, needsUpdate } = this.state;
      const { offset, uris } = this.props;
      const shouldInitialize = force || needsUpdate;
      const playOptions = this.getPlayOptions(uris);
      try {
        if (this.isExternalPlayer) {
          if (!isPlaying) {
            await play(this.token, {
              deviceId: currentDeviceId,
              offset,
              ...shouldInitialize ? playOptions : void 0
            });
          } else {
            await pause(this.token);
            this.updateState({ isPlaying: false });
          }
          this.syncTimeout = window.setTimeout(() => {
            this.syncDevice();
          }, 300);
        } else if (this.player) {
          await this.player.activateElement();
          const playerState = await this.player.getCurrentState();
          const shouldPlay = !playerState && !!(playOptions.context_uri || playOptions.uris);
          if (shouldPlay || shouldInitialize) {
            await play(this.token, {
              deviceId: currentDeviceId,
              offset,
              ...shouldInitialize ? playOptions : void 0
            });
            await this.player.togglePlay();
          } else {
            await this.player.togglePlay();
          }
        }
        if (needsUpdate) {
          this.updateState({ needsUpdate: false });
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "updateSeekBar", async () => {
      if (!this.isMounted) {
        return;
      }
      const { progressMs, track } = this.state;
      try {
        if (this.isExternalPlayer) {
          let position = progressMs / track.durationMs;
          position = Number(((Number.isFinite(position) ? position : 0) * 100).toFixed(1));
          this.updateState({
            position,
            progressMs: progressMs + this.seekUpdateInterval
          });
        } else if (this.player) {
          const state = await this.player.getCurrentState();
          if (state) {
            const progress = state.position;
            const position = Number(
              (progress / state.track_window.current_track.duration_ms * 100).toFixed(1)
            );
            this.updateState({
              position,
              progressMs: progress + this.seekUpdateInterval
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "updateState", (state) => {
      if (!this.isMounted) {
        return;
      }
      this.setState(state);
    });
    this.state = {
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
      track: this.emptyTrack,
      volume: parseVolume(props.initialVolume) || 1
    };
    this.locale = getLocale(props.locale);
    this.styles = getMergedStyles(props.styles);
  }
  async componentDidMount() {
    this.isMounted = true;
    const { top = 0 } = this.ref.current?.getBoundingClientRect() || {};
    this.updateState({
      playerPosition: top > window.innerHeight / 2 ? "bottom" : "top",
      status: STATUS.INITIALIZING
    });
    if (!window.onSpotifyWebPlaybackSDKReady) {
      window.onSpotifyWebPlaybackSDKReady = this.initializePlayer;
    } else {
      this.initializePlayer();
    }
    await loadSpotifyPlayer();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  async componentDidUpdate(previousProps, previousState) {
    const { currentDeviceId, deviceId, isInitializing, isPlaying, status, track, volume } = this.state;
    const {
      autoPlay,
      layout,
      locale,
      offset,
      play: playProp,
      setVolume: setVolumeProp,
      showSaveIcon,
      styles,
      syncExternalDevice,
      uris
    } = this.props;
    const isReady = previousState.status !== STATUS.READY && status === STATUS.READY;
    const changedLayout = !isEqual(previousProps.layout, layout);
    const changedLocale = !isEqual(previousProps.locale, locale);
    const changedStyles = !isEqual(previousProps.styles, styles);
    const changedURIs = !isEqual(previousProps.uris, uris);
    const playOptions = this.getPlayOptions(uris);
    const canPlay = !!currentDeviceId && !!(playOptions.context_uri || playOptions.uris);
    const shouldPlay = isReady && (autoPlay || playProp);
    if (canPlay && shouldPlay) {
      await this.togglePlay(true);
      if (!isPlaying) {
        this.updateState({ isPlaying: true });
      }
      if (this.isExternalPlayer) {
        this.syncTimeout = window.setTimeout(() => {
          this.syncDevice();
        }, 600);
      }
    } else if (changedURIs) {
      if (isPlaying || playProp) {
        await this.togglePlay(true);
      } else {
        this.updateState({ needsUpdate: true });
      }
    } else if (previousProps.play !== playProp && playProp !== isPlaying) {
      await this.togglePlay(!track.id);
    }
    if (previousState.status !== status) {
      this.handleCallback({
        ...this.state,
        type: TYPE.STATUS
      });
    }
    if (previousState.currentDeviceId !== currentDeviceId && currentDeviceId) {
      if (!isReady) {
        this.handleCallback({
          ...this.state,
          type: TYPE.DEVICE
        });
      }
      await this.toggleSyncInterval(this.isExternalPlayer);
      await this.updateSeekBar();
    }
    if (previousState.track.id !== track.id && track.id) {
      this.handleCallback({
        ...this.state,
        type: TYPE.TRACK
      });
      if (showSaveIcon) {
        this.updateState({ isSaved: false });
      }
    }
    if (previousState.isPlaying !== isPlaying) {
      this.toggleProgressBar();
      await this.toggleSyncInterval(this.isExternalPlayer);
      this.handleCallback({
        ...this.state,
        type: TYPE.PLAYER
      });
    }
    if (previousProps.offset !== offset) {
      await this.toggleOffset();
    }
    if (previousState.isInitializing && !isInitializing) {
      if (syncExternalDevice && !uris) {
        const player = await getPlaybackState(this.token);
        if (player && player.is_playing && player.device.id !== deviceId) {
          this.setExternalDevice(player.device.id);
        }
      }
    }
    if (setVolumeProp && setVolumeProp !== volume) {
      await this.setVolume(setVolumeProp);
    }
    if (changedLayout) {
      this.handleResize();
    }
    if (changedLocale) {
      this.locale = getLocale(locale);
    }
    if (changedStyles) {
      this.styles = getMergedStyles(styles);
    }
  }
  async componentWillUnmount() {
    this.isMounted = false;
    if (this.player) {
      this.player.disconnect();
    }
    clearInterval(this.playerSyncInterval);
    clearInterval(this.playerProgressInterval);
    clearTimeout(this.syncTimeout);
    window.removeEventListener("resize", this.handleResize);
  }
  handleCallback(state) {
    const { callback } = this.props;
    if (callback) {
      callback(state);
    }
  }
  get token() {
    const { token } = this.props;
    return token;
  }
  async initializeDevices(id) {
    const { persistDeviceSelection } = this.props;
    const { devices } = await getDevices(this.token);
    let currentDeviceId = id;
    if (persistDeviceSelection) {
      const savedDeviceId = sessionStorage.getItem("rswpDeviceId");
      if (!savedDeviceId || !devices.some((d) => d.id === savedDeviceId)) {
        sessionStorage.setItem("rswpDeviceId", currentDeviceId);
      } else {
        currentDeviceId = savedDeviceId;
      }
    }
    return { currentDeviceId, devices };
  }
  get isExternalPlayer() {
    const { currentDeviceId, deviceId, status } = this.state;
    return currentDeviceId && currentDeviceId !== deviceId || status === STATUS.UNSUPPORTED;
  }
  async toggleSyncInterval(shouldSync) {
    const { syncExternalDeviceInterval } = this.props;
    try {
      if (this.isExternalPlayer && shouldSync && !this.playerSyncInterval) {
        await this.syncDevice();
        clearInterval(this.playerSyncInterval);
        this.playerSyncInterval = window.setInterval(
          this.syncDevice,
          syncExternalDeviceInterval * 1e3
        );
      }
      if ((!shouldSync || !this.isExternalPlayer) && this.playerSyncInterval) {
        clearInterval(this.playerSyncInterval);
        this.playerSyncInterval = void 0;
      }
    } catch (error) {
      console.error(error);
    }
  }
  toggleProgressBar() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      if (!this.playerProgressInterval) {
        this.playerProgressInterval = window.setInterval(
          this.updateSeekBar,
          this.seekUpdateInterval
        );
      }
    } else if (this.playerProgressInterval) {
      clearInterval(this.playerProgressInterval);
      this.playerProgressInterval = void 0;
    }
  }
  render() {
    const {
      currentDeviceId,
      deviceId,
      devices,
      error,
      isActive,
      isMagnified,
      // isPlaying,
      isUnsupported,
      // nextTracks,
      playerPosition,
      position,
      // previousTracks,
      progressMs,
      status,
      track,
      volume
    } = this.state;
    const {
      hideAttribution = false,
      hideCoverArt = false,
      inlineVolume = true,
      layout = "responsive",
      showSaveIcon,
      updateSavedStatus
    } = this.props;
    const isReady = [STATUS.READY, STATUS.UNSUPPORTED].includes(status);
    const output = {
      main: /* @__PURE__ */ import_react23.default.createElement(Loader, { styles: this.styles })
    };
    if (isReady) {
      if (!output.info) {
        output.info = /* @__PURE__ */ import_react23.default.createElement(
          Info_default,
          {
            hideAttribution,
            hideCoverArt,
            isActive,
            layout,
            locale: this.locale,
            onFavoriteStatusChange: this.handleFavoriteStatusChange,
            showSaveIcon,
            styles: this.styles,
            token: this.token,
            track,
            updateSavedStatus
          }
        );
      }
      output.devices = /* @__PURE__ */ import_react23.default.createElement(
        Devices,
        {
          currentDeviceId,
          deviceId,
          devices,
          layout,
          locale: this.locale,
          onClickDevice: this.handleClickDevice,
          open: isUnsupported && !deviceId,
          playerPosition,
          styles: this.styles
        }
      );
      output.volume = currentDeviceId ? /* @__PURE__ */ import_react23.default.createElement(
        Volume,
        {
          inlineVolume,
          layout,
          locale: this.locale,
          playerPosition,
          setVolume: this.setVolume,
          styles: this.styles,
          volume
        }
      ) : null;
      if (this.renderInlineActions) {
        output.actions = /* @__PURE__ */ import_react23.default.createElement(Actions_default, { layout, styles: this.styles }, output.devices, output.volume);
      }
      output.controls = /* @__PURE__ */ import_react23.default.createElement(
        Controls_default,
        {
          durationMs: track.durationMs,
          isMagnified,
          onChangeRange: this.handleChangeRange,
          onToggleMagnify: this.handleToggleMagnify,
          position,
          progressMs,
          styles: this.styles
        }
      );
      output.main = /* @__PURE__ */ import_react23.default.createElement("div", null, output.controls);
    } else if (output.info) {
      output.main = output.info;
    }
    if (status === STATUS.ERROR) {
      output.main = /* @__PURE__ */ import_react23.default.createElement(ErrorMessage, { styles: this.styles }, error);
    }
    return (
      // <Player ref={this.ref} data-ready={isReady} styles={this.styles}>
      /* @__PURE__ */ import_react23.default.createElement("div", null, output.main)
    );
  }
};
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
export {
  ERROR_TYPE,
  STATUS,
  TYPE,
  src_default as default
};
/*! Bundled license information:

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
//# sourceMappingURL=index.mjs.map