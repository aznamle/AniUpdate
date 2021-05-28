import { useState, useEffect } from "react";
import Link from 'next/link'
import { getToken } from './login'
import { useRouter } from 'next/router'
import Test from "./Test";


export default function Home() {
  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const hash = getToken()
    window.location.hash = ""
    console.log()


    console.log(token)
  }, [])

  return (
    <div className="flex justify-center items-center text-center">
      {  
      token ? 
        <Test />
      :
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