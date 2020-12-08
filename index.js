#!/usr/bin/env node

"use strict";

const boxen    = require('boxen');
const chalk    = require('chalk');
const clear    = require('clear');
const figlet   = require('figlet');
const utility  = require('./utility.js');

clear();
const accentColor = '#ff8c00';
let text = figlet.textSync('leveldesign');

const data = [];
utility.addInfo(data,'Name',       'Alberto Bonvicin');
utility.addInfo(data,'',           'Web designer');
utility.addInfo(data,'Web',        'https://www.leveldesign.it',{underline:true});
utility.addInfo(data,'Mail',       'alberto@leveldesign.it',{underline:true});
utility.addInfo(data,'',           '');
utility.addInfo(data,'',           'Skills');
utility.addInfo(data,'HTML',       utility.generateBar(1,30) ,{textColor:accentColor});
utility.addInfo(data,'CSS',        utility.generateBar(1,30) ,{textColor:accentColor});
utility.addInfo(data,'JavaScript', utility.generateBar(.7,30),{textColor:accentColor});
utility.addInfo(data,'PHP',        utility.generateBar(.6,30),{textColor:accentColor});
utility.addInfo(data,'UI/UX',      utility.generateBar(.9,30),{textColor:accentColor});

text = text+"\n\n"+data.join("\n");

const card = boxen(text,{
                        margin: 1,
                        float: 'left',
                        padding: {top:1,right:4,bottom:2,left:4},
                        borderStyle: "double",
                        borderColor: accentColor
                    });

console.log(card);