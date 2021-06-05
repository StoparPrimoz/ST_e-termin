var express = require('express');
var router = express.Router();
var database = require('../database/dao')
var verifikacija = require('../verification/verification')
var jwt = require('express-jwt');
var cors = require('cors')

router.use(jwt({ secret: process.env.SECRET,
  algorithms: ['HS256']
}).unless({path: ['/user/register',"/user/login"]}));

router.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    console.log(err.message);
    res.status(err.status).send({message:err.message});
    return;
  }
next();
});

router.use(cors({exposedHeaders:['Authorization']}))



//GET list of services
router.get("/", async (req, res) => {
    const rezultat = await database.getSeznamStoritev()
    res.json({services: rezultat})
  });

  /* GET list of customers */
router.get('/stranke/:storitevId', async function(req, res, next) {
  try{
    const data = await database.getCustomerList(req.params.storitevId);
    res.json({ customers: data });
  }
  catch(error){
    console.error(error);
  }
});

/* UPDATE working hours of service */
router.put('/delovnicas/:storitevId', async function(req, res, next) {
  try{
    const data = await database.updateWorkingHours(req.params.storitevId, req.body.workinghours);
    res.json({ result: data });
  }
  catch(error){
    console.error(error);
  }
});

/* CREATE working hours of service */
router.post('/delovnicas/:storitevId', async function(req, res, next) {
  try{
    const data = await database.createWorkingHours(req.params.storitevId, req.body.workinghours);
    res.json({ result: data });
  }
  catch(error){
    console.error(error);
  }
});

/* DELETE working hours of service */
router.delete('/delovnicas/:storitevId', async function(req, res, next) {
  try{
    const data = await database.deleteWorkingHours(req.params.storitevId);
    res.json({ result: data });
  }
  catch(error){
    console.error(error);
  }
});

module.exports = router;