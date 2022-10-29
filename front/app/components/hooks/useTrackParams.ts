import React, { useEffect, useState } from 'react'
import axios from "axios"

interface TrackParamsProps{
  token: string;
  trackId: string;
}
interface SetTrackInfoProps{
  danceability: number;
  energy: number;
  loudness: number;
  valence: number;
  tempo: number;
}

//曲IDからトラックパラメータ取得
const useTrackParams = (props:TrackParamsProps) => {
const {token, trackId} = props;
const [trackInfo, setTrackInfo] = useState<SetTrackInfoProps>({
  danceability: 0,
  energy: 0,
  loudness: 0,
  valence: 0,
  tempo: 0,
  });

//曲のパラメーターの取得。TrackParams
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-type": "application/json"}
    }).then((trackInfoResponse) => {
      setTrackInfo(trackInfoResponse.data)
      console.debug(setTrackInfo)
    })
    .catch((err) => {
        console.debug("err:", err)
      })
  }, [trackId])

  return trackInfo
}
export default useTrackParams;