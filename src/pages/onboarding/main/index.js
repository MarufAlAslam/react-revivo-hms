import React from "react";
import PrimaryInfo from "./primaryInfo";
import DocumentsVerification from "./documentsVerification";

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
      </form>
    </div>
  );
};

export default Main;
