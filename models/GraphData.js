var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Sales: String,
  Expenses: String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);