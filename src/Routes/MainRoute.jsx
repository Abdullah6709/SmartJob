// src/Routes/MainRoute.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AllJdPost from "../Pages/Admin/All JD Post/AllJdPost";
import RecruiterDashboard from "../Pages/Requiter/RequiterDashboard";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import RequiterList from "../Pages/Admin/RequiterList/RequiterList";
import ActiveRecruiter from "../Pages/Admin/Active Requiter/ActiveRequiter";
import DactiveRecruiter from "../Pages/Admin/Dactive Requiter/DactiveRequiter";
import BlockedRecruiter from "../Pages/Admin/Blocked Requiter/BlockedRequiter";
import JdPostByAdmin from "../Pages/Admin/JD Post Admin/JdPostByAdmin";
import CreateRequiter from "../Pages/Admin/Careate Requiter/CreateRequiter";
import JDPost from "../Pages/Admin/JD Post/JDPost";
import JobPostByAdmin from "../Pages/Admin/JD Post Admin/Form/JobPostByAdmin";
import JobDetailPage from "../Pages/Admin/JD Post Admin/JobDetailPage";

const NotFound = () => <h2>404 - Page Not Found</h2>;

const MainRoute = () => {
  const role = localStorage.getItem("userRole");

  return (
    <Routes>
      {/* Admin protected routes */}
      {role === "admin" ? (
        <Route path="/" element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/alljd" element={<AllJdPost />} />
          <Route path="/recruiterlist" element={<RequiterList />} />
          <Route path="/activerecruiter" element={<ActiveRecruiter />} />
          <Route path="/deactiverecruiter" element={<DactiveRecruiter />} />
          <Route path="/blockrecruiter" element={<BlockedRecruiter />} />
          <Route path="/jdpostadmin" element={<JdPostByAdmin />} />
          <Route path="/createrecruiter" element={<CreateRequiter />} />
          <Route path="/jdpost" element={<JDPost />} />
          <Route path="/jobpostbyadmin" element={<JobPostByAdmin />} />

          <Route path="/job/:id" element={<JobDetailPage />} />
        </Route>
      ) : (
        // if non-admin tries to access /dashboard, redirect
        <Route path="/dashboard" element={<Navigate to="/login" />} />
      )}

      {/* Recruiter route */}
      <Route
        path="/recruiter-dashboard"
        element={
          role === "recruiter" ? (
            <RecruiterDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
