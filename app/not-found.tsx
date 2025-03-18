// app/not-found.tsx
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/BackButton"; // Import the new Client Component

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <AlertTriangle className="h-24 w-24 text-yellow-500 animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          404 - Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600">
          Oops! It seems you’ve wandered off the path. The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          <BackButton /> {/* Use the Client Component here */}
        </div>

        {/* Decorative Element */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Lost? Contact us at{" "}
            <a href="mailto:support@atmosoft.com" className="text-blue-600 hover:underline">
              support@atmosoft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}