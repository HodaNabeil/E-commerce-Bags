


import "../style/shoppingpage.css"





function FilterColor({setcolor}) {

  function onchengeClor (color){
    setcolor(color)
  }
  console.log(onchengeClor)
  return (
    <div className=" filter-color   flex  gap-x-[10px] ">
      <div  onClick={()=>onchengeClor("black")} className="btn-color black "></div>
      <div className="btn-color white "></div>
      <div className="btn-color Beige "></div>
    </div>
  );
}

export default FilterColor;
