const compare = (a, b) => {
  if (typeof a !== "string" || typeof b !== "string") return false;

  const text1 = a.trim().toLowerCase();
  const text2 = b.trim().toLowerCase();
  return text1.includes(text2);
};

const state = {
  objects: [
    {
      id: 1343,
      name: "Грузовой поезд Уфа - Казань",
      type: "train",
      status: "В пути",
      containers: "40 вагонов",
    },
    {
      id: 1333,
      name: "Грузовой поезд Краснодар - Москва",
      type: "train",
      status: "В пути",
      containers: "45 вагонов",
    },
    {
      id: 687,
      name: "Полувагон #687",
      type: "container",
      status: "В пути",
      weight: "41 т",
      train: "Грузовой поезд #1333",
    },
    {
      id: 2,
      name: "Железнодорожный вокзал Казань-1",
      type: "warehouse",
      status: "Круглосуточно",
      opacity: {
        status: "middle",
        text: "Нагруженность (56%)",
      },
    },
    {
      id: 2,
      name: "Железнодорожный вокзал Раевский",
      type: "warehouse",
      status: "08:00 - 20:00",
      opacity: {
        status: "low",
        text: "Нагруженность (35%)",
      },
    },
  ],
};
const getters = {
  OBJECTS: (state) => (search) => {
    if (!search) return [];
    return state.objects.filter(
      (object) =>
        compare(object.name, search) || compare(String(object.id), search)
    );
  },
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
