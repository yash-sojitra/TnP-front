import logo from "../../assets/iiitLogo.png";
import Button from "../LandingPage/utils/Button.jsx";
export default function Header(){
    return (
        <div className="mx-32 flex justify-between my-4">
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} className=" w-full h-full max-w-28 max-h-28" alt="logo" />
                </div>
                <div>
                    <span className="my-8 text-center text-3xl font-bold">Training and Placement Cell,<br />IIIT Surat</span>
                </div>
                 
            </div>
            <div className="flex items-center ">
                <Button>Login</Button> 
            </div>      
        </div>
    )
}