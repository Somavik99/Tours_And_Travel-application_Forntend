import { GiCancel } from "react-icons/gi";
import Cards from "../../Cards/Cards";
import "./Modal.css"

function Modal({ filteredData, setModalIsOpen }) {
  return (
    <div className="Modal__container">
      <div>
        <button><GiCancel/></button>
        <div>
          {Array.isArray(filteredData)
            ? filteredData.map((data, index) => (
                <Cards data={data} key={index} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
