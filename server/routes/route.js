import express from "express";

import {addLink,getAllLinks,toggleLinkVisited,updateLink,deleteLink} from "../controller/link-controller.js";


const route = express.Router();

route.post('/links',addLink)
route.get('/links',getAllLinks)
route.get('/links/:id',toggleLinkVisited)
route.put('/links/:id',updateLink)
route.delete('/links/:id',deleteLink)
export default route;