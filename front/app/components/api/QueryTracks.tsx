import React,{ useEffect }from 'react'
import axios from 'axios'

//曲名単語検索
const QueryTracks = (props: any) => {
  useEffect(() => {
    axios(`https://api.spotify.com/v1/search?query=${props.wordFormData}&type=track&limit=20`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.token,
        Accept: "application/json",
        "Content-type": "application/json"},
    })
    // thenでaxiosの認証処理が成功した場合の処理をかける
      .then((trackContentsResponse) => {
        props.setItemResult(trackContentsResponse.data.tracks.items)
        console.log("🔻トラック検索結果：" + props.wordFormData)
        console.log(trackContentsResponse.data)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [props.wordFormData] //useEffectの第二引数は実行タイミングを制御する
  )
  return (
    <div>
      { props.setItemResult }
    </div>
  )
}
export default QueryTracks;