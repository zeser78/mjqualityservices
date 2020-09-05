import React from "react"
import Video1 from "../images/videos/animated-story.mp4"
import Video2 from "../images/videos/animated-story-1.mp4"

const VideoSection = () => {
  return (
    <div
      className="video"
      style={{
        display: `flex`,
        flexDirection: `row`,
        padding: `50px`,
        height: `600px`,
        justifyContent: `space-around`,
        alignItems: `center`,

        // position: "relative",
        // paddingBottom: "56.25%" /* 16:9 */,
        // paddingTop: 25,
        // height: 0,
      }}
    >
      <div>
        <video
          width="auto"
          height="600px"
          loop
          autoPlay
          style={
            {
              // position: "absolute",
              // top: 0,
              // left: 400,
            }
          }
        >
          <source src={Video1} type="video/mp4" />
        </video>
      </div>
      <div>
        <video
          width="auto"
          height="600px"
          loop
          autoPlay
          style={
            {
              // position: "absolute",
              // top: 0,
              // left: 400,
            }
          }
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoSection

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/zqMSZqmcRxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
