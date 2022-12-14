import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    // <div className="footer">
    //   <ul className="companyInfo">
    //     <li>GameUs</li>
    //     <li>대표이사: 노한서, 서정선, 양준호, 황성민</li>
    //     <li>062-655-3506</li>
    //     <li>사업자등록번호:123-45-67890</li>
    //     <li>주소:광주광역시 동구 예술길 31-15 </li>
    //   </ul>
    //   <div className="footerCopyright">
    //     Copyright ⓒ meple connect Co.,Ltd. All rights reserved.
    //   </div>
    // </div>
    <div className="footer">
      <ul className="companyInfo">
        <li>
          대표: 노한서, 서정선, 양준호, 황성민 | 사업자등록번호:123-45-67890
        </li>
        <li>전화: 062-655-3506 | 주소: 광주광역시 동구 예술길 31-15</li>
        {/* <li>사업자등록번호:123-45-67890</li>
        <li>주소:광주광역시 동구 예술길 31-15 </li> */}
      </ul>
      <div className="footerCopyright">
        Copyright ⓒ <strong>GameUs</strong> connect Co.,Ltd. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
