const express = require("express")
const router = express.Router()
const Test = require("../model/test")


router.get("/signin-page/signup/signup.html", async (req, res) => {
    try {
        const test = await Test.find()
        res.send(test)
    } catch (err) {
        console.log("error : " + err);
    }
})

router.post("/", async (req, res) => {
    const item = new Test(req.body)
    try {
        const a1 = await item.save()
        res.json(a1);
    } catch (err) {
        console.log("Error : " + err);
    }
})

router.put("/:id", async (req,res)=>{
    let update= await Test.findById(req.params.id)
    update= await Test.findByIdAndUpdate(req.params.id,req.body)
    res.send(update);
})

router.delete("/:id",async (req,res)=>{
    let del = await Test.findById(req.params.id)
    await del.remove()

} )



module.exports = router