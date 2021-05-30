import Cards from '../Cards/Cards';
import exerciseImg from '../../images/exercise.png';

export default function Tarjeta() {
  return (
    <div>
      <Cards
        title="Technique Guides"
        description="Learn amazing street workout and calisthenics"
        img={exerciseImg}
        leftColor="#a74cf2"
        rightColor="#617bfb"
      />
      <Cards />
      <Cards />
    </div>
  );
}
