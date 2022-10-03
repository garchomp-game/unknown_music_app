import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@mui/material//Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";

const CardStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#1e1022",
  color: "#ff87d6",
  padding: 0,
  height: 100,
}));

const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
  width: 100,
  height: 100,
}));

const CardContentStyle = styled(CardContent)(({ theme }) => ({
  width: "calc(100% - 160px)",
  extOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  padding: 10,
}));

const TrackCard = (props: any) =>  {

  //再生ボタンの条件分岐に使用
  let ButtonLooks = false;

  //Search.jsにあるReactHowlerの再生管理
  //この階層に再生エンジンを置くと再生機構を複数持つ為同時再生されてしまう

  //音楽が再生されている場合
  //Search.js再生エンジンにURLを載せ替える
  const MountUrl = () => {
    props.setPlaySrc(props.previewUrl);
  };
  //音楽が再生されていない場合
  //再生指令をエンジンに送りURLをマウント
  const PlayAndMount = () => {
    MountUrl();
    props.setPlaying(true);
  };
  //音楽が再生されていない場合
  //再生指令をエンジンに送りURLをマウント
  const handleStartPlaying = () => {
    props.playing ? MountUrl() : PlayAndMount();
  };
  const handleStopPlaying = () => {
    props.setPlaying(false);
  };
  //再生停止を一つのボタンで管理
  const handleStartStop = () => {
    props.playing ? handleStopPlaying() : handleStartPlaying();
  };
  //マウントされた曲とカードの持つプレビュー曲が同じであれば停止ボタン表示
  if (props.playing === false) {
    ButtonLooks = false;
  } else if (props.previewUrl === props.playSrc) {
    ButtonLooks = true;
  }
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  })


return (
<div>
{/* ---------アルバムアートワーク--------- */}
  <ThemeProvider theme={theme}>
    <CardStyle elevation={2}>
        {props.previewUrl !== undefined ? (
          <CardMediaStyle
            onClick={() => {
              handleStartStop();
            }}
            image={props.artworkUrl}
          />
        ) : (
          <CardMediaStyle image={props.artworkUrl} />
        )}
{/* ---------アルバムアートワーク--------- */}

{/* ---------アーティスト情報--------- */}
      <CardContentStyle>
          <div>
            <Typography
              component="h6"
              variant="h6"
              style={{ color: "#bc00eb", fontSize: 18, }}
              noWrap
            >
              {props.trackName}
            </Typography>
            <div className="flex relative">
              <Typography
                variant="subtitle1"
                noWrap
                style={{ color: "#A78BFA" }}
              >
                {props.artistName}
              </Typography>
            </div>
{/* ---------アーティスト情報--------- */}

{/* ------------------アイコン類------------------ */}
            <div className="absolute px-30 -py-22">

{/* ---------後で聞く機能--------- */}
                <AddIcon
                  style={{ color: "#bc00eb", fontSize: 30 , marginRight: 5}}
                />
{/* ---------後で聞く機能--------- */}

{/* ---------いいね機能--------- */}
                  <FavoriteBorderIcon
                    style={{ color: "#bc00eb", fontSize: 30 , marginRight: 5}}
                  />
                  <FavoriteIcon
                    style={{ color: "#bc00eb", fontSize: 28, display: "none", marginRight: 5 }}
                  />
{/* ---------いいね機能--------- */}

{/* ---------再生ボタン機能--------- */}
                {props.previewUrl !== 0 && props.previewUrl !== null ? (
                  <>
                    {ButtonLooks ? (
                      <PauseCircleOutlineIcon
                        style={{ color: "#bc00eb", fontSize: 30, width: 30 , height: "auto" , alignItems: "center" }}
                        onClick={() => {
                          handleStopPlaying();
                        }}
                      />
                    ) : (
                      <PlayCircleOutlineIcon
                        style={{ color: "#bc00eb", fontSize: 30, width: 30 , height: "auto" , alignItems: "center" }}
                        onClick={() => {
                          handleStartPlaying();
                        }}
                      />
                    )}
                  </>
                ) : (
                  <NotInterestedIcon
                    style={{ color: "#7f7f7f", fontSize: 30, width: 30 , height: "auto" , alignItems: "center" }}
                  />
                )}
{/* ---------再生ボタン機能--------- */}
                </div>
              </div>
        </CardContentStyle>
    </CardStyle>
  </ThemeProvider>
</div>
  );
}
export default TrackCard;