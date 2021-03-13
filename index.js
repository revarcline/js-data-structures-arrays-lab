// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const drivers_app = drivers.concat(name);
  return drivers_app;
}

function prependDriver(name) {
  const drivers_prep = [name, ...drivers];
  return drivers_prep;
}

function removeLastDriver() {
  const drivers_last = drivers.slice(0, -1);
  return drivers_last;
}

function removeFirstDriver() {
  const drivers_first = drivers.slice(1);
  return drivers_first;
}
