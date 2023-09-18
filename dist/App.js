"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _DataTable = require("./DataTable");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var App = function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedProducts = _useState2[0],
    setSelectedProducts = _useState2[1];
  var columns = _react.default.useMemo(function () {
    return [{
      header: 'Code',
      accessorKey: 'code'
    }, {
      header: 'Name',
      accessorKey: 'name'
    }, {
      header: 'Category',
      accessorKey: 'category'
    }, {
      header: 'Quantity',
      accessorKey: 'quantity'
    }];
  }, []);
  var products = [{
    id: 1,
    code: 'A1',
    name: 'Apple',
    category: 'Fruit',
    quantity: 10
  }, {
    id: 2,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 3,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 4,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 5,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 6,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 7,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 8,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 9,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 10,
    code: 'B1',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }, {
    id: 11,
    code: 'B2',
    name: 'Banana',
    category: 'Fruit',
    quantity: 20
  }];
  var customClickHandler1 = function customClickHandler1(row) {
    console.log(row);
    alert("Button 1 clicked for row ".concat(row.id));
  };
  var createLink = function createLink(row) {
    return "https://www.google.com/search?q=".concat(row.name);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    w: '80%'
  }, /*#__PURE__*/_react.default.createElement(_DataTable.DataTable, {
    caption: "Products",
    value: products,
    columns: columns,
    data: products,
    selectionMode: true,
    selection: selectedProducts,
    enablePagination: true,
    customHeaders: ['Edit', 'Link'],
    onSelectionChange: function onSelectionChange(ids) {
      return setSelectedProducts(ids.map(function (id) {
        return products[id];
      }));
    },
    dataKey: "id",
    renderRowSubComponents: [function (props) {
      return /*#__PURE__*/_react.default.createElement(_react2.Button, {
        onClick: function onClick() {
          console.log(props);
          customClickHandler1(props.original);
        }
      }, "Button 1");
    }, function (props) {
      return /*#__PURE__*/_react.default.createElement(_react2.Link, {
        href: createLink(props.original)
      }, "Link");
    }]
  })));
};
var _default = App;
exports.default = _default;