import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/server"
import { logout } from "@/app/auth/actions"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">Logado como: {user.email}</p>
      <form action={logout}>
        <button
          type="submit"
          className="rounded-md bg-destructive px-4 py-2 text-destructive-foreground hover:bg-destructive/90"
        >
          Sair
        </button>
      </form>
    </div>
  )
}
