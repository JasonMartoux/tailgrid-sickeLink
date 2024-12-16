export const defaultImages = {
  main: "https://placehold.co/1280x720",
  side: "https://placehold.co/600x400",
  thumb: "https://placehold.co/500x300"
};

export const fallbackCategories = [
  {
    title: "Services",
    description: "Nos services par défaut",
    pages: [
      {
        title: "Service par défaut",
        content: "<h1>Service</h1><p>Description du service par défaut.</p>",
        mainImg: defaultImages.main,
        sideImg: defaultImages.side
      }
    ]
  }
];

export const fallbackPages = [
  {
    title: "Services",
    mainImg: defaultImages.main,
    sideImg: defaultImages.side,
    content: "<h1>Nos Services</h1><p>Contenu par défaut des services.</p>"
  }
];
