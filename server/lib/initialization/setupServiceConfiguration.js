// First, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "google"
});
//noinspection SpellCheckingInspection
ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "335972580959-rh6bp65u4e3gfj9eng1s6burtundhlos.apps.googleusercontent.com",
  loginStyle: "popup",
  secret: "G1hCq4SWVzknc0BazaIJRwz7"
});