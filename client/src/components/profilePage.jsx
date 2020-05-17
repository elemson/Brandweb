import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../redux/actions/profileActions";
import { withRouter } from "react-router-dom";

function ProfilePage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profileData = useSelector((state) => state.profile.profile);
  const userData = useSelector((state) => state.auth.user);

  console.log(profileData);
  console.log(userData);

  return <div></div>;
}

export default withRouter(ProfilePage);
