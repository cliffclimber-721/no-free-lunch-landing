import AboutComponent from "../src/components/AboutComponent";
import BlogComponent from "../src/components/BlogComponent";
import Drops from "../src/components/Drops";
import ServicesComponent from "../src/components/ServicesComponent";
import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";
import Layout from "../src/layout/Layout";
import { useTranslation } from "next-i18next";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Governance from "../src/components/Governance";
import Roadmap from "./roadmap";
import Timeline from "../src/components/Timeline";
import Vision from "../src/components/Vision";
import Team from "../src/components/Team";

const Index = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const applyURL = "https://tally.so/r/mYjMbB";
  return (
    <Layout pageName={"Home Static"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/hero_bg.jpg" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title">No Free Lunch</h2>
              <p className="fn_desc fn_animated_text">{t("hero_main")}</p>
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      <AboutComponent />
      <Governance />
      {/* <Drops /> */}
      {/* <WhyChooseUsComponent /> */}
      <Vision />
      <ServicesComponent />
      <Team />
      {/* !Investor Section */}
      {/* Blog Section */}
      {/* <BlogComponent /> */}
      <div>
        <button type="applyBtn" id="applyCom" onClick={() => {window.open(applyURL)}}>Apply for NFL❗️</button>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Index;
