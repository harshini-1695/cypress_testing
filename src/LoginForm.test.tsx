import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import LoginForm from './components/LoginForm';

describe('Form Validation', () => {
    it('should display an error message when submitting without password', () => {
      render(<LoginForm />);
      
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(screen.getByText(/email and password fields are required/i)).toBeInTheDocument();
    });
  
    it('should display an error message when submitting without email', () => {
      render(<LoginForm />);
      
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(screen.getByText(/email and password fields are required/i)).toBeInTheDocument();
    });
  
    it('should display a success message when submitting with both fields filled', () => {
      render(<LoginForm />);
      
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(screen.getByText(/successfully logged in/i)).toBeInTheDocument();
    });
  });