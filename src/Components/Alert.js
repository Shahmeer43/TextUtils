import "../Styles/AlertStyle.css";

let Alert = ({ msg }) => {
  return msg && <div className="alertContainer">{msg} </div>;
};

export default Alert;
