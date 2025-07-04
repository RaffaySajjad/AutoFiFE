import headings from "@/styles/typography.module.css";
import Image from "next/image";
import SectionTitle from "../section-title/section-title";
import classes from "./what-our-customers-say.module.css";
import Customer from "@/assets/images/general/customer.png";
export default function Customers() {
  return (
    <div className={classes.container}>
      {/* <ButtonNavigate type="prev" />
      <ButtonNavigate type="next" /> */}

      <SectionTitle
        title="What our customers say"
        showButton={false}
        backgroundColor="var(--color-white300)"
        ratingsText="Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews"
      />
      <div className={classes.reviewContainer}>
        <div className={classes.subContainer}>
          <Image
            src={Customer}
            alt="customer"
            width={448}
            height={470}
            loading="lazy"
            placeholder="blur"
          />
          <div className={classes.review}>
            <div className={classes.rating}>
              <div className={classes.stars}>
                <span className={classes.star} />
                <span className={classes.star} />
                <span className={classes.star} />
                <span className={classes.star} />
                <span className={classes.star} />
              </div>
              <div className={classes.ratingContainer}>
                <p>5.0</p>
              </div>
            </div>

            <div className={classes.customer}>
              <p className={headings.brandText}>ALI TUFAN</p>
              <p className={headings.criteriaText}>Designer</p>
            </div>
            <p className={headings.review}>
              I&apos;d suggest Macklin Motors Nissan Glasgow South to a friend
              because I had great service from my salesman Patrick and all of
              the team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
