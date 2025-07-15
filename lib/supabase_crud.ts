// lib/supabase_crud.ts
import { supabase } from './supabase'

const TABLE = 'sampledatabase'

// CREATE
export async function createUser(name: string, email: string) {
  return await supabase.from(TABLE).insert([{ name, email }])
}

// READ
export async function getUsers() {
  return await supabase.from(TABLE).select('*')
}

// UPDATE
export async function updateUser(id: number, newData: { name?: string; email?: string }) {
  return await supabase.from(TABLE).update(newData).eq('id', id)
}

// DELETE
export async function deleteUser(id: number) {
  return await supabase.from(TABLE).delete().eq('id', id)
}
