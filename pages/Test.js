import React, { useEffect, useState } from 'react'
import { getToken } from './login'



function Test() {

  const accessToken = getToken()
  const [data, setData] = useState([])

  const query = `mutation {
    SaveMediaListEntry(mediaId: 1, status: COMPLETED) {
      id
      status
    }
  }
  `;

  useEffect(() => {
    fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer + ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query:query
      })
    })
    .then(response => response.json())
    .then(data => setData(data))
    console.log(accessToken)

  }, [])

  return (
    <div>
      { JSON.stringify(data) }
    </div>
  )
}

export default Test
