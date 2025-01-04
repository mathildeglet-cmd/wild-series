import { useEffect, useState } from "react";

export default function Programs() {
  const fetchPrograms = import.meta.env.URL_API_PROGRAMS;
  const [programs, setprograms] = useState(null);

  useEffect(() => {
    fetch(`${fetchPrograms}`)
      .then((res) => res.json())
      .then((data) => setprograms(data));
  });

  return <>{programs}</>;
}
