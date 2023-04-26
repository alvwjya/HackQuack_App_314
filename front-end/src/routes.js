import { useContext } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { USER_TYPE } from "./constants/userTypes";
import AuthContext from "./contexts/AuthContext";

/*CUSTOMER*/
import CustomerAccount from "./pages/customer/CustomerAccount";

import CustomerSignUp from "./pages/customer/CustomerSignUp";

import CustomerDashboard from "./pages/customer/CustomerDashboard";

import CustomerCreateNewRequest from "./pages/customer/CustomerCreateNewRequest";

import CustomerServiceBoardRequest from "./pages/customer/CustomerServiceBoardRequest";
import CustomerServiceBoardRequestOffer from "./pages/customer/CustomerServiceBoardRequestOffer";
import CustomerOfferProfessionalDetails from "./pages/customer/CustomerServiceBoardRequestOfferDetail";

import CustomerServiceBoardActiveService from "./pages/customer/CustomerServiceBoardActiveService";

import CustomerServiceBoardPastService from "./pages/customer/CustomerServiceBoardPastService";


import CustomerMembership from "./pages/customer/CustomerMembership";

/*PROFESSIONAL*/
import ProfessionalAccount from "./pages/professional/ProfessionalAccount";

import ProfessionalSignUp from "./pages/professional/ProfessionalSignUp";
import ProfessionalSignUpTwo from "./pages/professional/ProfessionalSignUpTwo";

import ProfessionalDashboard from "./pages/professional/ProfessionalDashboard";

import ProfessionalServiceBoard from "./pages/professional/ProfessionalServiceBoard";

import ProfessionalPriceOffer from "./pages/professional/ProfessionalPriceOffer";

import ProfessionalMembership from "./pages/professional/ProfessionalMembership";

/*HACKQUACK*/
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import PaymentMethod from "./pages/PaymentMethod";

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
      /*{
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
          {
            path: "professional-sign-up-two",
            element: <ProfessionalSignUpTwo />,
          },
        ],
      },*/
      {
        /*element: <AuthorizedRoute userTypes={[USER_TYPE.CUSTOMER]} />,*/
        element: <GuestRoute />,
        children: [
          {
            index: true,
            element: <CustomerDashboard />,
          },
          // Dashboard
          {
            path: "customer-dashboard",
            element: <CustomerDashboard />,
          },
          // Account
          {
            path: "customer-account",
            element: <CustomerAccount />,
          },
          // Create New Request
          {
            path: "customer-create-new-request",
            element: <CustomerCreateNewRequest />,
          },
          // Service Board
          {
            path: "customer-service-board-request",
            element: <CustomerServiceBoardRequest />,
          },
          {
            path: "customer-service-board-request-offer",
            element: <CustomerServiceBoardRequestOffer />,
          },
          {
            path: "customer-service-board-active-service",
            element: <CustomerServiceBoardActiveService />,
          },
          {
            path: "customer-service-board-past-service",
            element: <CustomerServiceBoardPastService />,
          },
          {
            path: "customer-offer-professional-details",
            element: <CustomerOfferProfessionalDetails />,
          },
          
          {
            path: "customer-membership",
            element: <CustomerMembership />,
          },
        ],
      },
      {
        element: <AuthorizedRoute userTypes={[USER_TYPE.PROFESSIONAL]} />,
        children: [
          {
            path: "professional-dashboard",
            element: <ProfessionalDashboard />,
          },
          {
            path: "professional-service-board",
            element: <ProfessionalServiceBoard />,
          },
          {
            path: "professional-account",
            element: <ProfessionalAccount />,
          },
          {
            path: "professional-membership",
            element: <ProfessionalMembership />,
          },
        ],
      },
    ],
  },
]);

export default router;
