import { FaGoogle } from "react-icons/fa"
function Signup() {
    return (
        <div>
            <button
                onClick={() => window.location.href = "http://localhost:5000/auth/google"}
                className="w-full flex items-center justify-center gap-3 border py-3 rounded-md"
            >
                <img src={FaGoogle} alt="Google" className="w-5" />
                Continue with Google
            </button>
        </div>
    )
}
export default Signup