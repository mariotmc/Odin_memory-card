const Video = ({ video }) => {
  return (
    <div className="w-full pb-20 px-3 mx-auto overflow-hidden">
      <iframe
        src={video}
        frameBorder="0"
        allowFullScreen
        loading="true"
        className="w-full min-h-[300px] max-w-[700px] mx-auto rounded-lg sm:h-[350px] md:h-[400px] border-solid border-customRed border-4"
        title="video"
      ></iframe>
    </div>
  );
};

export default Video;
