'use strict'
/* let siteTitle;

https://jorgu/feastdinners.github.io;

*/
let upcomingFeastDinner = {name: 'none', feastDate: new Date()};
let timeStampNow        = new Date();
let today               = new Date(); 

let year			    = timeStampNow.getFullYear();
let month               = timeStampNow.getMonth();
let day                 = timeStampNow.getDay();

let jan = 0, feb=1, mar=2, apr=3, maj=4, jun=5, jul=6, aug=7, sep=8, okt=9, nov=10, dec=11; 
  
today.setFullYear(year, month, day); // månad: 0=jan, 1=feb, ...

upcomingFeastDinner = getUpcomingfeastdinner(today);

byggStatsistikSite('ffff');
//siteTitle		= 'Statistik';    

function getUpcomingfeastdinner() {
        
    let today = new Date();
    let feastHolidayList = [
        { name: 'Trettondag',       date: new Date(today.getFullYear(), jan, 10) },
        { name: 'Påskafton',        date: new Date(today.getFullYear(), apr, 24) },
        { name: 'Midsommarafton',   date: new Date(today.getFullYear(), jun, 24) },
        { name: 'Kräftskiva',       date: new Date(today.getFullYear(), aug, 18) },
        { name: 'Julbord',          date: new Date(today.getFullYear(), dec, 6) },
        { name: 'Julafton',         date: new Date(today.getFullYear(), dec, 24) },
        { name: 'Nyårsmiddag',      date: new Date(today.getFullYear(), dec, 31) }
    ];
    
    feastHolidayList.sort((a, b) => a.date - b.date);

    // Hitta det första datumet som är större än dagens datum
    let nextHoliday = feastHolidayList.find(event => event.date > today);

    console.log(`Nästa högtid: ${nextHoliday.name} - ${nextHoliday.date.toDateString()}`);
    return nextHoliday;
}
    
function byggStatsistikTipsBattleSite (urlParam) {
    
    let urlTipsBattle;

    var feastDinnerBody;
    var feastDinnerDivCenter;
    var feastDinnerHeader;
    var feastDinnerDivSub;
    var defButtonClass       = 'tipsbattleButton tipsbattleButton2';
      
    feastDinnerBody = document.getElementById('feastDinnerSite');

    feastDinnerDivCenter = createElement('div', 'class', 'center', '');
    
    feastDinnerHeader    = createElement('div', 'class', 'headTipsbattle', '');
    feastDinnerHeader.setAttribute('style', 'font-size: 24px; italic: true');
    feastDinnerHeader.textContent = championship; //CHAMPIONSHIP;

    feastDinnerDivSub = createElement('div', 'class', 'headTipsbattle', 'Tips-Battle');
    feastDinnerDivSub.setAttribute('style','font-size: 14px; margin: 14px 2px;');
    feastDinnerHeader.appendChild(feastDinnerDivSub);
    feastDinnerDivCenter.appendChild(feastDinnerHeader);
    
    var feastDinnerBtn1;
    urlParam.forEach( item => {
        feastDinnerBtn1 = createElement('button', 'class', defButtonClass, decodeURIComponent(item.btnText));
        urlTipsBattle = 'window.location.href="https://docs.google.com/spreadsheets/d/' + item.ssID + '/htmlembed/sheet?gid=' + item.sheetID + '&range=' + item.rangeName + '"';

        feastDinnerBtn1.setAttribute('onClick', urlTipsBattle);
        
        feastDinnerDivCenter.appendChild(feastDinnerBtn1);
    })
    feastDinnerBody.appendChild(feastDinnerDivCenter);
          
}

function createElement(element, attribut, attributvarde, text) {
        
        var elementObjekt         = document.createElement(element);
        elementObjekt.setAttribute(attribut,attributvarde);
        elementObjekt.textContent = text;
  
        return elementObjekt;
}
      

function byggStatsistikSite(sheetID) {
  
  
  //gameDateFirstGroupGame timeStampNow

      var urlTrettondag                = 'window.location.href="https://docs.google.com/spreadsheets/d/' + sheetID + '/htmlembed/sheet?gid=0"';
      var urlEastern              = 'window.location.href="https://docs.google.com/spreadsheets/d/' + sheetID + '/htmlembed/sheet?gid=' + 'gidIdDagensmatcher'; 
      var urlMidsummer             = 'window.location.href="https://docs.google.com/spreadsheets/d/' + sheetID + '/htmlembed/sheet?gid=' + 'gidIdYesterdayToDayToMorrow'; 
      
      var feastDinnerBody;
      var feastDinnerDivCenter;
      var feastDinnerHeader;
      var feastDinnerDivSub;
      var defButtonClass                = 'feastDinnerButton feastDinnerButton2';
      let defButtonAdminClass           = 'adminButton adminButton2';

    
      feastDinnerBody = document.getElementById('feastDinnerSite');

      feastDinnerDivCenter = createElement('div', 'class', 'center', '');
      
      feastDinnerHeader    = createElement('div', 'class', 'headFeastDinner', '');
      feastDinnerHeader.setAttribute('style', 'font-size: 24px; italic: true');
      feastDinnerHeader.textContent = 'championship';

      feastDinnerDivSub = createElement('div', 'class', 'headFeastDinner', 'Statistik');
      feastDinnerDivSub.setAttribute('style','font-size: 14px; margin: 14px 2px;');
      
      var feastDinnerBtn1 = createElement('button', 'class', defButtonClass, 'Trettondag');
          feastDinnerBtn1.setAttribute('onClick', urlTrettondag);

      var feastDinnerBtn2 = createElement('button', 'class', defButtonClass, 'Påsk');
          feastDinnerBtn2.setAttribute('onClick', urlEastern);

      var feastDinnerBtn22 = createElement('button', 'class', defButtonClass, 'Midsommar');
          feastDinnerBtn22.setAttribute('onClick', urlMidsummer);
      
                
      feastDinnerHeader.appendChild(feastDinnerDivSub);
      feastDinnerDivCenter.appendChild(feastDinnerHeader);
      feastDinnerDivCenter.appendChild(feastDinnerBtn1);
      feastDinnerDivCenter.appendChild(feastDinnerBtn2); 
      feastDinnerDivCenter.appendChild(feastDinnerBtn22);

      feastDinnerBody.appendChild(feastDinnerDivCenter);
      
    }


function isAdminUser(url) {
  
    var pos = url.toLowerCase().indexOf('theking');
  
  return pos > 0 ? true : false;
};

