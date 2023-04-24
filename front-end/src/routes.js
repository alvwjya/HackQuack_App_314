import { useContext } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { USER_TYPE } from "./constants/userTypes";
import AuthContext from "./contexts/AuthContext";

/*Customer*/
import CustomerSignUp from "./pages/customer/CustomerSignUp";

import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerSettings from "./pages/customer/CustomerSettings";

import CustomerViewRequest from "./pages/customer/CustomerViewRequest";
import NewRequest from "./pages/customer/NewRequest";

/*Professional*/
import ProfessionalSignUp from "./pages/professional/ProfessionalSignUp";
import ProfessionalSignUpTwo from "./pages/professional/ProfessionalSignUpTwo";

import ProfessionalDashboard from "./pages/professional/ProfessionalDashboard";
import ProfessionalSettings from "./pages/professional/ProfessionalSettings";

import ProfessionalViewRequest from "./pages/professional/ProfessionalViewRequest";
import ProfessionalViewHistory from "./pages/professional/ProfessionalViewHistory";

/*HACKQUACK*/
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

const AuthorizedRoute = ({ userTypes }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  let authorized = false;
  for (let i = 0; i < userTypes.length; i++) {
    if (userTypes[i] === user.userType) {
      authorized = true;
      break;
    }
  }

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const GuestRoute = () => {
  const { user } = useContext(AuthContext);

  // If user is logged in, redirect them to their respective home pages
  if (user) {
    let location;

    switch (user.userType) {
      case USER_TYPE.PROFESSIONAL:
        location = "/professional-dashboard";
        break;
      default:
        location = "/customer-dashboard";
    }

    return <Navigate to={location} replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <GuestRoute />,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "customer-sign-up",
            element: <CustomerSignUp />,
          },
          {
            path: "professional-sign-up",
            element: <ProfessionalSignUp />,
          },
        ],
      },
      {
        element: <AuthorizedRoute userTypes={[USER_TYPE.CUSTOMER]} />,
        children: [
          
          {
            path: "customer-dashboard",
            element: <CustomerDashboard />,
          },
          {
            path: "customer-setting",
            element: <CustomerSettings />,
          },
          {
            path: "new-request",
            element: <NewRequest />,
          },
          {
            path: "customer-view-request",
            element: <CustomerViewRequest />,
          },
        ],
      },
      {
        element: <AuthorizedRoute userTypes={[USER_TYPE.PROFESSIONAL]} />,
        children: [
          {
            path: "professional-dashbord",
            element: <ProfessionalDashboard />,
          },
          {
            path: "professional-view-request",
            element: <ProfessionalViewRequest />,
          },
          {
            path: "professional-settings",
            element: <ProfessionalSettings />,
          },
          {
            path: "professional-view-history",
            element: <ProfessionalViewHistory />,
          },
        ],
      },
    ],
  },
]);

export default router;
