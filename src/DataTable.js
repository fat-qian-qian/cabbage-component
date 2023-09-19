import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    TableCaption,
    Flex,
} from '@chakra-ui/react';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table'
import { PageShowSelector } from './components/PageShowSelector';
import { PageNavButtonGroup } from './components/PageNavButtonGroup';



export const DataTable = ({
    columns,
    data,
    selectionMode,
    selection,
    onSelectionChange,
    dataKey,
    tableStyle = {
        textAlign: "center",
        size: "sm",
        border: "1px",
        borderColor: "blackAlpha.900",
    },
    thStyle = {
        border: "1px",
        textAlign: "center",
        borderColor: "blackAlpha.900",
        bg: 'teal.400',
        color: 'white',
        fontSize: 'md',
    },
    tdStyle = {
        border: "1px",
        borderColor: "blackAlpha.900",
        textAlign: "center",
    },
    renderRowSubComponents = [],
    customHeaders = [],
    enablePagination = false,
    caption = "",
}) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });

    const displayedRows = enablePagination ? table.getPaginationRowModel().rows : table.getCoreRowModel().rows;

    return (
        <TableContainer>
            <Table
                {...tableStyle}
            >
                <TableCaption
                    placement="top"
                    bg={"blackAlpha.900"}
                    color={"white"}
                    fontSize={"md"}
                    p={3}
                    mt={0}
                >
                    {caption}
                </TableCaption>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr>
                            {headerGroup.headers.map((header) => (
                                <Th {...thStyle} key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </Th>
                            ))}
                            {customHeaders.map((header, index) => (
                                <Th {...thStyle} key={`custom-header-${index}`}>{header}</Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {displayedRows.map((row) => (
                        <Tr>
                            {row.getVisibleCells().map((cell) => (
                                <Td
                                    {...tdStyle}
                                    key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            ))}
                            {renderRowSubComponents.map((renderRowSubComponent) => (
                                <Td
                                    {...tdStyle}
                                >{renderRowSubComponent(row)}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            {enablePagination && (
                <Flex
                mt={4}
                textAlign={'center'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                >
                    <PageShowSelector table={table} />
                    <PageNavButtonGroup table={table} />
                </Flex>
            )}
        </TableContainer>
    );
};
