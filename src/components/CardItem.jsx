import { Link } from "react-router-dom";

function CardItem({ product }) {
  return (
    <div className="  product-item  relative flex justify-center items-center flex-col">
      <div className=" bg-[#ddc2ab52] rounded-[6px] relative overflow-hidden ">
        <div className=" relative">
          <img
            className=" w-[150px] h-[150px]   lg:w-[200px] lg:h-[200px] p-[10px] md:-[15px] lg:p-[20px] object-cover "
            src={product.image[0]}
            alt={product.title}
          />
          <div className="  container-box-icon hidden flex-col absolute top-[50%]     translate-y-[-50%] right-[10px] ">
            <span
              className="  box-icon  duration-500 transition-all  
              relative  w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] element-center-flex  rounded-[50px] color-light 
              cursor-pointer   bg-second-color mb-[10px]"
            >
              <i className="  z-[2] fa-regular fa-heart"></i>
            </span>
            <Link
              to={`${product.id}`}
              className="   box-icon   duration-500 transition-all  
                relative  w-[35px] h-[35px] lg:w-[40px] lg:h-[40px]  element-center-flex  rounded-[50px] color-light  
                cursor-pointer  bg-second-color"
            >
              <i className="z-[2] fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
        <div
          className="  add-cart  bg-second-color     absolute  w-[100%] bottom-[-100%]  text-center  hover:bg-[#dd8b61]  
          duration-300 transition-all px-[10px]  py-[10px]  lg:px-[10px] lg:py-[10px]
          color-light  rounded-b-[6px]"
        >
          <i className="  icon-cart   mr-[5px] fa-solid fa-plus"></i>
          Add to Cart
        </div>
      </div>

      <div className=" w-[100%] px-[20px]  text-center mt-[10px]">
        <h4
          className=" text-dark  hover:text-[#db794a]  duration-150 transition-all 
       text-[15px] w-[100%] capitalize  font-medium mb-[4px]"
        >
          {product.title}
        </h4>
        <div>
          <span className="  font-medium text-dark">
            ${product.sizes[0].price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
