import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const useSocialAuth = (authenticate: any, provider: string) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParamas = useSearchParams();

  const effectRan = useRef(false);

  useEffect(() => {
    const state = searchParamas.get("state");
    const code = searchParamas.get("code");

    if (state && code && !effectRan.current) {
      authenticate({ provider, state, code })
        .unwrap()
        .then(() => {
          dispatch(setAuth());
          toast.success("Logged in");
          router.push("/dashboard");
        })
        .catch(() => {
          toast.error("Failed to log in");
          router.push("/auth/login");
        });
    }

    return () => {
      effectRan.current = true;
    };
  }, [authenticate, provider]);
};

export default useSocialAuth;
