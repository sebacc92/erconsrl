/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Map from '../components/Map';
import WhatsAppButton from '../components/WhatsAppButton';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Contacto() {
  const [data, setData] = useState(null);
  const [recaptchaInstance, setRecaptchaInstance] = useState(null);
  const [isVisibleAlertSuccess, setIsVisibleAlertSuccess] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  const handleRecaptcha = async (event) => {
    const recaptchaValue = await recaptchaInstance.executeAsync();
    if (recaptchaValue) {
      try {
        const form = event.target;
        const formData = new FormData(form);
        const _data = Object.fromEntries(formData);
        await fetch('https://api.erconsrl.com.ar/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(_data),
        });
      } catch (err) {
        console.log('err', err);
      }
      setIsVisibleAlertSuccess(true);
      // Realiza la operación deseada con los datos del formulario
    } else {
      alert('Por favor complete la verificacion de reCAPTCHA');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRecaptcha(e);
  };

  return (
    data && (
      <>
        <div className="isolate bg-gray-100 py-8 px-4 sm:py-32 lg:px-8 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 lg:grid-cols-2 mt-[7rem]">
          <section className="">
            <Map
              address={{
                name: 'Ercon Srl',
                lat: -34.92760794112915,
                lng: -57.97297121872619,
              }}
            />
            <div className="mx-auto mt-2">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-4 lg:mb-0 font-gotham">
                  <p className="font-gotham-narrow-bold">Dirección:</p>
                  <p className="text-2xl font-gotham-regular text-[#990000]">
                    Diagonal 95, #48, La Plata
                  </p>
                </div>
                <div className="mb-4 lg:mb-0">
                  <p className="font-gotham-narrow-bold">Teléfono:</p>
                  <p className="text-2xl font-gotham-regular text-[#990000]">
                    (221) 414 0756 / 414 2782
                  </p>
                </div>
                <div>
                  <p className="font-gotham-narrow-bold ">Emails:</p>
                  <p className="text-2xl font-gotham-regular text-[#990000]">
                    info@erconsrl.com.ar
                  </p>
                  <p className="text-2xl font-gotham-regular text-[#990000]">
                    ventas@erconsrl.com.ar
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="mx-auto max-w-2xl text-center mt-8 md:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Formulario de contacto
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Hola! Completa el formulario con tus datos y a la brevedad nos
                comunicaremos. Muchas Gracias
              </p>
            </div>
            <form className="mx-auto mt-8 max-w-xl" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Apellido
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Número de télefono
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <ReCAPTCHA
                  ref={(ref) => setRecaptchaInstance(ref)}
                  sitekey="6LfNb24lAAAAAMGvvjJoEKnX2G8fQSd_CBFFcioX"
                  size="invisible"
                />
              </div>
              {isVisibleAlertSuccess && (
                <span className="text-green-700">
                  El mensaje ha sido enviado
                </span>
              )}
              <div className="mt-10">
                <button
                  className="block w-full rounded-md bg-[#990000] px-3.5 py-2.5 text-center text-lg text-white shadow-sm hover:bg-[#8A0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  id="submit-btn"
                  type="submit"
                >
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
        <WhatsAppButton phoneNumber={data.contacto.whatsapp} />
      </>
    )
  );
}

export default Contacto;
