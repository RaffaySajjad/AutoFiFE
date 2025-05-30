"use client";
import { useState } from "react";
import AuthHeader from "../components/auth-header";
import AuthImage from "../components/auth-image";
import AuthInputField from "../components/auth-input";
import TopSection from "../components/auth-top-section";
import classes from "./sign-in.module.css";
import signUpClasses from "../sign-up/sign-up.module.css";
import NeedHelp from "../components/need-help";
import AuthButton from "../components/auth-button";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utilities/utilities";
import useLoginUser from "@/hooks/useLoginUser";
import LoadingSpinner from "../components/loading-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter();
  const { mutate: loginUser, isPending } = useLoginUser();

  const redirectToSignUp = () => {
    router.push("/sign-up");
  };

  let err = "";
  const validateEmailAddress = (value: string) => {
    err = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: err }));
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmailAddress(value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };
  const validateFields = () => {
    let isValid = true;
    const newErrors: { name?: string; email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required!";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return false;

    return true;
  };
  const handleLogin = () => {
    const formData = { email, password };
    if (validateFields()) {
      loginUser(formData, {
        onSuccess: () => {
          router.push("/");
          setIsButtonDisabled(true);
        },
      });
    }
  };
  return (
    <div className={classes.container}>
      <AuthImage />
      <div className={classes.signInContainer}>
        <TopSection
          textRight="Not a member yet?"
          btnText="JOIN NOW"
          onClick={redirectToSignUp}
        />
        <div className={classes.subContainer}>
          <AuthHeader title="Welcome Back" subTitle="Login to continue" />
          <div className={classes.fields}>
            <div className={signUpClasses.inputContainer}>
              <AuthInputField
                iconImg="/images/message.png"
                value={email}
                placeholder="example@email.com"
                onChange={handleEmail}
                className={errors.email ? signUpClasses.redBorder : undefined}
              />
              {errors.email && (
                <p className={signUpClasses.error}>{errors.email}</p>
              )}
            </div>
            <div className={signUpClasses.inputContainer}>
              <AuthInputField
                iconImg="/images/password.png"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                className={
                  errors.password ? signUpClasses.redBorder : undefined
                }
              />
              {errors.password && (
                <p className={signUpClasses.error}>{errors.password}</p>
              )}
            </div>
            <AuthButton
              btnText="Proceed to my Account"
              onClick={handleLogin}
              disabled={isPending || isButtonDisabled}
            />
            {isPending && <LoadingSpinner color="var(--color-black100)" />}
            <ToastContainer />
          </div>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}
