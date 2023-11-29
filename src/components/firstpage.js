import Login from "./auth/login";
import MainNavbar from "./mainNavbar";

function FirstPage(){
    return(
        <div className="bg-primary text-white">
            <MainNavbar />
            <Login />
            <br /><br /><br />
            <br />
            <br /><br /><br /><br /><br />

        </div>
    )
}
export default FirstPage;