import React, { useState } from "react"
import Layout from "../components/Layout"
import Credentials from "../components/api/Credentials"
import Search from "../components/Search"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const TopContents = () => {
  const [token, setToken] = useState("");
  const [wordFormData, setWordFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordFormData === "") {
      alert("入力してください");
    }
  };

  return (
    <Layout title="Top-Contents">
      <div className="w-11/12 pb-16 text-purple-900">
          <Credentials setToken={setToken} />
          <Grid item={true} container spacing={1}>
            <Grid item={true} xs={1} lg={2}></Grid>
            <Grid item={true} xs={10} lg={8}>
              <Typography variant="h3">
                <br />
                <br />
                <p className="text-center text-xl mb-3 text-gray-200 font-serif">
                ↓お気に入りの曲を入力してください↓
                </p>
              </Typography>
              <form className="" noValidate onSubmit={handleSubmit}>
                <TextField
                  className="bg-gray-200"
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
            <Grid item={true} xs={1} lg={2}></Grid>
          </Grid>
      </div>
    </Layout>
  );
};
export default TopContents;