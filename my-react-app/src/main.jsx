import { createRoot } from 'react-dom/client'

function Fruit() {
  const x = 5;
  return (
    <h1><em>{(x) < 10 ? "POTATO" : "Apple"}</em></h1>
  );
}