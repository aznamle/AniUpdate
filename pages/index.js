import { useState, useEffect } from "react";
import Link from 'next/link'
import { getToken } from './login'

export default function Home() {
  
  const client_id = '2467'
  const redirect_uri = 'http://localhost:3000'
  const client_secret = 'dA0WXcLbo4mD4tob3vXskQAjP2SwvbVKgA7KqK3Q'
  const code = '';

  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = getToken()
    console.log("TOKEN: ", token)

    if(token) {
      setToken(token)
    }
  }, [])

  const PostToken = () => {
    const data = fetch('https://anilist.co/api/v2/oauth/token', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'grant_type': 'authorization_code',
            'client_id': `${client_id}`,
            'client_secret': `${client_secret}`,
            'redirect_uri': `${redirect_uri}`, // http://example.com/callback
            'code': `${code}`, // The Authorization Code received previously
          })
    })

    console.log(data)

}

  return (
    <div className="flex justify-center items-center text-center">
      { token ? (
        <h1>HI HI HELLO</h1>
      ) :
      <div>
      <h1>login please</h1>
      <Link href='/login'>
      <a>login</a>
      </Link>
      </div>
      }

    </div>
  )
}