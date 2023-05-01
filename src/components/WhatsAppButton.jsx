function WhatsAppButton({ phoneNumber }) {
  const message = encodeURIComponent(
    'Hola, me gustaría obtener más información.'
  ); // Reemplaza con el mensaje que quieras enviar

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white text-2xl rounded-full shadow-md hover:bg-green-600 transition-colors duration-200 z-40 h-20 w-20 flex justify-center items-center"
    >
      <i className="fab fa-whatsapp fa-2x" />
    </a>
  );
}

export default WhatsAppButton;
