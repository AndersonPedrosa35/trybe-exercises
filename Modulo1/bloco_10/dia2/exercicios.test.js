const { uppercase, findUserById, getUserName, getRepos } = require('./exercícios');

it('should to return upppercase', () => {
  uppercase('ola', (string) => {
    expect(string).toBe('OLA');
  })
})

describe('Testando função getUser', () => {
  it('should to return a user', async () => {
    expect.assertions(1);
    const array = await getUserName(4)
    expect(array).toEqual('Mark');
  });
  it('doesn`t should to return user', async () => {
   try {
     await getUserName(6);
   } catch (error) {
     expect(error).toEqual({"error": "User with 6 not found."});
   }
  });
});

describe('Testando a função getRepos', () => {
  it('Should contain two repository', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos').then((response) => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});