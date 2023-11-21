import React from 'react'
import List108 from './List108'
import List306 from './List306'
import List309 from './List309'
import { useDispatch, useSelector } from 'react-redux'

export default function Groups() {
    const group108 = useSelector(state => state.group108.state)
    const group306 = useSelector(state => state.group306.state)
    const group309 = useSelector(state => state.group309.state)

    if (group108) {
        return (
          <List108 />
        )
      }
      if (group306) {
        return (
          <List306 />
        )
      }
      if (group309) {
        return (
          <List309 />
        )
      }
}
