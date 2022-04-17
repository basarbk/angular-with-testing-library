import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { fireEvent, render, screen } from '@testing-library/angular';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  describe('Default test setup', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        imports: [
          FormsModule
        ]
      }).compileComponents();
    });
    it('enables the button after clicking agreed', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const checkbox = compiled.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.click();
      fixture.detectChanges();
      const button = compiled.querySelector('button') as HTMLButtonElement;
      expect(button.disabled).toBeFalsy();
    })
  })

  describe('With testing-library', () => {
    it('enables the button after clicking agreed', async () => {
      await render(AppComponent, {
        imports: [ FormsModule ]
      });
      const checkbox = screen.getByLabelText('Agreed')
      fireEvent.click(checkbox)
      const button = screen.getByRole('button', { name: 'Submit'}) as HTMLButtonElement;
      expect(button.disabled).toBeFalsy();
    })
  })

});