import React from 'react'
import List108 from './List108'
import List306 from './List306'
import List309 from './List309'

export default function Groups({group108, group306, group309, setGroup108, setGroup306, setGroup309}) {
    if (group108) {
        return (
          <List108 setVisible={setGroup108}/>
        )
      }
      if (group306) {
        return (
          <List306 setVisible={setGroup306}/>
        )
      }
      if (group309) {
        return (
          <List309 setVisible={setGroup309}/>
        )
      }
}
