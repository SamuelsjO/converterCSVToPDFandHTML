const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")


const leitor = new Reader();
const escritor = new Writer();

async function main(){

    const dados = await leitor.Read("./users.csv")
    const dataProcessor = Processor.Process(dados)

    const usuarios = new Table(dataProcessor);

    const html = await HtmlParser.Parse(usuarios)

    escritor.write(Date.now() + ".html",html)
    PDFWriter.writePDF(Date.now() + ".PDF", html)
    
}

main();