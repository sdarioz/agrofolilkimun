'use client';

import { useState } from 'react';
import Button from './Button';

export interface Props {
  initialValue?: number;
  max?: number;
  min?: number;
  onChange?: (quantity: number) => void;
  disabled?: boolean;
}

export default function QuantitySelector({
  initialValue = 1,
  max = 10,
  min = 1,
  onChange,
  disabled = false,
}: Props) {
  const [quantity, setQuantity] = useState(initialValue);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= min && newQuantity <= max) {
      setQuantity(newQuantity);
      if (onChange) {
        onChange(newQuantity);
      }
    }
  };

  return (
    <div className="join border border-base-300">
      <Button
        as="button"
        variant="ghost"
        className="join-item"
        onClick={() => updateQuantity(quantity - 1)}
        disabled={disabled || quantity <= min}
      >
        -
      </Button>
      <input
        type="number"
        className="input join-item w-16 text-center"
        value={quantity}
        onChange={(e) => updateQuantity(parseInt(e.target.value, 10))}
        disabled={disabled}
        min={min}
        max={max}
      />
      <Button
        as="button"
        variant="ghost"
        className="join-item"
        onClick={() => updateQuantity(quantity + 1)}
        disabled={disabled || quantity >= max}
      >
        +
      </Button>
    </div>
  );
}
