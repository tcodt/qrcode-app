import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffff");
  const [qrcode, setQrcode] = useState("");

  return (
    <>
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="input-box">
          <input type="text" placeholder="متن خود را وارد کنید" />
          <button>تولید کن</button>
        </div>
        <div className="extra">
          <div className="bg-color">
            <h5>رنگ پیش زمینه:</h5>
            <input type="color" />
          </div>
          <div className="size">
            <h5>ابعاد:</h5>
            <input type="range" min={200} max={600} />
          </div>
        </div>
        <div className="output-box">
          <img src={qrcode} alt="generated qrcode" />
        </div>
        <div className="download-box">
          <a href={qrcode} download="QRCode">
            <button className="button">دانلود</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
