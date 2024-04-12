
function Pagination({ pages ,setCurrentPage ,currentPage}) {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="  p-[80px]   overflow-hidden  flex items-center  justify-center gap-[20px] ">
      <div
      
      

        onClick={()=> {
          setCurrentPage((perv)=> perv - 1 )
        }}
        className={` w-[90px] h-[40px]  element-center-flex bg-[#f1e5de] text-dark   capitalize  py-[4px] px-[6px]   cursor-pointer
        transition-all  duration-500  rounded-[6px]
        ${currentPage === 1 &&  " pointer-events-none"}

      `}
      >
        Previous 
      </div>

      <div className=" flex  justify-center  items-center   gap-x-[20px] ">
        {generatedPages.map((page, index) => {
          return (
            <div
              onClick={()=> setCurrentPage(page)}
              key={index}
              className={` w-[40px] h-[40px]  rounded-[6px]  duration-200 transition-all   py-[4px] px-[6px]   element-center-flex  cursor-pointer
              ${page === currentPage ? " bg-[#dd8b61] rounded-[6px]  color-light": "text-dark  bg-[#f1e5de]" }
              `}
            >
              {page}
            </div>
          );
        })}
      </div>

      <div 
          onClick={()=> {
            setCurrentPage((perv)=> perv + 1 )
          }}
      
          className={`  w-[90px] h-[40px]  element-center-flex bg-[#f1e5de] 
          text-dark   capitalize  py-[4px] px-[6px]   cursor-pointer
          transition-all  duration-500  rounded-[6px]
          ${currentPage === pages &&  " pointer-events-none"}
  
        `}>
  
        Next 
      </div>
    </div>
  );
}

export default Pagination;
