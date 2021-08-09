export default {
  namespaced: true,
  state: {
    cep: '',
    login: false,
    usuario: {
      id: '',
      email: '',
      senha: '',
    },
    cursosModulos: ['Artes modernas', 'Sketch', 'Sketch Iniciante', 'Sketch Pro'],
    cursosPresenciais: ['Design de Produto', 'Arte Urbana', 'Artes Plásticas', 'Desenho & Ilustração'],
  },
  getters: {
    getCursosModulos: state => state.cursosModulos,
    getCursosPresenciais: state => state.cursosPresenciais,
  },
  mutations: {},
  actions: {
  },
}
