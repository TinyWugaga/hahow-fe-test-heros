import { useState, useEffect } from "react";

export default function HerosPage() {
  const [heros, seHeros] = useState([]);

  useEffect(() => {
    fetch("https://hahow-recruit.herokuapp.com/heroes").then((res) =>
      console.log({ res })
    );
  });
  return <div></div>;
}
