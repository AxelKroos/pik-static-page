import video720 from "./../media/video/background-video720.mp4";
import video1080 from "./../media/video/background-video1080.mp4";
import useMediaQuery from "use-mediaquery";

export default function Video() {
  const backgroundVideo = useMediaQuery("(max-width: 1000px)");

  return (
    <video autoPlay loop muted>
      <source src={backgroundVideo ? video720 : video1080} type="video/mp4" />
    </video>
  );
}
