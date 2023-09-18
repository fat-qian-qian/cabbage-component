import { Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"


export const PageNavigator = ({ table }) => {
    return (
        <Flex>
            <Text mr={4}>前往</Text>
            <NumberInput
                min={1}
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                    const pageIndex = Number(e) - 1;
                    if (pageIndex >= 0 && pageIndex < table.getPageCount()) {
                        table.setPageIndex(pageIndex);
                    }
                }}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
                    <NumberDecrementStepper onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    )
}