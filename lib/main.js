"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myInput = core.getInput('myInput');
            const job = core.getInput('job');
            core.debug(`Hello ${myInput}`);
            core.debug(`job: ${job}`);
            gh();
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
function gh() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new github.GitHub(process.env.GITHUB_TOKEN);
        const commit = yield client.repos.getCommitRefSha({
            owner: '8398a7',
            repo: 'action-misc',
            ref: 'a3b856494aeb9bb490c0599f976ac9c6f96f8b6a',
        });
        core.debug(JSON.stringify(commit.data));
    });
}
run();
