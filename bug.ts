function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date()); // works fine
greet("John Doe"); // error