const range = document.querySelector(".pass_length");
const range_val = document.querySelector(".range_value");
const out = document.querySelector(".out");
const gen_btn = document.querySelector(".gen_btn");

const digits = '0123456789';
const symbols = '@/!%$*_=#&';
const upper = 'ABCDEFGHIKLMNOPQRSTVX';
const lower = upper.toLowerCase();

range.addEventListener("input", () => {
    range_val.innerHTML = range.value;
})

gen_btn.addEventListener("click", () => {
    password();
})

const password = () => {
    const lw = document.querySelector(".opt1").checked;
    const up = document.querySelector(".opt2").checked;
    const dg = document.querySelector(".opt3").checked;
    const sb = document.querySelector(".opt4").checked;
    let charset = '';
    let pass = '';
    
    if (!lw && !up && !dg && !sb){
        alert("Put few ticks to get something except blank string");
        return '';
    } else {
        if (up) charset += upper;
        if (lw) charset += lower;
        if (dg) charset += digits;
        if (sb) charset += symbols;
    }

    for (let i = 0; i < range.value; i++){
        pass += charset[Math.floor(Math.random() * charset.length)];
    }

    out.value = pass;
    return pass;
}