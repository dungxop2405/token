const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","SOL_USDT","PI_USDT","KAITO_USDT","XRP_USDT","BTC_USD","ETH_USD","BAN_USDT","LTC_USD","XRP_USD","ADA_USD","SAMO_USDT","AURORA_USDT","DAO_USDT","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","HOOD_USDT","DHN_USDT","DOGE_USDT","SUI_USDT","TRUMPOFFICIAL_USDT","QUAI_USDT","FARTCOIN_USDT","RIZ_USDT","BROCCOLIF3B_USDT","LINK_USDT","TAO_USDT","AVAX_USDT","WIF_USDT","LTC_USDT","IP_USDT","POPCAT_USDT","ADA_USDT","ENA_USDT","PEPE_USDT","VANA_USDT","APT_USDT","ONDO_USDT","HBAR_USDT","SEI_USDT","RAY_USDT","ALON_USDT","DOT_USDT","NEAR_USDT","VITE_USDT","BNB_USDT","RUNE_USDT","TST_USDT","OP_USDT","WLD_USDT","ARB_USDT","S_USDT","CATTON_USDT","JUP_USDT","TIA_USDT","DOGS_USDT","FET_USDT","PNUT_USDT","INJ_USDT","SHIB_USDT","AAVE_USDT","TEVA_USDT","HYPE_USDT","LDO_USDT","RADAR_USDT","ARKM_USDT","OM_USDT","MKR_USDT","FARTBOY_USDT","EIGEN_USDT","GROK_USDT","MELANIA_USDT","SAFEMOONSOL_USDT","TRB_USDT","TONCOIN_USDT","GALA_USDT","ORDI_USDT","KAS_USDT","ONON_USDT","NEIROETH_USDT","CRO_USDT","PAIN_USDT","TRX_USDT","AIXBT_USDT","BADAI_USDT","KET_USDT","VIRTUAL_USDT","BROCCOLI_USDT","BERA_USDT","PUMPAI_USDT","METIS_USDT","ARCSOL_USDT","FILECOIN_USDT","ETHFI_USDT","SHELL_USDT","GANG_USDT","AI16Z_USDT","BNXNEW_USDT","ALGO_USDT","AVAAI_USDT","RENDER_USDT","ICP_USDT","XLM_USDT","FLOKI_USDT","NOT_USDT","VINE_USDT","STRK_USDT","SWARMS_USDT","JTO_USDT","TURBO_USDT","DOGEAI_USDT","GOAT_USDT","FTT_USDT","ATOM_USDT","LIBRA_USDT","JASMY_USDT","CAKE_USDT","NC_USDT","STONKS_USDT","SOSO_USDT","JUV_USDT","DYDX_USDT","PYTH_USDT","ACH_USDT","BOME_USDT","AUCTION_USDT","ALPHAOFSOL_USDT","JELLYJELLY_USDT","GRIFFAIN_USDT","UNI_USDT","CLAY_USDT","APE_USDT","SUPRA_USDT","VVV_USDT","MEME_USDT","XVS_USDT","DIN_USDT","ROSE_USDT","TFUEL_USDT","FULLSEND_USDT","BROCCOLIF2B_USDT","1000RATS_USDT","GLM_USDT","IMX_USDT","BIO_USDT","MYRO_USDT","FWOG_USDT","ETC_USDT","CRV_USDT","AR_USDT","STX_USDT","REZ_USDT","PIPPIN_USDT","PENGU_USDT","CAR_USDT","CGPT_USDT","NEIROCTO_USDT","VR_USDT","SAND_USDT","BZZ_USDT","MBOX_USDT","BCH_USDT","GRPH_USDT","FAI_USDT","GRASS_USDT","MOODENG_USDT","DEAI_USDT","GFM_USDT","TOMI_USDT","ANIME_USDT","BGSC_USDT","KOMA_USDT","ELIZA_USDT","WINK_USDT","POL_USDT","MANA_USDT","CAPTAINBNB_USDT","UFD_USDT","MOVE_USDT","1000BONK_USDT","BRETT_USDT","LOGX_USDT","SUNCAT_USDT","ACT_USDT","BEL_USDT","JAILSTOOL_USDT","USUAL_USDT","ELON4AFD_USDT","N3_USDT","AVB_USDT","GRT_USDT","LAYER_USDT","VISTA_USDT","BUZZ_USDT","CHZ_USDT","FRED_USDT","NEUR_USDT","QNT_USDT","IO_USDT","PENDLE_USDT","W_USDT","BAKE_USDT","ZRO_USDT","VET_USDT","SPX_USDT","LUNC_USDT","VADER_USDT","MXNA_USDT","BROWNIE_USDT","ME_USDT","KAVA_USDT","BIGTIME_USDT","AVL_USDT","DOGEGOV_USDT","VIVI_USDT","AGIXT_USDT","AIOS_USDT","ALCH_USDT","MANTA_USDT","COW_USDT","MNT_USDT","KEKIUS_USDT","CATI_USDT","BUTTHOLE_USDT","ZEC_USDT","ANLOG_USDT","MLG_USDT","PEOPLE_USDT","DOG_USDT","OBT_USDT","LISTA_USDT","ZKSYNC_USDT","XION_USDT","NS_USDT","BID_USDT","SUSHI_USDT","CHILLGUY_USDT","STPT_USDT","THETA_USDT","ZEREBRO_USDT","XAI_USDT","LUMIA_USDT","DSYNC_USDT","YNE_USDT","CLANKER_USDT","HEART_USDT","LINA_USDT","SNX_USDT","ZBCN_USDT","HMSTR_USDT","ENS_USDT","AI_USDT","B3_USDT","LUCE_USDT","XOXO_USDT","SUNDOG_USDT","THE_USDT","TOKEN_USDT","SAGA_USDT","AXS_USDT","LUNANEW_USDT","BURGER_USDT","WOO_USDT","TOSHI_USDT","SPELL_USDT","DYM_USDT","ULTI_USDT","SWFTC_USDT","BERT_USDT","SLERF_USDT","TETSUO_USDT","CLV_USDT","1INCH_USDT","CORE_USDT","OKM_USDT","MINA_USDT","PIXEL_USDT","SONIC_USDT","PHB_USDT","AKUMA_USDT","G7_USDT","MASK_USDT","XCN_USDT","COMP_USDT","AEVO_USDT","COOKIE_USDT","ZEN_USDT","GMT_USDT","COTI_USDT","BEAMX_USDT","URO_USDT","IOTA_USDT","BULLY_USDT","HOLD_USDT","FLOCK_USDT","AGLD_USDT","QUBIC_USDT","BANANA_USDT","SWEAT_USDT","BARSIK_USDT","VRA_USDT","PAI_USDT","EOS_USDT","PONKE_USDT","UXLINK_USDT","SATS_USDT","1000000BABYDOGE_USDT","MOODENGETH_USDT","EGLD_USDT","TRISIG_USDT","CFX_USDT","RPL_USDT","GPU_USDT","HASHAI_USDT","AVAIL_USDT","HIPPO_USDT","AERO_USDT","STNK_USDT","API3_USDT","DEEP_USDT","CHEEMS_USDT","VANRY_USDT","TAI_USDT","C98_USDT","ELON_USDT","ZKL_USDT","CETUS_USDT","ONE_USDT","PAAL_USDT","ID_USDT","SHOGGOTH_USDT","SUAI_USDT","BAND_USDT","TRU_USDT","RSR_USDT","MAVIA_USDT","XMR_USDT","TEL_USDT","CPOOL_USDT","DEGEN_USDT","AIOZ_USDT","PLUME_USDT","FIDA_USDT","NEIRO_USDT","KSM_USDT","SOLV_USDT","CYBER_USDT","TNSR_USDT","HNT_USDT","DAG_USDT","ILV_USDT","ACE_USDT","ETHW_USDT","BB_USDT","STREAM_USDT","PORTAL_USDT","STORJ_USDT","TRUMP_USDT","GIGA_USDT","RAI_USDT","ARPA_USDT","PAXG_USDT","LAI_USDT","VVAIFU_USDT","SLC_USDT","USA_USDT","PERP_USDT","LQTY_USDT","PIN_USDT","1000MUMU_USDT","OGN_USDT","NMR_USDT","FLUID_USDT","AVA_USDT","U2U_USDT","LLM_USDT","J_USDT","UNFI_USDT","EDU_USDT","BSX_USDT","SUPER_USDT","YGG_USDT","KDA_USDT","1DOLLAR_USDT","CULT_USDT","PROM_USDT","10000WEN_USDT","GPS_USDT","ALT_USDT","LEVER_USDT","AIPUMP_USDT","ARK_USDT","LESTER_USDT","SOON_USDT","MEMEFI_USDT","USTC_USDT","ELONSOL_USDT","LPT_USDT","TWT_USDT","VELO_USDT","ENJ_USDT","HIGH_USDT","GMX_USDT","XPR_USDT","TJRM_USDT","DASH_USDT","1000000MOG_USDT","PEAQ_USDT","GRIFT_USDT","CAT_USDT","HOT_USDT","UMA_USDT","MORPHO_USDT","REQ_USDT","KNC_USDT","HEI_USDT","ZIL_USDT","QTUM_USDT","MOVR_USDT","GNO_USDT","CHEX_USDT","LMWR_USDT","HOOK_USDT","SSV_USDT","FOXY_USDT","BLUR_USDT","PRCL_USDT","XDC_USDT","NPC_USDT","ULTIMA_USDT","MUBI_USDT","OMNI_USDT","FLAY_USDT","ALU_USDT","MOTHER_USDT","X_USDT","NEO_USDT","GENE_USDT","CKB_USDT","BSW_USDT","TARA_USDT","MEW_USDT","SCR_USDT","CTC_USDT","RDNT_USDT","HAPPY_USDT","PHA_USDT","MAGA_USDT","ANKR_USDT","KAIA_USDT","SYN_USDT","GEMS_USDT","MOCA_USDT","RLC_USDT","KIMA_USDT","FLOW_USDT","WOJAK_USDT","MYRIA_USDT","WAVES_USDT","CHR_USDT","YFI_USDT","ALPHA_USDT","GODS_USDT","DUSK_USDT","SHRUB_USDT","AUDIO_USDT","FXS_USDT","AITECH_USDT","FLUX_USDT","T_USDT","DODO_USDT","IOTX_USDT","ACS_USDT","RIFSOL_USDT","XTZ_USDT","XVG_USDT","AXL_USDT","AIC_USDT","ALEO_USDT","ICE_USDT","ORAI_USDT","MAV_USDT","MANEKI_USDT","INSN_USDT","GLMR_USDT","HINT_USDT","KISHU_USDT","BONE_USDT","MAGIC_USDT","MICHI_USDT","SFP_USDT","ONT_USDT","ZETA_USDT","MON_USDT","AKT_USDT","POWER_USDT","LRC_USDT","ZEUS_USDT","SKL_USDT","BSV_USDT","OMG_USDT","DUCK_USDT","XAUT_USDT","CELR_USDT","BLZ_USDT","NKN_USDT","SWELL_USDT","BRISE_USDT","TROY_USDT","TAOCAT_USDT","AI16ZELIZA_USDT","BABYSHARK_USDT","MIGGLES_USDT","HFT_USDT","ALICE_USDT","CHESS_USDT","ANDYETH_USDT","RVN_USDT","CSPR_USDT","PEPE2_USDT","RARE_USDT","MASA_USDT","LOOKS_USDT","NFP_USDT","SCRT_USDT","VTHO_USDT","PRIME_USDT","BOBA_USDT","HARRY_USDT","RAD_USDT","10000COQ_USDT","ORCA_USDT","DEXE_USDT","VOXEL_USDT","MDOGS_USDT","TLM_USDT","OG_USDT","L3_USDT","MONKY_USDT","XTER_USDT","100000AIDOGE_USDT","RACA_USDT","CLORE_USDT","10000LADYS_USDT","GLQ_USDT","OL_USDT","POLS_USDT","PEPU_USDT","CTSI_USDT","CELO_USDT","CVX_USDT","FLR_USDT","ATH_USDT","GME_USDT","ZCX_USDT","NRN_USDT","ZIG_USDT","FLM_USDT","IOST_USDT","AMP_USDT","SXP_USDT","TORN_USDT","AZERO_USDT","SPEC_USDT","NULS_USDT","ATA_USDT","ASTR_USDT","1000APU_USDT","SOLO_USDT","FUN_USDT","BAR_USDT","ACA_USDT","MOBILE_USDT","TALENT_USDT","MAJOR_USDT","PEPECOIN_USDT","FB_USDT","VELODROME_USDT","SLP_USDT","AGI_USDT","WILD_USDT","MBX_USDT","BAT_USDT","MAX_USDT","HAT_USDT","MTL_USDT","STG_USDT","SNEK_USDT","BAL_USDT","GTC_USDT","OSMO_USDT","FUEL_USDT","ISLM_USDT","APEPE_USDT","HIVE_USDT","F_USDT","ZRX_USDT","A8_USDT","BEER_USDT","DEVVE_USDT","SMILE_USDT","FIRE_USDT","MODE_USDT","LINGO_USDT","SC_USDT","TRIAS_USDT","DADDY_USDT","RBNT_USDT","ALPACA_USDT","ORDER_USDT","SUN_USDT","DGB_USDT","BICO_USDT","DEGO_USDT","SCA_USDT","SQD_USDT","XCH_USDT","DENT_USDT","JOE_USDT","RON_USDT","PHIL_USDT","PYR_USDT","KMNO_USDT","SEND_USDT","DF_USDT","GAMEVIRTUAL_USDT","NTRN_USDT","1000000PEIPEI_USDT","SLF_USDT","STRAX_USDT","NAKA_USDT","CTK_USDT","XR_USDT","GAS_USDT","10000WHY_USDT","DRIFT_USDT","CATS_USDT","SYNTH_USDT","SPA_USDT","GEAR_USDT","LUNAI_USDT","APEX_USDT","CVC_USDT","BADGER_USDT","ZRC_USDT","PHNIX_USDT","SANTOS_USDT","SWAN_USDT","DIA_USDT","POLYX_USDT","1000BTT_USDT","JST_USDT","SYS_USDT","REI_USDT","GST_USDT","USDC_USDT","ACX_USDT","LAVA_USDT","ZERO_USDT","ZKJ_USDT","HIFI_USDT","LWOLF_USDT","MBL_USDT","BLAST_USDT","D_USDT","RSS3_USDT","VIDT_USDT","PSG_USDT","OXT_USDT","ICX_USDT","XRD_USDT","ALPH_USDT","GHX_USDT","REN_USDT","MDT_USDT","IDEX_USDT","MERL_USDT","TREAT_USDT","FORTH_USDT","CARV_USDT","PUFFER_USDT","OPEN_USDT","NOS_USDT","NFT_USDT","LSK_USDT","ISLAND_USDT","STEEM_USDT","CTXC_USDT","CREAM_USDT","LOOM_USDT","COOK_USDT","SCIHUB_USDT","XEC_USDT","NAVX_USDT","WMTX_USDT","LOKA_USDT","RIF_USDT","CITY_USDT","PORTO_USDT","WIN_USDT","IQ_USDT","PROPC_USDT","XNO_USDT","COMBO_USDT","POWR_USDT","ARCA_USDT","XEM_USDT","SYRUP_USDT","COS_USDT","FARM_USDT","XYRO_USDT","GHST_USDT","POND_USDT","BNT_USDT","PIRATE_USDT","G_USDT","WING_USDT","VIB_USDT","TICO_USDT","LAZIO_USDT","ALPINE_USDT","QI_USDT","SHX_USDT","WAXP_USDT","ONG_USDT","VIC_USDT","NEXO_USDT","GINNAN_USDT","NEON_USDT","DATA_USDT","SD_USDT","ALCX_USDT","CLOUD_USDT","CATE_USDT","SAFE_USDT","ASR_USDT","TAIKO_USDT","AERGO_USDT","QUICK_USDT","OMI_USDT","FIS_USDT","OAS_USDT","FIO_USDT","PIVX_USDT","ZENT_USDT","FTN_USDT","KMD_USDT","ERN_USDT","QKC_USDT","MVL_USDT","REX_USDT","LAT_USDT","DBR_USDT","GNS_USDT","DCR_USDT","SNT_USDT","AST_USDT","PROS_USDT","TLOS_USDT","ORBS_USDT","WAN_USDT","ELF_USDT","GOMINING_USDT","FIRO_USDT","CBK_USDT","YULI_USDT","LTO_USDT","PDA_USDT","BORA_USDT","PUNDIX_USDT","UFT_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
