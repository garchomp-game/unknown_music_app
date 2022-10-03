import React, { useState } from "react"
import { WaveLoading } from "respinner"
import ArtistParams from "./api/ArtistParams"
import ParamsGraph from "./api/ParamsGraph"
import QueryTracks from "./api/QueryTracks"
import Recommend from "./api/Recommend"
import ReTrackParams from "./api/ReTrackParams"
import TrackCard from "./api/TrackCard"
import TrackParams from "./api/TrackParams"
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
import Slide, { SlideProps } from '@mui/material/Slide';

const Search = (props : any) => {

  const token = props.token; //Top-contentsからトークンを受け取る。
  const wordFormData = props.wordFormData; //Top-contentsから値を受け取る。
  const [itemResult, setItemResult] = useState([]);  //取得してきたデータが入る。
  const [trackInfo, setTrackInfo] = useState("");  //曲のパラメーターの取得
  const [playing, setPlaying] = useState(false); //再生停止
  const [playSrc, setPlaySrc] = useState(""); //再生する曲のリロード
  const [volumeToggle, setVolumeToggle] = useState(0.2); //初期音量
  const [trailOpen, setTrailOpen] = useState(true);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [graphReDisplay, setGraphReDisplay] = useState("none");
  const [artistInfo, setArtistInfo] = useState("");
  const [reTrackInfo, setReTrackInfo] = useState("");

  //類似曲のパラメーター
  const [lookRecommend, setLookRecommend] = useState([]);
  const [selectedRecommend, setSelectedRecommend] = useState({
    reTrackId: "",
    reTrackName: "none",
    reTrackPopularity: "",
    reTrackArtwork: "",
  });
  const [selectedTrack, setSelectedTrack] = useState({
    trackId: "",
    trackName: "",
    trackArtistName: "",
    trackArtistId: "",
    trackArtistGenres: "",
    trackArtworkUrl: "",
    trackPopularity: "",
  });

  const handleChange = (event, newValue) => {
    setVolumeToggle(newValue);
  };
  const handleSnackBarOpen = () => {
    setSnackBarOpen(true);
  };
  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };
  const handleSearchView = () => {
    setGraphReDisplay("none");
    setTrailOpen(true);
  };
  const handleDataView = () => {
    setGraphReDisplay("block");
    setTrailOpen(false);
  };

  {/* ポップアップトランジション */}
  const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
  }

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  type TransitionProps = Omit<SlideProps, 'direction'>;
  {/* ポップアップトランジション */}

  return(
    <div className="pt-10">
      <div className="bg-gray-900 text-gray-200">
        {/* 音楽再生コントローラー */}
        {playSrc !== null && playSrc.length !== 0 && (
          <ReactHowler
            format={"mp3"}
            playing={playing}
            src={playSrc}
            volume={volumeToggle}
          />
        )}
        {/* 入力された単語から曲を検索 */}
        <QueryTracks
          token={token}
          wordFormData={wordFormData}
          setItemResult={setItemResult}
        />
        {/* 選ばれた曲のパラメータを取得 */}
        <TrackParams
          token={token}
          id={selectedTrack.trackId}
          trackName={selectedTrack.trackName}
          trackArtist={selectedTrack.trackArtist}
          setTrackInfo={setTrackInfo}
        />
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
                  size="small"
                  variant="contained"
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
        {/* 選ばれた曲のアーティスト情報を取得 */}
        {/* 発火条件：トラック選択完了後 */}
        {selectedTrack.length !== 0 && (
          <ArtistParams
            token={token}
            artistId={selectedTrack.trackArtistId}
            setArtistInfo={setArtistInfo}
          />
        )}
        {/* 選ばれた曲を元に類似曲を取得 */}
        {/* 発火条件：アーティスト情報取得後 */}
        {/* 注釈：ジャンル数が多いと検索に出ない為、3つまでしか取得しない */}
        {artistInfo.length !== 0 && (
          <Recommend
            token={token}
            trackId={selectedTrack.trackId}
            artistId={selectedTrack.trackArtistId}
            artistGenres={artistInfo.genres.slice(0, 3)}
            setLookRecommend={setLookRecommend}
          />
        )}
        {/* 選ばれた類似曲のパラメータ取得 */}
        <ReTrackParams
          token={token}
          id={selectedRecommend.reTrackId}
          setReTrackInfo={setReTrackInfo}
        />
        {/* 要素表示トグル 音量調節 */}
        <Grid container spacing={0}>
          <Grid
            item={true}
            className="flex text-center justify-center whitespace-nowrap pt-6"
            xs={6}
            sm={3}
          >
            <button
              onClick={() => handleDataView()}
              variant="outlined"
              className="bg-purple-900 hover:bg-purple-700 text-purple-200 font-bold py-2 px-4 text-xs rounded-full font-serif">
              データとおすすめ曲
            </button>
          </Grid>
          <Grid
            item={true}
            className="flex text-center justify-center whitespace-nowrap pt-6"
            xs={6}
            sm={3}
          >
            <button
              variant="outlined"
              className="bg-purple-900 hover:bg-purple-700 text-purple-200 font-bold py-2 px-4 text-xs rounded-full font-serif"
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
      <Grid container direction="row" spacing={1}>
          <Grid item={true} xs={12} sm={6} style={{ display: graphReDisplay }}>
            {trackInfo.data !== undefined && reTrackInfo.data !== undefined && (
              <ParamsGraph
                // 検索結果で選んだ曲のパラメータをグラフに投入
                trackName={selectedTrack.trackName}
                FirstDanceAbility={trackInfo.data.danceability}
                FirstEnergy={trackInfo.data.energy}
                FirstLoudness={trackInfo.data.loudness}
                FirstPopularity={selectedTrack.trackPopularity}
                FirstTempo={trackInfo.data.tempo}
                FirstValence={trackInfo.data.valence}
                FirstArtwork={selectedTrack.trackArtworkUrl}
                // サジェストで選んだ曲のパラメータをグラフに投入
                reTrackName={selectedRecommend.reTrackName}
                ReDanceAbility={reTrackInfo.data.danceability}
                ReEnergy={reTrackInfo.data.energy}
                ReLoudness={reTrackInfo.data.loudness}
                RePopularity={selectedRecommend.reTrackPopularity}
                ReTempo={reTrackInfo.data.tempo}
                ReValence={reTrackInfo.data.valence}
                ReArtwork={selectedRecommend.reTrackArtwork}
              />
            )}
          </Grid>
          {/* 類似曲の表示条件分岐 */}
          <Grid item={true} xs={12} sm={6} style={{ display: graphReDisplay }}>
            {lookRecommend !== undefined && artistInfo.genres !== undefined && (
              <>
                <Grid item={true}>
                  <Typography variant="h3" className="text-center">RecommendList</Typography>
                </Grid>
                <ul>
                  {lookRecommend.map((props) => (
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
                      }
                    >
                      <TrackCard
                        audioId={props.id}
                        artistName={props.album.artists[0].name}
                        artworkUrl={props.album.images[1].url}
                        trackName={props.name}
                        previewUrl={props.preview_url}
                        spotifyUrl={props.external_urls.spotify}
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
        <Typography
          variant="subtitle2"
          className="pl-3 pb-3 pt-3 text-gray-300 text-center block"
        >
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
        {itemResult !== undefined && itemResult.length === 0 ? (
          <>
            <WaveLoading size={40} count={3} duration={1.5} color="#6f00ff" strokeWidth={1} />
          </>
          ) : (
          <>
            <Typography
              variant="h3"
              className="pl-3 text-center text-purple-400"
            >
              TrackList
            </Typography>
            <ul className="m-0 p-0" onClick={handleSnackBarOpen}>
              {itemResult.map((props) => (
                <li
                  className="list-none border-b border-solid border-purple-700 pt-3 pb-3 pl-0 transition-all"
                  key={props.id}
                  onClick={() =>
                    setSelectedTrack({
                      trackId: props.id,
                      trackName: props.name,
                      trackArtistId: props.artists[0].id,
                      trackArtistName: props.artists[0].name,
                      trackArtworkUrl: props.album.images[1].url,
                      trackPopularity: props.popularity,
                    })
                  }
                >
                  <Trail open={trailOpen}
                  onClick={handleClick(TransitionUp)}>
                    <TrackCard
                      audioId={props.id}
                      artistName={props.album.artists[0].name}
                      artworkUrl={props.album.images[1].url}
                      trackName={props.name}
                      previewUrl={props.preview_url}
                      spotifyUrl={props.external_urls.spotify}
                      playing={playing}
                      playSrc={playSrc}
                      setPlaying={setPlaying}
                      setPlaySrc={setPlaySrc}
                    ></TrackCard>
                  </Trail>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
export default Search;
