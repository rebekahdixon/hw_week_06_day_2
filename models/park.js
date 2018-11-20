const Park = function (name, ticketPrice, ticketsBoughtPerDay) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
  this.ticketsBoughtPerDay = ticketsBoughtPerDay;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.howManyDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.removeDinosaur = function(dinosaur) {
  for(let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i] === dinosaur) {
      this.dinosaurs.splice(i, 1);
      break;
    }
  }
};

Park.prototype.mostPopularDinosaur = function () {
  sortedDinosaurs = this.dinosaurs.sort(function (a, b) {
  return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
});
  return sortedDinosaurs[0];
};

Park.prototype.dinosaursOfSameSpecies = function (specie) {
  const result = this.dinosaurs.filter(dinosaur => dinosaur.species === specie);
  return result
};

Park.prototype.removeAllDinosaursOfSpecie = function (specie) {
  const result = this.dinosaurs.filter(dinosaur => dinosaur.species !== specie);
  return this.dinosaurs = result;
};

Park.prototype.ticketsBoughtPerYear = function () {
  return this.ticketsBoughtPerDay * 365
};

Park.prototype.totalRevenueForYear = function () {
  return this.ticketsBoughtPerYear() * this.ticketPrice
};

module.exports = Park;
