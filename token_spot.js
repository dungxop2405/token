const token_spot = (() => {
    var list = ["BTCUSDT","ETHUSDT","BNBUSDT","NEOUSDT","LTCUSDT","QTUMUSDT","ADAUSDT","XRPUSDT","EOSUSDT","TUSDUSDT","IOTAUSDT","XLMUSDT","ONTUSDT","TRXUSDT","ETCUSDT","ICXUSDT","NULSUSDT","VETUSDT","USDCUSDT","LINKUSDT","ONGUSDT","HOTUSDT","ZILUSDT","ZRXUSDT","FETUSDT","BATUSDT","ZECUSDT","IOSTUSDT","CELRUSDT","DASHUSDT","THETAUSDT","ENJUSDT","ATOMUSDT","TFUELUSDT","ONEUSDT","ALGOUSDT","DOGEUSDT","DUSKUSDT","ANKRUSDT","WINUSDT","COSUSDT","MTLUSDT","DENTUSDT","WANUSDT","FUNUSDT","CVCUSDT","CHZUSDT","BANDUSDT","XTZUSDT","RVNUSDT","HBARUSDT","NKNUSDT","STXUSDT","KAVAUSDT","ARPAUSDT","IOTXUSDT","RLCUSDT","CTXCUSDT","BCHUSDT","TROYUSDT","VITEUSDT","FTTUSDT","EURUSDT","OGNUSDT","LSKUSDT","BNTUSDT","LTOUSDT","MBLUSDT","COTIUSDT","STPTUSDT","DATAUSDT","SOLUSDT","CTSIUSDT","HIVEUSDT","CHRUSDT","ARDRUSDT","MDTUSDT","STMXUSDT","KNCUSDT","LRCUSDT","COMPUSDT","SCUSDT","ZENUSDT","SNXUSDT","VTHOUSDT","DGBUSDT","SXPUSDT","MKRUSDT","DCRUSDT","STORJUSDT","MANAUSDT","YFIUSDT","BALUSDT","KMDUSDT","JSTUSDT","CRVUSDT","SANDUSDT","NMRUSDT","DOTUSDT","LUNAUSDT","RSRUSDT","PAXGUSDT","TRBUSDT","SUSHIUSDT","KSMUSDT","EGLDUSDT","DIAUSDT","RUNEUSDT","FIOUSDT","UMAUSDT","BELUSDT","WINGUSDT","UNIUSDT","OXTUSDT","SUNUSDT","AVAXUSDT","FLMUSDT","UTKUSDT","XVSUSDT","ALPHAUSDT","AAVEUSDT","NEARUSDT","FILUSDT","INJUSDT","AUDIOUSDT","CTKUSDT","AXSUSDT","HARDUSDT","STRAXUSDT","ROSEUSDT","AVAUSDT","SKLUSDT","GRTUSDT","JUVUSDT","PSGUSDT","1INCHUSDT","OGUSDT","ATMUSDT","ASRUSDT","CELOUSDT","RIFUSDT","TRUUSDT","CKBUSDT","TWTUSDT","FIROUSDT","LITUSDT","SFPUSDT","DODOUSDT","CAKEUSDT","ACMUSDT","BADGERUSDT","FISUSDT","OMUSDT","PONDUSDT","DEGOUSDT","ALICEUSDT","LINAUSDT","PERPUSDT","CFXUSDT","TKOUSDT","PUNDIXUSDT","TLMUSDT","BARUSDT","FORTHUSDT","BAKEUSDT","BURGERUSDT","SLPUSDT","SHIBUSDT","ICPUSDT","ARUSDT","MASKUSDT","LPTUSDT","XVGUSDT","ATAUSDT","GTCUSDT","ERNUSDT","PHAUSDT","MLNUSDT","DEXEUSDT","C98USDT","CLVUSDT","QNTUSDT","FLOWUSDT","MINAUSDT","RAYUSDT","FARMUSDT","ALPACAUSDT","QUICKUSDT","MBOXUSDT","REQUSDT","GHSTUSDT","WAXPUSDT","GNOUSDT","XECUSDT","ELFUSDT","DYDXUSDT","IDEXUSDT","VIDTUSDT","USDPUSDT","GALAUSDT","ILVUSDT","YGGUSDT","SYSUSDT","DFUSDT","FIDAUSDT","AGLDUSDT","RADUSDT","BETAUSDT","RAREUSDT","LAZIOUSDT","CHESSUSDT","ADXUSDT","AUCTIONUSDT","BNXUSDT","MOVRUSDT","CITYUSDT","ENSUSDT","QIUSDT","PORTOUSDT","POWRUSDT","JASMYUSDT","AMPUSDT","PYRUSDT","ALCXUSDT","SANTOSUSDT","BICOUSDT","FLUXUSDT","FXSUSDT","VOXELUSDT","HIGHUSDT","CVXUSDT","PEOPLEUSDT","SPELLUSDT","JOEUSDT","ACHUSDT","IMXUSDT","GLMRUSDT","LOKAUSDT","SCRTUSDT","API3USDT","BTTCUSDT","ACAUSDT","XNOUSDT","WOOUSDT","ALPINEUSDT","TUSDT","ASTRUSDT","GMTUSDT","KDAUSDT","APEUSDT","BSWUSDT","BIFIUSDT","STEEMUSDT","NEXOUSDT","REIUSDT","LDOUSDT","OPUSDT","LEVERUSDT","STGUSDT","LUNCUSDT","GMXUSDT","POLYXUSDT","APTUSDT","OSMOUSDT","HFTUSDT","PHBUSDT","HOOKUSDT","MAGICUSDT","HIFIUSDT","RPLUSDT","PROSUSDT","GNSUSDT","SYNUSDT","VIBUSDT","SSVUSDT","LQTYUSDT","AMBUSDT","USTCUSDT","GASUSDT","GLMUSDT","PROMUSDT","QKCUSDT","UFTUSDT","IDUSDT","ARBUSDT","RDNTUSDT","WBTCUSDT","EDUUSDT","SUIUSDT","AERGOUSDT","PEPEUSDT","FLOKIUSDT","ASTUSDT","SNTUSDT","COMBOUSDT","MAVUSDT","PENDLEUSDT","ARKMUSDT","WBETHUSDT","WLDUSDT","FDUSDUSDT","SEIUSDT","CYBERUSDT","ARKUSDT","CREAMUSDT","IQUSDT","NTRNUSDT","TIAUSDT","MEMEUSDT","ORDIUSDT","BEAMXUSDT","PIVXUSDT","VICUSDT","BLURUSDT","VANRYUSDT","AEURUSDT","JTOUSDT","1000SATSUSDT","BONKUSDT","ACEUSDT","NFPUSDT","AIUSDT","XAIUSDT","MANTAUSDT","ALTUSDT","PYTHUSDT","RONINUSDT","DYMUSDT","PIXELUSDT","STRKUSDT","PORTALUSDT","PDAUSDT","AXLUSDT","WIFUSDT","METISUSDT","AEVOUSDT","BOMEUSDT","ETHFIUSDT","ENAUSDT","WUSDT","TNSRUSDT","SAGAUSDT","TAOUSDT","OMNIUSDT","REZUSDT","BBUSDT","NOTUSDT","IOUSDT","ZKUSDT","LISTAUSDT","ZROUSDT","GUSDT","BANANAUSDT","RENDERUSDT","TONUSDT","DOGSUSDT","EURIUSDT","SLFUSDT","POLUSDT","NEIROUSDT","TURBOUSDT","1MBABYDOGEUSDT","CATIUSDT","HMSTRUSDT","EIGENUSDT","SCRUSDT","BNSOLUSDT","LUMIAUSDT","KAIAUSDT","COWUSDT","CETUSUSDT","PNUTUSDT","ACTUSDT","USUALUSDT","THEUSDT","ACXUSDT","ORCAUSDT","MOVEUSDT","MEUSDT","VELODROMEUSDT","VANAUSDT","1000CATUSDT","PENGUUSDT","BIOUSDT","DUSDT","AIXBTUSDT","CGPTUSDT","COOKIEUSDT","SUSDT","SOLVUSDT"];
    return {
        get_spot: () => list
    };
})();
