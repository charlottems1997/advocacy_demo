import List from '@mui/material/List';
import { TableItem } from './table-item';
import { Card } from '../ui/card';
import Box from '@mui/material/Box';
import TableHeader from './table-header';

export default function TableTemplate({ tableTitle = "" }) {
  return (
    <div>
      <Box suppressHydrationWarning component="section" sx={{ p: 2, border: '1px grey' }}>
        {tableTitle}
      </Box>
      <TableHeader/>
      <Card> 
        <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
          <div style={{ width: '500px'}}>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
            <TableItem itemName='12345678901011121314151617181920'/>
          </div>
        </List>
      </Card>
    </div>
  );
}
