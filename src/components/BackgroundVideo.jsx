"use client";

export function BackgroundVideo() {
  return (
    <video
      src="/imgVid/video.mp4"
      autoPlay
      muted
      playsInline
      poster="/imgVid/bgImg.jpg"
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
        // background: "yellow", 
      }}
    />
  );
}
