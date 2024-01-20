const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const port =process.env.PORT || 3000
app.use(bodyParser.json())
app.use(cors())

const ProductsModel= new mongoose.model("asmar",

new mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    img:String
})
)

//CRUD
app.get('/products', async(req,res)=>{
    const products= await ProductsModel.find({})
    res.send(products)
})

app.get('/products/:id', async(req,res)=>{
    const id=req.params.id
    const product= await ProductsModel.findById(id)
    res.send(product)
})

app.post('/products', async(req,res)=>{
    const newPro= new ProductsModel({
        name:req.body.name,
        price:req.body.price,
        title:req.body.title,
        img:req.body.img
    })
    await newPro.save()
    res.send(newPro)
})
app.delete('/products/:id', async(req,res)=>{
    const id= req.params.id
    const deletePro= await ProductsModel.findByIdAndDelete((id))
    res.send(deletePro)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGODB CONNECTED");
}).catch((err)=>{
    console.log("Faild");
})