import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const initialState = [
    { value: 11, id: 1, name: 'Ложка' },
    { value: 22, id: 2, name: 'Вилка' },
    { value: 33, id: 3, name: 'Тарелка' },
    { value: 44, id: 4, name: 'Стартовый набор минималиста' },
    { value: 55, id: 5, name: 'Ненужные вещи' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((count) => count.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const elementIndex = counters.findIndex((count) => count.id === counterId);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const elementIndex = counters.findIndex((count) => count.id === counterId);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };

  const hendleReset = () => setCounters(initialState);

  return (
    <div>
      <button onClick={hendleReset} className='btn btn-primary btn-sm m-2'>
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
