import { connect as connectToMongoose } from "mongoose";
import {
  EXECUTION_MODE,
  MONGODB_CNX_STR,
  MONGO_URL,
} from "../config/config.js";
// import Logger from "../utils/logger.js";

// initialize server
export async function connect() {
  // @ts-ignore
  if (EXECUTION_MODE === "online") {
    try {
      // @ts-ignore
      await connectToMongoose(MONGO_URL);
      // await connectToMongoose(MONGODB_CNX_STR)
      //   Logger.info(`connected to DB: "${MONGO_URL}"`);
      //   Logger.debug(`connected to DB: "${MONGO_URL}"`);
      console.log(`connected to DB: "${MONGO_URL}"`);
    } catch (error) {
      console.error("Error connecting to DB:", error);
    //   Logger.error("Error connecting to DB:", error);
    //   console.error("Error connecting to DB:", error);
    }
  } else {
    console.error("working with local files persistence");
    // Logger.info("working with local files persistence");
    // Logger.debug("working with local files persistence");
  }
}
