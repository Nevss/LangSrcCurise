(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('监利县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"421023","properties":{"name":"监利县","cp":[112.904788,29.840179],"childNum":6},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@B@BBDBBB@B@B@H@BAAAAAC@ECAAAB"],["@@HDDBH@DAD@DA@A@@CAI@aGOEA@AB@@@BDBTDBBJD"],["@@@ACAC@@BBB@D@BB@@CB@BA"],["@@BBDCAA@@CD"],["@@D@BBBBBBB@@ABABABABAB@@B@B@B@@@D@D@B@BF@H@D@D@B@B@B@@A@ABABAB@@AAC@@@A@A@A@A@A@AC@C@@A@CA@A@C@@@@C@A@CBA@E@A@AD@B@B@BAB@@A@@B@B@@ABA@@B@BA@B@@@@B@@@@A@AB@FBBDBD@HBB@DBF@F@HDJDBP@LBF@J@B@H@LCACBCBE@MA@MGGIIOUQ[QGIAECE@EAAACAEEGAEAEACCEAEAE@ACECCECCCCACCCCEAEA@@C@CBCBCDEHAF@N@N@FHdBT@HAN@HAD@FCHAHB@F@FBHBB@@F@FBH@JCHLB"],["@@A@GAEAE@A@CDCBABKHKHUNKDIDQBUAOECAaUQOUSQMYOAAOCICOAUCUAE@KAMBGDIF@LCJ@L@DBB@DBBBBFBF@D@J@PDLFNJHLBNAFBJ@B@B@H@BBDAB@DA@@DAB@D@DAFADAB@F@BAD@BCDGHGFC@CAGAAAEAE@K@@@K@G@IBIBK@A@WCC@KAEBI@E@C@AODKBC@EHSTCBCDA@UPABCAAAA@@@@BFFDJBBBDBBBD@BFJ@LAHAFCF@FDL@BA@ABA@@BGFADAFBBB@BB@H@BF@B@BB@BAJBBBBB@FBBB@D@HBDBBB@D@DD@DAHAF@JBHLPDFBDBD@D@D@DABBFHBLFBHBBBF@H@BBD@B@B@@BBDDA@ABCBA@AB@B@BB@@@DADADAB@FDBB@D@B@@B@BABC@AA@@ABAB@DBBBDBBBB@@@BC@ADGBABAF@JBB@@BBB@BABCFABIJ@BBDFFDBDC@ADC@AB@@@B@@@@@@B@BAB@@B@ABA@@BBB@@A@@@@@A@@A@@CDHDB@@B@BA@@B@BBBB@@@DEB@DBFBB@B@@A@@F@DB@B@HBBDBBB@@@DIH@D@BBBDBBFBBB@D@DAD@D@D@B@BD@D@@RFJDXPT`P@N@F@P@D@F@N@V@P@^@CDABGPABABGFEDIFEDIDAFDDFBN@L@J@DBB@@BDH@@DHDH@F@LCHCFCJCHAJDHBFDDDFLAJAF@LAHDDBDBDHFHBHDDBBDBBBHDJBDF@BFBJCFADC@@@ABA@A@C@EAC@C@ABABAB@FBDBF@F@DANKFABAF@HBHBB@FBFAHAHCJANAFABABABA@AEM@A@A@ABCHCDADADCDABADAD@RFFBD@B@DAHCFCDAD@D@DB@@DB@@D@DBDBDBFFFDFBDBFBBBBB@B@DAD@BCH@BADAD@DDBDDHBFBDD@D@B@@AB@BADAD@D@D@@DDDDDBFBFBHBH@FAHEB@FCFCDEP]DC@ABAHCFCHEPMFAFAD@F@FBDBFBFBHBFBHAHAFADCFEB@AECG@CACCEBC@AFEDABABA@CCAAACAAAAEB@BCBAFAFAPDFBBABABCBA@E@A@ADAB@BA@A@C@@@@DA@@B@BBDDDBB@FAHABA@A@C@AA@CBA@A@AEAEAG@CAC@C@CDABAHCFCDC@@@CBEBCDE@EAGGM@A@A@AHEDAB@DABA@@@A@ACACAA]@EBCB@FAB@BA@C@C@@@A@EAC@@@C@@AA@@CAACNMHEEC@AAACACAAAAAAAC@GAAAA@AAAA@CBA@C@EBEAEAE@@F@DDD@H@B@BCFGHeBE@AF@@CH]`LNFBBD@REZWDA^Y|jÏLmMUYQGIEIPWBCACGSGGCCCECAAAAE@AEMSeAABAHCDAFCDCDA@AFADADADCDADADAFAFCDAFCDADCDAFABAGIOSSWECMMAAQOCAAEACEK@E@AACGGQMCA]SIGMGOKEICE_mKOIMIMAAEIGICAimCC@@IGGCGBAB@@CDABEBCDEBCAC@C@CAE@E@C@CBCBCDA@C@A@CAC@@@BEBKBOCIGGGCEAG@KFCHEZA^@LABAVEXEXCLENGFKD@@OBSAKESIWOKGUMQSQ_AAECIA@@MBC@KHAHCFCTAFABANARCPCTKb@BCJCNCN@HAJGXADI`EL@J@HFHBBLLXVDBFFPND@FDB@BBFDDBFBFFDBBDJLJLhZ@@RPBBJPFJDHFTFRBFDZBHL\\@J@@CFADCBG@CA@NAFADBDKDG@A@I@E@KAO@CACI@G@EAE@CAA@GACACEAA@@B@B@@A@@@@@@AABA@@@AB@BA@A@@@@BA@ABA@A@C@@B@B@FAB@D@B@D@@D@B@B@@D@BD@D@@B@B@B@B@B@B@@BD@BA@ABAB@B@BA@A@A@C@C@G@E@@A@A@C@C@@@A@A@AA@ABABABAB@BA@AAAAAAC@KAEHADMJEDIFQFABM@C@IAIEC@CCAAPCJAFChWPKFCLKBD@E"]],"encodeOffsets":[[[115415,30536]],[[115431,30537]],[[115746,30917]],[[115378,30739]],[[115655,30500]],[[115650,30480]]]}}],"UTF8Encoding":true});}));