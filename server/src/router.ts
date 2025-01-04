import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here

/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/item/programActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/programs", programActions.browse);

import categoryActions from "./modules/item/category/categoryActions";
import sayActions from "./modules/item/say/sayActions";

router.get("/", sayActions.sayWelcome);
router.get("/api/program/", programActions.browse);
router.get("/api/programs/:id", programActions.read);

router.get("/api/categories/", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);
/* ************************************************************************* */

export default router;
