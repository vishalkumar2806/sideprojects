const genlink = (link: string) => {
  const cards = [
    { title: "card-google", link: "google" },
    { title: "card-steam", link: "steam" },
    { title: "card-playstation", link: "psn" },
    { title: "card-spotify", link: "spotify" },
    { title: "card-itunes", link: "itunes" },
    { title: "card-paypal", link: "paypal" },
    { title: "card-amazon", link: "amazon" },
    { title: "card-xbox", link: "xbox" },
  ];
  const cardClassArry = cards.filter((cards) => {
    return link == cards.link;
  });
  return cardClassArry[0].title;
};

export default genlink;
