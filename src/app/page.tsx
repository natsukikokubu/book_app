export default function Home() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()} / ${
    today.getMonth() + 1
  } / ${today.getDate()}`;
  console.log(formattedDate);

  return (
    <main>
      <div>
        {formattedDate}
        <p>Hello world!</p>
      </div>
    </main>
  );
}
