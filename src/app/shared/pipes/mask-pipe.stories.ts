import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MaskPlacaPipe, MaskCpfPipe } from './mask-pipe'; 

const meta: Meta = {
  title: 'Pipes/Mascaras',
  decorators: [
    moduleMetadata({
      imports: [MaskPlacaPipe, MaskCpfPipe], // Importa ambos os pipes
    }),
  ],
};

export default meta;

// Story para Placa
export const ExemploPlaca: StoryObj = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; padding: 20px;">
        <p><strong>Placa Original:</strong> BRA2E19</p>
        <p><strong>Com Máscara:</strong> {{ 'BRA2E19' | maskPlaca }}</p>
      </div>
    `,
  }),
};

// Story para CPF
export const ExemploCpf: StoryObj = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; padding: 20px;">
        <p><strong>CPF Original:</strong> 12345678901</p>
        <p><strong>Com Máscara:</strong> {{ '12345678901' | maskCpf }}</p>
      </div>
    `,
  }),
};