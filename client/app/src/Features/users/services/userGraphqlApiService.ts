export const userMoutations = `
mutation SetUser($input: setUserr) {
    setUser(input: $input) {
      firstName
      lastName
      email
      password
    }
  }
`