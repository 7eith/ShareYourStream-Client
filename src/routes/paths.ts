
const Path = {

    Home: { Root: "/" },

    Auth: {
        Root: "/auth",
        SignIn: "/auth/signIn",
        SignUp: "/auth/signUp",

        PasswordForgot: {
            Root: "/auth/passwordForgot",
            Change: "/auth/passwordForgot/:token"
        },

        OAuth: {
            DiscordCallback: "/auth/discord",
            SpotifyCallback: "/auth/spotify"
        }
    },

    Dashboard: { 
        Root: "/app",
        Home: "/app/home",

        Profile: {
            Root: "/app/profile",
            Me: "/app/profile/@me"
        },

        Tools: {
            Root: "/app/tools",
            ExportLikes: "/app/tools/exportLikes"
        },

        Streams: {
            Root: "/app/streams",
            History: "/app/streams/history",
            Charts: "/app/streams/charts"
        }
    },


}

export default Path;