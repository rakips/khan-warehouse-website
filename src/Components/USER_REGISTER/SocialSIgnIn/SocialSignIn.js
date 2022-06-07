import axios from "axios";
import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, Guser, Gloading, Gerror] = useSignInWithGithub(auth);

    // redirection
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    // if loading
    if (loading || Gloading) {
        return <Spinner></Spinner>;
    }

    //if user logged in succesfully
    if (user || Guser) {
        axios
            .post("https://quiet-springs-92968.herokuapp.com/createToken", {
                email: user?.user?.email || Guser?.user?.email,
            })
            .then((res) => {
                localStorage.setItem("accessToken", res?.data);
            });

        toast.success(`Log In Succesfull 😃 ${user?.user?.displayName ? user?.user?.displayName : ""}`, {
            position: "top-center",
            autoClose: 2000,
        });

        navigate(from, { replace: true });
    }

    //if there any error occurs
    if (error || Gerror) {
        toast(`${error?.message || Gerror?.message}`, {
            autoClose: 2100,
        });
    }

    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <hr className="w-full" />
                <p className="px-3">OR</p>
                <hr className="w-full" />
            </div>

            <div className="flex items-center justify-center space-x-5 mb-4">
                <div onClick={() => signInWithGoogle()}>
                    <img
                        className="w-12 cursor-pointer"
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                        alt=""
                    />
                </div>
                <div onClick={() => signInWithGithub()}>
                    <img
                        className="w-12 cursor-pointer"
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default SocialSignIn;