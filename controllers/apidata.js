
const { json } = require('express');
const request = require('superagent');
let apiData = [];

const fetchAPIData =(req, res) => {
   
  return  request
      //.get('https://xmcloudcm.localhost/sitecore/api/layout/render?item=/sitecore/content/mediplus/mediplus/medi/Home&sc_lang=en&sc_apikey=4E0DBA06-CAA8-4FBF-B483-D44292C00927')
      .get('https://xmc-epam1-learningsandbox-learning.sitecorecloud.io/sitecore/api/layout/render?item=/sitecore/content/test%20site/test-site/Home&sc_lang=en&sc_apikey=BE0A98BC-E932-4585-AD4F-B67C99AC7FD4&sc_site=test-site')
      .set('Content-Type', 'application/json')
     .then(res => {
        console.log('yay got ' + JSON.stringify(res.body));
         apiData = JSON.stringify(res.body);
        
      },
      res.json(apiData));
      };

module.exports = {fetchAPIData};

