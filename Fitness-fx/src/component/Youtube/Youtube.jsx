import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCq2l_Bxv4HSMlkbVaevzPUQ";
const MAX_RESULTS = 5;

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async (pageToken = "") => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet",
            order: "date",
            maxResults: MAX_RESULTS,
            type: "video", // VERY IMPORTANT
            pageToken: pageToken,
          },
        }
      );

      setVideos((prev) => [...prev, ...res.data.items]);
      setNextPageToken(res.data.nextPageToken);
    } catch (err) {
      setError("Failed to load videos. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 style={styles.heading}>Our YouTube Videos</h1>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.container}>
        {videos.map((video) =>
          video.id.videoId ? (
            <div key={video.id.videoId} style={styles.card}>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              />
              <h4>{video.snippet.title}</h4>
            </div>
          ) : null
        )}
      </div>

      {loading && <div style={styles.loader}></div>}

      {!loading && nextPageToken && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button
            style={styles.button}
            onClick={() => fetchVideos(nextPageToken)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

const styles = {
  heading: {
    textAlign: "center",
    color: "orange",
    fontWeight: "bold",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  loader: {
    margin: "20px auto",
    border: "6px solid #f3f3f3",
    borderTop: "6px solid orange",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  },
};

export default YouTubeVideos;