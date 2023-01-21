
import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, contract, shareType }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;

    if (shareType === "share") {
      await contract.allow(address);
    } else {
      await contract.disallow(address);
    }

    setModalOpen(false);
  };
  console.log(shareType);
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;
      for (let i = 0; i < options.length; i++) {
        if(options[i].access === true) {
          let opt = options[i];
          let e1 = document.createElement("option");
          e1.textContent = opt;
          e1.value = opt;
          select.appendChild(e1);
        }
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">{shareType === "share" ? "Share with" : "UnShare with"}</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>{shareType === "share" ? "Share" : "UnShare"}</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;