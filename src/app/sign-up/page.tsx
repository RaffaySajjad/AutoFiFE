"use client";
import { useState } from "react";
import AuthButton from "../components/auth-button";
import AuthHeader from "../components/auth-header";
import AuthImage from "../components/auth-image";
import AuthInputField from "../components/auth-input";
import TopSection from "../components/auth-top-section";
import NeedHelp from "../components/need-help";
import classes from "./sign-up.module.css";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const redirectToLogin = () => {
    router.push("sign-in");
  };
  return (
    <div className={classes.container}>
      <AuthImage />
      <div className={classes.signUpContainer}>
        <TopSection
          textRight="Already a Member?"
          btnText="LOG IN NOW"
          onClick={redirectToLogin}
        />
        <div className={classes.subContainer}>
          <AuthHeader
            title="Become an exclusive member"
            subTitle="Sign Up and Join the partnership"
          />
          <div className={classes.fields}>
            <AuthInputField
              iconImg="/images/icon-user.png"
              value={name}
              placeholder="Johnson Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <AuthInputField
              iconImg="/images/message.png"
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInputField
              iconImg="/images/password.png"
              value={password}
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AuthButton btnText="Become a Member" />
          </div>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}
