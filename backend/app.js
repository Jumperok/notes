import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from '../etc/config.json'
import cors from 'cors';
import notesRoutes from './routes';

const app = express();

app.use(cors({ origin: '*' }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || config.serverPort;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`, {});
app.use('/api', notesRoutes);
app.get('/', (req,res) => {
  return res.end('Api working');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
