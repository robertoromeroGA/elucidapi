require('dotenv').config({ path: './.env' });
const express = require('express');
const figlet = require('figlet')
const cors = require('cors');
const router = express.Router();

const app = express();

//Elucidat Imports
// const elucidatAPI = require('elucidat-api');
// const https = require('https');

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', credentials: true }));


const parameters = {
    path: 'releases/launch',
    consumer_key: '1D4A49BA-E460-035A-675F-CD1835290DD6',
    consumer_secret: 'AFBF434A-2E0D-5246-AF38-836E173C5212',
    fields: {
        'release_code': '6151ee2a694f4',
        'name': 'Roberto Jr',
        'email_address': 'roberto.romero@globalalumni.org',
        'params': 'globalalumni',
        'simulation_mode': 'simulation'
    }
};

//Route Testing
router.post("/test", async (req, res) => {
    console.log(req.body);
    
    elucidatAPI(parameters, function (statusCode, response) {
        console.log(statusCode);
        console.log(response);
        return res.status(200).json( response );
    });
});

app.use(router)

//Iniciando el servidor
app.listen(app.get('port'), () => {
    figlet('    todo OK', (err, res) => {
        console.log(res);
        console.log(`       Server work in klk port: ---> ${app.get('port')}`);
    })
});
