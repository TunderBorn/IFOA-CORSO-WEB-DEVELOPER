import Button from "react-bootstrap/esm/Button";

function CustomButton(props) {
    return (
        <>
        <button className="btn btn-outline-light">
                     {props.btn}
                    </button>
        </>
    )
}

export default CustomButton;