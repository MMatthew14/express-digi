import express from 'express'

const app = express ()

const port = 3000 

app.use(express.json());

let icecreamData = []
let nextId = 1

// add a new ice cream
app.post('/icecream', (req, res) => {
    
    const {name, price} = req.body
    const newicecream = {id: nextId++,name,price}
    icecreamData.push(newicecream)
    res.status(201).send(newicecream)
})

//get all ice cream
app.get ('/icecream', (req,res) => {
    res.status(200).send(icecreamData)
})

//get ice cream with id
app.get('/icecream/:id', (req, res) => {
  const icecream = icecreamData.find((i) => i.id === parseInt(req.params.id));

  if (!icecream) {
    return res.status(404).send('Ice cream not found');
  }
  res.status(200).send(icecream);
});

//update ice cream 

app.put('/icecream:id', (res, req) => {
   
   const icecream = icecreamData.find (i => i.id === parseInt(icecreamId)); 
    
   if (!icecream) {
      return res.status(404).send('Ice cream not found');
    }
    const {name, price} = req.body;
    icecream.name = name;
    icecream.price = price;
    res.send (200).send(icecream);
})

//delete ice cream
app.delete ('/icecream:id', (req, res) => {
const index = icecreamData.findIndex (i => i.id === parseInt (req.params.id))
if (index === -1) {
    return res.status(404).send('Ice cream not found');
  }
 icecreamData.splice(index, 1);
 res.status(204).send('deleted');
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}...`);
});




