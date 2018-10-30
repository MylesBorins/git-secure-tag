'use strict';

const path = require('path');

let GIT = process.env.GIT_SSH_COMMAND || process.env.GIT_SSH || 'git';

if (process.env.GIT_EXEC_PATH) {
  GIT = path.join(process.env.GIT_EXEC_PATH, 'git');
}

exports.GIT = GIT;
exports.common = require('./git-secure-tag/common');
exports.Batch = require('./git-secure-tag/batch');
exports.Hash = require('./git-secure-tag/hash');
exports.LegacyHash = require('./git-secure-tag/legacy-hash');
exports.API = require('./git-secure-tag/api');
