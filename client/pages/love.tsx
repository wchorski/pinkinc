import React, {useEffect, useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Love() {

  const [heartsState, setheartsState] = useState(0)

  const addHeart = () => {
    setheartsState(prev => ++prev)
  }

  return (
    <>
      <h1>love</h1>

      <p>{heartsState}</p>

      <button onClick={addHeart}>+ Add</button>
    </>
  )
}
