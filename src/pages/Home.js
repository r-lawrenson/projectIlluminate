import { SignUp } from "./SignUp"

export const Home = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={<SignUp />}>Sign Up</button>
            <button>Log In</button>
            <h1>"YOU ARE MORE PRECIOUS TO THIS WORLD THAN YOU'LL EVER KNOW"</h1>
        </div>
    )
}