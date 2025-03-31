'use strict'
/* let siteTitle;

https://jorgu/feastdinners.github.io;

*/
let feastHolidayList    = [];
let upcomingFeastDinner = {name: 'none', feastDate: new Date()};
let timeStampNow        = new Date();
let jan = 0, feb=1, mar=2, apr=3, maj=4, jun=5, jul=6, aug=7, sep=8, okt=9, nov=10, dec=11; 

let year			    = timeStampNow.getFullYear();
let month               = timeStampNow.getMonth();
let day                 = timeStampNow.getDay();

const EPIPHANY          = {id: 'epiphany',          desc: 'Trettondag', date: new Date(timeStampNow.getFullYear(), jan, 10),   urlID: '',                                              sheetID: ''};
const EASTEREVENING     = {id: 'easter',            desc: 'Påskafton',  date: new Date(timeStampNow.getFullYear(), apr, 24),   urlID: '1eZv-inNeGf_b0hfx1Gqkr2Vx6e8ERqUpj_4tnfhn2CY',  sheetID: '401376878'};
const MIDSUMMEREVENING  = {id: 'midsummer',         desc: 'Midsommar',  date: new Date(timeStampNow.getFullYear(), jun, 24),   urlID: '',                                              sheetID: ''};
const CRAYFISHPARTY     = {id: 'crayfish',          desc: 'Kräftskiva', date: new Date(timeStampNow.getFullYear(), aug, 18),   urlID: '1ANLJuA04XkSKfIGDlmCI9OnS_kJXcw_z8ju5F3oDcDE',  sheetID: '0'};
const CHRISTMASDINNER   = {id: 'christmasdinner',   desc: 'Julbord',    date: new Date(timeStampNow.getFullYear(), dec, 6),    urlID: '1JFpuigz7dy6gnQgxBjYi7so75Yj_A5jfUY575uQQxdk',  sheetID: '401376878'};
const CHRISTMASEVENING  = {id: 'christmaseve',      desc: 'Julafton',   date: new Date(timeStampNow.getFullYear(), dec, 24),   urlID: '1JFpuigz7dy6gnQgxBjYi7so75Yj_A5jfUY575uQQxdk',  sheetID: '740624674'};
const NEWYEARDINNER     = {id: 'newyear',           desc: 'Nyårsafton', date: new Date(timeStampNow.getFullYear(), dec, 31),   urlID: '',                                              sheetID: ''};

if( EPIPHANY.urlID.length > 0)            {feastHolidayList.push(EPIPHANY)};
if( EASTEREVENING.urlID.length > 0)       {feastHolidayList.push(EASTEREVENING)};
if( MIDSUMMEREVENING.urlID.length > 0)    {feastHolidayList.push(MIDSUMMEREVENING)};
if( CRAYFISHPARTY.urlID.length > 0)       {feastHolidayList.push(CRAYFISHPARTY)};
if( CHRISTMASDINNER.urlID.length > 0)     {feastHolidayList.push(CHRISTMASDINNER)};
if( CHRISTMASEVENING.urlID.length > 0)    {feastHolidayList.push(CHRISTMASEVENING)};
if( NEWYEARDINNER.urlID.length > 0)       {feastHolidayList.push(NEWYEARDINNER)};

upcomingFeastDinner = getUpcomingfeastdinner(feastHolidayList);

byggStatsistikSite(feastHolidayList, upcomingFeastDinner);
//siteTitle		= 'Statistik';    

function getUpcomingfeastdinner(lista) {
        
    let today = new Date(); 
    
    lista.sort((a, b) => a.date - b.date);

    // Hitta det första datumet som är större än dagens datum
    let nextHoliday = lista.find(event => event.date > today);

    console.log(`Nästa högtid: ${nextHoliday.id} - ${nextHoliday.date.toDateString()}`);
    return nextHoliday.id;
}



function createElement(element, attribut, attributvarde, text) {
        
        var elementObjekt         = document.createElement(element);
        elementObjekt.setAttribute(attribut,attributvarde);
        elementObjekt.textContent = text;
  
        return elementObjekt;
}
      

function byggStatsistikSite(lista, holidayDinner) {
  
  
    //Påskmat.gsheet https://docs.google.com/spreadsheets/d/1eZv-inNeGf_b0hfx1Gqkr2Vx6e8ERqUpj_4tnfhn2CY/edit?gid=401376878#gid=401376878
  
        let urlPrefix = 'window.location.href="https://docs.google.com/spreadsheets/d/';
        let urlSuffix = '/htmlembed/sheet?gid=';
        
      var feastDinnerBody;
      var feastDinnerDivCenter;
      var feastDinnerHeader;
      var feastDinnerDivSub;
      var defButtonClass         = 'feastDinnerButton feastDinnerButton2';
      var defButtonDisabledClass = 'feastDinnerButtonDisabled'
      
    
      feastDinnerBody = document.getElementById('feastDinnerSite');

      feastDinnerDivCenter = createElement('div', 'class', 'center', '');
      
      feastDinnerHeader    = createElement('div', 'class', 'headFeastDinner', '');
      feastDinnerHeader.setAttribute('style', 'font-size: 24px; italic: true');
      feastDinnerHeader.textContent = 'championship';

      feastDinnerDivSub = createElement('div', 'class', 'headFeastDinner', 'Statistik');
      feastDinnerDivSub.setAttribute('style','font-size: 14px; margin: 14px 2px;');
      feastDinnerHeader.appendChild(feastDinnerDivSub);
      feastDinnerDivCenter.appendChild(feastDinnerHeader);
      
      

        lista.forEach(holidy => {
            let feastDinnerBtn;
            feastDinnerBtn = createTheButton(holidy.desc, holidy.urlID, holidy.sheetID, holidy.id==holidayDinner, defButtonClass);
            feastDinnerDivCenter.appendChild(feastDinnerBtn);      
        })
    
    /*  feastDinnerBtn = createTheButton(EPIPHANY.desc, urlTrettondag, false, defButtonClass);        
      feastDinnerDivCenter.appendChild(feastDinnerBtn);
      feastDinnerBtn = createTheButton(EASTEREVENING.desc, urlEastern, false, defButtonClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      feastDinnerBtn = createTheButton(MIDSUMMEREVENING.desc, urlMidsummer, true, defButtonDisabledClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      feastDinnerBtn = createTheButton(CHRISTMASDINNER.desc, CHRISTMASDINNER.sheetID, false, defButtonClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      */
      feastDinnerBody.appendChild(feastDinnerDivCenter);
      
    }

function createTheButton(description, prefixUrl, sheetID, disabled, buttonclass) {

    let url = 'window.location.href="https://docs.google.com/spreadsheets/d/' + prefixUrl + '/pubhtml?gid=' + sheetID + '&single=true'
    
    let feastDinnerBtn = createElement('button', 'class', buttonclass, description);
    feastDinnerBtn.setAttribute('onClick', url);
    feastDinnerBtn.disabled = disabled;

    return feastDinnerBtn;

}


function isAdminUser(url) {
  
    var pos = url.toLowerCase().indexOf('theking');
  
  return pos > 0 ? true : false;
};

