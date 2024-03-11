import { GoogleLogout } from 'react-google-login';

const clientId = "193812421903-ujgmv0d4t6ss7td366vtt1hk7le0t2b6.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out successful!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}

            />
        </div>

    )
}

export default Logout;