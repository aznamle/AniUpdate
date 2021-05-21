import { useEffect } from "react";

export default function Home() {


  const requestOptions = {
    uri: 'https://anilist.co/api/v2/oauth/token',
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
    },
    json: {
      'grant_type': 'authorization_code',
      'client_id': '{client_id}',
      'client_secret': '{client_secret}',
      'redirect_uri': '{redirect_uri}', // http://example.com/callback
      'code': '{code}', // The Authorization Code received previously
    }
};

  const client_id = '2467'
  const redirect_uri = 'http://localhost:3000'
  const client_secret = 'dA0WXcLbo4mD4tob3vXskQAjP2SwvbVKgA7KqK3Q'

  return (
    <div className='container mx-auto text-center items-center justify-center'>
      <a href={`https://anilist.co/api/v2/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`}>Login with AniList</a>    
    </div>
  )
}
