const name = process.argv[2];
const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

let number = '';

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    number = phonebook[i].number;
    break;
  }
}

if (number) {
  console.log(`The phone number of ${name} is ${number}.`);
} else {
  console.log(`Sorry, there is no phone number for ${name}.`);
}
