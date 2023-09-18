"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTable = require("react-table");
var _react2 = require("@chakra-ui/react");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Define a default UI for selecting rows
var DefaultSelectColumn = function DefaultSelectColumn(_ref) {
  var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react2.Checkbox, getToggleAllRowsSelectedProps()));
};
var DataTable = function DataTable(_ref2) {
  var columns = _ref2.columns,
    data = _ref2.data,
    selectionMode = _ref2.selectionMode,
    selection = _ref2.selection,
    onSelectionChange = _ref2.onSelectionChange,
    dataKey = _ref2.dataKey,
    tableStyle = _ref2.tableStyle,
    _ref2$renderRowSubCom = _ref2.renderRowSubComponents,
    renderRowSubComponents = _ref2$renderRowSubCom === void 0 ? [] : _ref2$renderRowSubCom,
    _ref2$customHeaders = _ref2.customHeaders,
    customHeaders = _ref2$customHeaders === void 0 ? [] : _ref2$customHeaders,
    _ref2$enablePaginatio = _ref2.enablePagination,
    enablePagination = _ref2$enablePaginatio === void 0 ? false : _ref2$enablePaginatio;
  var _useTable = (0, _reactTable.useTable)({
      columns: columns,
      data: data,
      initialState: {
        selectedRowIds: selection,
        pageIndex: 0,
        pageSize: 10
      }
    }, _reactTable.usePagination, _reactTable.useRowSelect, function (hooks) {
      if (selectionMode) {
        hooks.visibleColumns.push(function (columns) {
          return [{
            id: 'selection',
            Header: DefaultSelectColumn,
            Cell: function Cell(_ref3) {
              var row = _ref3.row;
              return /*#__PURE__*/_react.default.createElement(_react2.Checkbox, row.getToggleRowSelectedProps());
            }
          }].concat(_toConsumableArray(columns));
        });
      }
    }),
    getTableProps = _useTable.getTableProps,
    getTableBodyProps = _useTable.getTableBodyProps,
    headerGroups = _useTable.headerGroups,
    rows = _useTable.rows,
    prepareRow = _useTable.prepareRow,
    _useTable$state = _useTable.state,
    selectedRowIds = _useTable$state.selectedRowIds,
    pageIndex = _useTable$state.pageIndex,
    pageSize = _useTable$state.pageSize,
    page = _useTable.page,
    pageCount = _useTable.pageCount,
    gotoPage = _useTable.gotoPage,
    nextPage = _useTable.nextPage,
    previousPage = _useTable.previousPage,
    setPageSize = _useTable.setPageSize;
  (0, _react.useEffect)(function () {
    if (onSelectionChange) {
      onSelectionChange(Object.keys(selectedRowIds).map(function (key) {
        return parseInt(key, 10);
      }));
    }
  }, [selectedRowIds, onSelectionChange]);
  var displayedRows = enablePagination ? page : rows;
  return /*#__PURE__*/_react.default.createElement(_react2.Box, tableStyle, /*#__PURE__*/_react.default.createElement(_react2.Table, getTableProps(), /*#__PURE__*/_react.default.createElement(_react2.Thead, null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react.default.createElement(_react2.Tr, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react.default.createElement(_react2.Th, column.getHeaderProps(), column.render('Header'));
    }), customHeaders.map(function (header, index) {
      return /*#__PURE__*/_react.default.createElement(_react2.Th, {
        key: "customHeader-".concat(index)
      }, header);
    }));
  })), /*#__PURE__*/_react.default.createElement(_react2.Tbody, getTableBodyProps(), displayedRows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement(_react2.Tr, row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/_react.default.createElement(_react2.Td, cell.getCellProps(), cell.render('Cell'));
    }), renderRowSubComponents.map(function (renderSubComponent, index) {
      return /*#__PURE__*/_react.default.createElement(_react2.Td, {
        key: index
      }, renderSubComponent({
        row: row
      }));
    }));
  }))), enablePagination && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react2.Button, {
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: pageIndex === 0
  }, '<<'), ' ', /*#__PURE__*/_react.default.createElement(_react2.Button, {
    onClick: function onClick() {
      return previousPage();
    },
    disabled: pageIndex === 0
  }, '<'), ' ', /*#__PURE__*/_react.default.createElement(_react2.Button, {
    onClick: function onClick() {
      nextPage();
    },
    disabled: pageIndex >= pageCount - 1
  }, '>'), ' ', /*#__PURE__*/_react.default.createElement(_react2.Button, {
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: pageIndex >= pageCount - 1
  }, '>>'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "Page", ' ', /*#__PURE__*/_react.default.createElement("strong", null, pageIndex + 1, " of ", pageCount), ' '), /*#__PURE__*/_react.default.createElement("span", null, "| Go to page:", ' ', /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    defaultValue: pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    },
    style: {
      width: '50px'
    }
  })), ' ', /*#__PURE__*/_react.default.createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      return setPageSize(Number(e.target.value));
    }
  }, [10, 20, 30, 40, 50].map(function (size) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: size,
      value: size
    }, "Show ", size);
  }))));
};
exports.DataTable = DataTable;