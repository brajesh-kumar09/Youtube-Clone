import { LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
export default function VidPlayer(props: any    ) {
    console.log(props.details.thumbnail);
    const[loading, setLoading] = useState(false);
     if (loading) return <LinearProgress
                  color="error"
                  sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    zIndex: 1200,
                  }}
                />;
    return (
        <>
       
        <div>
            <iframe width="560" height="315" allowFullScreen src={`https://www.youtube.com/embed/${props.details.videoId}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
       
        <div className="flex items-start space-x-3 mt-5">
        <img 
          src={props.details.thumbnail} 
          alt={props.details.channelName}
          className=" rounded-full"
            style={{ width: '40px', height: '40px' }}
          

        />
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900 dark:te mb-1 mt-3">
            {props.details.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{props.details.channelName}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
             {props.details.uploadedAt}
          </p>
          
        </div>
         
      </div>
      </>
    );
}