
import { JSEvaluator } from "./js-evaluate/js-evaluate"

const expr = new JSEvaluator('(tags.car.color)==\'blue\' && tags.owner.name == \'John\'');

let interp;

interp = expr.evaluate({tags: {car: {color: 'blue'}, owner: {name: 'John'}}});
if(!interp) console.log('ERROR')

interp = expr.evaluate({tags: {car: {color: 'red'}, owner: {name: 'John'}}});
if(interp) console.log('ERROR')

