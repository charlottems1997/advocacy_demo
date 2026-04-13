import Box from "@mui/material/Box";
import TableTemplate from "./tables/table-template";
import { Button } from "./ui/button";

export function BillTable () {
    return ( 
        <div style={{ border: '1px solid grey' }}>
            <TableTemplate tableTitle="Bills Table"/>
            <Box component="section" sx={{ border: '1px grey' }}>
                <Button>Submit</Button>
            </Box>
        </div>
    )
}