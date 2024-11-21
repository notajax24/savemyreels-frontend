import { useEffect, useState } from "react";
import axios from "axios";
import AppNav from "./AppNav";
import { FaDownload } from "react-icons/fa";
import Instruction from "./Instruction";
import { saveAs } from "file-saver";

const Home = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState({
    videoUrl: null,
    thumbnail: null,
  });

  const [loading, setLoading] = useState(false); // Track loading state
  const [progress, setProgress] = useState(0);

  const BACKEND_URL = "http://localhost:5000";

  // Function to handle paste button click
  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text); // Set the pasted text into the input
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleDownload = async () => {
    setError(null);
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/download?url=${encodeURIComponent(url)}`
      );

      setVideoData(response.data.videoUrl);
      console.log(response.data.videoUrl);
      setVideoData(response.data);
      // Check if videoUrl and thumbnail are present in the response
    } catch (err) {
      setError("Failed to fetch video. Please check the URL.");
      console.error("Error fetching video:", err);
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  const downloadVideo = () => {
    console.log(videoData.videoUrl);
    if (videoData.videoUrl) {
      saveAs(videoData.videoUrl, "savemyreels.mp4");
    }
  };

  useEffect(() => {
    // Simulate a progress increase for demo purposes
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) return prevProgress + 1;
        clearInterval(interval); // Stop when progress reaches 100
        return prevProgress;
      });
    }, 50); // Adjust the speed of the progress
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppNav />
      <div className="min-h -screen md:w-full bg-dark-blue text-white flex flex-col items-center pt-20 ">
        <div className="min-h-auto md:min-w-[1000px] sm:w-[200px] max-w-sm px-4 py-6 bg-black rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Instagram URL"
              className="w-full p-3 bg-dark-blue text-black rounded-lg focus:outline-none"
            />
            <button
              onClick={pasteFromClipboard}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Paste
            </button>
          </div>

          <button
            onClick={handleDownload}
            className="w-full mt-4 bg-blue-500 p-3 rounded-lg text-white font-bold focus:outline-none"
          >
            Download
          </button>

          {loading && (
            <div className="flex-row justify-center items-center min-h-auto pt-3">
              <h3 className=" flex justify-center items-center text-m">
                Fetching Data, Please Wait Few Seconds!
              </h3>
              <div className="w-full max-w-screen h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 animate-gradient"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {videoData.videoUrl && (
            <div className="mt-8 w-full max-w-2xl mx-auto px-4">
              <h2 className="text-xl font-semibold text-center mb-4">
                Video Preview
              </h2>
              <div className="flex justify-center">
                <video
                  controls
                  autoPlay
                  className="flex w-[400px] h-[600px] object-cover rounded-lg"
                  src={videoData.videoUrl}
                ></video>
              </div>
              <p className="text-center mt-4">
                <button
                  onClick={downloadVideo}
                  disabled={loading}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 w-full block text-center"
                >
                  Download Video
                </button>
              </p>
            </div>
          )}
        </div>
        <div className="pt-20">
          <Instruction />
        </div>
      </div>
    </>
  );
};

export default Home;
