const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","SOL_USDT","ADA_USDT","DHN_USDT","BTC_USD","PI_USDT","ETH_USD","WHITE_USDT","XRP_USDT","LTC_USD","XRP_USD","ADA_USD","AURORA_USDT","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","MINT_USDT","BLUBAVAX_USDT","FARTCOIN_USDT","SUI_USDT","DOGE_USDT","REZ_USDT","LINK_USDT","AVAX_USDT","ENA_USDT","ONDO_USDT","STAR10_USDT","TRUMPOFFICIAL_USDT","KAITO_USDT","APT_USDT","WIF_USDT","LTC_USDT","BCH_USDT","ARB_USDT","AAVE_USDT","NEIROETH_USDT","HBAR_USDT","BLZ_USDT","STREAM_USDT","POPCAT_USDT","ZERO_USDT","PEPE_USDT","TIA_USDT","WLD_USDT","TAO_USDT","NEAR_USDT","BROCCOLI_USDT","ZKL_USDT","PNUT_USDT","DOT_USDT","GRIFFAIN_USDT","SOSO_USDT","OP_USDT","INJ_USDT","ONON_USDT","DOGEAI_USDT","KET_USDT","AI16Z_USDT","JTO_USDT","GPS_USDT","ALCH_USDT","LDO_USDT","BNB_USDT","KEKIUS_USDT","ETC_USDT","MOVE_USDT","ORDI_USDT","VON_USDT","JUP_USDT","SUPER_USDT","IP_USDT","NOT_USDT","SEI_USDT","MKR_USDT","S_USDT","FET_USDT","UNI_USDT","VITE_USDT","CHEX_USDT","TONCOIN_USDT","CRO_USDT","AXL_USDT","BUTTHOLE_USDT","VIVI_USDT","GALA_USDT","TARA_USDT","XLM_USDT","SHIB_USDT","GRASS_USDT","DF_USDT","COMP_USDT","RUNE_USDT","KAS_USDT","TRX_USDT","BERA_USDT","FILECOIN_USDT","RENDER_USDT","RIZ_USDT","GFM_USDT","ALGO_USDT","BNXNEW_USDT","ARCSOL_USDT","MEMHASH_USDT","EIGEN_USDT","AIXBT_USDT","ATOM_USDT","QUAI_USDT","SHELL_USDT","PIPPIN_USDT","EGGS_USDT","HYPE_USDT","PAIN_USDT","AVA_USDT","DADDY_USDT","MXNA_USDT","1000RATS_USDT","FAI_USDT","BRETT_USDT","GHX_USDT","AXS_USDT","HOOD_USDT","WINK_USDT","APE_USDT","VIRTUAL_USDT","BSV_USDT","DEAI_USDT","ARKM_USDT","AVAAI_USDT","BROCCOLIF3B_USDT","LOGX_USDT","GEAR_USDT","GOAT_USDT","ZEREBRO_USDT","SOLV_USDT","LAYER_USDT","BZZ_USDT","PEPE2_USDT","TRB_USDT","TURBO_USDT","ICP_USDT","SWARMS_USDT","PAI_USDT","AR_USDT","CRV_USDT","FWOG_USDT","OM_USDT","1000BONK_USDT","JASMY_USDT","PENGU_USDT","SUPRA_USDT","TST_USDT","VINE_USDT","NEIROCTO_USDT","MLG_USDT","GRPH_USDT","MOODENG_USDT","ETHFI_USDT","AGIXT_USDT","HAPPY_USDT","RLC_USDT","J_USDT","COW_USDT","FLOKI_USDT","TNSR_USDT","ACT_USDT","CHILLGUY_USDT","COOK_USDT","TEVA_USDT","BOME_USDT","MELANIA_USDT","CAKE_USDT","BAN_USDT","G7_USDT","DIN_USDT","BEL_USDT","DOGS_USDT","NMR_USDT","ACE_USDT","XOXO_USDT","DYDX_USDT","MOODENGETH_USDT","HNT_USDT","AKUMA_USDT","STRK_USDT","RAY_USDT","AIPUMP_USDT","SNX_USDT","COOKIE_USDT","FULLSEND_USDT","GROK_USDT","SAND_USDT","MAVIA_USDT","PENDLE_USDT","XCH_USDT","POL_USDT","CAPTAINBNB_USDT","HEART_USDT","BARSIK_USDT","KAVA_USDT","SHRUB_USDT","VADER_USDT","MANA_USDT","LIBRA_USDT","TRISIG_USDT","STONKS_USDT","AVB_USDT","HAT_USDT","CAR_USDT","XMR_USDT","PLUME_USDT","AERO_USDT","HOT_USDT","SPX_USDT","ANLOG_USDT","GPU_USDT","ALON_USDT","DAG_USDT","PEOPLE_USDT","COTI_USDT","FARTBOY_USDT","VET_USDT","OBT_USDT","GRT_USDT","W_USDT","LAI_USDT","IO_USDT","NEIRO_USDT","SAGA_USDT","USUAL_USDT","ACH_USDT","KIMA_USDT","APEPE_USDT","ZCX_USDT","STX_USDT","SOON_USDT","ZKSYNC_USDT","KOMA_USDT","ZRO_USDT","ROSE_USDT","OSMO_USDT","LUNC_USDT","IOTA_USDT","ENS_USDT","ALPACA_USDT","ELIZA_USDT","TETSUO_USDT","EGLD_USDT","HMSTR_USDT","BAKE_USDT","CLAY_USDT","BROCCOLIF2B_USDT","BURGER_USDT","MINA_USDT","PYTH_USDT","MYRO_USDT","DOG_USDT","SATS_USDT","B3_USDT","NULS_USDT","FRED_USDT","SAFEMOONSOL_USDT","QNT_USDT","SPEC_USDT","ARK_USDT","HASHAI_USDT","IMX_USDT","GANG_USDT","XEC_USDT","MONKY_USDT","NRN_USDT","CFX_USDT","CHZ_USDT","POLS_USDT","INSN_USDT","BROWNIE_USDT","YGG_USDT","DOGEGOV_USDT","JELLYJELLY_USDT","TWT_USDT","MASK_USDT","EOS_USDT","SUNDOG_USDT","VANA_USDT","VISTA_USDT","TAI_USDT","HOLD_USDT","DAO_USDT","AGLD_USDT","RAI_USDT","KDA_USDT","AUCTION_USDT","10000COQ_USDT","SHOGGOTH_USDT","SONIC_USDT","LUNANEW_USDT","DSYNC_USDT","THE_USDT","WOO_USDT","C98_USDT","REX_USDT","CLV_USDT","BIO_USDT","TEL_USDT","DRIFT_USDT","FTT_USDT","GMT_USDT","MBL_USDT","PEAQ_USDT","XCN_USDT","MEME_USDT","1INCH_USDT","MANTA_USDT","SEND_USDT","VVAIFU_USDT","DEEP_USDT","ZEN_USDT","JAILSTOOL_USDT","VELO_USDT","TOMI_USDT","DEGEN_USDT","TOKEN_USDT","LISTA_USDT","RSR_USDT","THETA_USDT","GENE_USDT","VRA_USDT","AIC_USDT","XNO_USDT","PAAL_USDT","LUMIA_USDT","XAI_USDT","1000000BABYDOGE_USDT","BB_USDT","CORE_USDT","NC_USDT","MOBILE_USDT","VIDT_USDT","1DOLLAR_USDT","SUSHI_USDT","PAXG_USDT","CGPT_USDT","MORPHO_USDT","ALPHAOFSOL_USDT","SNEK_USDT","AEVO_USDT","AVL_USDT","CPOOL_USDT","ZBCN_USDT","TALENT_USDT","BADAI_USDT","PHB_USDT","AI16ZELIZA_USDT","SPELL_USDT","MAGIC_USDT","SYNTH_USDT","CULT_USDT","BEAMX_USDT","AI_USDT","QUBIC_USDT","CETUS_USDT","BULLY_USDT","1000MUMU_USDT","UFD_USDT","LINGO_USDT","YFI_USDT","PIXEL_USDT","ETHW_USDT","LESTER_USDT","BIGTIME_USDT","PIN_USDT","BANANA_USDT","ZEC_USDT","ATA_USDT","TRU_USDT","XION_USDT","SUN_USDT","NPC_USDT","ARCA_USDT","PONKE_USDT","GIGA_USDT","XDC_USDT","SSV_USDT","ALU_USDT","VANRY_USDT","CLANKER_USDT","BABYSHARK_USDT","PUMPAI_USDT","LLM_USDT","VVV_USDT","HIPPO_USDT","CYBER_USDT","DGB_USDT","CKB_USDT","COMBO_USDT","PROM_USDT","VIB_USDT","QTUM_USDT","STORJ_USDT","WAVES_USDT","CATTON_USDT","HOOK_USDT","BLUR_USDT","DYM_USDT","XAUT_USDT","LUCE_USDT","1000000MOG_USDT","ZIL_USDT","PORTAL_USDT","DIA_USDT","MNT_USDT","RARE_USDT","BID_USDT","WILD_USDT","SYRUP_USDT","HIGH_USDT","GLQ_USDT","TOSHI_USDT","IOTX_USDT","PEPECOIN_USDT","MOVR_USDT","L3_USDT","TAOCAT_USDT","RDNT_USDT","USTC_USDT","BADGER_USDT","ALT_USDT","TRUMP_USDT","APEX_USDT","POWER_USDT","NEO_USDT","DASH_USDT","CELR_USDT","LEVER_USDT","PHA_USDT","UXLINK_USDT","ELON4AFD_USDT","A8_USDT","LOOM_USDT","SXP_USDT","JOE_USDT","EDU_USDT","MYRIA_USDT","ANIME_USDT","ID_USDT","LINA_USDT","KISHU_USDT","GMX_USDT","SLF_USDT","LQTY_USDT","PHIL_USDT","DEVVE_USDT","KSM_USDT","IDEX_USDT","ZRX_USDT","XVG_USDT","FB_USDT","OMNI_USDT","GEMS_USDT","VTHO_USDT","FLOW_USDT","MEW_USDT","TREAT_USDT","ONE_USDT","ALPHA_USDT","BAT_USDT","DEXE_USDT","X_USDT","BGSC_USDT","AIOZ_USDT","ILV_USDT","FIDA_USDT","PRCL_USDT","ULTIMA_USDT","LPT_USDT","SWELL_USDT","GRIFT_USDT","SLC_USDT","ELON_USDT","SKL_USDT","API3_USDT","STPT_USDT","BUZZ_USDT","OMG_USDT","ENJ_USDT","AZERO_USDT","1000BTT_USDT","1000000PEIPEI_USDT","ZIG_USDT","10000LADYS_USDT","USA_USDT","LOOKS_USDT","WOJAK_USDT","TRIAS_USDT","CLOUD_USDT","ORDER_USDT","CATI_USDT","YNE_USDT","MODE_USDT","STNK_USDT","SMILE_USDT","VELODROME_USDT","MBOX_USDT","NAKA_USDT","HFT_USDT","BSW_USDT","XVS_USDT","KMNO_USDT","RVN_USDT","ZEUS_USDT","BAND_USDT","BAL_USDT","GLMR_USDT","BRISE_USDT","CAT_USDT","TLM_USDT","FIRE_USDT","OMI_USDT","ANDYETH_USDT","FLOCK_USDT","ORAI_USDT","AITECH_USDT","100000AIDOGE_USDT","ZETA_USDT","ME_USDT","GLM_USDT","ANKR_USDT","ARPA_USDT","FXS_USDT","SYN_USDT","OG_USDT","CLORE_USDT","OL_USDT","ALICE_USDT","DUSK_USDT","NTRN_USDT","SCA_USDT","SWFTC_USDT","ACX_USDT","XTZ_USDT","MEMEFI_USDT","GME_USDT","TORN_USDT","PYR_USDT","KAIA_USDT","CELO_USDT","BONE_USDT","AKT_USDT","FIO_USDT","NS_USDT","SWAN_USDT","SLP_USDT","CHR_USDT","ATH_USDT","ALEO_USDT","SCR_USDT","BSX_USDT","PEPU_USDT","MUBI_USDT","MOTHER_USDT","RIFSOL_USDT","RACA_USDT","AUDIO_USDT","FLUX_USDT","SANTOS_USDT","METIS_USDT","RADAR_USDT","USDC_USDT","MICHI_USDT","XYRO_USDT","ICE_USDT","UMA_USDT","HIVE_USDT","REQ_USDT","LRC_USDT","NKN_USDT","BERT_USDT","MOCA_USDT","PUFFER_USDT","SFP_USDT","CVX_USDT","FLR_USDT","TROY_USDT","XPR_USDT","KNC_USDT","FOXY_USDT","BNT_USDT","VOXEL_USDT","F_USDT","CSPR_USDT","MAV_USDT","FUN_USDT","1000APU_USDT","CHEEMS_USDT","DUCK_USDT","RAD_USDT","SLERF_USDT","HARRY_USDT","MIGGLES_USDT","NEUR_USDT","MAGA_USDT","MTL_USDT","PSG_USDT","DODO_USDT","OGN_USDT","PERP_USDT","NFP_USDT","RON_USDT","PRIME_USDT","BEER_USDT","D_USDT","DEGO_USDT","10000WEN_USDT","SQD_USDT","MDT_USDT","AGI_USDT","BORA_USDT","ISLM_USDT","GST_USDT","MAJOR_USDT","TJRM_USDT","ACA_USDT","AERGO_USDT","ALCX_USDT","OAS_USDT","GTC_USDT","RPL_USDT","MASA_USDT","SOLO_USDT","STG_USDT","GNO_USDT","CARV_USDT","HEI_USDT","FLM_USDT","IOST_USDT","DENT_USDT","VR_USDT","ASTR_USDT","CTXC_USDT","IQ_USDT","SC_USDT","ONT_USDT","POLYX_USDT","MANEKI_USDT","MDOGS_USDT","CTK_USDT","AMP_USDT","RIF_USDT","10000WHY_USDT","SHX_USDT","CTSI_USDT","SCRT_USDT","SWEAT_USDT","AVAIL_USDT","LMWR_USDT","RBNT_USDT","BICO_USDT","SNT_USDT","NOS_USDT","ALPH_USDT","NAVX_USDT","POND_USDT","GAMEVIRTUAL_USDT","GODS_USDT","CHESS_USDT","BLAST_USDT","XEM_USDT","CTC_USDT","WIN_USDT","XRD_USDT","MERL_USDT","SD_USDT","ZRC_USDT","SAFE_USDT","CATS_USDT","BAR_USDT","JST_USDT","GOMINING_USDT","JUV_USDT","POWR_USDT","SYS_USDT","MBX_USDT","CBK_USDT","FORTH_USDT","QI_USDT","ACS_USDT","SUNCAT_USDT","TLOS_USDT","RSS3_USDT","HIFI_USDT","REI_USDT","XTER_USDT","TICO_USDT","PORTO_USDT","T_USDT","OXT_USDT","GAS_USDT","ZKJ_USDT","MVL_USDT","SPA_USDT","LOKA_USDT","ZENT_USDT","ORCA_USDT","FTN_USDT","TFUEL_USDT","QUICK_USDT","ONG_USDT","NEON_USDT","ISLAND_USDT","BOBA_USDT","STEEM_USDT","TAIKO_USDT","ULTI_USDT","PIRATE_USDT","MAX_USDT","WING_USDT","U2U_USDT","KMD_USDT","ORBS_USDT","DATA_USDT","AST_USDT","FARM_USDT","LUNAI_USDT","LAZIO_USDT","STRAX_USDT","G_USDT","DCR_USDT","GHST_USDT","ASR_USDT","WMTX_USDT","CVC_USDT","WAXP_USDT","LSK_USDT","FIRO_USDT","QKC_USDT","NEXO_USDT","FLUID_USDT","LAVA_USDT","ICX_USDT","COS_USDT","PROS_USDT","DBR_USDT","ALPINE_USDT","LAT_USDT","WAN_USDT","VIC_USDT","CITY_USDT","FIS_USDT","NFT_USDT","ELF_USDT","PIVX_USDT","ERN_USDT","RED_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
