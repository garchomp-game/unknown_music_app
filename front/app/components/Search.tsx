import React, { useState } from "react"
import Loader from "react-loader-spinner"
import ParamsGraph from "./api/ParamsGraph"
import TrackCard from "./api/TrackCard"
import Trail from "./api/Trail"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert"
import ReactHowler from "react-howler"
import Slider from "@mui/material/Slider"
import Snackbar from "@mui/material/Snackbar"
import NotInterestedIcon from "@material-ui/icons/NotInterested"
import VolumeDown from "@material-ui/icons/VolumeDown"
import VolumeUp from "@material-ui/icons/VolumeUp"
import { SlideProps } from '@mui/material/Slide'
import useTrackParams from "./hooks/useTrackParams"
import useQueryTracks from "./hooks/useQueryTracks"
import useArtistParams from "./hooks/useArtistParams"
import useRecommend from "./hooks/useRecommend"
import useReTrackParams from "./hooks/useReTrackParams"
import { MultipleArtistResponse, MultipleAlbumResponse } from "@types/spotify-api"

interface SearchProps{
  token : string;
  wordFormData : string;
}
interface SelectedTrackProps{
    trackId: string;
    trackName: string;
    trackArtistId: string;
    trackArtistName: string;
    trackArtworkUrl: string;
    trackPopularity: number;
    length? : number;
}
interface SetItemResultProps{
  id: string;
  name: string;
  artists: MultipleArtistResponse[]; //1つだけ取得する場合はSingleArtistResponse;
  album: MultipleAlbumResponse[]; //1つだけ取得する場合はSingleAlbumResponse; []がいらないことに注意
  popularity: number;
  preview_url: string;
}
// interface ArtistsProps{
//   name: string;
//   id: string;
//   href?: string;
//   popularity?: number;
//   type?: string;
//   url?: string;
//   external_urls?: {
//     spotify: string
//   };
//   followers?: {
//     href: string
//     total: number
//   };
//   genres?: string[]
//   images?: {
//     url: string
//     height: number
//     width: number
//   };
// }
interface SelectedRecommendProps{
    reTrackId: string;
    reTrackName: string;
    reTrackPopularity: number;
    reTrackArtwork: string;
}

interface SetLookRecommendProps{
    id: string;
    name: string;
  album: MultipleAlbumResponse[];
    popularity: number;
    preview_url: string;
}

