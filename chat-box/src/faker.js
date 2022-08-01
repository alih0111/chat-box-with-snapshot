import { faker } from '@faker-js/faker';

export function messageGenerator(count = 1) {
  const messages = [];
  do {
    let c=faker.random.numeric()%2
    messages.push({      
      id: faker.datatype.uuid(),
      type: c>0 ? "recived" : "sent",
      message: faker.lorem.paragraph(),
      time: faker.date.past().toLocaleTimeString(),
    });
    count--;
  } while (count);
  return messages;
}
