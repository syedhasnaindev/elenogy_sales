import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyUsers } from "services/userService";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      try {
        const response = await verifyUsers();

        const isAuthenticated = response.status;
        const isLoginPage = location.pathname.includes("/pages/authentication/simple/sign-in");

        if (isAuthenticated=="authenticated" && isLoginPage) {
          navigate("/dashboard"); // Redirect authenticated users away from login page
        } else if (!isAuthenticated && !isLoginPage) {
          navigate("/pages/authentication/simple/sign-in"); // Redirect non-authenticated users to login
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        navigate("/pages/authentication/simple/sign-in"); // Ensure user is redirected on failure
      }
    };

    checkAuthAndRedirect();
  }, [navigate, location.pathname]); // Dependency update to avoid unnecessary renders

  return children;
};

export default AuthGuard;
