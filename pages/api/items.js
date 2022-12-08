// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Camiseta Argentina",
      price: 100,
      image: "http://localhost:3000/img/camiseta-arg.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 1,
      title: "Camiseta Costa Rica",
      price: 200,
      image: "http://localhost:3000/img/camiseta-costa.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 2,
      title: "Camiseta España",
      price: 200,
      image: "http://localhost:3000/img/camiseta-esp.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 3,
      title: "Pelota oficial World Cup Qatar 2022",
      price: 200,
      image: "http://localhost:3000/img/pelota.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 4,
      title: "Muñeco trapo",
      price: 30,
      image: "http://localhost:3000/img/trapo.png",
      description:
        "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
    },
    {
      id: 5,
      title: "Glow in the Dark Sticker Pack",
      price: 5,
      image: "http://localhost:3000/img/stickers02.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 6,
      title: "Adventure Sticker Pack",
      price: 10,
      image: "http://localhost:3000/img/stickers01.webp",
      description:
        "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
    },
    {
      id: 7,
      title: "Invertocat Pullover Hoodie",
      price: 10,
      image: "http://localhost:3000/img/pullover01.webp",
      description:
        "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
    },
  ]);
}
