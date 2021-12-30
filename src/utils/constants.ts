export const genderValues = ["male", "female", "other"];
export const professionsValues = ["commedian", "actor", "actres", "model"];
export const shoesizeValues = [
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15,
];
export const hairColorValues = ["blonde", "caramel", "black", "brown", "gray"];
export const hairLengthValues = ["long", "medium", "short", "bald"];
export const braSizeValues = [
  "26AA",
  "28AA",
  "30AA",
  "32AA",
  "34AA",
  "36AA",
  "38AA",
  "40AA",
  "42AA",
  "44AA",
  "46AA",
  "48AA",
  "50AA",
  "52AA",
  "54AA",
  "56AA",
  "58AA",
  "60AA",
];
export const waistValues = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const heights: number[] = [];
const weights: number[] = [];
for (let i = 150; i < 250; i++) {
  heights.push(i);
  weights.push(i - 50);
}
export const heightValues = [...heights];
export const weightValues = [...weights];
export const castingsValues = [
  "movies",
  "commercials",
  "newspapers",
  "magazines",
];

export const Selectables: { [key: string]: string[] | number[] } = {
  gender: genderValues,
  profession: professionsValues,
  shoesize: shoesizeValues,
  hairColor: hairColorValues,
  hairLength: hairLengthValues,
  braSize: braSizeValues,
  waist: waistValues,
  height: heightValues,
  weight: weightValues,
  castings: castingsValues,
};

export const Api_Endpoints = {
  get_all_subscriptions: "/api/subscription/all",
  search_subscriptions: "/api/subscription/search",
  submit_form: "/api/subscription",
};
