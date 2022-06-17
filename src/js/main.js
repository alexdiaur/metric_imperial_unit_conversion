'use strict';

let numberEl = document.getElementById('num-el');
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');
let converNum = 20;

function converUnit() {
  converNum = numberEl.value;
  converLength();
  converVol();
  converMass();
}
converUnit();

function converLength() {
  let metresInFoot = 3.28084;
  let feet = converNum * metresInFoot;
  let metres = converNum / metresInFoot;
  lengthEl.innerHTML =
    converNum +
    ' ' +
    'meters =' +
    ' ' +
    feet.toFixed(3) +
    ' ' +
    'feet' +
    ' ' +
    ' | ' +
    converNum +
    ' ' +
    'feet =' +
    ' ' +
    metres.toFixed(3) +
    ' ' +
    'meters';
}

function converVol() {
  let litersInGallons = 3.785411784;

  let gallons = converNum * litersInGallons;
  let liters = converNum / litersInGallons;

  volumeEl.textContent =
    converNum +
    ' ' +
    'liters = ' +
    ' ' +
    liters.toFixed(3) +
    ' ' +
    'gallons' +
    ' | ' +
    converNum +
    ' ' +
    'gallons = ' +
    ' ' +
    gallons.toFixed(3) +
    ' ' +
    'liters';
}

function converMass() {
  let kiloInPounds = 2.2;

  let pounds = converNum * kiloInPounds;
  let kilos = converNum / kiloInPounds;

  massEl.textContent =
    converNum +
    ' ' +
    'kilos = ' +
    ' ' +
    pounds.toFixed(3) +
    ' ' +
    'pounds' +
    ' | ' +
    converNum +
    ' ' +
    'pounds = ' +
    ' ' +
    kilos.toFixed(3) +
    ' ' +
    'kilos';
}
