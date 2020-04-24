// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lib/MtgCard.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MtgCard = /*#__PURE__*/function () {
  /*	raw;
  	quantity;
  	name = '';
  	set = '';
  	setNumber = 0;
  	lookup = {};
  */
  function MtgCard() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, MtgCard);

    this.raw = '';
    this.quantity = 0;
    this.name = '';
    this.set = '';
    this.setNumber = '';
    this.lookup = {};
    this.parseImport(input);
  }

  _createClass(MtgCard, [{
    key: "parseImport",
    value: function parseImport(input) {
      if (!input) {
        return;
      }

      if (_typeof(input) === 'object' && input !== null) {
        if (input.raw) this.raw = input.raw;
        if (input.quantity) this.quantity = input.quantity;
        if (input.name) this.name = input.name;
        if (input.set) this.set = input.set;
        if (input.setNumber) this.setNumber = input.setNumber;
        if (input.lookup) this.lookup = input.lookup;
        return;
      }

      this.raw = input;
      var matches = input.match( /*#__PURE__*/_wrapRegExp(/^([0-9]+) (.+) \(([0-9A-Za-z]{3})\) ([0-9]+)$/, {
        quantity: 1,
        name: 2,
        set: 3,
        setNumber: 4
      }));

      if (matches) {
        this.quantity = matches.groups.quantity;
        this.name = matches.groups.name;
        this.set = matches.groups.set;
        this.setNumber = matches.groups.setNumber;
      }
    }
  }, {
    key: "arena",
    get: function get() {
      return this.quantity + ' ' + this.name + ' (' + this.set + ') ' + this.setNumber;
    }
  }]);

  return MtgCard;
}();

