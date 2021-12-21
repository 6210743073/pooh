import Me from "../../img/me.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./intro.css";
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div class="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">สวัสดีครับผมชื่อ</h2>
          <h1 className="i-name">ภูมิพันธ์ สืบภา</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full stack developer</div>
              <div className="i-title-item">Software Engineer </div>
              <div className="i-title-item">Frontend developer </div>
              <div className="i-title-item">Backend developer </div>
            </div>
          </div>
          <p className="i-desc">
            ผมต้องการจะเป็นนักพัฒนา Website ที่ดีทั้งในส่วน frontend developer,
            backend developer หรือ full stack developer<br></br>
            คติประจำใจของผมคือ ” Fail Fast, Fail Cheap, Fail Forward ”
          </p>
          <p className="i-desc">
            <div >
              <a 
                class="button-17"
                download=""
                href="assets/pdf/poohmipun CV.pdf"
              >
                Download CV
              </a>
            </div>
          </p>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={darkMode ? "white" : "black "}
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
      <div class="custom-shape-divider-top-1637671593"></div>
    </div>
  );
};

export default Intro;
