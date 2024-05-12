import React, { useState } from 'react';
import { useEffect } from 'react';
import './home.css';
import neverNow from '../assets/neverNow.jpg';
import warPi from '../assets/warPi.jpg';
import Slider from '../Components/Slider';
import logo from '../assets/LOGO 1.png';
import aface from '../assets/aface.jpeg';
import ResponsiveIframe from '../Components/ResponsiveIframe';

import {images1, imagesSub1, imagesSub2 , imagesSub3, imagesSub4, imagesSub5, imagesSub6, imagesSub7, imagesSub8 } from "../Components/DataStructure/Structure1"



const Home = () => {
  const [index, setIndex] = useState(0);
  const [showRandom, setShowRandom] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  




  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1004);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  const handleSlideClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setShowRandom(true);
  };

  const handleCloseRandom = () => {
    setShowRandom(false);
  };

  let selectedImages;
  switch (index) {
    case 0:
      selectedImages = imagesSub1;
      break;
    case 1:
      selectedImages = imagesSub2;
      break;
    case 2:
      selectedImages = imagesSub3;
      break;
      case 3:
        selectedImages = imagesSub4;
        break;
        case 4:
            selectedImages = imagesSub5;
            break;
            case 5:
                selectedImages = imagesSub6;
                break;

                case 6:
                    selectedImages = imagesSub7;
                    break;

                    case 7:
                        selectedImages = imagesSub8;
                        break;
    default:
      selectedImages = imagesSub1;
      break;
  }

  return (
    <div className="home">
      <div className="neverNow">
        <img src={neverNow} alt="" />
      </div>

    <div className="textIntro">
        <div className="ceezyLine">
          <h1>Their job is to look after Israel.</h1>
          <h1>Our job is to look after them.</h1>
        </div>

        <div className="ceezyLine">
          <h3>Friends of the IDF is the sole organization authorized to collect charitable donations on behalf</h3>
          <h3>of the soldiers of the Israel Defense Forces across the United States of America.</h3>
        </div>

        <div className="donateBtns">
          <button className="dbtn1">DONATE NOW</button>
          <button className="dbtn2">FUNDRAISE</button>
        </div>
      </div>

        <div className="pi">
        <div className="War4oh">
          <h1 className="War4ohtxt1">WAR FOR OUR HOME</h1>
          <h1 className="War4ohtxt2">HOW RFIDF IS MAKING A FRONTLINE DIFFERENCE</h1>
          <h3>100% of emergency funds are going directly to support IDF’s soldiers’ urgent humanitarian needs. To date, RFIDF has transferred tens of millions of dollars in response to IDF requests for support during the Hamas-Israel War.</h3>
        </div>
        <img src={warPi} alt="" />
        <div className="actiondiv">
          <h2>As the soldiers’ needs evolve, RFIDF will continue to be their trusted partners in action.</h2>
          <button>LEARN MORE</button>
          <h1>SEE THE LATEST FROM THE GROUND</h1>
          <div className="swipers">
            <div className="clickables">
              <Slider
                slides={images1}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                slidesPerView={isSmallScreen ? 1 : 4}
                onSlideClick={handleSlideClick}
              />
            </div>
            {showRandom && (
              <div className="random">
                <div className="random-content">
                  <Slider
                    slides={selectedImages}
                    autoplay={{ delay: 5000000, disableOnInteraction: true }}
                    slidesPerView={1}
                  />
                  <div className='writeups'>
                    <button className="close-btn" onClick={handleCloseRandom}>X</button>
                    <div className="sectionsl">
                      <img src={logo} alt="" />
                     </div>
                    <div className="sectionsp">
                      <span>{index + 1}/8</span>
                    </div>
                 <div className="sectionsw">
                      {selectedImages.map((item, idx) => (
                        <h3 key={idx}>{item.write}</h3>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

         <div className='aface'>

        <div className="face">
               <img src={aface} alt="" />
        </div>

        <div className="faceTalk">
                    <h1>
                      
“FIDF’s love and support empower us to protect and defend Israel, the home of the Jewish people.”

-Lt. Col Liron
                    </h1>
        </div>

      </div>


      <div className="briefing">
           <h1>SPECIAL BRIEFINGS</h1>


           <div>
               <h2>FIDF’s special briefings give insider access to information on the Hamas-Israel War not covered by the media. You will be transported directly to the front lines for real-time updates into IDF heroes’ experiences, challenges, and triumphs.</h2>

               <div className="iframe">
          <ResponsiveIframe src="https://www.youtube.com/embed/1gAxCreD5_g" />
        </div>
           </div>
      </div>



      

      
    </div>
  );
};

export default Home;
