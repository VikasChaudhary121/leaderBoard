const users = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  points: Math.floor(Math.random() * 100000 + 10000),
  avatar: `https://i.pravatar.cc/150/${i + 1}`,
}));

users.sort((a, b) => b.points - a.points);

export default users;