var _default = MtgCard;
exports.default = _default;
},{}],"lib/MtgDeck.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MtgCard = _interopRequireDefault(require("./MtgCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MtgDeck = /*#__PURE__*/function () {
  /*	Companion;
  	Commander;
  	Deck = [];
  	Sideboard = [];
  	fetched; // whether the data has already been fetched.
  */
  function MtgDeck() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, MtgDeck);

    this.Deck = [];
    this.Sideboard = [];
    this.fetched = false;

    if (input) {
      this.parseImport(input);
    }
  }

  _createClass(MtgDeck, [{
    key: "parseImport",
    value: function parseImport(input) {
      if (_typeof(input) === 'object' && input !== null) {
        if (input.Companion) {
          this.Companion = new _MtgCard.default(input.Companion);
        }

        if (input.Commander) {
          this.Commander = new _MtgCard.default(input.Commander);
        }

        if (input.Deck) {
          this.Deck = input.Deck;
          this.Deck.forEach(function (card, index) {
            this.Deck[index] = new _MtgCard.default(card);
          }, this);
        }

        if (input.Sideboard) {
          this.Sideboard = input.Sideboard;
          this.Sideboard.forEach(function (card, index) {
            this.Sideboard[index] = new _MtgCard.default(card);
          }, this);
        }

        if (input.fetched) {
          this.fetched = input.fetched;
        }

        return this;
      }

      if (typeof input === 'string' || input instanceof String) {
        input = input.split('\n');
      }

      var type = 'Deck';
      input.forEach(function (line) {
        if (line) {
          // If it starts with a digit, it's a card.  Else, it's a type.
          if (line.match(/^\d/)) {
            // Decks and Sideboards can be multiple cards, so add it to the array.
            if ('Deck' === type || 'Sideboard' === type) {
              this[type].push(new _MtgCard.default(line));
            } else {
              this[type] = new _MtgCard.default(line);
            }
          } else {
            type = line;
          }
        }
      }, this);
      this.getScryfallData();
    }
  }, {
    key: "findCardFromResult",
    value: function findCardFromResult(data, matchParams) {
      var found = data.find(function (card) {
        return card.collector_number === matchParams.collector_number && card.set.toUpperCase() === matchParams.set.toUpperCase();
      });
      return found;
    }
  }, {
    key: "getScryfallData",
    value: function () {
      var _getScryfallData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var setAttributesCallback,
            allCards,
            lookupData,
            rawResponse,
            scryfallData,
            foundCards,
            cardData,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setAttributesCallback = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                this.fetched = 'working'; // Make one big array of all involved cards.

                allCards = this.Deck.concat(this.Sideboard, this.Commander, this.Companion).filter(Boolean); // Map the data into strings so we can properly sort out unique lookups.

                lookupData = allCards.map(function (card) {
                  return card.set + '|' + card.setNumber;
                }); // Filter out duplicates and sort!

                lookupData = _toConsumableArray(new Set(lookupData)).sort();
                lookupData = lookupData.map(function (card) {
                  return {
                    set: card.substring(0, card.indexOf('|')),
                    collector_number: card.substring(1 + card.indexOf('|'))
                  };
                }); // Remember, Scryfall maxes out at 75 cards searched for!

                _context.next = 8;
                return fetch('https://api.scryfall.com/cards/collection', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    identifiers: lookupData
                  })
                });

              case 8:
                rawResponse = _context.sent;
                _context.next = 11;
                return rawResponse.json();

              case 11:
                scryfallData = _context.sent;
                foundCards = scryfallData.data; // Reuse a var as we fly through?

                // Loop through\
                if (this.Commander) {
                  this.Commander.lookup = this.findCardFromResult(foundCards, {
                    set: this.Commander.set,
                    collector_number: this.Commander.setNumber
                  });
                }

                if (this.Companion) {
                  this.Companion.lookup = this.findCardFromResult(foundCards, {
                    set: this.Companion.set,
                    collector_number: this.Companion.setNumber
                  });
                }

                if (this.Deck.length) {
                  this.Deck = this.Deck.map(function (card) {
                    card.lookup = this.findCardFromResult(foundCards, {
                      set: card.set,
                      collector_number: card.setNumber
                    });
                    return card;
                  }, this);
                }

                if (this.Sideboard.length) {
                  this.Sideboard = this.Sideboard.map(function (card) {
                    card.lookup = this.findCardFromResult(foundCards, {
                      set: card.set,
                      collector_number: card.setNumber
                    });
                    return card;
                  }, this);
                }

                if (setAttributesCallback) {
                  setAttributesCallback({
                    deck: this
                  });
                }

                this.fetched = 'done';

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getScryfallData() {
        return _getScryfallData.apply(this, arguments);
      }

      return getScryfallData;
    }()
  }, {
    key: "arena",
    get: function get() {
      var deckExport = '';

      if (this.Commander) {
        deckExport += 'Commander\n' + this.Commander.arena + '\n\n';
      }

      if (this.Companion) {
        deckExport += 'Companion\n' + this.Companion.arena + '\n\n';
      }

      if (this.Sideboard.length) {
        deckExport += 'Deck\n';
        this.Deck.forEach(function (card) {
          deckExport += card.arena + '\n';
        });
        deckExport += '\n';
      }

      if (this.Sideboard.length) {
        deckExport += 'Sideboard\n';
        this.Sideboard.forEach(function (card) {
          deckExport += card.arena + '\n';
        });
        deckExport += '\n';
      }

      return deckExport;
    }
  }]);

  return MtgDeck;
}();

var _default = MtgDeck;
exports.default = _default;
},{"./MtgCard":"lib/MtgCard.jsx"}],"components/CardLink.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function CardLink(_ref) {
  var card = _ref.card;

  if (card.lookup && card.lookup.related_uris) {
    return /*#__PURE__*/React.createElement("a", {
      href: card.lookup.related_uris.gatherer
    }, card.name, " ", /*#__PURE__*/React.createElement("span", {
      className: "mana-cost"
    }, card.lookup.mana_cost));
  }

  return /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, card.name);
}

