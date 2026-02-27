"use server"

import { createClient } from "@/lib/supabase/server"
import { uploadAvatar, getAvatarPublicUrl } from "@/lib/supabase/storage"
import { revalidatePath } from "next/cache"

export async function updateAvatar(formData: FormData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("Not authenticated")

  const file = formData.get("avatar") as File
  if (!file || file.size === 0) throw new Error("No file provided")

  const path = await uploadAvatar(user.id, file)
  const avatarUrl = getAvatarPublicUrl(path)

  const { error } = await supabase
    .from("profiles")
    .update({ avatar_url: avatarUrl })
    .eq("id", user.id)

  if (error) throw error

  revalidatePath("/dashboard")
}
