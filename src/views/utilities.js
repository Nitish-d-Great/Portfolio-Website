import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Files
import NitishCV from "../files/Nitish-Gupta-Resume.pdf";

// Styles
import "../styles/global.scss";
import "../styles/actions.scss";
import ScrambleText from "../components/ScrambleText";

const Actions = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />

      <div className="actions">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header hideShortcut={true} goBackToHome={true} />
        <main>
          <Container>
            <ul className="actions-list md:pl-5">
              <li>
                <a
                  className="hover:text-[var(--tw-text-gray-primary)]"
                  href={NitishCV}
                  download={true}
                  target="_blank"
                >
                  <ScrambleText
                    text="Download CV"
                    className="scramble-text"
                    duration={1}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nitish-gupta-2676b5250/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Connect on Linkedin"
                    className="scramble-text"
                    duration={1.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nitish-d-Great"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Explore Github"
                    className="scramble-text"
                    duration={1.6}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Book a Meeting"
                    className="scramble-text inline-block"
                    duration={1.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="invite to -> nit.nitish02@gmail.com"
                      className="scramble-text"
                      duration={1.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              
              <li>
                {" "}
                <a
                  href="mailto:nitnitish02@gmail.com"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Send me an Email"
                    className="scramble-text"
                    duration={2.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              
              <li>
                <a
                  href="https://x.com/nit_nitish02"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Ping me on X"
                    className="scramble-text inline-block"
                    duration={2.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text=" "
                      className="scramble-text"
                      duration={2.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nitish_d_great/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Follow me on Instagram"
                    className="scramble-text inline-block"
                    duration={2.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text=" "
                      className="scramble-text"
                      duration={2.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </Container>
        </main>
        <br />
        <br />
        <br />
        <br />
        <Note />
      </div>
    </>
  );
};

export default Actions;
