(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('施秉县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"522623","properties":{"name":"施秉县","cp":[108.124379,27.03292],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DBDFBBL@BBB@BA@@@C@ADAB@@AB@BCBABA@A@@D@@A@@BAB@@B@ADB@@BAAABA@@A@@@@A@AA@B@@AA@@@A@@@BABAAADAAC@A@A@C@@CECC@A@E@AC@@C@A@A@ABA@ABA@@@@AAB@@C@AC@ABCA@@AABA@GCCECAAAA@BCBABA@@B@BAB@B@BBB@BBBFB@@BBCH@BA@CFA@@BAD@@@@BB@AB@ADB@BBA@@B@@B@@B@@ABBDABBB@@B@@BABABA@CBDB@B@B@@CB@ACBA@@BABC@@@CCCA@AA@AA@A@ACGC@@ACAA@ABA@AH@B@DEN@L@BBFBD@@@@DB@@H@HAFAB@JA"],["@@AA@@BABB@@D@BACAACAA@@BA@A@CDCCA@C@@FA@@DEBABEFCBACCC@ECC@CCCAC@A@E@EAECAAAAAAA@CFCBADAB@B@DBBABBB@BD@DB@B@BAB@B@DABAD@BADABABA@ABA@A@A@A@@@@AAABABA@IACECCAA@ABC@CDABCBADA@ABCA@B@BCB@@C@@BC@A@ABFDBD@B@DABCBG@CBA@AD@B@BBFDHHHBD@BABABC@CAGAC@C@CDCFAD@HCBA@C@AAAAACAC@M@ACAICICI@IAAACAEEA@A@ABCHA@CBIDQ@EBABADBDDFBBADEDADAD@B@DBH@F@@CH@BABABC@E@E@O@IAC@ABIFABC@IAGCCACCEAA@ABCBCBA@E@EAAACCAAC@EBA@ADCDEBEBCAEEEEACCAAACAGAGDCBC@G@C@AAAA@CAEAECCEAICA@MA@DBF@DA@A@@B@@C@AD@BBB@BA@C@AACDEBA@@BAAA@@@@@@BBD@@@BA@@@@B@@AB@@B@ABCBBF@BB@AFAB@B@DCBA@AA@B@@ABBBBAABBB@AD@@@@BB@@B@@BB@BABAD@BABAB@@AAAB@@BBABA@@@A@@@@BBDB@@BAB@@DD@@B@BBB@ABA@AAG@IA@B@BA@BB@B@BC@EA@B@BI@EB@@A@ADAB@@AA@A@ACA@@AACE@AAA@ACBAAEBA@AD@DCBABAB@DCFABABEBAACBABE@C@ADCB@@AA@@A@BBAB@@AAA@BB@BA@AC@@CBA@E@C@C@C@A@ABA@A@C@@@AA@@EA@@A@AA@AA@A@AAA@@ACCBA@C@AA@A@AAA@ABA@@@A@ACC@A@ABA@CDA@ABC@AAAB@@AB@BBBABABABA@ABA@ABBF@@H@DB@B@B@@ED@@ADAFCB@@CEAAAB@BA@A@CAC@ABA@@AACA@@@@BABEBGAA@ABBB@@@BCBAB@B@FCBCBABABAJA@A@BF@FC@CA@@@DDFABAB@B@DAD@B@BCBC@@BAB@BCBAFC@C@EBCA@AA@E@A@AD@B@@FD@BAFADCB@BAB@B@B@@B@FB@@@B@@ABEBCBB@A@CCA@E@CBA@@@A@@AAAC@AB@B@@@BDA@D@@BAB@D@ADC@DDABADCD@DBBABBBA@B@@B@@@BBB@BB@@B@@BB@@AB@BADAB@D@BC@C@ABA@@DC@A@CDAB@FCBABBJADED@BABCF@DBDA@@AACEEA@A@AFB@FD@BA@C@CCAAI@A@EAA@@BA@@@ACA@A@@BA@@A@A@@A@EBA@AAAABAD@@@BAAAA@A@ABAAAAAAC@C@A@AAEBC@ABC@CBA@@BC@C@CAA@A@@@BB@FABABCBAB@DDABBBBBBB@@@@@BBBB@@@@@BBB@DBDBFD@@BBB@@@B@B@@@B@FBB@BBB@DDBBDBBDBBB@D@B@DABAD@@EB@@BD@@BFAD@B@@@B@BABCD@BBB@FBF@DHJDBBBBBADB@@B@BA@@D@BADB@DB@B@BC@A@AB@@BBB@BBBFBBA@AB@D@B@B@DA@BB@@@@AB@BAB@B@B@B@DD@@B@F@BDDDFD@BCF@BBDADA@CBAA@@AB@B@@BB@B@@@@ABADCB@B@BB@@ABBD@@@@B@BA@@@@B@DABBBB@DDHA@EACDCD@@@D@BB@A@ABC@CBA@CA@AA@@@A@CDAB@AAAA@CBC@CBAAABAB@@B@@@B@@BA@B@@B@B@@B@@@ABBBAB@@CA@B@AA@AB@@@BC@@@@BABABADA@@BA@CB@B@D@@ABA@BBBDBBBD@@BBBB@@BB@B@@@B@B@B@@DD@@DBDBD@BA@@DADAB@@AB@DA@@D@@@BBD@D@BAF@D@BAD@B@BBB@DBDBBBF@HDFB@D@@@@@B@BEDEFAD@B@@@@@B@@@BDFD@H@L@RFNFB@BADDJDDFRBPDPJJHFLFN@B@@@LADCHGLKDQBKDOREZCH@F@DDFFRVBTBTBTFJ@HAL@LBJDLFHDFBHAPCDA@@LCJALA@@@@LBNBJBHCHGFIFOLMLMJEHCDAD@BKC@CA@AA@@AC@@C@E@A@A@ACAAAACEAAAAAAAEA@CBCFE@AD@B@D@BBD@B@@BB@BA@@BBBBDBF@D@B@@@BBD@FB@@F@AA@ABBBBB@@FBDD@D@BBF@BF@BA@AB@DBBH@FAD@@@BBBD@@A@EB@B@BD@F@BBHBD@JD@ABABCDA@A@AACAA@A@@DCB@DDB@BBDBBBD@BABCBEBAB@BA@A@AA@AACAACAAACCAA@CGAA@ADABADAB@B@B@BBBBBBF@D@DDFB@BB@FDB@BDBBB@H@BCBAAA@CAA@A@ACC@ABABAB@BEAAACC@@AAABA@@CA@AB@@A@C@@AC@C@@AAA@@AAAEACCCAAAA@AA@@@E@E@G@A@CDEB@@ABABAAC@@@A@A@AB@B@BABA@@B@DBB@B@BABA@@B@@@@AB@AE@@@ACA@E@CAAAA@@@AB@@A@@@ABAAABA@E@CBABEDBB@B@BA@ABA@AB@@AB@@A@@@A@AAAEA@A@AA@CAA@A@AAA@AA@A@AC@@AB@@ACAA@ACB@@CDBFAB@@@B@AA@ABCCC@@@A@A@CAAA@A@@EA@AAAC@C@@AA@@AC@@AAAA@AB@BAJJHBBBDD@@B@BBD@@@BBB@DDB@BBB@B@B@BBFDB@@AB@D@HAD@B@@BB@@@B@D@D@F@@A@@CAAEC@AAA@AAA@AAABAA@BA@AA@AB@BAB@B@@A@@@ABBFCB@BA@@D@BAB@@AB@BA@@B@BAB@BBB@BAAAA@@A@@BCA@@@@CA@@A@AA@C@A@C@A@@@AAA@@@A@@AA@A@AAB@AAAAA@CAAC@ABADA@ABADADC@CBABA@@BA@CB@@AB@BA@AA@BA@A@@B@AA@@B@@AA@B@B@@CBAAADA@A@@B@@ABABABBB@BC@CBBB@@@AABA@@BAB@BAD@@C@C@A@ADBB@@AAC@ABAB@B@@@@@@CAAAAAAB@B@@A@@A@AABA@A@@A@@AAEBAA@@A@CAA@AB@@A@AC@A@ECEBC@EAEAECAA@@AAA@IDEBA@C@G@CACACAA@A@ABIFGDE@C@CAA@ABAB@BA@@@EEE@@@@@@C@CA@AA@ABA@AA@@AB@@A@@@@BAF@DCB@D@DADBBAD@DABABAJCBAFAB@@@@CFA@ABAAA@@C@@@@A@A@AC@@AAA@AABCAC@C@@A@@C@@@AE@@@CAA@@@A@CBAB@@A@@@AB@@CD@BA@AA@EACAAAAAAC@ADCB@@@B@BEDC@AAACA@AD@FEL@FBB@@AAA@A@A@A@A@ABAA@ACAADC@CDCBCAGIE@@AACCAAEAA@A@A@@@DCAA@AA@BA@@DA@@@AAABC@A@ACCCE@@BAF@DADAD@FBB@JDBBBB@@BBDB@DBB@@B@B@B@D@D@B@H@B@D@BCJAB@B@BBB@@@BD@@BB@@H@@BBB@DB@BBD@B@BDB@DDBBH@LBB@DBFBB@D@B@B@DAD@@AB@D@FBBDH@D@@B@BDDBA@BBDBBB@HABADC@@DB@BF@DAB@D@DCDABABA@ABABA@A@A@ABAHADAFABBBDBA@ABCBCBA@AFC@@@@DBD@BBD@B@B@@AD@BCBA@AA@@A@C@AACAA@AA@AA@A@A@EA@ACA@A@C@@BAAEDAAA@A@@AAE@@@CA@@ABC@A@AACC@@@C@ABAAA@A@@@CCC@@A@@BAB@@@AABAGCCAAC@@A@@A@A@@ABE@ABA@AABABCBABA@@@ABA@AB@B@D@BBB@B@BAD@BAF@D@@BDBBB@@F@F@FAB@BDBB@DB@BDD@B@B@@@FBBABBDBB@B@D@@@@ANBDABBB@BBB@D@BADAFADG@CDCDEB@@CHG@@AAAEBG@ABADA@@BBF@D@D@B@B@@AB@BABG@EBEBC@@AE@A@A@EB@B@BAFADBB@DABA@A@@DCBCA@@AA@ABA@EBE@AAAAA@@AA@BG@AC@AA@AAA"]],"encodeOffsets":[[[110493,27828]],[[111077,27458]]]}}],"UTF8Encoding":true});}));