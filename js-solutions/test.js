const fs = require('fs');
const { exec } = require('child_process');

const PE_answers = {
    'PE-0001': 233168,
    'PE-0002': 4613732,
    'PE-0003': 6857,
    'PE-0004': 906609,
    'PE-0005': 232792560,
    'PE-0006': 25164150,
    'PE-0007': 104743,
    'PE-0008': 23514624000,
    'PE-0009': 31875000,
    'PE-0010': 142913828922,
    'PE-0011': 70600674,
    'PE-0012': 76576500,
    'PE-0013': 5537376230
};

// Get a list of all the PE problems
fs.readdir("./", async function (err, files) {
    if (err) {
        console.log("Couldnt open test directory");
    }

    else {
        files = files.filter(x => x.includes('PE'));

        for (const PE of files) {
            const subprocess = exec(`node ${PE}/index.js`, function (_, stdout) {
                if (stdout) {
                    const answer = PE_answers[PE];
                    const result = Number(stdout.split('\nexecution took ')[0]);

                    if (result === answer) {
                        console.log(`✔️   ${PE}`)
                    } else {
                        console.log(`❌  ${PE}`)
                    }
                }
            });

            await new Promise((resolve) => {
                subprocess.on('close', resolve)
            })
        }
    }
});