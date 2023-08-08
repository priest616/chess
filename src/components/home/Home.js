import React, {useEffect, useState} from "react";
import { Fade } from "react-awesome-reveal";

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
        }
      }, 40);
  
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }, [progress]);
  
    return (
      <div className="flex flex-col justify-center items-center w-screen h-screen space-y-2 pt-4 bg-[#252525] absolute z-[999]">
        <div>
          <img
            src="https://cdn1.iconfinder.com/data/icons/picka-sport-hand-gesture-3d/512/Chess.png"
            alt="Chess Logo"
          />
        </div>
        <div className="relative h-2 bg-gray-300 rounded w-[20rem]">
          <div
            className="absolute h-full bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <>
        {isLoading ? (
            <Loader />
          ) : (
        <div className="relative bg-black opacity-[0.6] w-screen h-fit">
          <div className="container flex flex-col items-center justify-between lg:flex-row">
            <div className="pt-[5rem]">
                <Fade delay={400} className="flex flex-col items-center justify-center">
                  <p className="text-[4rem] sm:text-[3rem] 2xsm:text-[2rem] 2xsm:w-[20rem] 2xsm:leading-[2.5rem] text-left capitalize w-[3rem] font-[900] text-white font-jost leading-[4.5rem]">
                    Bonita Home of online chess gaming
                  </p>
        
                </Fade>
                <Fade delay={900}>
                    <div className="text-[1.4rem] italic text-gray-400 capitalize font-[900]  font-jost leading-[3.5rem]">
                        <p>_____ Feel Home</p>
                    </div>
                </Fade>
            </div>
            <Fade className="relative" delay={700}>
                <img
                  className="sm:py-[4.5rem] 2xsm:py-[3rem]"
                  src="https://cdn3.iconfinder.com/data/icons/business-3d-illustration-set/512/BusinessVOne09.png"
                  alt=""
                />
            </Fade>
        
          </div>
        </div>
          )
        }
    </>
  )
}
export default Home;
