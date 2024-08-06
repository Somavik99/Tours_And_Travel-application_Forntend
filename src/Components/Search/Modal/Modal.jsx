import { RxCross1 } from "react-icons/rx";
import Cards from "../../Cards/Cards";
import "./Modal.css";
import { useRef } from "react";

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
        <div className="Modal__cards">
          {Array.isArray(searchedData)
            ? searchedData.map((data, index) => (
                <Cards data={data} key={index} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
