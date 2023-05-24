import Card from './Card';
import UseCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = UseCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
