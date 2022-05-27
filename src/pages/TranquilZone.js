import "../TranquilZoneStyling.css"

import { useState, useEffect } from "react";

const fetchYoutube = async (setter) => {
  const youtubePlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
  const res = await fetch(
    `${youtubePlaylist}?part=snippet&playlistId=PLeCKLji5NOeFY6uStgXxaB0mS-tivpJ2t&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  setter(data);
};

const fetchPodcast = async (setter) => {
  const podcastPlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
  const response = await fetch(
    `${podcastPlaylist}?part=snippet&playlistId=PLeCKLji5NOeE2Vwfr8Vs6PASktfpZ-BxH&maxResults=50&key=${process.env.REACT_APP_PODCAST_API_KEY}`
  );
  const dat2 = await response.json();
  setter(dat2);
};

 export const TranquilZone = () => {
  const [youtubeData, setyoutubeData] = useState([]);
  const [podcastData, setpodcastData] = useState([]);

  useEffect(() => {
    fetchYoutube(setyoutubeData);
  }, []);
  console.log(youtubeData);

  useEffect(() => {
    fetchPodcast(setpodcastData);
  }, []);
  console.log(podcastData);

  return (
    <>

    <div className="container">

    <main className="main">
      <h1 className="title">Calming Videos</h1>


      <ul className="grid">
      {youtubeData.items?.map(({ id, snippet = {} }) => {
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return (
          <li key={id} className="card">
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
              <p>
                <img
                  width={medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt=""
                />
              </p>
              <h3>{title}</h3>
            </a>
          </li>
        );
      })}

      </ul>

      <div className="podcast">
        <h1 className="title">Podcast Playlist</h1>
      
        <ul className="grid">
      {podcastData.items?.map(({ id, snippet = {} }) => {
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return (
          <li key={id} className="card">
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <p>
                <img
                  width={medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt=""
                />
              </p>
              <h3>{title}</h3>
            </a>
          </li>
        );
      })}
      </ul>
      </div>
      </main>
      </div>
      
    </>
  );
};

