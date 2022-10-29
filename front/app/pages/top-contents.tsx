import React, { useState } from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import useCredentials from "../components/hooks/useCredentials"

const TopContents:React.FC = () => {
  const token = useCredentials();
  const [wordFormData, setWordFormData] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (wordFormData === "") {
      alert("入力してください");
    }
  };

  return (
    <Layout title="Top-Contents">
      <div className="w-full pb-16 text-purple-900 mx-full max-w-4xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl container mx-auto">
          <Grid item={true}>
            <Grid item={true} xs={10} lg={8}>
              <Typography variant="h3">
                <br />
                <br />
              </Typography>
              <form className="w-full w-96 sm:w-full" noValidate onSubmit={handleSubmit}>
                <TextField
                  className="bg-white"
                  id="standard-basic"
                  label="アーティスト名? or 曲名?"
                  value={wordFormData}
                  fullWidth
                  variant="filled"
                  onChange={(e) => setWordFormData(e.target.value)}
                />
              </form>
              {wordFormData.length === 0 ? (
                <>
                </>
              ) : (
                <Search token={token} wordFormData={wordFormData} />
              )}
            </Grid>
          </Grid>
      </div>
    </Layout>
  );
};
export default TopContents;