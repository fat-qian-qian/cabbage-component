import React, { useEffect } from 'react';
import { useTable, useRowSelect, usePagination } from 'react-table';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button } from '@chakra-ui/react';

// Define a default UI for selecting rows
const DefaultSelectColumn = ({ getToggleAllRowsSelectedProps }) => (
  <div>
    <Checkbox {...getToggleAllRowsSelectedProps()} />
  </div>
);

export const DataTable = ({
  columns,
  data,
  selectionMode,
  selection,
  onSelectionChange,
  dataKey,
  tableStyle,
  renderRowSubComponents = [],
  customHeaders = [],
  enablePagination = false, // New prop for enabling pagination
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds, pageIndex, pageSize },
    page,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { selectedRowIds: selection, pageIndex: 0, pageSize: 10 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      if (selectionMode) {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: DefaultSelectColumn,
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
        ]);
      }
    }
  );

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(Object.keys(selectedRowIds).map((key) => parseInt(key, 10)));
    }
  }, [selectedRowIds, onSelectionChange]);

  const displayedRows = enablePagination ? page : rows;

  return (
    <Box {...tableStyle}>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
              {customHeaders.map((header, index) => (
                <Th key={`customHeader-${index}`}>{header}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {displayedRows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
                {renderRowSubComponents.map((renderSubComponent, index) => (
                  <Td key={index}>{renderSubComponent({ row })}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {enablePagination && (
        <div>
          <Button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
            {'<<'}
          </Button>{' '}
          <Button onClick={() => previousPage()} disabled={pageIndex === 0}>
            {'<'}
          </Button>{' '}
          <Button onClick={() => {
            nextPage();
          }} disabled={pageIndex >= pageCount - 1}>
            {'>'}
          </Button>{' '}
          <Button onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex >= pageCount - 1}>
            {'>>'}
          </Button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageCount}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '50px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      )}
    </Box>
  );
};
