import Alert from "react-bootstrap/Alert";
import "./AlertBanner.css";

function AlertBanner() {
  return (
     <Alert className="customAlert">
      <h2>Benvenuto su Happy Tail</h2>

      <p>
        La guida perfetta per conoscere i cani e trovare quello giusto per te.
      </p>
    </Alert>
  );
}

export default AlertBanner;