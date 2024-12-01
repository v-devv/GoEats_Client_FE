import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MutatingDots } from "react-loader-spinner";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorFranchiseHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const data = await response.json();
      setVendorData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      alert("Failed fetch data");
      console.log(error);
      setLoading(true);
    }
  };
  useEffect(() => {
    vendorFranchiseHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction == "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction == "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="loaderSection">
      {loading && (
        <>
          <div className="loader">Your Food is Loading</div>
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </>
      )}
      </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <IoArrowBackCircleOutline className="btnArrow" />
        </button>
        <button onClick={() => handleScroll("right")}>
          <IoArrowForwardCircleOutline className="btnArrow" />
        </button>
      </div>
      <h2 className="ChianHeadingName"> Top restaurant chains in Bangalore </h2>
      <section
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => e.target.scrollLeft}
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor, keyVendor) => {
            return (
              <div className="vendorBox" key={keyVendor}>
                {vendor.franchise.map((item, keyFranchise) => {
                  return (
                    <>
                      <div key={keyFranchise}>
                        {/*  {item.franchiseName} */}
                      </div>
                      <div className="franchiseImgChains">
                        <img
                          src={`${API_URL}/uploads/${item.franchiseLogo}`}
                          alt=""
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Chains;
