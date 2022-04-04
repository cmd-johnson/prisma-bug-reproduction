const { PrismaClient } = require('@prisma/client')

const client = new PrismaClient()

const number = parseFloat(process.argv[2])

;(async () => {
  let status = 'ok'
  try {
    await client.test.create({ data: { test: number } })
  } catch (err) {
    status = 'ERROR\n' + err
  }
  console.log(`${status} (${number})`)
})()
