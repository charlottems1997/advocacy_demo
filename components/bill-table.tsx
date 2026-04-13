import Box from "@mui/material/Box";
import TableTemplate from "./tables/table-template";
import TableMenu from "./tables/table-menu";

export function BillTable () {
    return ( 
        <div>
            <TableMenu/>
            <TableTemplate tableTitle="Bills Table"/>
            <Box component="section" sx={{ p: 2, border: '1px grey' }}>
                Submit 
            </Box>
        </div>
    )
}