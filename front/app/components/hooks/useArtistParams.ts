import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface ArtistParamsProps{
  token: string;
  artistId: string;
}
interface ArtistInfoProps{
  external_urls: object;
  followers: object;
  genres: string;
  href: string;
  id: string;
  images: object;
  name: string;
  popularity: number;
  type: string;
  uri: string;
  length? : number;
}

//受け取ったアーティストIDから
const useArtistParams = (props:ArtistParamsProps) => {
  const {token, artistId} = props;
  const [artistInfo, setArtistInfo] = useState<ArtistInfoProps>({
  external_urls: {},
  followers: {},
  genres: "",
  href: "",
  id: "",
  images: {},
  name: "",
  popularity: 0,
  type: "",
  uri: "",
}); //アーティスト情報の取得 ArtistInf,
  useEffect(() => {
    axios(`https://api.spotify.com/v1/artists/${artistId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-type": "application/json"}
    }).then((artistResponse) => {
      setArtistInfo(artistResponse.data)
      console.debug(artistResponse.data)
    })
    .catch((err) => {
        console.debug("err:", err)
      })
  }, [artistId])
  return (
    {artistInfo, setArtistInfo}
  )
}
export default useArtistParams;