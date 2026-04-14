import List from "@mui/material/List";
import { Card } from "../ui/card";
import Box from "@mui/material/Box";
import TableHeader from "./table-header";
import SearchResults from "./search-results";

export default function TableTemplate({ tableTitle = "" }) {
  return (
    <div>
      <Box
        suppressHydrationWarning
        component="section"
        sx={{ p: 2, border: "1px grey" }}
      >
        {tableTitle}
      </Box>
      <TableHeader />
      <Card>
        <List>
          <SearchResults />
        </List>
      </Card>
    </div>
  );
}
