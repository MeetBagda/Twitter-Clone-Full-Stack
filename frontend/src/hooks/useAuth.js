import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/userAuthContext";
const useLoggedinuser = () => {
  const { user } = useUserAuth();
  const email = user?.email;
  const [loggedinuser, setloggedinuser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8585/api/v1/user/loggedinuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setloggedinuser(data);
      });
  }, [email, loggedinuser]);
  return [loggedinuser, setloggedinuser];
};

export default useLoggedinuser;