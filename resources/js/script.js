
var namaPerusahaan = ''
var harga = [0]
var tahun = [3]
var check = 0

var objResult = {}

let numericKeyUp = (function() {

    let Comma = function (Num) { //function to add commas to textboxes
        
        Num = Num.toString().replace(/,/g, '');
        x = Num.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        return x1 + x2
    }


    let autoAddComma = function () {
        document.addEventListener('keyup', function(event) {
            
            document.querySelector('#laba-bersih-1').value = Comma(document.querySelector('#laba-bersih-1').value)
            document.querySelector('#nominal-dividen-1').value = Comma(document.querySelector('#nominal-dividen-1').value)
            document.querySelector('#lembar-saham-1').value = Comma(document.querySelector('#lembar-saham-1').value)
            document.querySelector('#laba-kotor-1').value = Comma(document.querySelector('#laba-kotor-1').value)
            document.querySelector('#laba-operasi-1').value = Comma(document.querySelector('#laba-operasi-1').value)
            document.querySelector('#pendapatan-1').value = Comma(document.querySelector('#pendapatan-1').value)
            document.querySelector('#ekuitas-1').value = Comma(document.querySelector('#ekuitas-1').value)
            document.querySelector('#lialibilitas-1').value = Comma(document.querySelector('#lialibilitas-1').value)
            document.querySelector('#operating-cash-flow-1').value = Comma(document.querySelector('#operating-cash-flow-1').value)
            document.querySelector('#investment-cash-flow-1').value = Comma(document.querySelector('#investment-cash-flow-1').value)
            document.querySelector('#financial-cash-flow-1').value = Comma(document.querySelector('#financial-cash-flow-1').value)

            document.querySelector('#laba-bersih-2').value = Comma(document.querySelector('#laba-bersih-2').value)
            document.querySelector('#nominal-dividen-2').value = Comma(document.querySelector('#nominal-dividen-2').value)
            document.querySelector('#lembar-saham-2').value = Comma(document.querySelector('#lembar-saham-2').value)
            document.querySelector('#laba-kotor-2').value = Comma(document.querySelector('#laba-kotor-2').value)
            document.querySelector('#laba-operasi-2').value = Comma(document.querySelector('#laba-operasi-2').value)
            document.querySelector('#pendapatan-2').value = Comma(document.querySelector('#pendapatan-2').value)
            document.querySelector('#ekuitas-2').value = Comma(document.querySelector('#ekuitas-2').value)
            document.querySelector('#lialibilitas-2').value = Comma(document.querySelector('#lialibilitas-2').value)
            document.querySelector('#operating-cash-flow-2').value = Comma(document.querySelector('#operating-cash-flow-2').value)
            document.querySelector('#investment-cash-flow-2').value = Comma(document.querySelector('#investment-cash-flow-2').value)
            document.querySelector('#financial-cash-flow-2').value = Comma(document.querySelector('#financial-cash-flow-2').value)

            document.querySelector('#laba-bersih-3').value = Comma(document.querySelector('#laba-bersih-3').value)
            document.querySelector('#nominal-dividen-3').value = Comma(document.querySelector('#nominal-dividen-3').value)
            document.querySelector('#lembar-saham-3').value = Comma(document.querySelector('#lembar-saham-3').value)
            document.querySelector('#laba-kotor-3').value = Comma(document.querySelector('#laba-kotor-3').value)
            document.querySelector('#laba-operasi-3').value = Comma(document.querySelector('#laba-operasi-3').value)
            document.querySelector('#pendapatan-3').value = Comma(document.querySelector('#pendapatan-3').value)
            document.querySelector('#ekuitas-3').value = Comma(document.querySelector('#ekuitas-3').value)
            document.querySelector('#lialibilitas-3').value = Comma(document.querySelector('#lialibilitas-3').value)
            document.querySelector('#operating-cash-flow-3').value = Comma(document.querySelector('#operating-cash-flow-3').value)
            document.querySelector('#investment-cash-flow-3').value = Comma(document.querySelector('#investment-cash-flow-3').value)
            document.querySelector('#financial-cash-flow-3').value = Comma(document.querySelector('#financial-cash-flow-3').value)

            document.querySelector('#laba-bersih-4').value = Comma(document.querySelector('#laba-bersih-4').value)
            document.querySelector('#nominal-dividen-4').value = Comma(document.querySelector('#nominal-dividen-4').value)
            document.querySelector('#lembar-saham-4').value = Comma(document.querySelector('#lembar-saham-4').value)
            document.querySelector('#laba-kotor-4').value = Comma(document.querySelector('#laba-kotor-4').value)
            document.querySelector('#laba-operasi-4').value = Comma(document.querySelector('#laba-operasi-4').value)
            document.querySelector('#pendapatan-4').value = Comma(document.querySelector('#pendapatan-4').value)
            document.querySelector('#ekuitas-4').value = Comma(document.querySelector('#ekuitas-4').value)
            document.querySelector('#lialibilitas-4').value = Comma(document.querySelector('#lialibilitas-4').value)
            document.querySelector('#operating-cash-flow-4').value = Comma(document.querySelector('#operating-cash-flow-4').value)
            document.querySelector('#investment-cash-flow-4').value = Comma(document.querySelector('#investment-cash-flow-4').value)
            document.querySelector('#financial-cash-flow-4').value = Comma(document.querySelector('#financial-cash-flow-4').value)

            document.querySelector('#laba-bersih-5').value = Comma(document.querySelector('#laba-bersih-5').value)
            document.querySelector('#nominal-dividen-5').value = Comma(document.querySelector('#nominal-dividen-5').value)
            document.querySelector('#lembar-saham-5').value = Comma(document.querySelector('#lembar-saham-5').value)
            document.querySelector('#laba-kotor-5').value = Comma(document.querySelector('#laba-kotor-5').value)
            document.querySelector('#laba-operasi-5').value = Comma(document.querySelector('#laba-operasi-5').value)
            document.querySelector('#pendapatan-5').value = Comma(document.querySelector('#pendapatan-5').value)
            document.querySelector('#ekuitas-5').value = Comma(document.querySelector('#ekuitas-5').value)
            document.querySelector('#lialibilitas-5').value = Comma(document.querySelector('#lialibilitas-5').value)
            document.querySelector('#operating-cash-flow-5').value = Comma(document.querySelector('#operating-cash-flow-5').value)
            document.querySelector('#investment-cash-flow-5').value = Comma(document.querySelector('#investment-cash-flow-5').value)
            document.querySelector('#financial-cash-flow-5').value = Comma(document.querySelector('#financial-cash-flow-5').value)

            document.querySelector('#laba-bersih-6').value = Comma(document.querySelector('#laba-bersih-6').value)
            document.querySelector('#nominal-dividen-6').value = Comma(document.querySelector('#nominal-dividen-6').value)
            document.querySelector('#lembar-saham-6').value = Comma(document.querySelector('#lembar-saham-6').value)
            document.querySelector('#laba-kotor-6').value = Comma(document.querySelector('#laba-kotor-6').value)
            document.querySelector('#laba-operasi-6').value = Comma(document.querySelector('#laba-operasi-6').value)
            document.querySelector('#pendapatan-6').value = Comma(document.querySelector('#pendapatan-6').value)
            document.querySelector('#ekuitas-6').value = Comma(document.querySelector('#ekuitas-6').value)
            document.querySelector('#lialibilitas-6').value = Comma(document.querySelector('#lialibilitas-6').value)
            document.querySelector('#operating-cash-flow-6').value = Comma(document.querySelector('#operating-cash-flow-6').value)
            document.querySelector('#investment-cash-flow-6').value = Comma(document.querySelector('#investment-cash-flow-6').value)
            document.querySelector('#financial-cash-flow-6').value = Comma(document.querySelector('#financial-cash-flow-6').value)

        })
    }

    return {
        addComma: function() {
            autoAddComma()
        }
    }

})()
numericKeyUp.addComma()

