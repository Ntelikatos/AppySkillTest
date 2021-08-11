import axios from 'axios'

const Auth = {
  isAutorized: false,
  async register(name, email, password) {
    console.log('register')
    await axios
      .post('http://appylara.test/api/register', { name, email, password })
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message)
          this.isAutorized = true
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async login(email, password) {
    await axios.get('http://appylara.test/api/users').then((res) => {
      if (res.data.status === 200) {
        const users = res.data.users
        const existUser = users.filter((user) => {
          return user.email === email && user.password === password
        })

        if (existUser.length > 0) {
          this.isAutorized = true
        } else {
          alert('Wrong username or password!')
        }
      }
    })
  },
  logout() {
    this.isAutorized = false
  },
  getAuth() {
    return this.isAutorized
  },
}

export default Auth
