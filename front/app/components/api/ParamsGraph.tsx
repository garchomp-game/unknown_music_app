import React from 'react';
import CountUp from "react-countup";
import { Radar } from "react-chartjs-2";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

// interface ParamsProps {
//   FirstPopularity : number
//   FirstLoudness : number,
//   FirstTempo : number,
//   FirstValence : number,
//   FirstDanceAbility : number,
//   FirstEnergy : number,
//   RePopularity : number,
//   ReLoudness : number,
//   ReTempo : number,
//   ReValence : number,
//   ReDanceAbility : number,
//   ReEnergy : number,
//   trackName : string,
//   reTrackName : string
// }

const myOptions = {
  responsive: true,
    legend: {
      labels:{
        fontColor: "#ddd6fe"
      },
    },
  layout: {
    padding: 1,
  },
  scale: {
    //目盛の設定
    ticks: {
      display: false,
      maxTicksLimit:  2,
    },
    // 軸（放射軸）
    angleLines: {
      lineWidth: 1,
      color: "rgba(124, 58, 237)",
    },
    //グリッド線の設定
    gridLines: {
      color: "rgba(124, 58, 237)",
      drawBorder: true,
    },
    // 軸のラベル
    pointLabels: {
      fontSize: 11,
      fontColor: "#ddd6fe",
    },
  }
};

const ParamsGraph:React.FC = React.memo(( props : any ) => {
  const ShrinkedPopularity = props.FirstPopularity * 0.01;
  const ShrinkedLoudness = (props.FirstLoudness + 70) * 0.01;
  const ShrinkedTempo = props.FirstTempo * 0.005;

  const ReShPopularity = props.RePopularity * 0.01;
  const ReShLoudness = (props.ReLoudness + 70) * 0.01;
  const ReShTempo = props.ReTempo * 0.005;

  const data:any = {
    labels: ["人気度", "テンポ", "激しさ", "明るさ", "踊りやすさ", "エナジー"],
    datasets: [
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
    ],
  };

  const BpmStyle = styled(Typography)(({ theme }) => ({
    color: "#DF0869"
  }));

  const GridStyle = styled(Grid)(({ theme }) => ({
    display: "inline-flex",
    justifyContent: "center",
  }));

  const theme = createTheme();
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

  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container direction="row">
        <Radar data={data} options={myOptions} {...props} width={600} height={600} />
          {props.FirstTempo !== undefined && props.FirstTempo.length !== 0 && (
            <GridStyle item xs={6}>
                <BpmStyle variant="h4">
                  BPM
                </BpmStyle>
              <Typography variant="h3" style={{ color: "#1db954" }}>
                <CountUp end={Math.trunc(props.FirstTempo)} />
              </Typography>
          </GridStyle>
          )}
        {props.ReTempo !== undefined && props.ReTempo.length !== 0 && (
            <GridStyle item xs={6}>
                <BpmStyle variant="h4">
                  BPM
                </BpmStyle>
              <BpmStyle variant="h3">
                <CountUp
                  end={Math.trunc(props.ReTempo)}
                  className="text-purple-600"
                />
              </BpmStyle>
            </GridStyle>
          )}
      </Grid>
      </ThemeProvider>
    </>
  );
})
export default ParamsGraph;
