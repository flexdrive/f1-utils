import * as Yup from 'yup'
import ZipCodeFormats from '../regex/zip'

export const getStateSchema = ({ state, country }) => {
  return ['US', 'CA'].indexOf(country) > -1
    ? Yup.string()
        .trim()
        .required('A state is required')
        .max(2, 'State/Province codes cannot be more than 2 characters long')
    : Yup.string().ensure()
}

export const getZipSchema = ({ zip, country }) => {
  return Yup.string()
    .trim()
    .max(ZipCodeFormats[country]['length'] || 99)
    .matches(ZipCodeFormats[country]['regex'])
}

function getAddressSchema(values) {
  return Yup.object().shape({
    address1: Yup.string()
      .trim()
      .max(255)
      .required(),
    address2: Yup.string()
      .trim()
      .max(255),
    city: Yup.string()
      .trim()
      .max(255),
    state: getStateSchema(values),
    zip: getZipSchema(values),
    country: Yup.string()
      .trim()
      .max(2)
  })
}

export function validateAddress(address) {
  const schema = getAddressSchema(address)
  try {
    schema.validateSync(address)
    return {}
  } catch (error) {
    return error
  }
}
