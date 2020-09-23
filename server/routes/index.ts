import { Router } from 'express'
import { getPeople, addPerson, deletePerson } from '../controllers/person'

const router: Router = Router()

router.get('/people', getPeople)

router.post('/add', addPerson)

router.delete('/delete/:id', deletePerson)

export default router
