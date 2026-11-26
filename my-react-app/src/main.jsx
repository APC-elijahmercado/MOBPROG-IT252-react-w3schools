import { createRoot } from 'react-dom/client'

// React Class Components
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a carrrr!</h2>;
  }
}


// React Props
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);

function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

// React Destructuring Props

function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);