(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _comments_Comment_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/Comment.jsx */ "./assets/js/comments/Comment.jsx");
 // loads the Bootstrap jQuery plugins






 // loads the code syntax highlighting library

 // Creates links to the Symfony documentation




/***/ }),

/***/ "./assets/js/comments/Comment.jsx":
/*!****************************************!*\
  !*** ./assets/js/comments/Comment.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks */ "./assets/js/comments/hooks.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Icon */ "./assets/js/components/Icon.jsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Form */ "./assets/js/components/Form.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










var _this = undefined;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var dateFormat = {
  dateStyle: "medium",
  timeStyle: "short"
};
var VIEW = "VIEW";
var EDIT = "EDIT";

function Comments(_ref) {
  var post = _ref.post,
      user = _ref.user;

  var _usePaginatedFetch = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.usePaginatedFetch)("/api/comments?post=" + post),
      comments = _usePaginatedFetch.items,
      load = _usePaginatedFetch.load,
      loading = _usePaginatedFetch.loading,
      count = _usePaginatedFetch.count,
      hasMore = _usePaginatedFetch.hasMore,
      setComments = _usePaginatedFetch.setItems;

  var addComment = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (comment) {
    setComments(function (comments) {
      return [comment].concat(_toConsumableArray(comments));
    });
  }, []);
  var deleteComment = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (comment) {
    setComments(function (comments) {
      return comments.filter(function (c) {
        return c !== comment;
      });
    });
  }, []);
  var updateComment = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (newComment, oldComment) {
    setComments(function (comments) {
      return comments.map(function (c) {
        return c === oldComment ? newComment : c;
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    load();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(Title, {
    count: count
  }), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(CommentForm, {
    post: post,
    onComment: addComment
  }), comments.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(Comment, {
      key: comment.id,
      comment: comment,
      canEdit: comment.author.id === user,
      onDelete: deleteComment,
      onUpdate: updateComment
    });
  }), hasMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
    disabled: loading,
    className: "btn btn-primary",
    onClick: load
  }, "Charger plus de commentaires"));
}

var Comment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.memo(function (_ref2) {
  var comment = _ref2.comment,
      onDelete = _ref2.onDelete,
      canEdit = _ref2.canEdit,
      onUpdate = _ref2.onUpdate;
  var date = new Date(comment.publishedAt); // Events

  var toggleEdit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return setState(function (state) {
      return state === VIEW ? EDIT : VIEW;
    });
  }, []);
  var onDeleteCallback = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return onDelete(comment);
  }, [comment]);
  var onComment = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (newComment) {
    onUpdate(newComment, comment);
    toggleEdit();
  }, [comment]); // Hooks

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(VIEW),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useFetch = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useFetch)(comment["@id"], "DELETE", onDeleteCallback),
      loadingDelete = _useFetch.loading,
      callDelete = _useFetch.load; // Rendu


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
    className: "row post-comment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("h4", {
    className: "col-sm-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("strong", null, comment.author.username), "Comment\xE9 le", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("strong", null, date.toLocaleString(undefined, dateFormat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
    className: "col-sm-9"
  }, state === VIEW ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("p", null, comment.content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(CommentForm, {
    comment: comment,
    onComment: onComment,
    onCancel: toggleEdit
  }), canEdit && state !== EDIT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
    className: "btn btn-danger",
    onClick: callDelete.bind(_this, null),
    disabled: loadingDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "trash"
  }), "Supprimer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
    className: "btn btn-secondary",
    onClick: toggleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "pen"
  }), " Editer"))));
});
var CommentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.memo(function (_ref3) {
  var _ref3$post = _ref3.post,
      post = _ref3$post === void 0 ? null : _ref3$post,
      onComment = _ref3.onComment,
      _ref3$comment = _ref3.comment,
      comment = _ref3$comment === void 0 ? null : _ref3$comment,
      _ref3$onCancel = _ref3.onCancel,
      onCancel = _ref3$onCancel === void 0 ? null : _ref3$onCancel;
  // Variables
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
  console.log(ref);
  var onSuccess = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (comment) {
    onComment(comment);
    ref.current.value = "";
  }, [ref, onComment]); // Hooks

  var method = comment ? "PUT" : "POST";
  var url = comment ? comment["@id"] : "/api/comments";

  var _useFetch2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useFetch)(url, method, onSuccess),
      load = _useFetch2.load,
      loading = _useFetch2.loading,
      errors = _useFetch2.errors,
      clearError = _useFetch2.clearError; // Methodes


  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (e) {
    e.preventDefault();
    load({
      content: ref.current.value,
      post: "/api/posts/" + post
    });
  }, [load, ref, post]); // Effets

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (comment && comment.content && ref.current) {
      ref.current.value = comment.content;
    }
  }, [comment, ref]); // Render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
    className: "well"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("form", {
    onSubmit: onSubmit
  }, comment === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("legend", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "comment"
  }), "Laissez un commentaire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_12__.Field, {
    name: "content",
    help: "Les commentaires non conformes seront mod\xE9r\xE9s",
    ref: ref,
    onChange: clearError.bind(_this, "content"),
    error: errors["content"],
    required: true,
    minLength: 5
  }, "Votre commentaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
    className: "btn btn-primary",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "paper-plane"
  }), " ", comment === null ? "Envoyer" : "Editer"), onCancel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
    className: "btn btn-secondary",
    onClick: onCancel
  }, "Annuler"))));
});

function Title(_ref4) {
  var count = _ref4.count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "comments"
  }), count, " Commentaire", count > 1 ? "s" : "");
}

var CommentsElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CommentsElement, _HTMLElement);

  var _super = _createSuper(CommentsElement);

  function CommentsElement() {
    var _this2;

    _classCallCheck(this, CommentsElement);

    _this2 = _super.call(this);
    _this2.observer = null;
    return _this2;
  }

  _createClass(CommentsElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;

      // console.log(parseInt(this.dataset.post));
      var post = parseInt(this.dataset.post, 10);
      var user = parseInt(this.dataset.user, 10) || null;

      if (this.observer === null) {
        this.observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target === _this3) {
              observer.disconnect();
              (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(Comments, {
                post: post,
                user: user
              }), _this3);
            }
          });
        });
      }

      this.observer.observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.observer) {
        this.observer.disconnect();
      }

      (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.unmountComponentAtNode)(this);
    }
  }]);

  return CommentsElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("post-comments", CommentsElement);

/***/ }),

/***/ "./assets/js/comments/hooks.js":
/*!*************************************!*\
  !*** ./assets/js/comments/hooks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePaginatedFetch": () => /* binding */ usePaginatedFetch,
/* harmony export */   "useFetch": () => /* binding */ useFetch
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function jsonLdFetch(_x) {
  return _jsonLdFetch.apply(this, arguments);
}

function _jsonLdFetch() {
  _jsonLdFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
    var method,
        data,
        params,
        response,
        responseData,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            method = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "GET";
            data = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
            params = {
              method: method,
              headers: {
                Accept: "application/ld+json",
                "Content-Type": "application/json"
              }
            };

            if (data) {
              params.body = JSON.stringify(data);
            }

            _context3.next = 6;
            return fetch(url, params);

          case 6:
            response = _context3.sent;

            if (!(response.status === 204)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", null);

          case 9:
            _context3.next = 11;
            return response.json();

          case 11:
            responseData = _context3.sent;

            if (!response.ok) {
              _context3.next = 16;
              break;
            }

            return _context3.abrupt("return", responseData);

          case 16:
            throw responseData;

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _jsonLdFetch.apply(this, arguments);
}

function usePaginatedFetch(url) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      next = _useState8[0],
      setNext = _useState8[1];

  var load = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return jsonLdFetch(next || url);

          case 4:
            response = _context.sent;
            setItems(function (items) {
              return [].concat(_toConsumableArray(items), _toConsumableArray(response["hydra:member"]));
            });
            setCount(response["hydra:totalItems"]);

            if (response["hydra:view"] && response["hydra:view"]["hydra:next"]) {
              setNext(response["hydra:view"]["hydra:next"]);
            } else {
              setNext(null);
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 13:
            setLoading(false);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  })), [url, next]);
  return {
    items: items,
    load: load,
    loading: loading,
    count: count,
    setItems: setItems,
    hasMore: next !== null
  };
}
function useFetch(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "POST";
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var load = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data,
        response,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
            setLoading(true);
            _context2.prev = 2;
            _context2.next = 5;
            return jsonLdFetch(url, method, data);

          case 5:
            response = _context2.sent;
            setLoading(false);

            if (callback) {
              callback(response);
            }

            _context2.next = 18;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            setLoading(false);

            if (!_context2.t0.violation) {
              _context2.next = 17;
              break;
            }

            setErrors(_context2.t0.violations.reduce(function (acc, violation) {
              acc[violation.propertyPath] = violation.message;
              return acc;
            }, {}));
            _context2.next = 18;
            break;

          case 17:
            throw _context2.t0;

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  })), [url, method, callback]);
  var clearError = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (name) {
    if (errors[name]) {
      setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, null));
      });
    }
  }, [errors]);
  return {
    loading: loading,
    errors: errors,
    load: load,
    clearError: clearError
  };
}

/***/ }),

/***/ "./assets/js/components/Form.jsx":
/*!***************************************!*\
  !*** ./assets/js/components/Form.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => /* binding */ Field
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var className = function className() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.filter(Boolean).join("");
};

var Field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var help = _ref.help,
      name = _ref.name,
      children = _ref.children,
      error = _ref.error,
      onChange = _ref.onChange,
      required = _ref.required,
      minLength = _ref.minLength;

  if (error) {
    help = error;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: className("form-group", error && " has-error")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", {
    htmlFor: name,
    className: "control-label"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("textarea", {
    ref: ref,
    id: name,
    name: name,
    rows: "10",
    className: "form-control",
    onChange: onChange,
    required: required,
    minLength: minLength // onChange={(e) => setContent(e.target.value)}

  }), help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "help-block"
  }, help));
});

/***/ }),

/***/ "./assets/js/components/Icon.jsx":
/*!***************************************!*\
  !*** ./assets/js/components/Icon.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => /* binding */ Icon
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Icon(_ref) {
  var icon = _ref.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-" + icon,
    "aria-hidden": "true"
  });
}

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Wraps some elements in anchor tags referencing to the Symfony documentation

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');

  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }

  ; // Wraps links to the Symfony documentation

  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  }); // Wraps Symfony's annotations

  var annotations = {
    '@Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    '@IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    '@ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    '@Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-annotations',
    '@Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-doctag').each(function () {
    var annotation = $(this).text();

    if (annotations[annotation]) {
      $(this).html(anchor(annotations[annotation], annotation));
    }
  }); // Wraps Twig's tags

  $templateCode.find('.hljs-template-tag > .hljs-name').each(function () {
    var tag = $(this).text();

    if ('else' === tag || tag.match(/^end/)) {
      return;
    }

    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  }); // Wraps Twig's functions

  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/lib/languages/twig.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__);



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('php', (highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('twig', (highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().initHighlightingOnLoad();

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/js/app.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_engine-7f9053","vendors-node_modules_bootstrap-sass_assets_javascripts_bootstrap_alert_js-node_modules_bootst-7ab490"]]]);