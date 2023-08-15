
A minimalist/ simplistic javascript formula's evaluator based on acorn.

Aim is to enable user formulas on a front end application. The user formula is parsed through acorn and evaluated via a context object which provides objects and functions referenced though identifiers.

This is a very first draft , only capable of evaluating simple logic and maths, 


import { JSEvaluator } from "./js-evaluate/js-evaluate"

const expr = new JSEvaluator('(tags.car.color)==\'blue\' && tags.owner.name == \'John\'');

let interp;

interp = expr.evaluate({tags: {car: {color: 'blue'}, owner: {name: 'John'}}});
// returns true

interp = expr.evaluate({tags: {car: {color: 'red'}, owner: {name: 'John'}}});
// returns false

