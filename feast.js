'use strict'
/* 

https://jorgu.github.io/feastdinners/;

*/
let feastHolidayList    = [];
let upcomingFeastDinner = {name: 'none', feastDate: new Date()};
let adminUser           = isAdminUser(window.location.href);
let timeStampNow        = new Date();
let jan = 0, feb=1, mar=2, apr=3, maj=4, jun=5, jul=6, aug=7, sep=8, okt=9, nov=10, dec=11; 

let year			          = timeStampNow.getFullYear();
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

    //console.log(`Nästa högtid: ${nextHoliday.id} - ${nextHoliday.date.toDateString()}`);
    return nextHoliday.id;
}



function createElement(element, attribut, attributvarde, text) {
        
        var elementObjekt         = document.createElement(element);
        elementObjekt.setAttribute(attribut,attributvarde);
        elementObjekt.textContent = text;
  
        return elementObjekt;
}
      

function byggStatsistikSite(lista, holidayDinner) {
        
      var feastDinnerBody;
      var feastDinnerDivCenter;
      var feastDinnerHeader;
      var feastDinnerDivSub;     
    
      feastDinnerBody = document.getElementById('feastDinnerSite');

      feastDinnerDivCenter = createElement('div', 'class', 'center', '');
      
      feastDinnerHeader    = createElement('div', 'class', 'headFeast', '');
      feastDinnerHeader.setAttribute('style', 'font-size: 18px; italic: true');
      feastDinnerHeader.textContent = 'Samkväm';

      feastDinnerDivSub = createElement('div', 'class', 'headFeast', 'med god mat & dryck');
      feastDinnerDivSub.setAttribute('style','font-size: 14px; margin: 14px 2px;');
      feastDinnerHeader.appendChild(feastDinnerDivSub);
      feastDinnerDivCenter.appendChild(feastDinnerHeader);
      
      
        let isSheetUrl = true;
        lista.forEach(holidy => {
            let feastDinnerBtn;
            feastDinnerBtn = createTheButton(isSheetUrl, holidy.desc, holidy.urlID, holidy.sheetID, holidy.id!=holidayDinner);
            feastDinnerDivCenter.appendChild(feastDinnerBtn);      
        })
    
        if (adminUser) {
            let feastDinnerAdminBtn;
            feastDinnerAdminBtn = createTheButton(isSheetUrl, 'Stek/grilltemperatur', '1cnIuRy2imz8OV5HM4eHNwg7PD6drKFhnz8i8oaOz1Hs', '1030403989&range=stektemperatur', false);
            feastDinnerDivCenter.appendChild(feastDinnerAdminBtn);
        
            isSheetUrl = false;
            let feastDinnerAdminBtn2 = createTheButton(isSheetUrl, 'Test non alcholic beer', 'https://www.nonallco.se', '', false);
            feastDinnerDivCenter.appendChild(feastDinnerAdminBtn2);
        }

        feastDinnerBody.appendChild(feastDinnerDivCenter);
      
    }

function createTheButton(isSheet, description, urlID, sheetID, disabled) {
    
    let defButtonClass         = 'feastDinnerButton feastDinnerButton2';
    let defButtonDisabledClass = 'feastDinnerButtonDisabled';
    let buttonclass;
    let url;

    if (isSheet) {
        url = 'window.location.href="https://docs.google.com/spreadsheets/cd d/' + urlID + '/htmlembed/sheet?gid=' + sheetID + '"';
    } else {
        url = 'window.location.href="' + urlID + '"';
    }
    disabled ? buttonclass = defButtonDisabledClass : buttonclass = defButtonClass;

    let feastDinnerBtn = createElement('button', 'class', buttonclass, description);
    feastDinnerBtn.setAttribute('onClick', url);
    feastDinnerBtn.disabled = disabled;

    return feastDinnerBtn;

}


function isAdminUser(url) {
  
    var pos = url.toLowerCase().indexOf('theking');
  
  return pos > 0 ? true : false;
};

