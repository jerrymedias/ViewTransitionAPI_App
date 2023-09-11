import { useEffect, useState } from "react";
import { getBreeds } from "../api";

import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import { useNavigateWithTransition } from "../util/transition";
const HomePageSkeletonConfig = [
  {
    span: 6,
    height: "72px",
    classes: "marginTop-8"
  },
  {
    span: 6,
    height: "72px",
    classes: "marginTop-16"
  },
  {
    span: 6,
    height: "72px",
    classes: "marginTop-16"
  },
  {
    span: 6,
    height: "72px",
    classes: "marginTop-16"
  },
  {
    span: 6,
    height: "72px",
    classes: "marginTop-16"
  },
  {
    span: 6,
    height: "72px",
    classes: "marginTop-16"
  }
]
const Home = () => {
  const navigate = useNavigateWithTransition()
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then((data) => {
      setBreeds(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="centered">
      <h1>Breeds</h1>
      {loading ? (
        <Loader config={HomePageSkeletonConfig} />
      ) : (
        <section className="cards">
          {breeds.map((breed) => (
            <Card key={breed} header={breed} onClick={() => navigate(`/dogs/${breed}`, {transitionName: "forward-transition"})} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
