"use client";

import { Spinner } from "@/components/common";
import { useSocialAuth } from "@/hooks";
import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";

const page = () => {
  const [facebookAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(facebookAuthenticate, "facebook");

  return (
    <div className="my-8">
      <Spinner lg />
    </div>
  );
};

export default page;
