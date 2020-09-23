import React, { FormEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../../store/actions/people'
import { addGroup } from '../../store/actions/groups'
import { AppState } from '../../store'
import Toast, { showToast } from '../Toast'

const MakeGroup: React.FC = () => {
  const dispatch = useDispatch()
  const [groupSize, setGroupSize] = useState('')
  const [groupNumber, setGroupNumber] = useState('')
  const { data } = useSelector((state: AppState) => state.people)

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])

  const makeGroup = (
    arr: IPerson[],
    min: number,
    max: number,
    count: number,
  ): IPerson[][] => {
    const groups: IPerson[][] = []

    for (let i = 0; i < count; i++) {
      groups.push([])
    }

    for (const person of arr) {
      const randIdx = Math.floor(Math.random() * count)
      groups[randIdx].push(person)
    }

    if (groups.some(group => group.length < min) || groups.length > count) {
      return makeGroup(arr, min, max, count)
    } else {
      return groups
    }
  }

  const reset = () => {
    setGroupNumber('')
    setGroupSize('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const people = data.people
    const numGroupMinSize = Number.parseInt(groupSize)
    const numGroupCount = Number.parseInt(groupNumber)

    const numGroupMaxSize =
      people.length - (numGroupCount - 1) * numGroupMinSize

    if (numGroupCount >= people.length) {
      showToast('Number of groups is greater than or equal number of people')
      reset()
      return
    } else if (numGroupMinSize > people.length) {
      showToast('Minimum group size is greater than number of people')
      reset()
      return
    } else if (
      numGroupMinSize * numGroupCount > people.length ||
      numGroupMinSize + numGroupMaxSize > people.length
    ) {
      showToast('Not enough people')
      reset()
      return
    }

    dispatch(
      addGroup(
        makeGroup(people, numGroupMinSize, numGroupMaxSize, numGroupCount),
      ),
    )

    reset()
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group-input--wrapper">
          <div className="group-input">
            <label htmlFor="size">Min Group Size</label>
            <input
              type="text"
              id="size"
              onChange={e => setGroupSize(e.target.value)}
              value={groupSize}
            />
          </div>
          <div className="group-input">
            <label htmlFor="number">Number of Groups</label>
            <input
              type="text"
              id="number"
              onChange={e => setGroupNumber(e.target.value)}
              value={groupNumber}
            />
          </div>
        </div>
        <button
          disabled={groupNumber === '' || groupSize === '' ? true : false}
          className="group-input--button"
        >
          Make Group
        </button>
      </form>
      <Toast />
    </>
  )
}

export default MakeGroup
