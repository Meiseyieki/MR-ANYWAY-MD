const _0x11790b=_0x4e86;(function(_0x215c9d,_0x4dfbec){const _0x1c81fc=_0x4e86,_0x17383f=_0x215c9d();while(!![]){try{const _0x55e0bd=-parseInt(_0x1c81fc(0x1c0))/0x1+-parseInt(_0x1c81fc(0x1e5))/0x2*(parseInt(_0x1c81fc(0x146))/0x3)+parseInt(_0x1c81fc(0x1e6))/0x4+parseInt(_0x1c81fc(0x1e8))/0x5*(parseInt(_0x1c81fc(0x163))/0x6)+parseInt(_0x1c81fc(0x1c6))/0x7+-parseInt(_0x1c81fc(0x148))/0x8*(-parseInt(_0x1c81fc(0x1e1))/0x9)+-parseInt(_0x1c81fc(0x1be))/0xa;if(_0x55e0bd===_0x4dfbec)break;else _0x17383f['push'](_0x17383f['shift']());}catch(_0x3d6675){_0x17383f['push'](_0x17383f['shift']());}}}(_0x18a7,0xd4c5d));const {zokou}=require(_0x11790b(0x187)),{Sticker,StickerTypes}=require(_0x11790b(0x1ab)),{ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid}=require('../bdd/antilien'),{atbajouterOuMettreAJourJid,atbverifierEtatJid}=require('../bdd/antibot'),{search,download}=require('aptoide-scraper'),fs=require(_0x11790b(0x1c2)),conf=require(_0x11790b(0x158)),{default:axios}=require(_0x11790b(0x1e2));zokou({'nomCom':'tagall','categorie':_0x11790b(0x165),'reaction':'📣'},async(_0x175b3d,_0xaa810b,_0x22ba87)=>{const _0x1b5c87=_0x11790b,{ms:_0x469ae7,repondre:_0x1894c0,arg:_0x22e44a,verifGroupe:_0x503aab,nomGroupe:_0x2d3c45,infosGroupe:_0x2748ec,nomAuteurMessage:_0x30264b,verifAdmin:_0x536c35,superUser:_0x544e84}=_0x22ba87;if(!_0x503aab){_0x1894c0(_0x1b5c87(0x1d6));return;}!_0x22e44a||_0x22e44a==='\x20'?mess=_0x1b5c87(0x1d7):mess=_0x22e44a[_0x1b5c87(0x1c3)]('\x20');;let _0x5671bc=_0x503aab?await _0x2748ec[_0x1b5c87(0x1a9)]:'';var _0x36a01e='';_0x36a01e+='========================\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20🗡️\x20*MR ANYWAY MD*\x20🗡️\x0a========================\x0a\x0a👥\x20Group\x20:\x20'+_0x2d3c45+_0x1b5c87(0x197)+_0x30264b+'*\x20👋\x20\x0a📜\x20Message\x20:\x20*'+mess+'*\x20📝\x0a========================\x0a\x0a\x0a\x0a\x0a';let _0x56665e=['🦴','👀','😮‍💨','❌','✔️','😇','⚙️','🔧','🎊','😡','🙏🏿','⛔️','$','😟','🥵','🐅'],_0x3d2e48=Math[_0x1b5c87(0x16e)](Math[_0x1b5c87(0x1a6)]()*(_0x56665e[_0x1b5c87(0x1d9)]-0x1));for(const _0x3b5678 of _0x5671bc){_0x36a01e+=_0x56665e[_0x3d2e48]+'\x20\x20\x20\x20\x20\x20@'+_0x3b5678['id'][_0x1b5c87(0x1d0)]('@')[0x0]+'\x0a';}_0x536c35||_0x544e84?_0xaa810b['sendMessage'](_0x175b3d,{'text':_0x36a01e,'mentions':_0x5671bc[_0x1b5c87(0x182)](_0x3a3a23=>_0x3a3a23['id'])},{'quoted':_0x469ae7}):_0x1894c0(_0x1b5c87(0x1ec));}),zokou({'nomCom':_0x11790b(0x13b),'categorie':_0x11790b(0x165),'reaction':'🙋'},async(_0x4a997d,_0x2db176,_0x261c03)=>{const _0x34369b=_0x11790b,{repondre:_0x723fa9,nomGroupe:_0x521b88,nomAuteurMessage:_0x457850,verifGroupe:_0xc71f8b}=_0x261c03;if(!_0xc71f8b){_0x723fa9(_0x34369b(0x12c));return;};var _0x3ead9f=await _0x2db176['groupInviteCode'](_0x4a997d),_0x2b8954='https://chat.whatsapp.com/'+_0x3ead9f;let _0x524d4a='hello\x20'+_0x457850+_0x34369b(0x1b3)+_0x521b88+_0x34369b(0x179)+_0x2b8954;_0x723fa9(_0x524d4a);}),zokou({'nomCom':_0x11790b(0x136),'categorie':_0x11790b(0x165),'reaction':'👨🏿‍💼'},async(_0x3e1361,_0x231d42,_0x27dadb)=>{const _0x403365=_0x11790b;let {repondre:_0x2c69d1,msgRepondu:_0x53aedc,infosGroupe:_0x309093,auteurMsgRepondu:_0x112069,verifGroupe:_0x5618d0,auteurMessage:_0x1bd72e,superUser:_0x448e62,idBot:_0x186b7e}=_0x27dadb,_0x1c56b3=_0x5618d0?await _0x309093['participants']:'';if(!_0x5618d0)return _0x2c69d1(_0x403365(0x1a0));const _0x64bd0c=_0x5a156e=>{for(const _0x51cdfc of _0x1c56b3){if(_0x51cdfc['id']!==_0x5a156e)continue;else return!![];}},_0x284920=_0x33a6d0=>{const _0x3bede5=_0x403365;let _0x3b0883=[];for(m of _0x33a6d0){if(m[_0x3bede5(0x168)]==null)continue;_0x3b0883[_0x3bede5(0x1da)](m['id']);}return _0x3b0883;},_0x515503=_0x5618d0?_0x284920(_0x1c56b3):'';let _0x3e2a89=_0x5618d0?_0x515503['includes'](_0x112069):![],_0x1f4a14=_0x64bd0c(_0x112069),_0x4556c7=_0x5618d0?_0x515503[_0x403365(0x1ba)](_0x1bd72e):![];zkad=_0x5618d0?_0x515503[_0x403365(0x1ba)](_0x186b7e):![];try{if(_0x4556c7||_0x448e62){if(_0x53aedc){if(zkad){if(_0x1f4a14){if(_0x3e2a89==![]){var _0x55c605=_0x403365(0x183)+_0x112069[_0x403365(0x1d0)]('@')[0x0]+_0x403365(0x128);await _0x231d42[_0x403365(0x138)](_0x3e1361,[_0x112069],'promote'),_0x231d42['sendMessage'](_0x3e1361,{'text':_0x55c605,'mentions':[_0x112069]});}else return _0x2c69d1(_0x403365(0x1a5));}else return _0x2c69d1(_0x403365(0x166));}else return _0x2c69d1(_0x403365(0x14f));}else _0x2c69d1(_0x403365(0x1a8));}else return _0x2c69d1('Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.');}catch(_0x28f6f){_0x2c69d1('oups\x20'+_0x28f6f);}}),zokou({'nomCom':_0x11790b(0x1cf),'categorie':_0x11790b(0x165),'reaction':_0x11790b(0x154)},async(_0x2f8428,_0x3f9e6e,_0x257e92)=>{const _0xbd3001=_0x11790b;let {repondre:_0x24d149,msgRepondu:_0x42b650,infosGroupe:_0x1297d5,auteurMsgRepondu:_0x8145f9,verifGroupe:_0xad397e,auteurMessage:_0x4cbaac,superUser:_0x5dbdd6,idBot:_0x733817}=_0x257e92,_0x3d9ddb=_0xad397e?await _0x1297d5[_0xbd3001(0x1a9)]:'';if(!_0xad397e)return _0x24d149(_0xbd3001(0x1a0));const _0x2b7fa9=_0x2e2c6a=>{for(const _0xd60f95 of _0x3d9ddb){if(_0xd60f95['id']!==_0x2e2c6a)continue;else return!![];}},_0x3e24c6=_0xad8c04=>{const _0x25699d=_0xbd3001;let _0x111506=[];for(m of _0xad8c04){if(m[_0x25699d(0x168)]==null)continue;_0x111506['push'](m['id']);}return _0x111506;},_0x2edec2=_0xad397e?_0x3e24c6(_0x3d9ddb):'';let _0xa0c798=_0xad397e?_0x2edec2['includes'](_0x8145f9):![],_0x2527f0=_0x2b7fa9(_0x8145f9),_0xdca80a=_0xad397e?_0x2edec2[_0xbd3001(0x1ba)](_0x4cbaac):![];zkad=_0xad397e?_0x2edec2[_0xbd3001(0x1ba)](_0x733817):![];try{if(_0xdca80a||_0x5dbdd6){if(_0x42b650){if(zkad){if(_0x2527f0){if(_0xa0c798==![])_0x24d149(_0xbd3001(0x1bf));else{var _0x3c7869='@'+_0x8145f9[_0xbd3001(0x1d0)]('@')[0x0]+_0xbd3001(0x15a);await _0x3f9e6e[_0xbd3001(0x138)](_0x2f8428,[_0x8145f9],'demote'),_0x3f9e6e[_0xbd3001(0x1cd)](_0x2f8428,{'text':_0x3c7869,'mentions':[_0x8145f9]});}}else return _0x24d149(_0xbd3001(0x166));}else return _0x24d149(_0xbd3001(0x153));}else _0x24d149('please\x20tag\x20the\x20member\x20to\x20be\x20removed');}else return _0x24d149('Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.');}catch(_0x13c666){_0x24d149(_0xbd3001(0x1a7)+_0x13c666);}}),zokou({'nomCom':_0x11790b(0x1e7),'categorie':_0x11790b(0x165),'reaction':_0x11790b(0x154)},async(_0x3ecc2c,_0x5ed918,_0x367b9b)=>{const _0x2851f3=_0x11790b;let {repondre:_0x20436a,msgRepondu:_0x4f0d1a,infosGroupe:_0x52aaa7,auteurMsgRepondu:_0x8bc987,verifGroupe:_0x8c28c8,nomAuteurMessage:_0x5cdb5a,auteurMessage:_0x5f3095,superUser:_0x4e6cf1,idBot:_0x350c24}=_0x367b9b,_0x3bab25=_0x8c28c8?await _0x52aaa7['participants']:'';if(!_0x8c28c8)return _0x20436a(_0x2851f3(0x1c8));const _0x1e2b83=_0x4d307b=>{for(const _0x43cddc of _0x3bab25){if(_0x43cddc['id']!==_0x4d307b)continue;else return!![];}},_0x139fa0=_0x45d6ce=>{const _0x2a8808=_0x2851f3;let _0x321db3=[];for(m of _0x45d6ce){if(m['admin']==null)continue;_0x321db3[_0x2a8808(0x1da)](m['id']);}return _0x321db3;},_0x14f8e6=_0x8c28c8?_0x139fa0(_0x3bab25):'';let _0x2bafe9=_0x8c28c8?_0x14f8e6['includes'](_0x8bc987):![],_0x451383=_0x1e2b83(_0x8bc987),_0xe952b8=_0x8c28c8?_0x14f8e6[_0x2851f3(0x1ba)](_0x5f3095):![];zkad=_0x8c28c8?_0x14f8e6[_0x2851f3(0x1ba)](_0x350c24):![];try{if(_0xe952b8||_0x4e6cf1){if(_0x4f0d1a){if(zkad){if(_0x451383){if(_0x2bafe9==![]){const _0x3c4065=_0x2851f3(0x1b2);var _0x49d796=new Sticker(_0x3c4065,{'pack':_0x2851f3(0x177),'author':_0x5cdb5a,'type':StickerTypes[_0x2851f3(0x142)],'categories':['🤩','🎉'],'id':'12345','quality':0x32,'background':_0x2851f3(0x151)});await _0x49d796[_0x2851f3(0x1db)]('st.webp');var _0x2e4bf9='@'+_0x8bc987[_0x2851f3(0x1d0)]('@')[0x0]+'\x20was\x20removed\x20from\x20the\x20group.\x0a';await _0x5ed918[_0x2851f3(0x138)](_0x3ecc2c,[_0x8bc987],'remove'),_0x5ed918[_0x2851f3(0x1cd)](_0x3ecc2c,{'text':_0x2e4bf9,'mentions':[_0x8bc987]});}else _0x20436a(_0x2851f3(0x1e4));}else return _0x20436a(_0x2851f3(0x166));}else return _0x20436a(_0x2851f3(0x14f));}else _0x20436a(_0x2851f3(0x135));}else return _0x20436a(_0x2851f3(0x199));}catch(_0xae65ca){_0x20436a(_0x2851f3(0x1a7)+_0xae65ca);}}),zokou({'nomCom':_0x11790b(0x1d8),'categorie':_0x11790b(0x165),'reaction':'👨🏿‍💼'},async(_0x3f82bd,_0x40112e,_0x47af95)=>{const _0x14afb9=_0x11790b;let {repondre:_0x2d6ee0,msgRepondu:_0x11bdf5,infosGroupe:_0x174da6,auteurMsgRepondu:_0x28b432,verifGroupe:_0xd7977c,nomAuteurMessage:_0x127c79,auteurMessage:_0x3478b4,superUser:_0x1486af,idBot:_0x2519e7}=_0x47af95,_0x34a622=_0xd7977c?await _0x174da6[_0x14afb9(0x1a9)]:'';if(!_0xd7977c)return _0x2d6ee0('for\x20groups\x20only');const _0x41c094=await message[_0x14afb9(0x160)](message[_0x14afb9(0x13f)]),_0x3eb641=await isAdmin(_0x41c094,message[_0x14afb9(0x19a)][_0x14afb9(0x1c5)][_0x14afb9(0x13f)]);if(!_0x3eb641)return await message[_0x14afb9(0x178)](_0x14afb9(0x12f));match=match||message[_0x14afb9(0x1dd)][_0x14afb9(0x13f)];if(!match)return await message[_0x14afb9(0x178)](_0x14afb9(0x13a));match=jidToNum(match);const _0x3bbf44=await message[_0x14afb9(0x190)](match);if(_0x3bbf44==_0x14afb9(0x19b))return await message[_0x14afb9(0x178)](_0x14afb9(0x141));else{if(_0x3bbf44&&_0x3bbf44!=_0x14afb9(0x13d))return await message['send'](_0x3bbf44,{'quoted':message[_0x14afb9(0x15c)]});}}),zokou({'nomCom':_0x11790b(0x1e0),'categorie':_0x11790b(0x165),'reaction':'🧹'},async(_0x1ff779,_0x41bdb1,_0x1017ec)=>{const _0x1d0992=_0x11790b,{ms:_0x30cc71,repondre:_0x22d099,verifGroupe:_0x3ac232,auteurMsgRepondu:_0x520d8c,idBot:_0x7519e6,msgRepondu:_0x167857,verifAdmin:_0x262fd2,superUser:_0x2fa8e6}=_0x1017ec;if(!_0x167857){_0x22d099(_0x1d0992(0x1e3));return;}if(_0x2fa8e6&&_0x520d8c==_0x7519e6){if(_0x520d8c==_0x7519e6){const _0x46ce35={'remoteJid':_0x1ff779,'fromMe':!![],'id':_0x30cc71[_0x1d0992(0x125)][_0x1d0992(0x14c)][_0x1d0992(0x1d2)][_0x1d0992(0x129)]};await _0x41bdb1[_0x1d0992(0x1cd)](_0x1ff779,{'delete':_0x46ce35});return;}}if(_0x3ac232){if(_0x262fd2||_0x2fa8e6)try{const _0x48270a={'remoteJid':_0x1ff779,'id':_0x30cc71[_0x1d0992(0x125)][_0x1d0992(0x14c)][_0x1d0992(0x1d2)][_0x1d0992(0x129)],'fromMe':![],'participant':_0x30cc71[_0x1d0992(0x125)]['extendedTextMessage']['contextInfo'][_0x1d0992(0x1b7)]};await _0x41bdb1[_0x1d0992(0x1cd)](_0x1ff779,{'delete':_0x48270a});return;}catch(_0x1ba117){_0x22d099('I\x20need\x20admin\x20rights.');}else _0x22d099(_0x1d0992(0x1a3));}}),zokou({'nomCom':_0x11790b(0x16c),'categorie':'Group'},async(_0x5f773a,_0x5cf4cf,_0x39f7e9)=>{const _0x34d943=_0x11790b,{ms:_0x3e4640,repondre:_0x51fcf1,verifGroupe:_0x17146d}=_0x39f7e9;if(!_0x17146d){_0x51fcf1(_0x34d943(0x1dc));return;};try{ppgroup=await _0x5cf4cf[_0x34d943(0x164)](_0x5f773a,_0x34d943(0x19c));}catch{ppgroup=conf['IMAGE_MENU'];}const _0x53d963=await _0x5cf4cf[_0x34d943(0x160)](_0x5f773a);let _0xeb5604={'image':{'url':ppgroup},'caption':_0x34d943(0x189)+_0x53d963[_0x34d943(0x1ed)]+_0x34d943(0x1ac)+_0x5f773a+'\x0a\x0a*🔍Desc:*\x20\x0a\x0a'+_0x53d963[_0x34d943(0x17b)]};_0x5cf4cf['sendMessage'](_0x5f773a,_0xeb5604,{'quoted':_0x3e4640});}),zokou({'nomCom':_0x11790b(0x188),'categorie':_0x11790b(0x165),'reaction':'🔗'},async(_0x3e67ef,_0x25e005,_0xeb1bed)=>{const _0x535ba=_0x11790b;var {repondre:_0x2eca48,arg:_0x47f3ee,verifGroupe:_0x2a0911,superUser:_0x5779ec,verifAdmin:_0x7624db}=_0xeb1bed;if(!_0x2a0911)return _0x2eca48(_0x535ba(0x1cc));if(_0x5779ec||_0x7624db){const _0x4c5ee2=await verifierEtatJid(_0x3e67ef);try{if(!_0x47f3ee||!_0x47f3ee[0x0]||_0x47f3ee==='\x20'){_0x2eca48('antilink\x20on\x20to\x20activate\x20the\x20anti-link\x20feature\x0aantilink\x20off\x20to\x20deactivate\x20the\x20anti-link\x20feature\x0aantilink\x20action/remove\x20to\x20directly\x20remove\x20the\x20link\x20without\x20notice\x0aantilink\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20link\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-link\x20feature\x20is\x20set\x20to\x20delete.');return;};if(_0x47f3ee[0x0]==='on')_0x4c5ee2?_0x2eca48('the\x20antilink\x20is\x20already\x20activated\x20for\x20this\x20group'):(await ajouterOuMettreAJourJid(_0x3e67ef,'oui'),_0x2eca48(_0x535ba(0x1df)));else{if(_0x47f3ee[0x0]==='off')_0x4c5ee2?(await ajouterOuMettreAJourJid(_0x3e67ef,'non'),_0x2eca48(_0x535ba(0x12d))):_0x2eca48(_0x535ba(0x1cb));else{if(_0x47f3ee[_0x535ba(0x1c3)]('')['split']('/')[0x0]===_0x535ba(0x15b)){let _0x1bb04a=_0x47f3ee[_0x535ba(0x1c3)]('')['split']('/')[0x1][_0x535ba(0x140)]();_0x1bb04a==_0x535ba(0x1e7)||_0x1bb04a==_0x535ba(0x185)||_0x1bb04a==_0x535ba(0x1b6)?(await mettreAJourAction(_0x3e67ef,_0x1bb04a),_0x2eca48(_0x535ba(0x1bb)+_0x47f3ee['join']('')['split']('/')[0x1])):_0x2eca48(_0x535ba(0x15f));}else _0x2eca48(_0x535ba(0x1d1));}}}catch(_0x191599){_0x2eca48(_0x191599);}}else _0x2eca48('You\x20are\x20not\x20entitled\x20to\x20this\x20order');}),zokou({'nomCom':'antibot','categorie':'Group','reaction':'🔗'},async(_0x2ee161,_0x3ee547,_0x38791b)=>{const _0x2521a=_0x11790b;var {repondre:_0x4ff926,arg:_0xe7b8fd,verifGroupe:_0x1ab969,superUser:_0x5e4155,verifAdmin:_0x3ebd8e}=_0x38791b;if(!_0x1ab969)return _0x4ff926(_0x2521a(0x1cc));if(_0x5e4155||_0x3ebd8e){const _0x253076=await atbverifierEtatJid(_0x2ee161);try{if(!_0xe7b8fd||!_0xe7b8fd[0x0]||_0xe7b8fd==='\x20'){_0x4ff926(_0x2521a(0x1e9));return;};if(_0xe7b8fd[0x0]==='on')_0x253076?_0x4ff926(_0x2521a(0x147)):(await atbajouterOuMettreAJourJid(_0x2ee161,_0x2521a(0x170)),_0x4ff926('the\x20antibot\x20is\x20successfully\x20activated'));else{if(_0xe7b8fd[0x0]===_0x2521a(0x194))_0x253076?(await atbajouterOuMettreAJourJid(_0x2ee161,_0x2521a(0x18e)),_0x4ff926(_0x2521a(0x167))):_0x4ff926(_0x2521a(0x13e));else{if(_0xe7b8fd['join']('')[_0x2521a(0x1d0)]('/')[0x0]===_0x2521a(0x15b)){let _0x25ebe4=_0xe7b8fd[_0x2521a(0x1c3)]('')[_0x2521a(0x1d0)]('/')[0x1]['toLowerCase']();_0x25ebe4==_0x2521a(0x1e7)||_0x25ebe4==_0x2521a(0x185)||_0x25ebe4==_0x2521a(0x1b6)?(await mettreAJourAction(_0x2ee161,_0x25ebe4),_0x4ff926(_0x2521a(0x159)+_0xe7b8fd['join']('')[_0x2521a(0x1d0)]('/')[0x1])):_0x4ff926(_0x2521a(0x15f));}else _0x4ff926('antibot\x20on\x20to\x20activate\x20the\x20anti-bot\x20feature\x0aantibot\x20off\x20to\x20deactivate\x20the\x20antibot\x20feature\x0aantibot\x20action/remove\x20to\x20directly\x20remove\x20the\x20bot\x20without\x20notice\x0aantibot\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20bot\x20message\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-bot\x20feature\x20is\x20set\x20to\x20delete.');}}}catch(_0x171cbe){_0x4ff926(_0x171cbe);}}else _0x4ff926('You\x20are\x20not\x20entitled\x20to\x20this\x20order');}),zokou({'nomCom':_0x11790b(0x19f),'categorie':_0x11790b(0x165)},async(_0x4dffaf,_0x2ad7e3,_0x5c81c1)=>{const _0x25d980=_0x11790b,{repondre:_0x26bcc2,verifGroupe:_0x5902d8,verifAdmin:_0x3c59a6,superUser:_0x47502c,arg:_0x1642ce}=_0x5c81c1;if(!_0x5902d8){_0x26bcc2(_0x25d980(0x157));return;};if(_0x47502c||_0x3c59a6){if(!_0x1642ce[0x0]){_0x26bcc2(_0x25d980(0x14b));return;}const _0x2e66b2=_0x1642ce[_0x25d980(0x1c3)]('\x20');switch(_0x2e66b2){case _0x25d980(0x18b):await _0x2ad7e3[_0x25d980(0x12b)](_0x4dffaf,_0x25d980(0x152)),_0x26bcc2(_0x25d980(0x1c7));break;case _0x25d980(0x14d):await _0x2ad7e3[_0x25d980(0x12b)](_0x4dffaf,_0x25d980(0x126)),_0x26bcc2(_0x25d980(0x169));break;default:_0x26bcc2(_0x25d980(0x17d));}}else{_0x26bcc2(_0x25d980(0x1b8));return;}}),zokou({'nomCom':'left','categorie':'Mods'},async(_0x37415a,_0x2619c5,_0xc0f427)=>{const _0x56af74=_0x11790b,{repondre:_0x2d9423,verifGroupe:_0x24f2b8,superUser:_0x6d9416}=_0xc0f427;if(!_0x24f2b8){_0x2d9423('order\x20reserved\x20for\x20group\x20only');return;};if(!_0x6d9416){_0x2d9423('command\x20reserved\x20for\x20the\x20bot\x20owner');return;}await _0x2d9423('sayonnara'),_0x2619c5[_0x56af74(0x1c1)](_0x37415a);}),zokou({'nomCom':_0x11790b(0x15e),'categorie':_0x11790b(0x165)},async(_0x487ac6,_0x386e51,_0x2bdb7d)=>{const _0x3d9bbb=_0x11790b,{arg:_0xb86d6c,repondre:_0x121b1e,verifAdmin:_0x2e6b90}=_0x2bdb7d;if(!_0x2e6b90){_0x121b1e(_0x3d9bbb(0x195));return;};if(!_0xb86d6c[0x0]){_0x121b1e('Please\x20enter\x20the\x20group\x20name');return;};const _0x25b09b=_0xb86d6c[_0x3d9bbb(0x1c3)]('\x20');await _0x386e51[_0x3d9bbb(0x15d)](_0x487ac6,_0x25b09b),_0x121b1e('group\x20name\x20refresh:\x20*'+_0x25b09b+'*');}),zokou({'nomCom':_0x11790b(0x192),'categorie':'Group'},async(_0x95864d,_0x4f243a,_0x3d7e0b)=>{const _0x18acf1=_0x11790b,{arg:_0x3c4586,repondre:_0x11a040,verifAdmin:_0x29dc39}=_0x3d7e0b;if(!_0x29dc39){_0x11a040(_0x18acf1(0x195));return;};if(!_0x3c4586[0x0]){_0x11a040('Please\x20enter\x20the\x20group\x20description');return;};const _0x3f318c=_0x3c4586['join']('\x20');await _0x4f243a[_0x18acf1(0x1d5)](_0x95864d,_0x3f318c),_0x11a040(_0x18acf1(0x1d3)+_0x3f318c+'*');}),zokou({'nomCom':_0x11790b(0x1b0),'categorie':_0x11790b(0x165)},async(_0x5c8452,_0x359aec,_0x53bdf8)=>{const _0x31e77d=_0x11790b,{repondre:_0x29aa36,msgRepondu:_0x59b57e,verifAdmin:_0x349403}=_0x53bdf8;if(!_0x349403){_0x29aa36(_0x31e77d(0x195));return;};if(_0x59b57e['imageMessage']){const _0x142501=await _0x359aec[_0x31e77d(0x1ae)](_0x59b57e[_0x31e77d(0x133)]);await _0x359aec[_0x31e77d(0x134)](_0x5c8452,{'url':_0x142501})[_0x31e77d(0x1a2)](()=>{const _0x13fec2=_0x31e77d;_0x359aec[_0x13fec2(0x1cd)](_0x5c8452,{'text':_0x13fec2(0x1c4)}),fs[_0x13fec2(0x180)](_0x142501);})[_0x31e77d(0x1a4)](()=>_0x359aec[_0x31e77d(0x1cd)](_0x5c8452,{'text':err}));}else _0x29aa36(_0x31e77d(0x132));}),zokou({'nomCom':_0x11790b(0x1b5),'categorie':_0x11790b(0x165),'reaction':'🎤'},async(_0x515402,_0x1b7533,_0x4e743f)=>{const _0x5adc47=_0x11790b,{repondre:_0x2b85f2,msgRepondu:_0x5ee614,verifGroupe:_0x1b4308,arg:_0x167f29,verifAdmin:_0x4e1f15,superUser:_0x383c6b}=_0x4e743f;!_0x1b4308&&_0x2b85f2('This\x20command\x20is\x20only\x20allowed\x20in\x20groups.');;if(_0x4e1f15||_0x383c6b){let _0x465ce2=await _0x1b7533[_0x5adc47(0x160)](_0x515402),_0x20d515=[];for(const _0x328f5b of _0x465ce2[_0x5adc47(0x1a9)]){_0x20d515[_0x5adc47(0x1da)](_0x328f5b['id']);}if(_0x5ee614){console['log'](_0x5ee614);let _0x418280;if(_0x5ee614[_0x5adc47(0x133)]){let _0x216d84=await _0x1b7533[_0x5adc47(0x1ae)](_0x5ee614['imageMessage']);_0x418280={'image':{'url':_0x216d84},'caption':_0x5ee614[_0x5adc47(0x133)][_0x5adc47(0x17a)],'mentions':_0x20d515};}else{if(_0x5ee614[_0x5adc47(0x12e)]){let _0x470165=await _0x1b7533[_0x5adc47(0x1ae)](_0x5ee614[_0x5adc47(0x12e)]);_0x418280={'video':{'url':_0x470165},'caption':_0x5ee614[_0x5adc47(0x12e)]['caption'],'mentions':_0x20d515};}else{if(_0x5ee614[_0x5adc47(0x149)]){let _0x2a465c=await _0x1b7533[_0x5adc47(0x1ae)](_0x5ee614[_0x5adc47(0x149)]);_0x418280={'audio':{'url':_0x2a465c},'mimetype':_0x5adc47(0x139),'mentions':_0x20d515};}else{if(_0x5ee614[_0x5adc47(0x1bd)]){let _0x2948c5=await _0x1b7533[_0x5adc47(0x1ae)](_0x5ee614[_0x5adc47(0x1bd)]),_0x49fc63=new Sticker(_0x2948c5,{'pack':_0x5adc47(0x124),'type':StickerTypes['CROPPED'],'categories':['🤩','🎉'],'id':'12345','quality':0x46,'background':_0x5adc47(0x143)});const _0x5bc719=await _0x49fc63[_0x5adc47(0x171)]();_0x418280={'sticker':_0x5bc719,'mentions':_0x20d515};}else _0x418280={'text':_0x5ee614['conversation'],'mentions':_0x20d515};}}}_0x1b7533[_0x5adc47(0x1cd)](_0x515402,_0x418280);}else{if(!_0x167f29||!_0x167f29[0x0]){_0x2b85f2(_0x5adc47(0x18d));;return;};_0x1b7533[_0x5adc47(0x1cd)](_0x515402,{'text':_0x167f29[_0x5adc47(0x1c3)]('\x20'),'mentions':_0x20d515});}}else _0x2b85f2(_0x5adc47(0x1ad));}),zokou({'nomCom':_0x11790b(0x1af),'reaction':'✨','categorie':_0x11790b(0x155)},async(_0x4a2334,_0x973d3,_0x9f033d)=>{const _0x5785b4=_0x11790b,{repondre:_0x2248b7,arg:_0x5aa014,ms:_0x165b6e}=_0x9f033d;try{const _0x3bce89=_0x5aa014[_0x5785b4(0x1c3)]('\x20');if(!_0x3bce89)return _0x2248b7('*Enter\x20the\x20name\x20of\x20the\x20application\x20to\x20search\x20for*');const _0x33eed6=await search(_0x3bce89);if(_0x33eed6[_0x5785b4(0x1d9)]===0x0)return _0x2248b7(_0x5785b4(0x191));const _0x4cfd0b=await download(_0x33eed6[0x0]['id']),_0x981853=parseInt(_0x4cfd0b[_0x5785b4(0x1ca)]);if(_0x981853>0x12c)return _0x2248b7('The\x20file\x20exceeds\x20300\x20MB,\x20unable\x20to\x20download.');const _0x50c476=_0x4cfd0b['dllink'],_0x1b43cd='『\x20*HACKING-Md\x20App*\x20』\x0a\x0a*Name\x20:*\x20'+_0x4cfd0b[_0x5785b4(0x17f)]+'\x0a*Id\x20:*\x20'+_0x4cfd0b['package']+_0x5785b4(0x1b4)+_0x4cfd0b[_0x5785b4(0x1b1)]+_0x5785b4(0x144)+_0x4cfd0b[_0x5785b4(0x1ca)]+'\x0a',_0x19f064=(_0x4cfd0b?.['name']||_0x5785b4(0x175))+_0x5785b4(0x1eb),_0x2726b4=_0x19f064,_0x1a9ea3=await axios['get'](_0x50c476,{'responseType':_0x5785b4(0x19e)}),_0xb224b3=fs[_0x5785b4(0x17e)](_0x2726b4);_0x1a9ea3[_0x5785b4(0x15c)][_0x5785b4(0x1b9)](_0xb224b3),await new Promise((_0x644ea0,_0x881b89)=>{const _0xafef8a=_0x5785b4;_0xb224b3['on'](_0xafef8a(0x174),_0x644ea0),_0xb224b3['on'](_0xafef8a(0x161),_0x881b89);});const _0x48c04c={'document':fs[_0x5785b4(0x123)](_0x2726b4),'mimetype':_0x5785b4(0x1aa),'fileName':_0x19f064};_0x973d3[_0x5785b4(0x1cd)](_0x4a2334,{'image':{'url':_0x4cfd0b[_0x5785b4(0x184)]},'caption':_0x1b43cd},{'quoted':_0x165b6e}),_0x973d3[_0x5785b4(0x1cd)](_0x4a2334,_0x48c04c,{'quoted':_0x165b6e}),fs[_0x5785b4(0x180)](_0x2726b4);}catch(_0x5326a8){console[_0x5785b4(0x161)](_0x5785b4(0x13c),_0x5326a8),_0x2248b7(_0x5785b4(0x18f));}});function _0x18a7(){const _0xfc75cd=['403','image','../bdd/cron','stream','group','For\x20groups\x20only','nsfw','then','Sorry,\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.','catch','This\x20member\x20is\x20already\x20an\x20administrator\x20of\x20the\x20group.','random','oups\x20','please\x20tag\x20the\x20member\x20to\x20be\x20nominated','participants','application/vnd.android.package-archive','wa-sticker-formatter','\x0a\x0a*🔩Group\x27s\x20ID:*\x20','Command\x20reserved\x20for\x20administrators.','downloadAndSaveMediaMessage','apk','gpp','lastup','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','\x20,\x20here\x20is\x20the\x20group\x20link\x20','\x0a*Last\x20Update\x20:*\x20','hidetag','delete','participant','order\x20reserved\x20for\x20the\x20administratorr','pipe','includes','The\x20anti-link\x20action\x20has\x20been\x20updated\x20to\x20','No\x20time\x20set\x20for\x20automatic\x20mute','stickerMessage','28956010yZnvSi','This\x20member\x20is\x20not\x20a\x20group\x20administrator.','193678TXnlPn','groupLeave','fs-extra','join','Group\x20pfp\x20changed','user','4356814YzapPU','group\x20open','for\x20groups\x20only','Please\x20enter\x20a\x20valid\x20time\x20with\x20hour\x20and\x20minute\x20separated\x20by\x20:','size','antilink\x20is\x20not\x20activated\x20for\x20this\x20group','*for\x20groups\x20only*','sendMessage','NSFW\x20content\x20is\x20already\x20disabled\x20for\x20this\x20group','demote','split','antilink\x20on\x20to\x20activate\x20the\x20anti-link\x20feature\x0aantilink\x20off\x20to\x20deactivate\x20the\x20anti-link\x20feature\x0aantilink\x20action/remove\x20to\x20directly\x20remove\x20the\x20link\x20without\x20notice\x0aantilink\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20link\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-link\x20feature\x20is\x20set\x20to\x20delete.','contextInfo','group\x20description\x20update:\x20*','getCronById','groupUpdateDescription','✋🏿\x20✋🏿this\x20command\x20is\x20reserved\x20for\x20groups\x20❌','Aucun\x20Message','add','length','push','toFile','order\x20reserved\x20for\x20the\x20group\x20only','reply_message','You\x20must\x20enter\x20\x22on\x22\x20or\x20\x22off\x22','the\x20antilink\x20is\x20activated\x20successfully','del','128691Qylkfo','axios','Please\x20mention\x20the\x20message\x20to\x20delete.','This\x20member\x20cannot\x20be\x20removed\x20because\x20he\x20is\x20an\x20administrator\x20of\x20the\x20group.','551878rAWavv','6896096CBHgvX','remove','115FJZjnp','antibot\x20on\x20to\x20activate\x20the\x20anti-bot\x20feature\x0aantibot\x20off\x20to\x20deactivate\x20the\x20antibot\x20feature\x0aantibot\x20action/remove\x20to\x20directly\x20remove\x20the\x20bot\x20without\x20notice\x0aantibot\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20bot\x20message\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-bot\x20feature\x20is\x20set\x20to\x20delete.','startsWith','.apk','command\x20reserved\x20for\x20admins','subject','readFileSync','Hacking-tag','message','announcement','\x20;\x20restart\x20to\x20apply\x20changes','\x20rose\x20in\x20rank.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20he/she\x20has\x20been\x20named\x20group\x20administrator.','stanzaId','The\x20group\x20will\x20be\x20un-muted\x20at\x20','groupSettingUpdate','wait\x20bro\x20,\x20you\x20want\x20the\x20link\x20to\x20my\x20dm?','The\x20antilink\x20has\x20been\x20successfully\x20deactivated','videoMessage','_I\x27m\x20not\x20admin._','pm2\x20restart\x20all','unmute_at','Please\x20mention\x20an\x20image','imageMessage','updateProfilePicture','please\x20tag\x20the\x20member\x20to\x20be\x20removed','promote','addToHentaiList','groupParticipantsUpdate','audio/mp4','Example\x20:\x20add\x202250545065189','link','Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20commande\x20apk:','200','antibot\x20is\x20not\x20activated\x20for\x20this\x20group','jid','toLowerCase','_Failed,\x20Invite\x20sent_','FULL','transparent','\x0a*Size\x20:*\x20','No\x20cronometrage\x20is\x20active','3dCRJzu','the\x20antibot\x20is\x20already\x20activated\x20for\x20this\x20group','96Cqkcpu','audioMessage','\x0a\x20\x20\x20\x20\x20\x20*\x20*Instructions:*\x20To\x20activate\x20autounmute,\x20add\x20the\x20minute\x20and\x20hour\x20after\x20the\x20command\x20separated\x20by\x20\x27:\x27\x0a\x20\x20\x20\x20\x20\x20Example\x20autounmute\x207:30\x0a\x20\x20\x20\x20\x20\x20*\x20To\x20delete\x20autounmute,\x20use\x20the\x20command\x20*autounmute\x20del*','Instructions:\x0a\x0aType\x20group\x20open\x20or\x20close','extendedTextMessage','close','*\x20*State:*\x20','Sorry,\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20I\x20am\x20not\x20an\x20administrator\x20of\x20the\x20group.','Sorry,\x20you\x20cannot\x20enable\x20NSFW\x20content\x20without\x20being\x20an\x20administrator\x20of\x20the\x20group','#000000','not_announcement','Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20I\x20am\x20not\x20an\x20administrator\x20of\x20the\x20group.','👨🏿‍💼','Recherche','mute_at','order\x20reserved\x20for\x20group\x20only','../set','The\x20anti-bot\x20action\x20has\x20been\x20updated\x20to\x20','\x20was\x20removed\x20from\x20his\x20position\x20as\x20a\x20group\x20administrator\x0a','action','data','groupUpdateSubject','gname','The\x20only\x20actions\x20available\x20are\x20warn,\x20remove,\x20and\x20delete','groupMetadata','error','fkick','448362lFzsAZ','profilePictureUrl','Group','This\x20user\x20is\x20not\x20part\x20of\x20the\x20group.','The\x20antibot\x20has\x20been\x20successfully\x20deactivated','admin','Group\x20close\x20successfully','checkFromHentaiList','Setting\x20up\x20automatic\x20mute\x20for\x20','info','\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20*Instructions:*\x20To\x20activate\x20automatic\x20mute,\x20add\x20the\x20minute\x20and\x20hour\x20after\x20the\x20command\x20separated\x20by\x20\x27:\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20Example\x20automute\x209:30\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20To\x20delete\x20the\x20automatic\x20mute,\x20use\x20the\x20command\x20*automute\x20del*','floor','No\x20cronometrage\x20has\x20been\x20activated','oui','toBuffer','You\x20need\x20administrative\x20rights\x20to\x20perform\x20this\x20command','The\x20automatic\x20mute\x20has\x20been\x20removed;\x20restart\x20to\x20apply\x20changes','finish','Downloader','NSFW\x20content\x20is\x20now\x20active\x20for\x20this\x20group','Hacking-Md','send','\x20\x0a\x0a\x0aLien\x20:','caption','desc','No\x20time\x20set\x20for\x20autounmute','Please\x20don\x27t\x20invent\x20an\x20option','createWriteStream','name','unlinkSync','../bdd/hentai','map','🎊🎊🎊\x20\x20@','icon','warn','automute','../framework/zokou','antilink','*━━━━『Info\x20du\x20groupe』━━━━*\x0a\x0a*🎐Name:*\x20','autounmute','open','delCron','Enter\x20the\x20text\x20to\x20announce\x20or\x20mention\x20the\x20message\x20to\x20announce','non','*Error\x20during\x20apk\x20command\x20processing*','Add','*can\x27t\x20find\x20application,\x20please\x20enter\x20another\x20name*','gdesc',';\x20restart\x20to\x20apply\x20the\x20changes','off','order\x20reserved\x20for\x20administrators\x20of\x20the\x20group','You\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group','\x20🚀\x20\x0a👤\x20Autor\x20:\x20*','addCron','Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group\x20.','client'];_0x18a7=function(){return _0xfc75cd;};return _0x18a7();}function _0x4e86(_0xa08ca2,_0xc1c13a){const _0x18a72b=_0x18a7();return _0x4e86=function(_0x4e8634,_0x2eda41){_0x4e8634=_0x4e8634-0x123;let _0x40175c=_0x18a72b[_0x4e8634];return _0x40175c;},_0x4e86(_0xa08ca2,_0xc1c13a);}const cron=require(_0x11790b(0x19d));zokou({'nomCom':_0x11790b(0x186),'categorie':_0x11790b(0x165)},async(_0x5dada7,_0x2bb674,_0x432860)=>{const _0x386a82=_0x11790b,{arg:_0x80b048,repondre:_0x4f0197,verifAdmin:_0x45a829}=_0x432860;if(!_0x45a829){_0x4f0197(_0x386a82(0x196));return;}group_cron=await cron[_0x386a82(0x1d4)](_0x5dada7);if(!_0x80b048||_0x80b048['length']==0x0){let _0x4d329b;group_cron==null||group_cron[_0x386a82(0x156)]==null?_0x4d329b=_0x386a82(0x1bc):_0x4d329b='The\x20group\x20will\x20be\x20muted\x20at\x20'+group_cron[_0x386a82(0x156)]['split'](':')[0x0]+'\x20'+group_cron[_0x386a82(0x156)]['split'](':')[0x1];let _0x2a86b1=_0x386a82(0x14e)+_0x4d329b+_0x386a82(0x16d);_0x4f0197(_0x2a86b1);return;}else{let _0x367675=_0x80b048[_0x386a82(0x1c3)]('\x20');if(_0x367675[_0x386a82(0x140)]()==='del')group_cron==null?_0x4f0197(_0x386a82(0x145)):(await cron[_0x386a82(0x18c)](_0x5dada7),_0x4f0197(_0x386a82(0x173))[_0x386a82(0x1a2)](()=>{const _0x272916=_0x386a82;exec(_0x272916(0x130));}));else _0x367675['includes'](':')?(await cron[_0x386a82(0x198)](_0x5dada7,_0x386a82(0x156),_0x367675),_0x4f0197(_0x386a82(0x16b)+_0x367675+_0x386a82(0x127))[_0x386a82(0x1a2)](()=>{const _0x4f6ecc=_0x386a82;exec(_0x4f6ecc(0x130));})):_0x4f0197(_0x386a82(0x1c9));}}),zokou({'nomCom':_0x11790b(0x18a),'categorie':'Group'},async(_0x1e01cd,_0x47de8d,_0x10cfe4)=>{const _0x10d992=_0x11790b,{arg:_0x4da00c,repondre:_0x5e6f25,verifAdmin:_0x31a3bb}=_0x10cfe4;if(!_0x31a3bb){_0x5e6f25(_0x10d992(0x196));return;}group_cron=await cron[_0x10d992(0x1d4)](_0x1e01cd);if(!_0x4da00c||_0x4da00c[_0x10d992(0x1d9)]==0x0){let _0x3166d7;group_cron==null||group_cron[_0x10d992(0x131)]==null?_0x3166d7=_0x10d992(0x17c):_0x3166d7=_0x10d992(0x12a)+group_cron[_0x10d992(0x131)]['split'](':')[0x0]+'H\x20'+group_cron[_0x10d992(0x131)][_0x10d992(0x1d0)](':')[0x1];let _0xf8de96=_0x10d992(0x14e)+_0x3166d7+_0x10d992(0x14a);_0x5e6f25(_0xf8de96);return;}else{let _0x44b24e=_0x4da00c[_0x10d992(0x1c3)]('\x20');if(_0x44b24e[_0x10d992(0x140)]()===_0x10d992(0x1e0))group_cron==null?_0x5e6f25(_0x10d992(0x16f)):(await cron[_0x10d992(0x18c)](_0x1e01cd),_0x5e6f25('The\x20autounmute\x20has\x20been\x20removed;\x20restart\x20to\x20apply\x20the\x20changes')[_0x10d992(0x1a2)](()=>{const _0x4c3044=_0x10d992;exec(_0x4c3044(0x130));}));else _0x44b24e[_0x10d992(0x1ba)](':')?(await cron[_0x10d992(0x198)](_0x1e01cd,'unmute_at',_0x44b24e),_0x5e6f25('Setting\x20up\x20autounmute\x20for\x20'+_0x44b24e+_0x10d992(0x193))[_0x10d992(0x1a2)](()=>{exec('pm2\x20restart\x20all');})):_0x5e6f25('Please\x20enter\x20a\x20valid\x20time\x20with\x20hour\x20and\x20minute\x20separated\x20by\x20:');}}),zokou({'nomCom':_0x11790b(0x162),'categorie':_0x11790b(0x165)},async(_0x885f32,_0xc1cdb3,_0x2666c7)=>{const _0x3d90f1=_0x11790b,{arg:_0x304afa,repondre:_0x578f0d,verifAdmin:_0x4ce75d,superUser:_0x4a84c0,verifZokouAdmin:_0x4a4dd3}=_0x2666c7;if(_0x4ce75d||_0x4a84c0){if(!_0x4a4dd3){_0x578f0d(_0x3d90f1(0x172));return;}if(!_0x304afa||_0x304afa[_0x3d90f1(0x1d9)]==0x0){_0x578f0d('Please\x20enter\x20the\x20country\x20code\x20whose\x20members\x20will\x20be\x20removed');return;}let _0x2a873f=await _0xc1cdb3[_0x3d90f1(0x160)](_0x885f32),_0x5b17b1=_0x2a873f[_0x3d90f1(0x1a9)];for(let _0x4954a1=0x0;_0x4954a1<_0x5b17b1[_0x3d90f1(0x1d9)];_0x4954a1++){_0x5b17b1[_0x4954a1]['id'][_0x3d90f1(0x1ea)](_0x304afa[0x0])&&_0x5b17b1[_0x4954a1][_0x3d90f1(0x168)]===null&&await _0xc1cdb3[_0x3d90f1(0x138)](_0x885f32,[_0x5b17b1[_0x4954a1]['id']],_0x3d90f1(0x1e7));}}else _0x578f0d('Sorry,\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group');}),zokou({'nomCom':_0x11790b(0x1a1),'categorie':_0x11790b(0x165)},async(_0x4b08ce,_0x9d0272,_0x3031cb)=>{const _0x26b3ae=_0x11790b,{arg:_0x231bfc,repondre:_0x166434,verifAdmin:_0x5df719}=_0x3031cb;if(!_0x5df719){_0x166434(_0x26b3ae(0x150));return;}let _0x39f8d7=require(_0x26b3ae(0x181)),_0x251a2f=await _0x39f8d7[_0x26b3ae(0x16a)](_0x4b08ce);if(_0x231bfc[0x0]=='on'){if(_0x251a2f){_0x166434('NSFW\x20content\x20is\x20already\x20active\x20for\x20this\x20group');return;};await _0x39f8d7[_0x26b3ae(0x137)](_0x4b08ce),_0x166434(_0x26b3ae(0x176));}else{if(_0x231bfc[0x0]==_0x26b3ae(0x194)){if(!_0x251a2f){_0x166434(_0x26b3ae(0x1ce));return;};await _0x39f8d7['removeFromHentaiList'](_0x4b08ce),_0x166434('NSFW\x20content\x20is\x20now\x20disabled\x20for\x20this\x20group');}else _0x166434(_0x26b3ae(0x1de));}});
