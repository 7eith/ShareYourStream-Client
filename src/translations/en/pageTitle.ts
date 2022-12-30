import Path from "@/routes/paths";

const PageTitleTranslations = {
    "/": "Share Your Stream",

    /**
     * @Auth
     */

    "/auth": "",
    "/auth/signIn": "Sign In",
    "/auth/signUp": "Sign Up",
    "/auth/passwordForgot/": "Password Forgot",

    "/auth/discord": "Sign using Discord",
    "/auth/spotify": "Sign using Spotify",

    /**
     * @Dashboard
     */

    "/app/home": "Share Your Stream",

    "/app/profile": "Profile",
    "/app/profile/@me": "Profile • Seith",

    "/app/streams/history": "Listening history",

    "/app/tools/": "Tools",
    "/app/tools/exportSaved": "Export saveds songs"
};
  
export default PageTitleTranslations;
  