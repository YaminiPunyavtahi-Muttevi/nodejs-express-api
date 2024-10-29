
const router = require('express').Router();
    const got = require('got');
    const { pipeline } = require('stream');
    
    router.get('/', function(req, res) {
      const dataStream = got.stream({
        url: 'https://xmcloudcm.localhost/sitecore/api/layout/render?item=/sitecore/content/mediplus/mediplus/medi/Home&sc_lang=en&sc_apikey=4E0DBA06-CAA8-4FBF-B483-D44292C00927',
       
      });
      pipeline(dataStream, res, (err) => {
          if (err) {
              console.log(err);
              res.sendStatus(500);
          }
      });
    });

    module.exports = router;