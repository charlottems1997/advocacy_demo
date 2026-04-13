import AISummaryTable from "@/components/ai-output";

export default function ProtectedPage() {
  return (
    <div className="flex gap-2">
      <AISummaryTable/>
      <AISummaryTable/>
      <AISummaryTable/>
    </div>
  );
}
