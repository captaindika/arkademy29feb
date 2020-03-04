// ////////NOMOR 5/////////////////
// //referensi : https://www.codepolitan.com/mencetak-beragam-pola-dengan-konsep-perulangan-1

// let s =''
// function segitiga(input){
//     for(let i=3;i<=input;i++){
//         for(let j=input-1;j>=i;j--){
//             s += ' ';
//         }
//         for(let k =i;k>=1;k--){
//             s += '*';
//         }s += '\n';
//     }
//     console.log(s);
// }
// segitiga(5);
// /////////////////////////////////////////
// //NOMOR 1
// function biodata(name,age){
//     this.name = name,
//     this.age = age,
//     this.address = 'Jl Brigdjen Darsono gang sijombang 6 no 69 kab cirebon',
//     this.hobbies = ['Olahraga','Ngoprek'],
//     this.isMarried = false,
//     this.list_school = [{name:"Tel-U",year_in:2012,year_out:2017}],
//     this.skills = [{name:'Javascript',level:'Beginner'},{name:'Arduino',level:'advance'}],
//     this.interest_in_coding = true;
// }

// let aku = new biodata('Dika',25);
// let jeson = JSON.stringify(aku);
// console.log(jeson);
// ///////////////////////////////////////////////
// //nomor 3
//jika bilangan genap = n/2 , ganjil = 3n+1 , n =1 stop
// function deret(bilangan){
//     let array = [];
//     if(bilangan < 0){
//         console.log('Bilangan harus positif')
//     }else if(isNaN(bilangan)){
//         console.log('Harus berbentuk number/integer')
//     }else{
//         while(bilangan !=1){
//             array.push(bilangan);
//             if(bilangan % 2 ==0){
//                 bilangan = bilangan/2;
//             }else{
//                 bilangan = 3*bilangan+1
//             }
//         }
//         array.push(1);
//         array.sort(function (a,b){
//             return a-b;
//         });
//         console.log(array);
//         console.log('count: ',array.length);
        
//     }
// }

// deret(13);
// ///////////////////////////////////////////////////////
// //NOMOR 4 BILANGAN PRIMA 1-30 SEPANJANG INPUTAN N
// let array = [];
// let prima;
// let sum;

// function test_prime(n){
//   if (n===1){
//     return false;
//   }
//   else if(n === 2){
//     array.push(n);
//   }else{
//     for(var x = 2; x < n; x++){
//       if(n % x === 0){
//         return false;
//       }
//     }
//     array.push(n);  
//   }
// }

// function deret(input){
//     while(array.length < input){
//         for(let i=1;i<=input;i++){
//             prima = Math.floor(Math.random()*(30-1+1)+1); // hasil dari googling untuk mendapatkan angka random
//             test_prime(prima);              
//         }
//     }
//      console.log(array);
//      console.log(array.reduce((a, b) => a + b, 0)) // si array dipecah jadi satu satu baru dijumlahkan
// }

//  deret(6);
// //////////////////////////////////////////////////////////////
// //NOMOR 2
// //USERNAME : huruf kecil dan 2 angka dengan panjang total 5-8 karakter
// //Username tidak boleh terdapat huruf besar/karakter special
// //Angka harus berada di awal dan akhir username serta memiliki nilai yang sama
// //___________________________________________________________________________
// //PASSWORD: huruf kecil
// //angka dan 1 simbol ‘-’ dengan ketentuan banyaknya huruf dan angka harus sama
// //serta panjang total 7-11 karakter
// const regexUser = /^([0-9])([a-z]{3,6})\1$/g;
// const regexHuruf = /[a-z]/g; // untuk mengecek banyak huruf
// const regexPass = /^[0-9a-z\-]+$/gi; // set karakter apa saja yang bisa dipakai
// const regexAngka = /[0-9]/g; // untuk mengecek banyak angka
// const regexDash = /\-/g; // untuk mengecek banyak dash
// let userBener = '1aKu1';
// let userSalah = '1aku2';

// let passBener = '1a2b3c-';
// let passSalah = '12-3-abc';



// function userValid(user){
//     if(regexUser.test(user)){
//         console.log('true')
//     }else{console.log('false')}
// }

// function passValid(pass){
//     let totalAngka, totalHuruf,totalDash;
//     if(pass.length < 7 || pass.length >11){
//         console.log('password terdiri 7-11 karakter');
//     }else{
        
//             totalAngka = pass.match(regexAngka).length; //mendapatkan berapa digit angka
//             totalHuruf = pass.match(regexHuruf).length; // mendapatkan berapa digit huruf
//             totalDash = pass.match(regexDash).length; // mendapatkan berapa digit dash
//             if(totalAngka === totalHuruf && regexPass.test(pass) && totalDash==1){
//                 console.log('true');
//             }else{
//                 console.log('false');
//             }
            
//     }
// }

// userValid(userBener);
// passValid(passBener);
// userValid(userSalah);
// passValid(passSalah);






