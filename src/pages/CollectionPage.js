// import AboutSection from "../components/AboutSection";
// import HeroSection from "../components/HeroSection";
// import NewsSection from "../components/NewsSection";

import Plant from "../Plant";
// import React from "react";

export default function CollectionPage() {
    let allPlants = Plant.data;
    console.log(allPlants);
    
    return (
        <div className="collection">
            {/* <p className="">
                this is the home page
            </p> */}
            {/* <HeroSection />
            <AboutSection />
            <NewsSection /> */}
            <section className="App-section">
                <div className="container lg:max-w-screen-xl mx-auto px-4 py-5 md:py-10">
                    <div className="grid grid-cols-3 gap-6">
                        {
                            allPlants.map((plant, i) => {
                                return (
                                    <div className="" key={plant.id}>
                                        <img src={allPlants[4].image_url} alt={plant.scientific_name} className="" />
                                        <h2 className="">{plant.scientific_name}</h2>
                                        </div>
                                )
                            })
                        }
                        </div>
                </div>
            </section>
        </div>
    )
}