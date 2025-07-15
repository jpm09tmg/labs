import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native'
import { getUsers, createUser, updateUser, deleteUser } from '../lib/supabase_crud'

type User = {
  id: number
  name: string
  email: string
}

export default function Lab5Screen() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editingUserId, setEditingUserId] = useState<number | null>(null)

  const fetchUsers = async () => {
    const { data, error } = await getUsers()
    if (error) {
      alert('Error fetching users: ' + error.message)
    } else if (data) {
      setUsers(data)
    }
  }

  const handleAddOrUpdate = async () => {
    if (!name || !email) {
      alert('Please enter name and email.')
      return
    }

    if (editingUserId === null) {
      // Create new user
      const { error } = await createUser(name, email)
      if (error) {
        alert('Error adding user: ' + error.message)
        return
      }
    } else {
      // Update existing user
      const { error } = await updateUser(editingUserId, { name, email })
      if (error) {
        alert('Error updating user: ' + error.message)
        return
      }
      setEditingUserId(null) // Clear edit mode
    }

    setName('')
    setEmail('')
    fetchUsers()
  }

  const handleEdit = (user: User) => {
    setName(user.name)
    setEmail(user.email)
    setEditingUserId(user.id)
  }

  const handleDelete = async (id: number) => {
    const { error } = await deleteUser(id)
    if (error) {
      alert('Error deleting user: ' + error.message)
    } else {
      fetchUsers()
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supabase User List</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button
        title={editingUserId === null ? "Add User" : "Update User"}
        onPress={handleAddOrUpdate}
      />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} ({item.email})</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <View style={{ width: 10 }} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  }
})
