import { GoogleLogin } from 'react-google-login';

const clientId = "193812421903-ujgmv0d4t6ss7td366vtt1hk7le0t2b6.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Logout Failed! res: ", res);
    }
    return (
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}

            />
        </div>
    )
}

export default Login;