function submit1() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-1')
    var nominalDividen = document.getElementById('nominal-dividen-1')
    var lembarSaham = document.getElementById('lembar-saham-1')
    var labaKotor = document.getElementById('laba-kotor-1')
    var labaOperasi = document.getElementById('laba-operasi-1')
    var pendapatan = document.getElementById('pendapatan-1')
    var ekuitas = document.getElementById('ekuitas-1')
    var lialibilitas = document.getElementById('lialibilitas-1')
    var operatingCashFlow = document.getElementById('operating-cash-flow-1')
    var investmentCashFlow = document.getElementById('investment-cash-flow-1')
    var financialCashFlow = document.getElementById('financial-cash-flow-1')

    var button = document.getElementById('submit-1')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')

    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun1 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')

            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-1-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-1').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-1-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-1').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-1-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-1').appendChild(dprElement)

            document.getElementById('gpm-1-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-1-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-1-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-1-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-1-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1
            
        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-1-value').remove()
        document.getElementById('dps-1-value').remove()
        document.getElementById('dpr-1-value').remove()

        check--

    }

}

function submit2() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-2')
    var nominalDividen = document.getElementById('nominal-dividen-2')
    var lembarSaham = document.getElementById('lembar-saham-2')

    var labaKotor = document.getElementById('laba-kotor-2')
    var labaOperasi = document.getElementById('laba-operasi-2')
    var pendapatan = document.getElementById('pendapatan-2')
    var ekuitas = document.getElementById('ekuitas-2')
    var lialibilitas = document.getElementById('lialibilitas-2')
    var operatingCashFlow = document.getElementById('operating-cash-flow-2')
    var investmentCashFlow = document.getElementById('investment-cash-flow-2')
    var financialCashFlow = document.getElementById('financial-cash-flow-2')

    var button = document.getElementById('submit-2')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')


    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun2 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')
            
            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-2-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-2').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-2-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-2').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-2-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-2').appendChild(dprElement)

            document.getElementById('gpm-2-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-2-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-2-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-2-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-2-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1


        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-2-value').remove()
        document.getElementById('dps-2-value').remove()
        document.getElementById('dpr-2-value').remove()

        check--
    }

}

