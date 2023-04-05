/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import Modal from 'react-modal';
import Map from './Map';

function MapModal({ address, isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <Map address={address} />
      <button onClick={closeModal} type="button">
        Cerrar
      </button>
    </Modal>
  );
}

export default MapModal;
