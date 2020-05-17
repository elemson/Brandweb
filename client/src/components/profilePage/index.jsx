import React from "react";
import ProfileFooter from "./ProfileFooter";
import ProfilePage from "./ProfilePage";
import HomeTab from "./HomeTab";

export default function ProfileData() {
  return (
    <div>
      <div className="container">
        <header id="main-header">
          <ProfilePage />
          {/* <HomeTab /> */}
          <ProfileFooter />
        </header>
      </div>
    </div>
  );
}
