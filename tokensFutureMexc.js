const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","OM_USDT","KERNEL_USDT","SOL_USDT","BTC_USD","FARTCOIN_USDT","ETH_USD","SUI_USDT","LTC_USD","XRP_USD","ADA_USD","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","WCT_USDT","XRP_USDT","VON_USDT","ACH_USDT","AERGO_USDT","MDOGS_USDT","POPCAT_USDT","PI_USDT","PROMPT_USDT","VTHO_USDT","IP_USDT","FHE_USDT","GHIBLI_USDT","BUBB_USDT","FLUID_USDT","ADA_USDT","DOGE_USDT","PEPE_USDT","RFC_USDT","ACT_USDT","AVAX_USDT","LINK_USDT","BABY_USDT","ENA_USDT","ONDO_USDT","KILO_USDT","GODS_USDT","ALCH_USDT","TONCOIN_USDT","TRUMPOFFICIAL_USDT","WIF_USDT","LTC_USDT","JASMY_USDT","PUMP_USDT","VIDT_USDT","ANIME_USDT","RIFSOL_USDT","FUN_USDT","BAL_USDT","ALICE_USDT","BRETT_USDT","ORCA_USDT","APT_USDT","DOT_USDT","AAVE_USDT","NEIROETH_USDT","CATS_USDT","TAO_USDT","MUBARAK_USDT","MANEKI_USDT","TRX_USDT","AVAAI_USDT","STO_USDT","CULT_USDT","SLING_USDT","NEAR_USDT","SEI_USDT","LISTA_USDT","PWEASE_USDT","BNB_USDT","ALGO_USDT","FET_USDT","GAS_USDT","DF_USDT","ARB_USDT","HBAR_USDT","SHIB_USDT","LAYER_USDT","AFT_USDT","ATOM_USDT","TIA_USDT","WLD_USDT","TRIAS_USDT","GFM_USDT","GRIFT_USDT","LDO_USDT","INJ_USDT","SAROS_USDT","CRV_USDT","TAT_USDT","MUBARAKAH_USDT","KAS_USDT","OP_USDT","WING_USDT","RENDER_USDT","VIRTUAL_USDT","NOT_USDT","BEL_USDT","DEGO_USDT","HYPE_USDT","PNUT_USDT","XCN_USDT","ZEC_USDT","GALA_USDT","BROCCOLIF3B_USDT","GRASS_USDT","PARTI_USDT","SZN_USDT","BCH_USDT","MANA_USDT","FILECOIN_USDT","EDU_USDT","BMT_USDT","FLOKI_USDT","EOS_USDT","BADAI_USDT","DRB_USDT","BNBCARD_USDT","YZYSOL_USDT","UNI_USDT","VET_USDT","APE_USDT","OL_USDT","SPX_USDT","COTI_USDT","JUP_USDT","ARK_USDT","XVS_USDT","A8_USDT","CRO_USDT","PUMPAI_USDT","VINE_USDT","API3_USDT","CBK_USDT","COW_USDT","AI16Z_USDT","BERA_USDT","XRD_USDT","PENGU_USDT","XLM_USDT","ORDI_USDT","GUN_USDT","ALEO_USDT","TRUMP_USDT","BR_USDT","ICP_USDT","TURBO_USDT","VOXEL_USDT","MOODENG_USDT","AGIXT_USDT","S_USDT","BNKR_USDT","CHEX_USDT","RAY_USDT","DOGINME_USDT","ZRO_USDT","PHA_USDT","1000BONK_USDT","ETC_USDT","MOVE_USDT","SUNDOG_USDT","ARCSOL_USDT","LUCE_USDT","DHN_USDT","ALPACA_USDT","PENDLE_USDT","RUNE_USDT","XTZ_USDT","USUAL_USDT","AIXBT_USDT","CAKE_USDT","GOAT_USDT","SAND_USDT","LAI_USDT","SIREN_USDT","CAPTAINBNB_USDT","AIL_USDT","TIBBIR_USDT","ME_USDT","DOGS_USDT","K_USDT","OXT_USDT","MOODENGETH_USDT","BID_USDT","FARTBOY_USDT","KEKIUS_USDT","EIGEN_USDT","MKR_USDT","OIK_USDT","SXP_USDT","DAG_USDT","PELL_USDT","FWOG_USDT","WHITE_USDT","LOOM_USDT","BROCCOLI_USDT","SAGA_USDT","SUPRA_USDT","PIPPIN_USDT","BGSC_USDT","WIZZ_USDT","KAITO_USDT","AUCTION_USDT","ETHFI_USDT","FAI_USDT","KEYCAT_USDT","MOCA_USDT","BADGER_USDT","MELANIA_USDT","100000AIDOGE_USDT","1000000MOG_USDT","LUNC_USDT","ENS_USDT","XMR_USDT","NIL_USDT","GROK_USDT","STRK_USDT","SEED_USDT","X_USDT","GMT_USDT","STONKS_USDT","JTO_USDT","1000MUMU_USDT","BIGTIME_USDT","GOMINING_USDT","EDGE_USDT","BUTTHOLE_USDT","VVV_USDT","TOMI_USDT","TUT_USDT","ELON4AFD_USDT","GMX_USDT","PYTH_USDT","REZ_USDT","1INCH_USDT","HIPPO_USDT","HOOD_USDT","IMX_USDT","TLM_USDT","SUPER_USDT","AXS_USDT","ARKM_USDT","NEO_USDT","XAUT_USDT","TRB_USDT","HOLD_USDT","MAVIA_USDT","BUZZ_USDT","FTT_USDT","MASA_USDT","PLUME_USDT","KAVA_USDT","CHZ_USDT","RADAR_USDT","LOGX_USDT","ANDYETH_USDT","THETA_USDT","MNT_USDT","ZETA_USDT","FORTH_USDT","MASK_USDT","ZKSYNC_USDT","W_USDT","SONIC_USDT","SKL_USDT","IMT_USDT","PAXG_USDT","GPS_USDT","RARE_USDT","BROCCOLIF2B_USDT","DADDY_USDT","BTC_USDC","DYDX_USDT","METIS_USDT","ZEREBRO_USDT","STX_USDT","UFD_USDT","WOO_USDT","HIFI_USDT","LIBRA_USDT","PEPU_USDT","PEOPLE_USDT","CKB_USDT","MDT_USDT","1000RATS_USDT","WAL_USDT","VRA_USDT","BOME_USDT","POL_USDT","DYM_USDT","CETUS_USDT","JELLYJELLY_USDT","BIO_USDT","ARPA_USDT","RSR_USDT","UXLINK_USDT","QUICK_USDT","RACA_USDT","CHILLGUY_USDT","GRT_USDT","TOSHI_USDT","CTXC_USDT","CSPR_USDT","DEEP_USDT","HNT_USDT","NEIROCTO_USDT","G7_USDT","STAR10_USDT","NS_USDT","AR_USDT","GRIFFAIN_USDT","CVC_USDT","WAV_USDT","CFX_USDT","SPELL_USDT","BERT_USDT","ACS_USDT","BB_USDT","PAAL_USDT","NPC_USDT","PERP_USDT","HMSTR_USDT","GIGA_USDT","PORTAL_USDT","AKT_USDT","SHELL_USDT","RSS3_USDT","CORE_USDT","VISTA_USDT","RAI_USDT","1000000BABYDOGE_USDT","CPOOL_USDT","ZEN_USDT","DOGEAI_USDT","COOKIE_USDT","SNX_USDT","SATS_USDT","TST_USDT","BLUR_USDT","IOTX_USDT","DAO_USDT","MYRO_USDT","PIXEL_USDT","PAI_USDT","GPU_USDT","FORM_USDT","QUBIC_USDT","PEAQ_USDT","CATI_USDT","AVL_USDT","NKN_USDT","LPT_USDT","MEW_USDT","CHEEMS_USDT","FRED_USDT","MEME_USDT","BAN_USDT","SNT_USDT","MANTA_USDT","COMP_USDT","ICE_USDT","ROAM_USDT","ILV_USDT","DOGEGOV_USDT","DSYNC_USDT","XOXO_USDT","APX_USDT","WOJAK_USDT","SOLV_USDT","TAI_USDT","XDC_USDT","VELO_USDT","BANANA_USDT","KOMA_USDT","SWARMS_USDT","BEAMX_USDT","YNE_USDT","FLUX_USDT","BLZ_USDT","IO_USDT","PHB_USDT","ULTIMA_USDT","LUNANEW_USDT","ZIL_USDT","VVAIFU_USDT","CYBER_USDT","MORPHO_USDT","EGLD_USDT","BAKE_USDT","BSW_USDT","DOG_USDT","TWT_USDT","SOL_USDC","FLR_USDT","SUSHI_USDT","AEVO_USDT","PRCL_USDT","DEVVE_USDT","RED_USDT","MBOX_USDT","D_USDT","LQTY_USDT","AERO_USDT","DEAI_USDT","QNT_USDT","OMNI_USDT","CATTON_USDT","SYN_USDT","FB_USDT","ROSE_USDT","1DOLLAR_USDT","AMI_USDT","USTC_USDT","DEGEN_USDT","YGG_USDT","AITECH_USDT","SWAN_USDT","IOTA_USDT","ZBCN_USDT","F_USDT","STORJ_USDT","XVG_USDT","SLF_USDT","RLC_USDT","TOKEN_USDT","AVA_USDT","EUR_USDT","SYS_USDT","PEPECOIN_USDT","HEI_USDT","MINA_USDT","MUBI_USDT","AIOZ_USDT","DBR_USDT","THE_USDT","KNC_USDT","KSM_USDT","ETH_USDC","ENJ_USDT","TARA_USDT","XAI_USDT","ZRC_USDT","GEAR_USDT","AGLD_USDT","ETHW_USDT","USDC_USDT","CAT_USDT","YFI_USDT","OAS_USDT","FLM_USDT","PONKE_USDT","AMP_USDT","TEL_USDT","GLM_USDT","SLERF_USDT","TRU_USDT","VANA_USDT","USA_USDT","XION_USDT","ZIG_USDT","MYRIA_USDT","ZEUS_USDT","BSV_USDT","AUDIO_USDT","BANANAS31_USDT","WMTX_USDT","XNO_USDT","MLN_USDT","PIN_USDT","SWFTC_USDT","CGPT_USDT","RAD_USDT","VIC_USDT","LOOKS_USDT","CLORE_USDT","AGI_USDT","GHX_USDT","HIVE_USDT","TNSR_USDT","FLOCK_USDT","QTUM_USDT","CHR_USDT","AI_USDT","10000LADYS_USDT","AO_USDT","MTL_USDT","T_USDT","1000BTT_USDT","SLP_USDT","PROM_USDT","SCA_USDT","KMNO_USDT","STREAM_USDT","TREAT_USDT","PRIME_USDT","ANKR_USDT","C98_USDT","CARV_USDT","JUV_USDT","UMA_USDT","POLYX_USDT","B3_USDT","RON_USDT","DGB_USDT","SFP_USDT","FIDA_USDT","MODE_USDT","KDA_USDT","ACE_USDT","SNEK_USDT","CTC_USDT","DCR_USDT","ONE_USDT","ZENT_USDT","MAX_USDT","NC_USDT","BONE_USDT","HOOK_USDT","STPT_USDT","FOXY_USDT","JST_USDT","1000000PEIPEI_USDT","TEVA_USDT","RIZ_USDT","ICX_USDT","ALT_USDT","MICHI_USDT","ID_USDT","REQ_USDT","NTRN_USDT","ORDER_USDT","SCR_USDT","PAIN_USDT","WAVES_USDT","ZRX_USDT","ALPHA_USDT","CELO_USDT","ATH_USDT","DASH_USDT","MAGIC_USDT","HIGH_USDT","NMR_USDT","XRP_USDC","ASTR_USDT","COS_USDT","PROS_USDT","XPR_USDT","FXS_USDT","LEVER_USDT","VR_USDT","DODO_USDT","10000COQ_USDT","VANRY_USDT","L3_USDT","NAKA_USDT","1000APU_USDT","ALU_USDT","SOLO_USDT","DUSK_USDT","RPL_USDT","MEMEFI_USDT","MIGGLES_USDT","GLMR_USDT","CLANKER_USDT","LRC_USDT","AVAIL_USDT","BAND_USDT","TORN_USDT","STEEM_USDT","SEND_USDT","ULTI_USDT","MAJOR_USDT","EPIC_USDT","RVN_USDT","MOBILE_USDT","ACA_USDT","NRN_USDT","BOBA_USDT","SUN_USDT","ATA_USDT","CVX_USDT","MOVR_USDT","OBT_USDT","AIC_USDT","BAT_USDT","ELX_USDT","SPA_USDT","RDNT_USDT","AZERO_USDT","VIB_USDT","SQD_USDT","ONT_USDT","OMG_USDT","DENT_USDT","HOT_USDT","SUI_USDC","BRL_USDT","ELON_USDT","BRISE_USDT","KAIA_USDT","OMI_USDT","SWELL_USDT","NFP_USDT","HFT_USDT","10000WEN_USDT","WILD_USDT","MAV_USDT","AXL_USDT","FTN_USDT","ORAI_USDT","ISLAND_USDT","GTC_USDT","JOE_USDT","CHESS_USDT","SPEC_USDT","JAILSTOOL_USDT","FLOW_USDT","COOK_USDT","IDEX_USDT","ALCX_USDT","SD_USDT","ONG_USDT","REI_USDT","LMWR_USDT","PUFFER_USDT","FIRO_USDT","SHX_USDT","CELR_USDT","POWR_USDT","10000WHY_USDT","SLC_USDT","AURORA_USDT","G_USDT","BAR_USDT","CTK_USDT","SSV_USDT","STRAX_USDT","BLAST_USDT","DUCK_USDT","CORN_USDT","TRY_USDT","WIN_USDT","SAFE_USDT","DRIFT_USDT","LUNAI_USDT","XCH_USDT","ALPH_USDT","OG_USDT","ZERO_USDT","ZKJ_USDT","CITY_USDT","REX_USDT","IOST_USDT","PEPE_USDC","MAGA_USDT","PYR_USDT","AVAX_USDC","MBL_USDT","GHST_USDT","STNK_USDT","GNO_USDT","VELODROME_USDT","RIF_USDT","HARRY_USDT","J_USDT","BNT_USDT","TAIKO_USDT","LUMIA_USDT","POLS_USDT","HBAR_USDC","DOGE_USDC","OGN_USDT","MERL_USDT","ACX_USDT","LAVA_USDT","PSG_USDT","ASR_USDT","DIA_USDT","POND_USDT","RBNT_USDT","XYRO_USDT","ADA_USDC","SCRT_USDT","GST_USDT","FIS_USDT","CTSI_USDT","APEX_USDT","XEM_USDT","SWEAT_USDT","OSMO_USDT","TICO_USDT","LTC_USDC","ONDO_USDC","LINK_USDC","POPCAT_USDC","XEC_USDT","STG_USDT","LSK_USDT","ONON_USDT","WAXP_USDT","SYRUP_USDT","WAN_USDT","SHIB_USDC","BICO_USDT","LOKA_USDT","LAT_USDT","TLOS_USDT","ENA_USDC","FIO_USDT","1000BONK_USDC","SANTOS_USDT","ANLOG_USDT","SERAPH_USDT","WIF_USDC","MEMHASH_USDT","TRUMP_USDC","IP_USDC","CLOUD_USDT","TFUEL_USDT","FARM_USDT","NEON_USDT","NOS_USDT","CRV_USDC","SC_USDT","DOT_USDC","MVL_USDT","WLD_USDC","TIA_USDC","NFT_USDT","PORTO_USDT","ARB_USDC","PNUT_USDC","FIL_USDC","XLM_USDC","QI_USDT","DATA_USDT","NULS_USDT","PIVX_USDT","NEXO_USDT","NEAR_USDC","ETC_USDC","IQ_USDT","NAVX_USDT","ORDI_USDC","ALPINE_USDT","KMD_USDT","BOME_USDC","BCH_USDC","BNB_USDC","ETHFI_USDC","KAITO_USDC","LAZIO_USDT","ORBS_USDT","NEO_USDC","PAWS_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
