import BDrive from "./artifacts/contracts/BDrive.sol/BDrive.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Modal from "./components/Modal/Modal";
import FileUpload from "./components/FileUpload/FileUpload";
import Display from "./components/Display/Display";
import './App.css';


function App() {

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [shareType, setShareType] = useState("");

  useEffect(() => {
    //get the web3 injection
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        //update if any changes to the chain
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        //update if account is changed
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace with the deployed contract address

        const contract = new ethers.Contract(
          contractAddress,
          BDrive.abi,
          signer
        );

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("web3 services not installed");
      }
    };
    provider && loadProvider();

  }, [])
  return (
    <>
      {!modalOpen && (
        <>
          <button className="share" onClick={() => {
            setModalOpen(true);
            setShareType("share")
          }}>
            Share
          </button>
          <button className="unShare" onClick={() => {
            setModalOpen(true);
            setShareType("unShare")
          }}>
            UnShare
          </button>
        </>
      )}

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract} shareType={shareType}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>B-Drive</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;
