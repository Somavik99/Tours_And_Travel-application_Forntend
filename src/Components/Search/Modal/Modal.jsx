import { RxCross1 } from "react-icons/rx";
import Cards from "../../Cards/Cards";
import "./Modal.css";
import { useRef } from "react";
import Loader from "../../Loader/Loader";

function Modal({ searchedData, setModalIsOpen }) {
  const modalClose = useRef();

  function closeOpenModal(e) {
    modalClose.current === e.target ? setModalIsOpen() : null;
  }

  return (
    <div
      className="Modal__container"
      ref={modalClose}
      onClick={(e) => closeOpenModal(e)}
    >
      <div className="Modal__body">
        <button onClick={() => setModalIsOpen()} className="close__btn">
          <RxCross1 fontWeight={800} />
        </button>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Here are the results related to your search...!
        </h2>
        {Array.isArray(searchedData) && searchedData.length !== 0 ? (
          <div className="Modal__cards">
            {searchedData.map((data, index) => (
              <Cards data={data} key={index} />
            ))}
          </div>
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
      </div>
    </div>
  );
}

export default Modal;
