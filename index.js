const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
// Define associations here
Band.belongsToMany(Musician, { through: "bandID" });
Musician.belongsTo(Band, { through: "bandID" });

Song.belongsToMany(Band, { through: "BandSong" });
Band.belongsToMany(Song, { through: "BandSong" });

module.exports = {
  Band,
  Musician,
  Song,
};