function submit3() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-3')
    var nominalDividen = document.getElementById('nominal-dividen-3')
    var lembarSaham = document.getElementById('lembar-saham-3')

    var labaKotor = document.getElementById('laba-kotor-3')
    var labaOperasi = document.getElementById('laba-operasi-3')
    var pendapatan = document.getElementById('pendapatan-3')
    var ekuitas = document.getElementById('ekuitas-3')
    var lialibilitas = document.getElementById('lialibilitas-3')
    var operatingCashFlow = document.getElementById('operating-cash-flow-3')
    var investmentCashFlow = document.getElementById('investment-cash-flow-3')
    var financialCashFlow = document.getElementById('financial-cash-flow-3')

    var button = document.getElementById('submit-3')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')


    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun3 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')
            
            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-3-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-3').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-3-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-3').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-3-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-3').appendChild(dprElement)

            document.getElementById('gpm-3-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-3-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-3-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-3-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-3-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1
            
        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-3-value').remove()
        document.getElementById('dps-3-value').remove()
        document.getElementById('dpr-3-value').remove()

        check--
    }

}

function submit4() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-4')
    var nominalDividen = document.getElementById('nominal-dividen-4')
    var lembarSaham = document.getElementById('lembar-saham-4')

    var labaKotor = document.getElementById('laba-kotor-4')
    var labaOperasi = document.getElementById('laba-operasi-4')
    var pendapatan = document.getElementById('pendapatan-4')
    var ekuitas = document.getElementById('ekuitas-4')
    var lialibilitas = document.getElementById('lialibilitas-4')
    var operatingCashFlow = document.getElementById('operating-cash-flow-4')
    var investmentCashFlow = document.getElementById('investment-cash-flow-4')
    var financialCashFlow = document.getElementById('financial-cash-flow-4')

    var button = document.getElementById('submit-4')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')


    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun4 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')
            
            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-4-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-4').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-4-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-4').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-4-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-4').appendChild(dprElement)

            document.getElementById('gpm-4-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-4-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-4-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-4-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-4-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1
            
        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-4-value').remove()
        document.getElementById('dps-4-value').remove()
        document.getElementById('dpr-4-value').remove()

        check--
    }

}

