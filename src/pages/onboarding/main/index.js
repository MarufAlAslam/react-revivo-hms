import React from "react";
import PrimaryInfo from "./primaryInfo";
import DocumentsVerification from "./documentsVerification";
import AccomodationDetails from "./accomodationDetails";

const Main = ({ currentID, setCurrentID }) => {
    const decrementId = () => {
        if (currentID === 1) {
          return;
        }
        setCurrentID(currentID - 1);
      };
    
      const incrementId = () => {
        if (currentID === 6) {
          return;
        }
        setCurrentID(currentID + 1);
      };
  return (
    <div className="main-field p-[50px]">
      <form>
        {currentID === 1 && (
          <PrimaryInfo currentID={currentID} setCurrentID={setCurrentID} incrementId={incrementId} decrementId={decrementId} />
        )}
        {currentID === 2 && <DocumentsVerification currentID={currentID} setCurrentID={setCurrentID} incrementId={incrementId} decrementId={decrementId} />}
        {currentID === 3 && <AccomodationDetails currentID={currentID} setCurrentID={setCurrentID} incrementId={incrementId} decrementId={decrementId} />}
      </form>
    </div>
  );
};

export default Main;
