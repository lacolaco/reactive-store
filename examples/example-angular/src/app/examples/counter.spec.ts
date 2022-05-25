import { Type } from '@angular/core';
import { fireEvent, render, screen } from '@testing-library/angular';

export function defineCounterSpecs(componentType: Type<any>) {
  it('should render count value 0.', async () => {
    await render(componentType, {});
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('should render count value 1 after click Increment button.', async () => {
    await render(componentType, {});
    await fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 1')).toBeTruthy();
  });

  it('should render count value 0 after click Reset button.', async () => {
    await render(componentType, {});
    await fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    await fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByText('Count: 0')).toBeTruthy();
  });
}
