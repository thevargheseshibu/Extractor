const puppeteer = require('puppeteer');

async function scrapePrefeitura(url){

    const browser = await puppeteer.launch();
    const page= await browser.newPage();
    await page.goto(url);
   
   const [pd] = await page.$$('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1)');
   const [bd] = await page.$$('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19)');
   const [ot] = await page.$$('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6)');
   const [lk] = await page.$$('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr > td:nth-child(2) > div > div > div > a');
   
    

   const pdC = await pd.getProperty('textContent');
   const bdC = await bd.getProperty('textContent');
   const otC = await ot.getProperty('textContent');
   const lkC = await lk.getProperty('href');

   const Publication_Date  = await pdC.jsonValue();
   const Bidding_Date  = await bdC.jsonValue();
   const Object  = await otC.jsonValue();
   const Link  = await lkC.jsonValue();



   console.log({Publication_Date,Bidding_Date ,Object,Link});

 

  



   browser.close();


}
scrapePrefeitura('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020');
