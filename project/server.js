const express = require('express');


const { connectDB, studentmodel } = require('./models/student');
const app = express();
app.use(express.json());
connectDB();

app.post('/addStudent', async (req, resp) => {
    try{
        const data=new studentmodel({
            name:req.body.name,
            email:req.body.email,
            course:req.body.course,
            age:req.body.age
        })

        const result=await data.save();
        console.log(result);
        resp.json(result);
    }
    catch(err){
        console.log(err);
       
    }
})

app.get('/showStudents', async (req, resp) => {
    try{
        const data=await studentmodel.find();
        
        resp.json(data);
    }
    catch(err){
        console.log(err);   
    }
})

app.delete('/deleteStudent/:id', async (req, resp) => {
    try{
        const data=await studentmodel.findByIdAndDelete(req.params.id);
        resp.json(data);
    }
    catch(err){
        console.log(err);
        
    }
})

app.patch('/updateStudent/:id', async (req, resp) => {
    try{
        const data=await studentmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        resp.json(data);
    }
    catch(error){
        console.log(error);
    }
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
