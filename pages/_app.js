import "../styles/general.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [publicRepos, setPublicRepos] = useState(0);
  const [dataRepos, setDataRepos] = useState([]);

  useEffect(async () => {
    await axios.get(`https://api.github.com/users/cxcarvaj`).then((res) => {
      const data = res.data;
      setAvatarUrl(data.avatar_url);
      setUserName(data.name);
      setPublicRepos(data.public_repos);
    });
  }, []);

  useEffect(async () => {
    await axios
      .get(`https://api.github.com/users/cxcarvaj/repos`)
      .then((res) => {
        const data = res.data;
        setDataRepos(data);
      });
  }, []);
  return (
    <>
      <main>
        <Navbar />
        <Component userName={userName} publicRepos={publicRepos} dataRepos={dataRepos} />
      </main>
      <footer>
        <Footer avatarUrl={avatarUrl} />
      </footer>
    </>
  );
}

export default MyApp;
