import { useState } from "react";
import AppContext from "./app-context";

const AppProvider = (props) => {

  const [virtualOffset, setVirtualOffset] = useState(null);
  const [serviceOffset, setserviceOffset] = useState(null);
  const [testimonialsOffset, setTestimonialsOffset] = useState(null);
  const [teamOffset, setTeamOffset] = useState(null);
  const [aboutOffset, setAboutOffset] = useState(null);
  const [contactOffset, setContactOffset] = useState(null);

  return(
    <AppContext.Provider value={{
      virtualOffset,
      setVirtualOffset,
      serviceOffset,
      setserviceOffset,
      testimonialsOffset,
      setTestimonialsOffset,
      teamOffset,
      setTeamOffset,
      aboutOffset,
      setAboutOffset,
      contactOffset,
      setContactOffset,
    }}>
        {props.children}
    </AppContext.Provider>
  )

};

export default AppProvider