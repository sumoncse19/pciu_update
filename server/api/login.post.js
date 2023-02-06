import useFirebaseServer from "~~/composables/useFirebaseServer";
import { getAuth } from "firebase-admin/auth";
// import { setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const { app } = useFirebaseServer();
  const { idToken } = await readBody(event);
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  try {
    const sessionCookie = await getAuth().createSessionCookie(idToken, {
      expiresIn,
    });
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    setCookie(event, "session", sessionCookie, options);
    return { statusCode: 200, body: JSON.stringify({ status: "success" }) };
  } catch (e) {
    console.log("error: ", e);
    return {
      statusCode: 401,
      error: "UNAUTHORIZE_REQUEST",
    };
  }
});
