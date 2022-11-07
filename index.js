//var XLSX = require("xlsx");
 //var workbook = XLSX.readFile("data/customers.xlsx");
//    let worksheet=workbook.Sheets[workbook.SheetNames[0]];
//   for (let index = 2; index <7; index++) {
//    const id = worksheet['A${index}'].v;
//    const name = worksheet['B${index}'].v;
//    console.log({
//      id: id, name: name
//    })
//   }
//console.log(workbook.Sheets['Feuil1'])
const reader = require('xlsx')
const file = reader.readFile('data/customers.xlsx')

let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
   
}
console.log(data)


