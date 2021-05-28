import React from 'react'


const client_id = '2467'
const redirect_uri = 'http://localhost:3000'
const client_secret = 'dA0WXcLbo4mD4tob3vXskQAjP2SwvbVKgA7KqK3Q'

export const getToken = () => {
    const token = window.location.hash.substring(1).split('&')
    .reduce((initial, item) => {
      var parts = item.split('=')
      initial[parts[0]] =
      decodeURIComponent(parts[1])
      console.log(initial)
      return initial
    }, {})
}

const Login = () => {    

      return (
        <div className='flex container mx-auto text-center items-center justify-center'>
          <a href={`https://anilist.co/api/v2/oauth/authorize?client_id=${client_id}&response_type=token`}>Login with AniList</a>    
        </div>
      )
}

export default Login
