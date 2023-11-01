const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    const newBand = await Band.create({
      name: "Example Band Name",
      genre: "Example Genre",
    });
    expect(newBand.name).toBe("Example Band Name");
    expect(newBand.genre).toBe("Example Genre");
  });

  test("can create a Musician", async () => {
    const newMusician = await Musician.create({
      name: "Example Musician Name",
      instrument: "Example Instrument",
    });
    expect(newMusician.name).toBe("Example Musician Name");
    expect(newMusician.instrument).toBe("Example Instrument");
  });

  test("can update a Band", async () => {
    const bandUpdate = await Band.create({
      name: "Example Name",
      genre: "Example Genre",
    });
    const updatedBand = await bandUpdate.update({
      genre: "New Example Genre",
    });
    expect(updatedBand.genre).toBe("New Example Genre");
  });

  test("can update a Musician", async () => {
    const musicianUpdate = await Musician.create({
      name: "Example Musician",
      instrument: "Example Instrument",
    });
    const updatedMusician = await musicianUpdate.update({
      instrument: "New Example Instrument",
    });
    expect(updatedMusician.instrument).toBe("New Example Instrument");
  });
  test("can delete a Band", async () => {
    const bandDelete = await Band.create({
      name: "BandDelete",
      genre: "GenreDelete",
    });
    const deletedBand = await bandDelete.destroy();

    expect(deletedBand).toBeTruthy();
  });

  test("can delete a Musician", async () => {
    const musicianDelete = await Musician.create({
      name: "MusicianDelete",
      instrument: "InstrumentDelete",
    });
    const deletedMusician = await musicianDelete.destroy();

    expect(musicianDelete).toBeTruthy();
  });
});
