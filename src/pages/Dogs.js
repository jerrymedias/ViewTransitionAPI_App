import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";

import { getDogs } from "../api";
import { useNavigateWithTransition } from "../util/transition";
const DogsPageSkeletonConfig = [
  {
    span: 6,
    height: "328px",
    classes: "flex alignCenter justifyCenter",
  },
  {
    span: 6,
    height: "328px",
    classes: "flex alignCenter justifyCenter marginTop-16",
  },
]

const Category = () => {
  const { breed } = useParams();
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigateWithTransition()


  useEffect(() => {
    getDogs(breed.toLowerCase()).then((data) => {
      setDogs(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="centered">
      <h1>{breed}</h1>
      {loading ? (
        <Loader config={DogsPageSkeletonConfig} />
      ) : (
        <section className="cards">
          {dogs.map((dog) => (
            <div key={dog.name + dog.image}>
              <Card
                header={dog.name}
                image={dog.image}
                onClick={() => navigate(`/dog/${dog.name?.toLowerCase()}`, {transitionName: "forward-transition"})}
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Category;
