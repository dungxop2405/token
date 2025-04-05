const mexc = (() => {
    var list = ["BTC_USDT","ETH_USDT","SOL_USDT","FARTCOIN_USDT","LOOM_USDT","XRP_USDT","BTC_USD","ETH_USD","EDGE_USDT","LTC_USD","XRP_USD","ADA_USD","SUI_USDT","LINK_USD","AVAX_USD","SOL_USD","DOGE_USD","SUI_USD","PI_USDT","SEED_USDT","DOGE_USDT","GRASS_USDT","ADA_USDT","GANG_USDT","PEPE_USDT","FUN_USDT","ATOM_USDT","STO_USDT","AVAX_USDT","USUAL_USDT","YZYSOL_USDT","LINK_USDT","ENA_USDT","RARE_USDT","EOS_USDT","MDOGS_USDT","MUBARAKAH_USDT","ZRO_USDT","FILECOIN_USDT","RIFSOL_USDT","TONCOIN_USDT","WIF_USDT","APT_USDT","TRUMPOFFICIAL_USDT","BUBB_USDT","DRB_USDT","ONDO_USDT","KEYCAT_USDT","AAVE_USDT","POPCAT_USDT","BNB_USDT","TIA_USDT","TAO_USDT","WAL_USDT","SZN_USDT","LTC_USDT","LAYER_USDT","BROCCOLIF2B_USDT","BNBCARD_USDT","VIDT_USDT","REZ_USDT","SPX_USDT","DOT_USDT","WLD_USDT","AIC_USDT","PNUT_USDT","MUBARAK_USDT","WIZZ_USDT","PUMP_USDT","CATTON_USDT","TAT_USDT","NEAR_USDT","BR_USDT","JUP_USDT","NRN_USDT","AI16Z_USDT","ARB_USDT","HBAR_USDT","AUCTION_USDT","GUN_USDT","GHIBLI_USDT","ALCH_USDT","DAO_USDT","TRX_USDT","TUT_USDT","SHIB_USDT","VINE_USDT","ACT_USDT","AFT_USDT","INJ_USDT","OP_USDT","AZERO_USDT","PENDLE_USDT","BIGTIME_USDT","HIPPO_USDT","BERA_USDT","AIL_USDT","FLM_USDT","AMI_USDT","CRV_USDT","PUMPAI_USDT","WHITE_USDT","XPR_USDT","BNKR_USDT","S_USDT","DEVVE_USDT","QUAI_USDT","ALGO_USDT","HYPE_USDT","AGIXT_USDT","HOOD_USDT","PARTI_USDT","SUPRA_USDT","K_USDT","MEW_USDT","DGB_USDT","UNI_USDT","MASK_USDT","IMT_USDT","UXLINK_USDT","BROCCOLI_USDT","ARCSOL_USDT","RSR_USDT","KAS_USDT","WAV_USDT","NKN_USDT","GALA_USDT","CAPTAINBNB_USDT","ORDI_USDT","RENDER_USDT","SEI_USDT","MNT_USDT","VOXEL_USDT","W_USDT","NEIROETH_USDT","AMP_USDT","LDO_USDT","SATS_USDT","TIBBIR_USDT","FET_USDT","JTO_USDT","BROCCOLIF3B_USDT","NEO_USDT","PWEASE_USDT","TOMI_USDT","FLOKI_USDT","RUNE_USDT","EGLD_USDT","MKR_USDT","XLM_USDT","NOT_USDT","IP_USDT","VIRTUAL_USDT","JASMY_USDT","LUCE_USDT","VANA_USDT","ICP_USDT","RAY_USDT","CLANKER_USDT","KAITO_USDT","EIGEN_USDT","SLING_USDT","1000BONK_USDT","CHEEMS_USDT","DHN_USDT","J_USDT","BCH_USDT","BLZ_USDT","ATH_USDT","GFM_USDT","NIL_USDT","G7_USDT","IMX_USDT","APE_USDT","DOGS_USDT","BGSC_USDT","BSW_USDT","ELON4AFD_USDT","PELL_USDT","MAVIA_USDT","WING_USDT","CAKE_USDT","NEUR_USDT","COMP_USDT","AIXBT_USDT","THETA_USDT","ZEUS_USDT","BOME_USDT","LQTY_USDT","DOGEAI_USDT","SIREN_USDT","DOGINME_USDT","KEKIUS_USDT","PLUME_USDT","L3_USDT","BANANA_USDT","MOVE_USDT","ZEC_USDT","PAXG_USDT","FARTBOY_USDT","TST_USDT","MANA_USDT","BMT_USDT","ORCA_USDT","MLN_USDT","SNX_USDT","JELLYJELLY_USDT","XAUT_USDT","SAND_USDT","ARKM_USDT","NEIROCTO_USDT","PERP_USDT","API3_USDT","STAR10_USDT","PENGU_USDT","HMSTR_USDT","ETHFI_USDT","DYDX_USDT","1000RATS_USDT","DF_USDT","GOAT_USDT","ETC_USDT","LEVER_USDT","ZEREBRO_USDT","ONE_USDT","CRO_USDT","POL_USDT","XOXO_USDT","STRK_USDT","MOODENG_USDT","BLUBAVAX_USDT","LAI_USDT","B3_USDT","TURBO_USDT","GRIFFAIN_USDT","VIVI_USDT","UFD_USDT","SONIC_USDT","STONKS_USDT","GRT_USDT","VET_USDT","LPT_USDT","IOTX_USDT","OM_USDT","CULT_USDT","ZETA_USDT","GROK_USDT","KILO_USDT","X_USDT","MOODENGETH_USDT","TRB_USDT","ULTIMA_USDT","BERT_USDT","CHZ_USDT","OIK_USDT","CATI_USDT","EDU_USDT","XMR_USDT","ACH_USDT","NPC_USDT","VISTA_USDT","PEOPLE_USDT","USA_USDT","SWARMS_USDT","HOLD_USDT","VIB_USDT","FTT_USDT","VVAIFU_USDT","SAGA_USDT","BTC_USDC","PAI_USDT","RED_USDT","LUNC_USDT","CORE_USDT","CFX_USDT","DAG_USDT","GEAR_USDT","TARA_USDT","ROSE_USDT","GIGA_USDT","MEME_USDT","KAVA_USDT","ACA_USDT","AERO_USDT","ENS_USDT","BRETT_USDT","FORM_USDT","STNK_USDT","1000MUMU_USDT","AR_USDT","FWOG_USDT","STX_USDT","MELANIA_USDT","IO_USDT","LUNANEW_USDT","GENE_USDT","DOG_USDT","ONON_USDT","DEEP_USDT","AO_USDT","TAI_USDT","LMWR_USDT","1INCH_USDT","CHILLGUY_USDT","KAIA_USDT","ZERO_USDT","TEL_USDT","MAGIC_USDT","PYTH_USDT","GPU_USDT","PAAL_USDT","BEL_USDT","NAVX_USDT","ELIZA_USDT","GROKCOIN_USDT","AXS_USDT","COOK_USDT","COTI_USDT","ZKSYNC_USDT","TEVA_USDT","TLM_USDT","KSM_USDT","PIN_USDT","CHEX_USDT","BUTTHOLE_USDT","SQD_USDT","APX_USDT","SUPER_USDT","CYBER_USDT","BANANAS31_USDT","MYRO_USDT","DSYNC_USDT","DEAI_USDT","WOO_USDT","QNT_USDT","XAI_USDT","FB_USDT","TOSHI_USDT","GRIFT_USDT","SXP_USDT","IOTA_USDT","BAKE_USDT","EPIC_USDT","VON_USDT","MUBI_USDT","PIXEL_USDT","BUZZ_USDT","FRED_USDT","TOKEN_USDT","PORTAL_USDT","ANLOG_USDT","MASA_USDT","C98_USDT","QUICK_USDT","SUSHI_USDT","LIBRA_USDT","MINA_USDT","PIPPIN_USDT","VRA_USDT","MANTA_USDT","ULTI_USDT","MODE_USDT","MBOX_USDT","FXS_USDT","AVAAI_USDT","ICE_USDT","RAI_USDT","HIGH_USDT","AUDIO_USDT","DADDY_USDT","PONKE_USDT","TREAT_USDT","DUCK_USDT","CETUS_USDT","CPOOL_USDT","RIZ_USDT","VVV_USDT","BEAMX_USDT","SAFE_USDT","TWT_USDT","SOL_USDC","VELO_USDT","LRC_USDT","SWAN_USDT","BOBA_USDT","XCN_USDT","USTC_USDT","PHB_USDT","DEGEN_USDT","SKL_USDT","ENJ_USDT","PEAQ_USDT","SHELL_USDT","ROAM_USDT","ZIL_USDT","DEGO_USDT","USDC_USDT","OMNI_USDT","LOGX_USDT","ZEN_USDT","TRU_USDT","1000000BABYDOGE_USDT","SLC_USDT","GMT_USDT","QUBIC_USDT","XEM_USDT","TORN_USDT","FLOCK_USDT","YGG_USDT","CHESS_USDT","KDA_USDT","HIFI_USDT","ALEO_USDT","YNE_USDT","AEVO_USDT","ZIG_USDT","YFI_USDT","RACA_USDT","DOGEGOV_USDT","MICHI_USDT","THE_USDT","SPELL_USDT","PHA_USDT","ALT_USDT","T_USDT","WAVES_USDT","ALPACA_USDT","ZRC_USDT","STORJ_USDT","NS_USDT","CKB_USDT","PEPECOIN_USDT","ANDYETH_USDT","BB_USDT","CORN_USDT","CELO_USDT","BLAST_USDT","OBT_USDT","LUMIA_USDT","SWFTC_USDT","AGLD_USDT","ILV_USDT","COOKIE_USDT","100000AIDOGE_USDT","BIO_USDT","FLOW_USDT","HOT_USDT","FIDA_USDT","CGPT_USDT","VANRY_USDT","FOXY_USDT","PRIME_USDT","FULLSEND_USDT","BLUR_USDT","TROY_USDT","MORPHO_USDT","XDC_USDT","KOMA_USDT","MYRIA_USDT","1000APU_USDT","SNEK_USDT","SOLV_USDT","ID_USDT","NMR_USDT","STPT_USDT","TNSR_USDT","PYR_USDT","SOLO_USDT","UMA_USDT","SFP_USDT","BID_USDT","QTUM_USDT","PROS_USDT","PUFFER_USDT","BONE_USDT","MOVR_USDT","SUNDOG_USDT","ME_USDT","HNT_USDT","HOOK_USDT","XION_USDT","MAV_USDT","1000000MOG_USDT","AI_USDT","KMNO_USDT","JAILSTOOL_USDT","XRP_USDC","ORBS_USDT","DYM_USDT","SYS_USDT","JUV_USDT","PAIN_USDT","ANKR_USDT","PRCL_USDT","HARRY_USDT","AVA_USDT","BAN_USDT","ISLAND_USDT","RPL_USDT","RDNT_USDT","OG_USDT","SLERF_USDT","WOJAK_USDT","PEPU_USDT","ETH_USDC","ETHW_USDT","ACS_USDT","BSV_USDT","AVL_USDT","ACX_USDT","FLUID_USDT","IOST_USDT","LOKA_USDT","FARM_USDT","BAND_USDT","ARPA_USDT","CHR_USDT","GMX_USDT","KNC_USDT","RAD_USDT","A8_USDT","MIGGLES_USDT","ORAI_USDT","ELX_USDT","TRIAS_USDT","1000000PEIPEI_USDT","VELODROME_USDT","F_USDT","MEMHASH_USDT","ALICE_USDT","BADGER_USDT","CAT_USDT","SLP_USDT","ELON_USDT","GHST_USDT","SWELL_USDT","POLS_USDT","SUN_USDT","FLUX_USDT","ASTR_USDT","ZBCN_USDT","MOCA_USDT","WMTX_USDT","CSPR_USDT","ALU_USDT","MAJOR_USDT","NEON_USDT","METIS_USDT","CTSI_USDT","DUSK_USDT","RSS3_USDT","ARK_USDT","GAS_USDT","AIOZ_USDT","XTZ_USDT","GLMR_USDT","XVG_USDT","TRUMP_USDT","MEMEFI_USDT","RADAR_USDT","FAI_USDT","DASH_USDT","MERL_USDT","OL_USDT","AITECH_USDT","NC_USDT","GPS_USDT","XVS_USDT","NFP_USDT","ACE_USDT","ONT_USDT","ALPHA_USDT","DODO_USDT","VTHO_USDT","SCA_USDT","RVN_USDT","COW_USDT","BAT_USDT","POLYX_USDT","CTK_USDT","AKT_USDT","GST_USDT","RLC_USDT","OSMO_USDT","FLR_USDT","VIC_USDT","SERAPH_USDT","PSG_USDT","HFT_USDT","DRIFT_USDT","SCR_USDT","ALPH_USDT","ATA_USDT","10000COQ_USDT","ORDER_USDT","XNO_USDT","GLM_USDT","AXL_USDT","VR_USDT","ZRX_USDT","10000WEN_USDT","10000LADYS_USDT","GOMINING_USDT","10000WHY_USDT","MTL_USDT","JOE_USDT","CVX_USDT","LOOKS_USDT","RIF_USDT","ZKJ_USDT","PROM_USDT","XRD_USDT","RON_USDT","DIA_USDT","SUI_USDC","SYN_USDT","MDT_USDT","AGI_USDT","DLC_USDT","CELR_USDT","XEC_USDT","REQ_USDT","1DOLLAR_USDT","SANTOS_USDT","LISTA_USDT","HIVE_USDT","CLORE_USDT","AVAIL_USDT","MAX_USDT","OMG_USDT","DENT_USDT","JST_USDT","SLF_USDT","CARV_USDT","XCH_USDT","IDEX_USDT","SPEC_USDT","APEX_USDT","ANIME_USDT","HEI_USDT","SCRT_USDT","REI_USDT","NULS_USDT","RBNT_USDT","XYRO_USDT","NTRN_USDT","PEPE_USDC","ADA_USDC","LAZIO_USDT","NAKA_USDT","OGN_USDT","SPA_USDT","BRISE_USDT","BNT_USDT","1000BTT_USDT","CTXC_USDT","FIO_USDT","CATS_USDT","STREAM_USDT","LAVA_USDT","BADAI_USDT","GTC_USDT","CITY_USDT","SEND_USDT","MINT_USDT","CVC_USDT","SSV_USDT","FORTH_USDT","ALCX_USDT","TLOS_USDT","REX_USDT","SC_USDT","BAL_USDT","NFT_USDT","ZENT_USDT","FTN_USDT","GLQ_USDT","NOS_USDT","ISLM_USDT","HBAR_USDC","LINK_USDC","SD_USDT","NEXO_USDT","LUNAI_USDT","MANEKI_USDT","BAR_USDT","COCORO_USDT","DOGE_USDC","ALPINE_USDT","G_USDT","LAT_USDT","D_USDT","WAXP_USDT","BICO_USDT","STG_USDT","WIN_USDT","SHX_USDT","SWEAT_USDT","OMI_USDT","AVAX_USDC","PORTO_USDT","HAPPY_USDT","POND_USDT","TRUMP_USDC","MBL_USDT","ONG_USDT","AURORA_USDT","MAGA_USDT","IQ_USDT","ASR_USDT","ENA_USDC","ICX_USDT","LSK_USDT","COS_USDT","GHX_USDT","FIRO_USDT","CAR_USDT","KISHU_USDT","CTC_USDT","TAIKO_USDT","DBR_USDT","SYRUP_USDT","WILD_USDT","STEEM_USDT","SNT_USDT","DATA_USDT","OXT_USDT","POWR_USDT","MVL_USDT","ALON_USDT","GODS_USDT","MOBILE_USDT","KMD_USDT","OAS_USDT","BOME_USDC","NEO_USDC","STRAX_USDT","QI_USDT","TFUEL_USDT","FIS_USDT","TICO_USDT","ORDI_USDC","GNO_USDT","CLOUD_USDT","CBK_USDT","WLD_USDC","SHIB_USDC","DCR_USDT","ZCX_USDT","1000BONK_USDC","LTC_USDC","FIL_USDC","PIVX_USDT","CRV_USDC","NEAR_USDC","WAN_USDT","TIA_USDC","BNB_USDC","IP_USDC","WIF_USDC","HAT_USDT","ETHFI_USDC","ARB_USDC","PNUT_USDC","KAITO_USDC","BCH_USDC","QKC_USDT"];
    return {
        getMexcFutureSymbols: () => list
    };
})();
