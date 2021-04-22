

class Processor {

    static Process(data){
        const rowsBrek = data.split("\r\n")
        const rows = [];

        rowsBrek.forEach(row => {
            const arr = row.split(",");
            rows.push(arr)
        });

        return rows;
    }
}

module.exports = Processor