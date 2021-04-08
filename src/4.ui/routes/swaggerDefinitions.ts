const info = {
    title: "Geo API",
    description: "Geo API information",
    contact: {
        name: "Dvilla, Clopez",
    },
    servers: ["http://localhost:3800"],
    version: "1.0.0",
}

const securityDefinitions = {
    authentication: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
}


export {
    info as info,
    securityDefinitions as securityDefinitions
}