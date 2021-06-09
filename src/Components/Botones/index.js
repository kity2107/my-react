import Button from '@material-ui/core/Button';
import './styles.css';

import { Link } from 'react-router-dom';

const Botones = (props) => {
  const { title, variant, color } = props;
  return (
    <Link to="/exercises/new">
      <div className="boton1">
        <Button variant={variant} color={color}>
          {title}
        </Button>
      </div>
    </Link>
  );
};
export default Botones;

// export default function Botones(props) {
//   const { title, variant, color } = props;
//   return (
//     <Link to="/exercises/new">
//       <div className="boton1">
//         <Button variant={variant} color={color}>
//           {title}
//         </Button>
//       </div>
//     </Link>
//   );
// }
