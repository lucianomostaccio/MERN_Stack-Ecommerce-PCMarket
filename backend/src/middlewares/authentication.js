// import passport from "passport";
// import { Strategy as JwtStrategy } from "passport-jwt";
// import { JWT_PRIVATE_KEY } from "../config/config.js";

// passport.use(
//   "jwt",
//   new JwtStrategy(
//     {
//       jwtFromRequest: function (req) {
//         var token = null;
//         if (
//           req &&
//           req["signedCookies"] &&
//           req["signedCookies"]["authorization"]
//         ) {
//           token = req["signedCookies"]["authorization"];
//         }
//         return token;
//       },
//       secretOrKey: JWT_PRIVATE_KEY,
//     },
//     (user, done) => {
//       done(null, user);
//     }
//   )
// );

// export async function authenticateWithJwt(req, res, next) {
//   // Check if the JWT token is present in the cookies
//   const token = req.signedCookies.authorization;

//   if (!token) {
//     // If there is no token, the user is not authenticated
//     // Perform an action here, such as redirecting the user to the login page or pass it to the next middleware
//     return next();
//   } else {
//     // If there is a token, proceed with authentication
//     passport.authenticate("jwt", { failWithError: true, session: false })(
//       req,
//       res,
//       (error) => {
//         if (error) {
//           // If there is an error during authentication, pass it to the next middleware
//           const typedError = new Error("authentication error");
//           typedError["type"] = "FAILED_AUTHENTICATION";
//           return next(typedError);
//         } else {
//           // If authentication is successful, pass to the next middleware
//           return next();
//         }
//       }
//     );
//   }
// }

// export const authentication = passport.initialize();
