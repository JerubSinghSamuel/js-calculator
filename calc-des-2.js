let total;
let poor = '#9c1c1c';
let average = '#b38e17';
let good = '#56c73a';
let excellent = '#15a32d';
let total_text,rt_text, ry_text, ns_text, ts_text;
let total_color,rt_color,ry_color,ns_color, ts_color;

let imp_txt = "<b>Here are some steps to improve your score!</b>";
let repeatimp_txt = ["<li>Initiate data driven campaigns to convert one timers to repeat customers.</li>","<li>Do a deep profiling of your Repeaters and understand their shopping behavior. Leverage this understanding to convert one timers to repeat.</li>","<li>Compute specific product level inter purchase times and trigger campaigns whenever IPT thresholds are breached.</li>","<li>Initiate customer lifecycle campaigns to keep them engaged over their entire lifecyle with you.</li>","<li>Try and enroll more and more customers in your Loyalty program.</li>"];
let recencyimp_txt = ["<li>Specifically reach out to your Inactive customers (> 1 yr no purchase) and try to reactivate them.</li>","<li>Segment the inactive customers into different priority buckets and have specific strategy for each of the segments.</li>","<li>Initiate trigger campaigns as soon as customer nears the point of inactivity.</li>","<li>Start a referral program to increase the rate of new customer acquisition.</li>","<li>Leverage some advance customer analytics models to arrive at reactivation probability and leverage the same in campaigns.</li>"];
let npsimp_txt = ["<li>Have a automated survey software to capture NPS frequently.</li>","<li>Segment the overall NPS score by different attributes (Stores/Departments/Categories etc) to better understand the issues.</li>","<li>Have a robust mechanism to take actions on feedback recieved from customers.</li>","<li>Link NPS to actual sales and try and establish a relationship between the two.</li>","<li>Tie store level incentives to their respective NPS scores</li>"];
let transimp_txt = ["<li>Take a relook at your loyalty program and make it more exciting and useful to customers.</li>","<li>Have specific campaigns around Loyalty program. For eg Loyalty members to get additional 5% OFF during weekends.</li>","<li>Incentivize your store staff to enroll customers in the program. Have a mechanism to report the staff performance on this metric.</li>","<li>Run targeted customer campaigns using data to increase loyalty penetration in under penetrated areas.</li>","<li>Track % Loyalty trans as a KPI at each staff level and build incentive schemes around the same.</li>"];

var rt,ry,ns,ts,ls;

