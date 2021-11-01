import {
    existsSync,
    mkdirSync,
    rmSync
} from 'fs';

function deleteFolderRecursive(path) {
    console.log(`Deleting directory "${path}"...`);
    if (existsSync(path)) {
        rmSync(path, {
            force: true,
            recursive: true
        });
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