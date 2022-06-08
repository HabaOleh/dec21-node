// const fs = require("fs");
// const path = require("path");
//
// const swipe = (read, gender, write)=> {
//     fs.readdir(path.join(__dirname, read), (err, files) => {
//         if (err) return console.log(err);
//
//         for (const file of files) {
//             const readPath = path.join(__dirname, read, file);
//
//             fs.readFile(readPath, (err, data) => {
//                 if (err) return console.log(err);
//
//                 const user = JSON.parse(data.toString());
//
//                 if (user.gender === gender) {
//                     fs.rename(readPath, path.join(__dirname, write, file), err => {
//                         if (err) return console.log(err);
//                     });
//                 }
//             });
//         }
//     });
// }
//
// swipe("boys", "female", "girls");
// swipe("girls", "male", "boys");


const fs = require("fs/promises");
const path = require("path");

const swipe = async (read, gender, write) => {
    try {
        const files = await fs.readdir(path.join(__dirname, read));
        for (const file of files) {
            const readPath = path.join(__dirname, read, file);
            const data = await fs.readFile(readPath);
            const user = JSON.parse(data.toString());
            if (user.gender === gender) {
                await fs.rename(readPath, path.join(__dirname, write, file));
            }
        }
    }catch (e){
        console.log(e);
    }
}
swipe("boys", "female", "girls");
swipe("girls", "male", "boys");
