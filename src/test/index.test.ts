// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { somme } from "../index";

describe("La fonction somme", () => {
  test("avec un tableau vide", () => {
    expect(somme([])).toBe(0);
  });
  test("avec un tableau de nombres positifs", () => {
    expect(somme([1, 2, 3, 4, 5])).toBe(15);
  });
  test("avec un tableau de nombres négatifs", () => {
    expect(somme([-1, -2, -3, -4, -5])).toBe(-15);
  });
  test("avec un tableau de nombres mixtes", () => {
    expect(somme([-1, 2, -3, 4, -5])).toBe(-3);
  });
  test("avec un tableau contenant des zéros", () => {
    expect(somme([0, 0, 0, 0])).toBe(0);
  });
  test("avec un tableau contenant un seul élément", () => {
    expect(somme([42])).toBe(42);
  });
});
