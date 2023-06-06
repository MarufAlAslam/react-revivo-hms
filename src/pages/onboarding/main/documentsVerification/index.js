import React from "react";

const DocumentsVerification = ({
  currentID,
  setCurrentID,
  decrementId,
  incrementId,
}) => {
  const [panName, setPanName] = React.useState("");
  const [panSize, setPanSize] = React.useState("");

  const [gstName, setGstName] = React.useState("");
  const [gstSize, setGstSize] = React.useState("");

  const [bankName, setBankName] = React.useState("");
  const [bankSize, setBankSize] = React.useState("");

  // get the name of uploaded file and size
  const panUpload = (e) => {
    e.preventDefault();
    setPanName(e.target.files[0].name);
    setPanSize(e.target.files[0].size);

    fetch('http://revivotech.in:8080/file/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: e.target.files[0]
    })
    
  };

  const gstUpload = (e) => {
    e.preventDefault();
    setGstName(e.target.files[0].name);
    setGstSize(e.target.files[0].size);
  };

  const bankUpload = (e) => {
    e.preventDefault();
    setBankName(e.target.files[0].name);
    setBankSize(e.target.files[0].size);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold uppercase text-[#4f4f4f]">
          Let’s Get started
        </h2>
        <span
          onClick={incrementId}
          className="text-[#007FFF] text-2xl font-semibold uppercase cursor-pointer"
        >
          Skip
        </span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-[40px] gap-40">
        <div className="col-span-2">
          <p className="text-2xl text-[#323F4B]">
            Submit documents for verification
          </p>
          <p className="text-[#323F4B]">
            Only pdf, jpeg, png documents allowed. (Max 1 MB)
          </p>

          <div className="mt-[56px]">
            <div className="flex justify-start items-center mb-[36px]">
              <div className="flex justify-between items-center md:w-[60%]">
                <p className="text-lg text-[#535353]">Pan Card</p>
                <input
                  type="file"
                  id="pan-upload"
                  onChange={panUpload}
                  className="hidden"
                  accept="application/pdf, image/png, image/jpeg"
                />
                <label
                  htmlFor="pan-upload"
                  className="btn-white w-[230px] block p-[18px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
                >
                  Upload
                </label>
              </div>

              <p className="text-lg text-[#535353] ml-[45px]">
                {panName} {panSize && "(" + Math.ceil(panSize / 1024) + "KB)"}
              </p>
            </div>
            <div className="flex justify-start items-center mb-[36px]">
              <div className="flex justify-between items-center md:w-[60%]">
                <p className="text-lg text-[#535353]">GST Certificate</p>
                <input
                  type="file"
                  id="gst-upload"
                  onChange={gstUpload}
                  className="hidden"
                  accept="application/pdf, image/png, image/jpeg"
                />
                <label
                  htmlFor="gst-upload"
                  className="btn-white w-[230px] block p-[18px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
                >
                  Upload
                </label>
              </div>

              <p className="text-lg text-[#535353] ml-[45px]">
                {gstName} {gstSize && "(" + Math.ceil(gstSize / 1024) + "KB)"}
              </p>
            </div>
            <div className="flex justify-start items-center mb-[36px]">
              <div className="flex justify-between items-center md:w-[60%]">
                <p className="text-lg text-[#535353]">Bank Account Details</p>
                <input
                  type="file"
                  id="bank-upload"
                  onChange={bankUpload}
                  className="hidden"
                  accept="application/pdf, image/png, image/jpeg"
                />
                <label
                  htmlFor="bank-upload"
                  className="btn-white w-[230px] block p-[18px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
                >
                  Upload
                </label>
              </div>

              <p className="text-lg text-[#535353] ml-[45px]">
                {bankName}{" "}
                {bankSize && "(" + Math.ceil(bankSize / 1024) + "KB)"}
              </p>
            </div>
          </div>

          <div className="mt-[140px] grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="col-span-1">
              <span
                onClick={decrementId}
                className="btn-white w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
              >
                baCK
              </span>
            </div>
            <div className="col-span-1">
              <span
                onClick={incrementId}
                className="bg-[#007FFF] w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-white cursor-pointer"
              >
                continue
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsVerification;
