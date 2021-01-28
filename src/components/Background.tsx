import styled from "styled-components"

type BackgroundProps = {}

// component for generate stars

export const Background: React.FC<BackgroundProps> = ({children}) => {
  return (<BackgroundStyle>
    <ChildrenStyle>{ children }</ChildrenStyle>
  </BackgroundStyle>)

}

const BackgroundStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: #000;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    position: inherit;
  }


  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }

  #stars {
    content: "e";
    background: transparent;
    box-shadow: 1744px 122px #FFF, 134px 1321px #FFF, 92px 859px #FFF, 235px 1045px #FFF, 366px 912px #FFF, 491px 942px #FFF, 14px 1831px #FFF, 582px 476px #FFF, 588px 1230px #FFF, 1520px 1343px #FFF, 1671px 203px #FFF, 550px 341px #FFF, 1491px 549px #FFF, 558px 161px #FFF, 896px 1823px #FFF, 999px 1463px #FFF, 1557px 636px #FFF, 1754px 1307px #FFF, 1682px 1494px #FFF, 703px 1707px #FFF, 1945px 1847px #FFF, 1151px 1320px #FFF, 980px 144px #FFF, 478px 948px #FFF, 109px 1762px #FFF, 558px 255px #FFF, 719px 1820px #FFF, 588px 748px #FFF, 1899px 174px #FFF, 841px 1771px #FFF, 571px 1588px #FFF, 1155px 353px #FFF, 1879px 1220px #FFF, 1782px 870px #FFF, 407px 1238px #FFF, 1141px 63px #FFF, 1147px 1097px #FFF, 1406px 159px #FFF, 637px 1215px #FFF, 694px 1114px #FFF, 1536px 727px #FFF, 1708px 1512px #FFF, 1147px 880px #FFF, 684px 988px #FFF, 140px 851px #FFF, 1565px 1788px #FFF, 1573px 889px #FFF, 1172px 628px #FFF, 1474px 1978px #FFF, 435px 447px #FFF, 185px 1808px #FFF, 620px 1560px #FFF, 1387px 1196px #FFF, 138px 1854px #FFF, 137px 1499px #FFF, 1721px 1132px #FFF, 10px 32px #FFF, 1931px 1990px #FFF, 209px 91px #FFF, 1876px 1795px #FFF, 1130px 1551px #FFF, 284px 1848px #FFF, 389px 1603px #FFF, 612px 1121px #FFF, 825px 1926px #FFF, 161px 344px #FFF, 1729px 333px #FFF, 1037px 37px #FFF, 844px 1085px #FFF, 1179px 554px #FFF, 50px 478px #FFF, 1864px 704px #FFF, 233px 723px #FFF, 1202px 445px #FFF, 882px 189px #FFF, 362px 735px #FFF, 924px 411px #FFF, 902px 209px #FFF, 104px 185px #FFF, 1599px 1852px #FFF, 1974px 944px #FFF, 438px 1164px #FFF, 401px 1533px #FFF, 191px 1429px #FFF, 251px 1034px #FFF, 1807px 1412px #FFF, 72px 23px #FFF, 1752px 1146px #FFF, 261px 1481px #FFF, 548px 33px #FFF, 710px 1204px #FFF, 355px 1697px #FFF, 581px 100px #FFF, 318px 1146px #FFF, 929px 79px #FFF, 999px 347px #FFF, 155px 292px #FFF, 271px 677px #FFF, 920px 1596px #FFF, 1736px 184px #FFF, 1022px 1790px #FFF, 1465px 1762px #FFF, 820px 526px #FFF, 175px 37px #FFF, 440px 746px #FFF, 681px 1879px #FFF, 690px 1135px #FFF, 1960px 1453px #FFF, 422px 856px #FFF, 1217px 1232px #FFF, 1015px 1695px #FFF, 1933px 492px #FFF, 272px 448px #FFF, 1578px 1487px #FFF, 437px 874px #FFF, 947px 838px #FFF, 1339px 867px #FFF, 1484px 773px #FFF, 764px 66px #FFF, 418px 707px #FFF, 192px 1909px #FFF, 1629px 215px #FFF, 171px 260px #FFF, 1180px 220px #FFF, 488px 857px #FFF, 593px 493px #FFF, 1794px 886px #FFF, 1673px 1977px #FFF, 905px 1193px #FFF, 1372px 1843px #FFF, 1605px 908px #FFF, 659px 181px #FFF, 700px 1758px #FFF, 812px 1200px #FFF, 1800px 1440px #FFF, 1858px 212px #FFF, 628px 1026px #FFF, 1825px 1556px #FFF, 1641px 1750px #FFF, 1195px 1086px #FFF, 1465px 558px #FFF, 1634px 436px #FFF, 1354px 1831px #FFF, 1212px 1485px #FFF, 1491px 994px #FFF, 604px 1279px #FFF, 413px 1131px #FFF, 1677px 1086px #FFF, 841px 47px #FFF, 146px 489px #FFF, 117px 1195px #FFF, 67px 47px #FFF, 883px 258px #FFF, 1801px 1294px #FFF, 594px 1870px #FFF, 649px 531px #FFF, 721px 132px #FFF, 975px 1616px #FFF, 716px 94px #FFF, 295px 791px #FFF, 174px 1814px #FFF, 1130px 298px #FFF, 1747px 1835px #FFF, 605px 1521px #FFF, 78px 743px #FFF, 1685px 311px #FFF, 804px 341px #FFF, 1440px 852px #FFF, 1607px 1692px #FFF, 698px 1112px #FFF, 1153px 1608px #FFF, 539px 999px #FFF, 262px 353px #FFF, 457px 1246px #FFF, 1858px 998px #FFF, 364px 431px #FFF, 1907px 912px #FFF, 541px 916px #FFF, 168px 1384px #FFF, 357px 1321px #FFF, 1859px 1866px #FFF, 1001px 909px #FFF, 842px 1663px #FFF, 369px 1176px #FFF, 932px 1372px #FFF, 1606px 732px #FFF, 1844px 857px #FFF, 974px 1588px #FFF, 804px 1139px #FFF, 65px 1213px #FFF, 1066px 863px #FFF, 1991px 1734px #FFF, 300px 738px #FFF, 1260px 1141px #FFF, 83px 260px #FFF, 1219px 167px #FFF, 613px 990px #FFF, 873px 81px #FFF, 362px 235px #FFF, 373px 372px #FFF, 80px 247px #FFF, 902px 1141px #FFF, 294px 464px #FFF, 766px 1925px #FFF, 1151px 1305px #FFF, 1250px 1593px #FFF, 1289px 119px #FFF, 1525px 1505px #FFF, 234px 1306px #FFF, 571px 858px #FFF, 571px 996px #FFF, 766px 1342px #FFF, 1371px 716px #FFF, 711px 1939px #FFF, 904px 1797px #FFF, 424px 1710px #FFF, 762px 1614px #FFF, 1389px 1290px #FFF, 905px 689px #FFF, 352px 38px #FFF, 2000px 1317px #FFF, 597px 864px #FFF, 824px 711px #FFF, 966px 1060px #FFF, 958px 992px #FFF, 1121px 324px #FFF, 1624px 688px #FFF, 1737px 702px #FFF, 1566px 1344px #FFF, 697px 368px #FFF, 291px 1126px #FFF, 1732px 50px #FFF, 712px 1941px #FFF, 1257px 372px #FFF, 317px 1462px #FFF, 222px 309px #FFF, 1139px 647px #FFF, 170px 878px #FFF, 1272px 1511px #FFF, 1009px 1912px #FFF, 1875px 1105px #FFF, 1968px 1370px #FFF, 1193px 687px #FFF, 1498px 611px #FFF, 247px 1993px #FFF, 1686px 1611px #FFF, 937px 340px #FFF, 114px 1423px #FFF, 496px 1191px #FFF, 110px 1284px #FFF, 876px 687px #FFF, 1173px 214px #FFF, 210px 628px #FFF, 302px 1173px #FFF, 1318px 939px #FFF, 1665px 1310px #FFF, 66px 338px #FFF, 1355px 615px #FFF, 1139px 1672px #FFF, 91px 1000px #FFF, 112px 422px #FFF, 89px 503px #FFF, 97px 1599px #FFF, 1031px 1955px #FFF, 1755px 1532px #FFF, 1764px 1930px #FFF, 1822px 1751px #FFF, 133px 401px #FFF, 718px 85px #FFF, 1797px 78px #FFF, 520px 1725px #FFF, 226px 406px #FFF, 1561px 1574px #FFF, 340px 1602px #FFF, 718px 976px #FFF, 1823px 570px #FFF, 1298px 484px #FFF, 1023px 1903px #FFF, 1266px 1334px #FFF, 763px 877px #FFF, 223px 631px #FFF, 1761px 1293px #FFF, 878px 1px #FFF, 973px 696px #FFF, 975px 1841px #FFF, 1276px 302px #FFF, 1399px 1324px #FFF, 1706px 872px #FFF, 341px 1960px #FFF, 1384px 1655px #FFF, 1897px 767px #FFF, 68px 405px #FFF, 705px 310px #FFF, 194px 103px #FFF, 1432px 368px #FFF, 1262px 1682px #FFF, 1933px 1526px #FFF, 263px 655px #FFF, 1031px 1031px #FFF, 1557px 788px #FFF, 1558px 1360px #FFF, 812px 421px #FFF, 1951px 734px #FFF, 1567px 498px #FFF, 1832px 1229px #FFF, 913px 164px #FFF, 1907px 1273px #FFF, 533px 749px #FFF, 1235px 951px #FFF, 645px 1959px #FFF, 92px 1570px #FFF, 1169px 1434px #FFF, 118px 1223px #FFF, 583px 957px #FFF, 1245px 316px #FFF, 527px 863px #FFF, 372px 1007px #FFF, 244px 1251px #FFF, 314px 494px #FFF, 1842px 1463px #FFF, 1315px 730px #FFF, 1655px 1366px #FFF, 482px 979px #FFF, 340px 1808px #FFF, 256px 578px #FFF, 858px 1792px #FFF, 1965px 403px #FFF, 454px 253px #FFF, 1664px 698px #FFF, 1974px 750px #FFF, 262px 1801px #FFF, 1652px 1076px #FFF, 992px 711px #FFF, 1792px 1323px #FFF, 700px 1748px #FFF, 855px 966px #FFF, 1833px 1747px #FFF, 402px 1272px #FFF, 1391px 1039px #FFF, 1395px 1538px #FFF, 397px 1972px #FFF, 744px 1403px #FFF, 1784px 1046px #FFF, 111px 198px #FFF, 1827px 473px #FFF, 1347px 1891px #FFF, 1238px 1081px #FFF, 189px 908px #FFF, 1513px 542px #FFF, 673px 981px #FFF, 720px 1184px #FFF, 373px 792px #FFF, 1470px 1631px #FFF, 16px 822px #FFF, 1935px 829px #FFF, 364px 613px #FFF, 223px 899px #FFF, 1233px 874px #FFF, 1441px 1834px #FFF, 719px 894px #FFF, 76px 1610px #FFF, 296px 685px #FFF, 572px 1637px #FFF, 349px 114px #FFF, 1670px 1802px #FFF, 979px 928px #FFF, 1589px 574px #FFF, 756px 194px #FFF, 616px 507px #FFF, 271px 186px #FFF, 198px 360px #FFF, 1916px 418px #FFF, 721px 667px #FFF, 1937px 1908px #FFF, 17px 556px #FFF, 345px 443px #FFF, 718px 760px #FFF, 1922px 310px #FFF, 1185px 887px #FFF, 1745px 1848px #FFF, 909px 847px #FFF, 1170px 134px #FFF, 1773px 1133px #FFF, 1099px 233px #FFF, 1122px 1524px #FFF, 866px 907px #FFF, 398px 213px #FFF, 1287px 886px #FFF, 1194px 149px #FFF, 1876px 1667px #FFF, 332px 1658px #FFF, 146px 1253px #FFF, 958px 211px #FFF, 643px 47px #FFF, 1213px 1339px #FFF, 1637px 1939px #FFF, 1601px 355px #FFF, 256px 1982px #FFF, 989px 1609px #FFF, 1179px 701px #FFF, 685px 1463px #FFF, 1910px 465px #FFF, 764px 1930px #FFF, 1856px 433px #FFF, 720px 367px #FFF, 1821px 416px #FFF, 48px 1114px #FFF, 716px 489px #FFF, 174px 1972px #FFF, 115px 1373px #FFF, 1487px 141px #FFF, 1919px 1362px #FFF, 1662px 859px #FFF, 1168px 490px #FFF, 706px 1820px #FFF, 588px 318px #FFF, 107px 778px #FFF, 621px 1667px #FFF, 1331px 1996px #FFF, 1404px 1154px #FFF, 860px 1019px #FFF, 1385px 1883px #FFF, 1066px 1951px #FFF, 752px 444px #FFF, 955px 1031px #FFF, 1256px 1899px #FFF, 961px 1455px #FFF, 1101px 84px #FFF, 890px 335px #FFF, 798px 40px #FFF, 138px 54px #FFF, 1934px 252px #FFF, 429px 324px #FFF, 1645px 1522px #FFF, 218px 737px #FFF, 1625px 531px #FFF, 605px 1290px #FFF, 1867px 648px #FFF, 82px 1137px #FFF, 231px 1423px #FFF, 471px 944px #FFF, 1363px 1752px #FFF, 482px 1364px #FFF, 1305px 627px #FFF, 1065px 891px #FFF, 217px 1841px #FFF, 1843px 1501px #FFF, 1681px 734px #FFF, 185px 856px #FFF, 609px 1094px #FFF, 49px 1657px #FFF, 783px 594px #FFF, 1018px 1123px #FFF, 644px 1149px #FFF, 739px 1262px #FFF, 1439px 1187px #FFF, 1789px 1507px #FFF, 941px 791px #FFF, 1319px 1308px #FFF, 498px 626px #FFF, 1594px 858px #FFF, 783px 71px #FFF, 576px 1976px #FFF, 1625px 696px #FFF, 1821px 352px #FFF, 1039px 885px #FFF, 208px 430px #FFF, 124px 198px #FFF, 1964px 686px #FFF, 1440px 1952px #FFF, 231px 1435px #FFF, 1846px 853px #FFF, 1174px 536px #FFF, 1228px 310px #FFF, 1380px 699px #FFF, 1116px 169px #FFF, 1416px 1007px #FFF, 178px 192px #FFF, 1302px 1903px #FFF, 1892px 154px #FFF, 962px 1032px #FFF, 1009px 1916px #FFF, 1549px 1206px #FFF, 899px 968px #FFF, 902px 543px #FFF, 1516px 542px #FFF, 965px 527px #FFF, 1594px 696px #FFF, 856px 1719px #FFF, 1522px 248px #FFF, 1795px 283px #FFF, 1144px 946px #FFF, 1365px 199px #FFF, 359px 1347px #FFF, 1506px 263px #FFF, 433px 1793px #FFF, 201px 247px #FFF, 942px 838px #FFF, 1122px 1065px #FFF, 1997px 108px #FFF, 306px 989px #FFF, 641px 1713px #FFF, 1072px 959px #FFF, 1874px 1079px #FFF, 1938px 269px #FFF, 891px 389px #FFF, 22px 574px #FFF, 727px 474px #FFF, 1671px 1649px #FFF, 98px 400px #FFF, 641px 798px #FFF, 1218px 1051px #FFF, 907px 1485px #FFF, 1002px 1549px #FFF, 1932px 1448px #FFF, 1132px 573px #FFF, 1222px 1147px #FFF, 1009px 451px #FFF, 698px 1940px #FFF, 97px 1123px #FFF, 904px 751px #FFF, 1904px 593px #FFF, 1451px 1658px #FFF, 191px 1606px #FFF, 1346px 482px #FFF, 1935px 1086px #FFF, 1052px 224px #FFF, 526px 1810px #FFF, 1607px 606px #FFF, 427px 1830px #FFF, 1546px 407px #FFF, 1771px 208px #FFF, 1714px 181px #FFF, 1332px 943px #FFF, 1663px 1094px #FFF, 1861px 1747px #FFF, 1429px 1217px #FFF, 1733px 1915px #FFF, 925px 1179px #FFF, 735px 781px #FFF, 1775px 1989px #FFF, 1770px 476px #FFF, 844px 400px #FFF, 1793px 1517px #FFF, 544px 281px #FFF, 725px 344px #FFF, 1274px 764px #FFF, 1845px 339px #FFF, 582px 1745px #FFF, 351px 1287px #FFF, 207px 749px #FFF, 1063px 1411px #FFF, 1246px 342px #FFF, 1538px 166px #FFF, 770px 602px #FFF, 1214px 1971px #FFF, 113px 294px #FFF, 1157px 101px #FFF, 1657px 517px #FFF, 637px 1693px #FFF, 961px 1649px #FFF, 1754px 1572px #FFF, 1885px 659px #FFF, 238px 34px #FFF, 413px 1027px #FFF, 1709px 1556px #FFF, 460px 878px #FFF, 1597px 608px #FFF, 544px 434px #FFF, 1258px 477px #FFF, 565px 1863px #FFF, 426px 322px #FFF, 1917px 850px #FFF, 296px 144px #FFF, 643px 1896px #FFF, 511px 116px #FFF, 359px 847px #FFF, 702px 1133px #FFF, 857px 1371px #FFF, 559px 1758px #FFF, 1615px 1223px #FFF, 1927px 1736px #FFF, 704px 941px #FFF, 1932px 942px #FFF, 1462px 335px #FFF, 154px 1915px #FFF, 1387px 918px #FFF, 1512px 1041px #FFF, 1094px 1334px #FFF, 1678px 865px #FFF, 1960px 431px #FFF, 666px 1258px #FFF, 422px 1215px #FFF, 345px 802px #FFF, 1207px 647px #FFF, 1701px 374px #FFF, 1440px 1925px #FFF, 1536px 1163px #FFF, 905px 155px #FFF, 843px 1036px #FFF, 660px 823px #FFF, 1329px 661px #FFF, 1867px 899px #FFF, 1022px 514px #FFF, 1062px 1570px #FFF, 888px 1786px #FFF, 699px 1738px #FFF, 1831px 1712px #FFF, 434px 18px #FFF, 227px 205px #FFF, 520px 1279px #FFF, 1329px 764px #FFF, 1824px 47px #FFF, 112px 266px #FFF, 830px 1140px #FFF, 478px 637px #FFF, 634px 850px #FFF, 711px 873px #FFF, 987px 249px #FFF, 1454px 909px #FFF, 699px 922px #FFF, 1458px 1142px #FFF, 701px 1893px #FFF, 134px 384px #FFF, 904px 354px #FFF, 1913px 1229px #FFF, 1606px 1336px #FFF, 976px 1776px #FFF, 1726px 605px #FFF, 1244px 590px #FFF, 1351px 526px #FFF, 1997px 130px #FFF, 1137px 1134px #FFF, 1293px 283px #FFF, 977px 1608px #FFF, 422px 1252px #FFF, 236px 1653px #FFF, 28px 1722px #FFF, 698px 39px #FFF, 5px 434px #FFF, 1430px 1466px #FFF, 1470px 1596px #FFF, 487px 81px #FFF, 186px 340px #FFF, 1941px 1px #FFF, 1342px 487px #FFF, 813px 1855px #FFF, 1445px 148px #FFF, 1965px 1428px #FFF, 1122px 1277px #FFF, 846px 820px #FFF, 1804px 228px #FFF, 1501px 121px #FFF, 215px 1033px #FFF, 244px 426px #FFF, 976px 453px #FFF, 566px 953px #FFF, 1772px 213px #FFF, 1323px 1778px #FFF, 1350px 817px #FFF, 803px 913px #FFF, 1395px 1359px #FFF, 1995px 119px #FFF, 579px 1963px #FFF, 862px 1621px #FFF, 1718px 825px #FFF, 823px 27px #FFF, 1252px 41px #FFF, 1562px 835px #FFF, 1730px 633px #FFF, 1723px 1939px #FFF, 524px 1824px #FFF, 1921px 1450px #FFF, 1174px 1062px #FFF, 1008px 1932px #FFF, 467px 334px #FFF, 80px 818px #FFF, 1266px 1185px #FFF, 1589px 807px #FFF, 1221px 320px #FFF, 1724px 852px #FFF, 1194px 286px #FFF, 800px 1835px #FFF, 1958px 728px #FFF, 1271px 376px #FFF, 43px 1654px #FFF, 77px 803px #FFF, 1399px 197px #FFF, 591px 1743px #FFF, 652px 1925px #FFF, 107px 1939px #FFF, 1110px 1708px #FFF, 797px 1480px #FFF, 1516px 684px #FFF, 559px 1733px #FFF, 1265px 718px #FFF, 1263px 54px #FFF, 693px 113px #FFF, 1456px 1459px #FFF, 1527px 1324px #FFF;
    animation: animStar 50s linear infinite;
  }

  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1744px 122px #FFF, 134px 1321px #FFF, 92px 859px #FFF, 235px 1045px #FFF, 366px 912px #FFF, 491px 942px #FFF, 14px 1831px #FFF, 582px 476px #FFF, 588px 1230px #FFF, 1520px 1343px #FFF, 1671px 203px #FFF, 550px 341px #FFF, 1491px 549px #FFF, 558px 161px #FFF, 896px 1823px #FFF, 999px 1463px #FFF, 1557px 636px #FFF, 1754px 1307px #FFF, 1682px 1494px #FFF, 703px 1707px #FFF, 1945px 1847px #FFF, 1151px 1320px #FFF, 980px 144px #FFF, 478px 948px #FFF, 109px 1762px #FFF, 558px 255px #FFF, 719px 1820px #FFF, 588px 748px #FFF, 1899px 174px #FFF, 841px 1771px #FFF, 571px 1588px #FFF, 1155px 353px #FFF, 1879px 1220px #FFF, 1782px 870px #FFF, 407px 1238px #FFF, 1141px 63px #FFF, 1147px 1097px #FFF, 1406px 159px #FFF, 637px 1215px #FFF, 694px 1114px #FFF, 1536px 727px #FFF, 1708px 1512px #FFF, 1147px 880px #FFF, 684px 988px #FFF, 140px 851px #FFF, 1565px 1788px #FFF, 1573px 889px #FFF, 1172px 628px #FFF, 1474px 1978px #FFF, 435px 447px #FFF, 185px 1808px #FFF, 620px 1560px #FFF, 1387px 1196px #FFF, 138px 1854px #FFF, 137px 1499px #FFF, 1721px 1132px #FFF, 10px 32px #FFF, 1931px 1990px #FFF, 209px 91px #FFF, 1876px 1795px #FFF, 1130px 1551px #FFF, 284px 1848px #FFF, 389px 1603px #FFF, 612px 1121px #FFF, 825px 1926px #FFF, 161px 344px #FFF, 1729px 333px #FFF, 1037px 37px #FFF, 844px 1085px #FFF, 1179px 554px #FFF, 50px 478px #FFF, 1864px 704px #FFF, 233px 723px #FFF, 1202px 445px #FFF, 882px 189px #FFF, 362px 735px #FFF, 924px 411px #FFF, 902px 209px #FFF, 104px 185px #FFF, 1599px 1852px #FFF, 1974px 944px #FFF, 438px 1164px #FFF, 401px 1533px #FFF, 191px 1429px #FFF, 251px 1034px #FFF, 1807px 1412px #FFF, 72px 23px #FFF, 1752px 1146px #FFF, 261px 1481px #FFF, 548px 33px #FFF, 710px 1204px #FFF, 355px 1697px #FFF, 581px 100px #FFF, 318px 1146px #FFF, 929px 79px #FFF, 999px 347px #FFF, 155px 292px #FFF, 271px 677px #FFF, 920px 1596px #FFF, 1736px 184px #FFF, 1022px 1790px #FFF, 1465px 1762px #FFF, 820px 526px #FFF, 175px 37px #FFF, 440px 746px #FFF, 681px 1879px #FFF, 690px 1135px #FFF, 1960px 1453px #FFF, 422px 856px #FFF, 1217px 1232px #FFF, 1015px 1695px #FFF, 1933px 492px #FFF, 272px 448px #FFF, 1578px 1487px #FFF, 437px 874px #FFF, 947px 838px #FFF, 1339px 867px #FFF, 1484px 773px #FFF, 764px 66px #FFF, 418px 707px #FFF, 192px 1909px #FFF, 1629px 215px #FFF, 171px 260px #FFF, 1180px 220px #FFF, 488px 857px #FFF, 593px 493px #FFF, 1794px 886px #FFF, 1673px 1977px #FFF, 905px 1193px #FFF, 1372px 1843px #FFF, 1605px 908px #FFF, 659px 181px #FFF, 700px 1758px #FFF, 812px 1200px #FFF, 1800px 1440px #FFF, 1858px 212px #FFF, 628px 1026px #FFF, 1825px 1556px #FFF, 1641px 1750px #FFF, 1195px 1086px #FFF, 1465px 558px #FFF, 1634px 436px #FFF, 1354px 1831px #FFF, 1212px 1485px #FFF, 1491px 994px #FFF, 604px 1279px #FFF, 413px 1131px #FFF, 1677px 1086px #FFF, 841px 47px #FFF, 146px 489px #FFF, 117px 1195px #FFF, 67px 47px #FFF, 883px 258px #FFF, 1801px 1294px #FFF, 594px 1870px #FFF, 649px 531px #FFF, 721px 132px #FFF, 975px 1616px #FFF, 716px 94px #FFF, 295px 791px #FFF, 174px 1814px #FFF, 1130px 298px #FFF, 1747px 1835px #FFF, 605px 1521px #FFF, 78px 743px #FFF, 1685px 311px #FFF, 804px 341px #FFF, 1440px 852px #FFF, 1607px 1692px #FFF, 698px 1112px #FFF, 1153px 1608px #FFF, 539px 999px #FFF, 262px 353px #FFF, 457px 1246px #FFF, 1858px 998px #FFF, 364px 431px #FFF, 1907px 912px #FFF, 541px 916px #FFF, 168px 1384px #FFF, 357px 1321px #FFF, 1859px 1866px #FFF, 1001px 909px #FFF, 842px 1663px #FFF, 369px 1176px #FFF, 932px 1372px #FFF, 1606px 732px #FFF, 1844px 857px #FFF, 974px 1588px #FFF, 804px 1139px #FFF, 65px 1213px #FFF, 1066px 863px #FFF, 1991px 1734px #FFF, 300px 738px #FFF, 1260px 1141px #FFF, 83px 260px #FFF, 1219px 167px #FFF, 613px 990px #FFF, 873px 81px #FFF, 362px 235px #FFF, 373px 372px #FFF, 80px 247px #FFF, 902px 1141px #FFF, 294px 464px #FFF, 766px 1925px #FFF, 1151px 1305px #FFF, 1250px 1593px #FFF, 1289px 119px #FFF, 1525px 1505px #FFF, 234px 1306px #FFF, 571px 858px #FFF, 571px 996px #FFF, 766px 1342px #FFF, 1371px 716px #FFF, 711px 1939px #FFF, 904px 1797px #FFF, 424px 1710px #FFF, 762px 1614px #FFF, 1389px 1290px #FFF, 905px 689px #FFF, 352px 38px #FFF, 2000px 1317px #FFF, 597px 864px #FFF, 824px 711px #FFF, 966px 1060px #FFF, 958px 992px #FFF, 1121px 324px #FFF, 1624px 688px #FFF, 1737px 702px #FFF, 1566px 1344px #FFF, 697px 368px #FFF, 291px 1126px #FFF, 1732px 50px #FFF, 712px 1941px #FFF, 1257px 372px #FFF, 317px 1462px #FFF, 222px 309px #FFF, 1139px 647px #FFF, 170px 878px #FFF, 1272px 1511px #FFF, 1009px 1912px #FFF, 1875px 1105px #FFF, 1968px 1370px #FFF, 1193px 687px #FFF, 1498px 611px #FFF, 247px 1993px #FFF, 1686px 1611px #FFF, 937px 340px #FFF, 114px 1423px #FFF, 496px 1191px #FFF, 110px 1284px #FFF, 876px 687px #FFF, 1173px 214px #FFF, 210px 628px #FFF, 302px 1173px #FFF, 1318px 939px #FFF, 1665px 1310px #FFF, 66px 338px #FFF, 1355px 615px #FFF, 1139px 1672px #FFF, 91px 1000px #FFF, 112px 422px #FFF, 89px 503px #FFF, 97px 1599px #FFF, 1031px 1955px #FFF, 1755px 1532px #FFF, 1764px 1930px #FFF, 1822px 1751px #FFF, 133px 401px #FFF, 718px 85px #FFF, 1797px 78px #FFF, 520px 1725px #FFF, 226px 406px #FFF, 1561px 1574px #FFF, 340px 1602px #FFF, 718px 976px #FFF, 1823px 570px #FFF, 1298px 484px #FFF, 1023px 1903px #FFF, 1266px 1334px #FFF, 763px 877px #FFF, 223px 631px #FFF, 1761px 1293px #FFF, 878px 1px #FFF, 973px 696px #FFF, 975px 1841px #FFF, 1276px 302px #FFF, 1399px 1324px #FFF, 1706px 872px #FFF, 341px 1960px #FFF, 1384px 1655px #FFF, 1897px 767px #FFF, 68px 405px #FFF, 705px 310px #FFF, 194px 103px #FFF, 1432px 368px #FFF, 1262px 1682px #FFF, 1933px 1526px #FFF, 263px 655px #FFF, 1031px 1031px #FFF, 1557px 788px #FFF, 1558px 1360px #FFF, 812px 421px #FFF, 1951px 734px #FFF, 1567px 498px #FFF, 1832px 1229px #FFF, 913px 164px #FFF, 1907px 1273px #FFF, 533px 749px #FFF, 1235px 951px #FFF, 645px 1959px #FFF, 92px 1570px #FFF, 1169px 1434px #FFF, 118px 1223px #FFF, 583px 957px #FFF, 1245px 316px #FFF, 527px 863px #FFF, 372px 1007px #FFF, 244px 1251px #FFF, 314px 494px #FFF, 1842px 1463px #FFF, 1315px 730px #FFF, 1655px 1366px #FFF, 482px 979px #FFF, 340px 1808px #FFF, 256px 578px #FFF, 858px 1792px #FFF, 1965px 403px #FFF, 454px 253px #FFF, 1664px 698px #FFF, 1974px 750px #FFF, 262px 1801px #FFF, 1652px 1076px #FFF, 992px 711px #FFF, 1792px 1323px #FFF, 700px 1748px #FFF, 855px 966px #FFF, 1833px 1747px #FFF, 402px 1272px #FFF, 1391px 1039px #FFF, 1395px 1538px #FFF, 397px 1972px #FFF, 744px 1403px #FFF, 1784px 1046px #FFF, 111px 198px #FFF, 1827px 473px #FFF, 1347px 1891px #FFF, 1238px 1081px #FFF, 189px 908px #FFF, 1513px 542px #FFF, 673px 981px #FFF, 720px 1184px #FFF, 373px 792px #FFF, 1470px 1631px #FFF, 16px 822px #FFF, 1935px 829px #FFF, 364px 613px #FFF, 223px 899px #FFF, 1233px 874px #FFF, 1441px 1834px #FFF, 719px 894px #FFF, 76px 1610px #FFF, 296px 685px #FFF, 572px 1637px #FFF, 349px 114px #FFF, 1670px 1802px #FFF, 979px 928px #FFF, 1589px 574px #FFF, 756px 194px #FFF, 616px 507px #FFF, 271px 186px #FFF, 198px 360px #FFF, 1916px 418px #FFF, 721px 667px #FFF, 1937px 1908px #FFF, 17px 556px #FFF, 345px 443px #FFF, 718px 760px #FFF, 1922px 310px #FFF, 1185px 887px #FFF, 1745px 1848px #FFF, 909px 847px #FFF, 1170px 134px #FFF, 1773px 1133px #FFF, 1099px 233px #FFF, 1122px 1524px #FFF, 866px 907px #FFF, 398px 213px #FFF, 1287px 886px #FFF, 1194px 149px #FFF, 1876px 1667px #FFF, 332px 1658px #FFF, 146px 1253px #FFF, 958px 211px #FFF, 643px 47px #FFF, 1213px 1339px #FFF, 1637px 1939px #FFF, 1601px 355px #FFF, 256px 1982px #FFF, 989px 1609px #FFF, 1179px 701px #FFF, 685px 1463px #FFF, 1910px 465px #FFF, 764px 1930px #FFF, 1856px 433px #FFF, 720px 367px #FFF, 1821px 416px #FFF, 48px 1114px #FFF, 716px 489px #FFF, 174px 1972px #FFF, 115px 1373px #FFF, 1487px 141px #FFF, 1919px 1362px #FFF, 1662px 859px #FFF, 1168px 490px #FFF, 706px 1820px #FFF, 588px 318px #FFF, 107px 778px #FFF, 621px 1667px #FFF, 1331px 1996px #FFF, 1404px 1154px #FFF, 860px 1019px #FFF, 1385px 1883px #FFF, 1066px 1951px #FFF, 752px 444px #FFF, 955px 1031px #FFF, 1256px 1899px #FFF, 961px 1455px #FFF, 1101px 84px #FFF, 890px 335px #FFF, 798px 40px #FFF, 138px 54px #FFF, 1934px 252px #FFF, 429px 324px #FFF, 1645px 1522px #FFF, 218px 737px #FFF, 1625px 531px #FFF, 605px 1290px #FFF, 1867px 648px #FFF, 82px 1137px #FFF, 231px 1423px #FFF, 471px 944px #FFF, 1363px 1752px #FFF, 482px 1364px #FFF, 1305px 627px #FFF, 1065px 891px #FFF, 217px 1841px #FFF, 1843px 1501px #FFF, 1681px 734px #FFF, 185px 856px #FFF, 609px 1094px #FFF, 49px 1657px #FFF, 783px 594px #FFF, 1018px 1123px #FFF, 644px 1149px #FFF, 739px 1262px #FFF, 1439px 1187px #FFF, 1789px 1507px #FFF, 941px 791px #FFF, 1319px 1308px #FFF, 498px 626px #FFF, 1594px 858px #FFF, 783px 71px #FFF, 576px 1976px #FFF, 1625px 696px #FFF, 1821px 352px #FFF, 1039px 885px #FFF, 208px 430px #FFF, 124px 198px #FFF, 1964px 686px #FFF, 1440px 1952px #FFF, 231px 1435px #FFF, 1846px 853px #FFF, 1174px 536px #FFF, 1228px 310px #FFF, 1380px 699px #FFF, 1116px 169px #FFF, 1416px 1007px #FFF, 178px 192px #FFF, 1302px 1903px #FFF, 1892px 154px #FFF, 962px 1032px #FFF, 1009px 1916px #FFF, 1549px 1206px #FFF, 899px 968px #FFF, 902px 543px #FFF, 1516px 542px #FFF, 965px 527px #FFF, 1594px 696px #FFF, 856px 1719px #FFF, 1522px 248px #FFF, 1795px 283px #FFF, 1144px 946px #FFF, 1365px 199px #FFF, 359px 1347px #FFF, 1506px 263px #FFF, 433px 1793px #FFF, 201px 247px #FFF, 942px 838px #FFF, 1122px 1065px #FFF, 1997px 108px #FFF, 306px 989px #FFF, 641px 1713px #FFF, 1072px 959px #FFF, 1874px 1079px #FFF, 1938px 269px #FFF, 891px 389px #FFF, 22px 574px #FFF, 727px 474px #FFF, 1671px 1649px #FFF, 98px 400px #FFF, 641px 798px #FFF, 1218px 1051px #FFF, 907px 1485px #FFF, 1002px 1549px #FFF, 1932px 1448px #FFF, 1132px 573px #FFF, 1222px 1147px #FFF, 1009px 451px #FFF, 698px 1940px #FFF, 97px 1123px #FFF, 904px 751px #FFF, 1904px 593px #FFF, 1451px 1658px #FFF, 191px 1606px #FFF, 1346px 482px #FFF, 1935px 1086px #FFF, 1052px 224px #FFF, 526px 1810px #FFF, 1607px 606px #FFF, 427px 1830px #FFF, 1546px 407px #FFF, 1771px 208px #FFF, 1714px 181px #FFF, 1332px 943px #FFF, 1663px 1094px #FFF, 1861px 1747px #FFF, 1429px 1217px #FFF, 1733px 1915px #FFF, 925px 1179px #FFF, 735px 781px #FFF, 1775px 1989px #FFF, 1770px 476px #FFF, 844px 400px #FFF, 1793px 1517px #FFF, 544px 281px #FFF, 725px 344px #FFF, 1274px 764px #FFF, 1845px 339px #FFF, 582px 1745px #FFF, 351px 1287px #FFF, 207px 749px #FFF, 1063px 1411px #FFF, 1246px 342px #FFF, 1538px 166px #FFF, 770px 602px #FFF, 1214px 1971px #FFF, 113px 294px #FFF, 1157px 101px #FFF, 1657px 517px #FFF, 637px 1693px #FFF, 961px 1649px #FFF, 1754px 1572px #FFF, 1885px 659px #FFF, 238px 34px #FFF, 413px 1027px #FFF, 1709px 1556px #FFF, 460px 878px #FFF, 1597px 608px #FFF, 544px 434px #FFF, 1258px 477px #FFF, 565px 1863px #FFF, 426px 322px #FFF, 1917px 850px #FFF, 296px 144px #FFF, 643px 1896px #FFF, 511px 116px #FFF, 359px 847px #FFF, 702px 1133px #FFF, 857px 1371px #FFF, 559px 1758px #FFF, 1615px 1223px #FFF, 1927px 1736px #FFF, 704px 941px #FFF, 1932px 942px #FFF, 1462px 335px #FFF, 154px 1915px #FFF, 1387px 918px #FFF, 1512px 1041px #FFF, 1094px 1334px #FFF, 1678px 865px #FFF, 1960px 431px #FFF, 666px 1258px #FFF, 422px 1215px #FFF, 345px 802px #FFF, 1207px 647px #FFF, 1701px 374px #FFF, 1440px 1925px #FFF, 1536px 1163px #FFF, 905px 155px #FFF, 843px 1036px #FFF, 660px 823px #FFF, 1329px 661px #FFF, 1867px 899px #FFF, 1022px 514px #FFF, 1062px 1570px #FFF, 888px 1786px #FFF, 699px 1738px #FFF, 1831px 1712px #FFF, 434px 18px #FFF, 227px 205px #FFF, 520px 1279px #FFF, 1329px 764px #FFF, 1824px 47px #FFF, 112px 266px #FFF, 830px 1140px #FFF, 478px 637px #FFF, 634px 850px #FFF, 711px 873px #FFF, 987px 249px #FFF, 1454px 909px #FFF, 699px 922px #FFF, 1458px 1142px #FFF, 701px 1893px #FFF, 134px 384px #FFF, 904px 354px #FFF, 1913px 1229px #FFF, 1606px 1336px #FFF, 976px 1776px #FFF, 1726px 605px #FFF, 1244px 590px #FFF, 1351px 526px #FFF, 1997px 130px #FFF, 1137px 1134px #FFF, 1293px 283px #FFF, 977px 1608px #FFF, 422px 1252px #FFF, 236px 1653px #FFF, 28px 1722px #FFF, 698px 39px #FFF, 5px 434px #FFF, 1430px 1466px #FFF, 1470px 1596px #FFF, 487px 81px #FFF, 186px 340px #FFF, 1941px 1px #FFF, 1342px 487px #FFF, 813px 1855px #FFF, 1445px 148px #FFF, 1965px 1428px #FFF, 1122px 1277px #FFF, 846px 820px #FFF, 1804px 228px #FFF, 1501px 121px #FFF, 215px 1033px #FFF, 244px 426px #FFF, 976px 453px #FFF, 566px 953px #FFF, 1772px 213px #FFF, 1323px 1778px #FFF, 1350px 817px #FFF, 803px 913px #FFF, 1395px 1359px #FFF, 1995px 119px #FFF, 579px 1963px #FFF, 862px 1621px #FFF, 1718px 825px #FFF, 823px 27px #FFF, 1252px 41px #FFF, 1562px 835px #FFF, 1730px 633px #FFF, 1723px 1939px #FFF, 524px 1824px #FFF, 1921px 1450px #FFF, 1174px 1062px #FFF, 1008px 1932px #FFF, 467px 334px #FFF, 80px 818px #FFF, 1266px 1185px #FFF, 1589px 807px #FFF, 1221px 320px #FFF, 1724px 852px #FFF, 1194px 286px #FFF, 800px 1835px #FFF, 1958px 728px #FFF, 1271px 376px #FFF, 43px 1654px #FFF, 77px 803px #FFF, 1399px 197px #FFF, 591px 1743px #FFF, 652px 1925px #FFF, 107px 1939px #FFF, 1110px 1708px #FFF, 797px 1480px #FFF, 1516px 684px #FFF, 559px 1733px #FFF, 1265px 718px #FFF, 1263px 54px #FFF, 693px 113px #FFF, 1456px 1459px #FFF, 1527px 1324px #FFF;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1907px 1575px #FFF, 893px 268px #FFF, 1819px 666px #FFF, 366px 1985px #FFF, 1736px 1062px #FFF, 1124px 45px #FFF, 905px 1674px #FFF, 1570px 711px #FFF, 255px 1747px #FFF, 147px 1032px #FFF, 865px 1813px #FFF, 1721px 1461px #FFF, 202px 724px #FFF, 1860px 812px #FFF, 634px 1410px #FFF, 927px 1264px #FFF, 1648px 620px #FFF, 1915px 1309px #FFF, 731px 778px #FFF, 91px 1185px #FFF, 829px 1003px #FFF, 174px 1784px #FFF, 1094px 1874px #FFF, 1464px 484px #FFF, 1639px 1717px #FFF, 959px 573px #FFF, 1686px 1287px #FFF, 906px 356px #FFF, 970px 499px #FFF, 626px 890px #FFF, 1344px 1070px #FFF, 1351px 544px #FFF, 708px 68px #FFF, 1870px 130px #FFF, 556px 1270px #FFF, 1432px 618px #FFF, 769px 673px #FFF, 1289px 1410px #FFF, 1499px 1969px #FFF, 749px 1163px #FFF, 1198px 198px #FFF, 399px 133px #FFF, 1856px 1280px #FFF, 904px 194px #FFF, 973px 1107px #FFF, 1371px 1785px #FFF, 989px 1835px #FFF, 1043px 1517px #FFF, 787px 916px #FFF, 1635px 1155px #FFF, 752px 524px #FFF, 1926px 1279px #FFF, 1052px 1163px #FFF, 719px 1963px #FFF, 786px 519px #FFF, 1440px 500px #FFF, 156px 1265px #FFF, 1691px 429px #FFF, 1349px 1474px #FFF, 736px 459px #FFF, 248px 1678px #FFF, 1136px 510px #FFF, 1317px 10px #FFF, 1209px 1323px #FFF, 54px 469px #FFF, 730px 1939px #FFF, 960px 23px #FFF, 112px 941px #FFF, 1852px 1522px #FFF, 1993px 1972px #FFF, 265px 129px #FFF, 222px 1897px #FFF, 1766px 1804px #FFF, 1530px 1786px #FFF, 1045px 432px #FFF, 1916px 1980px #FFF, 309px 1780px #FFF, 1420px 559px #FFF, 1708px 103px #FFF, 324px 1407px #FFF, 1175px 943px #FFF, 80px 1221px #FFF, 1016px 1933px #FFF, 318px 560px #FFF, 190px 1489px #FFF, 1095px 892px #FFF, 1975px 1191px #FFF, 1197px 955px #FFF, 1482px 873px #FFF, 1912px 300px #FFF, 2000px 1636px #FFF, 1473px 1808px #FFF, 507px 192px #FFF, 924px 1300px #FFF, 1485px 1636px #FFF, 41px 1822px #FFF, 689px 120px #FFF, 769px 273px #FFF, 1039px 976px #FFF, 1057px 1520px #FFF, 1417px 1187px #FFF, 512px 1507px #FFF, 519px 45px #FFF, 1207px 1687px #FFF, 1824px 1488px #FFF, 1694px 31px #FFF, 1859px 52px #FFF, 1368px 268px #FFF, 190px 1404px #FFF, 940px 1003px #FFF, 167px 942px #FFF, 1641px 647px #FFF, 1051px 654px #FFF, 233px 1640px #FFF, 554px 511px #FFF, 1705px 1866px #FFF, 240px 1430px #FFF, 140px 668px #FFF, 648px 1617px #FFF, 252px 101px #FFF, 676px 1774px #FFF, 889px 1698px #FFF, 595px 853px #FFF, 249px 1768px #FFF, 1091px 1529px #FFF, 223px 839px #FFF, 239px 699px #FFF, 1547px 356px #FFF, 249px 1130px #FFF, 1209px 1946px #FFF, 1967px 1274px #FFF, 430px 298px #FFF, 1305px 134px #FFF, 156px 91px #FFF, 1712px 264px #FFF, 1256px 991px #FFF, 1887px 1844px #FFF, 1957px 1275px #FFF, 1718px 666px #FFF, 1090px 543px #FFF, 933px 1411px #FFF, 801px 323px #FFF, 202px 1659px #FFF, 1117px 549px #FFF, 290px 1859px #FFF, 1380px 1516px #FFF, 557px 1165px #FFF, 1953px 1758px #FFF, 1901px 1407px #FFF, 1144px 347px #FFF, 1640px 271px #FFF, 1996px 43px #FFF, 838px 488px #FFF, 1151px 1529px #FFF, 306px 460px #FFF, 1666px 635px #FFF, 1572px 633px #FFF, 1797px 1076px #FFF, 1727px 1119px #FFF, 474px 871px #FFF, 1491px 1398px #FFF, 1301px 868px #FFF, 1632px 454px #FFF, 1611px 466px #FFF, 498px 1162px #FFF, 796px 269px #FFF, 1988px 747px #FFF, 502px 12px #FFF, 276px 1260px #FFF, 1536px 974px #FFF, 956px 656px #FFF, 107px 701px #FFF, 965px 491px #FFF, 1646px 247px #FFF, 1515px 921px #FFF, 1813px 519px #FFF, 697px 143px #FFF, 591px 1452px #FFF, 1773px 1411px #FFF, 1622px 1401px #FFF, 534px 340px #FFF, 1590px 284px #FFF, 1464px 528px #FFF, 734px 1718px #FFF, 1929px 1683px #FFF, 656px 480px #FFF, 833px 705px #FFF, 1567px 109px #FFF, 1055px 330px #FFF, 1943px 1367px #FFF, 1935px 1512px #FFF, 355px 1024px #FFF, 1894px 218px #FFF, 1703px 1772px #FFF, 781px 1394px #FFF, 367px 42px #FFF, 100px 690px #FFF, 1831px 458px #FFF, 1884px 1878px #FFF, 814px 1013px #FFF;
    animation: animStar 100s linear infinite;
  }

  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1907px 1575px #FFF, 893px 268px #FFF, 1819px 666px #FFF, 366px 1985px #FFF, 1736px 1062px #FFF, 1124px 45px #FFF, 905px 1674px #FFF, 1570px 711px #FFF, 255px 1747px #FFF, 147px 1032px #FFF, 865px 1813px #FFF, 1721px 1461px #FFF, 202px 724px #FFF, 1860px 812px #FFF, 634px 1410px #FFF, 927px 1264px #FFF, 1648px 620px #FFF, 1915px 1309px #FFF, 731px 778px #FFF, 91px 1185px #FFF, 829px 1003px #FFF, 174px 1784px #FFF, 1094px 1874px #FFF, 1464px 484px #FFF, 1639px 1717px #FFF, 959px 573px #FFF, 1686px 1287px #FFF, 906px 356px #FFF, 970px 499px #FFF, 626px 890px #FFF, 1344px 1070px #FFF, 1351px 544px #FFF, 708px 68px #FFF, 1870px 130px #FFF, 556px 1270px #FFF, 1432px 618px #FFF, 769px 673px #FFF, 1289px 1410px #FFF, 1499px 1969px #FFF, 749px 1163px #FFF, 1198px 198px #FFF, 399px 133px #FFF, 1856px 1280px #FFF, 904px 194px #FFF, 973px 1107px #FFF, 1371px 1785px #FFF, 989px 1835px #FFF, 1043px 1517px #FFF, 787px 916px #FFF, 1635px 1155px #FFF, 752px 524px #FFF, 1926px 1279px #FFF, 1052px 1163px #FFF, 719px 1963px #FFF, 786px 519px #FFF, 1440px 500px #FFF, 156px 1265px #FFF, 1691px 429px #FFF, 1349px 1474px #FFF, 736px 459px #FFF, 248px 1678px #FFF, 1136px 510px #FFF, 1317px 10px #FFF, 1209px 1323px #FFF, 54px 469px #FFF, 730px 1939px #FFF, 960px 23px #FFF, 112px 941px #FFF, 1852px 1522px #FFF, 1993px 1972px #FFF, 265px 129px #FFF, 222px 1897px #FFF, 1766px 1804px #FFF, 1530px 1786px #FFF, 1045px 432px #FFF, 1916px 1980px #FFF, 309px 1780px #FFF, 1420px 559px #FFF, 1708px 103px #FFF, 324px 1407px #FFF, 1175px 943px #FFF, 80px 1221px #FFF, 1016px 1933px #FFF, 318px 560px #FFF, 190px 1489px #FFF, 1095px 892px #FFF, 1975px 1191px #FFF, 1197px 955px #FFF, 1482px 873px #FFF, 1912px 300px #FFF, 2000px 1636px #FFF, 1473px 1808px #FFF, 507px 192px #FFF, 924px 1300px #FFF, 1485px 1636px #FFF, 41px 1822px #FFF, 689px 120px #FFF, 769px 273px #FFF, 1039px 976px #FFF, 1057px 1520px #FFF, 1417px 1187px #FFF, 512px 1507px #FFF, 519px 45px #FFF, 1207px 1687px #FFF, 1824px 1488px #FFF, 1694px 31px #FFF, 1859px 52px #FFF, 1368px 268px #FFF, 190px 1404px #FFF, 940px 1003px #FFF, 167px 942px #FFF, 1641px 647px #FFF, 1051px 654px #FFF, 233px 1640px #FFF, 554px 511px #FFF, 1705px 1866px #FFF, 240px 1430px #FFF, 140px 668px #FFF, 648px 1617px #FFF, 252px 101px #FFF, 676px 1774px #FFF, 889px 1698px #FFF, 595px 853px #FFF, 249px 1768px #FFF, 1091px 1529px #FFF, 223px 839px #FFF, 239px 699px #FFF, 1547px 356px #FFF, 249px 1130px #FFF, 1209px 1946px #FFF, 1967px 1274px #FFF, 430px 298px #FFF, 1305px 134px #FFF, 156px 91px #FFF, 1712px 264px #FFF, 1256px 991px #FFF, 1887px 1844px #FFF, 1957px 1275px #FFF, 1718px 666px #FFF, 1090px 543px #FFF, 933px 1411px #FFF, 801px 323px #FFF, 202px 1659px #FFF, 1117px 549px #FFF, 290px 1859px #FFF, 1380px 1516px #FFF, 557px 1165px #FFF, 1953px 1758px #FFF, 1901px 1407px #FFF, 1144px 347px #FFF, 1640px 271px #FFF, 1996px 43px #FFF, 838px 488px #FFF, 1151px 1529px #FFF, 306px 460px #FFF, 1666px 635px #FFF, 1572px 633px #FFF, 1797px 1076px #FFF, 1727px 1119px #FFF, 474px 871px #FFF, 1491px 1398px #FFF, 1301px 868px #FFF, 1632px 454px #FFF, 1611px 466px #FFF, 498px 1162px #FFF, 796px 269px #FFF, 1988px 747px #FFF, 502px 12px #FFF, 276px 1260px #FFF, 1536px 974px #FFF, 956px 656px #FFF, 107px 701px #FFF, 965px 491px #FFF, 1646px 247px #FFF, 1515px 921px #FFF, 1813px 519px #FFF, 697px 143px #FFF, 591px 1452px #FFF, 1773px 1411px #FFF, 1622px 1401px #FFF, 534px 340px #FFF, 1590px 284px #FFF, 1464px 528px #FFF, 734px 1718px #FFF, 1929px 1683px #FFF, 656px 480px #FFF, 833px 705px #FFF, 1567px 109px #FFF, 1055px 330px #FFF, 1943px 1367px #FFF, 1935px 1512px #FFF, 355px 1024px #FFF, 1894px 218px #FFF, 1703px 1772px #FFF, 781px 1394px #FFF, 367px 42px #FFF, 100px 690px #FFF, 1831px 458px #FFF, 1884px 1878px #FFF, 814px 1013px #FFF;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 1994px 1692px #FFF, 961px 1928px #FFF, 819px 1320px #FFF, 1899px 52px #FFF, 28px 1937px #FFF, 157px 88px #FFF, 860px 1909px #FFF, 720px 427px #FFF, 1319px 1469px #FFF, 677px 960px #FFF, 1265px 1181px #FFF, 1176px 1361px #FFF, 1957px 753px #FFF, 1674px 1355px #FFF, 929px 1206px #FFF, 1038px 898px #FFF, 1229px 365px #FFF, 1085px 51px #FFF, 851px 650px #FFF, 385px 21px #FFF, 41px 1153px #FFF, 718px 70px #FFF, 1321px 579px #FFF, 497px 1458px #FFF, 1981px 813px #FFF, 776px 1187px #FFF, 1345px 31px #FFF, 1571px 400px #FFF, 339px 587px #FFF, 146px 750px #FFF, 64px 61px #FFF, 307px 981px #FFF, 388px 849px #FFF, 1398px 936px #FFF, 522px 765px #FFF, 1146px 350px #FFF, 19px 206px #FFF, 1767px 319px #FFF, 1203px 425px #FFF, 1917px 1018px #FFF, 91px 1401px #FFF, 898px 697px #FFF, 1712px 1121px #FFF, 633px 1119px #FFF, 137px 1266px #FFF, 1006px 931px #FFF, 1644px 1804px #FFF, 1596px 1057px #FFF, 1298px 543px #FFF, 1505px 996px #FFF, 1972px 1383px #FFF, 1210px 1497px #FFF, 804px 1840px #FFF, 913px 1047px #FFF, 187px 1824px #FFF, 1564px 1994px #FFF, 557px 1737px #FFF, 508px 1609px #FFF, 1259px 1911px #FFF, 1294px 1381px #FFF, 1845px 1843px #FFF, 667px 1497px #FFF, 1046px 945px #FFF, 937px 1889px #FFF, 982px 1806px #FFF, 1293px 671px #FFF, 668px 904px #FFF, 358px 1971px #FFF, 133px 766px #FFF, 1152px 1573px #FFF, 318px 694px #FFF, 578px 1184px #FFF, 1620px 1701px #FFF, 1359px 354px #FFF, 1807px 1367px #FFF, 458px 911px #FFF, 1387px 806px #FFF, 523px 81px #FFF, 1243px 341px #FFF, 906px 1730px #FFF, 1629px 474px #FFF, 1690px 419px #FFF, 847px 808px #FFF, 528px 1627px #FFF, 480px 718px #FFF, 537px 593px #FFF, 1432px 1333px #FFF, 200px 1228px #FFF, 1800px 1375px #FFF, 725px 1231px #FFF, 1749px 1432px #FFF, 1948px 303px #FFF, 1889px 252px #FFF, 1114px 1400px #FFF, 759px 646px #FFF, 222px 571px #FFF, 1908px 1401px #FFF, 1856px 1204px #FFF, 338px 1645px #FFF, 1528px 1050px #FFF;
    animation: animStar 150s linear infinite;
  }

  #stars3:after {
    content: "e ";
    position: absolute;
    top: 2000px;
    background: transparent;
    box-shadow: 1994px 1692px #FFF, 961px 1928px #FFF, 819px 1320px #FFF, 1899px 52px #FFF, 28px 1937px #FFF, 157px 88px #FFF, 860px 1909px #FFF, 720px 427px #FFF, 1319px 1469px #FFF, 677px 960px #FFF, 1265px 1181px #FFF, 1176px 1361px #FFF, 1957px 753px #FFF, 1674px 1355px #FFF, 929px 1206px #FFF, 1038px 898px #FFF, 1229px 365px #FFF, 1085px 51px #FFF, 851px 650px #FFF, 385px 21px #FFF, 41px 1153px #FFF, 718px 70px #FFF, 1321px 579px #FFF, 497px 1458px #FFF, 1981px 813px #FFF, 776px 1187px #FFF, 1345px 31px #FFF, 1571px 400px #FFF, 339px 587px #FFF, 146px 750px #FFF, 64px 61px #FFF, 307px 981px #FFF, 388px 849px #FFF, 1398px 936px #FFF, 522px 765px #FFF, 1146px 350px #FFF, 19px 206px #FFF, 1767px 319px #FFF, 1203px 425px #FFF, 1917px 1018px #FFF, 91px 1401px #FFF, 898px 697px #FFF, 1712px 1121px #FFF, 633px 1119px #FFF, 137px 1266px #FFF, 1006px 931px #FFF, 1644px 1804px #FFF, 1596px 1057px #FFF, 1298px 543px #FFF, 1505px 996px #FFF, 1972px 1383px #FFF, 1210px 1497px #FFF, 804px 1840px #FFF, 913px 1047px #FFF, 187px 1824px #FFF, 1564px 1994px #FFF, 557px 1737px #FFF, 508px 1609px #FFF, 1259px 1911px #FFF, 1294px 1381px #FFF, 1845px 1843px #FFF, 667px 1497px #FFF, 1046px 945px #FFF, 937px 1889px #FFF, 982px 1806px #FFF, 1293px 671px #FFF, 668px 904px #FFF, 358px 1971px #FFF, 133px 766px #FFF, 1152px 1573px #FFF, 318px 694px #FFF, 578px 1184px #FFF, 1620px 1701px #FFF, 1359px 354px #FFF, 1807px 1367px #FFF, 458px 911px #FFF, 1387px 806px #FFF, 523px 81px #FFF, 1243px 341px #FFF, 906px 1730px #FFF, 1629px 474px #FFF, 1690px 419px #FFF, 847px 808px #FFF, 528px 1627px #FFF, 480px 718px #FFF, 537px 593px #FFF, 1432px 1333px #FFF, 200px 1228px #FFF, 1800px 1375px #FFF, 725px 1231px #FFF, 1749px 1432px #FFF, 1948px 303px #FFF, 1889px 252px #FFF, 1114px 1400px #FFF, 759px 646px #FFF, 222px 571px #FFF, 1908px 1401px #FFF, 1856px 1204px #FFF, 338px 1645px #FFF, 1528px 1050px #FFF;
  }

  #title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #FFF;
    text-align: center;
    font-family: "lato", sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
  }

  #title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }

`

const ChildrenStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`
