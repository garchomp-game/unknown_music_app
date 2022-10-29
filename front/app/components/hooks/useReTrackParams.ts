import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface ReTrackParamsProps{
  token: string;
  reTrackId: string;
}
interface ReSetTrackInfoProps{
  danceability: number;
  energy: number;
  loudness: number;
  valence: number;
  tempo: number;
}

//選んだ曲のIDからトラックパラメータ取得
const useReTrackParams = (props:ReTrackParamsProps) => {
  const {token, reTrackId} = props
  const [reTrackInfo, setReTrackInfo] = useState<ReSetTrackInfoProps>({
    danceability: 0,
    energy: 0,
    loudness: 0,
    valence: 0,
    tempo: 0,
    });
  //選び直した曲の情報 reTrackParams
  useEffect(() => {
    axios(`https://api.spotify.com/v1/audio-features/${reTrackId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-type": "application/json"}
    }).then((reTrackInfoResponse) => {
      setReTrackInfo(reTrackInfoResponse.data)
      console.debug(reTrackInfoResponse)
    })
    .catch((err) => {
        console.debug("err:", err)
      })
  }, [reTrackId])
  return reTrackInfo
}
export default useReTrackParams;