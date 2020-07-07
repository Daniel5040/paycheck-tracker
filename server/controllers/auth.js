import 'dotenv/config'

// Register new user
const register = async (req, res) => res.send('register')

// Login user
const login = async (req, res) => res.send('login')

// Update information
const update = async (req, res) => res.send('update')

// Delete user
const deleteUser = async (req, res) => res.send('delete')

export { register, login, update, deleteUser }
