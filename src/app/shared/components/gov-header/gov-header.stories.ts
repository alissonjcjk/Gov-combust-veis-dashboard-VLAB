import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { GovHeader } from './gov-header';
import { provideRouter } from '@angular/router';
import { AccessibilityService } from '../../../core/services/accessibility.service';

const meta: Meta<GovHeader> = {
  title: 'Componentes/GovHeader',
  component: GovHeader,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]),
        AccessibilityService
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovHeader>;

export const Padrao: Story = {};

export const AltoContraste: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  play: async () => {
    // Aqui daria para simular o toque no botao de contraste
  }
};