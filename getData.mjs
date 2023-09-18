import fetch from 'node-fetch';
import jsdom from 'jsdom';

const date = new Date(); // date object in local timezone
const dateToString = date.toUTCString();

const checkDate = dateToString.slice(0,3);

console.log(date.toUTCString()) // prints something like 

console.log(checkDate);

let sun = false;
let mon = false;
let tue = false;
let wed = false;
let thu = false;
let fri = false;
let sat = false;


if(checkDate === "Sun") {
  sun = true;
}else if(checkDate === "Mon") {
  mon = true;
} else if(checkDate == "Tue") {
  tue = true;
} else if(checkDate === "Wed") {
  wed = true;
} else if(checkDate === "Thu") {
  thu = true;
} else if(checkDate === "Fri") {
  fri = true;
} else if(checkDate === "Sat") {
  sat = true;
}

console.log(sun + " this is Sun"+ mon  + " this is mon" + tue  + " this is tue" + wed 
+ " this is wed" + thu + " this is thu" +fri + " this is fri" +sat + " this is sat");


export async function getData() {

  //#region test truc tiep
  /*
  .thu
  .ngay
  .giai1
  .giai2
  .giai3
  .giai4
  .giai5
  .giai6
  .giai7
  .giai8
  .giaidb
  .tinh
  .matinh
  #giai8_1
  #giai7_1
  #giai6_1_1
  #giai6_2_1
  #giai6_3_1
  #giai5_1
  #giai4_1_1
  #giai4_2_1
  #giai4_3_1
  #giai4_4_1
  #giai4_5_1
  #giai4_6_1
  #giai4_7_1
  #giai3_1_1
  #giai3_2_1
  #giai2_1
  #giai1_1
  #giaidb_1

  #giai8_2
  #giai7_2
  #giai6_1_2
  #giai6_2_2
  #giai6_3_2
  #giai5_2
  #giai4_1_2
  #giai4_2_2
  #giai4_3_2
  #giai4_4_2
  #giai4_5_2
  #giai4_6_2
  #giai4_7_2
  #giai3_1_2
  #giai3_2_2
  #giai2_2
  #giai1_2
  #giaidb_2

  #giai8_3
  #giai7_3
  #giai6_2_3
  #giai6_2_3
  #giai6_3_3
  #giai5_3
  #giai4_2_3
  #giai4_2_3
  #giai4_3_3
  #giai4_4_3
  #giai4_5_3
  #giai4_6_3
  #giai4_7_3
  #giai3_1_3
  #giai3_2_3
  #giai2_3
  #giai1_3
  #giaidb_3

  */

  // const resDai1 = await fetch('https://www.minhngoc.net.vn/xo-so-truc-tiep/mien-nam.html');
  // const textDai1 = await resDai1.text();
  // const domDai1 = new jsdom.JSDOM(textDai1);
  // const docDai1 = domDai1.window.document;

  // const dataTrucTiep = [...docDai1.querySelectorAll('tbody .content tbody tr')].reduce((obj, tr) => {
  // //    if(
  // //  // tr.querySelector('.thu') 
  // //   //   tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
  // //   //   tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
  // //   //   tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
  // //   //   tr.querySelector('.giai1') || tr.querySelector('.giaidb') || tr.querySelector('.tinh') || 
  // //      tr.querySelector('.matinh #loaive_1')
  // //   // tr.querySelector('#giai8_1')
  // //     // tr.querySelector('#giai6_1_1') ||
  // //    //tr.querySelector('.ngay') 
  // //     ) {
  //       const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
  //       obj[key] = value;
  //     // }
  //   return obj;
  // }, {});

  // console.log(dataTrucTiep);

  //#endregion 


  //#region test lay sau
  if(sun === true){
    // Sun
    // tieng-giang: /www.minhngoc.net.vn/getkqxs/tien-giang.js
    // kien-giang: /www.minhngoc.net.vn/getkqxs/kien-giang.js
    // da-lat: /www.minhngoc.net.vn/getkqxs/da-lat.js
    // Sun

    const resTienGiang = await fetch('https://www.minhngoc.net.vn/getkqxs/tien-giang.js');
    const textTienGiang = await resTienGiang.text();
    const domTG = new jsdom.JSDOM(textTienGiang);
    const docTienGiang = domTG.window.document;
    
    const dataTienGiang = [...docTienGiang.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }

      return obj;

    }, {});

    const resKienGiang = await fetch('https://www.minhngoc.net.vn/getkqxs/kien-giang.js');
    const textKienGiang = await resKienGiang.text();
    const domKG = new jsdom.JSDOM(textKienGiang);
    const docKienGiang = domKG.window.document;

    const dataKienGiang = [...docKienGiang.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }

      return obj;

    }, {});

    const resDaLat = await fetch('https://www.minhngoc.net.vn/getkqxs/da-lat.js');
    const textDaLat = await resDaLat.text();
    const domDL = new jsdom.JSDOM(textDaLat);
    const docDL = domDL.window.document;

    const dataDaLat = [...docDL.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }

      return obj;

    }, {});

    console.log(dataTienGiang);
    console.log(dataTienGiang["Giải ĐB"]); 
    console.log(dataTienGiang["Giải nhất"]);
    console.log(dataTienGiang["Giải nhì"]);
    console.log(dataTienGiang["Giải ba"]);
    console.log(dataTienGiang["Giải tư"]);
    console.log(dataTienGiang["Giải năm"]);
    console.log(dataTienGiang["Giải sáu"]);
    console.log(dataTienGiang["Giải bảy"]);
    console.log(dataTienGiang["Giải bảy"]);
    console.log(dataTienGiang["Giải tám"]);

    console.log(dataKienGiang);
    console.log(dataKienGiang["Giải ĐB"]); 
    console.log(dataKienGiang["Giải nhất"]);
    console.log(dataKienGiang["Giải nhì"]);
    console.log(dataKienGiang["Giải ba"]);
    console.log(dataKienGiang["Giải tư"]);
    console.log(dataKienGiang["Giải năm"]);
    console.log(dataKienGiang["Giải sáu"]);
    console.log(dataKienGiang["Giải bảy"]);
    console.log(dataKienGiang["Giải bảy"]);
    console.log(dataKienGiang["Giải tám"]);

    console.log(dataDaLat);
    console.log(dataDaLat["Giải ĐB"]); 
    console.log(dataDaLat["Giải nhất"]);
    console.log(dataDaLat["Giải nhì"]);
    console.log(dataDaLat["Giải ba"]);
    console.log(dataDaLat["Giải tư"]);
    console.log(dataDaLat["Giải năm"]);
    console.log(dataDaLat["Giải sáu"]);
    console.log(dataDaLat["Giải bảy"]);
    console.log(dataDaLat["Giải bảy"]);
    console.log(dataDaLat["Giải tám"]);

    return  dataTienGiang, dataKienGiang, dataDaLat;

  } else if (mon === true) {

        
  // Mon
  // tp-hcm : /www.minhngoc.net.vn/getkqxs/tp-hcm.js
  // dongthap: /www.minhngoc.net.vn/getkqxs/dong-thap.js
  // ca-mau: /www.minhngoc.net.vn/getkqxs/ca-mau.js
  //-- Mon

    const resThanhPho = await fetch('https://www.minhngoc.net.vn/getkqxs/tp-hcm.js');
    const textThanhPho = await resThanhPho.text();
    const domTG = new jsdom.JSDOM(textThanhPho);
    const docThanhPho = domTG.window.document;

    const ngayThang = docThanhPho.querySelector('div.title').textContent;

    console.log(ngayThang);

    const dataThanhPho = [...docThanhPho.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resDongThap = await fetch('https://www.minhngoc.net.vn/getkqxs/dong-thap.js');
    const textDongThap = await resDongThap.text();
    const domKG = new jsdom.JSDOM(textDongThap);
    const docDongThap = domKG.window.document;

    const dataDongThap = [...docDongThap.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resCaMau = await fetch('https://www.minhngoc.net.vn/getkqxs/ca-mau.js');
    const textCaMau = await resCaMau.text();
    const domCaMau = new jsdom.JSDOM(textCaMau);
    const docCaMau = domCaMau.window.document;

    const dataCaMau = [...docCaMau.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay')  ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});


    // bien TP.HCM
    const giaiDB_TP = dataThanhPho[" Giải ĐB"].split(' - ');
    const giaiNhat_TP = dataThanhPho["Giải nhất"].split(' - ');
    const giaiNhi_TP = dataThanhPho["Giải nhì"].split(' - ')
    const giaiBa_TP = dataThanhPho["Giải ba"].split(' - ');
    const giaiTu_TP = dataThanhPho["Giải tư"].split(' - ');
    const giaiNam_TP = dataThanhPho["Giải năm"].split(' - ');
    const giaiSau_TP = dataThanhPho["Giải sáu"].split(' - ');
    const giaiBay_TP = dataThanhPho["Giải bảy"].split(' - ');
    const giaiTam_Tp = dataThanhPho["Giải tám"].split(' - ');

    // #endreion bien TP.HCM

    console.log(dataThanhPho);
    console.log(dataThanhPho[" Giải ĐB"]); 
    console.log(dataThanhPho["Giải nhất"]);
    console.log(dataThanhPho["Giải nhì"]);
    console.log(dataThanhPho["Giải ba"]);
    console.log(dataThanhPho["Giải tư"]);
    console.log(dataThanhPho["Giải năm"]);
    console.log(dataThanhPho["Giải sáu"]);
    console.log(dataThanhPho["Giải bảy"]);
    console.log(dataThanhPho["Giải tám"]);

    // bien Dong Thap
    const giaiDB_DT = dataDongThap[" Giải ĐB"].split(' - ');
    const giaiNhat_DT = dataDongThap["Giải nhất"].split(' - ');
    const giaiNhi_DT = dataDongThap["Giải nhì"].split(' - ')
    const giaiBa_DT = dataDongThap["Giải ba"].split(' - ');
    const giaiTu_DT = dataDongThap["Giải tư"].split(' - ');
    const giaiNam_DT = dataDongThap["Giải năm"].split(' - ');
    const giaiSau_DT = dataDongThap["Giải sáu"].split(' - ');
    const giaiBay_DT = dataDongThap["Giải bảy"].split(' - ');
    const giaiTam_DT = dataDongThap["Giải tám"].split(' - ');
    // #endreion bien Dong Thap
  
    console.log(dataDongThap);
    console.log(dataDongThap[" Giải ĐB"]); 
    console.log(dataDongThap["Giải nhất"]);
    console.log(dataDongThap["Giải nhì"]);
    console.log(dataDongThap["Giải ba"]);
    console.log(dataDongThap["Giải tư"]);
    console.log(dataDongThap["Giải năm"]);
    console.log(dataDongThap["Giải sáu"]);
    console.log(dataDongThap["Giải bảy"]);
    console.log(dataDongThap["Giải bảy"]);
    console.log(dataDongThap["Giải tám"]);

    // bien Ca Mau
    const giaiDB_CM = dataCaMau[" Giải ĐB"].split(' - ');
    const giaiNhat_CM = dataCaMau["Giải nhất"].split(' - ');
    const giaiNhi_CM = dataCaMau["Giải nhì"].split(' - ')
    const giaiBa_CM = dataCaMau["Giải ba"].split(' - ');
    const giaiTu_CM = dataCaMau["Giải tư"].split(' - ');
    const giaiNam_CM = dataCaMau["Giải năm"].split(' - ');
    const giaiSau_CM = dataCaMau["Giải sáu"].split(' - ');
    const giaiBay_CM = dataCaMau["Giải bảy"].split(' - ');
    const giaiTam_CM = dataCaMau["Giải tám"].split(' - ');
    // #endreion bien Ca Mau
      
    console.log(dataCaMau);
    console.log(dataCaMau[" Giải ĐB"]); 
    console.log(dataCaMau["Giải nhất"]);
    console.log(dataCaMau["Giải nhì"]);
    console.log(dataCaMau["Giải ba"]);
    console.log(dataCaMau["Giải tư"]);
    console.log(dataCaMau["Giải năm"]);
    console.log(dataCaMau["Giải sáu"]);
    console.log(dataCaMau["Giải bảy"]);
    console.log(dataCaMau["Giải tám"]);


    return dataThanhPho,dataDongThap,dataCaMau

  } else if (tue == true) {
 
    // Tue
    // ben-tre: / www.minhngoc.net.vn/getkqxs/ben-tre.js
    // vungtau: /www.minhngoc.net.vn/getkqxs/vung-tau.js
    // bac-lieu: /www.minhngoc.net.vn/getkqxs/bac-lieu.js
    // Tue

    const resBenTre = await fetch('https://www.minhngoc.net.vn/getkqxs/ben-tre.js');
    const textBenTre = await resBenTre.text();
    const domBT = new jsdom.JSDOM(textBenTre);
    const docBenTre = domBT.window.document;

    const dataBenTre = [...docBenTre.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resVungTau = await fetch('https://www.minhngoc.net.vn/getkqxs/vung-tau.js');
    const textVT = await resVungTau.text();
    const domVT = new jsdom.JSDOM(textVT);
    const docVungTau = domVT.window.document;

    const dataVungTau = [...docVungTau.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});


    const resBacLieu = await fetch('https://www.minhngoc.net.vn/getkqxs/bac-lieu.js');
    const textBacLieu = await resBacLieu.text();
    const domBL = new jsdom.JSDOM(textBacLieu);
    const docBL = domBL.window.document;

    const dataBacLieu = [...docBL.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});
    
    // BT
    console.log(dataBenTre);
    console.log(dataBenTre["Giải ĐB"]); 
    console.log(dataBenTre["Giải nhất"]);
    console.log(dataBenTre["Giải nhì"]);
    console.log(dataBenTre["Giải ba"]);
    console.log(dataBenTre["Giải tư"]);
    console.log(dataBenTre["Giải năm"]);
    console.log(dataBenTre["Giải sáu"]);
    console.log(dataBenTre["Giải bảy"]);
    console.log(dataBenTre["Giải tám"]);

    // VT
    console.log(dataVungTau);
    console.log(dataVungTau["Giải ĐB"]); 
    console.log(dataVungTau["Giải nhất"]);
    console.log(dataVungTau["Giải nhì"]);
    console.log(dataVungTau["Giải ba"]);
    console.log(dataVungTau["Giải tư"]);
    console.log(dataVungTau["Giải năm"]);
    console.log(dataVungTau["Giải sáu"]);
    console.log(dataVungTau["Giải bảy"]);
    console.log(dataVungTau["Giải tám"]);
    // BL
    console.log(dataBacLieu);
    console.log(dataBacLieu["Giải ĐB"]); 
    console.log(dataBacLieu["Giải nhất"]);
    console.log(dataBacLieu["Giải nhì"]);
    console.log(dataBacLieu["Giải ba"]);
    console.log(dataBacLieu["Giải tư"]);
    console.log(dataBacLieu["Giải năm"]);
    console.log(dataBacLieu["Giải sáu"]);
    console.log(dataBacLieu["Giải bảy"]);
    console.log(dataBacLieu["Giải tám"]);

    return dataBenTre,dataVungTau,dataBacLieu;
  }
    else if (wed === true) {

    // Wed
    // dong-nai:/www.minhngoc.net.vn/getkqxs/dong-nai.js
    // can-tho: /www.minhngoc.net.vn/getkqxs/can-tho.js
    // soc-trang: /www.minhngoc.net.vn/getkqxs/soc-trang.js
    //Wed

    const resDongNai = await fetch('https://www.minhngoc.net.vn/getkqxs/dong-nai.js');
    const textDongNai = await resDongNai.text();
    const domDongNai = new jsdom.JSDOM(textDongNai);
    const docDongNai = domDongNai.window.document;

    const dataDongNai = [...docDongNai.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resCanTho = await fetch('https://www.minhngoc.net.vn/getkqxs/can-tho.js');
    const textCanTho = await resCanTho.text();
    const domCanTho = new jsdom.JSDOM(textCanTho);
    const docCanTho = domCanTho.window.document;

    const dataCanTho = [...docCanTho.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resSocTrang = await fetch('https://www.minhngoc.net.vn/getkqxs/soc-trang.js');
    const textSocTrang = await resSocTrang.text();
    const domSocTrang = new jsdom.JSDOM(textSocTrang);
    const docSocTrang = domSocTrang.window.document;

    const dataSocTrang = [...docSocTrang.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});
  
    console.log(dataDongNai);
    console.log(dataDongNai[" Giải ĐB"]); 
    console.log(dataDongNai["Giải nhất"]);
    console.log(dataDongNai["Giải nhì"]);
    console.log(dataDongNai["Giải ba"]);
    console.log(dataDongNai["Giải tư"]);
    console.log(dataDongNai["Giải năm"]);
    console.log(dataDongNai["Giải sáu"]);
    console.log(dataDongNai["Giải bảy"]);
    console.log(dataDongNai["Giải tám"]);
      
    console.log(dataCanTho);
    console.log(dataCanTho[" Giải ĐB"]); 
    console.log(dataCanTho["Giải nhất"]);
    console.log(dataCanTho["Giải nhì"]);
    console.log(dataCanTho["Giải ba"]);
    console.log(dataCanTho["Giải tư"]);
    console.log(dataCanTho["Giải năm"]);
    console.log(dataCanTho["Giải sáu"]);
    console.log(dataCanTho["Giải bảy"]);
    console.log(dataCanTho["Giải tám"]);
      
    console.log(dataSocTrang);
    console.log(dataSocTrang[" Giải ĐB"]); 
    console.log(dataSocTrang["Giải nhất"]);
    console.log(dataSocTrang["Giải nhì"]);
    console.log(dataSocTrang["Giải ba"]);
    console.log(dataSocTrang["Giải tư"]);
    console.log(dataSocTrang["Giải năm"]);
    console.log(dataSocTrang["Giải sáu"]);
    console.log(dataSocTrang["Giải bảy"]);
    console.log(dataSocTrang["Giải tám"]);


    return dataDongNai,dataCanTho,dataSocTrang
 
  } else if (thu === true) {

     //Thu
    // tay-ninh: /www.minhngoc.net.vn/getkqxs/tay-ninh.js
    // an-giang: /www.minhngoc.net.vn/getkqxs/an-giang.js
    // binh-thuan: /www.minhngoc.net.vn/getkqxs/binh-thuan.js
    //Thu

    const resTayNinh = await fetch('https://www.minhngoc.net.vn/getkqxs/tay-ninh.js');
    const textTayNinh = await resTayNinh.text();
    const domTayNinh = new jsdom.JSDOM(textTayNinh);
    const docTayNinh = domTayNinh.window.document;

    const dataTayNinh = [...docTayNinh.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resAnGiang = await fetch('https://www.minhngoc.net.vn/getkqxs/an-giang.js');
    const textAnGiang = await resAnGiang.text();
    const domAnGiang = new jsdom.JSDOM(textAnGiang);
    const docAnGiang = domAnGiang.window.document;

    const dataAnGiang = [...docAnGiang.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resBinhThuan = await fetch('https://www.minhngoc.net.vn/getkqxs/binh-thuan.js');
    const textBinhThuan = await resBinhThuan.text();
    const domBinhThuan = new jsdom.JSDOM(textBinhThuan);
    const docBinhThuan = domBinhThuan.window.document;

    const dataBinhThuan = [...docBinhThuan.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});
  
    console.log(dataTayNinh);
    console.log(dataTayNinh["Giải ĐB"]); 
    console.log(dataTayNinh["Giải nhất"]);
    console.log(dataTayNinh["Giải nhì"]);
    console.log(dataTayNinh["Giải ba"]);
    console.log(dataTayNinh["Giải tư"]);
    console.log(dataTayNinh["Giải năm"]);
    console.log(dataTayNinh["Giải sáu"]);
    console.log(dataTayNinh["Giải bảy"]);
    console.log(dataTayNinh["Giải tám"]);


    console.log(dataAnGiang);
    console.log(dataAnGiang["Giải ĐB"]); 
    console.log(dataAnGiang["Giải nhất"]);
    console.log(dataAnGiang["Giải nhì"]);
    console.log(dataAnGiang["Giải ba"]);
    console.log(dataAnGiang["Giải tư"]);
    console.log(dataAnGiang["Giải năm"]);
    console.log(dataAnGiang["Giải sáu"]);
    console.log(dataAnGiang["Giải bảy"]);
    console.log(dataAnGiang["Giải tám"]);

   
    console.log(dataBinhThuan);
    console.log(dataBinhThuan["Giải ĐB"]); 
    console.log(dataBinhThuan["Giải nhất"]);
    console.log(dataBinhThuan["Giải nhì"]);
    console.log(dataBinhThuan["Giải ba"]);
    console.log(dataBinhThuan["Giải tư"]);
    console.log(dataBinhThuan["Giải năm"]);
    console.log(dataBinhThuan["Giải sáu"]);
    console.log(dataBinhThuan["Giải bảy"]);
    console.log(dataBinhThuan["Giải tám"]);

   
   return dataTayNinh,dataAnGiang,dataBinhThuan;

  }else if (fri === true) {

       //Fri
    // vinh-long: /www.minhngoc.net.vn/getkqxs/vinh-long.js
    // binh-duong: /www.minhngoc.net.vn/getkqxs/binh-duong.js
    // tra-vinh: /www.minhngoc.net.vn/getkqxs/tra-vinh.js
    //Fri

    const resVinhLong = await fetch('https://www.minhngoc.net.vn/getkqxs/vinh-long.js');
    const textVinhLong = await resVinhLong.text();
    const domVinhLong = new jsdom.JSDOM(textVinhLong);
    const docVinhLong = domVinhLong.window.document;

    const dataVinhLong = [...docVinhLong.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resBinhDuong = await fetch('https://www.minhngoc.net.vn/getkqxs/binh-duong.js');
    const textBinhDuong = await resBinhDuong.text();
    const domBinhDuong = new jsdom.JSDOM(textBinhDuong);
    const docBinhDuong = domBinhDuong.window.document;

    const dataBinhDuong = [...docBinhDuong.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resTraVinh = await fetch('https://www.minhngoc.net.vn/getkqxs/tra-vinh.js');
    const textTraVinh = await resTraVinh.text();
    const domTraVinh = new jsdom.JSDOM(textTraVinh);
    const docTraVinh = domTraVinh.window.document;

    const dataTraVinh = [...docTraVinh.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') ||  tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});
  
    console.log(dataVinhLong);
    console.log(dataVinhLong["Giải ĐB"]); 
    console.log(dataVinhLong["Giải nhất"]);
    console.log(dataVinhLong["Giải nhì"]);
    console.log(dataVinhLong["Giải ba"]);
    console.log(dataVinhLong["Giải tư"]);
    console.log(dataVinhLong["Giải năm"]);
    console.log(dataVinhLong["Giải sáu"]);
    console.log(dataVinhLong["Giải bảy"]);
    console.log(dataVinhLong["Giải tám"]);

    console.log(dataBinhDuong);
    console.log(dataBinhDuong["Giải ĐB"]); 
    console.log(dataBinhDuong["Giải nhất"]);
    console.log(dataBinhDuong["Giải nhì"]);
    console.log(dataBinhDuong["Giải ba"]);
    console.log(dataBinhDuong["Giải tư"]);
    console.log(dataBinhDuong["Giải năm"]);
    console.log(dataBinhDuong["Giải sáu"]);
    console.log(dataBinhDuong["Giải bảy"]);
    console.log(dataBinhDuong["Giải tám"]);

    console.log(dataTraVinh);
    console.log(dataTraVinh["Giải ĐB"]); 
    console.log(dataTraVinh["Giải nhất"]);
    console.log(dataTraVinh["Giải nhì"]);
    console.log(dataTraVinh["Giải ba"]);
    console.log(dataTraVinh["Giải tư"]);
    console.log(dataTraVinh["Giải năm"]);
    console.log(dataTraVinh["Giải sáu"]);
    console.log(dataTraVinh["Giải bảy"]);
    console.log(dataTraVinh["Giải tám"]);;
        
    return dataVinhLong,dataBinhDuong,dataTraVinh;

  }else if (sat === true) {

    //Sat
    // tp-hcm : /www.minhngoc.net.vn/getkqxs/tp-hcm.js
    // l-an : /www.minhngoc.net.vn/getkqxs/long-an.js
    // binh-phuoc :/www.minhngoc.net.vn/getkqxs/binh-phuoc.js
    //Sat

    const resThanhPho = await fetch('https://www.minhngoc.net.vn/getkqxs/tp-hcm.js');
    const textThanhPho = await resThanhPho.text();
    const domThanhPho = new jsdom.JSDOM(textThanhPho);
    const docThanhPho = domThanhPho.window.document;

    const dataThanhPho = [...docThanhPho.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resLongAn = await fetch('https://www.minhngoc.net.vn/getkqxs/long-an.js');
    const textLongAn = await resLongAn.text();
    const domLongAn = new jsdom.JSDOM(textLongAn);
    const docLongAn = domLongAn.window.document;

    const dataLongAn = [...docLongAn.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});

    const resBinhPhuoc = await fetch('https://www.minhngoc.net.vn/getkqxs/binh-phuoc.js');
    const textBinhPhuoc = await resBinhPhuoc.text();
    const domBinhPhuoc = new jsdom.JSDOM(textBinhPhuoc);
    const docBinhPhuoc = domBinhPhuoc.window.document;

    const dataBinhPhuoc = [...docBinhPhuoc.querySelectorAll('tbody tr')].reduce((obj, tr) => {
      if(tr.querySelector('.giaidb') || tr.querySelector('.giai1') || 
        tr.querySelector('.giai2') || tr.querySelector('.giai3') ||
        tr.querySelector('.giai4') ||  tr.querySelector('.giai5') ||
        tr.querySelector('.giai6') ||  tr.querySelector('.giai7') || tr.querySelector('.giai8') ||
        tr.querySelector('.ngay') ) {
          const [key, value] = [...tr.querySelectorAll('td')].map(td => td.textContent.replace(/\t/g, ''));
          obj[key] = value;
        }
      return obj;
    }, {});
  
    console.log(dataThanhPho);
    console.log(dataThanhPho["Giải ĐB"]); 
    console.log(dataThanhPho["Giải nhất"]);
    console.log(dataThanhPho["Giải nhì"]);
    console.log(dataThanhPho["Giải ba"]);
    console.log(dataThanhPho["Giải tư"]);
    console.log(dataThanhPho["Giải năm"]);
    console.log(dataThanhPho["Giải sáu"]);
    console.log(dataThanhPho["Giải bảy"]);
    console.log(dataThanhPho["Giải tám"]);

    console.log(dataLongAn);
    console.log(dataLongAn["Giải ĐB"]); 
    console.log(dataLongAn["Giải nhất"]);
    console.log(dataLongAn["Giải nhì"]);
    console.log(dataLongAn["Giải ba"]);
    console.log(dataLongAn["Giải tư"]);
    console.log(dataLongAn["Giải năm"]);
    console.log(dataLongAn["Giải sáu"]);
    console.log(dataLongAn["Giải bảy"]);
    console.log(dataLongAn["Giải tám"]);

    console.log(dataBinhPhuoc);
    console.log(dataBinhPhuoc["Giải ĐB"]); 
    console.log(dataBinhPhuoc["Giải nhất"]);
    console.log(dataBinhPhuoc["Giải nhì"]);
    console.log(dataBinhPhuoc["Giải ba"]);
    console.log(dataBinhPhuoc["Giải tư"]);
    console.log(dataBinhPhuoc["Giải năm"]);
    console.log(dataBinhPhuoc["Giải sáu"]);
    console.log(dataBinhPhuoc["Giải bảy"]);
    console.log(dataBinhPhuoc["Giải tám"]);

    return dataThanhPho,dataLongAn,dataBinhPhuoc;

  }
  //#endregion 


  
}