import React from "react";

const AppContext = React.createContext({
  virtualOffset: null,
  setVirtualOffset: () => {},
  serviceOffset: null,
  setserviceOffset: () => {},
  testimonialsOffset: null,
  setTestimonialsOffset: () => {},
  teamOffset: null,
  setTeamOffset: () => {},
  aboutOffset: null,
  setAboutOffset: () => {},
  contactOffset: null,
  setContactOffset: () => {}
});

export default AppContext;