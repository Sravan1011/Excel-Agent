"use client";

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UserGreetText from '@/components/UserGreetText';
import SignInWithGoogleButton from '@/app/(auth)/login/components/SignInWithGoogleButton';
import LoginLogoutButton from '@/components/LoginLogoutButton';
import AgentButton from '@/components/agentButton';

export default function Home() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle Excel Grid Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"%3E%3Crect x=\"0\" y=\"0\" width=\"10\" height=\"10\" fill=\"%23e5e7eb\"/%3E%3C/svg%3E')] bg-repeat"></div>

      {/* Hero Section */}
      <div className="relative z-10 text-center w-full max-w-6xl">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Excel AI Agent
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Revolutionize your Excel workflows with AI. Automate tasks, generate insights, and boost productivity effortlessly.
        </motion.p>

        {/* Animated Excel Chart */}
        <motion.svg
          width="400"
          height="200"
          viewBox="0 0 400 200"
          className="mx-auto mb-12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <path
            d="M50 150 L120 80 L200 130 L280 60 L350 160"
            stroke="#10b981"
            strokeWidth="6"
            fill="none"
          />
        </motion.svg>

        {user ? (
          <div className="space-y-4">
            <UserGreetText name={user.user_metadata?.full_name} email={user.email} />
            <div className="flex justify-center gap-4">
              <AgentButton />
              <LoginLogoutButton />
            </div>
          </div>
        ) : (
          <SignInWithGoogleButton />
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </div>
    </main>
  );
}