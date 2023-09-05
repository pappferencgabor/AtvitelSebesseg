window.onload = function () {
    document.getElementById("atvitelSebesseg").innerHTML = 2500;
}

function atvitelDisplay() {
    let rangeValue = document.getElementById("atviteliseb").value;
    document.getElementById("atvitelSebesseg").innerHTML = rangeValue;
}

function szamol() {
    document.getElementById("eredmeny").style.display = "block";

    let kapacitas = document.getElementById("kapacitas").value;
    let kapacitasME = document.getElementById("kapacitasME").value;
    let atvitel = document.getElementById("atviteliseb").value;
    let atvitelME = document.getElementById("kapacitasseb").value;
    let eredspan = document.getElementById("eredSpan");

    let kapbps = 0;
    let bp = 0;

    if (kapacitasME == "KBps") {
        kapbps = kapacitas * 1000
    }
    else if (kapacitasME = "MBps") {
        kapbps = kapacitas * 1000000
    }
    else if (kapacitasME = "GBps") {
        kapbps = kapacitas * 1000000000
    }

    if (atvitelME == "Mb") {
        bp = atvitel * 1000000
    }
    else if (atvitelME = "Gb") {
        bp = atvitel * 1000000000
    }
    else if (atvitelME = "Tb") {
        bp = atvitel * 1000000000000
    }
    eredspan.innerHTML = Math.round(bp / kapbps);
}