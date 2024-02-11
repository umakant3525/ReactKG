import React from "react";
import Header from "./Header";
import DisplayCounter from "./DisplayCounter";
import Container from "./Container";
import Controls from "./Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./PrivacyMsg";

const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 px-4 py-4 text-center ">
      <Container>
        <Header />
        <div className="col-lg-8 mx-auto">
          {privacy ? <PrivacyMsg /> : <DisplayCounter />}
          <Controls />
        </div>
      </Container>
    </div>
  );
};

export default App;
