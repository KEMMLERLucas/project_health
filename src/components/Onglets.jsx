import "./SuiviPatient.css";


function Onglets({ name, active, onClick }) {
    const color = () => {
        console.log("Cliqué : " + name);
        if (onClick) onClick();
    };

    let classNameActive = "Onglets";

    if (active) {
        classNameActive += " active";
    }

    return (
        <span className={classNameActive} onClick={color}>
            {name}
        </span>
    );
}

export default Onglets