export type user = {
  name: string,
  pets?: string[],
  age?: number,
  status?: boolean

}
const users: user[] = [
  {
    name: "João",
    pets: ["Max"],
  },
  {
    name: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    name: "Beatriz",
    pets: ["Lessie"],
  },
  {
    name: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    name: "Antonio",
    pets: ["Naninha"],
  },
];

const searchPetOwner = (owners: user[], pet: string) => {
  const foundOwner = owners.find(user => user.pets.find((petName) => petName === pet))
  if (foundOwner) {
    return `O dono(a) do(a) ${pet} é o(a) ${foundOwner.name}`
  }
  return `Que pena ${pet}, não encontramos seu dono(a)`
}
console.log(searchPetOwner(users, 'Holerite'))