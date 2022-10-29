import React from 'react'
import CountUp from "react-countup"
import { Radar } from "react-chartjs-2"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { styled } from "@mui/material/styles"

interface ParamsProps {
  FirstPopularity : number;
  FirstLoudness : number;
  FirstTempo : number;
  FirstValence : number;
  FirstDanceAbility : number;
  FirstEnergy : number;
  RePopularity : number;
  ReLoudness : number;
  ReTempo : number;
  ReValence : number;
  ReDanceAbility : number;
  ReEnergy : number;
  trackName : string;
  reTrackName : string;
}

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

const ParamsGraph = React.memo((props: ParamsProps) => {
  const {FirstPopularity, FirstLoudness, FirstTempo, RePopularity, ReLoudness, ReTempo,
        reTrackName, ReValence, ReDanceAbility, ReEnergy, trackName, FirstValence, FirstDanceAbility,
        FirstEnergy} = props;
  const ShrinkedPopularity = FirstPopularity * 0.01;
  const ShrinkedLoudness = (FirstLoudness + 70) * 0.01;
  const ShrinkedTempo = FirstTempo * 0.005;

  const ReShPopularity = RePopularity * 0.01;
  const ReShLoudness = (ReLoudness + 70) * 0.01;
  const ReShTempo = ReTempo * 0.005;

  const data = {
    labels: ["人気度", "テンポ", "激しさ", "明るさ", "踊りやすさ", "エナジー"],
    datasets: [
      {
        label: reTrackName,
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
          ReValence,
          ReDanceAbility,
          ReEnergy,
        ],
      },
      {
        label: trackName,
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
          FirstValence,
          FirstDanceAbility,
          FirstEnergy,
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
          {FirstTempo !== undefined && (
            <GridStyle item xs={6}>
                <BpmStyle variant="h4">
                  BPM
                </BpmStyle>
              <Typography variant="h3" style={{ color: "#1db954" }}>
                <CountUp end={Math.trunc(FirstTempo)} />
              </Typography>
          </GridStyle>
          )}
        {ReTempo !== undefined && (
            <GridStyle item xs={6}>
                <BpmStyle variant="h4">
                  BPM
                </BpmStyle>
              <BpmStyle variant="h3">
                <CountUp
                  end={Math.trunc(ReTempo)}
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
