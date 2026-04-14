"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const textBoxStyle = {
    border: "1px solid grey",
    input: { color: "white" },
    width: 300,
    maxWidth: 300,
    height: 65,
    maxHeight: 65,
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          defaultValue="Search Items In Table..."
          onFocus={(e) => (e.target.value = "")}
          onBlur={(e) => (e.target.value = "Search Items In Table...")}
          sx={{
            variant: "standard",
            border: "1px solid grey",
            input: { color: "white" },
            width: 300,
            maxWidth: 300,
            height: 65,
            maxHeight: 65,
            // Remove the border highlight for Outlined variant
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid rgba(0, 0, 0, 0.23)", // Revert to default or 'none'
              },
            // Remove the focus ripple/outline on the internal Select component
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "transparent", // Or your preferred color
              },
            },
            "& .MuiInputBase-input:focus": {
              backgroundColor: "transparent", // Remove grey background on click if needed
            },
          }}
        />
      </div>
    </Box>
  );
}
