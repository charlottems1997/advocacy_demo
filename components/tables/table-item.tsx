import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function TableItem ({ itemName= "" }) {
   return (
        <ListItem>
            <ListItemText primary={itemName} />
            <Checkbox/>
        </ListItem>
   )
}