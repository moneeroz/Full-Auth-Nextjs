"use client";

import { continueWithFacebook, continueWithGoogle } from "@/utils";
import { SocialButton } from ".";
import { ImGoogle, ImFacebook } from "react-icons/im";

const SocialButtons = () => {
  return (
    <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:justify-between sm:items-center">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-3" /> Google Signin
      </SocialButton>
      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook className="mr-3" /> Facebook Signin
      </SocialButton>
    </div>
  );
};

export default SocialButtons;
