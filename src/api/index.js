import { request } from "../util/request";

const hasPort = window.location.port;
const basePath = hasPort ? "http://localhost:3001" : "";

export const getBreeds = () => {
  // return request.get(`${basePath}/api/breeds`);
  return new Promise((resolve) => {
    resolve(["Akita", "Aussiedoodle", "Beagle", "Bernedoodle", "Bloodhound", "Cockapoo"])
  })
};

export const getDogs = (breed) => {
  return request.get(`${basePath}/api/dogs/${breed}`);
};

export const getDog = (name) => {
  return request.get(`${basePath}/api/dog/${name}`);
  // return new Promise((resolve) => {
  //   resolve(
  //     {
  //       id: 56704134,
  //       name: "Marley",
  //       animal: "Dog",
  //       breed: "Akita",
  //       description: "This giant boy (about 85 pounds & 2 years old) is a sofy at heart. He takes treats so gently...",
  //       photos: [
  //         "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/1/?width=248",
  //         "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/2/?width=248",
  //         "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/3/?width=248",
  //         "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/4/?width=248",
  //         "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/5/?width=248"
  //       ],
  //       city: "Tracy",
  //       state: "CA"
  //     }
  //   )
  // })
};
