// server-side code, see https://nextjs.org/docs#custom-server-and-routing
const bot = require('./bot.js')
//import sendmsg from "../bot/bot";
const express = require("express");
const next = require("next");
const axios = require("axios");
const ip = require("request-ip");
console.log(axios.isCancel('something'));

//Running port API
const PORT = 8000;
const USERID = 6042733898;
// initialize the Next.js application
const app = next({
  dev: process.env.NODE_ENV !== "production"
});

// initialize and inject Next-Express into Express.js
// 'nextExpress' will just be the same 'express': the name difference is only for clarity of intent
const nextExpress = require("next-express/server")(app).injectInto(express);

const cpaleads = axios.create({
  baseURL: 'https://cpalead.com/dashboard/reports/campaign_json.php',
  timeout: 10000,
});

const geoloc = axios.create({
  baseURL : 'https://ipgeolocation.abstractapi.com/v1/',
  timeout : 10000,
})



app.prepare()
  .then(() => {
    // create an Express.js application, augumented with
    // Next-Express: all the normal Express.js functions work as
    // normal
    const server = nextExpress();
    server.use(ip.mw())
    // one of the things that Next-Express adds is a method called
    // pageRoute() that you can use to define a route that serves
    // a Next.js page
    server.pageRoute({
      // GET requests to this path will be handled by this route
      path: "/",

      // path to the Next.js page to render
      // here this is redundant, since it's the same as "path"
      renderPath: "/",

      // an async function that fetches the data to be passed to
      // the page component rendered as props - this will always
      // run on the server
      async getProps(req, res) {
        bot(`USER : ${req.ip}`)
        console.log(req.ip)
        return { 
        };
      }
    });
    server.get("/offers", express.json(), async (req, res) => {
      const offers = await cpaleads.get("" , { params : { 
          id: 2439857,
          show : 5, 
          ip : req.ip,
          dating : true,
          subid : 'organic'
        } })
      res.json(offers.data).status(200).end()
      return;
    });
    
    // you can register any other routes as you want; you can also
    // use ALL the standard Express functions such as
    // server.get(), server.post(), server.use(), etc.

    // finally, start the server
    // next-express' listen() method returns a Promise if no callback
    // function was passed to it; it also automatically registers
    // the Next.js request handler (app.getRequestHandler())
    return server.listen(PORT);
  })
  .then(() => { 
    console.log(`> Running on http://localhost:${PORT}`)
    bot(`Bot running on server`)
  }) 
  .catch(err => {
    console.error(`Server failed to start: ${err.stack}`);
    process.exit(1);
  });