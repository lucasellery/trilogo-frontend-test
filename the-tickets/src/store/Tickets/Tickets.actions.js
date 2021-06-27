let nextTicketId = 100

export const addTicket = ({description, ticketType= '', user, image}) => ({
  type: 'ADD_TICKET',
  payload: {
    id: nextTicketId++,
    description: '11',
    ticketType,
    user,
    image
  }
})
