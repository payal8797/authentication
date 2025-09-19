export interface User {
  id: number;
  username: string;
  passwordHash: string;
}

let users: User[] = [];
let nextId = 1;

export const db = {
  findUser: (username: string) => users.find(u => u.username === username),
  createUser: (username: string, passwordHash: string) => {
    const user: User = { id: nextId++, username, passwordHash };
    users.push(user);
    return user;
  },
};
