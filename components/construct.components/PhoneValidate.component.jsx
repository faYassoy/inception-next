import React, { useEffect, useState } from 'react';
import { InputComponent, SelectComponent } from '../base.components';
import { get } from '../../helpers';

function PhoneValidateComponent({ values, setValues, errors, setErrors }) {
  const [inputPhone, setInputPhone] = useState('');
  const [checkValidate, setCheckValidate] = useState(false);
  const [loadingValidate, setLoadingValidate] = useState(false);
  const [activeNumber, setActiveNumber] = useState(false);
  const prefix = values.find((val) => val.name == 'prefix')?.value;

  useEffect(() => {
    if (inputPhone != undefined) {
      const delayCheck = setTimeout(() => {
        setCheckValidate(!checkValidate);
      }, 2000);
      return () => clearTimeout(delayCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputPhone]);

  async function checkPhone() {
    if (inputPhone?.length > 5) {
      setActiveNumber(false);
      setLoadingValidate(true);
      const pingResponse = await get({
        url: `http://localhost:3000/api/contacts/check-exists?phone=${
          prefix + inputPhone
        }&session=default`,
      });
      if (pingResponse.status == 200) {
        // console.log(pingResponse?.data?.numberExists);
        setLoadingValidate(false);
      }
      if (pingResponse?.data?.numberExists) {
        setValues([
          ...values?.filter(
            (val) => !['phoneNumber', 'validNumber'].includes(val.name)
          ),
          { name: 'phoneNumber', value: inputPhone },
          { name: 'validNumber', value: 1 },
        ]);

        setErrors([
          ...errors?.filter((val) => !['phoneNumber'].includes(val.name)),
        ]);
        setActiveNumber(true);
      } else {
        setErrors([
          ...errors?.filter((val) => !['phoneNumber'].includes(val.name)),
          { name: 'phoneNumber', error: 'nomor WhatsApp tidak ada' },
        ]);

        setValues([
          ...values?.filter((val) => !['validNumber'].includes(val.name)),
        ]);
      }
    }
  }
  useEffect(() => {
    checkPhone();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkValidate]);

  //   console.log(values.find((val) => val.name == 'phoneNumber')?.value);
  return (
    <>
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-2">
          <SelectComponent
            name="prefix"
            label="Kode Negara"
            options={[{ label: 'Idn (+62)', value: '62' }]}
            validations={{ required: true }}
            onChange={(e) =>
              setValues([
                ...values?.filter((val) => val.name != 'prefix'),
                { name: 'prefix', value: e },
              ])
            }
            value={values.find((val) => val.name == 'prefix')?.value}
            error={errors.find((val) => val.name == 'prefix')?.error}
          />
        </div>
        <div className="col-span-4">
          <InputComponent
            type="phone"
            name="phoneNumber"
            label={loadingValidate ? 'No. Hp (cek nomor...)' : 'No. Hp'}
            placeholder="Ex:895396025318"
            validations={{ required: true }}
            onChange={(e) => {
              setInputPhone(e);
            }}
            value={values.find((val) => val.name == 'phoneNumber')?.value}
            error={errors.find((val) => val.name == 'phoneNumber')?.error}
          />
          <small className="h-4 text-green-600">
            {!errors.find((val) => val.name == 'phoneNumber')?.error &&
              activeNumber &&
              'nomor WhatsApp ditemukan'}
          </small>
        </div>
      </div>
    </>
  );
}

export default PhoneValidateComponent;
