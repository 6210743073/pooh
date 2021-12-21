import Rock from "../../img/rock.png";

import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Rock} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">PROFILE</h1>
        <p className="a-sub">ผมพยายามพัฒนาตัวเองอย่างสม่ำเสมอ</p>
        <p className="a-desc">
          ผมชอบการทำงานเป็นทีมเพราะต้องการแลกเปลี่ยนความคิดกับผู้อื่น
          ผมอยากฟังความคิดเห็นจากคนอื่นพื่อนำมาปรับใช้ในการพัฒนาตัวเอง
          ผมหวังว่าเว็บไซต์ที่ผมได้ร่วมพัฒนาจะสามารถเพิ่มความสุขให้อื่นๆได้
        </p>
        <h1 className="a-title">EDUCATION</h1>
        <img
          src="https://res.cloudinary.com/jobfindder/image/upload/v1639846122/FACULTY_OF_ENGINEERING_TH_u6przd.svg"
          alt=""
          className="a-award-img2"
        />
        <p className="a-sub">
          มหาวิทยาลัยธรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ (ปริญญาตรี โครงการพิเศษ)
          <br></br>
          GPA:2.15
        </p>
        <h1 className="a-title">SKILLS & COMPETENCIES</h1>
        <div className="a-award">
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845614/1_Y5S3wOm52_4iYusUagbEtw_v5s34k.jpg"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845617/1_HdzDRa1T389o2JpxaPJ6LA_utxhwc.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845620/laravel-php-framework_ibpz2c.jpg"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845623/1_g7IFrPbbrRktcsy5lGbNAA_tk9bpl.jpg"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845624/nodejs_logo_banner_01-600x314-1_vx9eg1.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845627/html_xrcoqp.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845629/Typescript_logo_2020.svg_aq6fcf.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845635/redux-logo-landscape_kix0nc.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845632/download_iuttbk.png"
            alt=""
            className="a-award-img"
          />
          <img
            src="https://res.cloudinary.com/jobfindder/image/upload/v1639845943/php_y3yuf8.jpg"
            alt=""
            className="a-award-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
