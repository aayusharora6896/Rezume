const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require('cors')


const userRoutes = require("./routes/api/user_route");
const profileRoutes = require("./routes/api/profile_route");
const contactRoutes = require("./routes/api/contact_details_route");
const educationRoutes = require("./routes/api/education_route");
const achievementRoutes = require("./routes/api/achievement_route");
const experienceRoutes = require("./routes/api/experience_route");
const projectRoutes = require("./routes/api/projects_route");
const skillsRoutes = require("./routes/api/skills_route");
const publicationsRoutes = require("./routes/api/publication_route");
const customFieldRoutes = require("./routes/api/custom_field_route");
const fieldRoutes = require("./routes/api/field_route");
const colorsRoutes = require("./routes/api/colors_route");
const fontsRoutes = require("./routes/api/font_route");
const fontSizesRoutes = require("./routes/api/font_size_route");
const resumeRoutes = require("./routes/api/resume_route");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
  );
  app.use(bodyParser.json());
  
  app.use(cors());
  // DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", userRoutes);
app.use("/api", profileRoutes);
app.use("/api", contactRoutes);
app.use("/api", educationRoutes);
app.use("/api", experienceRoutes);
app.use("/api", achievementRoutes);
app.use("/api", projectRoutes);
app.use("/api", skillsRoutes);
app.use("/api", publicationsRoutes);
app.use("/api", resumeRoutes);
app.use("/api", customFieldRoutes);
app.use("/api", fieldRoutes);
app.use("/api", colorsRoutes);
app.use("/api", fontsRoutes);
app.use("/api", fontSizesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
