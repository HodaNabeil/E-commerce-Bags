import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./singleproduct.css";
import NewProducts from "../../components/NewProducts";
import Footer from "../../components/Footer"

function SingleProduct() {
  const products = useSelector((state) => state.products.products);
  const { id } = useParams();
  const product = products.find((product) => product.id === +id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-light  page-single-product relative top-[74px] ">
      <Header schangebackground ={"#DDC2AB"}  />

        <div className=" container">
          <div className="  py-[20px]  flex-wrap md:flex-nowrap  flex   gap-[20px]">
            <div className="flex  m-auto md:m-0 gap-[20px]">
              <div className="image-wrapper  hidden  sm:block ">
                {Array.isArray(product.image) &&
                  product.image.map((img, index) => (
                    <div
                      className="w-[70px] h-[70px] cursor-pointer  
                 flex  justify-center items-center
                  bg-main-color mb-[6px] rounded-[6px]"
                      key={index}
                    >
                      <img
                        className="object-cover p-[4px]"
                        src={img}
                        alt={product.title}
                      />
                    </div>
                  ))}
              </div>
              <div className=" main-image  bg-main-color   w-[300px] h-[300px] md:w-[200px] lg:w-[300px]    rounded-[6px] p-[20px]">
                <img
                  className="object-cover element-center-flex w-[100%] h-[100%]"
                  src={Array.isArray(product.image) ? product.image[0] : ""}
                  alt={product.title}
                />
              </div>
            </div>

            <div className="  px-[20px] m-auto md:m-0">
              <h3 className="  text-[25px]  text-dark capitalize">
                {product.title}
              </h3>
              <small className=" text-dark my-[2px]">
                ${product.sizes[0].price}
              </small>
              <div className="   icons-wrapper  relative my-[15px] color-dark-light flex justify-between items-center gap-x-[5px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
                <small className=" text-dark  ml-1">
                  {" "}
                  Customer review {product.rating}{" "}
                </small>
              </div>
              <div>
                <h4 className=" color-dark-light my-[10px]">Dimension</h4>
                <ul
                  style={{ listStyle: "inherit" }}
                  className=" color-dark-light ml-[20px]"
                >
                  <li>20 &times; 16.5 &times; 3</li>
                  <li>liters</li>
                </ul>
              </div>
              <div>
                <h4 className=" color-dark-light my-[10px]"> Choose colors</h4>
                <div className=" flex gap-x-[10px]  items-center  ">
                  {product.colors.map((color, index) => {
                    return (
                      <div className={` color-item  ${color}`} key={index}>
                        <span className=" opacity-0">{index}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className=" flex items-center  gap-[20px] my-[15px] ">
                <div
                  className=" flex  cursor-pointer justify-center items-center  
              gap-[10px] border border-[#D39C80] py-[6px] px-[20px] 
              rounded-[6px] capitalize text-dark  "
                >
                  <div>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="mx-[10px]">5</div>
                  <div>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>

                <div className=" flex gap-[15px] justify-center items-center   border  cursor-pointer border-[#D39C80] py-[6px] px-[20px] rounded-[6px]">
                  <img
                    className=" w-[25px]"
                    src={require(`../../IMg/shopping-bag.png`)}
                    alt="Add To Cart"
                  />
                  <span className="  capitalize text-dark ">Add To Cart</span>
                </div>
              </div>

              <hr className="  border-[#d4d0d0] " />
              <div className=" my-[10px] flex items-start ">
                <img
                  className=" relative  right-[20px]"
                  src={require(`../../IMg/truck.png`)}
                  alt=" Delivery"
                />
                <div>
                  <h4 className=" text-dark capitalize">Free Delivery</h4>
                  <p className=" color-dark-light text-[15px] mt-[5px] capitalize w-[320px] ">
                    Enter your pin for delivery availitty enter pin code here
                  </p>
                </div>
              </div>

              <hr className="  border-[#d4d0d0] " />
              <div className=" my-[10px] flex items-start ">
                <img
                  className=" relative  right-[20px]"
                  src={require(`../../IMg/shopping-bag.png`)}
                  alt=" Delivery"
                />
                <div>
                  <h4 className=" text-dark capitalize ">Reture Delivery</h4>
                  <p className=" color-dark-light text-[15px] mt-[5px] capitalize w-[320px] ">
                    Free 15 days Deivery Reture .
                    <Link to={"/"} className=" cursor-pointer color-dark-light">
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" border-[#d4d0d0] " />

        <div className=" container">
          <div className=" flex gap-x-[40px]  p-[20px] pt-[30px]  border-b-2 border-[#db794a] w-[17%]">
            <h4 className=" active-color text-[18px] ">description</h4>
            <h4 className="text-[18px]  text-dark">review</h4>
          </div>
          <hr className=" border-[#d4d0d0] " />

          <div className=" my-[20px]">
            <h4 className=" color-dark-light my-[10px] text-[18px]  font-medium">
              Product details
            </h4>
            <p className=" color-dark-light  text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, illo reprehenderit, aperiam ab molestiae nulla
              aliquam temporibus, libero laboriosam doloremque id iste minima
              blanditiis! Dolore culpa eveniet deleniti quia illum?
            </p>
          </div>
          <div className="hidden  md:block ">
            <h4 className=" color-dark-light my-[10px] text-[18px]  font-medium">
              Care instruction
            </h4>
            <ul style={{ listStyle: "inherit" }} className=" pb-[10px]">
              <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
              <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
              <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
              <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
            </ul>
          </div>
        </div>
  

      <hr className="border-[#d4d0d0] " />
      <NewProducts title=" Related  products"></NewProducts>
      <Footer />
    </div>
  );
}

export default SingleProduct;
