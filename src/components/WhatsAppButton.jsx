/* eslint-disable react/prop-types */
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
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition-colors duration-200 z-40"
    >
      <i className="fab fa-whatsapp fa-2x" />
    </a>
  );
}

export default WhatsAppButton;
