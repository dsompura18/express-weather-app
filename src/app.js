const express =  require('express');
const requests = require('requests');
const app = express();
const path = require('path');
const hbs = require('hbs');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const upload = multer();





// for hbs files
app.set('view engine', 'hbs');

// declare partial
const partialPath= path.join(__dirname,"../src/partials")
hbs.registerPartials(partialPath);
hbs.registerPartials(partialPath);


// for static data 
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

// app.use(bodyParser.urlencoded({ extended: true }));
 
// for hbs page routing  
const port = 3000;

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});


app.get('/weather', function(req, res){
    var weatherLocation = req.query.location;
    // console.log(weatherLocation);
    if (weatherLocation === '')
    {
        // console.log(weatherLocation);
        res.render("weather",{warn:`Please Enter valid Location.`});
    }

    if (!weatherLocation){
        console.log("ajksaks");
    }


    if (weatherLocation){
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=metric&appid=ac2e3d40e38e383ce975e9791660f7e0`)
            .on('data',  (chunk) => {
            var objData= JSON.parse(chunk);
            var dataArr=[objData];
            console.log(`This is ${dataArr[0].name} and here Temperature is ${dataArr[0].main.temp}°C`);
            //  res.send(`${dataArr[0].name}-${dataArr[0].main.temp}°C`);
            res.render("weather",{temp:`${dataArr[0].main.temp}°C`,location: `${dataArr[0].name}`,feel:`${dataArr[0].main.feels_like}`,mode:`${dataArr[0].weather[0].main}`,note:`Here is your location Weather!`});
                // if(`${dataArr[0].code}` === 404){
                //    console.log(invalid);     
                // }
                var pageStatus = `${dataArr[0].code}`;
                // if(pageStatus == 200){
                //     console.log(valid);
                // }else{
                //     console.log(invalid);
                // }
            });
            // console.log("nonempty")
        }else{
            res.render("weather",{note:`Please Enter your Location to know the Weather of your city.`});   
            // console.log("empty") 
        }
});

// app.route('/weather').get(function(req, res) {
//         if (req.isAuthenticated()) {
//             console.log("valid");
//         }else{
//             console.log("invalid");
//         }
// });


app.get('*',(req,res)=>{
    res.render('err')
});

app.listen(port);