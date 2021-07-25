import { Field, Form, Formik } from 'formik';
import { Container } from './styles';
import { Button } from '@material-ui/core';
import { api } from '../../services/api';
import { Fornecedor } from '../Home/interfaces/fornecedor.interface';

export function Cadastro() {
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

          <Button
            type='submit'
            variant='contained'
            // color='#009845'
            size='large'
          >
            Cadastrar
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}
