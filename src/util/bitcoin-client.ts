import Client from 'bitcoin-core-ts'

export const bitcoinClient = new Client({
  host: 'localhost',
  port: 5173,
  username: 'student',
  password: 'n24PTn9YHfRDteLaMMyE6KPNJTakd4cfmNVj62jd8kr2REi2i8Tn'
})
