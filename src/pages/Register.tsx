import { FormEvent, useContext } from "react"
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase"
import { User } from "../entity"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useLoader, useLoaderUpdate } from "../LoaderContext"
import Progress from "../components/Progress"

export default function Register() {
    const navigate = useNavigate()
    const loader = useLoader()
    const toggleLoader = useLoaderUpdate()

    const gSignIn = async () => {
        const success = await signInWithGoogle()
        if (success) {
            navigate("/trim")
        }
    }

    const signUp = async (ev: FormEvent) => {
        toggleLoader()
        ev.preventDefault()
        const form = ev.target as HTMLFormElement
        const formFields = new FormData(form)
        
        // add client-side validation
        const payload = {
            username: formFields.get("username"),
            email: formFields.get("email"),
            password: formFields.get("password")
        } as User

        const user = await registerWithEmailAndPassword(payload)
        console.log(user)
        toggleLoader()
        if (user) {
            navigate("/trim")
        }
    }

    return <main>
        <Progress isAnimating={loader?.isAnimating} key={loader?.key} />
        <div id="sign">
            <p>Sign up with:</p>
            
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
         
        </div>

        <div id="action">
            <form onSubmit={signUp}>
                <label htmlFor="fname"></label>
                <input type="text" id="fname" name="username" placeholder="Username" /><br/>

                <label htmlFor="lname"></label>
                <input type="text" id="name" name="email" placeholder="Email" /><br />

                <label htmlFor="lname"></label>
                <input type="password" id="password" name="password" placeholder="Password" /><br /> 

                <label htmlFor="lname"></label>
                <input type="password" id="retype password" name="retype password" placeholder="Retype Password" /><br />
  
                    <Button>
                        Sign Up
                    </Button>
                </form>

            <h5 >Already have an account? 
                <Link  to="/login">Log in</Link>
            </h5>

                <p>By signing up, you agree to <br />
        Scissor's Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
  </div>
    </main>
}