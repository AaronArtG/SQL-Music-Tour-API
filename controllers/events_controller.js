const Event = require("express").Router();
const db = require("../models");
const { Op } = require("sequelize"); 
const { Events } = db;


// get * event
Event.get("/", async (req, res) => {
    try {
        const foundEvents = await Event.findAll();
        
        res.status(200).json(foundEvents);
    } catch (e) {
        res.status(500).json(e);
    }
})

// get one event
Event.get("/:id", async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {
                event_id: req.params.id
            }
        });
        res.status(200).json(foundEvent);
    } catch (e) {
        res.status(500).json(e);
    }
})

// create event
Event.post("/", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json(newEvent);
    } catch (e) {
        res.status(500).json(e);
    }
})

// UPDATE EVENT
Event.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: { event_id: req.params.id }
        })
        res.status(200).json({
            message: `Updated ${updatedEvents} events`
        })
    } catch(e) {
        res.status(500).json(e)
    }
})

// DELETE EVENT
Event.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: { event_id: req.params.id }
        })
        res.status(200).json({
            message: `Deleted ${deletedEvents} events`
        })
    } catch(e) {
        res.status(500).json(e)
    }
})

module.exports = Event;