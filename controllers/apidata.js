
const { json } = require('express');
const request = require('superagent');
let apiData = [];

const fetchAPIData =(req, res) => {
   
  return  request
      .get('https://xmcloudcm.localhost/sitecore/api/layout/render?item=/sitecore/content/mediplus/mediplus/medi/Home&sc_lang=en&sc_apikey=4E0DBA06-CAA8-4FBF-B483-D44292C00927')
      .set('Content-Type', 'application/json')
     .then(res => {
        console.log('yay got ' + JSON.stringify(res.body));
         apiData = JSON.stringify(res.body);
        
      },
      res.json(apiData));
      };

module.exports = {fetchAPIData};

