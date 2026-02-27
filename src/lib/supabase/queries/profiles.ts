import { createClient } from "@/lib/supabase/server"

export async function getProfile(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, avatar_url, created_at, updated_at")
    .eq("id", userId)
    .single()

  if (error) throw error
  return data
}

export async function updateProfile(
  userId: string,
  updates: { full_name?: string; avatar_url?: string }
) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId)
    .select("id, full_name, avatar_url, created_at, updated_at")
    .single()

  if (error) throw error
  return data
}
