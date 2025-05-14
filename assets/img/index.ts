const images = {
  compre_online: require('./juquinha/compre online.png'),
  juquinha_direita: require('./juquinha/JUQUINHA direita.png'),
  juquinha_esquerda: require('./juquinha/JUQUINHA esquerda.png'),
  juquinha_frente: require('./juquinha/JUQUINHA frente.png'),
  logo_azul_transparente: require('./logo/logo azul transparente.png'),
  logo_branca_fundo_transparente: require('./logo/logo branca fundo transparente.png'),
  logo_extensa_azul_fundo_branco: require('./logo/logo extensa azul fundo branco.jpg'),
  logo_extensa_azul_fundo_transparente: require('./logo/Logo extensa azul fundo transparente.png'),
  logo_extensa_branca_fundo_azul: require('./logo/logo extensa branca FUNDO AZUL.png'),
  logo_transparente: require('./logo/logo transparente.png'),
  plano_de_fundo_drogaria: require('./PLANO DE FUNDO DROGARIA.jpg'),
  adaptive_icon: require('./react-native/adaptive-icon.png'),
  favicon: require('./react-native/favicon.png'),
  icon: require('./react-native/icon.png'),
  splash_icon: require('./react-native/splash-icon.png'),
} as const;

type Images = keyof typeof images;

export { images };
export type { Images };
