import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Popup({ addMedicalRecord }) {
  const [name, setName] = useState('');
  const [disease, setDisease] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  const [modalIsOpen, setModalIsOpen] =
    useState(false);

  const onFormSubmit = () => {
    const medicalRecordObject = {
      Name: name,
      Disease: disease,
      To: to,
      From: from,
    };
    addMedicalRecord(medicalRecordObject);
    setModalIsOpen(false);
  };

  const handleCloseButton = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='popup'>
      <button
        className='btn-popup'
        onClick={() => setModalIsOpen(true)}
        style={{
          borderRadius: '10px',
          padding: '8px 16px',
          marginLeft: '20px',
          border: '1px solid black',
        }}
      >
        Create New
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() =>
          setModalIsOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'grey',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            height: '400px',
            width: '250px',
            position: 'absolute',
            top: '20%',
            margin: '0 auto',
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'lightyellow',
          },
        }}
      >
        <button
          className='close-button'
          onClick={handleCloseButton}
          style={{
            background: 'pink',
            marginBottom: '10px',
          }}
        >
          X
        </button>
        <h3>
          <span style={{ color: 'orange' }}>
            Enter A Record
          </span>
        </h3>
        <label>
          <b>Name</b> :
          <input
            placeholder='Name'
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            style={{
              borderRadius: '10px',
              width: '200px',
              padding: '2px',
            }}
          />{' '}
        </label>
        <br />
        <label>
          <b>Disease</b> :
          <input
            placeholder='Disease'
            value={disease}
            onChange={(event) =>
              setDisease(event.target.value)
            }
            style={{
              borderRadius: '10px',
              width: '200px',
              padding: '2px',
            }}
          />{' '}
        </label>
        <br />
        <label>
          <b>Affected From</b> :
          <input
            value={to}
            type='date'
            onChange={(event) =>
              setTo(event.target.value)
            }
            style={{
              borderRadius: '10px',
              width: '200px',
            }}
          />{' '}
        </label>
        <br />
        <label>
          <b>Recovery Date</b> :
          <input
            value={from}
            type='date'
            onChange={(event) =>
              setFrom(event.target.value)
            }
            style={{
              borderRadius: '10px',
              width: '200px',
            }}
          />{' '}
        </label>
        <br />
        <div>
          <button
            onClick={onFormSubmit}
            style={{
              padding: '5px',
              borderRadius: '20px',
              width: '90px',
              cursor: 'pointer',
            }}
          >
            Create
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
