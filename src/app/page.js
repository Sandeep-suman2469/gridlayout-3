import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="nav">
        <div className="layout navbar">Layout1</div>
        <div className="about navbar">about</div>
        <div className="services navbar">services</div>
        <div className="contact navbar">contact</div>
      </div>

      <div className="heading">
        <h1>Sample Heading</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
          pretium tellus duis convallis tempus leo eu aenean sed diam.
        </div>
        <button className="btn">Click to action!</button>
      </div>
      <div className="line"></div>
      <div className="p">Latest Features</div>
      <div className="container">
        <div className="box">
          <div className="box1">800 X 500</div>
          <div className="content">
            <div className="box-heading">Feature Label</div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
            <div>
            <button className="btns">Buy Now!</button>
            <button className="bt">More Info</button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box1">800 X 500</div>
          <div className="content">
            <div className="box-heading">Feature Label</div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
            <div>
            <button className="btns">Buy Now!</button>
            <button className="bt">More Info</button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box1">800 X 500</div>
          <div className="content">
            <div className="box-heading">Feature Label</div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
            <div>
            <button className="btns">Buy Now!</button>
            <button className="bt">More Info</button>
            </div>
          </div>
        </div>
         <div className="box">
          <div className="box1">800 X 500</div>
          <div className="content">
            <div className="box-heading">Feature Label</div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
            <div>
            <button className="btns">Buy Now!</button>
            <button className="bt">More Info</button>
            </div>
          </div>
        </div>
      </div>
            <br></br>
      <br></br>
      <br></br>
      <div className="line"></div>
      <div className="last-line">Copyright © Your Website 2014</div>
        
    </>
  );
}

