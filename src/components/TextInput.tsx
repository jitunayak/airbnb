/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldApi, FormApi } from '@tanstack/react-form';
import { z } from 'zod';

import { styled } from '../stitches.config';
import { Column } from './Common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em style={{ color: 'red' }}>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

interface IProps {
  form: FormApi<any, any>;
  label?: string;
  name: string;
  placeholder?: string;
  validator: z.ZodString;
}

export const TextInput: React.FC<IProps> = ({
  form,
  label,
  name,
  placeholder,
  validator,
}) => {
  return (
    <Column>
      <form.Field
        children={(field) => (
          <>
            <InputWrapper isError={field.state.meta.touchedErrors.length > 0}>
              <label htmlFor="name" style={{ color: 'grey', fontSize: '14px' }}>
                {label}
              </label>
              <Input
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={placeholder}
                value={field.state.value}
              />
              {/* {charCount && (
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    marginLeft: '.6rem',
                  }}
                >
                  {field.state.value.length}
                </p>
              )} */}
            </InputWrapper>

            <FieldInfo field={field} />
          </>
        )}
        validators={{
          onChange: validator,
        }}
        name={name}
      />
    </Column>
  );
};

const InputWrapper = styled('div', {
  borderRadius: '6px',
  paddingBottom: '.6rem',
  paddingLeft: '.6rem',
  paddingTop: '.6rem',
  variants: {
    isError: {
      false: {
        '&:focus-within': {
          border: '1.5px solid black',
        },
        border: '1px solid #ccc',
      },
      true: {
        border: '1px solid red',
      },
    },
  },
  width: '100%',
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  fontSize: '20px',
  outline: 'none',
  pt: '.6rem',
  width: '100%',
});
