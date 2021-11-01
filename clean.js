import {
    existsSync,
    lstatSync,
    readdirSync,
    unlinkSync,
    rmdirSync,
    mkdirSync
} from 'fs';

function deleteFolderRecursive(path) {
    if (existsSync(path) && lstatSync(path).isDirectory()) {
        readdirSync(path).forEach(function (file) {
            var curPath = path + "/" + file;

            if (lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                unlinkSync(curPath);
            }
        });

        console.log(`Deleting directory "${path}"...`);
        rmdirSync(path);
    }
};

function createFolder(path) {
    if (!existsSync(path)) {
        console.log(`Creating directory "${path}"...`);
        mkdirSync(path);
    }
}

console.log("Cleaning old files...");

const paths = ["./src/__tests__/e2e", "./src/__tests__/unit", "./src/lib/components", "./src/lib/functions"];

paths.forEach(path => {
    deleteFolderRecursive(path);
    createFolder(path);
});

console.log("Successfully cleaned!");