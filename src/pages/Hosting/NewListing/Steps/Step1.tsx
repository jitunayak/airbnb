import { Column, Row, TextInput } from '@/components';
import { useApi } from '@/hooks';
import { styled } from '@stitches/react';
import { useForm } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';

import Amenities from '../Amenities';

const OnboardingFormStep1: React.FC = () => {
  const { roomsApi } = useApi();
  const navigate = useNavigate();

  const addRoomQuery = useMutation({ mutationFn: roomsApi.addRoom });

  const form = useForm({
    defaultValues: {
      address: '',
      amenities: [] as string[],
      description: '',
      images: [] as string[],
      name: '',
      price: '',
      propertyType: 'House',
      summary: '',
    },
    onSubmit: ({ value }) => {
      addRoomQuery.mutate({
        ...value,
        price: value.price.replace(/,/g, ''),
        userId: 'fada82b0-3101-42d3-9b7b-0b7b386a4c78',
      });

      console.log(value);
    },
    validatorAdapter: zodValidator,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      style={{ width: '100%' }}
    >
      <div style={{ width: '100%' }}>
        <Container>
          <Column>
            <div>
              <h1>Tell us more about your place</h1>
            </div>

            <Column style={{ gap: '1rem' }}>
              <label htmlFor="title">
                Title of your listing ( 5 - 100 characters )
              </label>
              <TextInput
                validator={z
                  .string()
                  .max(100, 'Title is too long ( max 100 characters )')
                  .min(5, 'Title is too short ( min 5 characters )')}
                form={form}
                label="Title"
                name="name"
              />
              <label>what makes it unique and what you love about it</label>
              <TextInput
                validator={z
                  .string()
                  .min(5, 'Description is too short ( min 5 characters )')}
                form={form}
                label="Description"
                name="description"
              />
              <label>short summary of your place, 100 characters max</label>
              <TextInput
                validator={z
                  .string()
                  .min(5, 'Title is too short ( min 5 characters )')
                  .max(100, 'Title is too long ( max 100 characters )')}
                form={form}
                label="Short summary"
                name="summary"
              />
            </Column>
          </Column>

          <SubHeading>Awesome pictures </SubHeading>
          <Column style={{ gap: '0.6rem' }}>
            <TextInput
              form={form}
              name="images[0]"
              placeholder="https://example.com/images/1.jpg"
              validator={z.string().url()}
            />
            <TextInput
              form={form}
              name="images[1]"
              placeholder="https://example.com/images/2.jpg"
              validator={z.string().url()}
            />
            <TextInput
              form={form}
              name="images[2]"
              placeholder="https://example.com/images/3.jpg"
              validator={z.string().url()}
            />
            <TextInput
              form={form}
              name="images[3]"
              placeholder="https://example.com/images/4.jpg"
              validator={z.string().url()}
            />
          </Column>

          <SubHeading>Now set pricing</SubHeading>
          <Column>
            <label htmlFor="name" style={{ color: 'grey', fontSize: '20px' }}>
              Price per night
            </label>
            <Row>
              <p style={{ fontSize: '62px', fontWeight: '600' }}>₹</p>
              <form.Field
                children={(field) => (
                  <>
                    <PriceInput
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9,]+$/.test(value)) {
                          field.handleChange(value);
                        } else {
                          field.handleChange('');
                        }
                      }}
                      value={Number(
                        field.state.value.replace(/,/g, '')
                      ).toLocaleString()}
                      name={field.name}
                      onBlur={field.handleBlur}
                      placeholder="2000"
                      prefix="₹"
                      type="string"
                    />
                  </>
                )}
                // validators={{
                //   onChange: z
                //     .string()
                //     .min(500, 'Price is too low ( min 500 )')
                //     .max(100000, 'Price is too high ( max 100000 )'),
                // }}
                name="price"
              />
            </Row>
            <p>* exclusive of platform charges</p>
          </Column>

          <SubHeading>Where is your place?</SubHeading>
          <Column style={{ marginBottom: '5rem' }}>
            <TextInput
              validator={z
                .string()
                .min(5, 'Address is too short ( min 5 characters )')}
              form={form}
              name="address"
              placeholder="Ooty, India"
            />
          </Column>

          <Amenities
            onSubmit={(amenities: string[]) =>
              form.setFieldValue('amenities', amenities)
            }
          />
        </Container>

        {<p>{addRoomQuery.error?.message}</p>}
        <BottomWrapper>
          <BackButton
            onClick={() => navigate({ to: '/hosting' })}
            type="button"
          >
            Cancel
          </BackButton>
          <NextButton
            disabled={addRoomQuery.isPending || addRoomQuery.isSuccess}
            isError={addRoomQuery.isError}
            isPending={addRoomQuery.isPending}
            isSuccess={addRoomQuery.isSuccess}
            type="submit"
          >
            {addRoomQuery.isPending ? 'Saving...' : ''}
            {addRoomQuery.isError ? 'Retry' : ''}
            {addRoomQuery.isSuccess ? 'Saved' : 'Save'}
          </NextButton>
        </BottomWrapper>
      </div>
    </form>
  );
};

export default OnboardingFormStep1;

const Container = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

const SubHeading = styled('p', {
  fontSize: '42px',
  fontWeight: '600',
  marginBottom: '1rem',
  marginTop: '5rem',
});

const PriceInput = styled('input', {
  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    appearance: 'none',
    margin: 0,
  },
  '&:focus': {
    color: 'black',
  },
  border: 'none',
  borderRadius: '4px',
  cursor: 'text',
  fontSize: '8rem',
  fontWeight: '900',
  outline: 'none',
  padding: '.6rem',
  width: '100%',
});
const NextButton = styled('button', {
  '&:hover': {
    opacity: '0.8',
  },
  backgroundColor: 'black',
  border: '1px solid black',
  color: 'white',
  fontSize: '16px',
  px: '1.8rem',
  py: '.8rem',
  variants: {
    isError: {
      true: {
        backgroundColor: 'red',
        border: '1px solid red',
      },
    },
    isPending: {
      true: {
        backgroundColor: 'blue',
        border: '1px solid blue',
      },
    },
    isSuccess: {
      true: {
        '&:hover': {
          opacity: '1',
        },
        backgroundColor: 'green',
        border: '1px solid green',
      },
    },
  },
});

const BackButton = styled('button', {
  '&:hover': {
    backgroundColor: '#eee',
  },
  backgroundColor: 'transparent',
  color: 'black',
  fontSize: '16px',
  px: '1.8rem',
  py: '.8rem',
  textDecoration: 'underline',
});

const BottomWrapper = styled('div', {
  backgroundColor: 'white',
  borderTop: '2px solid #eee',
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '1rem',
  padding: '1rem',
  position: 'fixed',
  width: '62%',
});
