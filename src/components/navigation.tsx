const MENU: string[] = [
    "about",
    "grave for a bird",
    "a few stories",
    "What did Giovanni Boccaccio Dream About",
    "flying snake",
    "beside the color or",
    "rabbits",
    "continuing to learn from the bowerbird",
    "life drawings",
    "mother, father, brother",
    "movement score",
    "you look like an angel",
    "baltic sand",
    "snow leopards",
    "comics",
    "contacts",
];

const PATHS: string[] = MENU.map(element =>
  element.toLowerCase().replace(/\s+/g, "-")
);

const ELEMENTS: string[] = MENU.map(element =>
    element
      .toLowerCase()
      .split(" ")
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("")
);

export {MENU, PATHS, ELEMENTS};