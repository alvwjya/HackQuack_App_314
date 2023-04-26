import { RouterProvider } from "react-router-dom";
import React, { useMemo, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import router from "./routes";
import "./App.css";
import { USER_TYPE } from "./constants/userTypes";

function App() {
  /* 
    Format of user state:
    {
      username: String,
      userType: int (Use USER_TYPE constant),
      token: String
    }
  */

//    const [user, setUser] = useState({
//    username: "",
//    userType: USER_TYPE.PROFESSIONAL,
//    token: ""
//  });

  const [user, setUser] = useState(null);

  const authContext = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <div className="App">
      <AuthContext.Provider value={authContext}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
