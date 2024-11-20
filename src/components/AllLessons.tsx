import { useEffect, useState } from "preact/hooks";
import type { Lesson } from "@prisma/client";

export default function AllLesson() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    async function fetchLessons() {
      const response = await fetch("/api/all", { method: "POST" });
      const data = await response.json();
      setLessons(data);
    }
    fetchLessons();
    console.log("ok");
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Folio</th>
            <th>Title</th>
            <th>Area</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson: Lesson) => (
            <tr class={"hover"}>
              <th>{lesson.id}</th>
              <th>{lesson.summary}</th>
              <th>{lesson.area}</th>
              <th>{lesson.createdAt}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
