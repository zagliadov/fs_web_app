const categories = [
  {
    id: "Quick Bread",
    name: "Quick Bread",
    endpoint: "/bread",
    img: '/img/tomato.avif',
    title: 'Quick Bread',
  },
  {
    id: "burger",
    name: "burger",
    endpoint: "/burger",
    img: '/img/burger.avif',
    title: 'Burger',
  },
  {
    id: "tomato",
    name: "tomato",
    endpoint: "/tomato",
    img: '/img/bread.avif',
    title: 'Tomato basil',
  },
  {
    id: "bread2",
    name: "Bread",
    endpoint: "/bread",
    img: '/img/tomato.avif',
    title: 'Bread',
  },
  {
    id: "burger2",
    name: "burger",
    endpoint: "/burger",
    img: '/img/burger.avif',
    title: 'Burger',
  },
  {
    id: "tomato2",
    name: "tomato",
    endpoint: "/tomato",
    img: '/img/bread.avif',
    title: 'Tomato basil',
  },
  {
    id: "bread3",
    name: "Bread",
    endpoint: "/bread",
    img: '/img/tomato.avif',
    title: 'Bread',
  },
  {
    id: "burger3",
    name: "burger",
    endpoint: "/burger",
    img: '/img/burger.avif',
    title: 'Burger',
  },
  {
    id: "tomato3",
    name: "tomato",
    endpoint: "/tomato",
    img: '/img/bread.avif',
    title: 'Tomato basil',
  },
  {
    id: "bread4",
    name: "Bread",
    endpoint: "/bread",
    img: '/img/tomato.avif',
    title: 'Bread',
  },
  {
    id: "burger4",
    name: "burger",
    endpoint: "/burger",
    img: '/img/burger.avif',
    title: 'Burger',
  },
  {
    id: "tomato4",
    name: "tomato",
    endpoint: "/tomato",
    img: '/img/bread.avif',
    title: 'Tomato basil',
  },
  {
    id: "bread5",
    name: "Bread",
    endpoint: "/bread",
    img: '/img/tomato.avif',
    title: 'Bread',
  },
  {
    id: "burger5",
    name: "burger",
    endpoint: "/burger",
    img: '/img/burger.avif',
    title: 'Burger',
  },
  {
    id: "tomato5",
    name: "tomato",
    endpoint: "/tomato",
    img: '/img/bread.avif',
    title: 'Tomato basil',
  },
];
export default function handler(req, res) {
  res.status(200).json(categories);
}
