const users = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    gender: "Male",
    hobby: "Reading",
    phone_number: "123-456-7890",
    score: 85,
  },
  {
    username: "jane_smith",
    email: "jane.smith@example.com",
    gender: "Female",
    hobby: "Traveling",
    phone_number: "987-654-3210",
    score: 92,
  },
  {
    username: "mike_jones",
    email: "mike.jones@example.com",
    gender: "Male",
    hobby: "Gaming",
    phone_number: "555-123-4567",
    score: 76,
  },
  {
    username: "susan_lee",
    email: "susan.lee@example.com",
    gender: "Female",
    hobby: "Cooking",
    phone_number: "444-765-4321",
    score: 88,
  },
  {
    username: "david_brown",
    email: "david.brown@example.com",
    gender: "Male",
    hobby: "Hiking",
    phone_number: "333-222-1111",
    score: 95,
  },
];

const Userusername = users.map((user) => `${user.username}`);
const filterGender = users.filter((user) => user.gender === "Female");
const sumAllScore = users.reduce((num, value) => num += value.score, 0)

console.log(Userusername);
console.log(filterGender);
console.log(sumAllScore);
