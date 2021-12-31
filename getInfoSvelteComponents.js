import {
    writeFileSync
} from "fs";
import glob from "glob";
import {
    getInfo
} from "@el3um4s/svelte-get-component-info";

const basePath = "src/lib/components/";

const listFile = glob.sync(`${basePath}**/*.svelte`);

let infoFiles = {};
listFile.forEach((file) => {
    const prop = getInfo(file);
    const fileName = file.substring(basePath.length);
    infoFiles[fileName] = prop;
});

let data = JSON.stringify(infoFiles);
writeFileSync("./src/routes/infoSvelteComponents.json", data);