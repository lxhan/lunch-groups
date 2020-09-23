import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePerson } from '../../store/actions/people'

const Person: React.FC<PersonProps> = ({ person }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deletePerson(person._id))
  }
  return (
    <div className="card">
      <div className="card--text">
        <span>{person.name}</span>
      </div>
      <div className="card--button">
        <button onClick={handleClick} className="card--button__delete">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Person
