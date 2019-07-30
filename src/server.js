const libraries = require('./config/libraries');
const app = libraries.express();

app.use(libraries.bodyParser.json());
app.use(libraries.bodyParser.urlencoded({ extended: true }));
app.use(libraries.cors());

require('./api/routes/index')(app);

app.listen(3000, () => {
  console.log("Server listen port 3000");
});
