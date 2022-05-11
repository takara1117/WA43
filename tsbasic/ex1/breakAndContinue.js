"use strict";
exports.__esModule = true;
var numes = [];
var denomis = [];
for (var i = 0; i <= 4; i++) {
    numes[i] = Math.round(Math.random() * 10);
    denomis[i] = Math.round(Math.random() * 10);
}
for (var _i = 0, denomis_1 = denomis; _i < denomis_1.length; _i++) {
    var denomi = denomis_1[_i];
    console.log("\u25A0\u5206\u6BCD\u306E\u5024: ".concat(denomi));
    if (denomi == 0) {
        console.log("分母が０なので処理を中止します");
        break;
    }
    for (var _a = 0, numes_1 = numes; _a < numes_1.length; _a++) {
        var nume = numes_1[_a];
        console.log("--\u5206\u5B50\u306E\u5024\uFF1A ".concat(nume));
        if (nume == 0) {
            console.log("→文治が０なので次の分子にスキップします");
            continue;
        }
        var ans = nume / denomi;
        console.log("\u2192\u5206\u6570\u5024\uFF1A".concat(ans));
    }
}
