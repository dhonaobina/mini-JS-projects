const angelFactory = (angelName, namedFor) => {
    return {
    angelName,
    namedFor,
    angelSays() {
        console.log('Peace be with you!');
    }
  }
};
const angelCan = angelFactory('Saint Michael', 'a spirit warrior');
angelCan.angelSays();