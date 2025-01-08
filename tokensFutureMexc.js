const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","SONIC_USDT","SOL_USDT","XRP_USDT","SUI_USDT","DOGE_USDT","LTC_USD","XRP_USD","ADA_USD","SAMO_USDT","AURORA_USDT","DAO_USDT","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","KEKIUS_USDT","SWARMS_USDT","POPCAT_USDT","ADA_USDT","TRUMP_USDT","APT_USDT","FARTCOIN_USDT","WLD_USDT","PEPE_USDT","HBAR_USDT","DOT_USDT","ENA_USDT","LINK_USDT","BTC_USD","WIF_USDT","ETH_USD","GOAT_USDT","ACT_USDT","TIA_USDT","NEAR_USDT","AVAX_USDT","ONDO_USDT","HIVE_USDT","FET_USDT","ALCH_USDT","SEI_USDT","ARB_USDT","PENGU_USDT","TONCOIN_USDT","INJ_USDT","VIRTUAL_USDT","BUTTHOLE_USDT","PNUT_USDT","XLM_USDT","COOKIE_USDT","TRB_USDT","TAO_USDT","BLZ_USDT","FTM_USDT","SUPRA_USDT","KAS_USDT","LTC_USDT","AAVE_USDT","AVAAI_USDT","BIO_USDT","AI_USDT","SHIB_USDT","LESTER_USDT","BNB_USDT","G_USDT","FLOCK_USDT","ZEREBRO_USDT","SPX_USDT","ORDI_USDT","MOODENG_USDT","PUMPAI_USDT","FILECOIN_USDT","AI16Z_USDT","OP_USDT","DOGS_USDT","ORAI_USDT","NOT_USDT","CRO_USDT","HMSTR_USDT","USUAL_USDT","RENDER_USDT","POLS_USDT","M3M3_USDT","FLOKI_USDT","BUZZ_USDT","GALA_USDT","BABYSHARK_USDT","ATOM_USDT","CHILLGUY_USDT","HYPE_USDT","FWOG_USDT","MOVE_USDT","RUNE_USDT","ALGO_USDT","XVS_USDT","SAND_USDT","ZEN_USDT","AIXBT_USDT","TAOCAT_USDT","JASMY_USDT","APE_USDT","NEIROCTO_USDT","LUNANEW_USDT","SOVRN_USDT","CRV_USDT","UNI_USDT","THE_USDT","ARCSOL_USDT","XVG_USDT","BOME_USDT","ETHFI_USDT","TEVA_USDT","GRIFFAIN_USDT","DYDX_USDT","ICP_USDT","LOFI_USDT","UFD_USDT","STRK_USDT","1000000BABYDOGE_USDT","1000BONK_USDT","FTT_USDT","LDO_USDT","EIGEN_USDT","OGC_USDT","GROK_USDT","NRN_USDT","URO_USDT","TRX_USDT","TURBO_USDT","DSYNC_USDT","SUSHI_USDT","TROY_USDT","VVAIFU_USDT","MAXSOL_USDT","JTO_USDT","UXLINK_USDT","ARKM_USDT","PHA_USDT","DEEP_USDT","TOSHI_USDT","VANA_USDT","IMX_USDT","JUP_USDT","GRT_USDT","LUCE_USDT","AGLD_USDT","W_USDT","GRASS_USDT","RAI_USDT","ZKSYNC_USDT","IO_USDT","VISTA_USDT","PEPE2_USDT","GMT_USDT","NEIROETH_USDT","BRETT_USDT","AIOZ_USDT","CPOOL_USDT","DEGEN_USDT","ROSE_USDT","PAAL_USDT","XAI_USDT","FIRO_USDT","VANRY_USDT","BCH_USDT","ENS_USDT","MYRO_USDT","VET_USDT","1000RATS_USDT","MOODENGETH_USDT","SAGA_USDT","PEOPLE_USDT","AEVO_USDT","RSR_USDT","STEEM_USDT","WOO_USDT","VRA_USDT","NEIRO_USDT","HASHAI_USDT","PYTH_USDT","HIPPO_USDT","MANA_USDT","MANTA_USDT","RIFSOL_USDT","RAY_USDT","IOTA_USDT","CORE_USDT","ICE_USDT","AR_USDT","SATS_USDT","CFX_USDT","TAI_USDT","MKR_USDT","BAN_USDT","LUNC_USDT","PENDLE_USDT","ETC_USDT","BARSIK_USDT","DEAI_USDT","VELO_USDT","POL_USDT","SOON_USDT","STX_USDT","1000000MOG_USDT","ATA_USDT","ZRO_USDT","MAGA_USDT","PHB_USDT","AI16ZELIZA_USDT","DOGEGOV_USDT","ZEC_USDT","LINA_USDT","MORPHO_USDT","WIN_USDT","MEME_USDT","BULLY_USDT","CAT_USDT","BIGTIME_USDT","MIGGLES_USDT","COW_USDT","REEF_USDT","ELIZA_USDT","MAVIA_USDT","CHZ_USDT","PIN_USDT","POLYX_USDT","OMNI_USDT","UTK_USDT","DYM_USDT","ILV_USDT","PORTAL_USDT","ME_USDT","CHEEMS_USDT","ZEUS_USDT","WAVES_USDT","GALAXIS_USDT","BANANA_USDT","EOS_USDT","THETA_USDT","X_USDT","MAJOR_USDT","CGPT_USDT","MUBI_USDT","SPEC_USDT","FOXY_USDT","SNX_USDT","AXS_USDT","DOG_USDT","PIXEL_USDT","AVA_USDT","COTI_USDT","PONKE_USDT","SWAN_USDT","HOLD_USDT","NPC_USDT","GIGA_USDT","OM_USDT","ONE_USDT","BB_USDT","MICHI_USDT","KAVA_USDT","VELODROME_USDT","LQTY_USDT","MPLX_USDT","TOKEN_USDT","SWELL_USDT","1INCH_USDT","PEAQ_USDT","QNT_USDT","EGLD_USDT","MINA_USDT","STORJ_USDT","BEAMX_USDT","ACH_USDT","STPT_USDT","AERO_USDT","KOMA_USDT","TWT_USDT","MEW_USDT","TOMI_USDT","GINNAN_USDT","RBNT_USDT","BILLY_USDT","STG_USDT","MAGIC_USDT","MASK_USDT","UMA_USDT","ARK_USDT","ZIL_USDT","CAKE_USDT","XION_USDT","COMP_USDT","ORCA_USDT","SANTOS_USDT","KEY_USDT","CETUS_USDT","LUMIA_USDT","U2U_USDT","KNC_USDT","SUPER_USDT","SYN_USDT","ENJ_USDT","HOOK_USDT","HAPPY_USDT","CYBER_USDT","AITECH_USDT","XDC_USDT","FRED_USDT","ATH_USDT","APEPE_USDT","AUCTION_USDT","QUBIC_USDT","C98_USDT","ZETA_USDT","CHR_USDT","KSM_USDT","REN_USDT","CATI_USDT","NEO_USDT","SPELL_USDT","DRIFT_USDT","SXP_USDT","EARNM_USDT","CLANKER_USDT","SUNDOG_USDT","NIKO_USDT","MEMEFI_USDT","ATM_USDT","ALICE_USDT","FLOW_USDT","MYRIA_USDT","LUNAI_USDT","LINGO_USDT","GOATS_USDT","CLORE_USDT","FUEL_USDT","MOTHER_USDT","SCIHUB_USDT","OSMO_USDT","DUSK_USDT","TRU_USDT","BLUR_USDT","HNT_USDT","MNT_USDT","ALPH_USDT","1000MUMU_USDT","API3_USDT","ALEO_USDT","AKT_USDT","LAI_USDT","SAFE_USDT","F_USDT","KDA_USDT","PRCL_USDT","PUFFER_USDT","LPT_USDT","CATDOG_USDT","DASH_USDT","BAKE_USDT","ZIG_USDT","YGG_USDT","ISLAND_USDT","WOJAK_USDT","DF_USDT","FAI_USDT","UNFI_USDT","EDU_USDT","XMR_USDT","BAL_USDT","CLOUD_USDT","ID_USDT","SUNWUKONG_USDT","OL_USDT","BAT_USDT","ALT_USDT","USTC_USDT","ALPHA_USDT","PENG_USDT","1000000PEIPEI_USDT","LOOKS_USDT","MOCA_USDT","ARPA_USDT","SC_USDT","SMILE_USDT","BNXNEW_USDT","NFP_USDT","ZENT_USDT","CELO_USDT","HOT_USDT","NAKA_USDT","PAI_USDT","POWR_USDT","1000APU_USDT","IOTX_USDT","DADDY_USDT","CELR_USDT","BCCOIN_USDT","TEL_USDT","SLERF_USDT","FIDA_USDT","RLC_USDT","SCR_USDT","ZRX_USDT","AXL_USDT","FLM_USDT","CKB_USDT","LEVER_USDT","REZ_USDT","ACX_USDT","ANKR_USDT","MONKY_USDT","AZERO_USDT","YFI_USDT","MBOX_USDT","GMX_USDT","MOVR_USDT","ARTY_USDT","OG_USDT","COS_USDT","ONT_USDT","METIS_USDT","BONE_USDT","MAX_USDT","XTZ_USDT","SFP_USDT","CTXC_USDT","WILD_USDT","SOLO_USDT","FXS_USDT","HIGH_USDT","SUNCAT_USDT","FB_USDT","RDNT_USDT","SUN_USDT","OGN_USDT","TLM_USDT","NMR_USDT","MAV_USDT","MANEKI_USDT","STNK_USDT","ACE_USDT","10000LADYS_USDT","BAND_USDT","LRC_USDT","CSPR_USDT","MNRY_USDT","CLV_USDT","ZERO_USDT","PRIME_USDT","HEART_USDT","JOE_USDT","MODE_USDT","OVER_USDT","DUKO_USDT","AUDIO_USDT","GLMR_USDT","LIT_USDT","RACA_USDT","RARE_USDT","RON_USDT","RAD_USDT","ORDER_USDT","GLQ_USDT","BADGER_USDT","SKL_USDT","100000AIDOGE_USDT","ACA_USDT","ETHW_USDT","1000BTT_USDT","BICO_USDT","SCRT_USDT","SSV_USDT","SCA_USDT","AERGO_USDT","TNSR_USDT","FLR_USDT","1CAT_USDT","SLP_USDT","BEL_USDT","AGI_USDT","HARRY_USDT","KISHU_USDT","LISTA_USDT","DENT_USDT","RVN_USDT","ANDYETH_USDT","MTL_USDT","NS_USDT","TRIAS_USDT","OMI_USDT","LOGX_USDT","NKN_USDT","POND_USDT","PSG_USDT","KMNO_USDT","SNEK_USDT","10000COQ_USDT","MASA_USDT","AMP_USDT","VOXEL_USDT","CATE_USDT","NTRN_USDT","DEXE_USDT","CATS_USDT","DOP_USDT","CROS_USDT","DODO_USDT","HIFI_USDT","SILLY_USDT","BSV_USDT","COOK_USDT","VIB_USDT","STMX_USDT","IOST_USDT","SWEAT_USDT","IQ_USDT","KAIA_USDT","ALU_USDT","ASTR_USDT","10000WEN_USDT","OMG_USDT","BSW_USDT","ULTI_USDT","PYR_USDT","SD_USDT","CHESS_USDT","PERP_USDT","QTUM_USDT","DGB_USDT","AMB_USDT","XEC_USDT","NAVX_USDT","NEON_USDT","ELON_USDT","RIF_USDT","MERL_USDT","SLF_USDT","CTSI_USDT","LL_USDT","KIMA_USDT","HFT_USDT","WAT_USDT","CVX_USDT","PEPECOIN_USDT","GTC_USDT","FLUX_USDT","IDEX_USDT","PROM_USDT","GME_USDT","BLAST_USDT","L3_USDT","PAXG_USDT","CREAM_USDT","CFG_USDT","A8_USDT","VIDT_USDT","FIS_USDT","CVC_USDT","XR_USDT","BEER_USDT","USDC_USDT","GEAR_USDT","CTK_USDT","TALENT_USDT","ZRC_USDT","STREAM_USDT","DAG_USDT","ALPACA_USDT","RADAR_USDT","SEND_USDT","GAS_USDT","LTO_USDT","BURGER_USDT","CARV_USDT","XCH_USDT","RPL_USDT","TKO_USDT","PIXFI_USDT","REI_USDT","DIA_USDT","ICX_USDT","SQT_USDT","XPR_USDT","GLM_USDT","RSS3_USDT","LWOLF_USDT","COMBO_USDT","MDT_USDT","KMD_USDT","WING_USDT","AVAIL_USDT","FARM_USDT","SYRUP_USDT","CTC_USDT","XRD_USDT","LOOM_USDT","MOBILE_USDT","ARCA_USDT","ERN_USDT","BORA_USDT","DEGO_USDT","BAR_USDT","STRAX_USDT","FIO_USDT","10000WHY_USDT","PORTO_USDT","ALPINE_USDT","QKC_USDT","ACS_USDT","NULS_USDT","GHX_USDT","ZCX_USDT","JST_USDT","FIRE_USDT","FORTH_USDT","DATA_USDT","OPEN_USDT","EGO_USDT","ROOT_USDT","KP3R_USDT","FLUID_USDT","NFT_USDT","OXT_USDT","BZZ_USDT","LSK_USDT","PHIL_USDT","VTHO_USDT","LAZIO_USDT","MON_USDT","SNT_USDT","AST_USDT","PDA_USDT","LOKA_USDT","MBL_USDT","ZKL_USDT","LMWR_USDT","GEMS_USDT","XEM_USDT","ELF_USDT","SYS_USDT","XCN_USDT","TAIKO_USDT","GHST_USDT","WAXP_USDT","PROS_USDT","ZBCN_USDT","JUV_USDT","APEX_USDT","TLOS_USDT","REQ_USDT","ORBS_USDT","PUNDIX_USDT","PIVX_USDT","BETA_USDT","MVL_USDT","QUICK_USDT","T_USDT","NYAN_USDT","BOBA_USDT","SWFTC_USDT","QI_USDT","VIC_USDT","OAS_USDT","XNO_USDT","FUN_USDT","FTN_USDT","GNS_USDT","ZKJ_USDT","ASR_USDT","ZEX_USDT","DBR_USDT","ALCX_USDT","VITE_USDT","ONG_USDT","GODS_USDT","LAT_USDT","PIRATE_USDT","BNT_USDT","DCR_USDT","CITY_USDT","TFUEL_USDT","GOMINING_USDT","WAN_USDT","GNO_USDT","UFT_USDT","ARDR_USDT","NEXO_USDT","CATGOLD_USDT","D_USDT","POWER_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
