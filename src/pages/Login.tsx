import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { FormEvent } from "react"
import { useLoader, useLoaderUpdate } from "../LoaderContext";
import Progress from "../components/Progress";

export default function Login() {
    const navigate = useNavigate()
    const loader = useLoader()
    const toggleLoader = useLoaderUpdate()

    const gSignIn = async () => {
        const success = await signInWithGoogle()
        if (success) {
            navigate("/trim")
        }
    }

    const signIn = async (ev: FormEvent) => {
        toggleLoader()
        ev.preventDefault()
        const form = ev.target as HTMLFormElement
        const formFields = new FormData(form)
        
        // add client-side validation
        const payload = {
            email: formFields.get("email") as string,
            password: formFields.get("password") as string
        }

        const user = await logInWithEmailAndPassword(payload.email, payload.password)
        console.log(user)
        toggleLoader()
        if (user) {
            navigate("/trim")
        }
    }

    return <>
          <Progress isAnimating={loader?.isAnimating} key={loader?.key} />
             <div className="flex justify-center mt-4">
                <div className="flex justify-between w-1/6">
                    <Button onClick={gSignIn}> 
                        <img className="inline" src="/icons/google.svg" />Google
                    </Button>
                    <Button> 
                        <img className="inline" src="/icons/apple.svg" />Apple
                    </Button>
                </div>
               
            </div>

            <div id="action">
                <form onSubmit={signIn}>
                    <label htmlFor="username or email address"></label>
                    <input type="text" id="fname" name="email" placeholder="Email address or username" /><br />
                
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder="Password" /><br />
                    <Button>Log in</Button>
                </form>
                
                <a href="password.html">htmlForgot your password?</a><br />
        
                <h5 >Don't have an account? <button type ="button" className="log">
                    <a  href="sign.html">Sign up</a>
                    </button>
                </h5>
        
                <p>By signing up, you agree to <br />
                    Scissor's Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
          </div>
    </>
}