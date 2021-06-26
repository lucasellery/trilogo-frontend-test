let nextTicketId = 100

export const addTicket = ({id, description = '', ticketType= '', user, image}) => ({
  type: 'ADD_TICKET',
  id: nextTicketId++,
  description,
  ticketType,
  user,
  image
})
