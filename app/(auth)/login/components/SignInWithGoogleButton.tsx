// app/(auth)/login/components/SignInWithGoogleButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

// Google SVG Icon
const GoogleIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.78h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.78c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      d="M5.84 14.09c-.22-.66-.34-1.36-.34-2.09s.12-1.43.34-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
  </svg>
);

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-48 h-12 text-sm font-medium bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 rounded-lg shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <GoogleIcon />
      Sign in with Google
    </Button>
  );
};

export default SignInWithGoogleButton;