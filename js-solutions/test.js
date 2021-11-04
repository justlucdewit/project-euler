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
    'PE-0013': 5537376230,
    'PE-0014': 837799,
    'PE-0015': 137846528820,
    'PE-0016': 1366,
    'PE-0017': 21124,
    'PE-0018': 1074,
    'PE-0019': 171,
    'PE-0020': 648
};

const timeColor = (time) => {
    return time >= 1 ?
        `\x1b[31m${time}\x1b[0m` :
        `\x1b[32m${time}\x1b[0m`;
}

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
                    const time_taken = Number(stdout.split('\nexecution took ')[1].split('').filter(x => /[0-9.]/g.test(x)).join(''));

                    if (result === answer) {
                        console.log(`🟢 ${PE} took ${timeColor(time_taken)} sec`)
                    } else {
                        console.log(`🔴 ${PE} took ${timeColor(time_taken)} sec`)
                    }
                }
            });

            await new Promise((resolve) => {
                subprocess.on('close', resolve);
            });
        }
    }
});