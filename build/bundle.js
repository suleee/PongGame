/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Game = __webpack_require__(9);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create a game instance
	var game = new _Game2.default('game', 650, 300);

	(function gameLoop() {

	    game.render(); //Game.js's at the last render part
	    requestAnimationFrame(gameLoop); //re-drawing this game 
	})(); //immiately call, this is an argurment of gameLoop

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(5) + ") format('woff'), url(" + __webpack_require__(6) + ") format('truetype'), url(" + __webpack_require__(7) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n  background: #E0F7FF;\n}\n\nh1 {\n  font-size: 63px;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: white;\n  text-shadow: -3px -3px 0 #11414b, 4px 2px 0 #11414b, -3px 8px 0 #11414b, 4px 8px 0 #11414b, 4px 8px 0#11414b, 4px -3px 0#11414b;\n}\n\nh3 {\n  color: #0b2426;\n  font-size: 20px;\n  margin: 13px 0 10px 0;\n}\n\np {\n  font-size: 12px;\n  color: #103438;\n  margin-top: 3px;\n}\n\nimg {\n  width: 40px;\n  margin-right: 8px;\n}\nspan{\n  font-size: 14px;\n}\n.ten{\n  font-size: 25px;\n}\n.h-text{\n  text-align: center;\n  padding-bottom: 7px;\n  /*text-transform: lowercase;*/\n}\n\n.player-text {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5px;\n}\n\n.box1 {\n  flex-basis: 25%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.box2 {\n  flex-basis: 50%;\n  text-align: center;\n}\n\n.box3 {\n  flex-basis: 25%;\n  display: flex;\n  flex-wrap: wrap;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// ex) import HELLO { SVG_NS, KEYS } from '../settings';

	var _settings = __webpack_require__(10);

	var _Board = __webpack_require__(11);

	var _Board2 = _interopRequireDefault(_Board);

	var _Paddle = __webpack_require__(12);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _MultipleBalls = __webpack_require__(13);

	var _MultipleBalls2 = _interopRequireDefault(_MultipleBalls);

	var _Ball = __webpack_require__(14);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Score = __webpack_require__(15);

	var _Score2 = _interopRequireDefault(_Score);

	var _FireBalls = __webpack_require__(16);

	var _FireBalls2 = _interopRequireDefault(_FireBalls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
		function Game(element, width, height) {
			var _this = this;

			_classCallCheck(this, Game);

			this.element = element;
			this.width = width; //view point
			this.height = height; //viewpoint
			this.boardGap = _settings.GAME.boardGap;
			this.paddleWidth = _settings.GAME.paddleWidth;
			this.paddleHeight = _settings.GAME.paddleHeight;
			this.winner = '';

			this.gameElement = document.getElementById(this.element);
			this.pause = false;

			this.board = new _Board2.default(this.width, this.height);

			this.paddle1 = new _Paddle2.default(this.height, this.paddleWidth + 4, this.paddleHeight + 20, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z, 'pink', '7', '7'); //paddle: boardHeight, width, height, x, y

			this.paddle2 = new _Paddle2.default(this.height, this.paddleWidth + 4, this.paddleHeight + 20, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down, 'orange', '7', '7');

			this.ball = new _Ball2.default(10, this.width, this.height, '#19535F', _settings.START.enter);

			this.fireballs1 = new _FireBalls2.default(5, this.width, this.height, 'red', _settings.FIRE.s);
			this.fireballs2 = new _FireBalls2.default(5, this.width, this.height, 'white', _settings.FIRE.s);
			this.fireballs3 = new _FireBalls2.default(5, this.width, this.height, 'red', _settings.FIRE.s);
			this.fireballs4 = new _FireBalls2.default(5, this.width, this.height, 'white', _settings.FIRE.s);

			this.multipleballs1 = new _MultipleBalls2.default(6, this.width, this.height, 'yellow', _settings.MULTIPLE.t);
			this.multipleballs2 = new _MultipleBalls2.default(8, this.width, this.height, 'green', _settings.MULTIPLE.t);
			this.multipleballs3 = new _MultipleBalls2.default(4, this.width, this.height, 'pink', _settings.MULTIPLE.t);

			document.addEventListener('keydown', function (event) {
				switch (event.keyCode) {
					case _settings.KEYS.spaceBar:
						_this.pause = !_this.pause;
						break;
				}
			});

			this.paddle1score = new _Score2.default(230, 25, 25);
			this.paddle2score = new _Score2.default(348, 25, 25);
		}

		_createClass(Game, [{
			key: 'render',
			value: function render() {
				if (this.pause) {
					return;
				}

				this.gameElement.innerHTML = '';

				var svg = document.createElementNS(_settings.SVG_NS, 'svg');
				// let text = 'Press teh enter';
				svg.setAttributeNS(null, 'width', this.width);
				svg.setAttributeNS(null, 'height', this.height);
				svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
				this.gameElement.appendChild(svg);

				this.board.render(svg);

				this.fireballs1.render(svg);
				this.fireballs2.render(svg);
				this.fireballs3.render(svg);
				this.fireballs4.render(svg);

				this.ball.render(svg, this.paddle1, this.paddle2);

				this.paddle1.render(svg);
				this.paddle2.render(svg);

				// this.score1.score = this.pladdle1.score;//oldways
				this.paddle1score.render(svg, 'p1: ' + this.paddle1.score);
				this.paddle2score.render(svg, 'p2: ' + this.paddle2.score);

				if (this.paddle1.score >= 2 || this.paddle2.score >= 2) {
					this.multipleballs1.render(svg, this.paddle1, this.paddle2);
					this.multipleballs2.render(svg, this.paddle1, this.paddle2);
					this.multipleballs3.render(svg, this.paddle1, this.paddle2);
				}

				if (this.paddle1.score >= 11) {
					this.winner = 'Player 1';
					this.pause = true;
				} else if (this.paddle2.score >= 11) {
					this.winner = 'Player 2';
					this.pause = true;
				}
			}
		}]);

		return Game;
	}();

	exports.default = Game;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// settings.js
	var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

	var KEYS = exports.KEYS = {
	  a: 65, // player 1 up key
	  z: 90, // player 1 down key
	  up: 38, // player 2 up key
	  down: 40, // player 2 down key
	  spaceBar: 32 };

	var MULTIPLE = exports.MULTIPLE = {
	  t: 84 };

	var FIRE = exports.FIRE = {
	  s: 83, //left fire ball
	  left: 37 };

	var START = exports.START = {
	  enter: 13 //mutiple balls
	};

	var GAME = exports.GAME = {
	  boardGap: 10,
	  paddleWidth: 8,
	  paddleHeight: 56
	};

	var PADDLE = exports.PADDLE = {
	  speed: 50,
	  score: 0
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	  function Board(width, height) {
	    _classCallCheck(this, Board);

	    this.width = width;
	    this.height = height;
	  }

	  _createClass(Board, [{
	    key: 'render',
	    value: function render(svg) {

	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'fill', '#2b9ea0');
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'rx', '10');
	      rect.setAttributeNS(null, 'ry', '10');

	      var line = document.createElementNS(_settings.SVG_NS, 'line');
	      line.setAttributeNS(null, 'x1', this.width / 2);
	      line.setAttributeNS(null, 'y1', 0);
	      line.setAttributeNS(null, 'x2', this.width / 2);
	      line.setAttributeNS(null, 'y2', this.height);
	      line.setAttributeNS(null, 'stroke-dasharray', '20, 15');
	      line.setAttributeNS(null, 'stroke', 'white');
	      line.setAttributeNS(null, 'stroke-width', '4px');

	      svg.appendChild(rect);
	      svg.appendChild(line);
	    }
	  }]);

	  return Board;
	}();

	exports.default = Board;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
	  function Paddle(boardHeight, width, height, x, y, up, down, color, rx, ry) {
	    var _this = this;

	    _classCallCheck(this, Paddle);

	    this.boardHeight = boardHeight;
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
	    this.speed = _settings.PADDLE.speed;
	    this.score = _settings.PADDLE.score;
	    this.color = color;
	    this.rx = rx;
	    this.ry = ry;

	    document.addEventListener('keydown', function (event) {
	      // console.log(event.keyCode);
	      switch (event.keyCode) {
	        case up:
	          _this.up();
	          break;
	        case down:
	          _this.down();
	          break;
	      }
	    });
	  }

	  //method


	  _createClass(Paddle, [{
	    key: 'up',
	    value: function up() {
	      this.y = Math.max(2, this.y - this.speed);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      this.y = Math.min(this.boardHeight - 2 - this.height, this.y + this.speed);
	    }
	  }, {
	    key: 'coordinates',
	    value: function coordinates(x, y, width, height) {
	      var leftX = x;
	      var rightX = x + width;
	      var topY = y;
	      var bottomY = y + height;
	      return [leftX, rightX, topY, bottomY];
	    }
	  }, {
	    key: 'render',
	    value: function render(svg) {
	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'fill', this.color);
	      rect.setAttributeNS(null, 'x', this.x);
	      rect.setAttributeNS(null, 'y', this.y);
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'stroke', '#11414b');
	      rect.setAttributeNS(null, 'stroke-width', '2');
	      rect.setAttributeNS(null, 'rx', this.rx);
	      rect.setAttributeNS(null, 'ry', this.ry);
	      svg.appendChild(rect);
	    }
	  }]);

	  return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MultipleBalls = function () {
	    function MultipleBalls(radius, boardWidth, boardHeight, colorfill) {
	        _classCallCheck(this, MultipleBalls);

	        this.radius = radius;
	        this.boardWidth = boardWidth;
	        this.boardHeight = boardHeight;
	        this.colorfill = colorfill;

	        this.direction = 1;
	        this.ping1 = new Audio('public/sounds/pong-02.wav');
	        this.ping2 = new Audio('public/sounds/pong-04.wav');

	        this.reset();
	    }

	    _createClass(MultipleBalls, [{
	        key: 'wallCollision',
	        value: function wallCollision() {
	            var hitLeft = this.x - this.radius <= 0;
	            var hitRight = this.x + this.radius >= this.boardWidth;
	            var hitTop = this.y - this.radius <= 0;
	            var hitBottom = this.y + this.radius >= this.boardHeight;

	            if (hitLeft || hitRight) {
	                return this.vx = -this.vx;
	            } else if (hitTop || hitBottom) {
	                return this.vy = -this.vy;
	            }
	        }
	    }, {
	        key: 'paddleCollision',
	        value: function paddleCollision(paddle1, paddle2) {
	            if (this.vx > 0) {
	                var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

	                var _paddle = _slicedToArray(paddle, 4),
	                    leftX = _paddle[0],
	                    rightX = _paddle[1],
	                    topY = _paddle[2],
	                    bottomY = _paddle[3];

	                if (this.x + this.radius >= leftX
	                //right edge of the ball is >= left edge of the paddle &&
	                && this.x + this.radius <= rightX
	                //right edge of the ball is <= right edge of the paddle &&
	                && this.y >= topY && this.y <= bottomY
	                //ball Y is >= paddle top Y and ball Y <= paddle bottom Y
	                ) {
	                        this.vx = -this.vx;
	                        this.ping1.play();
	                    }
	            } else {
	                var _paddle2 = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

	                var _paddle3 = _slicedToArray(_paddle2, 4),
	                    _leftX = _paddle3[0],
	                    _rightX = _paddle3[1],
	                    _topY = _paddle3[2],
	                    _bottomY = _paddle3[3];

	                if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y >= _topY && this.y <= _bottomY) {
	                    this.vx = -this.vx;
	                    this.ping1.play();
	                }
	            }
	        }
	    }, {
	        key: 'goal',
	        value: function goal(player) {
	            player.score++;
	            this.reset();
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.x = this.boardWidth / 2;
	            this.y = this.boardHeight / 2;
	            this.vy = 0;
	            while (this.vy === 0) {
	                this.vy = Math.floor(Math.random() * 10 - 5);
	            }
	            this.vx = this.direction * (6 - Math.abs(this.vy));
	        }
	    }, {
	        key: 'render',
	        value: function render(svg, paddle1, paddle2) {
	            this.x += this.vx; //this.x = this.x + this.vx;
	            this.y += this.vy;

	            this.wallCollision();
	            this.paddleCollision(paddle1, paddle2);

	            var ball = document.createElementNS(_settings.SVG_NS, 'circle');
	            ball.setAttributeNS(null, 'fill', this.colorfill);
	            ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
	            ball.setAttributeNS(null, 'cy', this.y); //y of the center point
	            ball.setAttributeNS(null, 'r', this.radius);
	            ball.setAttributeNS(null, 'stroke', 'black');
	            ball.setAttributeNS(null, 'stroke-width', '1.5');
	            svg.appendChild(ball);

	            var rightGoal = this.x + this.radius >= this.boardWidth;
	            var leftGoal = this.x - this.radius <= 0;

	            if (rightGoal) {
	                this.goal(paddle1);
	                this.direction = 1;
	            } else if (leftGoal) {
	                this.goal(paddle2);
	                this.direction = -1;
	            }
	        }
	    }]);

	    return MultipleBalls;
	}();

	exports.default = MultipleBalls;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	    function Ball(radius, boardWidth, boardHeight, colorfill, controls) {
	        var _this = this;

	        _classCallCheck(this, Ball);

	        this.radius = radius;
	        this.boardWidth = boardWidth;
	        this.boardHeight = boardHeight;
	        this.colorfill = colorfill;

	        this.direction = 1;
	        this.ping1 = new Audio('public/sounds/pong-02.wav');
	        this.ping2 = new Audio('public/sounds/pong-04.wav');

	        this.reset();

	        document.addEventListener('keydown', function (event) {
	            if (_this.vx === 0 && _this.vy === 0 && event.keyCode === controls) {
	                (function () {
	                    var generateSpeed = function generateSpeed() {
	                        while (_this.vy === 0) {
	                            _this.vy = Math.floor(Math.random() * 10 - 5); //a number between -5 and 5 //direction of the ball
	                        }
	                        _this.vx = _this.direction * (6 - Math.abs(_this.vy));
	                        //stops x & y from being at 0
	                        if (_this.vx === 0 || _this.vy === 0) {
	                            generateSpeed();
	                        }
	                    };
	                    generateSpeed();
	                })();
	            }
	        });
	    }

	    _createClass(Ball, [{
	        key: 'wallCollision',
	        value: function wallCollision() {
	            var hitLeft = this.x - this.radius <= 0;
	            var hitRight = this.x + this.radius >= this.boardWidth;
	            var hitTop = this.y - this.radius <= 0;
	            var hitBottom = this.y + this.radius >= this.boardHeight;

	            if (hitLeft || hitRight) {
	                return this.vx = -this.vx;
	            } else if (hitTop || hitBottom) {
	                return this.vy = -this.vy;
	            }
	        }
	    }, {
	        key: 'paddleCollision',
	        value: function paddleCollision(paddle1, paddle2) {
	            if (this.vx > 0) {
	                var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

	                var _paddle = _slicedToArray(paddle, 4),
	                    leftX = _paddle[0],
	                    rightX = _paddle[1],
	                    topY = _paddle[2],
	                    bottomY = _paddle[3];

	                if (this.x + this.radius >= leftX
	                //right edge of the ball is >= left edge of the paddle &&
	                && this.x + this.radius <= rightX
	                //right edge of the ball is <= right edge of the paddle &&
	                && this.y >= topY && this.y <= bottomY
	                //ball Y is >= paddle top Y and ball Y <= paddle bottom Y
	                ) {
	                        this.vx = -this.vx;
	                        this.ping1.play();
	                    }
	            } else {
	                var _paddle2 = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

	                var _paddle3 = _slicedToArray(_paddle2, 4),
	                    _leftX = _paddle3[0],
	                    _rightX = _paddle3[1],
	                    _topY = _paddle3[2],
	                    _bottomY = _paddle3[3];

	                if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y >= _topY && this.y <= _bottomY) {
	                    this.vx = -this.vx;
	                    this.ping1.play();
	                }
	            }
	        }
	    }, {
	        key: 'goal',
	        value: function goal(paddle) {
	            //incresement the score
	            paddle.score++;
	            this.ping2.play();
	            if (paddle.score === 10) {
	                this.reset();
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.x = this.boardWidth / 2;
	            this.y = this.boardHeight / 2;

	            this.vx = 0;
	            this.vy = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render(svg, paddle1, paddle2) {

	            this.x += this.vx; //this.x = this.x + this.vx;
	            this.y += this.vy;

	            this.wallCollision();
	            this.paddleCollision(paddle1, paddle2);

	            var ball = document.createElementNS(_settings.SVG_NS, 'circle');
	            ball.setAttributeNS(null, 'fill', this.colorfill);
	            ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
	            ball.setAttributeNS(null, 'cy', this.y); //y of the center point
	            ball.setAttributeNS(null, 'r', this.radius);
	            ball.setAttributeNS(null, 'stroke', '#113840');
	            ball.setAttributeNS(null, 'stroke-width', '2');
	            svg.appendChild(ball);

	            var rightGoal = this.x + this.radius >= this.boardWidth;
	            var leftGoal = this.x - this.radius <= 0;

	            if (rightGoal) {
	                this.goal(paddle1);
	                this.direction = 1;
	            } else if (leftGoal) {
	                this.goal(paddle2);
	                this.direction = -1;
	            }
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Score = function () {
	    function Score(x, y, size) {
	        _classCallCheck(this, Score);

	        this.x = x;
	        this.y = y;
	        this.size = size;
	    }

	    _createClass(Score, [{
	        key: 'render',
	        value: function render(svg, scorecount) {

	            var score = document.createElementNS(_settings.SVG_NS, 'text');
	            score.setAttributeNS(null, 'x', this.x); //move this.boardWith/2 to reset //this will always in the center
	            score.setAttributeNS(null, 'y', this.y); //y of the center point
	            score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
	            score.setAttributeNS(null, 'font-size', this.size);
	            score.setAttributeNS(null, 'fill', 'white');
	            score.textContent = scorecount; //scorecount becasue I already named the let score 
	            svg.appendChild(score);
	        }
	    }]);

	    return Score;
	}();

	exports.default = Score;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FireBalls = function () {
	    function FireBalls(radius, boardWidth, boardHeight, colorfill, controls) {
	        var _this = this;

	        _classCallCheck(this, FireBalls);

	        this.radius = radius;
	        this.boardWidth = boardWidth;
	        this.boardHeight = boardHeight;
	        this.colorfill = colorfill;
	        this.paddleWidth = _settings.GAME.paddleWidth;

	        this.direction = 1;

	        this.reset();

	        document.addEventListener('keydown', function (event) {
	            if (_this.vx === 0 && _this.vy === 0 && event.keyCode === controls) {
	                (function () {
	                    var generateSpeed = function generateSpeed() {
	                        while (_this.vy === 0) {
	                            _this.vy = Math.floor(Math.random() * 10 - 5); //a number between -5 and 5 //direction of the ball
	                        }
	                        _this.vx = _this.direction * (6 - Math.abs(_this.vy));
	                        //stops x & y from being at 0
	                        if (_this.vx === 0 || _this.vy === 0) {
	                            generateSpeed();
	                        }
	                    };
	                    generateSpeed();
	                })();
	            }
	        });
	    }

	    _createClass(FireBalls, [{
	        key: 'reset',
	        value: function reset() {
	            this.x = this.paddleWidth + 7;
	            this.y = this.boardHeight / 2;

	            this.vx = 0;
	            this.vy = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render(svg) {

	            this.x += this.vx; //this.x = this.x + this.vx;
	            this.y += this.vy;

	            var ball = document.createElementNS(_settings.SVG_NS, 'circle');
	            ball.setAttributeNS(null, 'fill', this.colorfill);
	            ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
	            ball.setAttributeNS(null, 'cy', this.y); //y of the center point
	            ball.setAttributeNS(null, 'r', this.radius);
	            svg.appendChild(ball);
	        }
	    }]);

	    return FireBalls;
	}();

	exports.default = FireBalls;

/***/ }
/******/ ]);