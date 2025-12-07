import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { createClient } from "./src/lib/supabase/server.js";

export async function middleware(request) {
    const response = NextResponse.next({
        request:{
            headers:request.headers
        }
    })

    const supabase = await createClient();

    await supabase.auth.getUser();

    return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
};