import React from "react";

import Dummy from "../Dummyitems/Dummy";
import Offer from "../Offers/Offer";
import TopDealings from "../TopDeals/TopDeal";

import Advertisement from "../AdverTiseMent/AdverTises";

const HomeSection = () => {
  return (
    <>
      <Dummy />
      <Offer />
      <TopDealings />
      <Advertisement />
      {/* <Productfake/> */}
    </>
  );
};

export default HomeSection;
