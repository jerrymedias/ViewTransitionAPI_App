import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Carousel from "../components/Carousel/Carousel";
import ContentPageTitle from "../components/ContentPageTitle/ContentPageTitle";
import { getDog } from "../api";

const DogPageSkeletonConfig = [
  {
    span: 6,
    height: "316px",
    classes: "flex alignCenter justifyCenter",
  },
  {
    span: 2,
    height: "50px",
    classes: "flex alignCenter justifyCenter marginTop-16",
  },
  {
    span: 4,
    height: "45px",
    classes: "flex alignCenter justifyCenter marginTop-16",
  },
  {
    span: 3,
    height: "20px",
    classes: "flex alignCenter justifyCenter marginTop-16",
  },
  {
    span: 4,
    height: "20px",
    classes: "flex alignCenter justifyCenter marginTop-8",
  },
]

const Product = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    images: [],
    name: "",
    animal: "",
    breed: "",
    city: "",
    state: "",
    description: "",
  });

  useEffect(() => {
    getDog(name.toLowerCase()).then((data) => {
      setLoading(false)
      setDog({
        images: data.photos,
        name: data.name,
        animal: data.animal,
        breed: data.breed,
        city: data.city,
        state: data.state,
        description: data.description,
      });
    });
  }, []);

  return (
    <div className="centered">
      {loading ? (
        <Loader config={DogPageSkeletonConfig} />
      ) : (
        <div>
          <Carousel images={dog.images} />
          <div>
            <ContentPageTitle dog={dog} />
              <p className="col-6">{dog.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
