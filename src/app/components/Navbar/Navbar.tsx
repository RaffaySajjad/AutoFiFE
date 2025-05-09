import React from "react";
import Image from "next/image";
import classes from "./navbar.module.css";
import headings from "@/styles/typography.module.css";
import useTranslation from "@/i18n";
import ButtonPrimary from "../Buttons/Primary/primary";
import { useRouter } from "next/navigation";
type NavbarProps = {
  backgroundColor?: string;
};
export default function Navbar({
  backgroundColor = "transparent",
}: NavbarProps) {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className={classes.navbar} style={{ backgroundColor }}>
      <Image
        src="/images/logo.png"
        className={classes.logo}
        alt="logo"
        width={108}
        height={26}
        onClick={() => router.push("/")}
      />
      <div className={classes.navList}>
        <div className={classes.navContainer}>
          <h3 className={`${headings.navElement} ${classes.white}`}>
            {t("navbar.home")}
          </h3>
          <Image src="/images/expand.png" alt="expand" width={8} height={4} />
        </div>
        <div className={classes.navContainer}>
          <h3 className={`${headings.navElement} ${classes.white}`}>
            {t("navbar.listings")}
          </h3>
          <Image src="/images/expand.png" alt="expand" width={8} height={4} />
        </div>
        <div className={classes.navContainer}>
          <h3 className={`${headings.navElement} ${classes.white}`}>
            {t("navbar.blog")}
          </h3>
          <Image src="/images/expand.png" alt="expand" width={8} height={4} />
        </div>
        <div className={classes.navContainer}>
          <h3 className={`${headings.navElement} ${classes.white}`}>
            {t("navbar.pages")}
          </h3>
          <Image src="/images/expand.png" alt="expand" width={8} height={4} />
        </div>
        <h3 className={`${headings.navElement} ${classes.white}`}>
          {t("navbar.about")}
        </h3>
        <h3 className={`${headings.navElement} ${classes.white}`}>
          {t("navbar.contact")}
        </h3>

        <div className={classes.navContainer}>
          <Image src="/images/person.png" alt="person" width={14} height={15} />
          <h3 className={`${headings.navElement} ${classes.white}`}>
            {t("navbar.signIn")}
          </h3>
        </div>
        <ButtonPrimary btnText={t("navbar.submitBtn")} />
      </div>
    </div>
  );
}
