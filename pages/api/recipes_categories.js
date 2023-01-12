const categories = {
  bread: {
    id: "bread",
    name: "Bread",
    endpoint: "/bread",
  },
};
export default function handler(req, res) {
  res.status(200).json([categories]);
}
