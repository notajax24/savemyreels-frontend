import React from "react";
import openinsta from "../assets/open-insta.jpg";
import copylink from "../assets/copy-link.jpg";
import pastelink from "../assets/paste-link.png";
// import download from "../assets/download.png";

const Instruction = () => {
  return (
    <>
      <div className="p-4 max-w-screen-lg mx-auto pt-4 ">
        <h2 className="text-2xl font-bold text-center mb-6">
          How to Download Instagram Reels
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Step 1: Open Instagram</h3>
              <p>
                Navigate to the Instagram app and find the Reel you want to
                download.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={openinsta}
                alt="Open Instagram"
                className="w-3/4 md:w-1/2 rounded shadow-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">
                Step 2: Copy the Reel Link
              </h3>
              <p>
                Tap the share button on the Reel and select "Copy Link" to save
                the URL to your clipboard.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={copylink}
                alt="Copy Link"
                className="w-3/4 md:w-1/2 rounded shadow-lg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">
                Step 3: Paste Link into the Downloader
              </h3>
              <p>
                Go to our Reel Downloader, paste the link into the input field,
                and click "Download."
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={pastelink}
                alt="Paste Link"
                className="w-3/4 md:w-1/2 rounded shadow-lg"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold ">
                Step 4: Download the Reel
              </h3>
              <p>
                Click on the "Download" button to save the Reel video directly
                to your device.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/download-reel.png"
                alt="Download Reel"
                className="w-3/4 md:w-1/2 rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ========================How It Works Section==================== */}
      <div className="p-4 max-w-screen-lg mx-auto bg-gray-100 mt-20  radius-lg rounded-3xl ">
        <h2 className="text-3xl font-bold text-center text-black p-3 mb-6 mb-10">
          How Instagram Downloader Works
        </h2>

        <p className="text-lg text-black mb-6 mb-20">
          An Instagram Reels downloader is a tool or software that allows you to
          download Reels, videos, and photos from Instagram without a watermark.
          Simply enter the URL or link of the content you want to download.
        </p>

        <div className="space-y-6">
          {/* Key Feature 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="text-blue-900 font-bold text-2xl mr-4">•</span>
            <p className="md:w-11/12 text-black">
              <strong className="text-blue-900">
                Original quality without watermark or logo:
              </strong>
              Download content in its original quality without watermarks, which
              most tools can't offer.
            </p>
          </div>

          {/* Key Feature 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="text-blue-900 font-bold text-2xl mr-4">•</span>
            <p className="md:w-11/12 text-black">
              <strong className="text-blue-900">Download on any device:</strong>{" "}
              Save Reels videos to your gallery on any device you want,
              including mobile, iPhone, iPad, PC, or tablet.
            </p>
          </div>

          {/* Key Feature 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="text-blue-900 font-bold text-2xl mr-4">•</span>
            <p className="md:w-11/12 text-black">
              <strong className="text-blue-900">
                Browser-based, no software required:
              </strong>{" "}
              Download Instagram Reels online by simply pasting a link. No
              downloads or installations needed!
            </p>
          </div>

          {/* Key Feature 4 */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="text-blue-900 font-bold text-2xl mr-4">•</span>
            <p className="md:w-11/12 text-black">
              <strong className="text-blue-900">Always free:</strong> Our
              service is free to use, with no hidden fees or charges. We place a
              few ads to support our services and further development.
            </p>
          </div>

          {/* Key Feature 5 */}
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="text-blue-900 font-bold text-2xl mr-4">•</span>
            <p className="md:w-11/12 text-black">
              <strong className="text-blue-900">Safe and anonymous:</strong> No
              login details are required to use our tool. You can download an
              unlimited amount of Reels videos without providing any personal
              information.
            </p>
          </div>
        </div>
      </div>
      <div>
        <footer />
      </div>
    </>
  );
};

export default Instruction;
