import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import RecommendIcon from "@mui/icons-material/Recommend";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">EXPERIENCE</h1>
        <p className="pl-desc">
          <SupervisedUserCircleIcon />
          สร้างเว็บไซต์เพื่อช่วยแก้ปัญหาตู้กดน้ำที่คณะพังหรือต้องการการซ่อมบำรุงโดยการให้เพื่อนๆนักศึกษาในคณะสามารถกดรายงานได้ในเว็บไซต์
          ”ตู้น้ำที่ดี” เป็นโปรเจคจากคณะที่มหาลัยโดยดำเนินการโดยสมาชิก 4 คน
          ผมดูแลในส่วนของการพัฒนาเว็บไซต์ทั้งหมดใช้เวลาทั้งหมด 5
          สัปดาห์ในการพัฒนา เป็นโปรเจคแรกที่ทำให้ผมได้พัฒนาเว็บไซต์
          <br></br>
          <SupervisedUserCircleIcon />
          สร้างเว็บไซต์เพื่อรองรับคนตกงานจากสถานการณ์โควิดด้วยเว็บไซต์ “Job
          findder”
          เว็บไซต์ที่จะเป็นตัวกลางให้คนที่ต้องการหางานหรือคนที่ต้องการจ้างงานสามารถโพสสิ่งที่ต้องการได้
          เป็นโปรเจคจากคณะที่มหาลัยโดยดำเนินการโดยสมาชิก 2
          คนผมดูแลในส่วนของการพัฒนาเว็บไซต์ทั้งหมด ใช้เวลาทั้งหมด 10
          สัปดาห์ในการพัฒนา จากโปรเจคนี้ทำให้ผมได้พัฒนาทั้ง front end และ
          backend และทำให้ผมเริ่มชอบในการเป็น full stack developer
          <br></br>
          <SettingsApplicationsIcon />
          กำลังพัฒนาเว็ปไซด์ร้านค้า
          <br></br>
          <RecommendIcon />
          ประสบการณ์ในการออกแบบฐานข้อมูลโดยใช้ SQL และ PHP เขียนบน Laravel
          framework
          <br></br>
          <RecommendIcon />
          ประสบการณ์ในการทำ mobile app ลงบน android ด้วย Android Emulator
          <br></br>
          <RecommendIcon />
          ประสบการณ์ในการทำงานกลุ่มในรูปแบบ Agile model Spiral model, Waterfall
          model
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
