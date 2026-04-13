import AISummaryTable from "@/components/ai-output";
import { BillTable } from "@/components/bill-table";
import { NewsTable } from "@/components/news-table";

export default function ProtectedPage() {
  return (
    <div className="flex gap-2">
      <BillTable/>
      <AISummaryTable/>
    </div>
  );
}
