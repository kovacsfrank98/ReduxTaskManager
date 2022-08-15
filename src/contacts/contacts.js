import '../App.css';
import Header from '../header';

function Contact(){
    return(
        <div>
            <h1>Contact Info</h1>
        <form>
            <div>
                <h3>First Name</h3>
                <input type="text" id="first" name="first" required />
            </div>
            <div>
                <h3>Last Name</h3>
                <input type="text" id="last" name="last" required />
            </div>
            <div>
                <h3>Email</h3>
                <input type="text" id="email" name="email" required />
            </div>
            <div>
                <h3>Comments</h3>
                <textarea id="comments" name="comments" rows="5" cols="40">Comments...</textarea>
            </div>
        </form>
        <button type="submit" id="sendForm">SUBMIT</button>
        </div>
    );
};

export default Contact;