'use server';
import React from 'react';
import { FormSupervisionComponent } from '../base.components';
// import { prefix } from '@fortawesome/free-solid-svg-icons';

function FormBookingComponent() {
  const styleOptions = [
    { label: 'style1', value: 'style1' },
    { label: 'style2', value: 'style2' },
    { label: 'style3', value: 'style3' },
  ];
  return (
    <>
      <FormSupervisionComponent
        submitControl={{ path: 'bookings' }}
        defaultValue={{ prefix: '62' }}
        confirmation={true}
        forms={[
          {
            type: 'date',
            construction: {
              name: 'eventDate',
              label: 'Pelaksanaan',
              placeholder: 'Pilih Tanggal Pelaksanaan...',
              validations: {
                required: true,
              },
            },
          },
          {
            construction: {
              name: 'eventName',
              label: 'Nama Event',
              placeholder: 'Masukkan event...',
              validations: {
                required: true,
              },
            },
          },
          {
            type: 'select',
            construction: {
              name: 'style',
              label: 'Style',
              placeholder: 'Pilih Style...',
              options: styleOptions,
              validations: {
                required: true,
              },
            },
          },
          {
            construction: {
              name: 'name',
              label: 'Nama Pemesan',
              placeholder: 'Masukkan nama pemesan...',
              validations: {
                required: true,
              },
            },
          },
          {
            col: 2,
            type: 'select',
            construction: {
              name: 'prefix',
              label: 'Kode Negara',
              placeholder: '',
              options: [{ label: 'idn (+62)', value: '62' }],
              validations: {
                required: true,
              },
            },
          },
          {
            col: 4,
            construction: {
              type: 'phone',
              name: 'phoneNumber',
              label: 'No. Hp',
              placeholder: 'ex: 81216174849',
              validations: {
                required: true,
                min: 10,
              },
            },
          },
          {
            col: 6,
            construction: {
              type: 'email',
              name: 'email',
              label: 'Email',
              placeholder: 'ex: livia@gmail.com',
              validations: {
                required: true,
                email: true,
              },
            },
          },
          {
            type: 'textarea',
            construction: {
              name: 'detail',
              label: 'Detail',
              placeholder: 'detail acara...',
              rows: 4,
              validations: {
                min: 10,
              },
            },
          },
        ]}
      />
    </>
  );
}

export default FormBookingComponent;
