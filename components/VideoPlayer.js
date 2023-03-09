import ReactPlayer from 'react-player'

function VideoPlayer({ url, ...props }) {
  return (
    <>
      <div className=" my-12 w-full bg-blue mx-0 px-0">
        <ReactPlayer
          url={url}
          autoPlay={props.autoPlay ? props.autoPlay : false}
          poster={props.poster}
          className={'w-full'}
          height="100%"
          loop={props.loop ? props.loop : false}
          muted={props.muted ? props.muted : false}
          playsInline={props.playsInline ? props.playsInline : false}
          controls={props.controls ? props.controls : true}
        />
        {props.caption ? (
          <em className="max-w-md mx-auto -mt-7 pt-1 mb-14 text-sm leading-none text-blue-dark font-medium ">
            {' '}
            {props.caption}
          </em>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
export default VideoPlayer
