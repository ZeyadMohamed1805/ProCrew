import { Account } from "./Components/Account/Account";
import "./Components/Sass/Form/Form.css";

function Form() {
  return (
    <div className="Form">
      <div id="form-container">
        <Account />
      </div>
    </div>
  );
}

export default Form;