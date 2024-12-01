import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const FranchiseCollection = () => {
  const [franchiseCollection, setFranchiseCollection] = useState([]);
  const [selectedRegion , setSelectedRegion] = useState("All");
  const [activeBtn , setActiveBtn] = useState('all');


  const handleFranchiseCollection = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFranchiseData = await response.json();
      setFranchiseCollection(newFranchiseData.vendors);
      console.log("Franchise ", newFranchiseData);
    } catch (error) {
      alert("Franchise Data not fetched");
      console.log(error);
    }
  };
  useEffect(() => {
    handleFranchiseCollection();
  }, []);

  const filterHandler = (region , category)=>{
    setSelectedRegion(region)
    setActiveBtn(category)
  }

  return (
    <>
      <h2 className="franchiseHeadingLocation">Restaurants with online food delivery in Bangalore</h2>
      <div className="filerButtons">
        <button onClick={()=>filterHandler("All" , 'all')} className={activeBtn === 'all' ? "activeBtn" : ""} >All</button>
        <button onClick={()=>filterHandler("South-Indian" ,"south-indian")} className={activeBtn === 'south-indian' ? "activeBtn" : ""} >North Indian</button>
        <button onClick={()=>filterHandler("North-Indian" , "north-indian")} className={activeBtn === "north-indian" ? "activeBtn" : ""} >South Indian</button>
        <button onClick={()=>filterHandler("Chinese" ,"chinese")} className={activeBtn === "chinese" ? "activeBtn" : ""}  >Chinese</button>
        <button onClick={()=>filterHandler("Bakery" , "bakery")} className={activeBtn === "bakery" ? "activeBtn" : ""} >Bakery</button>
      </div>
      <section className="franchiseSection">
        {franchiseCollection.map((i) => {
          return i.franchise.map((item)=>{
            if(selectedRegion === "All" ||
              item.region.includes(selectedRegion.toLocaleLowerCase())){
              return (
                <Link
                  to={`/products/${item._id}/${item.franchiseName}`}
                  className="linkTagFranchise"
                >
                  <div key={item.id} className="franchiseGroup">
                    <div className="franchiseImg">
                      <img
                        src={`${API_URL}/uploads/${item.franchiseLogo}`}
                        alt=""
                      />
                      <div className="offer">{item.offer}</div>
                    </div>

                    <div className="franchiseDetails">
                      <strong> {item.franchiseName}</strong>
                      <div className="franchiseArea">
                        {item.region.join(", ")}
                      </div>
                      <div className="franchiseArea">{item.area}</div>
                    </div>
                  </div>
                </Link>
              );
            }
          })
          return null;
        })}
      </section>
    </>
  );
};

export default FranchiseCollection;
