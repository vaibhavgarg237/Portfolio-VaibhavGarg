import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import http from "http";

import { initRound, movePointerRound } from "ezpointers";
initRound();
movePointerRound({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function requestHandler(req, res) {
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>
//   );

//   res.write(html);
//   res.end();
// }

// http.createServer(requestHandler).listen(3000);
