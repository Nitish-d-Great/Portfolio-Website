import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shortcut from "./components/Shortcut";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import SplitTextAnimation from "./components/SplitText";
import "./styles/global.scss";
import "./styles/index.scss";
import { articles as importedArticles } from "./data/blog";
import Avatar from "./components/Avatar";
import Layout, { State } from "./components/Layout";
import ScrambleText from "./components/ScrambleText";
import About from "./views/about";
import Utilities from "./views/utilities";
import NotFound from "./views/404";

const articles = importedArticles || [];

const Home = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const { theme, onThemeChange } = React.useContext(State);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home overflow-hidden">
        <Loader isOpened={isOpened} duration={1} />
        <Header hideShortcut onThemeChange={onThemeChange} theme={theme} />
        <main className="overflow-hidden">
          <div className="avatar-section">
            <Avatar theme={theme} />
          </div>
          <div className="banner-holder z-50 pt-[100px] sm:pointer-events-none fixed flex justify-center items-center">
            <h1 className="banner-title flex text-[var(--tw-text-gray-primary)] flex-col items-end h-full text-right font-bold w-[300px] flex-shrink-0">
              
              <ScrambleText
                text="Nitish"
                className="scramble-text min-w-[400px] name-mono-bold"
                duration={3}
                placeholder="."
              />
              <ScrambleText
                text="Gupta"
                className="scramble-text min-w-[400px] name-mono-bold"
                duration={3}
                placeholder="."
              />
            </h1>
            <span className="w-[820px]"> </span>
            <div className="banner-description w-[350px] mt-[0px] text-left 2xl:mt-[-30px] flex justify-end flex-col pl-[80px] items-start">
              <p className="mb-4 sm:mb-7">
                A{" "}
                <strong className="text-[var(--tw-text-gray-primary)] font-bold">
                  <ScrambleText
                    text="Back-end Web3 Engineer"
                    className="scramble-text inline-block"
                    duration={2}
                    placeholder="."
                  />
                </strong>{" "}
                having fun powering decentralized futures
              </p>
              <Shortcut text="to start" />
            </div>
          </div>
          <div className="hire-me">
          <p className="z-[100] sm:text-[18px] text-right text-underline sm:bottom-[6px] text-[14px] right-[20px] text-[var(--tw-text-gray-secondary)] bottom-[6px]">
            <ScrambleText
              text={`Want to hire me?`}
              className="scramble-text"
              duration={2}
            />
            <a className="underline " href="mailto:nit.nitish02@gmail.com">
              <ScrambleText
                text={`nit.nitish02@gmail.com`}
                className="scramble-text"
                duration={2}
              />
            </a>
          </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Layout>
);

export default App; 