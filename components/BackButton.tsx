// app/BackButton.tsx
"use client"; // Mark this as a Client Component

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-md hover:bg-gray-300 transition-colors duration-200"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      Go Back
    </button>
  );
}