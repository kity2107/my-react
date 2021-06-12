export default function Codigo() {
  //Avoid the “delete” keyword------------
  const simon = {
    ape: 'jr',
    age: 32,
    hanlde: 'SimonHoiberg',
    juego: 'lolo',
  };
  //-------------------------
  //solo todo menos juego no utilizar la palabra delete para modificar una propiedad
  const { juego, ...newSimon } = simon;
  console.log(newSimon);
  //----------------------------

  //Using a Falsy Bouncer----------

  const eventNumbersSquared = [1, 2, 3, 4]
    .map((n) => {
      if (n % 2 !== 0) {
        return null;
      }

      return n * n;
    })
    .filter(Boolean); //agregando esto me quita todo los null [null, 4, null, 16]

  console.log(eventNumbersSquared);

  //-Object Destructuring on arrays-----------------------
  const countries = ['dinamarca', 'argentina', 'brasil', 'usa', 'uk'];

  const { 0: dk, 3: usa } = countries;

  console.log(dk); //dinamarca
  console.log(usa); //usa

  //---------------------------------

  //Skip elements with Array Destructuring--------------

  const paises = ['dinamarca', 'argentina', 'brasil', 'usa', 'uk'];

  const [, , ...restoPaises] = paises;
  //los dos primeros paises no los muestro

  console.log(' Array Destructuring' + restoPaises);

  //-----------------------------------

  //Replacer function with JSON.stringify----------

  const foo = { bar: 42, baz: 'qux' };

  const replacer = (key, value) => (key === 'bar' ? value * 2 : value);

  const fooStr = JSON.stringify(foo, replacer);

  console.log('JSON.stringify ' + fooStr);

  //---------------------------------------------------------

  return <h1>resultado {eventNumbersSquared}</h1>;
}
