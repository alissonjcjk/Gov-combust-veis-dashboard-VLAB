import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MaskPlacaPipe } from './mask-pipe'; // Importando o nome correto detectado pelo erro

const meta: Meta = {
  title: 'Pipes/MaskPlacaPipe',
  decorators: [
    moduleMetadata({
      imports: [MaskPlacaPipe], // Importa o pipe standalone correto
    }),
  ],
};

export default meta;

export const ExemploPlaca: StoryObj = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; padding: 20px;">
        <p><strong>Original:</strong> BRA2E19</p>
        <p><strong>Com Máscara:</strong> {{ 'BRA2E19' | maskPlaca }}</p>
      </div>
    `,
  }),
};