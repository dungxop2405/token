const token_future = (() => {
    var list = ["BTC_USDT","ETH_USDT","GRASS_USDT","SUI_USDT","SOL_USDT","DOGE_USDT","MOODENG_USDT","VISTA_USDT","GOAT_USDT","POPCAT_USDT","TROY_USDT","TIA_USDT","MASK_USDT","WIF_USDT","PEPE_USDT","APE_USDT","SHIB_USDT","WLD_USDT","DEEP_USDT","APT_USDT","BTC_USD","SANTOS_USDT","ETH_USD","LINA_USDT","X_USDT","NEIROETH_USDT","CROS_USDT","KAS_USDT","XRP_USDT","FARTCOIN_USDT","PIXEL_USDT","SEI_USDT","PROS_USDT","TAO_USDT","FLOKI_USDT","TURBO_USDT","FTM_USDT","ARB_USDT","NEIROCTO_USDT","AVAX_USDT","LINK_USDT","UNFI_USDT","REEF_USDT","NEAR_USDT","SPX_USDT","DOT_USDT","BIGTIME_USDT","XAI_USDT","TRUMP_USDT","ENA_USDT","CYBER_USDT","MEW_USDT","BAR_USDT","JTO_USDT","FET_USDT","HMSTR_USDT","DOGS_USDT","INJ_USDT","BOME_USDT","MAGA_USDT","ADA_USDT","TONCOIN_USDT","PEOPLE_USDT","LTC_USDT","TNSR_USDT","NOT_USDT","TRX_USDT","OP_USDT","ONDO_USDT","RUNE_USDT","KP3R_USDT","BNB_USDT","PENDLE_USDT","MEME_USDT","API3_USDT","ORDI_USDT","GROK_USDT","COOK_USDT","SAGA_USDT","AAVE_USDT","CATDOG_USDT","JUP_USDT","GALA_USDT","ARKM_USDT","HIPPO_USDT","NEIRO_USDT","DYDX_USDT","1000BONK_USDT","ATOM_USDT","CHEEMS_USDT","MYRO_USDT","WOO_USDT","BEL_USDT","RENDER_USDT","PYTH_USDT","GME_USDT","ALPHA_USDT","DEGEN_USDT","CAT_USDT","MOODENGETH_USDT","BCH_USDT","MOTHER_USDT","1000000BABYDOGE_USDT","SCR_USDT","TRB_USDT","JASMY_USDT","STX_USDT","BRETT_USDT","CATS_USDT","EIGEN_USDT","MKR_USDT","SUNWUKONG_USDT","SAFE_USDT","ETHFI_USDT","ROSE_USDT","PUFFER_USDT","GRT_USDT","FILECOIN_USDT","CTSI_USDT","YGG_USDT","SUPER_USDT","ICP_USDT","SUNDOG_USDT","ID_USDT","RAY_USDT","FTT_USDT","ARPA_USDT","STORJ_USDT","UNI_USDT","CATI_USDT","ZKSYNC_USDT","SILLY_USDT","LUNC_USDT","BANANA_USDT","AR_USDT","IO_USDT","OG_USDT","STRK_USDT","10000WEN_USDT","LDO_USDT","MUBI_USDT","OM_USDT","CHZ_USDT","ENS_USDT","LAZIO_USDT","POL_USDT","CETUS_USDT","DYM_USDT","OOKI_USDT","SYN_USDT","PONKE_USDT","CFX_USDT","SUN_USDT","PHB_USDT","W_USDT","ZEUS_USDT","SXP_USDT","WOJAK_USDT","WING_USDT","SOCIAL_USDT","ZRO_USDT","HBAR_USDT","ACH_USDT","MINA_USDT","NPC_USDT","PROM_USDT","1000000MOG_USDT","ETC_USDT","MANTA_USDT","SPELL_USDT","LQTY_USDT","SUSHI_USDT","CTK_USDT","PORTO_USDT","TOKEN_USDT","HARD_USDT","CORE_USDT","UXLINK_USDT","CLORE_USDT","CSPR_USDT","1000RATS_USDT","METIS_USDT","VANRY_USDT","PRCL_USDT","SATS_USDT","HARRY_USDT","IMX_USDT","LISTA_USDT","SAND_USDT","RDNT_USDT","DBR_USDT","BAKE_USDT","ALPINE_USDT","DIA_USDT","ZIL_USDT","FLUX_USDT","CATE_USDT","CRV_USDT","OMNI_USDT","ALEO_USDT","MANA_USDT","BEAMX_USDT","PENG_USDT","AXL_USDT","IOTX_USDT","MAVIA_USDT","GODS_USDT","TOMI_USDT","ZETA_USDT","MBOX_USDT","DOG_USDT","FIDA_USDT","LUNANEW_USDT","NTRN_USDT","EOS_USDT","SLERF_USDT","QNT_USDT","PORTAL_USDT","ZEC_USDT","CELO_USDT","DAR_USDT","BCCOIN_USDT","GTC_USDT","GMX_USDT","MASA_USDT","WAT_USDT","SNX_USDT","AEVO_USDT","CARV_USDT","EGLD_USDT","AGLD_USDT","LAMB_USDT","OAX_USDT","MAGIC_USDT","USTC_USDT","BNXNEW_USDT","BLZ_USDT","AXS_USDT","BICO_USDT","XLM_USDT","AKRO_USDT","RARE_USDT","AI_USDT","VET_USDT","BLUR_USDT","FITFI_USDT","LAI_USDT","GMT_USDT","ALPH_USDT","AMB_USDT","AIOZ_USDT","ATM_USDT","ALGO_USDT","BB_USDT","1INCH_USDT","1000MUMU_USDT","ZRX_USDT","COTI_USDT","BSV_USDT","AERO_USDT","VRA_USDT","ALT_USDT","BAND_USDT","SUNCAT_USDT","1000000PEIPEI_USDT","THETA_USDT","VELO_USDT","LOGX_USDT","IOTA_USDT","KAVA_USDT","HOOK_USDT","CHESS_USDT","BSW_USDT","REZ_USDT","CKB_USDT","1CAT_USDT","1000APU_USDT","SKL_USDT","BONE_USDT","LEVER_USDT","BADGER_USDT","DRIFT_USDT","LUMIA_USDT","EDU_USDT","RAD_USDT","VIDT_USDT","ANKR_USDT","ILV_USDT","MAV_USDT","TWT_USDT","ACE_USDT","10000LADYS_USDT","WAXP_USDT","TRU_USDT","DUSK_USDT","SPEC_USDT","JUV_USDT","ALICE_USDT","LPT_USDT","RVN_USDT","RSR_USDT","SLP_USDT","BOND_USDT","SYS_USDT","HIGH_USDT","UMA_USDT","CAKE_USDT","RIF_USDT","FLOW_USDT","HOT_USDT","NKN_USDT","ETHW_USDT","KSM_USDT","LIT_USDT","FOXY_USDT","XMR_USDT","ENJ_USDT","ORCA_USDT","NFP_USDT","QUBIC_USDT","BENDOG_USDT","CITY_USDT","AGI_USDT","10000WHY_USDT","COMP_USDT","ARK_USDT","MOVR_USDT","AUDIO_USDT","PSG_USDT","FB_USDT","ONE_USDT","CREAM_USDT","MTL_USDT","LOOM_USDT","ATH_USDT","NULS_USDT","KDA_USDT","KNC_USDT","RACA_USDT","PAXG_USDT","NMR_USDT","C98_USDT","ARDR_USDT","SLF_USDT","YFI_USDT","WAVES_USDT","LSK_USDT","100000AIDOGE_USDT","AUCTION_USDT","AST_USDT","STG_USDT","GLMR_USDT","MYRIA_USDT","ATA_USDT","MANEKI_USDT","VITE_USDT","PERP_USDT","GAS_USDT","MOBILE_USDT","NEO_USDT","CRO_USDT","ICE_USDT","ALPACA_USDT","AERGO_USDT","SCA_USDT","IRIS_USDT","PRIME_USDT","DASH_USDT","RLC_USDT","AKT_USDT","VGX_USDT","10000COQ_USDT","BEER_USDT","KEY_USDT","DENT_USDT","OGN_USDT","JOE_USDT","HIFI_USDT","HNT_USDT","CELR_USDT","REN_USDT","DOP_USDT","USDC_USDT","MNT_USDT","TLM_USDT","VIB_USDT","DODO_USDT","TAIKO_USDT","LRC_USDT","QKC_USDT","FLM_USDT","DATA_USDT","ZEN_USDT","ZERO_USDT","ZKL_USDT","OMG_USDT","POLYX_USDT","AMP_USDT","ASR_USDT","LOOKS_USDT","ASTR_USDT","MERL_USDT","PIXFI_USDT","GFT_USDT","ONT_USDT","PHA_USDT","G_USDT","ERN_USDT","XVG_USDT","BAL_USDT","BURGER_USDT","VOXEL_USDT","IQ_USDT","SWEAT_USDT","ZKF_USDT","MDT_USDT","COMBO_USDT","FIO_USDT","CHR_USDT","DEGO_USDT","1000BTT_USDT","FXS_USDT","QTUM_USDT","XVS_USDT","BAT_USDT","DGB_USDT","FLR_USDT","HFT_USDT","MOCA_USDT","XTZ_USDT","BLAST_USDT","XEC_USDT","CVX_USDT","STMX_USDT","CVC_USDT","XCH_USDT","OXT_USDT","RON_USDT","ORDER_USDT","KMNO_USDT","CLV_USDT","EGP_USDT","ALCX_USDT","SSV_USDT","COS_USDT","ADX_USDT","SC_USDT","BOBA_USDT","SFP_USDT","XRD_USDT","MON_USDT","VTHO_USDT","LOKA_USDT","REI_USDT","WIN_USDT","PYR_USDT","ZKJ_USDT","TKO_USDT","IOST_USDT","ORBS_USDT","FUN_USDT","ZBCN_USDT","FIRE_USDT","CLOUD_USDT","ULTI_USDT","BETA_USDT","RPL_USDT","FORTH_USDT","QUICK_USDT","OSMO_USDT","STPT_USDT","LTO_USDT","CTXC_USDT","ACA_USDT","A8_USDT","GHST_USDT","IDEX_USDT","L3_USDT","ZCX_USDT","SCRT_USDT","RSS3_USDT","ICX_USDT","XNO_USDT","T_USDT","NYAN_USDT","JST_USDT","AVAIL_USDT","FTN_USDT","CXT_USDT","GOMINING_USDT","BNT_USDT","POWR_USDT","SNT_USDT","PIRATE_USDT","VIC_USDT","STEEM_USDT","ZENT_USDT","MAX_USDT","UTK_USDT","XCN_USDT","GNO_USDT","DEXE_USDT","PDA_USDT","XEM_USDT","PUNDIX_USDT","ONG_USDT","QI_USDT","TFUEL_USDT","CTC_USDT","DCR_USDT","GLM_USDT","MBL_USDT","HIVE_USDT","REQ_USDT","ELF_USDT","LAT_USDT","GNS_USDT","KRO_USDT"];
    return {
        get_future: () => list
    };
})();