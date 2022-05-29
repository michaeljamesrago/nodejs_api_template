import express from 'express'
import pool from "../db.js"

const router = express.Router()

const testObject = {
    prop1: "Hello",
    prop2: 35
}

router.get('/', async (req, res) => {
    try {
        /*
        let data = await pool.query(
            "<<SQL STATEMENT GOES HERE>>"
        )
        res.send(data.rows)
        */
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        /* <<REQUEST BODY AVAILABLE THROUGH req.body>>
        let data = await pool.query(
            "<<SQL STATEMENT GOES HERE>>"
        )
        res.send( { success: true })
        */
    } catch (err) {
        console.log(err)
    }
})

export default router