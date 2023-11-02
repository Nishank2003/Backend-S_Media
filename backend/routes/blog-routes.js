import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getById,
  updateBlog,
} from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
//https://www.youtube.com/watch?v=_ee38nL13mE
//Time Stamp ----->   104:32
export default blogRouter;
