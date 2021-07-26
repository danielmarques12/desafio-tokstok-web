import { Field, Form, Formik } from 'formik';
import { Container } from './styles';
import { Button } from '@material-ui/core';
import { api } from '../../services/api';
import Modal from 'react-modal';
import { useState } from 'react';

export function Cadastro() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyles = {
    content: {
      background: '#fff',
      color: '#000',
      width: '375px',
      height: '150px',
      margin: 'auto',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '2rem',
      fontSize: '15px'
    },

    overlay: {
      background:
        'linear-gradient(rgba(255, 255, 255, 0.5), rgba(122, 122, 122, 0.5))'
    }
  };

  const handleModalClick = () => {
    document.location.reload();
  };

  return (
    <Container>
      <h1>Cadastrar um fornecedor</h1>
      <Formik
        initialValues={{
          nome: '',
          razao_social: '',
          cnpj: '',
          segmento: '',
          telefone: '',
          email: '',
          endereco: {
            cep: '',
            rua: '',
            numero: '',
            complemento: ''
          }
        }}
        onSubmit={async (values) => {
          await api.post('/fornecedores/create', values);
          setModalIsOpen(true);
        }}
      >
        <Form>
          <Field type='text' name='nome' placeholder='Nome'></Field>

          <Field
            type='text'
            name='razao_social'
            placeholder='Razão social'
          ></Field>

          <Field type='text' name='cnpj' placeholder='CNPJ'></Field>
          <Field type='text' name='segmento' placeholder='Segmento'></Field>
          <Field type='text' name='telefone' placeholder='Telefone'></Field>
          <Field type='email' name='email' placeholder='Email'></Field>
          <Field type='text' name='endereco.cep' placeholder='CEP'></Field>
          <Field type='text' name='endereco.rua' placeholder='Rua'></Field>

          <Field
            type='text'
            name='endereco.numero'
            placeholder='Número'
          ></Field>

          <Field
            type='text'
            name='endereco.complemento'
            placeholder='Complemento'
          ></Field>

          <Button type='submit' variant='contained' size='large'>
            Cadastrar
          </Button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={modalStyles}
            preventScroll
          >
            <h2>Fornecedor cadastrado!</h2>
            <Button
              style={{ height: '50px', marginTop: '5px' }}
              variant='contained'
              color='primary'
              fullWidth={true}
              size='large'
              onClick={handleModalClick}
            >
              Confirmar
            </Button>
          </Modal>
        </Form>
      </Formik>
    </Container>
  );
}
