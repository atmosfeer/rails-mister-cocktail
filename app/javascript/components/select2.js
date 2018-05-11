import $ from 'jquery';
import 'select2';

$('#dose_ingredient').select2(
  { width: '100%' }
);

// Requiring CSS! Path is relative to ./node_modules
import 'select2/dist/css/select2.css';
