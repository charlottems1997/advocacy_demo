import List from '@mui/material/List';
import { TableItem } from './table-item';
import { Card } from '../ui/card';
import TableMenu from './table-menu';
import Box from '@mui/material/Box';

const tableItemStyle = {
  border: '1px grey',
};

export default function TableTemplate({ tableTitle = "" }) {
  return (
    <div>
      <Box suppressHydrationWarning component="section" sx={{ p: 2, border: '1px grey' }}>
        {tableTitle}
      </Box>
      <Card> 
        <List>
            <TableItem itemName='test'/>
            <TableItem itemName='test2'/>
        </List>
      </Card>
    </div>
  );
}
