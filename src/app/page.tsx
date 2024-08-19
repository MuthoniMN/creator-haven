function sayHello() {
  return "Hey, how are you?";
}
const dream = "I love me";
export default function Home() {
  const txt = sayHello();
  return (
    <main>
      <p>Trial #1 {dream} </p>
      <h1>Coding with Vim</h1>
      <p>{txt}</p>
    </main>
  );
}
