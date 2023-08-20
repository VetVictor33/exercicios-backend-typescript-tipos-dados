import { user } from "../01"

const usersList: user[] = [
  {
    name: "Guido",
    age: 32,
    status: true,
  },
  {
    name: "Dani",
    age: 30,
    status: true,
  },
  {
    name: "João",
    age: 40,
    status: false,
  },
  {
    name: "Guilherme",
    age: 29,
    status: true,
  },
  {
    name: "Ana",
    age: 18,
    status: false,
  },
  {
    name: "José",
    age: 28,
    status: false,
  },
]

const filterUser = (usersList: user[], userName: string) => {
  const filteredUsers = usersList.filter(({ name }) => {
    return name.toLowerCase().indexOf(userName.toLowerCase()) !== -1
  })
  console.log(filteredUsers)
}

filterUser(usersList, 'gui')