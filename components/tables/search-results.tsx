"use client";
import TableItem from "./table-item";
import { useLegislation } from "../../context/LegislationContext";

export default function SearchResults() {
  const { bills } = useLegislation();

  return (
    <div>
      {bills.length === 0 ? (
        <TableItem itemName="No bills found." isDefault={true} />
      ) : (
        bills.map((bill, index) => (
          <TableItem key={index} itemName={bill.title} />
        ))
      )}
    </div>
  );
}
