import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { getPost, updatePost } from 'helpers/api';
import PostCard from 'pages/Blog/PostCard';

import AdminFormLayout from '../common/AdminFormLayout';

const UpdateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [initialText, setInitialText] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const inputs = [
    {
      value: header,
      onChange: setHeader,
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      value: initialText,
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
    header,
    text,
    author,
  };

  const getBlogByCode = async () => {
    const response = await getPost(code);
    const json = await response.json();
    setHeader(json.header);
    setInitialText(json.text);
    setText(json.text);
    setAuthor(json.author);

    return response;
  };

  const onSubmit = async () => updatePost(post, code);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Обновление поста'
        actionNames={['Загрузить данные поста', 'Обновление поста']}
        forms={[
          [
            {
              value: code,
              onChange: setCode,
              label: 'Код',
              type: 'string',
              required: true,
            },
          ],
          inputs,
        ]}
        onSubmits={[getBlogByCode, onSubmit]}
        preview={
          <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <PostCard
              post={{ ...post, code, createdAt: new Date().toISOString() }}
              linkedHeader
            />
          </div>
        }
      />
    </>
  );
};

export default UpdateBlog;
