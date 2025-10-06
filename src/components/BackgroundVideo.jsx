// components/BackgroundVideo.js
export default function BackgroundVideo() {
  return (
    <video
      src="/CurtainOpenBright.mp4" // Place your file in /public
      autoPlay
      loop
      muted
      playsInline
      poster="/curtain-poster.jpg" // Optional fallback image
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        minWidth: "100vw",
        minHeight: "100vh",
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        background: "#000", // fallback background color
      }}
    />
  );
}
