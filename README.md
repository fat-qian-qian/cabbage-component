# DataTable Component Tutorial

The `DataTable` component is a flexible and feature-rich table built with React and Chakra UI. This guide walks you through how to use the `DataTable` component and explains each prop's meaning and usage.

## Table of Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Props](#props)

## Installation

Before you use the `DataTable`, make sure you have `@chakra-ui/react` installed:

```bash
npm install @chakra-ui/react
```

## Basic Usage

Here's how to use the `DataTable` component in a React component:

```jsx
import { DataTable } from './DataTable';

const App = () => {
  const columns = [
    { header: 'Code', accessorKey: 'code' },
    { header: 'Name', accessorKey: 'name' },
    // ... more columns
  ];

  const data = [
    { id: 1, code: 'A1', name: 'Apple' },
    { id: 2, code: 'B1', name: 'Banana' },
    // ... more data
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
};
```

## Props

### `columns`

An array of column objects specifying the header label and the key for data accessor.

- Type: `Array`
- Example:

  ```jsx
  const columns = [
    { header: 'Code', accessorKey: 'code' },
    { header: 'Name', accessorKey: 'name' },
  ];
  ```

### `data`

An array of objects to be displayed in the table.

- Type: `Array`
- Example:

  ```jsx
  const data = [
    { id: 1, code: 'A1', name: 'Apple' },
    { id: 2, code: 'B1', name: 'Banana' },
  ];
  ```

### `selectionMode`

A boolean flag that enables or disables row selection.

- Type: `Boolean`
- Default: `false`

### `selection`

An array of currently selected rows.

- Type: `Array`
- Default: `[]`

### `onSelectionChange`

A function that is called when the selection changes. Receives an array of selected row IDs as the first argument.

- Type: `Function`

### `dataKey`

The key in the data object to use as the unique identifier for each row.

- Type: `String`

### `tableStyle`

Allows you to provide additional styles for the table.

- Type: `Object`

### `renderRowSubComponents`

An array of functions that return React elements to be rendered in extra columns. Each function receives the row data as a parameter.

- Type: `Array<Function>`

### `customHeaders`

An array of strings that are used as headers for the extra columns created by `renderRowSubComponents`.

- Type: `Array<String>`

### `enablePagination`

A boolean flag that enables or disables pagination for the table.

- Type: `Boolean`
- Default: `false`

## Example Usage with All Props

```jsx
<DataTable
  columns={columns}
  data={data}
  selectionMode={true}
  selection={selectedProducts}
  onSelectionChange={(ids) => setSelectedProducts(ids.map((id) => products[id]))}
  dataKey="id"
  tableStyle={{ textAlign: 'center' }}
  renderRowSubComponents={[
    (props) => (<Button>Button 1</Button>),
    (props) => (<Link>Link</Link>)
  ]}
  customHeaders={['Button', 'Link']}
  enablePagination={true}
/>
```