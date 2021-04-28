// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isPROD = process.env.NODE_ENV === 'production'

module.export = withPWA({
  pwa: {
    dest: 'public',
    disable: !isPROD
  }
})
