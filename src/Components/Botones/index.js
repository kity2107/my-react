import Button from '@material-ui/core/Button';
import './styles.css';

export default function Botones(props) {
  const { title, variant, color } = props;
  return (
    <div className="boton1">
      <Button variant={variant} color={color}>
        {title}
      </Button>
    </div>
  );
}
