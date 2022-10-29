import { useSecretCode } from "@/hooks/useSecretCode";
import Path from "@/routes/paths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CheatCode__SignIn = () => {

    const code = useSecretCode(["ArrowUp", "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", ]);
    const navigate = useNavigate();

    useEffect(() => {
        if (code) {
            navigate(Path.Auth.SignIn)
        }
    }, [code])
    return null;

}

const HomePage = () => {

    const handleMouseMovement = (e: any) => {
        const el = document.getElementsByClassName("homePage")[0];
        const d = el!.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));

        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.documentElement.style.setProperty("--scale", "1.6");
        document.documentElement.style.setProperty("--x", x / 2 + "px");

        document.documentElement.style.setProperty("--y", y / 2 + "px");
    };

    const handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", "1");
        document.documentElement.style.setProperty("--x", "0");
        document.documentElement.style.setProperty("--y", "0");
    };

    return (
        <div 
            className="homePage"
            onMouseMove={handleMouseMovement}
            onClick={handleMouseLeave} 
        >
            <img className="backgroundImg" alt="" />
            <div className="title">
                <h1>Share Your Stream</h1>
                <p>An enhancer for Spotify & YouTube</p>
            </div>
            <CheatCode__SignIn />
        </div>
    )
}

export default HomePage;