import bootstrapSubApp from './sub-app/boot'
import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('hello express\n'))

async function mountSubApp (app, mountPath, subAppBoot) {
  const subApp = await subAppBoot()
  await subApp.init()

  app.use(mountPath, subApp.getHttpAdapter().getInstance())
  return app
}

mountSubApp(app, '/sub', bootstrapSubApp)
  .then(app => app.listen(4000))