const Search:React.FC<SearchProps> = (props) => {
  const {token, wordFormData} = props;  //wordFormDataはQueryTracksで使用。
  const [playing, setPlaying] = useState(false); //再生停止
  const [playSrc, setPlaySrc] = useState(""); //再生する曲のリロード
  const [volumeToggle, setVolumeToggle] = useState(0.2); //初期音量
  const [trailOpen, setTrailOpen] = useState(true); //React-Springの挙動制御
  const [snackBarOpen, setSnackBarOpen] = useState(false); //曲を選んだ後のポップアップ
  const [graphReDisplay, setGraphReDisplay] = useState("none"); //選び直した曲がRadarChartにセットされる

  //類似曲のパラメーター
  const [selectedRecommend, setSelectedRecommend] = useState<SelectedRecommendProps>({
    reTrackId: "",
    reTrackName: "none",
    reTrackPopularity: 0,
    reTrackArtwork: "",
  });
  //曲のパラメーター
  const [selectedTrack, setSelectedTrack] = useState<SelectedTrackProps>({
    trackId: "",
    trackName: "",
    trackArtistId: "",
    trackArtistName: "",
    trackArtworkUrl: "",
    trackPopularity: 0,
  });
  const trackId = selectedTrack.trackId
  const reTrackId = selectedRecommend.reTrackId
  const artistId = selectedTrack.trackArtistId
  const trackInfo = useTrackParams({token, trackId}); {/* 選ばれた曲のパラメータを取得 */}
  const reTrackInfo = useReTrackParams({token, reTrackId});{/* 選ばれた類似曲のパラメータ取得 */}
  const itemResult = useQueryTracks ({token, wordFormData}); {/* 入力された単語から曲を検索 */}
  const {artistInfo, setArtistInfo} = useArtistParams({token, artistId}); {/* 選ばれた曲のアーティスト情報を取得 */}
  const artistGenres = artistInfo.genres.slice(0, 3); {/* ジャンル数が多いと検索に出ない為、3つまでしか取得しない */}
  const {lookRecommend, setLookRecommend} = useRecommend({token, artistId, artistGenres, trackId})
  //ボリュームノブの制御
  const handleChange = (event: Event, newValue: number | number[]):void => {
    setVolumeToggle(newValue as number);
  };
  //選んだ曲の通知
  const handleSnackBarOpen = () => {
    setSnackBarOpen(true);
  };
  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };
  //選び直した曲をグラフにセット
  const handleSearchView = () => {
    setGraphReDisplay("none");
    setTrailOpen(true);
  };
  const handleDataView = () => {
    setGraphReDisplay("block");
    setTrailOpen(false);
  };

  //ポップアップトランジション
  type TransitionProps = Omit<SlideProps, 'direction'>;
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  return(
    <div className="pt-10 max-w-sm sm:max-w-4xl">
      <div className="bg-gray-900 text-gray-200 rounded-xl">
        {/* 音楽再生コントローラー */}
        {playSrc !== null && playSrc.length !== 0 && (
          <ReactHowler
            format={"mp3"}
            playing={playing}
            src={playSrc}
            volume={volumeToggle}
          />
        )}
        {/* 曲を選んだ通知 */}
          <Snackbar
            open={snackBarOpen}
            autoHideDuration={2000}
            onClose={handleSnackBarClose}
            sx={{ height: "10%" }}
            anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
            }}
            TransitionComponent={transition}
          >
            <Alert
              severity="success"
              elevation={24}
              variant="filled"
              action={
                <button
                  onClick={() => handleDataView()}
                  className="bg-green-900 hover:bg-green-800 text-purple-200 font-bold py-2 px-4 text-xs rounded-full"
                >
                  open!
                </button>
              }
            >
              データグラフとおすすめ曲が準備されました
            </Alert>
          </Snackbar>
        {/* 発火条件：トラック選択完了後 */}
      <>
        {selectedTrack.length !== 0 && setArtistInfo}
        {/* 選ばれた曲を元に類似曲を取得 */}
        {/* 発火条件：アーティスト情報取得後 */}
        {artistInfo.length !== 0 && setLookRecommend}
      </>
        {/* 要素表示トグル 音量調節 */}
        <Grid container spacing={0}>
          <Grid
            item={true}
            className="flex text-center justify-center whitespace-nowrap pt-6 pb-6"
            xs={6}
            sm={3}
          >
            <button
              onClick={() => handleDataView()}
              className="bg-purple-900 hover:bg-purple-700 text-purple-200 font-bold py-2 px-2 sm:px-3 text-xs rounded-full font-serif">
              レコメンド曲
            </button>
          </Grid>
          <Grid
            item={true}
            className="flex text-center justify-center whitespace-nowrap pt-6 pb-6"
            xs={6}
            sm={3}
          >
            <button
              className="bg-purple-900 hover:bg-purple-700 text-purple-200 font-bold py-2 px-3 text-xs rounded-full font-serif"
              onClick={() => handleSearchView()}
            >
              検索結果
            </button>
          </Grid>
          <Grid item={true} className="flex items-center justify-center" xs={2} sm={1}>
            <VolumeDown style={{ color: "#9900ff" }} />
          </Grid>
          <Grid item={true} className="flex items-center justify-center" xs={8} sm={4}>
            <Slider
              value={volumeToggle}
              style={{ color: "#9900ff" }}
              min={0}
              step={0.001}
              max={1}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
            <Grid item={true} className="flex items-center justify-center" xs={2} sm={1}>
              <VolumeUp style={{ color: "#9900ff" }} />
            </Grid>
        </Grid>
      {/* グラフコンポーネントへの値設定 */}
      <Grid container direction="row" justifyContent="center">
          <Grid item={true} xs={10} sm={6} style={{ display: graphReDisplay }}>
            {trackInfo !== undefined && reTrackInfo !== undefined && (
              <ParamsGraph
                // 検索結果で選んだ曲のパラメータをグラフに投入
                trackName={selectedTrack.trackName}
                FirstPopularity={selectedTrack.trackPopularity}
                FirstDanceAbility={trackInfo.danceability}
                FirstEnergy={trackInfo.energy}
                FirstLoudness={trackInfo.loudness}
                FirstTempo={trackInfo.tempo}
                FirstValence={trackInfo.valence}
                // サジェストで選んだ曲のパラメータをグラフに投入
                reTrackName={selectedRecommend.reTrackName}
                RePopularity={selectedRecommend.reTrackPopularity}
                ReDanceAbility={reTrackInfo.danceability}
                ReEnergy={reTrackInfo.energy}
                ReLoudness={reTrackInfo.loudness}
                ReTempo={reTrackInfo.tempo}
                ReValence={reTrackInfo.valence}
              />
            )}
          </Grid>
          {/* 類似曲の表示条件分岐 */}
          <Grid item={true} xs={12} md={6} style={{ display: graphReDisplay }}>
            {lookRecommend !== undefined && artistInfo.genres !== undefined && (
              <>
                <Grid item={true} xs={12} sm={12}>
                  <Typography variant="h4" className="text-center text-purple-400 font-serif">RecommendList</Typography>
                </Grid>
                <ul>
                  {lookRecommend.map((props:SetLookRecommendProps) => (
                    <li
                      className="list-none border-b border-solid border-purple-700 pt-3 pb-3 pl-0 transition-all"
                      key={props.id}
                      onClick={() =>
                        setSelectedRecommend({
                          reTrackArtwork: props.album.images[1].url,
                          reTrackId: props.id,
                          reTrackName: props.name,
                          reTrackPopularity: props.popularity,
                        })
                      }>
                      <TrackCard
                        artistName={props.album.artists[0].name}
                        artworkUrl={props.album.images[1].url}
                        trackName={props.name}
                        previewUrl={props.preview_url}
                        playing={playing}
                        playSrc={playSrc}
                        setPlaying={setPlaying}
                        setPlaySrc={setPlaySrc}
                      ></TrackCard>
                    </li>
                  ))}
                </ul>
              </>
          )}
        </Grid>
      </Grid>
        <Typography variant="subtitle2" className="pl-3 pb-3 pt-3 text-gray-300 text-center block">
          <div className="text-left inline-block">
            <br />
            １）曲をクリックすると解析が始まります。
            <br />
            ２）再生/停止はアートワークでも操作可能です。
            <br />
            ３）
            <NotInterestedIcon style={{ fontSize: 15 }} />
            は権利元によりプレビューが許可されていません。
          </div>
        </Typography>
        {itemResult !== undefined && itemResult.length === 0 ?
          <div className="container mx-auto flex justify-center pb-10 pt-4">
            <Loader type="Audio" color="rgba(109, 40, 217)" height={60} width={60}/>
          </div>
          :<><Typography variant="h4" className="pl-3 text-center text-purple-400">TrackList</Typography>
            <ul className="m-0 p-0" onClick={handleSnackBarOpen}>
              {itemResult.map((props:SetItemResultProps) =>
                <li
                  className="list-none border-b border-solid border-purple-700 pt-3 pb-3 pl-0 transition-all"
                  key={props.id}
                  onClick={() => setSelectedTrack({
                      trackId: props.id,
                      trackName: props.name,
                      trackArtistId: props.artists[0].id,
                      trackArtistName: props.artists[0].name,
                      trackArtworkUrl: props.album.images[1].url,
                      trackPopularity: props.popularity,
                    })}>
                  <Trail open={trailOpen}>
                    <TrackCard
                      artistName={props.album.artists[0].name}
                      artworkUrl={props.album.images[1].url}
                      trackName={props.name}
                      previewUrl={props.preview_url}
                      playing={playing}
                      playSrc={playSrc}
                      setPlaying={setPlaying}
                      setPlaySrc={setPlaySrc}
                    ></TrackCard>
                  </Trail>
                </li>
              )}
            </ul>
          </>
        }
      </div>
    </div>
  )};
export default Search;
