let acc = document.querySelectorAll('.accardion');
let con = document.querySelectorAll('.items')

for(let i=0;i<acc.length;i++) {
    acc[i].onclick = function() {
        con[i].classList.toggle('show');
        acc[i].classList.toggle('active');
        for(let a=0;a<acc.length;a++) {
            if(i==a) {

            }else {
                con[a].classList.remove('show');
                acc[a].classList.remove('active');
            }
        }
    }
}