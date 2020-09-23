import React from 'react'
import GroupPerson from './GroupPerson'

const Group: React.FC<GroupProps> = ({ group }) => {
  return (
    <div>
      <h3>{group.length} people</h3>
      <hr />
      <div>
        {group.length &&
          group.map((person, i) => <GroupPerson key={i} person={person} />)}
      </div>
    </div>
  )
}

export default Group
