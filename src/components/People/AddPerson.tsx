import React, { FormEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPerson } from '../../store/actions/people'
import { AppState } from '../../store'
import Toast, { showToast } from '../Toast'

const AddPerson: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const { error } = useSelector((state: AppState) => state.people)

  useEffect(() => {
    if (error) {
      showToast(error.message)
    }
  }, [error])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch(addPerson(name))
    setName('')
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={e => setName(e.target.value)}
              type="text"
              id="name"
              value={name}
            />
          </div>
        </div>
        <button disabled={name === '' ? true : false}>Add Person</button>
      </form>
      <Toast />
    </>
  )
}

export default AddPerson
