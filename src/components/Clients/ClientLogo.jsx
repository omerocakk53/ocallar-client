const ClientLogo = ({ client }) => {
  return (
    <figure className="client-logo">
      <a href={client.link}>
        <img
          src={client.image}
          alt={`Client ${client.id}`}
        />
      </a>
    </figure>
  )
}

export default ClientLogo
