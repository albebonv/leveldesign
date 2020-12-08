const chalk    = require('chalk');

const addInfo = function (data,label,text,options) {
    const defaults = {
        labelWidth : 12,
        textWidth  : 37,
        labelColor : '#666',
        textColor  : '#999',
        separator  : chalk.hex('#ff8c00')(' : '),
        underline  : false
    }
    let settings = Object.assign(defaults, options);
    if (label === '') { settings.separator = '   '; }
    if (settings.underline) { text = chalk.underline(text); }
    label = chalk.bold.hex(settings.labelColor)(label.padStart(settings.labelWidth,' ')+settings.separator);
    text  = chalk.hex(settings.textColor)(text.padEnd(settings.textWidth));
    data.push(label+text);
}

const generateBar = function (value=.5,size=30,foreground='█',background='░',output='') {
    output = output.padStart(size*value,foreground);
    return output.padEnd(size,background);
}

module.exports = {
    addInfo,
    generateBar
}