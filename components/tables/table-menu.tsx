"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";

const options = [
  "Algorithmic Bias & Discrimination in High-Risk AI",
  "AI Transparency, Notice, and Explainability Requirements",
  "Intellectual Property & AI-Generated Content",
  "Data Privacy & Automated Decision-Making Technology (ADMT)",
  "AI Liability, Accountability, and Consumer Protection",
  "Risk Management & Safety Standards for AI Deployers",
  "Federal Executive Orders & National AI Policy Implementation",
  "AI Export Controls, Compute Infrastructure & National Security",
  "Government Use of AI & Procurement Rules",
  "Small-Business AI Adoption & Support Programs",
];

export default function TableMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [defaultSelectorValue, setDefaultSelectorValue] = React.useState(
    "Browse Items By Topic",
  );

  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    option: string,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setTextOnSelector(option);
  };

  const setTextOnSelector = (option: string) => {
    setDefaultSelectorValue(option);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Bordered List Container */}
      <Box
        sx={{
          border: "1px solid #9e9e9e", // Clean grey border
          borderRadius: 1, // Optional: rounded corners
        }}
      >
        <List
          component="nav"
          sx={{
            width: 300,
            maxWidth: 300,
            height: 65,
            maxHeight: 65,
            m: 0,
            p: 0,
          }}
        >
          <ListItemButton
            onClick={handleClickListItem}
            sx={{
              py: 1.5, // Better vertical padding
            }}
          >
            <ListItemText primary={defaultSelectorValue} />
          </ListItemButton>
        </List>
      </Box>

      {/* Menu remains unchanged */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
