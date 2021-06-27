import { loadLists } from '../../services/api';

const data = loadLists();
let lastId = 0;

export default function ticketsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TICKET':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          ticketType: action.payload.ticketType,
          user: action.payload.user,
          image: action.payload.image
        }
      ];
    case 'TICKETS_REMOVED':
      return state.filter(card => card.id !== action.payload.id);

    default:
      return state;
  }
}
