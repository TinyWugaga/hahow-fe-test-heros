import { useState, useEffect } from "react";

interface Hero {
  id: string;
  name: string;
  image: string;
}

export default function HerosPage() {
  const [heros, seHeros] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const response = await fetch(
          "https://hahow-recruit.herokuapp.com/heroes",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const hahowHeros = await response.json();
        seHeros(hahowHeros);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeros();
  }, []);
  return (
    <div>
      {heros.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </div>
  );
}