var _default = CardLink;
exports.default = _default;
},{}],"components/DeckCard.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardLink = _interopRequireDefault(require("./CardLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DeckCard(_ref) {
  var card = _ref.card;
  return /*#__PURE__*/React.createElement("li", null, card.quantity, "x ", /*#__PURE__*/React.createElement(_CardLink.default, {
    card: card
  }));
}

var _default = DeckCard;
exports.default = _default;
},{"./CardLink":"components/CardLink.jsx"}],"components/DeckList.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardLink = _interopRequireDefault(require("./CardLink"));

var _DeckCard = _interopRequireDefault(require("./DeckCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;

function whatTheType(type_line) {
  if (type_line.includes('Creature')) {
    return __('Creature', 'mtg-blocks');
  }

  if (type_line.includes('Planeswalker')) {
    return __('Planeswalker', 'mtg-blocks');
  }

  if (type_line.includes('Land')) {
    return __('Land', 'mtg-blocks');
  }

  if (type_line.includes('Instant')) {
    return __('Instant', 'mtg-blocks');
  }

  if (type_line.includes('Sorcery')) {
    return __('Sorcery', 'mtg-blocks');
  }

  if (type_line.includes('Artifact')) {
    return __('Artifact', 'mtg-blocks');
  }

  if (type_line.includes('Enchantment')) {
    return __('Enchantment', 'mtg-blocks');
  }

  return __('Unknown', 'mtg-blocks');
}

function clusterDeckByType(Deck) {
  var init = {};
  init[__('Creature', 'mtg-blocks')] = [];
  init[__('Planeswalker', 'mtg-blocks')] = [];
  init[__('Instant', 'mtg-blocks')] = [];
  init[__('Sorcery', 'mtg-blocks')] = [];
  init[__('Artifact', 'mtg-blocks')] = [];
  init[__('Enchantment', 'mtg-blocks')] = [];
  init[__('Land', 'mtg-blocks')] = [];
  init[__('Unknown', 'mtg-blocks')] = [];
  var clusteredDeck = Deck.reduce(function (obj, card) {
    var type = whatTheType(card.lookup.type_line);
    obj[type].push(card);
    return obj;
  }, init);
  return clusteredDeck;
}

function DeckList(_ref) {
  var deck = _ref.deck;
  var clustered;

  if ('done' === deck.fetched) {
    clustered = clusterDeckByType(deck.Deck);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "mtg-deck-list"
  }, deck.Commander && /*#__PURE__*/React.createElement("div", {
    className: "mtg-deck-list_Commander"
  }, /*#__PURE__*/React.createElement("h3", null, __('Commander:', 'mtg-blocks')), /*#__PURE__*/React.createElement(_CardLink.default, {
    card: deck.Commander
  })), deck.Companion && /*#__PURE__*/React.createElement("div", {
    className: "mtg-deck-list_Companion"
  }, /*#__PURE__*/React.createElement("h3", null, __('Companion:', 'mtg-blocks')), /*#__PURE__*/React.createElement(_CardLink.default, {
    card: deck.Companion
  })), !!deck.Deck.length && /*#__PURE__*/React.createElement("div", {
    className: "mtg-deck-list_Deck"
  }, /*#__PURE__*/React.createElement("h3", null, __('Deck:', 'mtg-blocks')), clustered ? Object.entries(clustered).map(function (chunk) {
    if (!chunk[1].length) return;
    return /*#__PURE__*/React.createElement("div", {
      className: 'mtg-deck-list_Deck_' + chunk[0],
      key: chunk[0]
    }, /*#__PURE__*/React.createElement("h4", null, chunk[0]), /*#__PURE__*/React.createElement("ul", null, chunk[1].map(function (card) {
      return /*#__PURE__*/React.createElement(_DeckCard.default, {
        key: card.raw,
        card: card
      });
    })));
  }) : /*#__PURE__*/React.createElement("ul", null, deck.Deck.map(function (card) {
    return /*#__PURE__*/React.createElement(_DeckCard.default, {
      key: card.raw,
      card: card
    });
  }))), !!deck.Sideboard.length && /*#__PURE__*/React.createElement("div", {
    className: "mtg-deck-list_Sideboard"
  }, /*#__PURE__*/React.createElement("h3", null, __('Sideboard:', 'mtg-blocks')), /*#__PURE__*/React.createElement("ul", null, deck.Sideboard.map(function (card) {
    return /*#__PURE__*/React.createElement(_DeckCard.default, {
      key: card.raw,
      card: card
    });
  }))));
}

var _default = DeckList;
exports.default = _default;
},{"./CardLink":"components/CardLink.jsx","./DeckCard":"components/DeckCard.jsx"}],"deck.scss":[function(require,module,exports) {

},{}],"deck.jsx":[function(require,module,exports) {
"use strict";

var _MtgDeck = _interopRequireDefault(require("./lib/MtgDeck"));

var _DeckList = _interopRequireDefault(require("./components/DeckList"));

require("./deck.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    PanelBody = _wp$components.PanelBody,
    TextareaControl = _wp$components.TextareaControl;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
registerBlockType('magic-blocks/deck', {
  title: __('MTG Deck', 'mtg-blocks'),
  icon: 'admin-page',
  category: 'common',
  supports: {
    html: false
  },
  attributes: {
    raw: {
      type: 'string',
      default: '',
      source: 'text',
      selector: 'pre'
    },
    deck: {
      type: 'object',
      default: null
    }
  },
  edit: function edit(props) {
    var parseRaw = function parseRaw(event) {
      props.setAttributes({
        deck: new _MtgDeck.default(props.attributes.raw)
      });
    },
        clearDeck = function clearDeck() {
      props.setAttributes({
        raw: '',
        deck: null
      });
    }; // If the deck is just an object, but not a MtgDeck object, reinitialize it to be one.


    if (props.attributes.deck && !props.attributes.deck.getScryfallData) {
      props.setAttributes({
        deck: new _MtgDeck.default(props.attributes.deck)
      });
    }

    if (props.attributes.deck && props.attributes.deck.getScryfallData) {
      if (!props.attributes.deck.fetched) {
        props.attributes.deck.getScryfallData(props.setAttributes);
      } else {//	console.log( 'Scryfall data already loaded!' );
      }
    } else {//	console.log( 'props.attributes.deck.getScryfallData not found!' );
      }

    return /*#__PURE__*/React.createElement(Fragment, null, props.attributes.deck ? /*#__PURE__*/React.createElement(_DeckList.default, {
      deck: props.attributes.deck
    }) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextareaControl, {
      label: __('Arena Format Deck Import', 'mtg-blocks'),
      value: props.attributes.raw,
      onChange: function onChange(raw) {
        return props.setAttributes({
          raw: raw
        });
      }
    }), /*#__PURE__*/React.createElement(Button, {
      isSecondary: true,
      onClick: function onClick(e) {
        return parseRaw(e);
      }
    }, __('Process Import →', 'mtg-blocks'))), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __('Deck Settings', 'mtg-blocks')
    }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
      isPrimary: !!props.attributes.deck,
      disabled: !props.attributes.deck,
      isLarge: true,
      onClick: clearDeck
    }, __('Reset Deck', 'mtg-blocks')), /*#__PURE__*/React.createElement(Button, {
      isSecondary: true,
      disabled: !props.attributes.deck,
      isLarge: true,
      onClick: function onClick(e) {
        return props.attributes.deck.getScryfallData();
      }
    }, __('Reload Card Data', 'mtg-blocks'))))));
  },
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mtg-blocks_deck"
    }, /*#__PURE__*/React.createElement("pre", null, props.attributes.raw), props.attributes.deck ? /*#__PURE__*/React.createElement(_DeckList.default, {
      deck: props.attributes.deck
    }) : null);
  }
});
},{"./lib/MtgDeck":"lib/MtgDeck.jsx","./components/DeckList":"components/DeckList.jsx","./deck.scss":"deck.scss"}]},{},["deck.jsx"], null)
//# sourceMappingURL=deck.js.map