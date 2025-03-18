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
const EPIPHANY          = {id: 'epiphany', desc: 'Trettondag'};
const EASTEREVENING     = {id: 'easter', desc: 'Påskafton'};
const MIDSUMMEREVENING  = {id: 'midsummer', desc: 'Midsommar'};
const CRAYFISHPARTY     = {id: 'crayfish', desc: 'Kräftskiva'};
const CHRISTMASDINNER   = {id: 'christmasdinner', desc: 'Julbord'};
const CHRISTMASEVENING  = {id: 'christmaseve', desc: 'Julafton'};
const NEWYEARDINNER     = {id: 'newyear', desc: 'Nyårsafton'};

let jan = 0, feb=1, mar=2, apr=3, maj=4, jun=5, jul=6, aug=7, sep=8, okt=9, nov=10, dec=11; 
  
today.setFullYear(year, month, day); // månad: 0=jan, 1=feb, ...

upcomingFeastDinner = getUpcomingfeastdinner(today);

byggStatsistikSite('ffff');
//siteTitle		= 'Statistik';    

function getUpcomingfeastdinner() {
        
    let today = new Date();
    let feastHolidayList = [
        { id: EPIPHANY.id,            desc: EPIPHANY.desc,           date: new Date(today.getFullYear(), jan, 10),      sheetID:'' },
        { id: EASTEREVENING.id,       desc: EASTEREVENING.desc,      date: new Date(today.getFullYear(), apr, 24),      sheetID:'' },
        { id: MIDSUMMEREVENING.id,    desc: MIDSUMMEREVENING.desc,   date: new Date(today.getFullYear(), jun, 24),      sheetID:'' },
        { id: CRAYFISHPARTY.id,       desc: CRAYFISHPARTY.desc,      date: new Date(today.getFullYear(), aug, 18),      sheetID:'' },
        { id: CHRISTMASDINNER.id,     desc: CHRISTMASDINNER.desc,    date: new Date(today.getFullYear(), dec, 6),       sheetID:'401376878' },
        { id: CHRISTMASEVENING.id,    desc: CHRISTMASEVENING.desc,   date: new Date(today.getFullYear(), dec, 24),      sheetID:'740624674' },
        { id: NEWYEARDINNER.id,       desc: NEWYEARDINNER.desc,      date: new Date(today.getFullYear(), dec, 31),      sheetID:'' },
        { id: EASTEREVENING.id,       desc: EASTEREVENING.desc,      date: new Date(today.getFullYear()+1, jan, 10),    sheetID:'' }
    ];
    
    feastHolidayList.sort((a, b) => a.date - b.date);

    // Hitta det första datumet som är större än dagens datum
    let nextHoliday = feastHolidayList.find(event => event.date > today);

    console.log(`Nästa högtid: ${nextHoliday.desc} - ${nextHoliday.date.toDateString()}`);
    return nextHoliday;
}



function createElement(element, attribut, attributvarde, text) {
        
        var elementObjekt         = document.createElement(element);
        elementObjekt.setAttribute(attribut,attributvarde);
        elementObjekt.textContent = text;
  
        return elementObjekt;
}
      

function byggStatsistikSite(sheetID) {
  
  
  //Påskmat.gsheet https://docs.google.com/spreadsheets/d/1eZv-inNeGf_b0hfx1Gqkr2Vx6e8ERqUpj_4tnfhn2CY/edit?gid=401376878#gid=401376878

      var urlTrettondag                = 'window.location.href="https://docs.google.com/spreadsheets/d/' + sheetID + '/htmlembed/sheet?gid=0"';
      var urlEastern              = 'window.location.href="https://his.se"'; 
      var urlMidsummer             = 'window.location.href="www.his.se"'; 
      
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
      
     /* var feastDinnerBtn1 = createElement('button', 'class', defButtonClass, 'Trettondag');
          feastDinnerBtn1.setAttribute('onClick', urlTrettondag);

      var feastDinnerBtn2 = createElement('button', 'class', defButtonClass, 'Påsk');
          feastDinnerBtn2.setAttribute('onClick', urlEastern);

      var feastDinnerBtn3 = createElement('button', 'class', defButtonDiabledClass, 'Midsommar');
          feastDinnerBtn3.setAttribute('onClick', urlMidsummer);
          feastDinnerBtn3.setAttribute('disabled',true);
      */
      let feastDinnerBtn;
      feastDinnerBtn = createTheButton(EPIPHANY.desc, urlTrettondag, false, defButtonClass);        
      feastDinnerDivCenter.appendChild(feastDinnerBtn);
      feastDinnerBtn = createTheButton(EASTEREVENING.desc, urlEastern, false, defButtonClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      feastDinnerBtn = createTheButton(MIDSUMMEREVENING.desc, urlMidsummer, true, defButtonDisabledClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      feastDinnerBtn = createTheButton(CHRISTMASDINNER.desc, CHRISTMASDINNER.sheetID, false, defButtonClass);
      feastDinnerDivCenter.appendChild(feastDinnerBtn); 
      
      feastDinnerBody.appendChild(feastDinnerDivCenter);
      
    }

function createTheButton(description, sheetID, disabled, buttonclass) {

    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNEXmdDHBEig5YDcvjpi2qhsG583EaivG6s-rHYuOYrYAFYF6MuPTU5sOaMbKynzzTqTmFqnp3vyJd/pubhtml?gid=' + sheetID + '&single=true'
    url     = 'window.location.href="' +url + '"' 
    let feastDinnerBtn = createElement('button', 'class', buttonclass, description);
    feastDinnerBtn.setAttribute('onClick', url);
    feastDinnerBtn.disabled = disabled;

    return feastDinnerBtn;

}


function isAdminUser(url) {
  
    var pos = url.toLowerCase().indexOf('theking');
  
  return pos > 0 ? true : false;
};

