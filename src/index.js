const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr=[];
    let exprWord="";
    for(let i = 0;i<expr.length;i+=10){
        exprArr.push(expr.slice(i,i+10));
    }
    for(let i =0;i<exprArr.length;i++){
        let s="";
        for(let j=0;j<10;j+=2){
            if(exprArr[i][j]==='0' && exprArr[i][j+1]==='0') continue;
            else if(exprArr[i][j]==='1' && exprArr[i][j+1]==='0') s+=".";
            else if(exprArr[i][j]==='1' && exprArr[i][j+1]==='1') s+="-";
        }
        if(s){
            exprWord+=MORSE_TABLE[s];
        } else exprWord+=" ";
        s="";
    }
    return exprWord;
}

module.exports = {
    decode
}