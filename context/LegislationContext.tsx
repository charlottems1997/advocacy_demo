"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Bill, LegislationContextType } from "../types/legislation";

const LegislationContext = createContext<LegislationContextType | undefined>(
  undefined,
);

export const LegislationProvider = ({ children }: { children: ReactNode }) => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const searchLegislation = async (userTopic: string) => {
    setLoading(true);
    setQuery(userTopic);
    setError(null);

    try {
      // 1. Fetch ALL recent AI-related bills from Congress.gov
      // Note: Must use NEXT_PUBLIC_ prefix to access in a 'use client' file
      const apiKey = process.env.NEXT_PUBLIC_CONGRESS_API_KEY;

      const congressRes = await fetch(
        `https://api.congress.gov/v3/bill?api_key=${apiKey}&format=json&query=artificial+intelligence&limit=20`,
      );

      if (!congressRes.ok) throw new Error("Failed to fetch from Congress.gov");

      const congressData = await congressRes.json();
      const rawBills: Bill[] = congressData.bills || [];

      // 2. Use our AI route to filter those bills
      // In Next.js, the file at app/api/search/ai-legislation.ts
      // is exposed at the URL path: /api/search/ai-legislation
      const aiRes = await fetch("/googleAPI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bills: rawBills, userTopic }),
      });

      if (!aiRes.ok) {
        const errorData = await aiRes.json();
        throw new Error(errorData.error || "AI failed to filter legislation");
      }

      const filteredBills: Bill[] = await aiRes.json();
      setBills(filteredBills);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError("Search failed: " + errorMessage);
      setBills([]); // Clear results on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <LegislationContext.Provider
      value={{ bills, loading, query, error, searchLegislation }}
    >
      {children}
    </LegislationContext.Provider>
  );
};

export const useLegislation = () => {
  const context = useContext(LegislationContext);
  if (!context)
    throw new Error("useLegislation must be used within a LegislationProvider");
  return context;
};
