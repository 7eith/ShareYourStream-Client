
const Path = {

    Home: { Root: "/" },

    Auth: {
        Root: "/auth",
        SignIn: "/auth/signIn",
        SignUp: "/auth/signUp",

        PasswordForgot: {
            Root: "/auth/passwordForgot",
            Change: "/auth/passwordForgot/:token"
        }
    },

    Dashboard: { 
        Root: "/app",
        Home: "/app/home",

        Profile: {
            Root: "/app/profile",
        }
    },


}

export default Path;