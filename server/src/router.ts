import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
router.get("/api/programs", programActions.browse);
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/item/programActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