function submit5() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-5')
    var nominalDividen = document.getElementById('nominal-dividen-5')
    var lembarSaham = document.getElementById('lembar-saham-5')

    var labaKotor = document.getElementById('laba-kotor-5')
    var labaOperasi = document.getElementById('laba-operasi-5')
    var pendapatan = document.getElementById('pendapatan-5')
    var ekuitas = document.getElementById('ekuitas-5')
    var lialibilitas = document.getElementById('lialibilitas-5')
    var operatingCashFlow = document.getElementById('operating-cash-flow-5')
    var investmentCashFlow = document.getElementById('investment-cash-flow-5')
    var financialCashFlow = document.getElementById('financial-cash-flow-5')

    var button = document.getElementById('submit-5')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')


    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun5 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')
            
            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-5-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-5').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-5-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-5').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-5-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-5').appendChild(dprElement)

            document.getElementById('gpm-5-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-5-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-5-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-5-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-5-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1
            
        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-5-value').remove()
        document.getElementById('dps-5-value').remove()
        document.getElementById('dpr-5-value').remove()

        check--
    }

}

function submit6() {

    var year1 = []
    var labaBersih = document.getElementById('laba-bersih-6')
    var nominalDividen = document.getElementById('nominal-dividen-6')
    var lembarSaham = document.getElementById('lembar-saham-6')

    var labaKotor = document.getElementById('laba-kotor-6')
    var labaOperasi = document.getElementById('laba-operasi-6')
    var pendapatan = document.getElementById('pendapatan-6')
    var ekuitas = document.getElementById('ekuitas-6')
    var lialibilitas = document.getElementById('lialibilitas-6')
    var operatingCashFlow = document.getElementById('operating-cash-flow-6')
    var investmentCashFlow = document.getElementById('investment-cash-flow-6')
    var financialCashFlow = document.getElementById('financial-cash-flow-6')

    var button = document.getElementById('submit-6')
    var textCancel = document.createTextNode('Cancel')
    var textSubmit = document.createTextNode('Submit')


    if (button.textContent == 'Submit') {
        if ((!isNaN(Number(labaBersih.value.replace(/,/g, ''))) && 
        !isNaN(Number(lembarSaham.value.replace(/,/g, ''))) && 
        !isNaN(Number(nominalDividen.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaKotor.value.replace(/,/g, ''))) &&
        !isNaN(Number(labaOperasi.value.replace(/,/g, ''))) &&
        !isNaN(Number(pendapatan.value.replace(/,/g, ''))) &&
        !isNaN(Number(ekuitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(lialibilitas.value.replace(/,/g, ''))) &&
        !isNaN(Number(operatingCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(investmentCashFlow.value.replace(/,/g, ''))) &&
        !isNaN(Number(financialCashFlow.value.replace(/,/g, '')))) && 
        (labaBersih.value.replace(/,/g, '') != '' && 
        nominalDividen.value.replace(/,/g, '') != '' && 
        lembarSaham.value.replace(/,/g, '') != '' &&
        labaKotor.value.replace(/,/g, '') != '' &&
        labaOperasi.value.replace(/,/g, '') != '' &&
        pendapatan.value.replace(/,/g, '') != '' &&
        ekuitas.value.replace(/,/g, '') != '' &&
        lialibilitas.value.replace(/,/g, '') != '' &&
        operatingCashFlow.value.replace(/,/g, '') != '' &&
        investmentCashFlow.value.replace(/,/g, '') != '' &&
        financialCashFlow.value.replace(/,/g, '') != '')) {

            // FINANCIAL RATIO
            var EPS = (labaBersih.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPS = (nominalDividen.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')).toFixed(2)
            var DPR = ((nominalDividen.value.replace(/,/g, '') / labaBersih.value.replace(/,/g, '')) * 100).toFixed(2)

            var tampungan = [Number(EPS), Number(DPS), Number(DPR)]
            objResult.Tahun6 = tampungan

            // INCOME STATEMENT
            var GPM = (labaKotor.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var OPM = (labaOperasi.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var NPM = (labaBersih.value.replace(/,/g, '') / pendapatan.value.replace(/,/g, '')) * 100
            var bookValue = ekuitas.value.replace(/,/g, '') / lembarSaham.value.replace(/,/g, '')
            var PBV = harga[0] / bookValue
            var ROE = labaBersih.value.replace(/,/g, '') / ekuitas.value.replace(/,/g, '')


            // year1.push(EPS)
            // year1.push(DPS)
            // year1.push(DPR)

            labaBersih.classList.add('disabled')
            nominalDividen.classList.add('disabled')
            lembarSaham.classList.add('disabled')
            labaKotor.classList.add('disabled')
            labaOperasi.classList.add('disabled')
            pendapatan.classList.add('disabled')
            ekuitas.classList.add('disabled')
            lialibilitas.classList.add('disabled')
            operatingCashFlow.classList.add('disabled')
            investmentCashFlow.classList.add('disabled')
            financialCashFlow.classList.add('disabled')

            button.textContent = ''
            button.appendChild(textCancel)
            
            button.classList.add('btn-color')
            
            // EPS
            var epsElement = document.createElement('h4')
            var epsValue = document.createTextNode('Rp. ' + EPS)
            epsElement.setAttribute('id', 'eps-6-value')
            epsElement.appendChild(epsValue)
            document.getElementById('eps-6').appendChild(epsElement)

            // DPS
            var dpsElement = document.createElement('h4')
            var dpsValue = document.createTextNode('Rp. ' + DPS)
            dpsElement.setAttribute('id', 'dps-6-value')
            dpsElement.appendChild(dpsValue)
            document.getElementById('dps-6').appendChild(dpsElement)

            // DPR
            var dprElement = document.createElement('h4')
            var dprValue = document.createTextNode(DPR + ' %')
            dprElement.setAttribute('id', 'dpr-6-value')
            dprElement.appendChild(dprValue)
            document.getElementById('dpr-6').appendChild(dprElement)

            document.getElementById('gpm-6-value').textContent = GPM.toFixed(2) + ' %'
            document.getElementById('opm-6-value').textContent = OPM.toFixed(2) + ' %'
            document.getElementById('npm-6-value').textContent = NPM.toFixed(2) + ' %'
            document.getElementById('pbv-6-value').textContent = PBV.toFixed(1) + ' x'
            document.getElementById('roe-6-value').textContent = ROE.toFixed(2) + ' %'

            check++
            // return year1
            
        } else {
            alert('Isi data dengan benar')
        }
    } else {
        button.textContent = ''
        button.appendChild(textSubmit)

        labaBersih.classList.remove('disabled')
        nominalDividen.classList.remove('disabled')
        lembarSaham.classList.remove('disabled')
        labaKotor.classList.remove('disabled')
        labaOperasi.classList.remove('disabled')
        pendapatan.classList.remove('disabled')
        ekuitas.classList.remove('disabled')
        lialibilitas.classList.remove('disabled')
        operatingCashFlow.classList.remove('disabled')
        investmentCashFlow.classList.remove('disabled')
        financialCashFlow.classList.remove('disabled')

        button.classList.remove('btn-color')
        document.getElementById('eps-6-value').remove()
        document.getElementById('dps-6-value').remove()
        document.getElementById('dpr-6-value').remove()

        check--
    }

}



// numericKeyPress.AddComma()

// ------- ADD MORE YEAR TABLE ----------------------------------------------------------------------------------------------------

function moreYear6() {
    var clas = document.getElementById('btn-add-year-6')

    var year4 = document.getElementById('year-4')
    var year5 = document.getElementById('year-5')
    var year6 = document.getElementById('year-6')

    var resultYear4 = document.getElementById('year-result-4')
    var resultYear5 = document.getElementById('year-result-5')
    var resultYear6 = document.getElementById('year-result-6')
   

    if (year4.classList.contains('close')) {
        year4.classList.remove('close')
        resultYear4.classList.remove('close')
        tahun.pop()
        tahun.push(4)
    } else if (year5.classList.contains('close')) {
        year5.classList.remove('close')
        resultYear5.classList.remove('close')
        tahun.pop()
        tahun.push(5)
    } else if (year6.classList.contains('close')) {
        year6.classList.remove('close')
        resultYear6.classList.remove('close')
        clas.classList.add('close')
        tahun.pop()
        tahun.push(6)
    }
        

}

// ------- BUTTON ANALYZE ----------------------------------------------------------------------------------------------------

function submit() {

    if (check != tahun[0]) {return alert('Please Check The Table ')}

    var dprRate = 0
    for (var key in objResult) {
        if (key == ('Tahun' + tahun[0])) {
            var epsAkhir = objResult[key][0]
        } else if (key == 'Tahun1') {
            var epsAwal = objResult[key][0]
        }

        dprRate += objResult[key][2]
    }
    var epsGrowth = Math.pow(epsAwal / epsAkhir, (1/ tahun[0]))

    dprRate /= tahun[0]
    
    // var harga = prompt('Penutupan Harga Terakhir?')
    document.getElementById('harga-saham').textContent = ''
    document.getElementById('harga-saham').textContent = harga
    var per = harga / epsAwal
    
    

    // EPS Growth
    var epsGrowthElement = document.createElement('h4')
    var epsGrowthValue = document.createTextNode(epsGrowth.toFixed(2) + ' %')
    epsGrowthElement.setAttribute('id', 'val-epsGrowth')
    epsGrowthElement.appendChild(epsGrowthValue)
    document.getElementById('eps-growth').appendChild(epsGrowthElement)

    // PER
    var perElement = document.createElement('h4')
    var perValue = document.createTextNode(Math.round(per) + ' x')
    perElement.setAttribute('id', 'val-per')
    perElement.appendChild(perValue)
    document.getElementById('per-value').appendChild(perElement)

    // DPR Rate
    var dprElement = document.createElement('h4')
    var dprElementValue = document.createTextNode(dprRate.toFixed(2) + ' %')
    dprElement.setAttribute('id', 'val-dpr-rate')
    dprElement.appendChild(dprElementValue)
    document.getElementById('dpr-rate').appendChild(dprElement)


    var epsProyeksi = epsAwal
    
    
    var returnProyeksi, priceProyeksi, dividenProyeksi, yieldProyeksi
    for (var i = 1; i <= 5; i++) {
       
        epsProyeksi = epsProyeksi + (epsProyeksi * (epsGrowth/100))
        priceProyeksi = epsProyeksi * per
        returnProyeksi = ((priceProyeksi - harga) / harga) * 100
        dividenProyeksi = epsProyeksi * (dprRate/100)
        yieldProyeksi = (dividenProyeksi / harga) * 100


        var epsProyeksiID = 'proyeksi-eps-' + i
        var perProyeksiID = 'proyeksi-per-' + i
        var priceProyeksiID = 'proyeksi-price-' + i
        var returnProyeksiID = 'proyeksi-return-' + i
        var dividenProyeksiID = 'proyeksi-dividen-' + i
        var yieldProyeksiID = 'proyeksi-yield-' + i

        document.getElementById(epsProyeksiID).textContent = ''
        document.getElementById(perProyeksiID).textContent = ''
        document.getElementById(priceProyeksiID).textContent = ''
        document.getElementById(returnProyeksiID).textContent = ''
        document.getElementById(dividenProyeksiID).textContent = ''
        document.getElementById(yieldProyeksiID).textContent = ''

        document.getElementById(epsProyeksiID).textContent = Math.round(epsProyeksi)
        document.getElementById(perProyeksiID).textContent = Math.round(per) + ' x'
        document.getElementById(priceProyeksiID).textContent = Math.round(priceProyeksi)
        document.getElementById(returnProyeksiID).textContent = returnProyeksi.toFixed(2) + ' %'
        document.getElementById(dividenProyeksiID).textContent = Math.round(dividenProyeksi)
        document.getElementById(yieldProyeksiID).textContent = yieldProyeksi.toFixed(2) + ' %'

    }

    document.getElementById('section-ratio').classList.add('close')
    document.getElementById('section-result').classList.remove('close')
}

function getStarted() {
    var companyName = prompt('Nama Perusahaan?')
    if (companyName === null || companyName == '') {return;}
    
    var hargaPrompt = prompt('Penutupan Harga Terakhir?')
    if (hargaPrompt === null) {
        return;
    } else if (isNaN(Number(hargaPrompt)) || hargaPrompt == '') {
        return alert('mohon isi harga penutupan akhir dengan benar')
    }

    document.getElementById('section-ratio').classList.remove('close')
    document.getElementById('break-section').classList.remove('close')
    document.getElementById('section-result').classList.add('close')

    document.getElementById('btn-add-year-6').classList.remove('close')
    document.getElementById('year-4').classList.add('close')
    document.getElementById('year-5').classList.add('close')
    document.getElementById('year-6').classList.add('close')
    document.getElementById('year-result-4').classList.add('close')
    document.getElementById('year-result-5').classList.add('close')
    document.getElementById('year-result-6').classList.add('close')
    
    // var textSubmit = document.createTextNode('Submit')

    document.getElementById('company-name').textContent = ''
    document.getElementById('company-name').textContent = companyName.toUpperCase()
    
    harga.pop()
    harga.push(hargaPrompt)

    document.getElementById('val-epsGrowth').remove()
    document.getElementById('val-per').remove()
    document.getElementById('val-dpr-rate').remove()

    for (var i = 1; i <= tahun[0]; i++) {
        console.log(i);
        
        var laBer = 'laba-bersih-' + i
        var nomDiv = 'nominal-dividen-' + i
        var lemSah = 'lembar-saham-' + i
        var laKot = 'laba-kotor-' + i
        var laOp = 'laba-operasi-' + i
        var pndptn = 'pendapatan-' + i
        var ekui = 'ekuitas-' + i
        var liab = 'lialibilitas-' + i
        var ocf = 'operating-cash-flow-' + i
        var icf = 'investment-cash-flow-' + i
        var fcf = 'financial-cash-flow-' + i
        var sbmt = 'submit-' + i


        document.getElementById(laBer).value = ''
        document.getElementById(nomDiv).value = ''
        document.getElementById(lemSah).value = ''
        document.getElementById(laKot).value = ''
        document.getElementById(laOp).value = ''
        document.getElementById(pndptn).value = ''
        document.getElementById(ekui).value = ''
        document.getElementById(liab).value = ''
        document.getElementById(ocf).value = ''
        document.getElementById(icf).value = ''
        document.getElementById(fcf).value = ''

        document.getElementById(sbmt).textContent = 'Submit'
        // document.getElementById(sbmt).appendChild(textSubmit)
        document.getElementById(sbmt).classList.remove('btn-color')

        document.getElementById(laBer).classList.remove('disabled')
        document.getElementById(nomDiv).classList.remove('disabled')
        document.getElementById(lemSah).classList.remove('disabled')
        document.getElementById(laKot).classList.remove('disabled')
        document.getElementById(laOp).classList.remove('disabled')
        document.getElementById(pndptn).classList.remove('disabled')
        document.getElementById(ekui).classList.remove('disabled')
        document.getElementById(liab).classList.remove('disabled')
        document.getElementById(ocf).classList.remove('disabled')
        document.getElementById(icf).classList.remove('disabled')
        document.getElementById(fcf).classList.remove('disabled')



        var epsVal = 'eps-' + i + '-value'
        var dpsVal = 'dps-' + i + '-value'
        var dprVal = 'dpr-' + i + '-value'

        document.getElementById(epsVal).remove()
        document.getElementById(dpsVal).remove()
        document.getElementById(dprVal).remove()


        var gpmVal = 'gpm-' + i + '-value'
        var opmVal = 'opm-' + i + '-value'
        var npmVal = 'npm-' + i + '-value'
        var pbvVal = 'pbv-' + i + '-value'
        var roeVal = 'roe-' + i + '-value'

        document.getElementById(gpmVal).textContent = ''
        document.getElementById(opmVal).textContent = ''
        document.getElementById(npmVal).textContent = ''
        document.getElementById(pbvVal).textContent = ''
        document.getElementById(roeVal).textContent = ''

    }

    check = 0
    tahun.pop()
    tahun.push(3)    

  }