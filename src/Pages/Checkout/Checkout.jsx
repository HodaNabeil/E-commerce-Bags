import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import LeftCheckout from "./LeftCheckout";
import RigthCheckOut from "./RigthCheckOut";


import "./checkout.css"
function Checkout() {
  return (
    <div className="bg-light  ">
    <Header schangebackground={"#DDC2AB"}></Header>

      <div className=" container page-checkout pt-[100px] grid  gap-x-[40px]  md:grid-cols-2">
        <LeftCheckout />
        <RigthCheckOut/>
      </div>

      <Footer ></Footer>
    </div>
  );
}

export default Checkout;
