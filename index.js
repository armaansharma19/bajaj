const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const inputData = req.body.data;

  const full_name = "armaan_sharma"; 
  const dob = "19032004"; 
  const email = "armaanpandit@gmail.com"; 
  const roll_number = "2210990158"; 

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;

  inputData.forEach((item) => {
    if (!isNaN(item)) {
      const num = Number(item);
      sum += num;
      if (num % 2 === 0) {
        even_numbers.push(item.toString());
      } else {
        odd_numbers.push(item.toString());
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special_characters.push(item);
    }
  });

  const concat_string = alphabets
    .reverse()
    .join('')
    .split('')
    .map((char, idx) =>
      idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');

  const response = {
    is_success: true,
    user_id: `${full_name}_${dob}`,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
