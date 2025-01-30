// Array com opções de 'tipos' de visitas domiciliares
const tiposVisitas = ['confirmação de endereço', 'busca ativa', 'abertura de pré-natal', 'outros'];

// Array com objetos que contém cada opção da equipe
const unidades = [
    {
        unidade: 'valongo', tipoUnidade: 'usf', 
        opcoes: [
            {micro: 1, acs: 'carlos', equipe: 'azul', enfermeira: 'ivette'},
            {micro: 8, acs: 'fernanda', equipe: 'azul', enfermeira: 'ivette'},
            {micro: 9, acs: 'bianca', equipe: 'azul', enfermeira: 'ivette'},
            {micro: 5, acs: 'michelle', equipe: 'verde', enfermeira: 'suellen'},
            {micro: 6, acs: 'aline', equipe: 'amarela', enfermeira: 'rosana'},
            {micro: 7, acs: 'luana', equipe: 'amarela', enfermeira: 'rosana'},
        ]
    },
    {
        unidade: 'consultório na rua', tipoUnidade: 'cnar', 
        opcoes: [
            {micro: 1, acs: 'caminhao valongo', equipe: 'valongo', enfermeira: 'aparecido'},
            {micro: 2, acs: 'casa dos artistas', equipe: 'valongo', enfermeira: 'aparecido'},
            {micro: 3, acs: 'vlt', equipe: 'jose m./pompeia', enfermeira: 'aparecido'},
        ]
    },
];

// Unidades

// Exportando os Arrays
export { tiposVisitas, unidades };

