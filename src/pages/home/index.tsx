import { useSecretCode } from "@/hooks/useSecretCode";
import Path from "@/routes/paths";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const KeyboardHandler = () => {

    const code = useSecretCode(["ArrowUp", "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", ]);
    const navigate = useNavigate();

    useEffect(() => {
        if (code) {
            navigate(Path.Auth.SignIn)
        }
    }, [code, navigate])
    
    return null;
}

const HomeBanner = () => {

    return (
        <div 
            className="homeBanner"
            style={{
                background: `url('${process.env.PUBLIC_URL}/assets/images/bannerBackground.png')`
              }}
        >
            <div className="bannerHeader">
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} 
                    alt="S" 
                />
                <div className="bannerNavbar">
                    <div className="NavLinks">
                        <NavLink to="/tools">Tools</NavLink>
                        <NavLink to="/tools">Features</NavLink>
                    </div>
                    <NavLink to={Path.Auth.SignIn} className="componentPrimaryButton">Sign In</NavLink>
                </div>
            </div>
            <div className="bannerTitle">
                <div className="title">discover a new music experience</div>
                <div className="subTitle">using our tools to increase your playlists</div>
            </div>
        </div>
    )
}

const HomePage = () => {

    return (
        <div className="landingPage">
            <HomeBanner />
        </div>
    )
}

export default HomePage;