import React from "react";
import { CDBFooter, CDBBox } from 'cdbreact';
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

function Footer(){
    return(
      <CDBFooter className="footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%', height: "100%" }}
      >
        <CDBBox style={{display: "flex", alignItems: "center"}}>
          <span className="ml-4" style={{ color: "#fa7670"}}>&copy; iReporter. 2022 All rights reserved.</span>
        </CDBBox>
        <CDBBox style={{ display: "flex"}}>
        <BsFacebook style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        <BsTwitter style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        <BsInstagram style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        <FaTiktok style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        <BsYoutube style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        <BsLinkedin style={{ marginRight: "30px", cursor: "pointer", color: "#fa7670"}}/>
        </CDBBox>
      </CDBBox>
    </CDBFooter>

    )
}
export default Footer;