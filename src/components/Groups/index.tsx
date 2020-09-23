import React from 'react'
import { useSelector } from 'react-redux'
import MakeGroup from './MakeGroup'
import { AppState } from '../../store'
import Group from './Group'

const Groups: React.FC = () => {
  const { data } = useSelector((state: AppState) => state.groups)

  return (
    <div className="groups">
      <h1>Groups</h1>
      <MakeGroup />
      <div className="group-container">
        {data.length && data.map((group, i) => <Group key={i} group={group} />)}
      </div>
    </div>
  )
}

export default Groups
