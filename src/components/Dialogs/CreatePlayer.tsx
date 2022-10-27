import { useState } from 'react';

import AdminFormLayout from 'components/Dialogs/AdminFormLayout';
import { createPlayer } from 'helpers/api';

interface CreatePlayerProps {
  onClose: () => void;
}

const CreatePlayer = ({ onClose }: CreatePlayerProps): JSX.Element => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rdgaNumber, setRdgaNumber] = useState('');
  const [rdgaRating, setRdgaRating] = useState('');
  const [rdgaRatingChange, setRdgaRatingChange] = useState('0');
  const [town, setTown] = useState('');
  const [email, setEmail] = useState('');
  const [pdgaNumber, setPdgaNumber] = useState('');
  const [pdgaRating, setPdgaRating] = useState('');
  const [metrixNumber, setMetrixNumber] = useState('');
  const [metrixRating, setMetrixRating] = useState('');
  const [priority, setPriority] = useState('0');

  const inputs = [
    {
      value: name,
      onChange: setName,
      label: 'Имя',
      type: 'text',
      required: true,
    },
    {
      value: surname,
      onChange: setSurname,
      label: 'Фамилия',
      type: 'text',
    },
    {
      value: rdgaNumber,
      onChange: setRdgaNumber,
      label: 'Номер РДГА',
      type: 'number',
      required: true,
    },
    {
      value: rdgaRating,
      onChange: setRdgaRating,
      label: 'Рейтинг РДГА',
      type: 'number',
    },
    {
      value: rdgaRatingChange,
      onChange: setRdgaRatingChange,
      label: 'Изменения рейтинга РДГА',
      type: 'number',
    },
    {
      value: town,
      onChange: setTown,
      label: 'Город',
      type: 'text',
      required: true,
    },
    {
      value: email,
      onChange: setEmail,
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      value: pdgaNumber,
      onChange: setPdgaNumber,
      label: 'Номер PDGA',
      type: 'number',
    },
    {
      value: pdgaRating,
      onChange: setPdgaRating,
      label: 'Рейтинг PDGA',
      type: 'number',
    },
    {
      value: metrixNumber,
      onChange: setMetrixNumber,
      label: 'Номер Metrix',
      type: 'number',
    },
    {
      value: metrixRating,
      onChange: setMetrixRating,
      label: 'Рейтинг Metrix',
      type: 'number',
    },
    {
      value: priority,
      onChange: setPriority,
      label: 'Приоритет (пока что не используется, на вырост)',
      type: 'number',
    },
  ];

  const onSubmit = async () => {
    const player = {
      name,
      surname: surname || null,
      rdgaNumber: Number(rdgaNumber),
      rdgaRating: Number(rdgaRating) || 0,
      rdgaRatingChange: Number(rdgaRatingChange) || 0,
      town,
      email,
      pdgaNumber: Number(pdgaNumber) || null,
      pdgaRating: Number(pdgaRating) || null,
      metrixNumber: Number(metrixNumber) || null,
      metrixRating: Number(metrixRating) || null,
      priority: Number(priority) || 0,
    } as Player;

    return createPlayer(player);
  };

  return (
    <AdminFormLayout
      header='Создание игрока'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default CreatePlayer;
