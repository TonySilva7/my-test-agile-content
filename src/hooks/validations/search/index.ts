import * as Yup from 'yup';

export const useSearchSchema = () => {
  return Yup.object({
    valueSearch: Yup.string()
      .required('Try looking for:')
      .max(40, 'Try with minus 40 characters.'),
  }).required();
};
