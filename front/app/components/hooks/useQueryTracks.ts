import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface QueryTracksProps{
  token : string;
  wordFormData : string;
}
interface ItemResultProps{
  id: string;
  name: string;
  artists: string;
  album: string;
  popularity: number;
  preview_url: string;
  external_urls: string;
  length?: number;
}

//曲名単語検索
const useQueryTracks = (props:QueryTracksProps) => {
  const {token, wordFormData } = props;
  const [itemResult, setItemResult] = useState<ItemResultProps[]>([]);  //取得してきたデータが入る。QueryTracks
  useEffect(() => {
    axios(`https://api.spotify.com/v1/search?query=${wordFormData}&type=track&limit=20`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-type": "application/json"},
    })
    // thenでaxiosの認証処理が成功した場合の処理をかける
      .then((trackContentsResponse) => {
        setItemResult(trackContentsResponse.data.tracks.items)
        console.debug("🔻トラック検索結果：" + wordFormData)
        console.debug(trackContentsResponse.data)
      })
      .catch((err) => {
        console.debug("err:", err)
      })
  }, [wordFormData] //useEffectの第二引数は実行タイミングを制御する
  )
  return itemResult
}
export default useQueryTracks;