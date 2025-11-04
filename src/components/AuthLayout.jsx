import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Check authentication logic
    if (authentication && !authStatus) {
      navigate("/login");
      return; // prevent setLoader from running
    } else if (!authentication && authStatus) {
      navigate("/");
      return;
    }

    // If everything is okay, stop loader
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  // Show loading screen until logic completes
  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
      </div>
    );
  }

  // Render protected content
  return <>{children}</>;
}
