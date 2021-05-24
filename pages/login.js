import React from 'react'


const client_id = '2467'
const redirect_uri = 'http://localhost:3000'
const client_secret = 'dA0WXcLbo4mD4tob3vXskQAjP2SwvbVKgA7KqK3Q'

export const getToken = () => {
    const token = window.location.search.split('=def')
    return token[1]
}

const Login = () => {    

      return (
        <div className='container mx-auto text-center items-center justify-center'>
          <a href={`https://anilist.co/api/v2/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`}>Login with AniList</a>    
        </div>
      )
}

export default Login
