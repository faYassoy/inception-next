import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  ButtonComponent,
  DateFormatComponent,
  TableSupervisionComponent,
} from '../../components/base.components';
import { AdminLayout } from './Admin.layout';
import PhoneValidateComponent from '../../components/construct.components/PhoneValidate.component';
import moment from 'moment';
import 'moment/locale/id';
import { post } from '../../helpers';
function DaftarBooking() {
  const { isAuthenticated, isLoading } = useKindeAuth();
  const styleOptions = [
    { label: 'Wedding Photography', value: 'wedding-photography' },
    { label: 'Corporate Videos', value: 'corporate-videos' },
    { label: 'Event Coverage', value: 'event-coverage' },
  ];
  const statusOptions = [
    { label: 'proceed', value: 'proceed' },
    { label: 'aproved', value: 'aproved' },
    { label: 'done', value: 'done' },
  ];
  return !isLoading && isAuthenticated ? (
    <>
      <TableSupervisionComponent
        title="Booking"
        fetchControl={{
          path: 'bookings',
        }}
        columnControl={{
          customDefaultValue: { prefix: '62' },
          custom: [
            {
              selector: 'name',
              label: 'Atas Nama',
              sortable: true,
              width: '200px',
              item: ({ name, phoneNumber }) => (
                <>
                  <p className="border-b-2 py-2">{name}</p>
                  <p className="text-sm py-2">Kontak: {phoneNumber}</p>
                </>
              ),
            },
            {
              selector: 'eventName',
              label: 'Event',
              width: '300px',
              item: ({ eventName }) => (
                <p className="font-semibold">{eventName}</p>
              ),
            },
            {
              selector: 'style',
              label: 'Style',
              width: '200px',
              item: ({ style }) => <p className="">{style}</p>,
            },
            {
              selector: 'status',
              label: 'Status',
              width: '150px',
              item: ({ status }) => (
                <p
                  className={` text-sm font-semibold ${
                    status == 'done'
                      ? 'text-lime-500'
                      : status == 'aproved'
                      ? 'text-yellow-500'
                      : 'text-slate-500'
                  }`}
                >
                  {status}
                </p>
              ),
            },
            {
              selector: 'eventDate',
              label: 'Pelaksanaan',
              width: '300px',
              item: ({ eventDate }) => (
                <i className="">
                  <DateFormatComponent
                    date={eventDate}
                    format="dddd, DD MMMM YYYY"
                  />
                </i>
              ),
            },
          ],
        }}
        formControl={{
          customDefaultValue: { prefix: '62' },
          size: 'lg',
          custom: [
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
              col: 6,
              type: 'custom',
              custom: ({ values, setValues, errors, setErrors }) => {
                return (
                  <PhoneValidateComponent
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                  />
                );
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
                  required: true,
                  min: 10,
                },
              },
            },
          ],
        }}
        customDetail={(data) => {
          const formatedDate = moment(data?.eventDate)
            .locale('id')
            .format('dddd, DD MMMM YYYY');
          // console.log(formatedDate);
          const message = `*${data.name}*, Kamu telah melakukan booking di inception studio, dengan detail sebagai berikut:\n\n acara: ${data.eventName},\n style: ${data.style},\n pelaksanaan: ${formatedDate}\n\nMimin mau konfirmasi nih apakah detail booking sudah sesuai atau belum.\n\nTerima kasih..`;

          const encodedMessage = encodeURIComponent(message);
          async function snedWaConfirm(chatId) {
            const response = await post({
              url: 'http://localhost:3000/api/sendText',
              contentType: 'application/json',
              body: {
                chatId,
                text: message,
                session: 'default',
              },
            });
          }
          return (
            <div className="flex flex-col px-8 py-4">
              <ul className="space-y-2">
                <li className="grid grid-cols-12">
                  <b className="col-span-3">Atas Nama</b>
                  <div className="col-span-9">: {data?.name}</div>
                </li>
                <li className="grid grid-cols-12">
                  <b className="col-span-3">No. Hp</b>
                  <div className="col-span-9">
                    :{' '}
                    <a
                      className="bg-green-600 text-slate-50 px-4 rounded-full"
                      target="_blank"
                      href={`https://wa.me/+6281216174849?text=${encodedMessage}`}
                      rel="noreferrer"
                    >
                      {data?.phoneNumber}
                    </a>
                  </div>
                </li>
                <li className="grid grid-cols-12">
                  <b className="col-span-3">Email</b>
                  <div className="col-span-9">: {data?.email}</div>
                </li>
                <li className="grid grid-cols-12">
                  <b className="col-span-3">Acara</b>
                  <div className="col-span-9">: {data?.eventName}</div>
                </li>
                <li className="grid grid-cols-12">
                  <b className="col-span-3">Pelaksanaan</b>
                  <div className="col-span-9">: {data?.eventDate}</div>
                </li>
                <li className="grid grid-cols-12">
                  <b className="col-span-3">Status</b>
                  <div className="col-span-9">
                    :{' '}
                    <span
                      className={`${
                        data?.status == 'done' ? 'bg-primary' : 'bg-slate-400'
                      } text-slate-50 px-4 rounded-full`}
                    >
                      {data?.status}
                    </span>
                  </div>
                </li>
                <li>
                  <b className="block w-full pb-2">Detail : </b>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.detail.replace(/\n/g, '<br>'),
                    }}
                    className="max-h-[30vh] overflow-y-scroll scroll_control px-3 py-4 bg-slate-100 rounded-lg"
                  ></div>
                </li>
              </ul>
              <div className="w-full flex justify-center mt-10">
                <ButtonComponent
                  label="Konfirmasi Booking"
                  paint="success"
                  onClick={() => snedWaConfirm(data.phoneNumber)}
                />
              </div>
            </div>
          );
        }}
        formUpdateControl={{
          customDefaultValue: (data) => {
            return {
              name: data?.name,
              email: data?.email,
              phoneNumber: data?.phoneNumber,
              eventName: data?.eventName,
              eventDate: data?.eventDate,
              style: data?.style,
              detail: data?.detail,
              publish_at: data?.publish_at,
              status: data?.status,
            };
          },
          custom: [
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
              type: 'select',
              construction: {
                name: 'status',
                label: 'Status',
                placeholder: 'Pilih Style...',
                options: statusOptions,
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
                  required: true,
                  min: 10,
                },
              },
            },
          ],
        }}
      />
    </>
  ) : (
    <div className="flex flex-col items-center justify-center gap-8 p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/500.svg" width={'350px'} alt="server error" />
      <h1 className="text-2xl font-bold">Server Disconnect</h1>
      <Link
        className="bg-emerald-100 hover:bg-emerald-300 text-emerald-600 border-4 border-emerald-600 font-semibold px-6 py-4 rounded-full"
        href="/admin"
      >
        Kembali Ke Halaman Login
      </Link>
    </div>
  );
}

export default DaftarBooking;
DaftarBooking.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
