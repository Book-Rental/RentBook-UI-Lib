import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../lib';
import { ModalHeader } from '../lib';
import { ModalBody } from '../lib';
import { ModalFooter } from '../lib';
import { Rb_Button } from '../lib';
import { Rb_Label } from '../lib';
import { Rb_Input } from '../lib';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },

  render: (args) => (
    <Modal
      {...args}
      onClose={() => console.log('Modal closed')}
    >
      <ModalHeader onClose={() => console.log('Modal closed')}>
        Login
      </ModalHeader>

      <ModalBody>
        <Rb_Label htmlFor="email">
          Email
        </Rb_Label>

        <Rb_Input
          id="email"
          placeholder="Enter email"
        />

        <Rb_Label htmlFor="password">
          Password
        </Rb_Label>

        <Rb_Input
          id="password"
          type="password"
          placeholder="Enter password"
        />
      </ModalBody>

      <ModalFooter>
        <Rb_Button
          variant="secondary"
          onClick={() => console.log('Cancel')}
        >
          Cancel
        </Rb_Button>

        <Rb_Button>
          Login
        </Rb_Button>
      </ModalFooter>
    </Modal>
  ),
};

export const HeaderAndBody: Story = {
  args: {
    isOpen: true,
  },

  render: (args) => (
    <Modal
      {...args}
      onClose={() => console.log('Modal closed')}
    >
      <ModalHeader onClose={() => console.log('Modal closed')}>
        About This Book
      </ModalHeader>

      <ModalBody>
        This book is available for rent for 7 days.
      </ModalBody>
    </Modal>
  ),
};

export const Confirmation: Story = {
  args: {
    isOpen: true,
  },

  render: (args) => (
    <Modal
      {...args}
      onClose={() => console.log('Modal closed')}
    >
      <ModalHeader onClose={() => console.log('Modal closed')}>
        Confirm Action
      </ModalHeader>

      <ModalBody>
        Are you sure you want to remove this book from your wishlist?
      </ModalBody>

      <ModalFooter>
        <Rb_Button variant="secondary">
          Cancel
        </Rb_Button>

        <Rb_Button>
          Continue
        </Rb_Button>
      </ModalFooter>
    </Modal>
  ),
};

export const BookDetails: Story = {
  args: {
    isOpen: true,
  },

  render: (args) => (
    <Modal
      {...args}
      onClose={() => console.log('Modal closed')}
    >
      <ModalHeader onClose={() => console.log('Modal closed')}>
        Book Details
      </ModalHeader>

      <ModalBody>
        <p><strong>Title:</strong> Atomic Habits</p>
        <p><strong>Author:</strong> James Clear</p>
        <p><strong>Rental Price:</strong> ₹59 / 7 days</p>
      </ModalBody>

      <ModalFooter>
        <Rb_Button>
          Rent Now
        </Rb_Button>
      </ModalFooter>
    </Modal>
  ),
};

export const WithoutHeader: Story = {
  args: {
    isOpen: true,
  },

  render: (args) => (
    <Modal
      {...args}
      onClose={() => console.log('Modal closed')}
    >
      <ModalBody>
        This story demonstrates the fallback close button when no
        <strong> ModalHeader </strong>
        is provided.
      </ModalBody>

      <ModalFooter>
        <Rb_Button>
          Close
        </Rb_Button>
      </ModalFooter>
    </Modal>
  ),
};