import { Request, Response } from 'express'
import { IPerson } from '../types'
import Person from '../models/person'

const getPeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const people: IPerson[] = await Person.find()
    res.status(200).json({ people })
  } catch (err) {
    console.error(err)
    throw err
  }
}

const addPerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IPerson, 'name'>

    const people: IPerson[] = await Person.find()
    const duplicate: IPerson | null = await Person.findOne({ name: body.name })
    if (duplicate) {
      res
        .status(409)
        .json({ message: 'Name already exists', person: duplicate, people })
      return
    }

    const person = new Person({ name: body.name })
    const newPerson: IPerson = await person.save()

    res.status(201).json({
      message: 'Person added',
      person: newPerson,
      people: [...people, newPerson],
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}

const deletePerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPerson: IPerson | null = await Person.findByIdAndDelete(
      req.params.id,
    )
    const people: IPerson[] = await Person.find()

    res
      .status(200)
      .json({ message: 'Person deleted', person: deletedPerson, people })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { getPeople, addPerson, deletePerson }
