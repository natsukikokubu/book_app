const today = new Date();
const formattedDate = `${today.getFullYear()} / ${
  today.getMonth() + 1
} / ${today.getDate()}`;

export default function Home() {
  return (
    <main>
      <div>
        {formattedDate}
        <p>Hello world!</p>
      </div>
    </main>
  );
}
