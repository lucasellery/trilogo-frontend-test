export function loadLists() {
  return [
    {
      title: 'Abertos',
      headerColor: "rgba(245, 34, 45, 0.25)",
      cards: [
        {
          id: 1,
          description: 'Consertar vazamento',
          type: 'Predial',
          user: 'Lucas Ellery',
          // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        },
        {
          id: 2,
          description: 'Tampar buraco da parece',
          type: 'Predial',
          user: 'Yudi',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        },
        {
          id: 3,
          description: 'Trocar celular',
          type: 'Bem',
          user: 'Mark Zuck',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        }
      ]
    },
    { 
      title: 'Executados',
      headerColor: "rgba(212, 102, 45, 0.25)",
      cards: [
        {
          id: 4,
          description: 'troca de torneira',
          type: 'Predial',
          user: 'Yudi',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        }
      ]
    },
    {
      title: 'Vistoriados',
      headerColor: "rgba(82, 196, 26, 0.25)",
      cards: [
        {
          id: 5,
          description: 'Consertar pia',
          type: 'Predial',
          user: 'Priscilla Alcantara',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        }
      ]
    },
    { 
      title: 'Arquivados',
      headerColor: "rgba(193, 185, 185, 0.25)",
      cards: [
        {
          id: 6,
          description: 'Internet',
          type: 'Predial',
          user: 'Lucas',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMZaaQC6D-RYF5qj57oO8WW5a7jSfCWPVrEFLGYaN1q2BIAM_WsaN0rKWm6AaDlQwYzA&usqp=CAU'
        }
      ]
    },
  ];
}