import { loadLists } from '../../services/api';

const data = loadLists();

export default function ticketsReducer(state = data, action) {
  switch (action.type) {
    case 'ADD_TICKET':
      return {
        id: action.id,
        description: action.description,
        ticketType: action.ticketType,
        user: action.user,
        image: action.image
      }

    default:
      return state;
  }
}
