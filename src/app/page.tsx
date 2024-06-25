import axios from "axios";
import apiClient from "@/lib/apiClient";
import { use, useEffect, useState } from "react";
import { Books } from "./type";

const today = new Date();
const formattedDate = `${today.getFullYear()} / ${
  today.getMonth() + 1
} / ${today.getDate()}`;

export default function Home() {
  const [books, setBooks] = useState<Books[]>([]);
  {
    useEffect(() => {
      async function fetchBooks() {
        const data = await supabase.from("books").select("*");
        if (data) {
          setBooks(data);
        } else {
          console.error("Failed to fetch books");
        }
      }
    }, []);
    return (
      <main>
        <div>
          {formattedDate}
          <p>Hello world!</p>
        </div>
      </main>
    );
  }
}
