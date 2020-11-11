// styling
import './FocusForm.css';

const FocusForm = () => {
    return (
        <form className="FocusForm">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <br/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
        </form>
    );
}

export default FocusForm;