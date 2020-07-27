module.exports = ({ env }) => {
  console.log("DEVELOPMENT MODE  mlab as Database");

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          uri: env("MLAB_DB_URI"),
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};
