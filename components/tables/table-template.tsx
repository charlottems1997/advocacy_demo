import List from '@mui/material/List';
import { TableItem } from './table-item';
import { Card } from '../ui/card';
import TableMenu from './table-menu';
import Box from '@mui/material/Box';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'grey',
};

export default function TableTemplate({ tableTitle = "" }) {
  return (
    <div>
      <Box suppressHydrationWarning component="section" sx={{ p: 2, border: '1px grey' }}>
        {tableTitle}
      </Box>
      <Card> 
        <List sx={style}>
          <TableItem itemName='Test123'/>
          <TableItem itemName='Test123'/>
        </List>
      </Card>
    </div>
  );
}
