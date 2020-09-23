import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { fetchPeople } from '../../store/actions/people'
import AddPerson from './AddPerson'
import Person from './Person'

const People: React.FC = () => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state: AppState) => state.people)

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])

  return (
    <div className="people">
      <h1>People</h1>
      <AddPerson />
      <div className="list-container">
        {!loading &&
          data.people.map(person => (
            <Person key={person.name} person={person} />
          ))}
      </div>
    </div>
  )
}

export default People
