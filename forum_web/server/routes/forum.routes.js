const ForumController = require("../controllers/Forum.controller");

module.exports = (app)=>{
    app.post("/api/forums", ForumController.createForum);
    app.get("/api/forums", ForumController.allForums);
    app.get("/api/forums/:id", ForumController.oneForum);
    app.put("/api/forums/:id", ForumController.updateForum);
    app.delete("/api/forums/:id", ForumController.deleteForum);
    app.post("/api/user", ForumController.createUser);
}