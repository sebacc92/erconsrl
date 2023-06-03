
function Topbar({ contactoData}) {

  if (!contactoData) return <div />;

  const { telefono, direccion, email } = contactoData.data.attributes;
  return (
    <div className="bg-gray-900 hidden lg:block lg:fixed lg:top-0 lg:w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="text-gray-300 mr-4">📞 {telefono}</div>
          <div className="text-gray-300">🏠 {direccion}</div>
          <div className="text-gray-300 mr-4">📧 {email}</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
