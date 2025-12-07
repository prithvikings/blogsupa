"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const supabase = createClient();
  const router = useRouter();

  const handleSubmit =  async(e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data,error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      router.push("/");
    } catch (err) {
      setError("An error occurred during sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 font-poppins">
      <Card className={"w-full max-w-md p-8 bg-zinc-900 border-zinc-800"}>
        <h1 className="text-3xl font-bold text-emerald-400 mb-6 ">Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className={"block text-sm font-medium text-zinc-300 mb-2"}>
              Email
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className={"bg-zinc-800 border-zinc-700 text-zinc-50"}
            />
          </div>

          <div>
            <Label className={"block text-sm font-medium text-zinc-300 mb-2"}>
              Password
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className={"bg-zinc-800 border-zinc-700 text-zinc-50"}
            />
          </div>
          {error && (
            <div className="p-3 bg-red-900/20 border border-red-800 text-red-400 text-sm">
              {error}
            </div>
          )}
          <Button
            type="submit"
            className={
              "w-full bg-emerald-600 hover:bg-emerald-700 text-zinc-50 cursor-pointer"
            }
            disabled={loading}
          >
            {loading ? <Spinner className={"size-6"} /> : "Sign In"}
          </Button>
        </form>
        <p className="text-center text-zinc-400 mt-6">
          Don't have an Account ?{" "}
          <Link
            href="/auth/signup"
            className="text-emerald-400 hover:text-emerald-300 font-gilroy"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default Signin;
