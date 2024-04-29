import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import Footer from "../../components/Footer";

import "./account.css";
function Account() {
  return (
    <div className="bg-light page-account   ">
      <Header />

      <div className=" container pt-[100px] pb-[50px] ">
        <div
          className=" flex flex-wrap md:flex-nowrap  w-[90%] m-auto p-[30px] relative  bg-second-color 
           flex-between "
        >
          <div className="  mb-[800px] md:mb-0 relative w-[100%] md:w-[50%]">
            <h6 className=" font-2 text-dark  mb-[60px]"> Luxury Line</h6>

            <div className=" text-dark ">
              <h2 className="text-[26px] sm:text-[35px] md:text-[40px] font-2 mb-0">Hello there </h2>
              <span className=" relative top-[-10px]">
                You need to create an account
              </span>
            </div>

            <div>
              <input
                className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
                outline-none  border-b-[1px] 
                            border-[#f8f2eeb8]     text-[15px]   w-[100%]"
                type="text"
                placeholder="Name"
              />
              <input
                className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
                outline-none  border-b-[1px] 
                            border-[#f8f2eeb8]     text-[15px]   w-[100%]"
                type="email"
                placeholder="Email"
              />
              <input
                className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
                outline-none  border-b-[1px] 
                            border-[#f8f2eeb8]   text-[15px]   w-[100%]"
                type="password"
                placeholder="Password"
              />
              <input
                className=" mb-[10px]   md:mb-[20px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
                outline-none  border-b-[1px] 
                            border-[#f8f2eeb8]     text-[15px]   w-[100%]"
                type="password"
                placeholder="Repeat Password"
              />

              <button className=" btn mb-[20px] bg-[#f8f2EE]  text-[#353431] w-[160px] block py-[10px] px-[15px] ">
                Send
              </button>
            </div>
            <small className=" text-dark">
              You already have an account?
              <Link to="login" className="  font-bold">
                Login in
              </Link>
            </small>
          </div>

          <div
            className="  imge   w-[100%]  md:w-[40%] absolute  bottom-0  md:top-0  
           h-[60%]  md:h-[100%]
          "
          >
            <img
              className=" object-cover w-[100%] h-[100%]"
              src={require(`../../IMg/story_right.jpg`)}
              alt="img"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
