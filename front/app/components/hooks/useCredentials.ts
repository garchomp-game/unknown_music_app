import React, { useEffect, useState }from 'react'
import axios from 'axios'

const useCredentials = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
        "Basic " + btoa(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: "grant_type=client_credentials"
    }).then((tokenResponse) => {
      console.debug(
          "アクセストークン："
          + tokenResponse.data.access_token)
          setToken(tokenResponse.data.access_token)
    }
    )
  }, [])
  return token
  }
  export default useCredentials;