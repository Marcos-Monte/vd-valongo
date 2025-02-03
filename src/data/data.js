// Array com opções de 'tipos' de visitas domiciliares
const tiposVisitas = ['confirmação de endereço', 'busca ativa', 'abertura de pré-natal', 'outros'];

// Array com objetos que contém cada opção da equipe
const unidades = [
    // Objetos reorganizados
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '1', acs: 'carlos', equipe: 'azul', enfermeira: 'ivette'},
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '8', acs: 'fernanda', equipe: 'azul', enfermeira: 'ivette'},
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '9', acs: 'bianca', equipe: 'azul', enfermeira: 'ivette'},
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '5', acs: 'michelle', equipe: 'verde', enfermeira: 'suellen'},
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '6', acs: 'aline', equipe: 'amarela', enfermeira: 'rosana'},
    {unidade: 'valongo', tipoUnidade: 'usf', micro: '7', acs: 'luana', equipe: 'amarela', enfermeira: 'rosana'},

    {unidade: 'consultório na rua', tipoUnidade: 'cnar', micro: 'casa dos artistas', acs: 'carlos', equipe: 'valongo', enfermeira: 'ivette'},
    {unidade: 'consultório na rua', tipoUnidade: 'cnar', micro: 'caminhão', acs: 'carlos', equipe: 'valongo', enfermeira: 'ivette'},
    {unidade: 'consultório na rua', tipoUnidade: 'cnar', micro: 'vlt', acs: 'exemplo', equipe: 'jm-pompeia', enfermeira: 'exemplo'}
]

// Exportando os Arrays
export { tiposVisitas, unidades };

