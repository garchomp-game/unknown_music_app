import CountUp from "react-countup";
import { Radar } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";

const ParamsGraph = (props) => {
  const ShrinkedPopularity = props.FirstPopularity * 0.01;
  const ShrinkedLoudness = (props.FirstLoudness + 70) * 0.01;
  const ShrinkedTempo = props.FirstTempo * 0.005;

  const ReShPopularity = props.RePopularity * 0.01;
  const ReShLoudness = (props.ReLoudness + 70) * 0.01;
  const ReShTempo = props.ReTempo * 0.005;

  const data = {
    labels: ["人気度", "テンポ", "激しさ", "明るさ", "踊りやすさ", "エナジー"],
    datasets: [
      {
        label: props.trackName,
        backgroundColor: "rgba(29,185,84,0.7)",
        borderColor: "#1db954",
        borderWidth: 2,
        pointBackgroundColor: "#1db954",
        pointBorderColor: "#1db954",
        pointHitRadius: "3",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#1db954",
        pointRadius: 0,
        data: [
          ShrinkedPopularity,
          ShrinkedTempo,
          ShrinkedLoudness,
          props.FirstValence,
          props.FirstDanceAbility,
          props.FirstEnergy,
        ],
      },
      {
        label: props.reTrackName,
        backgroundColor: "rgba(219,93,254,0.4)",
        borderColor: "#db5dfe",
        borderWidth: 2,
        pointBackgroundColor: "#db5dfe",
        pointBorderColor: "#db5dfe",
        pointHitRadius: "3",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#db5dfe",
        pointRadius: 0,
        data: [
          ReShPopularity,
          ReShTempo,
          ReShLoudness,
          props.ReValence,
          props.ReDanceAbility,
          props.ReEnergy,
        ],
      },
    ],
  };

  const options = {
    layout: {
      padding: 10,
    },
    scale: {
      // 軸（放射軸）
      angleLines: {
        display: true,
        color: "rgba(252,252,255,0.2)",
      },
      //グリッド線の設定
      gridLines: {
        display: true,
        color: "#9900ff",
        drawBorder: true,
      },
      // 軸のラベル
      pointLabels: {
        display: true,
        fontSize: 10,
      },
      //目盛の設定
      ticks: {
        display: false,
        maxTicksLimit: 1,
    }
  }
  };

  const useStyles = makeStyles((theme) => ({
    bpm: {
      color: "#DF0869",
    },
    bpmStyle: {
      display: "inline-flex",
      justifyContent: "center",
    },
  }));

  const theme = createMuiTheme();
  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  theme.typography.h4 = {
    fontSize: "1.0rem",
    "@media (min-width:600px)": {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.0rem",
    },
  };

  const classes = useStyles();

  return (
    <div>
      <Radar data={data} options={options} width={600} height={600} />
      <ThemeProvider theme={theme}>
        <Grid container direction="row">
          {props.FirstTempo !== undefined && props.FirstTempo.length !== 0 && (
            <Grid item xs={6} className={classes.bpmStyle}>
              <Typography className={classes.bpm} variant="h4">
                BPM
              </Typography>
              <Typography variant="h3" style={{ color: "#1db954" }}>
                <CountUp end={Math.trunc(props.FirstTempo)} />
              </Typography>
            </Grid>
          )}
          {props.ReTempo !== undefined && props.ReTempo.length !== 0 && (
            <Grid item xs={6} className={classes.bpmStyle}>
              <Typography className={classes.bpm} variant="h4">
                BPM
              </Typography>
              <Typography variant="h3">
                <CountUp
                  end={Math.trunc(props.ReTempo)}
                  className="text-purple-600"
                />
              </Typography>
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default ParamsGraph;
