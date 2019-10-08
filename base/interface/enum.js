var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 3] = "mon";
    Days[Days["tue"] = 4] = "tue";
    Days[Days["wed"] = 5] = "wed";
    Days[Days["thu"] = 6] = "thu";
    Days[Days["fri"] = 7] = "fri";
    Days[Days["sat"] = "S"] = "sat";
})(Days || (Days = {}));
console.log(Days['sun'] === 0);
console.log(Days['tue'] === 4);
console.log(Days['sat'] === 8);
