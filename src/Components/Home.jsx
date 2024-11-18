// // src/App.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import AppNav from "./AppNav";
// import { FaDownload } from "react-icons/fa";
// import Instruction from "./Instruction";

// const Home = () => {
//   const [url, setUrl] = useState("");
//   const [error, setError] = useState(null);
//   const [videoData, setVideoData] = useState({
//     videoUrl: null,
//     thumbnail: null,
//   });
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [progress, setProgress] = useState(0);

//   // Function to handle paste button click
//   const pasteFromClipboard = async () => {
//     try {
//       const text = await navigator.clipboard.readText();
//       setUrl(text); // Set the pasted text into the input
//     } catch (err) {
//       console.error("Failed to read clipboard contents: ", err);
//     }
//   };

//   const handleDownload = async () => {
//     setError(null);
//     setLoading(true); // Start loading
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/download?url=${encodeURIComponent(url)}`
//       );

//       // Extract video URL and thumbnail from the response
//       console.log(response.data.video_url);
//       const data = response.data;
//       setVideoData({ videoUrl: data.video_url, thumbnail: data.thumbnail_src });
//     } catch (err) {
//       setError("Failed to fetch video. Please check the URL.");
//       console.error("Error fetching video:", err);
//     } finally {
//       setLoading(false); // Stop loading once the request is done
//     }
//   };
//   const downloadVideo = () => {
//     if (videoData && videoData.videoUrl) {
//       // Create a hidden anchor element to trigger the download
//       const link = document.createElement("a");
//       link.href = videoData.videoUrl;
//       link.download = "video.mp4"; // Specify the filename for the downloaded video

//       // Append to the DOM to make it work in some browsers (this is required for download on some browsers)
//       document.body.appendChild(link);

//       // Trigger the download
//       link.click();

//       // Remove the link after triggering the download
//       document.body.removeChild(link);
//     }
//   };

//   useEffect(() => {
//     // Simulate a progress increase for demo purposes
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress < 100) return prevProgress + 1;
//         clearInterval(interval); // Stop when progress reaches 100
//         return prevProgress;
//       });
//     }, 50); // Adjust the speed of the progress
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <AppNav />
//       <div className="min-h -screen md:w-full bg-dark-blue text-white flex flex-col items-center pt-20 ">
//         <div className="min-h-auto md:min-w-[1000px] sm:w-[200px] max-w-sm px-4 py-6 bg-black rounded-lg shadow-lg">
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={url}
//               required
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="Paste Instagram URL"
//               className="w-full p-3 bg-dark-blue text-black rounded-lg focus:outline-none"
//             />
//             <button
//               onClick={pasteFromClipboard}
//               className="bg-blue-500 text-white p-2 rounded-lg"
//             >
//               Paste
//             </button>
//           </div>

//           <button
//             onClick={handleDownload}
//             className="w-full mt-4 bg-blue-500 p-3 rounded-lg text-white font-bold focus:outline-none"
//           >
//             Download
//           </button>

//           {loading && (
//             <div className="flex-row justify-center items-center min-h-auto pt-3">
//               <h3 className=" flex justify-center items-center text-m">
//                 Fetching Data, Please Wait Few Seconds!
//               </h3>
//               <div className="w-full max-w-screen h-2 bg-gray-300 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 animate-gradient"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </div>
//           )}

//           {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

//           {videoData.videoUrl && (
//             <div style={{ marginTop: "20px" }}>
//               <h2>Video Preview</h2>
//               <video controls width="100%">
//                 <source src={videoData.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <p>
//                 <a href={videoData.videoUrl} download>
//                   Download Video
//                 </a>
//               </p>
//             </div>
//           )}
//         </div>
//         <div className="pt-20">
//           <Instruction />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
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
        `http://localhost:5000/api/download?url=${encodeURIComponent(url)}`
      );

      // Check if videoUrl and thumbnail are present in the response
      const { videoUrl, thumbnail } = response.data;

      if (videoUrl && thumbnail) {
        setVideoData({ videoUrl: videoUrl, thumbnail: thumbnail });
      } else {
        setError("No video URL or thumbnail found.");
      }
    } catch (err) {
      setError("Failed to fetch video. Please check the URL.");
      console.error("Error fetching video:", err);
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  const downloadVideo = () => {
    if (videoData && videoData.videoUrl) {
      // Use FileSaver.js to download the video with a prompt for file name and location
      saveAs(videoData.videoUrl, "savemyreelsapp.mp4");
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
                  className="flex w-[400px] h-[600px] object-cover rounded-lg"
                >
                  <source src={videoData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mt-4">
                <button
                  onClick={downloadVideo}
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
