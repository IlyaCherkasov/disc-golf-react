import { useState } from 'react';

import { sanitize } from 'dompurify';

import Breadcrumbs from 'components/Breadcrumbs';
import { createPost } from 'helpers/api';

import AdminFormLayout from '../common/AdminFormLayout';

const CreateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const inputs = [
    {
      value: code,
      onChange: setCode,
      label: 'Код',
      type: 'text',
      required: true,
    },
    {
      value: header,
      onChange: setHeader,
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      value: '',
      onChange: setText,
      label: 'Текст',
      type: 'tinymce',
      required: true,
    },
    {
      value: author,
      onChange: setAuthor,
      label: 'Автор',
      type: 'text',
      required: true,
    },
  ];

  const post = {
    code,
    header,
    text,
    author,
  };

  const onSubmit = async () => createPost(post);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Создание пост'
        actionNames={['Создание пост']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
        preview={
          <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <h1>{header}</h1>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
            />
            <i>©{author}</i>
          </div>
        }
      />
    </>
  );
};

export default CreateBlog;
