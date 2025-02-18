require("dotenv").config();


const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const authRoutes = require("./routes/auth");  

const app = express();

app.use(cors());
app.use(express.json());

const serviceAccount = require("./firebaseConfig.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
