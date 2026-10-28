// The services read host (the json-server `npm start` runs on db.json) and server (the API behind /homes/created) in every build. No other deployment of either is defined in this repo, so production points at the same two.
export const environment = {
  production: true,
  host: "http://localhost:3000",
  server: "http://localhost:8080"
};
