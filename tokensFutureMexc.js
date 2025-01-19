const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","TRUMPOFFICIAL_USDT","SOL_USDT","XRP_USDT","TRUMP_USDT","FARTCOIN_USDT","LTC_USD","XRP_USD","ADA_USD","SUI_USDT","SAMO_USDT","AURORA_USDT","DAO_USDT","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","DOGE_USDT","JUP_USDT","ONDO_USDT","POPCAT_USDT","XCN_USDT","LLM_USDT","PEPE_USDT","ADA_USDT","M3M3_USDT","WIF_USDT","PNUT_USDT","ENA_USDT","BTC_USD","AI16Z_USDT","ETH_USD","ELONSOL_USDT","AIOS_USDT","HBAR_USDT","LINK_USDT","KEKIUS_USDT","AIXBT_USDT","TONCOIN_USDT","TIA_USDT","PIPPIN_USDT","GOAT_USDT","AVAX_USDT","APT_USDT","ARB_USDT","NC_USDT","LTC_USDT","XLM_USDT","WLD_USDT","AVAAI_USDT","ZEREBRO_USDT","ART_USDT","VIRTUAL_USDT","GRPH_USDT","ARCSOL_USDT","TRB_USDT","INSN_USDT","RAY_USDT","SPELL_USDT","GPS_USDT","GRIFFAIN_USDT","CRO_USDT","DEEP_USDT","1000BONK_USDT","XPR_USDT","SHIB_USDT","PENGU_USDT","DOT_USDT","SEI_USDT","INJ_USDT","SOLV_USDT","VERT_USDT","CHILLGUY_USDT","NEAR_USDT","TAO_USDT","OP_USDT","XVS_USDT","FET_USDT","KAS_USDT","10000LADYS_USDT","AGIXT_USDT","MOBY_USDT","LESTER_USDT","SONIC_USDT","AAVE_USDT","ELON_USDT","SWARMS_USDT","NOT_USDT","XTER_USDT","JTO_USDT","HLO_USDT","SPX_USDT","UFD_USDT","HYPE_USDT","GALA_USDT","ETHFI_USDT","USUAL_USDT","FIDA_USDT","FLOKI_USDT","AIMONICA_USDT","BNB_USDT","DOGS_USDT","LDO_USDT","SMILE_USDT","ALCH_USDT","BUTTHOLE_USDT","JASMY_USDT","TURBO_USDT","EIGEN_USDT","ALGO_USDT","CLAY_USDT","GROK_USDT","TOSHI_USDT","REEF_USDT","RUNE_USDT","RENDER_USDT","TRX_USDT","SUPRA_USDT","ORDI_USDT","ATOM_USDT","STRK_USDT","NEIROCTO_USDT","UXLINK_USDT","CRV_USDT","FWOG_USDT","MAGA_USDT","ACT_USDT","MOODENG_USDT","PYTH_USDT","SYNTH_USDT","FILECOIN_USDT","COOKIE_USDT","SAND_USDT","ORCA_USDT","BOME_USDT","GRASS_USDT","BRETT_USDT","BIO_USDT","BUZZ_USDT","DADDY_USDT","CGPT_USDT","GMT_USDT","MXNA_USDT","VELO_USDT","VVAIFU_USDT","APE_USDT","MANTA_USDT","TEVA_USDT","UNI_USDT","GRT_USDT","BGSC_USDT","FRED_USDT","GRIFT_USDT","ICP_USDT","PHA_USDT","1000000BABYDOGE_USDT","ZEN_USDT","DOGEGOV_USDT","BIGTIME_USDT","SAGA_USDT","MOODENGETH_USDT","SWAN_USDT","OGC_USDT","VET_USDT","BCH_USDT","AEVO_USDT","ARKM_USDT","HOLD_USDT","CFX_USDT","VISTA_USDT","MOVE_USDT","SUSHI_USDT","GENE_USDT","FOCAI_USDT","DYDX_USDT","TREAT_USDT","LUCE_USDT","CATGOLD_USDT","LUNC_USDT","ZKSYNC_USDT","NEIROETH_USDT","NEUR_USDT","DSYNC_USDT","S_USDT","XDC_USDT","MLG_USDT","STX_USDT","EOS_USDT","MORPHO_USDT","ETC_USDT","DUCK_USDT","NEIRO_USDT","URO_USDT","POL_USDT","STNK_USDT","RSR_USDT","AR_USDT","SATS_USDT","PAAL_USDT","POWER_USDT","DOG_USDT","1000RATS_USDT","AVB_USDT","1000000MOG_USDT","AGLD_USDT","HMSTR_USDT","GIGA_USDT","BSX_USDT","HAT_USDT","PUMPAI_USDT","IQ6900_USDT","AKUMA_USDT","RAI_USDT","OM_USDT","BABYSHARK_USDT","EDU_USDT","TRISIG_USDT","NPC_USDT","VRA_USDT","DRIFT_USDT","FTT_USDT","HIPPO_USDT","XAI_USDT","MANA_USDT","ENS_USDT","OMG_USDT","MEME_USDT","NIKO_USDT","SQT_USDT","CORE_USDT","PENDLE_USDT","IOTA_USDT","MYRO_USDT","FLOCK_USDT","BAL_USDT","MEW_USDT","PONKE_USDT","ROSE_USDT","COW_USDT","ELIZA_USDT","1000MUMU_USDT","HNT_USDT","LINGO_USDT","HAPPY_USDT","MICHI_USDT","AIPUMP_USDT","XVG_USDT","HINT_USDT","VANA_USDT","W_USDT","GPU_USDT","PEAQ_USDT","EGLD_USDT","SNAI_USDT","TETSUO_USDT","LUNANEW_USDT","BEAMX_USDT","CHZ_USDT","MEMEFI_USDT","GALAXIS_USDT","IO_USDT","DEXE_USDT","DUKO_USDT","TNSR_USDT","UNFI_USDT","CETUS_USDT","PEOPLE_USDT","QUBIC_USDT","KMNO_USDT","THE_USDT","PHB_USDT","COMP_USDT","GNON_USDT","ZRO_USDT","DYM_USDT","IMX_USDT","BULLY_USDT","PHNIX_USDT","CAT_USDT","DEAI_USDT","BERT_USDT","YNE_USDT","PORTAL_USDT","ZEUS_USDT","MOTHER_USDT","TAI_USDT","TOKEN_USDT","RIFSOL_USDT","AERO_USDT","THETA_USDT","BANANA_USDT","ENJ_USDT","CLORE_USDT","DEGEN_USDT","SUAI_USDT","1INCH_USDT","PIN_USDT","AI_USDT","SQD_USDT","SUPER_USDT","METIS_USDT","CLOUD_USDT","BAN_USDT","ALT_USDT","IDEX_USDT","F_USDT","SOLO_USDT","TROY_USDT","X_USDT","BARSIK_USDT","KSM_USDT","AXS_USDT","1000APU_USDT","MASK_USDT","BLZ_USDT","1CAT_USDT","LQTY_USDT","MINA_USDT","VANRY_USDT","BB_USDT","AITECH_USDT","VADER_USDT","RBNT_USDT","ATA_USDT","LPT_USDT","LOOM_USDT","SLERF_USDT","SHRUB_USDT","KDA_USDT","FLR_USDT","BILLY_USDT","MUBI_USDT","KEY_USDT","MIGGLES_USDT","AI16ZELIZA_USDT","MAXSOL_USDT","CTK_USDT","ONE_USDT","NKN_USDT","MAVIA_USDT","PIXEL_USDT","MAGIC_USDT","MKR_USDT","BONE_USDT","CAKE_USDT","GAMEVIRTUAL_USDT","ZEC_USDT","COTI_USDT","SNX_USDT","BEER_USDT","FAI_USDT","CYBER_USDT","MAJOR_USDT","NOS_USDT","AIOZ_USDT","WOO_USDT","KAVA_USDT","WOJAK_USDT","PRCL_USDT","LAI_USDT","ULTIMA_USDT","QNT_USDT","XMR_USDT","BNXNEW_USDT","SUNDOG_USDT","ILV_USDT","GOATS_USDT","GEAR_USDT","HOT_USDT","TOMI_USDT","YGG_USDT","TRU_USDT","ME_USDT","1000000PEIPEI_USDT","CLV_USDT","CPOOL_USDT","SCIHUB_USDT","OMNI_USDT","ARPA_USDT","GINNAN_USDT","ORAI_USDT","ALEO_USDT","SOON_USDT","PEPE2_USDT","BLUR_USDT","SWFTC_USDT","AVA_USDT","HIVE_USDT","C98_USDT","ACH_USDT","10000COQ_USDT","NEO_USDT","ZIG_USDT","ZETA_USDT","DF_USDT","ZIL_USDT","MYRIA_USDT","STORJ_USDT","CKB_USDT","HASHAI_USDT","ATH_USDT","SKL_USDT","SILLY_USDT","HOOK_USDT","BRISE_USDT","10000WEN_USDT","BCCOIN_USDT","AZERO_USDT","HIFI_USDT","AKT_USDT","CULT_USDT","MOBILE_USDT","AMP_USDT","KAIA_USDT","MNT_USDT","BANANAS31_USDT","ORDER_USDT","DASH_USDT","AUDIO_USDT","SOVRN_USDT","WMTX_USDT","CELR_USDT","OVER_USDT","LINA_USDT","CATS_USDT","LOFI_USDT","GME_USDT","CLANKER_USDT","ONT_USDT","API3_USDT","TAOCAT_USDT","TRIAS_USDT","OL_USDT","NAKA_USDT","ID_USDT","SPEC_USDT","CATDOG_USDT","CATE_USDT","10000WHY_USDT","EARNM_USDT","UMA_USDT","ALPH_USDT","YFI_USDT","MANEKI_USDT","FB_USDT","AXL_USDT","DAG_USDT","UTK_USDT","XION_USDT","LUMIA_USDT","GLQ_USDT","LOOKS_USDT","BAKE_USDT","BAT_USDT","LRC_USDT","SEN_USDT","DUSK_USDT","FOXY_USDT","STG_USDT","MOCA_USDT","FLOW_USDT","ANDYETH_USDT","ZRX_USDT","WILD_USDT","DEVVE_USDT","SYN_USDT","SUNCAT_USDT","SWELL_USDT","XTZ_USDT","PENG_USDT","ANKR_USDT","REN_USDT","PYR_USDT","KOMA_USDT","MTL_USDT","LWOLF_USDT","WAVES_USDT","XCH_USDT","SNEK_USDT","SKI_USDT","ICX_USDT","HIGH_USDT","REZ_USDT","DENT_USDT","IOTX_USDT","TWT_USDT","NMR_USDT","100000AIDOGE_USDT","ALU_USDT","SHOGGOTH_USDT","PUFFER_USDT","CSPR_USDT","MODE_USDT","CELO_USDT","NFP_USDT","MBOX_USDT","CHEEMS_USDT","PAI_USDT","BAND_USDT","USTC_USDT","SFP_USDT","MONKY_USDT","VR_USDT","RACA_USDT","ARDR_USDT","ICE_USDT","STEEM_USDT","SXP_USDT","USDC_USDT","ALICE_USDT","HEART_USDT","SCR_USDT","SLP_USDT","CATI_USDT","TLM_USDT","ROOT_USDT","FUEL_USDT","CHR_USDT","HFT_USDT","KNC_USDT","ACE_USDT","1000BTT_USDT","PROM_USDT","ZBCN_USDT","LIT_USDT","GMX_USDT","PRIME_USDT","KISHU_USDT","LISTA_USDT","HARRY_USDT","GLMR_USDT","ETHW_USDT","MOVR_USDT","RVN_USDT","MERL_USDT","CHESS_USDT","ASTR_USDT","ZERO_USDT","ZEX_USDT","TEL_USDT","IOST_USDT","NRN_USDT","WUF_USDT","PROPC_USDT","RDNT_USDT","AGI_USDT","ULTI_USDT","AUCTION_USDT","ARTY_USDT","OG_USDT","EGO_USDT","XRD_USDT","NTRN_USDT","ONG_USDT","PHIL_USDT","TALENT_USDT","FLUX_USDT","RARE_USDT","RLC_USDT","APEX_USDT","AMB_USDT","LEVER_USDT","RON_USDT","ZKL_USDT","IQ_USDT","NS_USDT","SSV_USDT","ACA_USDT","RAD_USDT","ARK_USDT","ALPHA_USDT","FXS_USDT","BEL_USDT","SCA_USDT","MASA_USDT","CTXC_USDT","GEMS_USDT","LUNAI_USDT","BSV_USDT","ACX_USDT","ISLAND_USDT","MAV_USDT","LAVA_USDT","JOE_USDT","D_USDT","OGN_USDT","ZENT_USDT","L3_USDT","LMWR_USDT","VIDT_USDT","CVX_USDT","PIXFI_USDT","FLM_USDT","SEND_USDT","WIN_USDT","SLF_USDT","QTUM_USDT","POND_USDT","WAT_USDT","VELODROME_USDT","OSMO_USDT","BADGER_USDT","GAS_USDT","MAX_USDT","DIA_USDT","PEPECOIN_USDT","PORTO_USDT","OPEN_USDT","LOGX_USDT","DODO_USDT","RPL_USDT","LSK_USDT","FIRE_USDT","ARCA_USDT","NAVX_USDT","GHX_USDT","STMX_USDT","PAXG_USDT","BLAST_USDT","WING_USDT","SC_USDT","BZZ_USDT","TAIKO_USDT","SYS_USDT","DOP_USDT","SD_USDT","POLS_USDT","XEC_USDT","VTHO_USDT","TLOS_USDT","CREAM_USDT","XR_USDT","NEON_USDT","SUN_USDT","BOBA_USDT","BICO_USDT","SCRT_USDT","PSG_USDT","RADAR_USDT","MVL_USDT","REX_USDT","RSS3_USDT","BSW_USDT","POLYX_USDT","GTC_USDT","VOXEL_USDT","FUN_USDT","DGB_USDT","PERP_USDT","BNT_USDT","SAFE_USDT","AVAIL_USDT","ACS_USDT","SANTOS_USDT","COS_USDT","NYAN_USDT","TFUEL_USDT","ZCX_USDT","OMI_USDT","COOK_USDT","STPT_USDT","KIMA_USDT","NFT_USDT","REI_USDT","CBK_USDT","POWR_USDT","A8_USDT","FIRO_USDT","SWEAT_USDT","PIRATE_USDT","FARM_USDT","STREAM_USDT","PUNDIX_USDT","RIF_USDT","TKO_USDT","ZRC_USDT","U2U_USDT","GODS_USDT","CARV_USDT","APEPE_USDT","XEM_USDT","CTC_USDT","LTO_USDT","MPLX_USDT","ERN_USDT","MBL_USDT","PROS_USDT","BAR_USDT","DEGO_USDT","VIB_USDT","CVC_USDT","AERGO_USDT","LAT_USDT","GLM_USDT","BURGER_USDT","CTSI_USDT","COMBO_USDT","ALPACA_USDT","DATA_USDT","SYRUP_USDT","ZKJ_USDT","G_USDT","CFG_USDT","LOKA_USDT","OXT_USDT","SNT_USDT","VITE_USDT","FIO_USDT","OAS_USDT","WAXP_USDT","GHST_USDT","REQ_USDT","STRAX_USDT","BORA_USDT","FTN_USDT","DBR_USDT","MDT_USDT","GOMINING_USDT","UFT_USDT","ALPINE_USDT","QI_USDT","NULS_USDT","ALCX_USDT","ATM_USDT","T_USDT","QKC_USDT","KMD_USDT","FORTH_USDT","MON_USDT","QUICK_USDT","FLUID_USDT","XNO_USDT","ASR_USDT","FIS_USDT","JST_USDT","ORBS_USDT","GNS_USDT","CITY_USDT","LAZIO_USDT","ELF_USDT","PDA_USDT","VIC_USDT","PIVX_USDT","WAN_USDT","GNO_USDT","NEXO_USDT","AST_USDT","JUV_USDT","DCR_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
