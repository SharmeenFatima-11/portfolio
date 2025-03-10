import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/700.css"; // Specify weight
import "@fontsource/nunito/600.css"; // Specify weight
import "@fontsource/nunito/500.css"; // Specify weight
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style

import data from './components/data.json'; // Import your images.json file


// import Header from "../components/Header/index"
import Carousal from "./components/carousal/index"

// import { io } from "socket.io-client";
// import { useEffect } from "react";
// const socket = io("http://localhost:8003/");

function App() {

  // useEffect(() => {

  //   // Define the query object only once to avoid redundancy
  //   const query = {
  //     editor: "678c1238c845ea00124f2134", // Ensure "editorId" matches backend
  //     page: 2,
  //     limit: 10,
  //     week:true,
  //     lastPage: 2
  //   };

  //  // Register Web Client with the query only once
  //  socket.emit("findPost", query);
  //  console.log("Web client registered:", query);

  //  // Listen for posts (this will be triggered after the server emits the `findPost` event)
  //  socket.on("searchPost", (data) => {
  //    console.log("Received posts:", data);
  //    // Handle the data (display posts or other UI logic)
  //  });

  //  // Optional: Listen for `findPost` (if you need to trigger this event for the posts)
  //  socket.on("findPost", (query) => {
  //    console.log("Received findPost event with query:", query);
  //    // Trigger the request for posts after receiving the event (optional)
  //    socket.emit("findPost", query);
  //  });

  // }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  
  
  return (
    <>
    {/* <Header/> */}

    {data.map((val, ind) => {
      return <Carousal 
      key={ind}
      heading={val.heading}
      logo={val.logo}
      role={val.role} 
      technology={val.technology} 
      description={val.description} 
      images={val.images}
      links={val.links}
      architecture={val.architecture}/>
    })}

    </>
  );
}

export default App;