import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function TableItem({ isDefault = false, itemName = "" }) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <ListItem>
        <ListItemText primary={itemName} />
        {isDefault ? (
          <>
            <></>
          </>
        ) : (
          <Checkbox sx={{ color: "white" }} />
        )}
      </ListItem>
    </div>
  );
}
