import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffff");
  const [qrcode, setQrcode] = useState("");

  useEffect(() => {
    setQrcode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  const handleClick = () => {
    setWord(temp);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>QR Code Generator</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="متن خود را وارد کنید"
              onChange={(e) => setTemp(e.target.value)}
            />
            <button onClick={handleClick}>تولید کن</button>
          </div>
          <div className="extra">
            <div className="bg-color">
              <h5>رنگ پیش زمینه:</h5>
              <input
                type="color"
                onChange={(e) => setBgColor(e.target.value.substring(1))}
              />
            </div>
            <div className="size">
              <h5>ابعاد:</h5>
              <input
                type="range"
                min={200}
                max={300}
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
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
      </div>
    </>
  );
}

export default App;
