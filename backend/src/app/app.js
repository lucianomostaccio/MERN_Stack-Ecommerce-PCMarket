import express from "express";
// import { webRouter } from "../routers/web/web.router.js";
// import { apiRouter } from "../routers/api/api.router.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import errorMiddleware from "../middlewares/errorMiddleware.js";
// import { cookies } from "../middlewares/cookies.js";
// import { authentication } from "../middlewares/authentication.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

// handlebars engine & templates:
// app.engine(
//   "handlebars",
//   engine({
//     helpers: handlebarsHelpers,
//   })
// );
const appViewsPath = path.join(__dirname, "..", "views");
app.set("views", appViewsPath);

app.set("view engine", "handlebars");

// middlewares
// app.use(cookies);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "static"))); 
// app.use(authentication);

// app.use(errorMiddleware);

// routers
// app.use("/", webRouter);
// app.use("/api", apiRouter);
