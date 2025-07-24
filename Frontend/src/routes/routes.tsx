import { createBrowserRouter } from "react-router-dom";
import RouterErrorElement from "./RouterErrorElement";
import GoogleSignIn from "../components/GoogleSignIn";
import GoogleSignUp from "../components/GoogleSignUp";
// import { Home, Subscription, VideoPlayer, History, YourVideos } from "../components/Pages";
import Home from "../pages/Home";
import Subscription from "../pages/Subscription";
import History from "../pages/History";
import VideoPlayer from "../pages/VideoPlayer";
import YourVideos from "../pages/YourVideos";



export const routes = [
  {
    path: '/',
    errorElement: <RouterErrorElement />,
    children: [
        {path:"",element:<Home/>},
      {
        path: "sign-in", 
        element: <GoogleSignIn />,
      },
      {
        path: "sign-up", 
        element: <GoogleSignUp />,
      },
      {
        path:"vp/:videoId",
        element: <VideoPlayer/>
      },
      
          {
            path: 'subscriptions', 
            element: <Subscription/>,
          },
          {
            path: 'yourvideos', 
            element: <YourVideos/>,
          },
          {
            path: "history", 
            element: <History/>,
          }
        
      
    ]
  }
];

export const routers = createBrowserRouter(routes);
