import { useParams } from "react-router-dom";

const PasswordForgotChangePage = () => {

    const { token } = useParams();
    console.log(token)

    return (
        <div className="passwordForgotChangePage authPageContent">
            {/* Change Password, { token } */}
            <div className="header">
                Recovered your password ? 
            </div>
        </div>
    )
}

export default PasswordForgotChangePage;