const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let norman;
let steve;

  beforeEach(function () {
    park = new Park('bobs', 15, 350)
    norman = new Dinosaur('t-rex', 'carnivore', 50);
    steve = new Dinosaur('triceratops', 'herbivore', 40);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'bobs');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(norman);
    const actual = park.howManyDinosaurs();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(norman);
    park.addDinosaur(steve);
    park.removeDinosaur(steve);
    const actual = park.howManyDinosaurs();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(norman);
    park.addDinosaur(steve);
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, norman);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(norman);
    park.addDinosaur(steve);
    const actual = park.dinosaursOfSameSpecies('triceratops');
    assert.deepStrictEqual(actual, [steve]);

  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(norman);
    park.addDinosaur(steve);
    park.removeAllDinosaursOfSpecie('triceratops')
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [norman])
  });

  it('should be able to calc total num of vistors per day', function () {
    const actual = park.ticketsBoughtPerDay;
    assert.deepStrictEqual(actual, 350);
  });

  it('should be able to calc total num of visitors per year', function () {
    const actual = park.ticketsBoughtPerYear();
    assert.deepStrictEqual(actual, 127750)
  });

  it('should be able to calc total revenue from ticket sales for one year', function () {
    const actual = park.totalRevenueForYear();
    assert.deepStrictEqual(actual, 1916250)
  });


// Calculate the total revenue from ticket sales for one year


});
