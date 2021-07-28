require('dotenv').config()
const express = require('express')
const app= express()
const jwt=require('jsonwebtoken')

app.use(express.json())

const posts=[
    {
        username:'Ram',
        title:'Post1'
    },
    {
        username:'Rahim',
        title:'Post2'
    }
]

app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post=>post.username === req.user.name))

})

// app.post('/login',(req,res)=>{
     //Authentication User

//     const username= req.body.username

//     const user= {name:username}
    // what we want to serialize
//    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
   // returning accessstoken
//    res.json({accessToken:accessToken})
// })

//middleware 

function authenticateToken(req,res,next){
  // token come from the header called bearer
  const authHeader=req.headers['authorization']
  const token=authHeader.split(' ')[1]
  if(token == null)
  return res.sendStatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err)return res.sendStatus(403)
      req.user=user
      next()
  })
  //Bearer TOKEN
}

app.listen(3000)