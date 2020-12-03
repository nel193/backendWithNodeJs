// const {Transform} = require ("stream");
// const transformStream = new Transform ({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase())
//         callback();
//     }
// })

// process.stdin.pipe(transformStream).pipe(process.stdout)

const {Transform} = require ("stream");
const transformStream = new Transform ({
    transform(chunk, encoding, callback){
        let string = chunk.toString();
        string.split(" ").map((word)=>{
            this.push(word.charAt(0).toUpperCase() + word.slice(1))
        });
        console.log(string.split(" "))
        
        callback();
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout)