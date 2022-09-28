import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";

const TrackCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#1e1022",
      color: "#ff87d6",
      padding: 0,
      height: 100,
    },
    content: {
      width: "calc(100% - 160px)",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: 10,
    },
    cover: {
      width: 100,
      height: 100,
    },
    trackAndArtist: {},
    link: {
      paddingTop: -10,
    },
    playButton: {
      width: 30,
      height: "auto",
      alignItems: "center",
    },
    icon: {
      marginRight: 5,
    },
  }));
  //再生ボタンの条件分岐に使用
  let ButtonLooks = false;

  const [isFavorite, setIsFavorite] = useState(true);

  const onClickFavorite = () => {
  };

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
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
{/* ---------アルバムアートワーク--------- */}
      <Card className={classes.root} elevation={2}>
        {props.previewUrl !== undefined ? (
          <CardMedia
            onClick={() => {
              handleStartStop();
            }}
            className={classes.cover}
            image={props.artworkUrl}
          />
        ) : (
          <CardMedia className={classes.cover} image={props.artworkUrl} />
        )}
{/* ---------アルバムアートワーク--------- */}

{/* ---------アーティスト情報--------- */}
        <CardContent className={classes.content}>
          <div className={classes.trackAndArtist}>
            <Typography
              component="h6"
              variant="h6"
              style={{ color: "#bc00eb" }}
            >
              {props.trackName}
            </Typography>
            <div className="flex relative">
              <Typography variant="subtitle1" style={{ color: "#A78BFA" }}>
                {props.artistName}
              </Typography>
            </div>
{/* ---------アーティスト情報--------- */}

{/* ------------------アイコン類------------------ */}
            <div className="absolute px-30 -py-22">

{/* ---------後で聞く機能--------- */}
                <AddIcon
                  style={{ color: "#bc00eb", fontSize: 30 }}
                  className={classes.icon}
                />
{/* ---------後で聞く機能--------- */}

{/* ---------いいね機能--------- */}
                  <FavoriteBorderIcon
                    style={{ color: "#bc00eb", fontSize: 28, }}
                    className={classes.icon}
                    onClick={onClickFavorite}
                  />
                  <FavoriteIcon
                    style={{ color: "#bc00eb", fontSize: 28, display: "none" }}
                    className={classes.icon}
                    onClick={onClickFavorite}
                  />
{/* ---------いいね機能--------- */}

{/* ---------再生ボタン機能--------- */}
                {props.previewUrl !== 0 && props.previewUrl !== null ? (
                  <>
                    {ButtonLooks ? (
                      <PauseCircleOutlineIcon
                        className={classes.playButton}
                        style={{ color: "#bc00eb", fontSize: 30 }}
                        onClick={() => {
                          handleStopPlaying();
                        }}
                      />
                    ) : (
                      <PlayCircleOutlineIcon
                        className={classes.playButton}
                        style={{ color: "#bc00eb", fontSize: 30 }}
                        onClick={() => {
                          handleStartPlaying();
                        }}
                      />
                    )}
                  </>
                ) : (
                  <NotInterestedIcon
                    className={classes.playButton}
                    style={{ color: "#7f7f7f", fontSize: 30 }}
                  />
                )}
{/* ---------再生ボタン機能--------- */}
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default TrackCard;