export type ContextItem = {
  id: string;
  headline: string;
  date: string;
  source: string;
  relevance: string;
};

/**
 * Verified institutional facts only. No fabricated "latest news" — every
 * entry below is a stable, publicly documented fact about SSB / MHA / SIH,
 * cited to its official or authoritative source.
 */
export const contextItems: ContextItem[] = [
  {
    id: "founding",
    headline: "Special Service Bureau established, precursor to SSB",
    date: "15 March 1963",
    source: "Sashastra Seema Bal — official records (ssb.gov.in)",
    relevance:
      "Formed after the 1962 conflict to strengthen frontier security — the border-screening role this project supports.",
  },
  {
    id: "renamed",
    headline: "Force renamed Sashastra Seema Bal, a dedicated border-guarding force",
    date: "15 December 2003",
    source: "Sashastra Seema Bal — official records (ssb.gov.in)",
    relevance: "Consolidated SSB's role under the Ministry of Home Affairs as a lead border-guarding force.",
  },
  {
    id: "mandate",
    headline: "Mandate extended to guard the Indo-Nepal and Indo-Bhutan borders",
    date: "2001 / 2004",
    source: "Sashastra Seema Bal — official records (ssb.gov.in)",
    relevance:
      "SSB guards roughly 1,751 km of open border with Nepal and 699 km with Bhutan — frontier posts where fast, reliable identity screening matters most.",
  },
  {
    id: "sih",
    headline: "Problem statement SIH26188 issued for Smart India Hackathon 2026",
    date: "2026",
    source: "Smart India Hackathon (sih.gov.in)",
    relevance:
      "MHA / SSB posed the fake identity and document screening challenge that SSB Suraksha directly responds to.",
  },
];
