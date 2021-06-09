import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css';

export default function Clase() {
  return (
    <div className="formulario">
      <TextField
        id="outlined-search"
        label=""
        type="search"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Add todo
      </Button>
      <ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
      </ul>
    </div>
  );
}
