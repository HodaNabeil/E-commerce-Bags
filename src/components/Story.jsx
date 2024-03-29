



import "../style/story.css"




function Story() {
  return (
    <div className=" bg-main-color  ">
      <div className="container  padding-y-50 flex  flex-wrap md:flex-nowrap gap-[30px] ">
        <div className="wrapper w-[100%] md:w-[55%] mt-[50px]  relative    ">
          <div className="container-image-box">
            <img src={require(`../IMg/store_left.jpg`)} alt="" />
          </div>

          <div className="container-image-box">
            <img src={require(`../IMg/story_center.jpg`)} alt="" />
          </div>

          <div className="container-image-box overflow-hidden  " >
            <img src={require(`../IMg/story_right.jpg`)} alt="" />
          </div>
        </div>

        <div className=" story   w-[100%] md:w-[35%] mt-[250px] md:mt-0 ">
          <h3 className=" element-center-flex font-bold  active-color text-[25px] md:text-[30px]">Our Story </h3>
          <p className=" text-dark  leading-[1.6]  tracking-[1px]">
  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus reiciendis mollitia magnam consectetur fugit, nihil
            velit, voluptas eveniet est recusandae dignissimos hic reprehenderit
            placeat cumque aperiam corrupti dolorem ad! Lorem ipsum dolor, sit
            ameis quia debitis, animi voluptatem odit quas sint lore quod
        
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
