import React, { useState } from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { DataTable } from './DataTable';
const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const columns = React.useMemo(
    () => [
      { header: 'Code', accessorKey: 'code' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Category', accessorKey: 'category' },
      { header: 'Quantity', accessorKey: 'quantity' },
    ],
    []
  );

  const products = [
    { id: 1, code: 'A1', name: 'Apple', category: 'Fruit', quantity: 10 },
    { id: 2, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 3, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 4, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 5, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 6, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 7, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 8, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 9, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 10, code: 'B1', name: 'Banana', category: 'Fruit', quantity: 20 },
    { id: 11, code: 'B2', name: 'Banana', category: 'Fruit', quantity: 20 },
  ];

  const customClickHandler1 = (row) => {
    console.log(row);
    alert(`Button 1 clicked for row ${row.id}`);
  };

  const createLink = (row) => {
    return `https://www.google.com/search?q=${row.name}`;
  };

  return (
    <div>
      <Box w={'80%'}>
      <DataTable
        caption='Products'
        value={products}
        columns={columns}
        data={products}
        selectionMode={true}
        selection={selectedProducts}
        enablePagination={true}
        customHeaders={['Edit', 'Link']}
        onSelectionChange={(ids) =>
          setSelectedProducts(ids.map((id) => products[id]))
        }
        dataKey="id"
        renderRowSubComponents={[
          (props) => (
            <Button onClick={() => {
              console.log(props)
              customClickHandler1(props.original)
            }}>Button 1</Button>
          ),
          (props) => (
            <Link href={createLink(props.original)}>Link</Link>
          )
        ]}
      />
      </Box>
    </div>
  );
};

export default App;
