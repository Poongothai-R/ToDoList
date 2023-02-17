import OpenEye from "../assets/eye.png";
import CloseEye from "../assets/eye-slash.png";


//Testcase 1: View Completed Items when showCompleted is set to false
//Testcase 2: Hide Completed Items when showCompleted is set to true


export default function ButtonToggle({ showCompleted, onClick }) {
    const EyeImage = showCompleted ? CloseEye : OpenEye;

    return (
        <button className="button_icon" onClick={onClick}>
            <img src={EyeImage} alt="Eye" className="icon" />
            <span>{showCompleted ? "Hide" : "View"} Completed Items</span>
        </button>
    );
}