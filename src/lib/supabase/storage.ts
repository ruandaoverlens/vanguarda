import { createClient } from "@/lib/supabase/server"

const AVATARS_BUCKET = "avatars"

export async function uploadAvatar(userId: string, file: File) {
  const supabase = await createClient()

  const fileExt = file.name.split(".").pop()
  const filePath = `${userId}/avatar.${fileExt}`

  const { data, error } = await supabase.storage
    .from(AVATARS_BUCKET)
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type,
    })

  if (error) throw error
  return data.path
}

export async function deleteAvatar(userId: string, path: string) {
  const supabase = await createClient()

  const { error } = await supabase.storage
    .from(AVATARS_BUCKET)
    .remove([`${userId}/${path}`])

  if (error) throw error
}

export function getAvatarPublicUrl(path: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  return `${supabaseUrl}/storage/v1/object/public/${AVATARS_BUCKET}/${path}`
}

export async function listUserFiles(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.storage
    .from(AVATARS_BUCKET)
    .list(userId, {
      limit: 10,
      sortBy: { column: "created_at", order: "desc" },
    })

  if (error) throw error
  return data
}
