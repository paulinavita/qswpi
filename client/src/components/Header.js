import React from "react";
import qlue from "../assets/qlue.png";
import dv from "../assets/dv.png";
import sw from "../assets/sw.png";
export default function Header() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <img style={{ maxHeight: "17vh" }} src={sw} />
      </div>
    </div>
  );
}
