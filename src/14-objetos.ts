(() => {
const login = (
  data: {
    email: string,
    password: number
  }) => {
console.log(data.email, data.password);
}

login({
  email: 'camilo@taborda.com',
  password: 122334,
})
})();
