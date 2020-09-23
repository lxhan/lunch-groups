interface IPerson {
  _id: string
  name: string
  createdAt?: string
  updatedAt?: string
}

interface PersonProps {
  person: IPerson
}

interface GroupProps {
  group: IPerson[]
}

interface APIData {
  message: string
  person: IPerson
  people: IPerson[]
}
