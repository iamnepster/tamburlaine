import { Contract } from "../types/contracts";
import * as fs from 'fs';

class Tamburlaine {
    compileToJSON(contract: Contract, path?: string): string {
        const contractJSON = JSON.stringify(contract, null, 2);
        if (path) {
            fs.writeFile(
                path,
                contractJSON,
                err => console.error(err)
            );
        }
        return contractJSON;
    }
    compileToMarlowe(contract: Contract, path?: string): string {
        // TODO: generate Marlowe from JSON
        return "noop";
    }
}