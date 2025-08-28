import express from "express";
import createApp from "./app";

const app = createApp() 
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

});


// no res.status é possivel fazer encadeamento pelo express juntando status e json em uma so em uma linha   