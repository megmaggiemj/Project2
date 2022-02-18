import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { bobQuotes } from '../CharacterInfo/quoteArray';

function dropdown() {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Character Info
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="https://bobsburgers-api.herokuapp.com/characters/478">Action</Dropdown.Item>
      <Dropdown.Item href="{bobQuotes[0]}">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


);
}

export default dropdown