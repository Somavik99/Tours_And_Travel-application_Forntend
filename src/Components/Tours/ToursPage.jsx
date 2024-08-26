import tourImage from "../../assets/tour.jpg";
import Cards from "../Cards/Cards";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import Loader from "../Loader/Loader";
import Search from "../Search/Search";
import { BASE_URI } from "../URL/configFile";
import { motion } from "framer-motion";
import "./toursPage.css";
import { useState } from "react";
import Pagination from "./Pagination/Pagiantion";

function ToursPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage, setToursPerPage] = useState(10);
  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/getAllToursData`
  );

  const lastPostIndex = currentPage * toursPerPage;
  const firstPostIndex = lastPostIndex - toursPerPage;

  const currentToursData = apiDataObject.dataArray.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <motion.div
      className="Tours__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <div className="Tours__header-image">
        <div>
          <h1>ALL TOURS</h1>
        </div>
        <img src={tourImage} alt="tourImage" />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Search />
      </div>
      {apiDataObject.dataArray.length !== 0 ? (
        <>
          <div className="Tours__card__cont">
            <div className="Tours__Cards">
              {currentToursData?.map((data, index) => {
                return <Cards data={data} key={index} />;
              })}
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Pagination
              totalTours={apiDataObject.dataArray.length}
              toursPerPage={toursPerPage}
              setCurrentPage={setCurrentPage}
              setToursPerPage={setToursPerPage}
            />
          </div>
        </>
      ) : (
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
            flexDirection: "column",
          }}
        >
          <Loader />
          <h1>Loading...!</h1>
        </section>
      )}
    </motion.div>
  );
}

export default ToursPage;
