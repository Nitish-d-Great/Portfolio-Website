import * as React from "react";
import { Link } from "react-router-dom";
import ScrambleText from "../ScrambleText";

// Styles
import "./index.scss";

const Header = ({ onThemeChange, theme, disableScramble = false }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 730 : true;

  return (
    <header className="header">
      {pathname === "/" ? (
        <div className="header-holder w-[100px] sm:w-[33%]">
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text={`Based in`}
              className="scramble-text"
              delay={1.5}
            />{" "}
            <strong className="underline cursor-pointer">
            <small className="sm:text-[18px] text-[14px]">
            {!isMobile ? (
              <a
                 href="https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh,+India/@26.449923,80.331874"
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-pointer inline-block"
              >
              <ScrambleText
                text={"Kanpur, India"}
                className="scramble-text"
                duration={3}
              />
            </a>
          ) : (
          <a
            href="https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh,+India/@26.449923,80.331874"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer inline-block"
          >
          <ScrambleText
            text={"India"}
            className="scramble-text"
            duration={3}
          />
        </a>
       )}
      </small>

            </strong>
          </p>
          <br />
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text="Switch to"
              className="scramble-text"
              duration={3.5}
            />
            <strong >
              <span onClick={onThemeChange} className="underline cursor-pointer"
                style={{ display: 'inline-block',}}
            >
            <ScrambleText
                text={`${theme === "dark" ? "Light" : "Dark"} mode`}
                className="scramble-text"
                duration={3.9}
              />
              </span>
            </strong>
          </p>
        </div>
      ) : (
        <p className="w-[100px] sm:w-[33%]">
          {!isMobile ? (
            <Link to="/" className="sm:text-[18px] text-[14px]">
              {!disableScramble ? (
                <ScrambleText
                  text={`<- back to home`}
                  className="scramble-text"
                  duration={2}
                />
              ) : (
                <>{`<- back to home`}</>
              )}
            </Link>
          ) : (
            <Link to="https://nitishgupta10.netlify.app/">
              <ScrambleText
                text={`<- back`}
                className="scramble-text sm:text-[18px] text-[14px]"
                duration={2}
              />
            </Link>
          )}
        </p>
      )}
      

      <ul className="header-list w-[100px] sm:w-[33%]">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="About"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>About</>
            )}
          </Link>
        </li>

        <li>
          <a href="https://github.com/Nitish-d-Great" target="_blank">
            {!disableScramble ? (
              <ScrambleText
                text="Projects"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Experiments</>
            )}
          </a>
        </li>
        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Know More"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Know More</>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
