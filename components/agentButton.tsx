// app/components/AgentButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

// Spreadsheet Icon (Excel-inspired)
const SpreadsheetIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 4h18M7 7v14M11 7v14M15 7v14M19 7v14M3 11h18M3 15h18"
    />
  </svg>
);

const AgentButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/agent");
  };

  return (
    <Button
      type="button"
      className="w-48 h-12 text-sm font-medium bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg"
      onClick={handleRedirect}
    >
      <SpreadsheetIcon />
      Go to Agent
    </Button>
  );
};

export default AgentButton;