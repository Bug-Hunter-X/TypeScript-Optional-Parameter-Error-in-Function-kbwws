function greet(person: string, date?: Date) {
  if (date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
  } else {
    console.log(`Hello ${person}, today is unknown`);
  }
}

greet("John Doe", new Date());
greet("John Doe");