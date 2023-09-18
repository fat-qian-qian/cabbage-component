"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;
var _react = require("@chakra-ui/react");
var _icons = require("@chakra-ui/icons");
var _reactTable = require("@tanstack/react-table");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DataTable = function DataTable(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    selectionMode = _ref.selectionMode,
    selection = _ref.selection,
    onSelectionChange = _ref.onSelectionChange,
    dataKey = _ref.dataKey,
    _ref$tableStyle = _ref.tableStyle,
    tableStyle = _ref$tableStyle === void 0 ? {
      textAlign: "center",
      size: "sm",
      border: "1px",
      borderColor: "blackAlpha.900"
    } : _ref$tableStyle,
    _ref$thStyle = _ref.thStyle,
    thStyle = _ref$thStyle === void 0 ? {
      border: "1px",
      textAlign: "center",
      borderColor: "blackAlpha.900",
      bg: 'teal.400',
      color: 'white',
      fontSize: 'md'
    } : _ref$thStyle,
    _ref$tdStyle = _ref.tdStyle,
    tdStyle = _ref$tdStyle === void 0 ? {
      border: "1px",
      borderColor: "blackAlpha.900",
      textAlign: "center"
    } : _ref$tdStyle,
    _ref$renderRowSubComp = _ref.renderRowSubComponents,
    renderRowSubComponents = _ref$renderRowSubComp === void 0 ? [] : _ref$renderRowSubComp,
    _ref$customHeaders = _ref.customHeaders,
    customHeaders = _ref$customHeaders === void 0 ? [] : _ref$customHeaders,
    _ref$enablePagination = _ref.enablePagination,
    enablePagination = _ref$enablePagination === void 0 ? false : _ref$enablePagination,
    _ref$caption = _ref.caption,
    caption = _ref$caption === void 0 ? "" : _ref$caption;
  var table = (0, _reactTable.useReactTable)({
    columns: columns,
    data: data,
    getCoreRowModel: (0, _reactTable.getCoreRowModel)(),
    getFilteredRowModel: (0, _reactTable.getFilteredRowModel)(),
    getPaginationRowModel: (0, _reactTable.getPaginationRowModel)(),
    debugTable: true
  });
  var displayedRows = enablePagination ? table.getPaginationRowModel().rows : table.getCoreRowModel().rows;
  return /*#__PURE__*/React.createElement(_react.TableContainer, null, /*#__PURE__*/React.createElement(_react.Table, tableStyle, /*#__PURE__*/React.createElement(_react.TableCaption, {
    placement: "top",
    bg: "blackAlpha.900",
    color: "white",
    fontSize: "md",
    p: 3,
    mt: 0
  }, caption), /*#__PURE__*/React.createElement(_react.Thead, null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/React.createElement(_react.Tr, null, headerGroup.headers.map(function (header) {
      return /*#__PURE__*/React.createElement(_react.Th, _extends({}, thStyle, {
        key: header.id
      }), (0, _reactTable.flexRender)(header.column.columnDef.header, header.getContext()));
    }), customHeaders.map(function (header, index) {
      return /*#__PURE__*/React.createElement(_react.Th, _extends({}, thStyle, {
        key: "custom-header-".concat(index)
      }), header);
    }));
  })), /*#__PURE__*/React.createElement(_react.Tbody, null, displayedRows.map(function (row) {
    return /*#__PURE__*/React.createElement(_react.Tr, null, row.getVisibleCells().map(function (cell) {
      return /*#__PURE__*/React.createElement(_react.Td, _extends({}, tdStyle, {
        key: cell.id
      }), (0, _reactTable.flexRender)(cell.column.columnDef.cell, cell.getContext()));
    }), renderRowSubComponents.map(function (renderRowSubComponent) {
      return /*#__PURE__*/React.createElement(_react.Td, tdStyle, renderRowSubComponent(row));
    }));
  }))), enablePagination && /*#__PURE__*/React.createElement(_react.Box, {
    mt: 4,
    textAlign: 'center'
  }, /*#__PURE__*/React.createElement(_react.Button, {
    onClick: function onClick() {
      return table.setPageIndex(0);
    },
    disabled: !table.getCanPreviousPage()
  }, /*#__PURE__*/React.createElement(_icons.ArrowLeftIcon, null)), /*#__PURE__*/React.createElement(_react.Button, {
    onClick: function onClick() {
      return table.previousPage();
    },
    disabled: !table.getCanPreviousPage()
  }, /*#__PURE__*/React.createElement(_icons.ArrowBackIcon, null)), /*#__PURE__*/React.createElement(_react.Button, {
    onClick: function onClick() {
      return table.nextPage();
    },
    disabled: !table.getCanNextPage()
  }, /*#__PURE__*/React.createElement(_icons.ArrowForwardIcon, null)), /*#__PURE__*/React.createElement(_react.Button, {
    onClick: function onClick() {
      return table.setPageIndex(table.getPageCount() - 1);
    },
    disabled: !table.getCanNextPage()
  }, /*#__PURE__*/React.createElement(_icons.ArrowRightIcon, null)), /*#__PURE__*/React.createElement(_react.Box, {
    as: "span",
    ml: 4
  }, "Page ", /*#__PURE__*/React.createElement(_react.Box, {
    as: "strong",
    ml: 1
  }, table.getState().pagination.pageIndex + 1, " of ", table.getPageCount())), /*#__PURE__*/React.createElement(_react.Box, {
    as: "span",
    ml: 4
  }, "Go to page:", ' ', /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: table.getState().pagination.pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      table.setPageIndex(page);
    }
  })), /*#__PURE__*/React.createElement(_react.Box, {
    as: "span",
    ml: 4
  }, /*#__PURE__*/React.createElement("select", {
    value: table.getState().pagination.pageSize,
    onChange: function onChange(e) {
      return table.setPageSize(Number(e.target.value));
    }
  }, [10, 20, 30, 40, 50].map(function (pageSize) {
    return /*#__PURE__*/React.createElement("option", {
      key: pageSize,
      value: pageSize
    }, "Show ", pageSize);
  })))));
};
exports.DataTable = DataTable;