import React from "react";
import w from './img/photo_2024-11-07_19-38-15.jpg'
const Home = () => {
  return (
    <div>
      <div className="fathy">
        <div className="one">
          <p>Hi Ther, im</p>
          <h1>Fathy Mohamed</h1>
          <h2>Frontend Web developer</h2>
          <div className="class">
            <a href="https://facebook.com" target="-blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://facebook.com" target="-blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://google.com" target="-blank"><i class="fa-brands fa-twitter"></i></a>
<a href="https://facebook.com" target="-blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <button>About Me</button>
        </div>


        <div className="name">
          <img src={w} />
        </div>
      </div>
    </div>
  )
}

export default Home