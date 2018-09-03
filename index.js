$('#add').on('click', function(){

        var fd = 0.9;
        var md = 0.9;
        var td;
        var zd;
        var v0 = document.getElementById("v0").value;
        var v1 = document.getElementById("v1").value;
        var v2 = document.getElementById("v2").value;
        var wc = document.getElementById("wc").value;
        var ad = document.getElementById("ad").value;
        var r = document.getElementById("r").value;
        var p = document.getElementById("p").value;
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var message1 = document.getElementById("message1");
        var message2 = document.getElementById("message2");
        var warning = document.getElementById('warning');
        var warning1 = document.getElementById('warning1');
        var warning2 = document.getElementById('warning2');
        var warning3 = document.getElementById('warning3');
        var wd = Number(wc) + Number(ad);
        if(v0>1){
          warning.textContent = "Answer should lie in between 0 and 1";
           return;
        } else if (v1>1) {
          warning1.textContent = "Answer should lie in between 0 and 1";
          return;
        } else if(v2>1){
          warning2.textContent = "Answer should lie in between 0 and 1";
          return;
        }
        if(v1 < v0){
          warning1.textContent = "v1 must be greater than v0";
          return;
        } else if (v2 < v1){
           warning2.textContent = "v2 must be greater than v1";
           return;
        }
        if (r>p){
          warning3.textContent = "answer must lie in between 0 and p ";
          return;
        }

        for(var i = 0;i<5000;i++)
        {
        var sc = (1 - a) * fd * (wd - wc) * v0/((1 - a) * (1 - md) + md);
        var sd = fd * (wd - wc) * v0/((1 - a) * (1 - md) + md);
        var epp = (1 - md) * (1 - fd) * wc * v2 * (1 - p) + (1 - md) * fd * wc* v1 * (1 - p) +
        md * (1 - fd) * wc * v1 * (1 - r) + md * fd * wc * v0 * (1 - r);
        var ec = (1 - b) * epp/((1 - b) * (1 - md) + md);
        var ed = epp/((1 - b) * (1 - md) + md);
        var w = (1 - md) * (1 - fd) * wc * v2 + (1 - md) * fd * wc * v1 + md * (1 - fd) * wc * v1 +
        md * fd * wc * v0 + fd * (1 - md) * v0 * (wd - wc) + md * fd * v0 *(wd - wc);
        var mdd = (md/w) * ((1 - fd) * (r * wc * v1 + sd + ed) + fd * (r * wc * v0 + sd + ed));
        var fdd = (fd/w) * ((wd - wc) * v0 + (1 - md) * wc * v1 + md * wc * v0) ;
        fd = fdd.valueOf();
        md = mdd.valueOf();

               if(md > 0.999999){
                 md = 1;
               }else if (md < 0.000001){
                 md = 0;
               }

                if(fd > 0.999999){
                      fd = 1;
                    }  else if (fd < 0.000001 ) {
                        fd = 0;
                        }
        if (i === 4999){
                        message1.textContent = fd;
                        message2.textContent = md;
                        break;
         }
}
});
