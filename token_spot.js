const token_spot = (() => {
    var list =
    [
    "BTCUSDT",
    "ETHUSDT",
    "BNBUSDT",
    "NEOUSDT",
    "LTCUSDT",
    "QTUMUSDT",
    "ADAUSDT",
    "XRPUSDT",
    "EOSUSDT",
    "TUSDUSDT",
    "IOTAUSDT",
    "XLMUSDT",
    "ONTUSDT",
    "TRXUSDT",
    "ETCUSDT",
    "ICXUSDT",
    "NULSUSDT",
    "VETUSDT",
    "USDCUSDT",
    "LINKUSDT",
    "WAVESUSDT",
    "ONGUSDT",
    "HOTUSDT",
    "ZILUSDT",
    "ZRXUSDT",
    "FETUSDT",
    "BATUSDT",
    "XMRUSDT",
    "ZECUSDT",
    "IOSTUSDT",
    "CELRUSDT",
    "DASHUSDT",
    "OMGUSDT",
    "THETAUSDT",
    "ENJUSDT",
    "MATICUSDT",
    "ATOMUSDT",
    "TFUELUSDT",
    "ONEUSDT",
    "FTMUSDT",
    "ALGOUSDT",
    "DOGEUSDT",
    "DUSKUSDT",
    "ANKRUSDT",
    "WINUSDT",
    "COSUSDT",
    "MTLUSDT",
    "TOMOUSDT",
    "PERLUSDT",
    "DENTUSDT",
    "KEYUSDT",
    "DOCKUSDT",
    "WANUSDT",
    "FUNUSDT",
    "CVCUSDT",
    "CHZUSDT",
    "BANDUSDT",
    "BUSDUSDT",
    "XTZUSDT",
    "RENUSDT",
    "RVNUSDT",
    "HBARUSDT",
    "NKNUSDT",
    "STXUSDT",
    "KAVAUSDT",
    "ARPAUSDT",
    "IOTXUSDT",
    "RLCUSDT",
    "CTXCUSDT",
    "BCHUSDT",
    "TROYUSDT",
    "VITEUSDT",
    "EURUSDT",
    "OGNUSDT",
    "DREPUSDT",
    "WRXUSDT",
    "BTSUSDT",
    "LSKUSDT",
    "BNTUSDT",
    "LTOUSDT",
    "MBLUSDT",
    "COTIUSDT",
    "STPTUSDT",
    "WTCUSDT",
    "DATAUSDT",
    "SOLUSDT",
    "CTSIUSDT",
    "HIVEUSDT",
    "CHRUSDT",
    "ARDRUSDT",
    "MDTUSDT",
    "STMXUSDT",
    "KNCUSDT",
    "LRCUSDT",
    "IQBUSD",
    "PNTUSDT",
    "GBPUSDT",
    "DGBUSDT",
    "COMPUSDT",
    "SCUSDT",
    "ZENUSDT",
    "SXPUSDT",
    "SNXUSDT",
    "VTHOUSDT",
    "STORJUSDT",
    "MKRUSDT",
    "RUNEUSDT",
    "MANAUSDT",
    "DCRUSDT",
    "AVAUSDT",
    "BALUSDT",
    "YFIUSDT",
    "BLZUSDT",
    "IRISUSDT",
    "KMDUSDT",
    "JSTUSDT",
    "SRMBUSD",
    "ANTUSDT",
    "CRVUSDT",
    "SANDUSDT",
    "OCEANUSDT",
    "NMRUSDT",
    "DOTUSDT",
    "LUNAUSDT",
    "IDEXUSDT",
    "RSRUSDT",
    "PAXGUSDT",
    "WNXMUSDT",
    "TRBUSDT",
    "SUSHIUSDT",
    "YFIIUSDT",
    "KSMUSDT",
    "EGLDUSDT",
    "DIAUSDT",
    "FIOUSDT",
    "UMAUSDT",
    "BELUSDT",
    "WINGUSDT",
    "CREAMBUSD",
    "UNIUSDT",
    "OXTUSDT",
    "SUNUSDT",
    "AVAXUSDT",
    "FLMUSDT",
    "CAKEUSDT",
    "ORNUSDT",
    "UTKUSDT",
    "XVSUSDT",
    "ALPHAUSDT",
    "VIDTUSDT",
    "AAVEUSDT",
    "NEARUSDT",
    "FILUSDT",
    "INJUSDT",
    "AERGOUSDT",
    "AUDIOUSDT",
    "CTKUSDT",
    "AKROUSDT",
    "KP3RUSDT",
    "AXSUSDT",
    "HARDUSDT",
    "CVPUSDT",
    "STRAXUSDT",
    "FORUSDT",
    "UNFIUSDT",
    "FRONTUSDT",
    "ROSEUSDT",
    "SYSUSDT",
    "XEMUSDT",
    "PROMUSDT",
    "SKLUSDT",
    "GHSTUSDT",
    "DFUSDT",
    "GRTUSDT",
    "JUVUSDT",
    "PSGUSDT",
    "1INCHUSDT",
    "REEFUSDT",
    "OGUSDT",
    "ATMUSDT",
    "ASRUSDT",
    "CELOUSDT",
    "RIFUSDT",
    "TRUUSDT",
    "DEXEUSDT",
    "CKBUSDT",
    "TWTUSDT",
    "FIROUSDT",
    "LITUSDT",
    "SFPUSDT",
    "FXSUSDT",
    "DODOUSDT",
    "BAKEUSDT",
    "UFTUSDT",
    "ACMUSDT",
    "AUCTIONUSDT",
    "PHAUSDT",
    "TVKUSDT",
    "BADGERUSDT",
    "FISUSDT",
    "OMUSDT",
    "PONDUSDT",
    "DEGOUSDT",
    "ALICEUSDT",
    "LINAUSDT",
    "PERPUSDT",
    "CFXUSDT",
    "XVGUSDT",
    "TKOUSDT",
    "PUNDIXUSDT",
    "TLMUSDT",
    "BARUSDT",
    "FORTHUSDT",
    "BURGERUSDT",
    "SLPUSDT",
    "SHIBUSDT",
    "ICPUSDT",
    "ARUSDT",
    "POLSUSDT",
    "MDXUSDT",
    "MASKUSDT",
    "LPTUSDT",
    "ATAUSDT",
    "GTCUSDT",
    "TORNBUSD",
    "FTTBUSD",
    "ERNUSDT",
    "KLAYUSDT",
    "BONDUSDT",
    "MLNUSDT",
    "ADXUSDT",
    "QUICKUSDT",
    "C98USDT",
    "CLVUSDT",
    "QNTUSDT",
    "FLOWUSDT",
    "XECUSDT",
    "MINAUSDT",
    "RAYUSDT",
    "FARMUSDT",
    "ALPACAUSDT",
    "MBOXUSDT",
    "REQUSDT",
    "WAXPUSDT",
    "GNOUSDT",
    "ELFUSDT",
    "DYDXUSDT",
    "USDPUSDT",
    "GALAUSDT",
    "ILVUSDT",
    "YGGUSDT",
    "FIDAUSDT",
    "AGLDUSDT",
    "RADUSDT",
    "BETAUSDT",
    "RAREUSDT",
    "LAZIOUSDT",
    "CHESSUSDT",
    "SCRTUSDT",
    "DARUSDT",
    "BNXUSDT",
    "MOVRUSDT",
    "CITYUSDT",
    "ENSUSDT",
    "QIUSDT",
    "PORTOUSDT",
    "POWRUSDT",
    "VGXUSDT",
    "JASMYUSDT",
    "AMPUSDT",
    "PLAUSDT",
    "PYRUSDT",
    "RNDRUSDT",
    "ALCXUSDT",
    "SANTOSUSDT",
    "MCUSDT",
    "BICOUSDT",
    "FLUXUSDT",
    "VOXELUSDT",
    "HIGHUSDT",
    "CVXUSDT",
    "PEOPLEUSDT",
    "OOKIUSDT",
    "SPELLUSDT",
    "JOEUSDT",
    "ACHUSDT",
    "IMXUSDT",
    "GLMRUSDT",
    "LOKAUSDT",
    "API3USDT",
    "BTTCUSDT",
    "ACAUSDT",
    "XNOUSDT",
    "WOOUSDT",
    "ALPINEUSDT",
    "TUSDT",
    "ASTRUSDT",
    "GMTUSDT",
    "KDAUSDT",
    "APEUSDT",
    "BSWUSDT",
    "BIFIUSDT",
    "MULTIUSDT",
    "STEEMUSDT",
    "MOBUSDT",
    "NEXOUSDT",
    "REIUSDT",
    "GALUSDT",
    "LDOUSDT",
    "EPXUSDT",
    "LUNCUSDT",
    "USTCUSDT",
    "OPUSDT",
    "WBTCUSDT",
    "LEVERUSDT",
    "GLMUSDT",
    "SSVUSDT",
    "STGUSDT",
    "ARKBUSD",
    "BETHUSDT",
    "LOOMUSDT",
    "SNMBUSD",
    "AMBUSDT",
    "PHBUSDT",
    "GASUSDT",
    "PROSUSDT",
    "VIBUSDT",
    "GMXUSDT",
    "AGIXUSDT",
    "SNTUSDT",
    "POLYXUSDT",
    "APTUSDT",
    "QKCUSDT",
    "OSMOUSDT",
    "HFTUSDT",
    "HOOKUSDT",
    "MAGICUSDT",
    "HIFIUSDT",
    "RPLUSDT",
    "GFTBUSD",
    "GNSUSDT",
    "SYNUSDT",
    "LQTYUSDT",
    "IDUSDT",
    "ARBUSDT",
    "OAXUSDT",
    "RDNTUSDT",
    "EDUUSDT",
    "SUIUSDT",
    "PEPEUSDT",
    "FLOKIUSDT",
    "ASTUSDT",
    "COMBOUSDT",
    "MAVUSDT"
];

    // các chức năng công khai
    return {
        get_spot: () => list
    };
})();
