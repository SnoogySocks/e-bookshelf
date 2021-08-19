import React, { useEffect } from "react";
// Styles
import "./AddingPopup.styles.css";

const AddingPopup = ({ children, show, onClose }) => {
    const popupRef = useRef(null);
    useEffect(
        () => {
            if (show) {
                popupRef.current.classList.add(".visible");
            } else {
                popupRef.current.classList.remove(".visible");
            }
        }
    , [show]);
    
    return (
		<React.Fragment>
			<div
				ref={popupRef}
				className="wrapper"
			>
				<Button
					onClick={onClose}
					style={{
						width: 60,
						height: 40,
						position: "absolute",
						top: 0,
						right: 0,
						margin: "1rem",
					}}
					className={styles.close__btn}
				>
					<CloseIcon
						height="20px"
						width="20px"
						className={styles.close__icon}
					/>
				</Button>
				<div style={modalStyle} className={styles.modal}>
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default AddingPopup;