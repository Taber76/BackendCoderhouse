/* Consigna: 
----------------------------------------------------------------------------------

----------------------------------------------------------------------------------

----------------------------------------------------------------------------------

----------------------------------------------------------------------------------
*/


const { config, staticFiles } = require('../config/environment')
const express = require('express')

const { logger, loggererr } = require('../log/logger')


//--- Para servidor FORK & CLUSTER
const cluster = require('cluster')
const numCPUs = require('os').cpus().length


//-------------------------- PROCESO BASE INICIO -------------------------  
//------------------------------------------------------------------------
const baseProcces = () => {

  cluster.on('exit', (worker, code, signal) => {
    logger.info(`Proceso ${worker.process.pid} caido!`)
    cluster.fork()
  })


  //--- Servicios Express
  const expressSession = require('express-session')
  const { Server: HttpServer } = require('http')
   const app = express()
  const httpServer = new HttpServer(app)


  //--- Routes
  const productRouter = require('../routes/productRouter')
  const sessionRouter = require('../routes/sessionRouter')
  const infoRouter = require('../routes/infoRouter')

  //--- Databases
  const MongoStore = require('connect-mongo')
  const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

 
  //--- Middlewares
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(staticFiles))
  app.use(expressSession({
    store: MongoStore.create({
      mongoUrl: process.env.MONGOCREDENTIALSESSION,
      mongoOptions: advancedOptions
    }),
    secret: 'secret-pin',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  }))
  
   
  //------------------------------ ROUTES 
  //-------------- SESSION ROUTER 
  app.use('/session', sessionRouter)

  //------------- API REST ROUTER 
  app.use('/api', productRouter)

  //------------- INFO ROUTER
  app.use('/info', infoRouter)

  //--- Rutas no implementadas
  app.get('*', (req, res) => {
    logger.warn(`Ruta: ${req.url}, metodo: ${req.method} no implemantada`)
    res.send(`Ruta: ${req.url}, metodo: ${req.method} no implemantada`)
  })


  //---------- SERVER ON
  let PORT = ( config.port) ? config.port : 8080 // puerto por defecto 8080

  if ( config.mode === 'CLUSTER') { // para CLUSTER si la clave same es 1 crea un puerto para cada worker
    PORT = config.same === 1 ? PORT + cluster.worker.id - 1 : PORT
  } 

  const server = httpServer.listen(PORT, () => {
    logger.info(`Servidor http escuchando en el puerto ${server.address().port}`)
  })
  server.on('error', error => loggererr.error(`Error en servidor ${error}`))
  
}
//------------------------------ PROCESO BASE FIN -----------------------------------  
//-----------------------------------------------------------------------------------



//---------------------------- LOGICA CLUSTER / FORK  -------------------------------

if ( config.mode != 'CLUSTER' ) { 

  //-- Servidor FORK
  logger.info('Server en modo FORK')
  baseProcces()
  } else { 

    //-- Servidor CLUSTER   
    if (cluster.isPrimary) {
      logger.info('Server en modo CLUSTER')
      for (let i = 0; i < numCPUs; i++) { // creo tantos procesos como cpus tengo
        cluster.fork()
      }
    } else {
      baseProcces()
    }
  }




