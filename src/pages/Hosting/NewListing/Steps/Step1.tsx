import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';

import { Column, Row } from '../../../../components/Common';
import TextInput from '../../../../components/TextInput';
import { styled } from '../../../../stitches.config';

const OnboardingFormStep1: React.FC = () => {
  const form = useForm({
    defaultValues: {
      address: '',
      description: '',
      images: [''],
      name: '',
      price: '',
      summary: '',
      type: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      alert('submitted');
    },
    validatorAdapter: zodValidator,
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <Container>
          <Column>
            <div>
              {/* <h4>Step 1</h4> */}
              <h1>Tell us more about your place</h1>
            </div>

            <Column style={{ gap: '1rem' }}>
              <TextInput
                validator={z
                  .string()
                  .max(32, 'Title is too long ( max 32 characters )')
                  .min(5, 'Title is too short ( min 5 characters )')}
                form={form}
                label="Title"
                name="name"
                placeholder="Title of your listing ( 5 - 32 characters )"
              />
              <TextInput
                validator={z
                  .string()
                  .min(5, 'Description is too short ( min 5 characters )')}
                form={form}
                label="Description"
                name="description"
                placeholder="Tell more about your place, what makes it unique and what you love about it"
              />
              <TextInput
                validator={z
                  .string()
                  .min(5, 'Title is too short ( min 5 characters )')
                  .max(100, 'Title is too long ( max 100 characters )')}
                form={form}
                label="Short summary"
                name="summary"
                placeholder="short summary of your place, 100 characters max"
              />
            </Column>
          </Column>

          <h1 style={{ marginTop: '5rem' }}>Awesome pictures </h1>
          <Column style={{ gap: '0.6rem' }}>
            <TextInput
              form={form}
              name="images[0]"
              placeholder="https://example.com/images/1.jpg"
              validator={z.string()}
            />
            <TextInput
              form={form}
              name="images[1]"
              placeholder="https://example.com/images/2.jpg"
              validator={z.string()}
            />
            <TextInput
              form={form}
              name="images[2]"
              placeholder="https://example.com/images/3.jpg"
              validator={z.string()}
            />
            <TextInput
              form={form}
              name="images[3]"
              placeholder="https://example.com/images/4.jpg"
              validator={z.string()}
            />
          </Column>

          <h1 style={{ marginTop: '5rem' }}>Let's set pricing</h1>
          <Column>
            <label htmlFor="name">Price per night</label>
            <Row>
              <p style={{ fontSize: '32px', fontWeight: '600' }}>₹</p>
              <form.Field
                children={(field) => (
                  <>
                    <PriceInput
                      value={Number(
                        field.state.value.replace(/,/g, '')
                      ).toLocaleString()}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
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
          </Column>

          <h2>Where is your place?</h2>
          <Column>
            <TextInput
              validator={z
                .string()
                .min(5, 'Address is too short ( min 5 characters )')}
              form={form}
              name="address"
              placeholder='"Ooty, India" '
            />
          </Column>
        </Container>
      </form>
      <BottomWrapper>
        <BackButton type="reset">Cancel</BackButton>
        <NextButton type="submit">Save & Exit</NextButton>
      </BottomWrapper>
    </>
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

const PriceInput = styled('input', {
  // '&:focus': {
  //   border: '2px solid black',
  // },
  // border: '1px solid #ccc',
  border: 'none',
  borderRadius: '4px',
  fontSize: '32px',
  fontWeight: '600',
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
  width: '100%',
});
