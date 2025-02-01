// import express from 'express';
// import path from 'path';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

app.use(cors());
app.use(bodyParser.json());






app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});