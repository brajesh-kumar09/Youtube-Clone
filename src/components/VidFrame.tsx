export default function VidFrame(props: any) {
    console.log(props);
    return (<>
        <div>
            <iframe width="560" height="315" allowFullScreen src={`https://www.youtube.com/embed/${props.details.videoId}?autoplay=1`} title="YouTube video player" allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex items-start space-x-3">
        <img 
          src={props.details.channelImageUrl} 
          alt={props.details.channelName}
          className="w-9 h-9 rounded-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src = `https://placehold.co/40x40/cccccc/000000?text=${props.details.channelName.charAt(0)}`;
          }}
        />
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900 dark:text-white leading-tight mb-1">
            {props.details.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{props.details.channelName}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {props.details.views} &bull; {props.details.uploadedAt}
          </p>
        </div>
      </div>
    </>);
}