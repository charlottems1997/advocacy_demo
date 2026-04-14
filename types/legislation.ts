export interface Bill {
  number: string;
  title: string;
  type: string;
  originChamber: string;
  latestAction: {
    text: string;
    actionDate: string;
  };
  updateDate: string;
}

export interface LegislationContextType {
  bills: Bill[];
  loading: boolean;
  query: string;
  error: string | null;
  searchLegislation: (userTopic: string) => Promise<void>;
}