function calculatorformCES() {
    let calculate_form = document.getElementById("wf-form-calculator");
    let retail_type = calculate_form.elements['retail_type'];
    let repeat = calculate_form.elements['repeat'];
    let recency = calculate_form.elements['recency'];
    let nps = calculate_form.elements['nps'];
    let trans = calculate_form.elements['trans'];

    switch (retail_type.value) {
        case 'fashion':
            rt=30;ry=30;ns=60;ts=80;
            break;
        case 'grocery':
            rt=80;ry=50;ns=50;ts=90;
            break;
        case 'electronics':
            rt=60;ry=30;ns=50;ts=75;
            break;
        case 'others':
            rt=60;ry=30;ns=55;ts=75;
            break;
    }

    rt = Math.ceil(repeat.value/rt * 100);
    ry = Math.ceil(recency.value/ry * 100);
    ns = Math.ceil(nps.value/ns * 100);
    ts = Math.ceil(trans.value/ts * 100);

    total = (rt+ry+ns+ts)/5;
    
    if (total<60) {total_text = "Poor";total_color=poor;}
    else if (total>=60 && total <75) {total_text = "Average";total_color=average;}
    else if (total>=75 && total <90) {total_text = "Good";total_color=good;}
    else {total_text = "Excellent";total_color=excellent;}

    switch (retail_type.value) {
        case 'fashion':
            if (repeat.value<20) {rt_text = "Poor";rt_color=poor;}
            else if (repeat.value>=20 && repeat.value<25) {rt_text = "Average";rt_color=average;}
            else if (repeat.value>=25 && repeat.value<30) {rt_text = "Good";rt_color=good;}
            else {rt_text = "Excellent"; rt = 100;rt_color=excellent;}

            if (recency.value<20) {ry_text = "Poor";ry_color=poor;}
            else if (recency.value>=20 && recency.value<25) {ry_text = "Average";ry_color=average;}
            else if (recency.value>=25 && recency.value<30) {ry_text = "Good";ry_color=good;}
            else {ry_text = "Excellent"; ry = 100;ry_color=excellent;}

            if (nps.value<20) {ns_text = "Poor";ns_color=poor;}
            else if (nps.value>=20 && nps.value<40) {ns_text = "Average";ns_color=average;}
            else if (nps.value>=40 && nps.value<60) {ns_text = "Good";ns_color=good;}
            else {ns_text = "Excellent"; ns = 100;ns_color=excellent;}
            
            if (trans.value<40) {ts_text = "Poor";ts_color=poor;}
            else if (trans.value>=40 && trans.value<60) {ts_text = "Average";ts_color=average;}
            else if (trans.value>=60 && trans.value<80) {ts_text = "Good";ts_color=good;}
            else {ts_text = "Excellent"; ts = 100;ts_color=excellent;}
            break;
        case 'grocery':
            if (repeat.value<60) {rt_text = "Poor";rt_color=poor;}
            else if (repeat.value>=60 && repeat.value<70) {rt_text = "Average";rt_color=average;}
            else if (repeat.value>=70 && repeat.value<80) {rt_text = "Good";rt_color=good;}
            else {rt_text = "Excellent"; rt = 100;rt_color=excellent;}

            if (recency.value<30) {ry_text = "Poor";ry_color=poor;}
            else if (recency.value>=30 && recency.value<40) {ry_text = "Average";ry_color=average;}
            else if (recency.value>=40 && recency.value<50) {ry_text = "Good";ry_color=good;}
            else {ry_text = "Excellent"; ry = 100;ry_color=excellent;}

            if (nps.value<30) {ns_text = "Poor";ns_color=poor;}
            else if (nps.value>=30 && nps.value<40) {ns_text = "Average";ns_color=average;}
            else if (nps.value>=40 && nps.value<50) {ns_text = "Good";ns_color=good;}
            else {ns_text = "Excellent"; ns = 100;ns_color=excellent;}
            
            if (trans.value<50) {ts_text = "Poor";ts_color=poor;}
            else if (trans.value>=50 && trans.value<70) {ts_text = "Average";ts_color=average;}
            else if (trans.value>=70 && trans.value<90) {ts_text = "Good";ts_color=good;}
            else {ts_text = "Excellent"; ts = 100;ts_color=excellent;}
            break;
        case 'electronics':
            if (repeat.value<40) {rt_text = "Poor";rt_color=poor;}
            else if (repeat.value>=40 && repeat.value<50) {rt_text = "Average";rt_color=average;}
            else if (repeat.value>=50 && repeat.value<60) {rt_text = "Good";rt_color=good;}
            else {rt_text = "Excellent"; rt = 100;rt_color=excellent;}

            if (recency.value<20) {ry_text = "Poor";ry_color=poor;}
            else if (recency.value>=20 && recency.value<25) {ry_text = "Average";ry_color=average;}
            else if (recency.value>=25 && recency.value<30) {ry_text = "Good";ry_color=good;}
            else {ry_text = "Excellent"; ry = 100;ry_color=excellent;}

            if (nps.value<30) {ns_text = "Poor";ns_color=poor;}
            else if (nps.value>=30 && nps.value<40) {ns_text = "Average";ns_color=average;}
            else if (nps.value>=40 && nps.value<50) {ns_text = "Good";ns_color=good;}
            else {ns_text = "Excellent"; ns = 100;ns_color=excellent;}
            
            if (trans.value<40) {ts_text = "Poor";ts_color=poor;}
            else if (trans.value>=40 && trans.value<60) {ts_text = "Average";ts_color=average;}
            else if (trans.value>=60 && trans.value<75) {ts_text = "Good";ts_color=good;}
            else {ts_text = "Excellent"; ts = 100;ts_color=excellent;}
            break;
        case 'others':
            if (repeat.value<40) {rt_text = "Poor";rt_color=poor;}
            else if (repeat.value>=40 && repeat.value<50) {rt_text = "Average";rt_color=average;}
            else if (repeat.value>=50 && repeat.value<60) {rt_text = "Good";rt_color=good;}
            else {rt_text = "Excellent"; rt = 100;rt_color=excellent;}

            if (recency.value<20) {ry_text = "Poor";ry_color=poor;}
            else if (recency.value>=20 && recency.value<25) {ry_text = "Average";ry_color=average;}
            else if (recency.value>=25 && recency.value<30) {ry_text = "Good";ry_color=good;}
            else {ry_text = "Excellent"; ry = 100;ry_color=excellent;}

            if (nps.value<35) {ns_text = "Poor";ns_color=poor;}
            else if (nps.value>=35 && nps.value<45) {ns_text = "Average";ns_color=average;}
            else if (nps.value>=45 && nps.value<55) {ns_text = "Good";ns_color=good;}
            else {ns_text = "Excellent"; ns = 100;ns_color=excellent;}
            
            if (trans.value<40) {ts_text = "Poor";ts_color=poor;}
            else if (trans.value>=40 && trans.value<60) {ts_text = "Average";ts_color=average;}
            else if (trans.value>=60 && trans.value<75) {ts_text = "Good";ts_color=good;}
            else {ts_text = "Excellent"; ts = 100;ts_color=excellent;}
            break;
    }
    setChanges("total",total_color,total,total_text);
    setProgress(total, total_color);
    setTotal();
    setChanges("repeat",rt_color,rt,rt_text);
    setChanges("recency",ry_color,ry,ry_text);
    setChanges("nps",ns_color,ns,ns_text);
    setChanges("trans",ts_color,ts,ts_text);
}
function setVisibleImprove(text) {
    const improveBlock = document.getElementById("ImproveTextBlock");
    const improveText = document.getElementById("improveText");
    switch (text) {
        case "repeat":
            if (rt_text == "Poor" || rt_text == "Average")
                text = repeatimp_txt[0]+repeatimp_txt[1]+repeatimp_txt[2]+repeatimp_txt[3]+repeatimp_txt[4];
            else
                text = repeatimp_txt[0]+repeatimp_txt[1]+repeatimp_txt[2];
            break;
        case "recency":
            if (ry_text == "Poor" || ry_text == "Average")
                text = recencyimp_txt[0]+recencyimp_txt[1]+recencyimp_txt[2]+recencyimp_txt[3]+recencyimp_txt[4];
            else
                text = recencyimp_txt[0]+recencyimp_txt[1]+recencyimp_txt[2];
            break;
        case "nps":
            if (ns_text == "Poor" || ns_text == "Average")
                text = npsimp_txt[0]+npsimp_txt[1]+npsimp_txt[2]+npsimp_txt[3]+npsimp_txt[4];
            else
                text = npsimp_txt[0]+npsimp_txt[1]+npsimp_txt[2];
            break;
        case "trans":
            if (ts_text == "Poor" || ts_text == "Average")
                text = transimp_txt[0]+transimp_txt[1]+transimp_txt[2]+transimp_txt[3]+transimp_txt[4];
            else
                text = transimp_txt[0]+transimp_txt[1]+transimp_txt[2];
            break;
    }
    improveText.innerHTML = imp_txt+"<ul>"+text+"</ul>";
    improveBlock.style.display = "flex";
}
function setChanges(a_txt,color,ele,txt) {
    ab_txt = document.getElementById(a_txt+"_txt");	
    changecolor(a_txt,ele);
    ab_txt.innerHTML = txt;
    ab_txt.style.color = color;
    if (txt == "Excellent") {
        document.getElementById(a_txt+"ImproveText").style.display = "none";
    }
}
function setTotal() {
    var setText = "";
    var a = [];
    var i = 0;
    if (rt_color == poor || rt_color == average) {a[i] = "Repeat Rate"; i++;}
    if (ry_color == poor || ry_color == average) {a[i] = "Recency Index"; i++;}
    if (ns_color == poor || ns_color == average) {a[i] = "NPS"; i++;}
    if (ts_color == poor || ts_color == average) {a[i] = "Loyalty Trans";}

    for (let n=0; n<a.length-1; n++) {
        setText = setText + a[n] + ", ";
        if (n == a.length-2) {
            setText = setText + "and "+a[n+1];
        }
    }
    let total = document.getElementById("totalImproveText");
    switch (total_text) {
        case "Excellent":
            total.innerHTML = "<b>You seem to be doing an excellent job when it comes to customer engagement. Keep it up!!</b>";
            break;
        case "Good":
            total.innerHTML = "<b>You are doing a good job but there are definite areas of improvement around - "+setText+"!!</b>"
            break;
        case "Poor":
            total.innerHTML = "<b>Your customer engagement efforts need a lot of improvement. Immediate attention needs to be given to improve - "+setText+"!!</b>";
            break;
        default:
            total.innerHTML = "<b>Your customer engagement score is in the average range considering your retail vertical. There is a need to focus on - "+setText+"!!</b>";
            break;		
    }
}
function popUp(popupText) {
    let popup = document.getElementById(popupText);
    popup.classList.toggle("show");
}
function changecolor(el, ele) {
    if(el == 'total') {
        return
    } else if(el=='trans') {
        console.log(ele);
    }
    let addclass;
    if (ele <= 50) {addclass = "bg-failure";}
    else {addclass = "bg-success";}
    const bar1 = document.getElementById(el+'_bar');
    bar1.classList.add(addclass);
    bar1.style.width = ele+"%";
    const bar2 = document.getElementById(el+'_bar2');
    bar2.classList.add(addclass);
    bar2.style.width = ele+"%";
    document.getElementById(el+'_per').innerHTML = ele+"/100";
}
function setProgress(percent,color) {
    if (percent >= 100) {
        percent = 100;
        const ellipse = document.querySelector('ellipse');
        ellipse.style.stroke = color;
    }
    const path = document.querySelector('path');
    const total_value = 490.157;
    const offset = total_value * (100 - percent) / 100;
    path.style.zIndex = -1;
    path.style.strokeDashoffset = offset;
    path.style.stroke = color;
    document.getElementById('total_per').innerText = percent.toString()+"%";
}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 550 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

const sleep = (delay) => new Promise((resolve)=>setTimeout(resolve,delay));

const startLoading = async(val) => {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #6fd89a }";
    document.body.appendChild(css);

    await sleep(val);
    document.getElementsByClassName('loading-screen')[0].remove();
};
