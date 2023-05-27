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
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold uppercase text-[#4f4f4f]">
          Let’s Get started
        </h2>
        <span onClick={incrementId} className="text-[#007FFF] text-2xl font-semibold uppercase cursor-pointer">
          Skip
        </span>
      </div>
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
