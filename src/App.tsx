import React from 'react'
import Groups from './components/Groups'
import People from './components/People'

const App: React.FC = () => {
  return (
    <div className="app">
      <People />
      <Groups />
    </div>
  )
}

export default App
