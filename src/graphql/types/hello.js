export default `
type HelloMessage {
  """
  returns the greeting for passed name
  """
  hello: String!
  """
  milliseconds from epoch Date.now()
  """
  date: Float!
}

type Query {
  hello(name: String!): HelloMessage
}
`
