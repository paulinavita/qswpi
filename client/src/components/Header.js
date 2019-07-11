import React from "react";
import sw from "../assets/sw.png";
export default function Header() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <img alt="logo" style={{ maxHeight: "17vh" }} src={sw} />
      </div>
    </div>
  );
}
