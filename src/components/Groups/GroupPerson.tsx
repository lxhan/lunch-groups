import React from 'react'

const GroupPerson: React.FC<PersonProps> = ({ person }) => {
  return (
    <>
      <div className="group-person">{person.name}</div>
    </>
  )
}

export default GroupPerson
