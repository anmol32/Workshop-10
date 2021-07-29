const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


router.get('/', async(req,res) => {
    try{
           const employees = await Employee.find()
           res.json(employees)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const employee = await Employee.findById(req.params.id)
           res.json(employee)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        sub:req.body.sub,
        
    })

    try{
        const a1 =  await employee.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const employee = await Employee.findById(req.params.id) 
        employee.sub = req.body.sub
        const a1 = await employee.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router