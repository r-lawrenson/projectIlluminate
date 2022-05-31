import "../TranquilZoneStyling.css";

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

const fetchNoise = async (setter) => {
  const noisePlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
  const response = await fetch(
    `${noisePlaylist}?part=snippet&playlistId=PLeCKLji5NOeGoEIE8mQUMVmfc2PNZ9_2E&maxResults=50&key=${process.env.REACT_APP_NOISE_API_KEY}`
  );
  const datn = await response.json();
  setter(datn);
};

const fetchImages = async (setter) => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const dat3 = await response.json();
  setter(dat3);
};

const fetchDogs = async (setter) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const dat4 = await response.json();
  setter(dat4);
};

export const TranquilZone = () => {
  const [youtubeData, setyoutubeData] = useState([]);
  const [podcastData, setpodcastData] = useState([]);
  const [noiseData, setnoiseData] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchYoutube(setyoutubeData);
  }, []);
  console.log(youtubeData);

  useEffect(() => {
    fetchPodcast(setpodcastData);
  }, []);
  console.log(podcastData);

  useEffect(() => {
    fetchNoise(setnoiseData);
  }, []);
  console.log(noiseData);

  useEffect(() => {
    fetchImages(setCats);
  }, []);
  console.log(cats);

  useEffect(() => {
    fetchDogs(setDogs);
  }, []);
  console.log(dogs);

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
                  <a
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    target="_blank" rel="noopener noreferrer"
                  >
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
                    <a
                      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      target="_blank" rel="noopener noreferrer"
                    >
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


          <div className="noise">
            <h1 className="title">Noise Playlist</h1>

            <ul className="grid">
              {noiseData.items?.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                  <li key={id} className="card">
                    <a
                      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      target="_blank" rel="noopener noreferrer"
                    >
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

          <div className="Cat">
            <h1 className="title">Cat Images</h1>

            <ul className="grid">
              {cats?.map((cat, i) => (
                <li key={i} className="card">
                  <div className="cat-container">
                    <img src={cat.url} alt="cats" className="cati"></img>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="Cat">
            <h1 className="title">Dog Images</h1>

            <ul className="grid carousel ">
              {dogs.message?.map((dog, i) => (
                <li key={i} className="card item">
                  <div className="cat-container">
                    <img src={dog} alt="dogs" className="cati"></img>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
