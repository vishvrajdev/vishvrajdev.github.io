import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

import HireMeFAB from "../components/HireMeFAB/HireMeFAB";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <ScrollProgress />
            <Header />
            <Greeting />
            <AboutMe />
            <Skills />
            <Education />
            <WorkExperience />
            <StartupProject />
            <Achievement />
            <Contact />
            <Footer />
            <Top />
            <HireMeFAB isDark={isDark} />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
