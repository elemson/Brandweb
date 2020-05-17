import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/actions/profileActions";
import { withRouter } from "react-router-dom";
import "./styles.css";

function ProfilePage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profileData = useSelector((state) => state.profile.profile);
  const userData = useSelector((state) => state.auth.user);

  console.log(profileData);
  console.log(userData);

  return (
    <>
      <div class="row no gutter">
        <div className="col-lg-4 col-md-5">
          <img src={`http:${profileData.avatar}`} alt="no Photo" />
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="d-flex flex-column">
            <div className="p-5 bg-dark text-white">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h1 class="display-4">{profileData.name}</h1>
                <div className="d-none d-md-block">
                  <a href="" className="text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 bg-black">{profileData.email}</div>
            <div>
              <div class="d-flex flex-row text-white align-items-stretch text-center">
                <div
                  class="port-item p-4 bg-primary"
                  data-toggle="collapse"
                  data-target="#home"
                >
                  <i className="fas fa-home fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Home</span>
                </div>
                <div
                  class="port-item p-4 bg-success"
                  data-toggle="collapse"
                  data-target="#resume"
                >
                  <i className="fas fa-home fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Resume</span>
                </div>
                <div
                  class="port-item p-4 bg-warning"
                  data-toggle="collapse"
                  data-target="#resume"
                >
                  <i className="fas fa-home fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ProfilePage);
