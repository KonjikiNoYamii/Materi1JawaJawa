const manageData = {

    dataPengunjung_1 : [],

    dataPerpus_2 : [],

    add:function (key,value,data) {
        if (!data) {
            console.error('Masukan Data Nya kemana ?');
        }
        else if (data == "1") {
            this.dataPerpus_2.push({[key]: value});
        } else if (data == "2"){
            this.dataPengunjung_1.push({[key]: value});
        } else {
            console.error('Data nya ngk ada?');
        }
    },

    delete: function(){},
    infoData: function (data) {
         if (!data) {
            console.error('Masukan Data Nya kemana ?');
        } else if(data == "1") {
            return [[...this.dataPengunjung_1]];
        } else if (data == "2") {
            return [[...this.dataPerpus_2]];
        } else if (data == "all") {
            return [[...this.dataPengunjung_1],[...this.dataPerpus_2]];
        }
    }
}

manageData.add("Nama", "Bambang Pengunjung","1");
manageData.add("Alamat", "Bekasi","1");
manageData.add("Phone", "089502433722","1");

manageData.add("Nama", "Bambang perpus","2");
manageData.add("Alamat", "Bekasi","2");
manageData.add("Phone", "089502433722","2");

console.log(manageData.infoData('all'));